#!/usr/bin/env node
/**
 * 内部平台统一调用器（多系统 + 交互式登录）。
 *
 * 鉴权设计：凭据不预置在文件里，而是由 Agent 在需要时向用户索取，
 * 通过命令行参数临时传入。脚本只缓存 token（连同 baseUrl 与登录用户名），
 * 绝不落地或回显密码。
 *
 * 登录契约由 systems.json 的 login 模板驱动，支持占位符：
 *   {{username}} {{password}} {{appKey}} {{appSecret}} {{token}}
 * 新增系统只需补一段配置，不必改代码。
 *
 * 配置读取优先级（高 → 低）：
 *   1. 命令行参数（--base-url / --username / --password / --login-path 等）
 *   2. 进程环境变量 SM_<系统ID大写>_<字段>
 *   3. 配置文件 ~/.proma/.internal-platform-api.env，其次技能目录 .env.local
 *
 * 首次调用会一次性列出所有缺失项；登录成功后只缓存 token，后续调用无需再提供输入。
 *
 * 用法：
 *   node scripts/api.mjs systems
 *   node scripts/api.mjs search 设备分页
 *   node scripts/api.mjs request social GET /auth/getInfo --base-url <地址> --username <账号> --password <密码>
 *   node scripts/api.mjs request 前台 GET /auth/getInfo          # 用角色名指定系统
 *   node scripts/api.mjs request admin POST /asset/list --base-url <地址> --login-path /admin/login --username <账号> --password <密码>
 *   node scripts/api.mjs request social GET /auth/getInfo --username <账号> --password <密码> --insecure
 *
 * 内网测试环境证书不受信时，Node fetch 会直接失败，用 --insecure 或 SM_INSECURE_TLS=1 放行（仅测试环境使用）。
 *
 * 退出码：0 成功；2 配置非法；3 登录失败（含地址/网络问题）；4 请求失败；5 索引缺失；
 *        6 未知系统；7 用法错误；10 需要用户提供输入（见 NEED_INPUT 行）
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { homedir } from 'node:os'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const skillRoot = resolve(here, '..')
const cacheDir = join(homedir(), '.proma', '.cache', 'internal-platform-api')
const envFile = join(homedir(), '.proma', '.internal-platform-api.env')

const registry = JSON.parse(readFileSync(join(skillRoot, 'systems.json'), 'utf8'))
const systems = registry.systems

/** 环境变量/配置文件支持的字段；命令行参数通过 CLI_FLAGS 映射到同名小写键 */
const FIELDS = ['BASE_URL', 'USERNAME', 'PASSWORD', 'APP_KEY', 'APP_SECRET', 'TOKEN', 'HEADERS']

/** 命令行参数 → 配置字段名 */
const CLI_FLAGS = {
  '--base-url': 'baseUrl',
  '--username': 'username',
  '--password': 'password',
  '--password-stdin': 'passwordStdin',
  '--app-key': 'appKey',
  '--app-secret': 'appSecret',
  '--token': 'token',
  '--headers': 'headers',
  '--login-path': 'loginPath',
  '--login-method': 'loginMethod',
  '--token-path': 'tokenPath'
}

/** 占位符 → 配置字段、命令行参数与展示名，用于精确报告缺失项 */
const CREDENTIAL_META = {
  username: { configKey: 'username', overrideKey: 'username', flag: '--username', label: '登录用户名' },
  password: { configKey: 'password', overrideKey: 'password', flag: '--password', label: '登录密码' },
  appKey: { configKey: 'app_key', overrideKey: 'appKey', flag: '--app-key', label: 'App-Key' },
  appSecret: { configKey: 'app_secret', overrideKey: 'appSecret', flag: '--app-secret', label: 'App-Secret' }
}

const EXIT = { CONFIG: 2, LOGIN: 3, REQUEST: 4, INDEX: 5, SYSTEM: 6, USAGE: 7, NEED_INPUT: 10 }

function parseEnvFile(path) {
  const out = {}
  if (!existsSync(path)) return out
  for (const line of readFileSync(path, 'utf8').split(/\r?\n/)) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eq = trimmed.indexOf('=')
    if (eq <= 0) continue
    const key = trimmed.slice(0, eq).trim()
    let value = trimmed.slice(eq + 1).trim()
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }
    out[key] = value
  }
  return out
}

function toCamel(field) {
  return field
    .toLowerCase()
    .split('_')
    .map((part, i) => (i === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)))
    .join('')
}

/** 读取该系统的 token 缓存文件原文，不做过期与身份校验 */
function readCacheRaw(systemId) {
  const file = join(cacheDir, `${systemId}.json`)
  if (!existsSync(file)) return null
  try {
    return JSON.parse(readFileSync(file, 'utf8'))
  } catch {
    return null
  }
}

/**
 * 归一化接口地址。
 *
 * 内部平台的前端 SPA 目录（如 /social_web_v2、/platform_admin）与接口共用域名，
 * 但把 SPA 路径当接口地址会命中 nginx 的静态文件 location，登录请求会返回 405 的 HTML。
 * 这里按 systems.json 的 frontendPrefixes 剥掉已知前端前缀，并提示调用方。
 */
function normalizeBaseUrl(system, raw) {
  const url = String(raw ?? '').trim().replace(/\/+$/, '')
  if (!url) return ''
  for (const prefix of system.frontendPrefixes ?? []) {
    const suffix = `/${prefix}`
    if (url.toLowerCase().endsWith(suffix.toLowerCase())) {
      const stripped = url.slice(0, -suffix.length).replace(/\/+$/, '')
      console.error(
        `提示：地址 ${url} 指向${system.label}的前端页面，已改用接口根 ${stripped}（该页面路径不接受接口请求）`
      )
      return stripped
    }
  }
  return url
}

function loadSystemConfig(system, shared, overrides) {
  const prefix = `SM_${system.id.toUpperCase()}_`
  const config = {}
  for (const field of FIELDS) {
    const key = field.toLowerCase() // base_url / username / password / app_key / app_secret / token / headers
    config[key] = overrides[toCamel(field)] ?? process.env[prefix + field] ?? shared[prefix + field] ?? ''
  }
  config.loginPath = overrides.loginPath ?? ''
  config.loginMethod = overrides.loginMethod ?? ''
  config.tokenPath = overrides.tokenPath ?? ''

  config.baseUrl = normalizeBaseUrl(system, config.base_url)
  // 地址未配置时沿用上次登录缓存的地址，这样首次登录后后续调用无需再提供地址
  if (!config.baseUrl) {
    const cached = readCacheRaw(system.id)
    if (cached?.baseUrl) config.baseUrl = normalizeBaseUrl(system, cached.baseUrl)
  }
  if (config.headers) {
    try {
      config.headerMap = JSON.parse(config.headers)
    } catch {
      console.error(`${prefix}HEADERS 不是合法 JSON，请检查配置`)
      process.exit(EXIT.CONFIG)
    }
  }
  return config
}

function redact(text) {
  return String(text)
    .replace(/("token"\s*:\s*")[^"]+/g, '$1***')
    .replace(/(Authorization[^\w]*)[\w.-]+/gi, '$1***')
    .replace(/(App-Secret[^\w]*)[\w.-]+/gi, '$1***')
    .replace(/(password[^\w]*)[^\s",}]+/gi, '$1***')
}

/**
 * 展开 fetch 的底层原因。
 *
 * undici 把网络层错误统一报成 "fetch failed"，真正的 DNS/连接错误藏在 err.cause 里；
 * 不展开会让内网环境的问题无从排查。
 */
function describeFetchError(err) {
  const head = redact(err?.message ?? String(err))
  const cause = err?.cause
  if (!cause) return head
  const detail = [cause.message, cause.code, cause.errno].filter(Boolean).join(' ')
  return detail ? `${head}（${redact(detail)}）` : head
}

function renderTemplate(input, vars) {
  if (typeof input === 'string') {
    return input.replace(/\{\{(\w+)\}\}/g, (_, key) => (vars[key] === undefined ? '' : String(vars[key])))
  }
  if (Array.isArray(input)) return input.map((item) => renderTemplate(item, vars))
  if (input && typeof input === 'object') {
    const out = {}
    for (const [k, v] of Object.entries(input)) out[k] = renderTemplate(v, vars)
    return out
  }
  return input
}

/** 登录契约里用到了哪些占位符（token 由登录产生，不算输入项） */
function collectPlaceholders(system) {
  const login = system.login ?? {}
  const text = JSON.stringify(login.headers ?? {}) + JSON.stringify(login.body ?? {}) + String(system.authValue ?? '')
  const needed = new Set()
  for (const match of text.matchAll(/\{\{(\w+)\}\}/g)) {
    if (match[1] !== 'token') needed.add(match[1])
  }
  return needed
}

function authNeeded(system) {
  return Boolean(String(system.authValue ?? '').trim())
}

/**
 * 还原 Git Bash（MSYS）对以 `/` 开头参数的路径改写。
 *
 * MSYS 会把 `/mcc/api/device/count` 这类参数当成 Unix 路径翻译成
 * `C:/Program Files/Git/mcc/api/device/count`，拼进 URL 后主机名解析失败
 * （表现为 fetch failed / getaddrinfo ENOTFOUND）。这里识别改写后的形态并还原。
 */
function repairMsysPath(raw) {
  const matched = /^[A-Za-z]:[\\/].*?[\\/]Git[\\/](.+)$/i.exec(raw)
  if (!matched) return raw
  const repaired = '/' + matched[1].replace(/\\/g, '/')
  console.error(
    `提示：参数 ${raw} 被 Git Bash 的路径转换改写，已还原为 ${repaired}（命令前加 MSYS_NO_PATHCONV=1 可避免）`
  )
  return repaired
}

/** 规范化接口路径：兼容不带前导斜杠的写法，并修复 Git Bash 的改写 */
function normalizePath(raw) {
  let value = repairMsysPath(String(raw ?? '').trim())
  if (!value) return ''
  if (!value.startsWith('/')) value = '/' + value
  return value
}

function effectiveLoginPath(system, config) {
  return normalizePath(config.loginPath || system.login?.path || '')
}

/** 缓存中的 token 是否仍可用于当前配置 */
function readCache(system, config) {
  const cached = readCacheRaw(system.id)
  if (!cached) return null
  if (!config.baseUrl || cached.baseUrl !== config.baseUrl) return null
  if (!cached.token || Number(cached.expiresAt) <= Date.now()) return null
  return cached
}

function hasUsableToken(system, config) {
  const cached = readCache(system, config)
  if (!cached) return false
  // 提供了不同账号时视为需要重新登录
  return !config.username || cached.username === config.username
}

/** 输出机器可读的「需要用户输入」信号，并退出 */
function needInput(system, missing, hints) {
  const role = system.roleLabel ?? ''
  console.error(`NEED_INPUT system=${system.id} role=${role} label=${system.label}`)
  console.error(`缺失项：${missing.join('、')}`)
  console.error('请向用户索取下列信息后重试：')
  for (const hint of hints.filter(Boolean)) console.error(`  - ${hint}`)
  process.exit(EXIT.NEED_INPUT)
}

/**
 * 统一预检：一次性汇总所有缺失项，避免让用户分多轮提供。
 * 已有可用 token 时（且未强制重新登录）视为无需输入。
 */
function preflight(system, config, retryHint) {
  if (authNeeded(system) && !config.forceLogin && hasUsableToken(system, config)) return

  const role = system.roleLabel ?? ''
  const missing = []
  const hints = []

  if (!config.baseUrl) {
    missing.push('接口地址')
    hints.push(`向用户索取${role}「${system.label}」的接口地址（形如 https://host，不要带结尾斜杠）`)
  }

  if (authNeeded(system)) {
    if (!effectiveLoginPath(system, config)) {
      missing.push('登录接口路径')
      hints.push(`向用户索取${role}「${system.label}」的登录接口路径（形如 /admin/login）与请求方法`)
    }
    for (const key of collectPlaceholders(system)) {
      const meta = CREDENTIAL_META[key]
      if (!meta) continue
      if (!config[meta.configKey]) {
        missing.push(meta.label)
        hints.push(
          key === 'password'
            ? `${meta.label}：用 ${meta.flag} <密码> 传入，更谨慎时可用 --password-stdin`
            : `${meta.label}：用 ${meta.flag} <值> 传入`
        )
      }
    }
  }

  if (missing.length > 0) {
    if (retryHint) hints.push(`重试时附加参数：${retryHint}`)
    needInput(system, missing, hints)
  }
}

/**
 * 内网测试环境常用自签名或不受信证书，Node fetch 会直接报 fetch failed。
 * 仅在用户显式要求（--insecure 或 SM_INSECURE_TLS=1）时关闭校验，并打印警告。
 */
function enableInsecureTlsIfRequested(args, shared) {
  const requested = args?.insecure === true || process.env.SM_INSECURE_TLS === '1' || shared?.SM_INSECURE_TLS === '1'
  if (!requested) return
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
  console.error('警告：已关闭 TLS 证书校验（--insecure / SM_INSECURE_TLS=1），仅应在内网测试环境使用')
}

async function httpJson(url, options, timeoutMs) {
  const response = await fetch(url, { ...options, signal: AbortSignal.timeout(timeoutMs) })
  const text = await response.text()
  let payload = null
  try {
    payload = text ? JSON.parse(text) : null
  } catch {
    payload = { __raw: text }
  }
  return { status: response.status, payload }
}

function readTokenByPath(payload, path) {
  if (!path) return null
  let cur = payload
  for (const seg of String(path).split('.')) {
    if (cur === null || cur === undefined) return null
    cur = cur[seg]
  }
  return cur ?? null
}

/**
 * 按系统配置的 login 契约登录并换取 token。
 * 凭据来自命令行/环境变量/配置文件，绝不写入磁盘；只缓存 token。
 */
async function acquireAuth(system, config, { quiet = false } = {}) {
  if (!authNeeded(system)) return null

  const login = system.login ?? {}
  const loginPath = effectiveLoginPath(system, config)
  if (!loginPath) {
    needInput(system, ['登录接口路径'], [`向用户索取${system.roleLabel ?? ''}「${system.label}」的登录接口路径`])
  }

  const vars = {
    username: config.username,
    password: config.password,
    appKey: config.app_key,
    appSecret: config.app_secret
  }
  const method = String(config.loginMethod || login.method || 'POST').toUpperCase()
  const headers = { 'Content-Type': 'application/json', ...renderTemplate(login.headers ?? {}, vars) }
  const body = renderTemplate(login.body ?? {}, vars)
  const options = { method, headers }
  if (method !== 'GET' && method !== 'HEAD') options.body = JSON.stringify(body)

  const loginUrl = config.baseUrl + loginPath
  let result
  try {
    result = await httpJson(loginUrl, options, 20000)
  } catch (err) {
    console.error(
      `${system.roleLabel ?? ''}「${system.label}」登录请求未能完成（地址或网络问题）：${describeFetchError(err)}`
    )
    console.error(`登录请求：${method} ${loginUrl}`)
    console.error(`请确认接口地址是否正确：${config.baseUrl || '（未提供）'}`)
    process.exit(EXIT.LOGIN)
  }

  const token = readTokenByPath(result.payload, config.tokenPath || login.tokenPath || 'token')
  if (result.status < 200 || result.status >= 300 || !token) {
    console.error(
      `${system.roleLabel ?? ''}「${system.label}」登录失败：HTTP ${result.status} ${redact(JSON.stringify(result.payload)).slice(0, 300)}`
    )
    console.error(`登录请求：${method} ${loginUrl}`)
    // 网关对前端页面 location 常直接回 405/404 的 HTML，而不是接口的 JSON 错误码
    if (result.status === 405 || /<html/i.test(JSON.stringify(result.payload ?? ''))) {
      console.error(
        '该地址返回的是网关或页面错误而非接口响应，通常是把前端页面地址当成了接口地址；接口地址只保留协议与域名。'
      )
    }
    process.exit(EXIT.LOGIN)
  }

  mkdirSync(cacheDir, { recursive: true })
  writeFileSync(
    join(cacheDir, `${system.id}.json`),
    JSON.stringify(
      { baseUrl: config.baseUrl, username: config.username, token, expiresAt: Date.now() + 25 * 60 * 1000 },
      null,
      2
    ),
    'utf8'
  )
  if (!quiet) console.log(`${system.roleLabel ?? ''}「${system.label}」登录成功，token 已缓存（密码未落盘）`)
  return token
}

async function getToken(system, config, { force = false } = {}) {
  if (force) return acquireAuth(system, config, { quiet: true })
  if (hasUsableToken(system, config)) return readCache(system, config).token
  return acquireAuth(system, config, { quiet: true })
}

function buildHeaders(system, config, token) {
  const headers = { 'Content-Type': 'application/json' }
  if (config.headerMap) Object.assign(headers, config.headerMap)
  if (token) {
    headers[system.authHeader || 'Authorization'] = renderTemplate(system.authValue ?? '{{token}}', { token })
  }
  return headers
}

/** 分页响应列表键：RuoYi 用 rows，社媒平台用 records；统一取用 */
function extractPageRows(payload) {
  const data = payload?.data
  if (Array.isArray(data?.rows)) return data.rows
  if (Array.isArray(data?.records)) return data.records
  return []
}

async function request(system, config, { method, path, query = {}, body, all = false }) {
  const buildUrl = (q) => {
    const url = new URL(config.baseUrl + path)
    for (const [k, v] of Object.entries(q)) {
      if (v !== undefined && v !== null && v !== '') url.searchParams.set(k, String(v))
    }
    return url.toString()
  }

  const send = async (token) => {
    try {
      return await httpJson(
        buildUrl(query),
        {
          method,
          headers: buildHeaders(system, config, token),
          body: body === undefined ? undefined : JSON.stringify(body)
        },
        30000
      )
    } catch (err) {
      console.error(`请求未能完成（地址或网络问题）：${describeFetchError(err)}`)
      process.exit(EXIT.REQUEST)
    }
  }

  let token = await getToken(system, config)
  let { status, payload } = await send(token)

  // token 失效：强制重新登录一次
  if (status === 401 || status === 403) {
    token = await acquireAuth(system, { ...config, forceLogin: true }, { quiet: true })
    ;({ status, payload } = await send(token))
  }

  if (status < 200 || status >= 300) {
    console.error(`请求失败：HTTP ${status} ${redact(JSON.stringify(payload)).slice(0, 500)}`)
    process.exit(EXIT.REQUEST)
  }

  if (!all) return payload

  // 保留原响应的列表键名，避免把 records 覆盖成 rows
  const pageKey = Array.isArray(payload?.data?.records) ? 'records' : 'rows'
  const rows = extractPageRows(payload).slice()
  let total = Number(payload?.data?.total ?? payload?.total ?? rows.length) || rows.length
  let page = Number(query.pageNum ?? 1) + 1
  while (rows.length < total && page <= 100) {
    // 必须先更新页码再发请求，否则每轮都会重新取第一页
    query = { ...query, pageNum: page }
    const next = await send(await getToken(system, config))
    const nextRows = extractPageRows(next.payload)
    if (nextRows.length === 0) break
    rows.push(...nextRows)
    total = Number(next.payload?.data?.total ?? total) || total
    page++
  }
  return { ...payload, data: { ...(payload?.data ?? {}), [pageKey]: rows, total } }
}

function findSystem(idOrRole) {
  const key = String(idOrRole ?? '').trim()
  const hit =
    systems.find((s) => s.id === key) ??
    systems.find((s) => s.roleLabel === key) ??
    // 允许用角色名的一部分指定，如「前台」对应「前台系统」
    systems.find((s) => key && String(s.roleLabel ?? '').startsWith(key))
  if (!hit) {
    console.error(`未知系统：${key}`)
    console.error(`可用系统：${systems.map((s) => `${s.id}（${s.roleLabel ?? ''}「${s.label}」）`).join('、')}`)
    process.exit(EXIT.SYSTEM)
  }
  if (key !== hit.id) console.error(`提示：已将「${key}」识别为${hit.roleLabel ?? ''}「${hit.label}」（系统 ID：${hit.id}）`)
  return hit
}

function searchIndex(keyword) {
  const indexPath = join(skillRoot, 'references', 'index.md')
  if (!existsSync(indexPath)) {
    console.error(`索引不存在：${indexPath}，请先运行 scripts/gen-references.mjs`)
    process.exit(EXIT.INDEX)
  }
  const needle = String(keyword ?? '').toLowerCase()
  if (!needle) {
    console.error('用法：scripts/api.mjs search <关键词>')
    process.exit(EXIT.USAGE)
  }
  const hits = readFileSync(indexPath, 'utf8')
    .split(/\r?\n/)
    .filter((line) => line.startsWith('|') && !line.startsWith('| 系统') && line.toLowerCase().includes(needle))
  if (hits.length === 0) {
    console.log(`未命中：${keyword}`)
    return
  }
  console.log(hits.slice(0, 40).join('\n'))
  if (hits.length > 40) console.log(`…… 共 ${hits.length} 条命中，已截断前 40 条`)
}

function parseArgs(argv) {
  const out = { query: [], overrides: {}, rest: [] }
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === '--query') out.query.push(argv[++i])
    else if (arg === '--json') out.body = argv[++i]
    else if (arg === '--body-file') out.body = readFileSync(argv[++i], 'utf8')
    else if (arg === '--all') out.all = true
    else if (arg === '--force-login') out.forceLogin = true
    else if (arg === '--insecure') out.insecure = true
    else if (arg in CLI_FLAGS) {
      const value = argv[++i]
      if (CLI_FLAGS[arg] === 'passwordStdin') out.passwordStdin = true
      else out.overrides[CLI_FLAGS[arg]] = value
    } else out.rest.push(arg)
  }
  out.queryObj = {}
  for (const pair of out.query) {
    const eq = pair.indexOf('=')
    if (eq > 0) out.queryObj[pair.slice(0, eq)] = pair.slice(eq + 1)
  }
  return out
}

/** 密码可从 stdin 读取，避免出现在命令行文本中 */
function resolvePasswordFromStdin(args) {
  if (!args.passwordStdin) return args
  let text = ''
  try {
    text = readFileSync(0, 'utf8')
  } catch {
    console.error('无法从标准输入读取密码（--password-stdin）')
    process.exit(EXIT.USAGE)
  }
  args.overrides.password = text.split(/\r?\n/)[0]
  return args
}

/** 构造「重试时该加什么参数」的提示，凭据只给参数名，不暴露明文 */
function buildRetryHint(system, args, method, path) {
  const needed = collectPlaceholders(system)
  const credentialArgs = Object.entries(CREDENTIAL_META)
    .filter(([key, meta]) => needed.has(key) && !args.overrides[meta.overrideKey])
    .map(([, meta]) => `${meta.flag} <${meta.label}>`)
  return [
    'scripts/api.mjs',
    'request',
    system.id,
    method.toUpperCase(),
    path,
    ...Object.entries(args.queryObj).map(([k, v]) => `--query ${k}=${v}`),
    args.overrides.baseUrl ? '' : '--base-url <地址>',
    ...credentialArgs
  ]
    .filter(Boolean)
    .join(' ')
}

async function main() {
  const argv = process.argv.slice(2)
  const command = argv[0]
  // 配置文件读一次复用；用户级文件优先于本地联调文件
  const shared = { ...parseEnvFile(join(skillRoot, '.env.local')), ...parseEnvFile(envFile) }

  if (command === 'systems') {
    for (const s of systems) {
      const config = loadSystemConfig(s, shared, {})
      const prefix = `SM_${s.id.toUpperCase()}_`
      console.log(`${s.id}  ${s.roleLabel ?? ''}「${s.label}」`)
      console.log(`  用途：${s.skillHint}`)
      console.log(`  登录：${effectiveLoginPath(s, config) || '（待用户提供）'}`)
      console.log(`  地址：${config.baseUrl || `（未配置，需 ${prefix}BASE_URL）`}`)
      if (authNeeded(s) && hasUsableToken(s, config)) console.log('  状态：已有缓存 token，可直接调用')
    }
    return
  }

  if (command === 'search') {
    searchIndex(argv.slice(1).join(' '))
    return
  }

  if (command === 'login') {
    const system = findSystem(argv[1])
    const args = resolvePasswordFromStdin(parseArgs(argv.slice(1)))
    enableInsecureTlsIfRequested(args, shared)
    const config = loadSystemConfig(system, shared, args.overrides)
    config.forceLogin = true
    preflight(system, config, `scripts/api.mjs login ${system.id} --base-url <地址> --username <账号> --password <密码>`)
    await acquireAuth(system, config)
    return
  }

  if (command === 'request') {
    const system = findSystem(argv[1])
    const args = resolvePasswordFromStdin(parseArgs(argv.slice(2)))
    enableInsecureTlsIfRequested(args, shared)
    const [method, rawPath] = args.rest
    const path = normalizePath(rawPath)
    if (!method || !path) {
      console.error('用法：node scripts/api.mjs request <系统ID或角色> <METHOD> <PATH> [--query k=v] [--json ...] [--all] [--insecure]')
      console.error('交互式登录参数：--base-url <地址> --username <账号> --password <密码> [--app-key <key>] [--app-secret <secret>]')
      process.exit(EXIT.USAGE)
    }
    const config = loadSystemConfig(system, shared, args.overrides)
    config.forceLogin = args.forceLogin === true

    preflight(system, config, buildRetryHint(system, args, method, path))

    const payload = await request(system, config, {
      method: method.toUpperCase(),
      path,
      query: args.queryObj,
      body: args.body === undefined ? undefined : JSON.parse(args.body),
      all: args.all === true
    })
    console.log(JSON.stringify(payload, null, 2))
    return
  }

  console.error('可用子命令：systems | search | login | request')
  process.exit(EXIT.USAGE)
}

main().catch((err) => {
  console.error(redact(err?.message ?? String(err)))
  process.exit(1)
})

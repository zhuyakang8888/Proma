#!/usr/bin/env node
/**
 * 从各系统的 YApi 导出清单生成 skill 的 references/ 文档。
 *
 * 设计要点：
 * - 系统与归域规则全部由 systems.json 驱动，新增系统不用改本文件。
 * - 索引条数必须等于接口总数，计数对不上直接报错退出，避免归域漏数据。
 * - 跨系统重复的「方法+路径」会在索引里标注，提示模型两者都存在。
 *
 * 用法：
 *   node scripts/gen-references.mjs            # 生成全部系统
 *   node scripts/gen-references.mjs social     # 只生成指定系统
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const skillRoot = resolve(here, '..')
// 结构为 <repo>/apps/electron/default-skills/<skill>/，向上四级到仓库根
const repoRoot = resolve(skillRoot, '..', '..', '..', '..')
const outDir = join(skillRoot, 'references')

const registry = JSON.parse(readFileSync(join(skillRoot, 'systems.json'), 'utf8'))
const only = process.argv[2]
const systems = only ? registry.systems.filter((s) => s.id === only) : registry.systems
if (systems.length === 0) {
  console.error(`systems.json 中没有 id 为 ${only} 的系统`)
  process.exit(1)
}

/** 把 YApi 里的 HTML 说明压成纯文本 */
function htmlToText(html) {
  return String(html ?? '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/(p|div|li|tr)>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function parseSchema(raw) {
  if (!raw || typeof raw !== 'string') return null
  try {
    return JSON.parse(raw)
  } catch {
    return null
  }
}

function renderProperties(schema) {
  const props = schema?.properties
  if (!props || typeof props !== 'object') return []
  const required = Array.isArray(schema.required) ? schema.required : []
  return Object.entries(props).map(([name, def]) => {
    let type = typeof def?.type === 'string' ? def.type : 'object'
    if (Array.isArray(def?.enum)) type = `enum(${def.enum.join('/')})`
    if (def?.type === 'array' && def?.items?.type) type = `array<${def.items.type}>`
    const desc = htmlToText(def?.description ?? def?.default ?? '').replace(/\n+/g, ' ')
    return { name, type, required: required.includes(name), desc }
  })
}

function renderParamTable(rows) {
  if (rows.length === 0) return ''
  const head = '| 参数 | 类型 | 必填 | 说明 |\n| --- | --- | --- | --- |\n'
  const body = rows
    .map((r) => `| \`${r.name}\` | ${r.type} | ${r.required ? '是' : '否'} | ${(r.desc || '-').replace(/\|/g, '\\|')} |`)
    .join('\n')
  return head + body + '\n'
}

function renderEndpoint(api) {
  const method = String(api.method ?? 'GET').toUpperCase()
  const path = String(api.path ?? '')
  const lines = [`### ${method} ${path}`, '']
  if (api.title) lines.push(`**标题**：${htmlToText(api.title)}`, '')
  lines.push(`**所属分类**：${api.__category}`, '')

  const headers = (api.req_headers ?? []).map((h) => ({
    name: h.name,
    type: 'string',
    required: String(h.required ?? '') === '1',
    desc: [h.value ? `示例 ${h.value}` : '', htmlToText(h.desc)].filter(Boolean).join('；')
  }))
  if (headers.length > 0) lines.push('**请求头**', '', renderParamTable(headers))

  const pathParams = (api.req_params ?? [])
    .filter((p) => p && p.name && !String(p.name).startsWith('_'))
    .map((p) => ({
      name: p.name,
      type: 'string',
      required: true,
      desc: htmlToText(p.desc ?? p.example ?? '')
    }))
  if (pathParams.length > 0) lines.push('**路径参数**', '', renderParamTable(pathParams))

  const query = (api.req_query ?? [])
    .filter((q) => q && q.name && !String(q.name).startsWith('_'))
    .map((q) => ({
      name: q.name,
      type: 'string',
      required: String(q.required ?? '') === '1',
      desc: htmlToText(q.desc ?? q.example ?? '')
    }))
  if (query.length > 0) lines.push('**Query 参数**', '', renderParamTable(query))

  const bodySchema = parseSchema(api.req_body_other)
  const bodyRows = renderProperties(bodySchema)
  if (bodyRows.length > 0) {
    const desc = htmlToText(bodySchema?.description ?? '')
    lines.push(`**请求体**（${api.req_body_type ?? 'json'}${desc ? '，' + desc : ''}）`, '', renderParamTable(bodyRows))
  } else if ((api.req_body_form ?? []).length > 0) {
    const formRows = (api.req_body_form ?? []).map((f) => ({
      name: f.name,
      type: f.type ?? 'string',
      required: String(f.required ?? '') === '1',
      desc: htmlToText(f.desc ?? f.example ?? '')
    }))
    lines.push('**请求体**（form）', '', renderParamTable(formRows))
  } else if (typeof api.req_body_other === 'string' && api.req_body_other.trim() && !bodySchema) {
    // 非 JSON Schema 的请求体（导出里是自由文本）：原样保留并截断，避免信息丢失
    const raw = api.req_body_other.trim()
    lines.push('**请求体**（非结构化，原样保留）', '', '```json', raw.slice(0, 2000), raw.length > 2000 ? '…… 已截断' : '', '```', '')
  }

  const resRows = renderProperties(parseSchema(api.res_body))
  if (resRows.length > 0) lines.push('**响应顶层字段**', '', renderParamTable(resRows))

  const note = htmlToText(api.markdown)
  if (note) lines.push('**说明**', '', note, '')

  return lines.join('\n')
}

// ---- 读取各系统接口清单 ----
const loaded = []
let total = 0
for (const system of systems) {
  const input = resolve(repoRoot, system.input)
  let raw
  try {
    raw = JSON.parse(readFileSync(input, 'utf8'))
  } catch (err) {
    console.error(`读取 ${system.label} 的接口清单失败：${input}\n${err.message}`)
    process.exit(1)
  }

  const pickDomain = (path) => {
    const seg = String(path).split('/').filter(Boolean)[0] ?? ''
    const hit = system.domains.find((d) => !d.fallback && (d.prefixes ?? []).includes(seg))
    return hit ?? system.domains.find((d) => d.fallback) ?? system.domains[0]
  }

  const buckets = new Map(system.domains.map((d) => [d.file, []]))
  const endpoints = []
  for (const category of raw) {
    for (const api of (category.list ?? [])) {
      const domain = pickDomain(api.path)
      const item = { ...api, __category: category.name, __system: system }
      buckets.get(domain.file).push(item)
      endpoints.push(item)
    }
  }
  total += endpoints.length
  loaded.push({ system, endpoints, buckets, raw })
}

mkdirSync(outDir, { recursive: true })

// ---- 统一索引：跨系统共享一份，标注归属与重复 ----
const owner = new Map()
for (const { endpoints, system } of loaded) {
  for (const e of endpoints) {
    const key = `${String(e.method ?? 'GET').toUpperCase()} ${e.path}`
    if (!owner.has(key)) owner.set(key, [])
    owner.get(key).push(system.id)
  }
}

const indexLines = [
  '# 接口总索引',
  '',
  ...loaded.map(({ system, endpoints, raw }) => `- **${system.label}**（\`${system.id}\`，${raw.length} 个分类 / ${endpoints.length} 个接口）`),
  '',
  `合计 **${total}** 个接口条目。`,
  '',
  '检索方式：按关键词（中文标题、路径片段、业务名词）定位到 `METHOD /path`，再打开「明细文件」读参数与响应。',
  '若某行标注「两系统同路径」，说明两个系统都提供了同名接口，调用前先确认目标系统（见 SKILL.md 的系统选择）。',
  '',
  '| 系统 | 方法 | 路径 | 标题 | 明细文件 |',
  '| --- | --- | --- | --- | --- |'
]

const all = loaded
  .flatMap(({ endpoints, system }) =>
    endpoints.map((e) => {
      const file = system.domains.find((d) => !d.fallback && (d.prefixes ?? []).includes(String(e.path).split('/').filter(Boolean)[0] ?? ''))
      const target = file ?? system.domains.find((d) => d.fallback) ?? system.domains[0]
      const key = `${String(e.method ?? 'GET').toUpperCase()} ${e.path}`
      const dup = owner.get(key).length > 1
      return {
        system,
        method: String(e.method ?? 'GET').toUpperCase(),
        path: e.path,
        title: htmlToText(e.title).replace(/\n+/g, ' ').replace(/\|/g, '\\|'),
        file: target.file,
        dup
      }
    })
  )
  .sort((x, y) => (x.system.id === y.system.id ? x.path.localeCompare(y.path) : x.system.id.localeCompare(y.system.id)))

for (const row of all) {
  const file = row.file + (row.dup ? ' ⚠️ 两系统同路径' : '')
  indexLines.push(`| ${row.system.label} | ${row.method} | \`${row.path}\` | ${row.title} | ${file} |`)
}
writeFileSync(join(outDir, 'index.md'), indexLines.join('\n') + '\n', 'utf8')

// ---- 各系统明细 ----
for (const { system, buckets, raw } of loaded) {
  for (const domain of system.domains) {
    const list = buckets.get(domain.file)
    const parts = [
      `# ${system.label} —— ${domain.title}`,
      '',
      `共 ${list.length} 个接口。由 \`scripts/gen-references.mjs\` 从 \`${system.input}\` 生成，请勿手改。`,
      '',
      `鉴权方式：${system.authNote}`,
      '',
      '返回总索引：[index.md](./index.md)',
      ''
    ]
    const byCategory = new Map()
    for (const api of list) {
      if (!byCategory.has(api.__category)) byCategory.set(api.__category, [])
      byCategory.get(api.__category).push(api)
    }
    for (const [categoryName, apis] of byCategory) {
      parts.push(`## ${categoryName}`, '')
      for (const api of apis.sort((x, y) => String(x.path).localeCompare(String(y.path)))) {
        parts.push(renderEndpoint(api), '')
      }
    }
    writeFileSync(join(outDir, domain.file), parts.join('\n'), 'utf8')
  }
}

// ---- 计数核对 ----
console.log(`仓库根：${repoRoot}`)
let sum = 0
for (const { system, endpoints, buckets, raw } of loaded) {
  console.log(`\n【${system.label}】${system.input} —— ${raw.length} 分类 / ${endpoints.length} 接口`)
  let localSum = 0
  for (const d of system.domains) {
    const n = buckets.get(d.file).length
    localSum += n
    console.log(`  ${d.file}: ${n} 条`)
  }
  if (localSum !== endpoints.length) {
    console.error(`  归域计数 ${localSum} ≠ 接口数 ${endpoints.length}`)
    process.exit(1)
  }
  sum += endpoints.length
}
console.log(`\n索引条目：${all.length}（应等于 ${total}）`)
console.log(`跨系统重复的方法+路径：${[...owner.values()].filter((v) => v.length > 1).length} 条`)
if (all.length !== total || sum !== total) {
  console.error('索引计数与接口总数不一致')
  process.exit(1)
}
console.log('生成完成')

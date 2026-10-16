---
name: internal-platform-api
description: 调用内部前台社媒矩阵运营平台与后台运营管理后台的 HTTP 接口，覆盖设备与云手机、账号与绑定、调度与发帖任务、素材与模板、数据中心、关联中心、系统计划与应用、用户分配、字典等。当用户需要查询或操作这两个平台的业务数据时使用。不要用于平台以外的系统。
version: "1.0.6"
---

# 内部平台接口调用（前台社媒矩阵运营平台 + 后台运营管理后台）

本技能覆盖两个系统的接口，合计 **721** 条（前台 607 条 + 后台 114 条，其中 4 条为两系统同名重复，去重后 717 条）。
接口事实来自仓库 `docs/api.json` 与 `docs/platform_api.json`（YApi 导出），由 `scripts/gen-references.mjs` 生成，
两系统共用一份 `references/index.md` 总索引。

## 两个系统（务必分清前台与后台）

| 系统 ID | 角色 | 名称 | 业务范围 | 登录 |
| --- | --- | --- | --- | --- |
| `social` | **前台系统** | 社媒矩阵运营平台 | 设备与云手机、账号绑定、调度中心、发帖任务、素材与文本模板、数据中心、风控、投屏、矩阵总览、MCC、网络配置 | `POST /auth/login`（已实测，仅需用户名与密码） |
| `admin` | **后台系统** | 运营管理后台 | 关联中心与素材模板、系统计划、应用、设备组、动态表单、社媒账号管理、用户分配网络与容器、字典管理、MobileDevice | 登录端点与接口地址均未知，需用户提供 |

两个系统**账号不通用**，前台账号与后台账号各是一套。任何时候都必须先确定在操作哪个系统，不要混用凭据。

## 第一步永远是选系统

调用器的所有命令都要先给系统 ID。可以用 ID（`social` / `admin`）或角色名（`前台` / `后台`）指定，判断依据优先级：

1. 用户已指明系统、角色或模块名。
2. 在 `references/index.md` 里检索关键词，**索引的「系统」列即归属**，以它为准。
3. 两系统都命中同一关键词时（下表为易混淆词），优先按索引归属判断；若索引标注「两系统同路径」，**必须先向用户确认目标系统**。

| 关键词 | 可能归属 |
| --- | --- |
| 网络、分配 | 前台有「网络配置」，后台有「用户分配网络」 |
| 素材、模板 | 前台有素材/文本/模板库，后台有「关联中心与素材域」（`/asset`） |
| 账号 | 前台有应用账号与账号绑定，后台有「社媒账号管理」 |
| 设备 | 前台以设备与云手机为主，后台的设备组与 MobileDevice 偏管理配置 |

## 铁律

1. **不要臆造接口路径。** 任何调用前必须先检索到确切路径。
2. **不要猜系统、不要猜登录端点。** 归属不明先问；登录端点未知时向用户索取，不要试探常见路径。
3. **凭据不落盘、不回显。** 密码只通过命令行参数临时传入，脚本只缓存 token；
   **不要在回复里复述用户给的密码**，也不要把密码写进任何文件。
4. **写操作先确认。** `PUT`/`DELETE`/`PATCH`，或 POST 语义属于「删除/禁用/解绑/重置/清空」类时，先复述将要影响的对象，得到确认后再执行。

## 交互式登录（核心流程）

凭据**不预置在配置里**，而是在需要时由用户提供。流程如下：

**第一步：正常调用。** 直接发起请求，脚本会自动判断是否已登录：

```bash
node <SKILL>/scripts/api.mjs request social GET /auth/getInfo
```

**第二步：识别「需要用户输入」信号。** 若需要登录或缺少地址，脚本会输出一行机器可读的标记并退出（退出码 **10**）：

```
NEED_INPUT system=social role=前台系统 label=社媒矩阵运营平台
缺失项：接口地址、登录用户名、登录密码
请向用户索取下列信息后重试：
  - 请向用户索取前台系统「社媒矩阵运营平台」的接口地址（形如 https://host，不要带结尾斜杠）
  ...
```

**第三步：向用户索取，并明确说明是前台还是后台。** 看到该标记后，**不要重试、不要猜测**，直接按 `role` 与 `label` 向用户提问，措辞要带角色，例如：

> 调用**前台系统（社媒矩阵运营平台）**需要登录，请提供该系统的用户名和密码。
> 注意：前台与后台是两个独立系统，账号不通用。

**第四步：带上参数重试。** 拿到信息后，用命令行参数传入再执行同一条命令：

```bash
node <SKILL>/scripts/api.mjs request social GET /auth/getInfo \
  --base-url https://<地址> --username <账号> --password <密码>
```

**第五步：后续免登录。** 登录成功后只缓存 token（含 baseUrl 与用户名，有效期 25 分钟），
后续调用无需再传凭据。token 失效时脚本会再次输出 `NEED_INPUT`，此时重新向用户索取即可。

### 后台系统的额外一步

后台（`admin`）的登录端点不在导出里，所以第一次调用时会额外要求**登录接口路径**：

```
NEED_INPUT ... 缺失项：登录接口路径
```

请向用户索取该系统的登录路径（形如 `/admin/login`），然后：

```bash
node <SKILL>/scripts/api.mjs request admin POST /asset/list \
  --base-url https://<后台地址> --login-path /admin/login \
  --username <后台账号> --password <后台密码>
```

若该系统的登录方法不是 POST、或 token 不在响应顶层的 `token` 字段，追加 `--login-method GET`、`--token-path data.token` 修正。
**不要自己试探路径**，问用户。

### 密码的传递方式

优先用 `--password`；更谨慎时用 `--password-stdin`（从标准输入读取，避免出现在命令行里）：

```bash
printf '%s' '<密码>' | node <SKILL>/scripts/api.mjs login social --base-url https://<地址> --username <账号> --password-stdin
```

## 调用方法（三步）

技能目录位于当前工作区 `skills/internal-platform-api/`，下文用 `<SKILL>` 指代。

**第一步：定位接口。**

```bash
node <SKILL>/scripts/api.mjs search 设备分页
```

也可自行检索 `<SKILL>/references/index.md`。索引每行形如
`| 社媒矩阵运营平台 | GET | /social/device/page | 社交媒体设备分页信息查询 | social-domain-social.md |`。

**第二步：读明细。** 打开索引给出的明细文件，读该接口的路径参数、Query 参数、请求体字段与响应顶层字段。

- `references/index.md` —— 两系统合计的总索引
- **前台**：`social-domain-social.md`（369 条）、`social-domain-auth.md`（139 条）、`social-domain-mcc.md`（83 条）、`social-domain-misc.md`（16 条）
- **后台**：`admin-domain-asset.md`（62 条）、`admin-domain-plan.md`（32 条）、`admin-domain-other.md`（20 条）

**第三步：调用。** 一律通过调用器，不要手写 curl、不要自己拼鉴权头。

```bash
# 查看系统清单与当前配置状态
node <SKILL>/scripts/api.mjs systems

# 手动登录（一般不需要；正常调用会自动登录）
node <SKILL>/scripts/api.mjs login social --base-url <地址> --username <账号> --password <密码>

# 带 Query 参数
node <SKILL>/scripts/api.mjs request social GET /social/device/page --query pageNum=1 --query pageSize=20

# 自动翻页取全量
node <SKILL>/scripts/api.mjs request social GET /social/device/page --query pageNum=1 --query pageSize=50 --all

# 带 JSON 请求体；请求体较大时用文件，避免转义出错
node <SKILL>/scripts/api.mjs request social POST /social/account/check --json '{"accountName":"x"}'
node <SKILL>/scripts/api.mjs request social POST /social/dispatch/device/enable --body-file payload.json

# 内网自签名证书环境（HTTPS 证书不受信时必须加）
node <SKILL>/scripts/api.mjs request social GET /mcc/api/device/count --insecure
```

路径占位符（如 `/social/device/detail/{deviceId}`）直接替换为实际值，不要当 Query 传。
这些脚本只用 Node 标准库，**一律用 `node` 运行**。不要把 `bun` 当成前提——很多环境里并没有 `bun`，照抄 `bun run` 会得到 `command not found`（退出码 127）。若当前 shell 找不到 `node`，先用 `command -v node`（或 `which node`）定位其绝对路径再调用。

## 配置说明

只有**接口地址**建议预置（它不是密钥）。凭据一律运行时索取，但要注意区分两类凭据：

- **用户级凭据**（用户名 / 密码）：每次需要在交互中索取，登录后只缓存 token。**这是当前唯一必需的凭据。**
- **应用级凭据**（前台 `App-Key` / `App-Secret`）：只用于应用侧登录 `POST /auth/app/login`（实测：不带这两个头返回 `500050`，值未注册返回「app未注册」）。**日常业务调用不需要它**——`POST /auth/login` 签发的 token 同样可访问 `/mcc/**`、`/auth/getInfo` 等业务域（已实测返回真实数据）。仅当用户明确要求走应用侧登录时才索取。

配置优先级（高 → 低）：

1. 命令行参数（`--base-url` `--username` `--password` `--app-key` `--app-secret` `--login-path` 等）
2. 进程环境变量 `SM_<系统ID大写>_<字段>`，如 `SM_SOCIAL_BASE_URL`、`SM_SOCIAL_APP_KEY`、`SM_ADMIN_BASE_URL`
3. 配置文件 `~/.proma/.internal-platform-api.env`，其次技能目录 `.env.local`（后者已被 `.gitignore` 忽略）

**内网自签名证书。** 若目标环境证书不受信（浏览器报 `ERR_CERT_AUTHORITY_INVALID`），Node 的 `fetch` 会直接报 `fetch failed`（退出码 3）。此时加 `--insecure`，或在配置里设 `SM_INSECURE_TLS=1`，脚本会关闭 TLS 校验并打印警告。**仅限内网测试环境使用。**

**地址必须是接口根。** 前台的 `…/social_web_v2` 与后台的 `…/platform_admin` 是前端页面目录，**不是接口地址**——传给调用器只会拿到网关的 405/404 HTML（登录直接失败）。向用户索取地址时就说明「只要协议 + 域名」。调用器会按 `systems.json` 的 `frontendPrefixes` 自动剥离这类已知前缀并提示，但不要依赖它兜底。

**在 bash 里调用要把路径参数护住。** Git Bash（MSYS）会把以 `/` 开头的参数当成 Unix 路径改写：`/mcc/api/device/count` 会变成 `C:/Program Files/Git/mcc/api/device/count`，拼进 URL 后报 `fetch failed` / `getaddrinfo ENOTFOUND`（这是环境改写，不是地址错）。两种规避方式，任选其一：

- 命令前加 `MSYS_NO_PATHCONV=1`（推荐）；
- 或把路径写成不带前导斜杠的形式，如 `mcc/api/device/count`——调用器会自动补上前导斜杠。

调用器已能从改写后的形态还原并打印提示，但请优先按上面两种写法调用。

token 缓存于 `~/.proma/.cache/internal-platform-api/<系统ID>.json`，按「系统 + baseUrl」隔离，测试与生产、前台与后台不会串号。
**缓存里只有 token、地址和用户名，永远没有密码。**

## 跨系统同名接口

`/allocation/network` 下有 4 个接口在两系统中同名同方法：`allocate`、`list`、`user/list`、`page`。
索引对它们标注「两系统同路径」。调用前必须确认目标系统。

## 后台登录端点与接口地址（待补齐）

`docs/platform_api.json` 里没有任何登录或鉴权接口，所以后台的 `login.path` 在 `systems.json` 中是空的，
调用器**不会猜测**，而是按上面的流程向用户索取。首次联调确认后，请把路径填回 `systems.json` 的 `login.path`。

2026-10-16 联调已排除三个常见误判，**不要把下列地址当成后台**：

| 候选 | 实际归属 |
| --- | --- |
| `https://<host>/platform_admin` | 运营管理后台的**前端 SPA 页面**（标题「运营后台」），不是接口地址 |
| `POST https://<host>/auth/login` | **前台 social 的网页登录**（用户名 + 密码，无验证码），不适用于后台 |
| `POST https://<host>/api/v1/users/login` | **第三套系统**（token 在 `data.accessToken`），与本技能两个系统都无关，不要混用 |

后台真实 API 根尚未定位：`/asset/device/group` 在域名根下返回「资源不存在」。
拿到准确地址后，同时回填 `SM_ADMIN_BASE_URL` 与 `login.path`。

前台鉴权头 `Authorization: Bearer {{token}}` 已于 2026-10-16 实测验证：`GET /mcc/api/device/count` 携带该头返回真实数据，
改用 `token` 头或不带鉴权均返回 401。`systems.json` 中的该配置可直接沿用。

## 文档可信度

文档是对 YApi 导出的忠实渲染，**导出本身的问题会原样保留**：

1. **部分接口的参数被展平。** 例如前台的 `/social/device/page`，其 Query 参数在导出里是一串 `records[0].deviceName` 这类**响应实体字段**，不是真正的查询条件。遇到这种形态，按 RuoYi 约定尝试 `pageNum` + `pageSize` 加业务过滤字段，并以**实际调用结果**为准。2026-10-16 实测：该接口接受 `pageNum` + `pageSize` 并正常分页，且**只支持 GET**，用 POST 会返回 `400310 Method not supported`。
2. **分页响应的列表键不统一。** 后台沿用 RuoYi 的 `data.rows`，前台社媒域用 `data.records`。调用器已兼容两者，`--all` 翻页会保持原键名；自行写脚本时不要假定只有 `rows`。
3. **导出里没有记录鉴权头。** 鉴权以本文件的交互式登录流程为准，不要依赖接口段落里的请求头表。
4. **导出里没有 baseUrl。** 地址只来自配置或用户输入。
5. **响应结构以 `res_body` 为准。** 实际返回与文档不符时，**如实报告冲突**，不要悄悄按文档「修正」结果。

## 维护

接口清单更新后重新生成（不要手改 `references/`）：

```bash
node <SKILL>/scripts/gen-references.mjs          # 全部系统；也可只生成一个： ... social
```

生成器会打印各系统、各域条数并校验索引计数与接口总数一致，对不上直接报错退出。
新增系统只需在 `systems.json` 的 `systems` 数组追加一项（id、roleLabel、input、domains、login），生成器与调用器都不用改代码。

> 本技能是内置技能（`apps/electron/default-skills/`），随应用分发到工作区。按仓库约定，**任何改动都要递增本文件 frontmatter 的 `version`**，否则已有工作区不会收到升级。

## 禁止

- 凭据写入 `SKILL.md`、`references/`、配置文件或任何会提交的文件；在回复中复述密码
- 凭猜测构造接口路径、参数名或登录端点
- 归属不明时猜系统；对写操作跳过用户确认
- 看到 `NEED_INPUT` 后不向用户索取却自行重试或换地址试探

# platform-import-api 接口目录

> 业务域：导入数据任务 · 来源：callfans-standard.md, callfans-platform.md · 共 4 个操作
> 本文件是 catalog 的人工可读版；机器可读单一真源见 `api_catalog.json`。

## 登录
- `auth_post_login`  POST `/auth/login`  →  返回 `token`，执行器自动处理，无需手工传 token。

## 操作一览

| operation_id | 方法 | 路由 | 路径 | 摘要 | 风险 |
| --- | --- | --- | --- | --- | --- |
| `import_get_import_task_download_taskid` | GET | `/platform` | `/import-task/download/{taskId}` | 下载分析报告 | read |
| `import_get_social_import_task_download_taskid` | GET | `/` | `/social/import-task/download/{taskId}` | 下载分析报告 | read |
| `import_post_import_task_page` | POST | `/platform` | `/import-task/page` | 分页查询导入任务 | read |
| `import_post_social_import_task_page` | POST | `/` | `/social/import-task/page` | 分页查询导入任务 | read |

## 操作详情
### import_get_import_task_download_taskid
- 摘要：下载分析报告
- `GET /platform/import-task/download/{taskId}` · 风险：read · 鉴权：required

### import_get_social_import_task_download_taskid
- 摘要：下载分析报告
- `GET /social/import-task/download/{taskId}` · 风险：read · 鉴权：required

### import_post_import_task_page
- 摘要：分页查询导入任务
- `POST /platform/import-task/page` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `records` (object [], 可选) — 查询数据列表
  - `total` (integer, 可选) — 总数
  - `size` (integer, 可选) — 每页显示条数，默认 10
  - `current` (integer, 可选) — 当前页
  - `orders` (object [], 可选) — 排序字段信息
  - `column` (string, 可选) — 需要进行排序的字段
  - `asc` (boolean, 可选) — 是否正序排列，默认 true
  - `optimizeCountSql` (boolean, 可选) — 自动优化 COUNT SQL
  - `searchCount` (boolean, 可选) — 是否进行 count 查询
  - `optimizeJoinOfCountSql` (boolean, 可选) — {@link #optimizeJoinOfCountSql()}
  - `maxLimit` (integer, 可选) — 单页分页条数限制
  - `countId` (string, 可选) — countId
  - `userName` (string, 可选) — 操作人
  - `businessType` (string, 可选) — 业务类型 网络导入/账号导入
  - `taskId` (string, 可选) — 任务ID
- 响应字段：`code`, `msg`, `data`, `records`, `id`, `status`, `statusName`, `originalFileName`, `reportFileName`, `totalRecords`, `successRecords`, `failedRecords` …
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### import_post_social_import_task_page
- 摘要：分页查询导入任务
- `POST /social/import-task/page` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `records` (object [], 可选)
  - `creatorId` (string, 可选) — 创建者
  - `createTime` (string, 可选) — 创建时间
  - `updatorId` (string, 可选) — 更新者
  - `updateTime` (string, 可选) — 更新时间
  - `deleted` (boolean, 可选) — 删除标识，0未删 1已删
  - `version` (integer, 可选) — 版本
  - `deptId` (integer, 可选)
  - `params` (object, 可选)
  - `key` (string, 可选)
  - `id` (integer, 可选) — 主键ID
  - `status` (string, 可选) — 任务状态：PENDING-待处理，PROCESSING-处理中，SUCCESS-成功，FAILED-失败
  - `businessType` (string, 可选) — 业务类型 网络导入/账号导入
  - `originalFileName` (string, 可选) — 原始文件名
  - `filePath` (string, 可选) — 文件存储路径
  - `reportFilePath` (string, 可选) — 分析报告文件路径
  - `reportFileName` (string, 可选) — 分析报告文件名
  - `totalRecords` (integer, 可选) — 总记录数
  - `successRecords` (integer, 可选) — 成功记录数
  - `failedRecords` (integer, 可选) — 失败记录数
  - `failedReason` (string, 可选) — 失败原因
  - `total` (integer, 可选)
  - `size` (integer, 可选)
  - `current` (integer, 可选)
  - `orders` (object [], 可选)
  - `column` (string, 可选)
  - `asc` (boolean, 可选)
  - `optimizeCountSql` (boolean, 可选)
  - `searchCount` (boolean, 可选)
  - `optimizeJoinOfCountSql` (boolean, 可选)
  - `maxLimit` (integer, 可选)
  - `countId` (string, 可选)
  - `userName` (string, 可选) — 操作人
  - `businessType` (string, 可选) — 业务类型 网络导入/账号导入
  - `taskId` (string, 可选) — 任务ID
- 响应字段：`code`, `msg`, `data`, `records`, `id`, `status`, `statusName`, `originalFileName`, `reportFileName`, `totalRecords`, `successRecords`, `failedRecords` …
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

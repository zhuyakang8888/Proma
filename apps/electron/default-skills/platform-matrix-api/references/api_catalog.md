# platform-matrix-api 接口目录

> 业务域：矩阵总览与数据中心 · 来源：callfans-standard.md · 共 41 个操作
> 本文件是 catalog 的人工可读版；机器可读单一真源见 `api_catalog.json`。

## 登录
- `auth_post_login`  POST `/auth/login`  →  返回 `token`，执行器自动处理，无需手工传 token。

## 操作一览

| operation_id | 方法 | 路由 | 路径 | 摘要 | 风险 |
| --- | --- | --- | --- | --- | --- |
| `matrix_delete_social_workstation_matrix_projects_id` | DELETE | `/` | `/social/workstation/matrix/projects/{id}` | 删除项目(软删,级联软删所有 project_slot)。 | destructive |
| `matrix_delete_social_workstation_matrix_view_preset_id` | DELETE | `/` | `/social/workstation/matrix/view-preset/{id}` | 按视图唯一 id 删除当前登录用户的一条筛选视图(精确删一条)。 | destructive |
| `matrix_get_social_datacenter_analysis_download_processid_report` | GET | `/` | `/social/datacenter/analysis-download/{processId}/{report}` | 社群分析报告导出 | read |
| `matrix_get_social_datacenter_analysis_msg_analysisid` | GET | `/` | `/social/datacenter/analysis-msg/{analysisId}` | 获取原始分析消息 | read |
| `matrix_get_social_datacenter_analysis_process_processid_report` | GET | `/` | `/social/datacenter/analysis-process/{processId}/{report}` | 获取分析过程或报告消息 | read |
| `matrix_get_social_datacenter_last_app` | GET | `/` | `/social/datacenter/last-app` | 查询上次选择的app | read |
| `matrix_get_social_workstation_matrix_chip_tree` | GET | `/` | `/social/workstation/matrix/chip-tree` | 芯片类型 → 节点 二级菜单(矩阵总览筛选条件下拉 / 级联选择数据源)。 | read |
| `matrix_get_social_workstation_matrix_devices_id` | GET | `/` | `/social/workstation/matrix/devices/{id}` | 单台设备详情(右栏)。 | read |
| `matrix_get_social_workstation_matrix_networks` | GET | `/` | `/social/workstation/matrix/networks` | 筛选字典:网络地区(来自 social_mobile_network 按 area 聚合)。 | read |
| `matrix_get_social_workstation_matrix_projects` | GET | `/` | `/social/workstation/matrix/projects` | 左栏项目列表(树形结构,按更新时间倒序)。 | read |
| `matrix_get_social_workstation_matrix_projects_id` | GET | `/` | `/social/workstation/matrix/projects/{id}` | 单个项目详情(项目主体 + 已绑定槽位列表)。 | read |
| `matrix_get_social_workstation_matrix_projects_projectid_devices` | GET | `/` | `/social/workstation/matrix/projects/{projectId}/devices` | 项目下的设备 ID 集合 —— 点击左侧项目后,右栏加载该项目绑定的设备列表(扁平, | read |
| `matrix_get_social_workstation_matrix_stats` | GET | `/` | `/social/workstation/matrix/stats` | 矩阵数据三块数据卡 | read |
| `matrix_get_social_workstation_matrix_view_preset` | GET | `/` | `/social/workstation/matrix/view-preset` | 查询当前登录用户已保存的所有筛选视图(筛选预设)。 | read |
| `matrix_post_social_datacenter_account_export` | POST | `/` | `/social/datacenter/account-export` | 导出账号数据 | read |
| `matrix_post_social_datacenter_account_page` | POST | `/` | `/social/datacenter/account-page` | 查询账号数据分页 | read |
| `matrix_post_social_datacenter_account_total` | POST | `/` | `/social/datacenter/account-total` | 账号数据总计 | write |
| `matrix_post_social_datacenter_add_app` | POST | `/` | `/social/datacenter/add-app` | 新增上次选择的 app | write |
| `matrix_post_social_datacenter_add_remark` | POST | `/` | `/social/datacenter/add-remark` | 添加备注 | write |
| `matrix_post_social_datacenter_analysis` | POST | `/` | `/social/datacenter/analysis` | 触发社群信息分析 | write |
| `matrix_post_social_datacenter_analysis_export` | POST | `/` | `/social/datacenter/analysis-export` | 下载社群信息 | read |
| `matrix_post_social_datacenter_analysis_list` | POST | `/` | `/social/datacenter/analysis-list` | 社群分析过程查询 | read |
| `matrix_post_social_datacenter_analysis_page` | POST | `/` | `/social/datacenter/analysis-page` | 社群信息分页查询 | read |
| `matrix_post_social_datacenter_cool_export` | POST | `/` | `/social/datacenter/cool-export` | 酷安数据导出 | read |
| `matrix_post_social_datacenter_cool_page` | POST | `/` | `/social/datacenter/cool-page` | 酷安数据分页 | read |
| `matrix_post_social_datacenter_custom_points` | POST | `/` | `/social/datacenter/custom-points` | 查询用户自定义测点 | read |
| `matrix_post_social_datacenter_hot_post_export` | POST | `/` | `/social/datacenter/hot-post-export` | 导出账号热帖数据 | read |
| `matrix_post_social_datacenter_hot_post_page` | POST | `/` | `/social/datacenter/hot-post-page` | 查询账号热帖数据分页 | read |
| `matrix_post_social_datacenter_lock` | POST | `/` | `/social/datacenter/lock` | 锁定数据 | write |
| `matrix_post_social_datacenter_other_export` | POST | `/` | `/social/datacenter/other-export` | 导出其他数据 | read |
| `matrix_post_social_datacenter_other_page` | POST | `/` | `/social/datacenter/other-page` | 查询账号其他数据分页 | read |
| `matrix_post_social_datacenter_points` | POST | `/` | `/social/datacenter/points` | 查询测点数据 | read |
| `matrix_post_social_datacenter_save_points` | POST | `/` | `/social/datacenter/save-points` | 保存所勾选的测点 | write |
| `matrix_post_social_datacenter_unlock` | POST | `/` | `/social/datacenter/unlock` | 解锁数据 | write |
| `matrix_post_social_workstation_matrix_device_selector` | POST | `/` | `/social/workstation/matrix/device-selector` | 项目矩阵总览 · 设备选择面板预览 —— "取消选择/下一步操作"弹窗的数据源。 | write |
| `matrix_post_social_workstation_matrix_device_selector_fill` | POST | `/` | `/social/workstation/matrix/device-selector/fill` | 项目矩阵总览 · 设备选择面板 · 智能补选。 | write |
| `matrix_post_social_workstation_matrix_page` | POST | `/` | `/social/workstation/matrix/page` | 矩阵总览分页查询。 | read |
| `matrix_post_social_workstation_matrix_projects` | POST | `/` | `/social/workstation/matrix/projects` | 新建项目(项目编组)。 | write |
| `matrix_post_social_workstation_matrix_projects_devices_unbind` | POST | `/` | `/social/workstation/matrix/projects/devices/unbind` | 项目矩阵总览 · 按设备集合解绑。 | destructive |
| `matrix_post_social_workstation_matrix_view_preset_save` | POST | `/` | `/social/workstation/matrix/view-preset/save` | 保留视图(筛选预设):将当前筛选条件追加到当前登录用户的视图列表(保存到 Redis)。 | read |
| `matrix_put_social_workstation_matrix_projects` | PUT | `/` | `/social/workstation/matrix/projects` | 更新项目(部分更新)。 | write |

## 操作详情
### matrix_delete_social_workstation_matrix_projects_id
- 摘要：删除项目(软删,级联软删所有 project_slot)。
- `DELETE /social/workstation/matrix/projects/{id}` · 风险：destructive · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### matrix_delete_social_workstation_matrix_view_preset_id
- 摘要：按视图唯一 id 删除当前登录用户的一条筛选视图(精确删一条)。
- `DELETE /social/workstation/matrix/view-preset/{id}` · 风险：destructive · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### matrix_get_social_datacenter_analysis_download_processid_report
- 摘要：社群分析报告导出
- `GET /social/datacenter/analysis-download/{processId}/{report}` · 风险：read · 鉴权：required

### matrix_get_social_datacenter_analysis_msg_analysisid
- 摘要：获取原始分析消息
- `GET /social/datacenter/analysis-msg/{analysisId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### matrix_get_social_datacenter_analysis_process_processid_report
- 摘要：获取分析过程或报告消息
- `GET /social/datacenter/analysis-process/{processId}/{report}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### matrix_get_social_datacenter_last_app
- 摘要：查询上次选择的app
- `GET /social/datacenter/last-app` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `appId`, `appName`, `userId`, `licenseState`, `licenseExpireDate`

### matrix_get_social_workstation_matrix_chip_tree
- 摘要：芯片类型 → 节点 二级菜单(矩阵总览筛选条件下拉 / 级联选择数据源)。
- `GET /social/workstation/matrix/chip-tree` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `chip`, `chipName`, `nodes`, `nodeId`, `nodeIp`, `nodeState`, `licenseState`, `licenseExpireDate`

### matrix_get_social_workstation_matrix_devices_id
- 摘要：单台设备详情(右栏)。
- `GET /social/workstation/matrix/devices/{id}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `device`, `id`, `conIdx`, `deviceIp`, `androidVersion`, `brand`, `region`, `online`, `accounts` …

### matrix_get_social_workstation_matrix_networks
- 摘要：筛选字典:网络地区(来自 social_mobile_network 按 area 聚合)。
- `GET /social/workstation/matrix/networks` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `region`, `countryCode`, `proxyCount`, `status`, `licenseState`, `licenseExpireDate`

### matrix_get_social_workstation_matrix_projects
- 摘要：左栏项目列表(树形结构,按更新时间倒序)。
- `GET /social/workstation/matrix/projects` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `id`, `name`, `slotCount`, `createTime`, `updateTime`, `driftedFromSnapshot`, `parentId`, `level`, `childCount` …

### matrix_get_social_workstation_matrix_projects_id
- 摘要：单个项目详情(项目主体 + 已绑定槽位列表)。
- `GET /social/workstation/matrix/projects/{id}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `projectId`, `projectName`, `chipCount`, `scopeCount`, `availableCount`, `unavailableCount`, `deviceStatus`, `licenseState`, `licenseExpireDate`

### matrix_get_social_workstation_matrix_projects_projectid_devices
- 摘要：项目下的设备 ID 集合 —— 点击左侧项目后,右栏加载该项目绑定的设备列表(扁平,
- `GET /social/workstation/matrix/projects/{projectId}/devices` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### matrix_get_social_workstation_matrix_stats
- 摘要：矩阵数据三块数据卡
- `GET /social/workstation/matrix/stats` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `devices`, `total`, `available`, `unavailable`, `running`, `anomaly`, `maxConcurrency`, `accounts`, `total` …

### matrix_get_social_workstation_matrix_view_preset
- 摘要：查询当前登录用户已保存的所有筛选视图(筛选预设)。
- `GET /social/workstation/matrix/view-preset` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `userId`, `id`, `name`, `query`, `records`, `id`, `chipCode`, `chipName`, `nodeIp` …

### matrix_post_social_datacenter_account_export
- 摘要：导出账号数据
- `POST /social/datacenter/account-export` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `appId` (string, 可选) — 应用id
  - `accountIds` (string [], 可选) — 账号id集合

### matrix_post_social_datacenter_account_page
- 摘要：查询账号数据分页
- `POST /social/datacenter/account-page` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `records` (object [], 可选)
  - `id` (string, 可选) — 自增ID 主键，非空
  - `deviceIp` (string, 可选) — 设备IP
  - `accountId` (string, 可选) — 平台账号
  - `sourceType` (string, 可选) — 小红书appid
  - `url` (string, 可选) — 小红书作品链接（短链）
  - `title` (string, 可选) — 作品标题
  - `type` (string, 可选) — 内容类型（图文、视频）
  - `completionRate` (string, 可选) — 完播率（视频才有）
  - `exposureCount` (string, 可选) — 曝光数
  - `viewCount` (string, 可选) — 观看数
  - `clickRate` (string, 可选) — 点击率
  - `avgWatchDuration` (string, 可选) — 平均观看时长
  - `followersGained` (string, 可选) — 涨粉数
  - `likes` (string, 可选) — 点赞数
  - `comments` (string, 可选) — 评论数
  - `collects` (string, 可选) — 收藏数
  - `shares` (string, 可选) — 分享数
  - `bullet` (string, 可选) — 弹幕数（视频才有）
  - `sourceHomepage` (string, 可选) — 观看来源-首页推荐
  - `sourceSearch` (string, 可选) — 观看来源-搜索
  - `sourceVideo` (string, 可选) — 观看来源-视频推荐（视频才有）
  - `sourceFollow` (string, 可选) — 观看来源-关注页面
  - `sourceOther` (string, 可选) — 观看来源-其他来源
  - `conversionRate` (string, 可选) — 观看转化率
  - `interactionRate` (string, 可选) — 观看互动率
  - `exposureRatio` (string, 可选) — 占总曝光
  - `viewRatio` (string, 可选) — 占总观看
  - `sourceUserHomepage` (string, 可选) — 观看来源 - 个人主页
  - `exitRate2s` (string, 可选) — 2秒退出率
  - `postRemark` (string, 可选) — 帖子备注
  - `collectionTime` (string, 可选) — 采集时间
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
  - `appId` (string, 可选) — 应用id
  - `suiteName` (string, 可选) — 所属分组
  - `accountId` (string, 可选) — 账号
  - `deviceNum` (string, 可选) — 设备号
  - `startTime` (string, 可选) — 开始时间
  - `endTime` (string, 可选) — 结束时间
  - `sortFields` (object, 可选) — 排序字段
  - `key` (string, 可选)
  - `deleteIds` (string [], 可选) — 删除的id集合
  - `deviceIds` (string [], 可选) — 设备id集合
- 响应字段：`code`, `msg`, `data`, `records`, `accountId`, `nickName`, `suiteName`, `deviceIp`, `deviceStatus`, `remark`, `totalPosts`, `followers` …
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### matrix_post_social_datacenter_account_total
- 摘要：账号数据总计
- `POST /social/datacenter/account-total` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `appId` (string, 可选) — 应用id
  - `accountIds` (string [], 可选) — 账号id集合
  - `custom` (string, 可选) — 数据自定义枚举(ACCOUNT/HOTPOST/OTHER)
  - `startTime` (string, 可选) — 开始时间
  - `endTime` (string, 可选) — 结束时间
- 响应字段：`code`, `msg`, `data`, `totalAccounts`, `totalPosts`, `totalNotes`, `totalFollowers`, `totalFans`, `totalFansIncrement`, `totalLikesAndCollect`, `totalInteractions`, `totalActives` …

### matrix_post_social_datacenter_add_app
- 摘要：新增上次选择的 app
- `POST /social/datacenter/add-app` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `appId` (string, 可选) — 应用id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### matrix_post_social_datacenter_add_remark
- 摘要：添加备注
- `POST /social/datacenter/add-remark` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `accountId` (string, 可选) — 账号id
  - `remark` (string, 可选) — 备注
  - `custom` (string, 可选) — 数据自定义枚举(ACCOUNT/HOTPOST/OTHER)
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### matrix_post_social_datacenter_analysis
- 摘要：触发社群信息分析
- `POST /social/datacenter/analysis` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `analysisIds` (string [], 必填) — 社群数据id
  - `appId` (string, 可选) — 应用ID
  - `agentId` (string, 可选) — 合并分析下的agentId
- 响应字段：`code`, `msg`, `data`, `records`, `id`, `deviceId`, `deviceIp`, `nickName`, `groupName`, `groupMemberCount`, `groupTags`, `collectionCycle` …

### matrix_post_social_datacenter_analysis_export
- 摘要：下载社群信息
- `POST /social/datacenter/analysis-export` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `appId` (string, 可选) — 应用id
  - `analysisIds` (string [], 可选) — 社区信息id集合

### matrix_post_social_datacenter_analysis_list
- 摘要：社群分析过程查询
- `POST /social/datacenter/analysis-list` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `records` (object [], 可选)
  - `id` (integer, 可选) — 主键编号
  - `analysisId` (integer, 可选) — 分析Id
  - `analysisProcess` (string, 可选) — 分析过程
  - `analysisReport` (string, 可选) — 分析报告
  - `reportName` (string, 可选) — 报告名称
  - `processName` (string, 可选) — 分析过程名称
  - `appId` (integer, 可选) — 应用ID
  - `createTime` (string, 可选) — 创建日期
  - `agentId` (integer, 可选) — 分析Id
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
  - `appId` (string, 可选) — 应用ID
  - `analysisId` (string, 可选) — 社群数据ID
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### matrix_post_social_datacenter_analysis_page
- 摘要：社群信息分页查询
- `POST /social/datacenter/analysis-page` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `records` (object [], 可选)
  - `id` (integer, 可选) — 主键编号
  - `deviceId` (integer, 可选) — 设备编号
  - `deviceIp` (string, 可选) — 设备IP
  - `nickName` (string, 可选) — 昵称
  - `groupName` (string, 可选) — 群组名称
  - `groupMemberCount` (integer, 可选) — 群人数
  - `groupTags` (string, 可选) — 群标签
  - `collectionCycle` (string, 可选) — 采集周期
  - `message` (string, 可选) — 具体消息
  - `messageVolume` (integer, 可选) — 消息量
  - `analysisStatus` (string, 可选) — 分析状态( not_started in_progress completed failed)
  - `jobId` (string, 可选) — RPA任务编号
  - `accId` (integer, 可选) — 账号编号
  - `createTime` (string, 可选) — 创建时间
  - `updateTime` (string, 可选) — 更新时间
  - `failMsg` (string, 可选) — 失败原因
  - `agentId` (string, 可选) — 人设编号
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
  - `appId` (string, 可选) — 应用id
  - `suiteIds` (string [], 可选) — 分组id集合
  - `groupName` (string, 可选) — 社群名
  - `tag` (string, 可选) — 标签名
  - `accountName` (string, 可选) — 账号信息或昵称
  - `deviceInfo` (string, 可选) — 设备IP或别名
  - `startTime` (string, 可选) — 开始时间
  - `endTime` (string, 可选) — 结束时间
  - `deleteIds` (string [], 可选) — 不展示的数据信息
  - `sortFields` (object, 可选) — 排序字段
  - `key` (string, 可选)
- 响应字段：`code`, `msg`, `data`, `records`, `id`, `deviceId`, `deviceIp`, `nickName`, `groupName`, `groupMemberCount`, `groupTags`, `collectionCycle` …
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### matrix_post_social_datacenter_cool_export
- 摘要：酷安数据导出
- `POST /social/datacenter/cool-export` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `appId` (string, 可选) — 应用id
  - `ids` (string [], 可选) — id集合

### matrix_post_social_datacenter_cool_page
- 摘要：酷安数据分页
- `POST /social/datacenter/cool-page` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `records` (object [], 可选)
  - `id` (integer, 可选) — 主键id
  - `hotRank` (integer, 可选) — 热点排名
  - `content` (string, 可选) — 内容
  - `author` (string, 可选) — 作者昵称
  - `updateTime` (string, 可选) — 采集时间
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
  - `collectionTime` (string, 可选) — 更新时间
  - `hotRank` (integer, 可选) — 热点排名
  - `author` (string, 可选) — 作者昵称
  - `content` (string, 可选) — 内容
  - `deleteIds` (string [], 可选) — 删除的id集合
  - `appId` (string, 可选) — 应用id
  - `sortFields` (object, 可选) — 排序字段
  - `key` (string, 可选)
- 响应字段：`code`, `msg`, `data`, `records`, `id`, `updateTime`, `hotRank`, `author`, `content`, `locked`, `total`, `size` …
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### matrix_post_social_datacenter_custom_points
- 摘要：查询用户自定义测点
- `POST /social/datacenter/custom-points` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `appId` (string, 可选) — 应用id
  - `custom` (string, 可选) — 数据自定义枚举(ACCOUNT/HOTPOST/OTHER)
- 响应字段：`code`, `msg`, `data`, `accountPoints`, `field`, `fieldData`, `key`, `sort`, `baseDataPoints`, `field`, `fieldData`, `key` …

### matrix_post_social_datacenter_hot_post_export
- 摘要：导出账号热帖数据
- `POST /social/datacenter/hot-post-export` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `appId` (string, 可选) — 应用id
  - `ids` (string [], 可选) — id集合

### matrix_post_social_datacenter_hot_post_page
- 摘要：查询账号热帖数据分页
- `POST /social/datacenter/hot-post-page` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `records` (object [], 可选)
  - `id` (string, 可选) — 自增ID 主键，非空
  - `deviceIp` (string, 可选) — 设备IP
  - `accountId` (string, 可选) — 平台账号
  - `sourceType` (string, 可选) — 小红书appid
  - `url` (string, 可选) — 小红书作品链接（短链）
  - `title` (string, 可选) — 作品标题
  - `type` (string, 可选) — 内容类型（图文、视频）
  - `completionRate` (string, 可选) — 完播率（视频才有）
  - `exposureCount` (string, 可选) — 曝光数
  - `viewCount` (string, 可选) — 观看数
  - `clickRate` (string, 可选) — 点击率
  - `avgWatchDuration` (string, 可选) — 平均观看时长
  - `followersGained` (string, 可选) — 涨粉数
  - `likes` (string, 可选) — 点赞数
  - `comments` (string, 可选) — 评论数
  - `collects` (string, 可选) — 收藏数
  - `shares` (string, 可选) — 分享数
  - `bullet` (string, 可选) — 弹幕数（视频才有）
  - `sourceHomepage` (string, 可选) — 观看来源-首页推荐
  - `sourceSearch` (string, 可选) — 观看来源-搜索
  - `sourceVideo` (string, 可选) — 观看来源-视频推荐（视频才有）
  - `sourceFollow` (string, 可选) — 观看来源-关注页面
  - `sourceOther` (string, 可选) — 观看来源-其他来源
  - `conversionRate` (string, 可选) — 观看转化率
  - `interactionRate` (string, 可选) — 观看互动率
  - `exposureRatio` (string, 可选) — 占总曝光
  - `viewRatio` (string, 可选) — 占总观看
  - `sourceUserHomepage` (string, 可选) — 观看来源 - 个人主页
  - `exitRate2s` (string, 可选) — 2秒退出率
  - `postRemark` (string, 可选) — 帖子备注
  - `collectionTime` (string, 可选) — 采集时间
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
  - `appId` (string, 可选) — 应用id
  - `suiteName` (string, 可选) — 所属分组
  - `accountId` (string, 可选) — 账号
  - `deviceNum` (string, 可选) — 设备号
  - `startTime` (string, 可选) — 开始时间
  - `endTime` (string, 可选) — 结束时间
  - `sortFields` (object, 可选) — 排序字段
  - `key` (string, 可选)
  - `deleteIds` (string [], 可选) — 删除的id集合
  - `deviceIds` (string [], 可选) — 设备id集合
- 响应字段：`code`, `msg`, `data`, `records`, `id`, `deviceIp`, `deviceStatus`, `remark`, `nickName`, `publishTime`, `title`, `workTag` …
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### matrix_post_social_datacenter_lock
- 摘要：锁定数据
- `POST /social/datacenter/lock` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `ids` (string [], 可选) — id集合
  - `custom` (string, 可选) — 数据自定义枚举(ACCOUNT/HOTPOST/OTHER)
  - `accountId` (string, 可选) — 账号id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### matrix_post_social_datacenter_other_export
- 摘要：导出其他数据
- `POST /social/datacenter/other-export` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `appId` (string, 可选) — 应用id
  - `ids` (string [], 可选) — id集合

### matrix_post_social_datacenter_other_page
- 摘要：查询账号其他数据分页
- `POST /social/datacenter/other-page` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `records` (object [], 可选)
  - `id` (string, 可选) — 自增ID 主键，非空
  - `deviceIp` (string, 可选) — 设备IP
  - `accountId` (string, 可选) — 平台账号
  - `sourceType` (string, 可选) — 小红书appid
  - `url` (string, 可选) — 小红书作品链接（短链）
  - `title` (string, 可选) — 作品标题
  - `type` (string, 可选) — 内容类型（图文、视频）
  - `completionRate` (string, 可选) — 完播率（视频才有）
  - `exposureCount` (string, 可选) — 曝光数
  - `viewCount` (string, 可选) — 观看数
  - `clickRate` (string, 可选) — 点击率
  - `avgWatchDuration` (string, 可选) — 平均观看时长
  - `followersGained` (string, 可选) — 涨粉数
  - `likes` (string, 可选) — 点赞数
  - `comments` (string, 可选) — 评论数
  - `collects` (string, 可选) — 收藏数
  - `shares` (string, 可选) — 分享数
  - `bullet` (string, 可选) — 弹幕数（视频才有）
  - `sourceHomepage` (string, 可选) — 观看来源-首页推荐
  - `sourceSearch` (string, 可选) — 观看来源-搜索
  - `sourceVideo` (string, 可选) — 观看来源-视频推荐（视频才有）
  - `sourceFollow` (string, 可选) — 观看来源-关注页面
  - `sourceOther` (string, 可选) — 观看来源-其他来源
  - `conversionRate` (string, 可选) — 观看转化率
  - `interactionRate` (string, 可选) — 观看互动率
  - `exposureRatio` (string, 可选) — 占总曝光
  - `viewRatio` (string, 可选) — 占总观看
  - `sourceUserHomepage` (string, 可选) — 观看来源 - 个人主页
  - `exitRate2s` (string, 可选) — 2秒退出率
  - `postRemark` (string, 可选) — 帖子备注
  - `collectionTime` (string, 可选) — 采集时间
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
  - `appId` (string, 可选) — 应用id
  - `accountId` (string, 可选) — 账号id
  - `startTime` (string, 可选) — 开始时间
  - `endTime` (string, 可选) — 结束时间
  - `sortFields` (object, 可选) — 排序字段
  - `key` (string, 可选)
  - `deleteIds` (string [], 可选) — 删除的id集合
  - `deviceIds` (string [], 可选) — 设备id集合
- 响应字段：`code`, `msg`, `data`, `records`, `id`, `deviceIp`, `deviceStatus`, `remark`, `nickName`, `publishTime`, `title`, `workTag` …
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### matrix_post_social_datacenter_points
- 摘要：查询测点数据
- `POST /social/datacenter/points` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `appId` (string, 可选) — 应用id
  - `custom` (string, 可选) — 数据自定义枚举(ACCOUNT/HOTPOST/OTHER)
- 响应字段：`code`, `msg`, `data`, `accountPoints`, `field`, `fieldData`, `key`, `sort`, `baseDataPoints`, `field`, `fieldData`, `key` …

### matrix_post_social_datacenter_save_points
- 摘要：保存所勾选的测点
- `POST /social/datacenter/save-points` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `appId` (string, 可选) — 应用id
  - `pointIds` (string [], 可选) — 测点id
  - `custom` (string, 可选) — 数据自定义枚举(ACCOUNT/HOTPOST/OTHER)
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### matrix_post_social_datacenter_unlock
- 摘要：解锁数据
- `POST /social/datacenter/unlock` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `ids` (string [], 可选) — id集合
  - `custom` (string, 可选) — 数据自定义枚举(ACCOUNT/HOTPOST/OTHER)
  - `accountId` (string, 可选) — 账号id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### matrix_post_social_workstation_matrix_device_selector
- 摘要：项目矩阵总览 · 设备选择面板预览 —— "取消选择/下一步操作"弹窗的数据源。
- `POST /social/workstation/matrix/device-selector` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceIds` (string [], 可选) — 设备 ID 集合(从矩阵分页查出来的那批设备)。空集合 = 不返回设备,只返回空 chip × slot 网格。
- 响应字段：`code`, `msg`, `data`, `selectedCount`, `availableCount`, `unavailableCount`, `failedLastTaskCount`, `maxConcurrency`, `chips`, `chipId`, `chipCode`, `chipName` …

### matrix_post_social_workstation_matrix_device_selector_fill
- 摘要：项目矩阵总览 · 设备选择面板 · 智能补选。
- `POST /social/workstation/matrix/device-selector/fill` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceIds` (string [], 可选) — 当前已选设备 ID 集合(来自{@code /device-selector} 查询接口的结果)。补选范围 = "全库可用设备" - 此集合。
  - `fillCount` (integer, 可选) — 目标总数 = 已选 + 补选。 {@code {@code > |deviceIds|} → 补足到该数 {@code
- 响应字段：`code`, `msg`, `data`, `deviceIds`, `licenseState`, `licenseExpireDate`

### matrix_post_social_workstation_matrix_page
- 摘要：矩阵总览分页查询。
- `POST /social/workstation/matrix/page` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `records` (object [], 可选)
  - `id` (string, 可选) — 节点主键,字符串防 JS 丢精度
  - `chipCode` (string, 可选) — 芯片/节点编码,业务唯一标识,用于在网格中检索
  - `chipName` (string, 可选) — 芯片名称(mobile_arm_server.arm_name)
  - `nodeIp` (string, 可选) — 节点 IP 地址,用于运维定位
  - `mirrorRegion` (string, 可选) — 镜像区域,标识该节点所属的镜像域
  - `androidVersion` (string, 可选) — Android 系统版本号,取自该节点下设备的 mobile_device.system_version(同节点设备共用镜像)
  - `maxConcurrency` (integer, 可选) — 该芯片查询的设备数(显示"X/Y"的分母)= 节点下设备总数(mobile_device.node_id = node.id 的全部),不随筛选条件变化。原语义为所属 ARM 服务器的并发上限配置(mobile_arm_server.max_concurrency,默认 5),现改为"芯片查询的设备数",与节点挂载的真实设备容量对齐;与{@link #virtualCount} 暂保留为同值(冗余),后续可按前端依赖清理。
  - `virtualCount` (integer, 可选) — 虚拟设备总数(显示"X/Y"的分母)= 节点下设备总数(mobile_device.node_id = node.id 的全部),不随筛选条件变化,不封顶。当前与{@link #maxConcurrency} 同值,保留用于兼容上一轮 (commit 250b4da7) 的前端联调。
  - `runningConcurrency` (integer, 可选) — 在线设备数(显示"X/Y"的分子)= 节点下 device_status = ONLINE 的设备数,封顶常数 5(业务约定"最多开机 5 个")。封顶值固定为 5,与{@link #maxConcurrency}(芯片查询的设备数)无关 ——即使节点挂 50 设备且全部开机,显示也只到 5;不随筛选条件变化。
  - `slots` (object [], 可选) — 槽位列表,长度 = mobile_arm_node.image_num(镜像槽位数),设备不足时尾部为空槽位
  - `chipId` (string, 可选) — 所属节点 ID,字符串防 JS 丢精度
  - `device` (object, 可选) — 设备(可能为 null:未新机)
  - `id` (string, 可选) — 设备主键,字符串防 JS 丢精度
  - `conIdx` (string, 可选) — 设备编号(mobile_device.con_idx)
  - `deviceModel` (string, 可选) — 设备型号(mobile_device.device_mode)
  - `deviceIp` (string, 可选) — 设备宿主机 IP(mobile_device.device_ip)
  - `effectiveStatus` (string, 可选) — 设备状态:ONLINE / OFFLINE,直接取 mobile_device.device_status 简化判定
  - `androidVersion` (string, 可选) — Android 版本(DEVICE_INFO 显示模式专用)
  - `accounts` (object [], 可选) — 账号绑定(根据 displayMode 裁剪字段)
  - `accountId` (string, 可选) — 账号 ID
  - `appId` (string, 可选) — 所属 App
  - `appName` (string, 可选) — App 名称
  - `appIcon` (string, 可选) — App 图标
  - `handle` (string, 可选) — 账号昵称/handle,来自 social_account.app_account;仅 ACCOUNT 显示模式填充,其余模式为 null
  - `avatarUrl` (string, 可选) — 账号头像 URL
  - `riskLevel` (string, 可选) — 账号风险等级{@link cn.callfans.social.api.config.api.enums.RiskLevel}(UNUSED/NONE/LOW/HIGH/DISABLE);仅 ACCOUNT 显示模式填充,其余模式为 null。
  - `network` (object, 可选) — 网络摘要(仅 NETWORK 模式填充)
  - `proxyIp` (string, 可选) — 代理 ip,取 social_mobile_network.ip(与账号管理列表 DeviceVO.proxyIp 同一口径,不是 proxy_link_ip / node_ip)
  - `proxyId` (string, 可选) — 代理 id,即 social_mobile_network.id,字符串防 JS 丢精度
  - `region` (string, 可选) — 归属地区(social_mobile_network.area)
  - `proxyType` (string, 可选) — 代理类型,取 social_mobile_network.agreement(ProtocolTypeEnum,如 HTTP / HTTPS / TCP / UDP)
  - `proxySpeed` (string, 可选) — 代理速率 95ms
  - `proxyEnabled` (boolean, 可选) — 代理是否启用;依据 social_mobile_network.operation_status,取值 true / false(数据库 default 'false'),与 ProxySpeedWebSocketHandler等处 .eq(operationStatus, "true") 同一口径。operation_status 非 "true" 一律视为未启用(null / 'false' / 其它字符串都按 false 处理)。
  - `isLock` (boolean, 可选) — 是否被人工锁定(mobile_device.is_lock,varchar(20) default '0',业务上按 Boolean 解析)。true 表示该设备已被运维标记为锁定/隔离/不可用,前端可据此做禁用样式或悬停提示。矩阵总览所有展示模式(BINDING/ACCOUNT/NETWORK/NOTIFICATION/DEVICE_INFO)统一返回,避免前端在切模式时再发额外请求。
  - `hasPermission` (boolean, 可选) — 当前用户对该设备是否有权限查看(基于 mobile_device_org 表)。派生口径:mobile_device_org.user_id = 当前登录用户(且 deleted=0)。 true —— 当前用户已被分配该设备,可看到完整信息(含账号、网络等敏感字段) false —— 当前用户未被分配该设备,卡片底色置灰、模糊处理,仅展示设备槽位与占用
  - `runtime` (object, 可选) — 设备运行时状态(右上角运行状态)。叠加在老的{@link #effectiveStatus} 上,后续由前端渐进迁移;老的 effectiveStatus(DeviceStateEnum)字段保留以兼容旧前端。
  - `runtime` (string, 可选) — 运行时状态枚举名(业务用)。值为{@link RuntimeStatusEnum} 之一;STARTING 本轮不查,可能为 null。
  - `lastStatusReasonKey` (string, 可选) — 最近一次心跳/状态原因 i18n key(供 UI 悬停展示时翻译)。由{@link cn.callfans.social.api.config.server.service.impl.workstation.MatrixQueryServiceImpl#resolveRuntime}根据判定结果装填,值为{@code runtime.status.reason.{runtime}.{子原因}} 形式的 key;服务端翻译后写入{@link #reasonText},避免中文/英文硬编码。
  - `reasonText` (string, 可选) — i18n 翻译后的原因文案(展示用)。由 Service 翻译后写入。前端可直接渲染。
  - `runtimeText` (string, 可选) — i18n 翻译后的文案(展示用)。由 Service 在装填时调用{@code I18nUtils.getMessage(runtime.getContent())} 写入,前端可直接渲染。
  - `availability` (object, 可选) — 设备可用性(整卡底色·不可用)+ 不可用原因列表。
  - `status` (string, 可选) — 可用性枚举:AVAILABLE / UNAVAILABLE(业务用)。
  - `unavailableReasons` (string [], 可选) — 不可用原因列表(UNAVAILABLE 时非空;AVAILABLE 时为空列表)。枚举顺序即后端判定顺序:MANUALLY_MARKED → NOT_REFRESHED → NO_PROXY。
  - `statusText` (string, 可选) — 可用性的 i18n 翻译(展示用),取{@code status.getContent()}。
  - `taskSummary` (object, 可选) — 设备任务摘要(卡片底部五态:异常 / 执行中 / 待执行 / 已完成 / 空闲)。老的{@link #taskStatus} 字段保留以兼容旧前端。
  - `badge` (string, 可选) — 卡片底部"5 选 1"主态枚举,前端按此选图标/颜色。优先级 FATAL > RUNNING > PENDING > COMPLETED > IDLE。
  - `text` (string, 可选) — 后端按当前 locale 组装好的整行文案(已注入失败数 / 任务名 / 时间等变量)。例: FATAL → "有 2 条失败任务" RUNNING → "正在执行 养号 A" PENDING → "20:00 养号 B" COMPLETED → "今日任务全完成" IDLE → "" (前端按"无任务"占位)
  - `cornerHintText` (string, 可选) — 设备卡右上角"提示"文案(后端已翻译为当前 locale,格式 "label: 说明"),命中即停(短路单值)。三种原因都独立于设备 runtime 状态(不判断关机/开机),按以下优先级命中: 未新机:{@code mobile_device.deployed != true} → device.corner.hint.not.refreshed 无代理: 设备不在已启用代理 phoneId 集合内 → device.corner.hint.no.proxy 无响应: ADB 不通 → device.corner.hint.adb.unresponsive全绿时为{@code null};前端仅需判断非空即显示问号 + hover 该文案。文案 key{@code device.corner.hint.*} 与{@code availability.reason.*} 不同源,避免污染设备卡整卡底色 UnavailableReasonEnum 的原有展示。
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
  - `displayMode` (string, 可选) — 卡片中部显示模式,必填。为 null 时 Service 抛 BusinessException。决定 DeviceVO 里哪些字段被装配(accounts / network / androidVersion 等)。
  - `keyword` (string, 可选) — 模糊搜索关键字。匹配字段:与名称、与编号、与 IP、账号名、芯片名称;任一命中即保留设备。实现见{@code MatrixQueryServiceImpl#filterDevicesByKeyword},三段匹配:① 设备级(内存):device_name / device_code / device_ip;② 芯片级(内存):所属 ARM 服务器的 arm_name;③ 账号级(DB):social_account.nick_name / app_account。关键字不空且三段全不命中时返回空集,触发 4.0.1 节点级裁剪,前端展示 0 chip / 0 device。
  - `userName` (string, 可选) — 关联用户:对 sys_user 的 user_name / nick_name 模糊匹配,再经 mobile_device_org.user_id 反查设备,保留分配给该用户的设备。
  - `chipNodeIds` (string [], 可选) — 节点 ID 多选(mobile_arm_node.id)。命中则只查这些节点;多个节点之间是 IN 关系。与{@link #armChips} 是 AND 关系:armChips 先按 chipCode 反查到候选 nodeId 集合,再与本集合求交;两者都为空时 = 不过滤。本字段为"节点级"裁剪(在 chipQuery 阶段生效),与设备级筛选器(节点行保留 / 设备裁掉)语义不同。前端传字符串数组(防 JS 长整数丢精度);后端按 Long 解析,非法值静默跳过。二级菜单数据源:前端从{@code GET /social/workstation/matrix/chip-tree} 拉菜单,把选中节点的{@code id} 数组回填到本字段。
  - `chipId` (string, 可选) — 节点 ID 单值(mobile_arm_node.id)。命中则只查这一个节点。已废弃:为兼容老前端 / 老 Redis 中已存的"保留视图",仍保留作为单值入口;服务端把{@code chipId} 与{@link #chipNodeIds} 合并去重后一起用于 IN 过滤。新代码请直接用{@link #chipNodeIds} 多选。「已废弃」since 2026-10-08, use {@link #chipNodeIds} for multi-select.「已废弃」
  - `mirrorRegion` (string, 可选) — 镜像区域:null=全部;{@link cn.callfans.social.api.config.api.enums.MirrorRegionEnum#CN} 国内 /{@link cn.callfans.social.api.config.api.enums.MirrorRegionEnum#OVERSEAS} 国外。匹配 mobile_arm_server.arm_area 字段(枚举 name() 与列值一致)。
  - `armChips` (string [], 可选) — 芯片类型多选:匹配 mobile_arm_server.chip_code,null/空=全部。链路:Service 端拼成 IN 子句,每个枚举同时匹配{@code name()} 与{@code toLowerCase()} 两种写法,兼容历史脏数据(列值偶有 "arm_3588" 这种小写)。该筛选为"节点级":在 chipQuery 阶段就把不命中的节点裁掉,避免节点行还在但设备全被裁掉的"空壳"卡片。可与{@link #chipNodeIds} 组合使用(AND 关系),典型场景:先按芯片类型大范围圈选,再按具体节点精确到几台。
  - `availability` (string, 可选) — 设备状态单选:null=全部。按设计 §九,共 3 类,互斥:可用 / 不可用 / 异常。 {@link AvailabilityFilterEnum#AVAILABLE} —— 通过全部就绪检查 (deployed=true 且 isLock=false 且已配置并开启代理,且无近期任务失败) {@link AvailabilityFilterEnum#UNAVAILABLE}—— 结构性不可用:任一命中即落入 (未一键新机 / 人工标注 / 无代理 / ADB 无响应) {@link AvailabilityFilterEnum#ANOMALY} —— 结构 OK,但最近 7 天内最近一条 SystemTask=FAIL与顶部统计卡「可用 / 异常」互斥 3 分口径一致,保证用户从概览下钻时数字对得上。实现见{@code MatrixQueryServiceImpl#filterDevicesByAvailability}。
  - `taskStatus` (string, 可选) — 任务状态单值:null=全部。设备下任一任务命中即保留该设备,匹配 social_system_task.task_status。枚举见{@link TaskStatusEnum}:BE_EXECUTED(待执行) / IN_EXECUTION(执行中) / SUCCESS(已完成) /FAIL(失败) / CANCEL(取消) / IN_QUEUE(队列中) / TIMEOUT(超时)。
  - `appId` (string, 可选) — 社媒 App 单选(TikTok / 小红书 / 微博 / 抖音 / Instagram / Facebook / YouTube 等)。取值是**应用名称**,精确匹配 social_application_management.application_name(即 AppOptionVO.name),不是平台编码、也不是应用主键 id。再经 social_account.app_id 反查设备。
  - `accountRisk` (string, 可选) — 账号风险等级单选:匹配 social_account.risk_level,null=全部。取值见{@link RiskLevel}:UNUSED(未使用) / NONE(无风险) / LOW(低风险) /HIGH(高风险) / DISABLE(已禁用)。设备下任一账号命中即保留。
  - `loginStatus` (string [], 可选) — 账号登录状态多选(社媒账号服务面板):null/空=全部。枚举见{@link LoginStatusEnum}:LOGINED(已登录) / NOT_LOGIN(未登录) / LOGIN_FAILE(登录失败) /BE_LOGIN(登陆中) / REALPHONE_LOGIN(真机登陆)。链路:Service 端拼成 IN 子句,匹配 social_account.login_status 列值(列值与{@link LoginStatusEnum#name()} 一致),任一账号命中即保留设备。实现见{@code MatrixQueryServiceImpl#filterDevicesByLoginStatus}。
  - `accountTags` (string [], 可选) — 账号标签 ID 多选:取值是标签主键 ID 字符串(social_account_tag.id,数字字符串)。二跳链路 social_account_tag_org → social_account,任一标签命中即保留账号,账号任一命中即保留设备。不再经 tag_name 反查,前端下拉框直接传标签 id(用 String 防止 JS 长整数丢精度)。
  - `networkRegions` (string [], 可选) — 网络地区多选(后台代理池级联选择:国家 / 地区 / 城市 / 代理地区)。取值是地区名(social_mobile_network.area,即 NetworkOptionVO.region),经 social_mobile_network_association.phone_id 反查设备,任一地区命中即保留。
  - `suiteIds` (string [], 可选) — 设备分组 ID 多选:匹配 social_mobile_suite_org.suite_id,命中即保留设备(任一 suite 命中即可)。优先级:与{@link #deviceIds} /{@link #suiteId} /{@link #suiteName} 共用一条筛选链,命中更高优先级字段后本字段被忽略(见类级 Javadoc)。
  - `deviceIds` (string [], 可选) — 设备 ID 白名单:非空时直接当白名单过滤,跳过{@link #suiteIds} /{@link #suiteId} /{@link #suiteName} 解析(与{@code MobileController.page} 语义一致)。前端传字符串数组(防 JS 长整数丢精度),后端按 Long 命中 mobile_device.id。与分组字段互斥,但与{@link #deviceStatuses} /{@link #deviceIdx} 可叠加。
  - `suiteId` (string, 可选) — 所属分组(单值 ID):{@link #suiteIds} 为空时本字段会被折叠为 1 元素 list;非空时本字段被忽略。典型场景:前端单选分组时只传{@code suiteId},与{@code suiteIds} 等价。
  - `suiteName` (string, 可选) — 所属分组名(模糊):{@link #deviceIds} /{@link #suiteIds} /{@link #suiteId} 都为空时生效,按 social_mobile_suite.suite_name LIKE → suiteId → 设备归属;实现见{@code MatrixQueryServiceImpl#filterDevicesBySuiteName}。
  - `deviceStatuses` (string [], 可选) — 设备状态多选:匹配 mobile_device.device_status(ONLINE / OFFLINE / SHUTDOWN 等),与分组字段独立,可叠加。取值与{@link cn.callfans.social.api.config.api.enums.DeviceStateEnum#name()} 一致,兼容历史脏数据(列值可能含大小写差异)。兼容说明:为避免前端误传 String(如{@code "deviceStatuses":"ONLINE"})导致整个筛选项被 Jackson 静默丢弃,改用{@link #setDeviceStatuses(Object)} 单 setter 内分发,详见该方法 Javadoc。
  - `deviceIdx` (string, 可选) — 设备序号(模糊):匹配 mobile_device.device_idx LIKE '%value%',纯内存匹配,无 DB IO。与分组字段独立,可叠加;实现见{@code MatrixQueryServiceImpl#filterDevicesByDeviceIdx}。
  - `server` (string [], 可选) — 所属服务器(节点 IP 多选,设备级筛选):匹配 mobile_device.node_ip LIKE '%value%',内存判定,无 DB IO;节点行保留,只裁掉不命中设备的 chip(配合{@code MatrixQueryServiceImpl} 的 needNodeCrop 裁掉空 chip)。字段语义与{@code MobileController.page /device/page} 的 server 字段对齐(XML:{@code tmd.node_ip LIKE CONCAT('%', #{con.server}, '%')}),两端以"设备所属节点 IP"为查询口径。早期版本曾误将本字段实现为mobile_arm_server.address 的 chip-level,后已纠正。多值语义:与{@code MobileController.page} 不同,本字段为真正多查询 —任一 IP 命中即保留设备(OR);空集合 / 全空字符串视为未传,不过滤。兼容说明:支持{@code "server":"10.13.1"} 单值入参与{@code "server":["10.13.1","10.13.2"]} 数组入参,详见{@link #setServer(Object)}。与{@link #keyword} /{@link #deviceIp} 同属设备级,与分组字段 /{@link #deviceStatuses} /{@link #deviceIdx} 独立可叠加;实现见{@code MatrixQueryServiceImpl#filterDevicesByServer}。
  - `deviceIp` (string, 可选) — 设备 IP(模糊):匹配 mobile_device.device_ip LIKE '%value%',纯内存匹配,无 DB IO,大小写不敏感。与{@link #keyword} 语义重叠(后者已覆盖 device_ip),但作为单独字段可让前端在不做关键字搜索时直接按 IP 圈选,避免与名称 / 账号名模糊匹配串台。与分组字段 /{@link #deviceStatuses} /{@link #deviceIdx} 独立,可叠加;实现见{@code MatrixQueryServiceImpl#filterDevicesByIp}。
- 响应字段：`code`, `msg`, `data`, `records`, `id`, `chipCode`, `chipName`, `nodeIp`, `mirrorRegion`, `androidVersion`, `maxConcurrency`, `virtualCount` …
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### matrix_post_social_workstation_matrix_projects
- 摘要：新建项目(项目编组)。
- `POST /social/workstation/matrix/projects` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `projectName` (string, 可选) — 项目名称,必填
  - `deviceIds` (string [], 可选) — 设备 ID(mobile_device.id)列表,必填,字符串防 JS 丢精度。按 mobile_device.node_id 分组生成 slot_index;设备必须存在且未被软删(deleted=0)。
  - `appId` (string, 可选) — 社媒平台 ID(选填,来自 social_application_management.id),单选
  - `parentId` (string, 可选) — 父项目 ID(选填);null = 创建顶级项目(默认),非 null = 创建二级子项目。约束:parent 必须是 Level 1 顶级项目(parent_id IS NULL),系统最多支持 2 层(parent 不允许再有自己的子项目)。
- 响应字段：`code`, `msg`, `data`, `id`, `name`, `slotCount`, `createTime`, `updateTime`, `driftedFromSnapshot`, `parentId`, `level`, `childCount` …

### matrix_post_social_workstation_matrix_projects_devices_unbind
- 摘要：项目矩阵总览 · 按设备集合解绑。
- `POST /social/workstation/matrix/projects/devices/unbind` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `projectId` (string, 可选) — 项目 ID(social_workstation_project.id),字符串防 JS 丢精度。必填。
  - `deviceIds` (string [], 可选) — 设备 ID 集合(mobile_device.id),字符串防 JS 丢精度。不传 / null = no-op;[] = 解绑全部;[ids] = 解绑子集,未命中跳过。
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### matrix_post_social_workstation_matrix_view_preset_save
- 摘要：保留视图(筛选预设):将当前筛选条件追加到当前登录用户的视图列表(保存到 Redis)。
- `POST /social/workstation/matrix/view-preset/save` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- 响应字段：`code`, `msg`, `data`, `key`, `licenseState`, `licenseExpireDate`

### matrix_put_social_workstation_matrix_projects
- 摘要：更新项目(部分更新)。
- `PUT /social/workstation/matrix/projects` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `id` (string, 可选) — 项目主键,必填(social_workstation_project.id),字符串防 JS 丢精度
  - `projectName` (string, 可选) — 项目名称,选填;非空时 trim 后覆盖
  - `appId` (string, 可选) — 社媒平台 ID(单选),选填
  - `deviceIds` (string [], 可选) — 设备 ID(mobile_device.id)列表,选填,字符串防 JS 丢精度。编辑时前端直接选设备用此字段:null = 不改绑定;[] = 清空所有绑定;[ids] = 增量绑定:仅插入该项目下当前未绑定的设备;已绑定的设备(按 project_id+device_id 命中)直接跳过,不删 slot、不动 slot_number。新增设备的 slot_number 按所在节点当前 max+1 递增。
  - `parentId` (string, 可选) — 父项目 ID(选填)。语义: null — 不改归属(保留现有 parentId) 非 null — 修改归属为目标父项目(必须 Level 1 顶级项目)
- 响应字段：`code`, `msg`, `data`, `id`, `name`, `slotCount`, `createTime`, `updateTime`, `driftedFromSnapshot`, `parentId`, `level`, `childCount` …

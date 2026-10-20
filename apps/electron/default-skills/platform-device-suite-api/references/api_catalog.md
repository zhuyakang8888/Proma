# platform-device-suite-api 接口目录

> 业务域：设备分组 · 来源：callfans-standard.md, callfans-platform.md · 共 15 个操作
> 本文件是 catalog 的人工可读版；机器可读单一真源见 `api_catalog.json`。

## 登录
- `auth_post_login`  POST `/auth/login`  →  返回 `token`，执行器自动处理，无需手工传 token。

## 操作一览

| operation_id | 方法 | 路由 | 路径 | 摘要 | 风险 |
| --- | --- | --- | --- | --- | --- |
| `device-suite_delete_social_suite_del` | DELETE | `/` | `/social/suite/del` | 批量删除设备分组信息 | destructive |
| `device-suite_delete_suite_del` | DELETE | `/platform` | `/suite/del` | 批量删除设备分组信息 | destructive |
| `device-suite_get_social_suite_detail_suiteid` | GET | `/` | `/social/suite/detail/{suiteId}` | 获取分组详情 | read |
| `device-suite_get_social_suite_list` | GET | `/` | `/social/suite/list` | 获取所有设备分组的名称列表 | read |
| `device-suite_get_social_suite_page` | GET | `/` | `/social/suite/page` | 获取设备分组列表 | read |
| `device-suite_get_social_suite_screen_page` | GET | `/` | `/social/suite/screen-page` | 获取设备分组列表（投屏矩阵） | read |
| `device-suite_get_suite_detail_suiteid` | GET | `/platform` | `/suite/detail/{suiteId}` | 获取分组详情 | read |
| `device-suite_get_suite_list` | GET | `/platform` | `/suite/list` | 获取设备分组列表 | read |
| `device-suite_get_suite_page` | GET | `/platform` | `/suite/page` | 获取设备分组列表 | read |
| `device-suite_get_suite_screen_page` | GET | `/platform` | `/suite/screen-page` | 获取设备分组列表（投屏矩阵） | read |
| `device-suite_post_social_suite_device_add` | POST | `/` | `/social/suite/device/add` | 分组追加设备（不清空已有设备，仅新增） | destructive |
| `device-suite_post_social_suite_device_sort` | POST | `/` | `/social/suite/device/sort` | 设备拖动排序（更新设备在分组内的顺序） | write |
| `device-suite_post_social_suite_update` | POST | `/` | `/social/suite/update` | 更新设备分组（先全量替换已有设备再新增） | write |
| `device-suite_post_suite_device_add` | POST | `/platform` | `/suite/device/add` | 分组更新仅增加设备 | write |
| `device-suite_post_suite_update` | POST | `/platform` | `/suite/update` | 更新设备分组 | write |

## 操作详情
### device-suite_delete_social_suite_del
- 摘要：批量删除设备分组信息
- `DELETE /social/suite/del` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `suiteIds` (string [], 必填) — 分组编号集合
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-suite_delete_suite_del
- 摘要：批量删除设备分组信息
- `DELETE /platform/suite/del` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `suiteIds` (string [], 必填) — 分组编号集合
- 响应字段：`code`, `msg`, `data`

### device-suite_get_social_suite_detail_suiteid
- 摘要：获取分组详情
- `GET /social/suite/detail/{suiteId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `suiteId`, `suiteName`, `suiteDesc`, `suiteType`, `suiteOrgs`, `id`, `deviceId`, `deviceIp`, `deviceCategory` …

### device-suite_get_social_suite_list
- 摘要：获取所有设备分组的名称列表
- `GET /social/suite/list` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-suite_get_social_suite_page
- 摘要：获取设备分组列表
- `GET /social/suite/page` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `records`, `id`, `suiteIdx`, `suiteName`, `suiteDesc`, `amount`, `proxyAmount`, `suiteType`, `accAmount` …

### device-suite_get_social_suite_screen_page
- 摘要：获取设备分组列表（投屏矩阵）
- `GET /social/suite/screen-page` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `records`, `id`, `suiteIdx`, `suiteName`, `suiteDesc`, `amount`, `proxyAmount`, `suiteType`, `accAmount` …

### device-suite_get_suite_detail_suiteid
- 摘要：获取分组详情
- `GET /platform/suite/detail/{suiteId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `suiteId`, `suiteName`, `suiteDesc`, `suiteType`, `suiteOrgs`, `id`, `deviceId`, `deviceIp`, `deviceCategory` …

### device-suite_get_suite_list
- 摘要：获取设备分组列表
- `GET /platform/suite/list` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`

### device-suite_get_suite_page
- 摘要：获取设备分组列表
- `GET /platform/suite/page` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `records`, `id`, `suiteIdx`, `suiteName`, `suiteDesc`, `amount`, `proxyAmount`, `suiteType`, `accAmount` …

### device-suite_get_suite_screen_page
- 摘要：获取设备分组列表（投屏矩阵）
- `GET /platform/suite/screen-page` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `records`, `id`, `suiteIdx`, `suiteName`, `suiteDesc`, `amount`, `proxyAmount`, `suiteType`, `accAmount` …

### device-suite_post_social_suite_device_add
- 摘要：分组追加设备（不清空已有设备，仅新增）
- `POST /social/suite/device/add` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `suiteId` (string, 可选) — 分组编号
  - `suiteName` (string, 必填) — 分组名称
  - `suiteDesc` (string, 可选) — 分组描述
  - `mobiles` (object [], 可选) — 设备信息
  - `id` (string, 可选) — 关联编号
  - `deviceId` (string, 可选) — 设备编号
  - `deviceIp` (string, 可选) — 设备Ip
  - `deviceCategory` (string, 可选) — 品牌
  - `deviceStatus` (string, 可选) — 设备状态
  - `deviceIdx` (string, 可选) — 设备序号
  - `deviceAliases` (string, 可选) — 设备别名
  - `accountIds` (string [], 可选) — 账号编号集合
  - `proxyIds` (string [], 可选) — 代理id集合
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-suite_post_social_suite_device_sort
- 摘要：设备拖动排序（更新设备在分组内的顺序）
- `POST /social/suite/device/sort` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `suiteId` (string, 可选) — 目标分组id
  - `sourceSuiteId` (string, 可选) — 源分组id（跨组拖拽时传入，为空表示同组排序）
  - `deviceIds` (string [], 可选) — 设备id集合
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-suite_post_social_suite_update
- 摘要：更新设备分组（先全量替换已有设备再新增）
- `POST /social/suite/update` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `suiteId` (string, 可选) — 分组编号
  - `suiteName` (string, 必填) — 分组名称
  - `suiteDesc` (string, 可选) — 分组描述
  - `mobiles` (object [], 可选) — 设备信息
  - `id` (string, 可选) — 关联编号
  - `deviceId` (string, 可选) — 设备编号
  - `deviceIp` (string, 可选) — 设备Ip
  - `deviceCategory` (string, 可选) — 品牌
  - `deviceStatus` (string, 可选) — 设备状态
  - `deviceIdx` (string, 可选) — 设备序号
  - `deviceAliases` (string, 可选) — 设备别名
  - `accountIds` (string [], 可选) — 账号编号集合
  - `proxyIds` (string [], 可选) — 代理id集合
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-suite_post_suite_device_add
- 摘要：分组更新仅增加设备
- `POST /platform/suite/device/add` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `suiteId` (string, 可选) — 分组编号
  - `suiteName` (string, 必填) — 分组名称
  - `suiteDesc` (string, 可选) — 分组描述
  - `mobiles` (object [], 可选) — 设备信息
  - `id` (string, 可选) — 关联编号
  - `deviceId` (string, 可选) — 设备编号
  - `deviceIp` (string, 可选) — 设备Ip
  - `deviceCategory` (string, 可选) — 品牌
  - `deviceStatus` (string, 可选) — 设备状态
  - `deviceIdx` (string, 可选) — 设备序号
  - `deviceAliases` (string, 可选) — 设备别名
  - `accountIds` (string [], 可选) — 账号编号集合
  - `proxyIds` (string [], 可选) — 代理id集合
- 响应字段：`code`, `msg`, `data`

### device-suite_post_suite_update
- 摘要：更新设备分组
- `POST /platform/suite/update` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `suiteId` (string, 可选) — 分组编号
  - `suiteName` (string, 必填) — 分组名称
  - `suiteDesc` (string, 可选) — 分组描述
  - `mobiles` (object [], 可选) — 设备信息
  - `id` (string, 可选) — 关联编号
  - `deviceId` (string, 可选) — 设备编号
  - `deviceIp` (string, 可选) — 设备Ip
  - `deviceCategory` (string, 可选) — 品牌
  - `deviceStatus` (string, 可选) — 设备状态
  - `deviceIdx` (string, 可选) — 设备序号
  - `deviceAliases` (string, 可选) — 设备别名
  - `accountIds` (string [], 可选) — 账号编号集合
  - `proxyIds` (string [], 可选) — 代理id集合
- 响应字段：`code`, `msg`, `data`

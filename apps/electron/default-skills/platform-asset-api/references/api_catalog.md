# platform-asset-api 接口目录

> 业务域：关联中心（账号/代理/容器资产池） · 来源：callfans-platform.md, callfans-standard.md · 共 64 个操作
> 本文件是 catalog 的人工可读版；机器可读单一真源见 `api_catalog.json`。

## 登录
- `auth_post_login`  POST `/auth/login`  →  返回 `token`，执行器自动处理，无需手工传 token。

## 操作一览

| operation_id | 方法 | 路由 | 路径 | 摘要 | 风险 |
| --- | --- | --- | --- | --- | --- |
| `asset_delete_batch_del_account` | DELETE | `/platform` | `/asset/batch/del-account` | 批量删除账号 | destructive |
| `asset_delete_batch_del_proxy` | DELETE | `/platform` | `/asset/batch/del-proxy` | 批量删除代理 | destructive |
| `asset_delete_dedicated_line` | DELETE | `/platform` | `/asset/dedicated-line` | 取消配置专线 | destructive |
| `asset_get_account_detail_accountid` | GET | `/platform` | `/asset/account/detail/{accountId}` | 查询账号详情 | read |
| `asset_get_account_num` | GET | `/platform` | `/asset/account/num` | 获取账号池数量 | read |
| `asset_get_aibox_device` | GET | `/platform` | `/asset/aibox-device` | 查询aibox设备 | read |
| `asset_get_cloud_device` | GET | `/platform` | `/asset/cloud-device` | 查询cloud设备 | read |
| `asset_get_container_num` | GET | `/platform` | `/asset/container/num` | 获取容器池数量 | read |
| `asset_get_device_brand` | GET | `/platform` | `/asset/device/brand` | 获取所有设备和品牌 | read |
| `asset_get_device_detail_deviceid` | GET | `/platform` | `/asset/device/detail/{deviceId}` | 查询设备详情 | read |
| `asset_get_device_group` | GET | `/platform` | `/asset/device/group` | 查询设备分组 | read |
| `asset_get_enums` | GET | `/platform` | `/asset/enums` | 获取枚举 | read |
| `asset_get_group` | GET | `/platform` | `/asset/group` | 查询分组 | read |
| `asset_get_operator` | GET | `/platform` | `/asset/operator` | 查询运营商 | read |
| `asset_get_proxy_num` | GET | `/platform` | `/asset/proxy/num` | 获取代理池数量 | read |
| `asset_get_proxy_region_tree` | GET | `/platform` | `/asset/proxy/region-tree` | 获取代理地区树 | read |
| `asset_get_summary` | GET | `/platform` | `/asset/summary` | 获取汇总信息 | read |
| `asset_get_template_account` | GET | `/platform` | `/asset/template/account` | 下载账号模板 | read |
| `asset_get_template_proxy` | GET | `/platform` | `/asset/template/proxy` | 下载代理模板 | read |
| `asset_post_account_import` | POST | `/platform` | `/asset/account/import` | 导入账号 | write |
| `asset_post_account_page` | POST | `/platform` | `/asset/account/page` | 获取账号资产分页信息 | read |
| `asset_post_account_unbind` | POST | `/platform` | `/asset/account/unbind` | 解绑账号 | destructive |
| `asset_post_add_account` | POST | `/platform` | `/asset/add/account` | 新增账号 | write |
| `asset_post_add_account_group` | POST | `/platform` | `/asset/add/account-group` | 账号分组新增 | write |
| `asset_post_add_account_remark` | POST | `/platform` | `/asset/add/account-remark` | 新增账号备注 | write |
| `asset_post_add_device_group` | POST | `/platform` | `/asset/add/device-group` | 设备分组新增 | write |
| `asset_post_add_proxy` | POST | `/platform` | `/asset/add/proxy` | 新增代理 | write |
| `asset_post_add_proxy_group` | POST | `/platform` | `/asset/add/proxy-group` | 新增代理分组 | write |
| `asset_post_add_proxy_remark` | POST | `/platform` | `/asset/add/proxy-remark` | 新增代理备注 | write |
| `asset_post_app_list` | POST | `/platform` | `/asset/app/list` | 应用列表 | read |
| `asset_post_batch_new_device` | POST | `/platform` | `/asset/batch/new-device` | 批量新机 | write |
| `asset_post_batch_reset_device` | POST | `/platform` | `/asset/batch/reset-device` | 批量重置设备 | write |
| `asset_post_batch_unbind` | POST | `/platform` | `/asset/batch/unbind` | 批量解绑账号与代理 | destructive |
| `asset_post_batch_unbind_account` | POST | `/platform` | `/asset/batch/unbind-account` | 批量解绑账号 | destructive |
| `asset_post_batch_unbind_proxy` | POST | `/platform` | `/asset/batch/unbind-proxy` | 批量解绑代理 | destructive |
| `asset_post_batch_update_account` | POST | `/platform` | `/asset/batch/update-account` | 批量更新账号 | write |
| `asset_post_check_account_device` | POST | `/platform` | `/asset/check/account-device` | 校验账号与容器，代理与容器 | read |
| `asset_post_container_page` | POST | `/platform` | `/asset/container/page` | 容器分页 | read |
| `asset_post_container_reset` | POST | `/platform` | `/asset/container/reset` | 重置容器 | write |
| `asset_post_dedicated_line` | POST | `/platform` | `/asset/dedicated-line` | 配置专线 | write |
| `asset_post_device_disable` | POST | `/platform` | `/asset/device/disable` | 调度禁用设备（标记设备不被调度中心选中） | write |
| `asset_post_device_enable` | POST | `/platform` | `/asset/device/enable` | 取消调度禁用（恢复设备可被调度） | write |
| `asset_post_device_list` | POST | `/platform` | `/asset/device/list` | 设备列表 | read |
| `asset_post_device_page` | POST | `/platform` | `/asset/device/page` | 获取容器资产分页信息 | read |
| `asset_post_device_remark` | POST | `/platform` | `/asset/device/remark` | 新增设备备注 | write |
| `asset_post_enable` | POST | `/platform` | `/asset/enable` | 正式启用 | write |
| `asset_post_intelligent_recognition` | POST | `/platform` | `/asset/intelligent/recognition` | 智能识别 | write |
| `asset_post_lock_account` | POST | `/platform` | `/asset/lock-account` | 锁定账号 | write |
| `asset_post_lock_device` | POST | `/platform` | `/asset/lock-device` | 锁定/解锁设备 | write |
| `asset_post_network_test` | POST | `/platform` | `/asset/network/test` | 测试网络代理是否可用 | read |
| `asset_post_new_device` | POST | `/platform` | `/asset/new-device` | 新机 | write |
| `asset_post_proxy_batch_update` | POST | `/platform` | `/asset/proxy/batch/update` | 批量编辑代理 | write |
| `asset_post_proxy_import` | POST | `/platform` | `/asset/proxy/import` | 导入代理 | write |
| `asset_post_proxy_page` | POST | `/platform` | `/asset/proxy/page` | 获取代理资产分页信息 | read |
| `asset_post_proxy_unbind` | POST | `/platform` | `/asset/proxy/unbind` | 解除绑定代理 | destructive |
| `asset_post_remove_top` | POST | `/platform` | `/asset/remove-top` | 移除置顶 | destructive |
| `asset_post_reverse_query` | POST | `/platform` | `/asset/reverse/query` | 反向查询 | read |
| `asset_post_social_proxy_suite_add` | POST | `/` | `/social/proxy-suite/add` | 增加代理到分组 | write |
| `asset_post_social_proxy_suite_update` | POST | `/` | `/social/proxy-suite/update` | 全量更新分组下的代理信息 | write |
| `asset_post_top` | POST | `/platform` | `/asset/top` | 置顶 | write |
| `asset_post_update_device_info` | POST | `/platform` | `/asset/update-device-info` | 更新设备信息 | write |
| `asset_post_update_proxy_group` | POST | `/platform` | `/asset/update/proxy-group` | 更新代理分组 | write |
| `asset_post_user_allocation` | POST | `/platform` | `/asset/user/allocation` | 用户分配 | write |
| `asset_put_operator_update` | PUT | `/platform` | `/asset/operator/update` | 运营商详情或编辑 | read |

## 操作详情
### asset_delete_batch_del_account
- 摘要：批量删除账号
- `DELETE /platform/asset/batch/del-account` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `accountIds` (string [], 可选) — 账号id集合
- 响应字段：`code`, `msg`, `data`

### asset_delete_batch_del_proxy
- 摘要：批量删除代理
- `DELETE /platform/asset/batch/del-proxy` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `proxyIds` (string [], 可选) — 代理id集合
- 响应字段：`code`, `msg`, `data`

### asset_delete_dedicated_line
- 摘要：取消配置专线
- `DELETE /platform/asset/dedicated-line` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceIds` (string [], 可选) — 容器ID
  - `routeIp` (string, 可选) — 路由IP
- 响应字段：`code`, `msg`, `data`

### asset_get_account_detail_accountid
- 摘要：查询账号详情
- `GET /platform/asset/account/detail/{accountId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `id`, `appAccount`, `nickName`, `accountPasswd`, `appName`, `appId`, `emailAddr`, `emailPasswd`, `deviceIdx` …

### asset_get_account_num
- 摘要：获取账号池数量
- `GET /platform/asset/account/num` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `accountTotalNum`, `accountUsedNum`, `accountWaitNum`, `accountRiskNum`

### asset_get_aibox_device
- 摘要：查询aibox设备
- `GET /platform/asset/aibox-device` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `mobileDeviceModels`, `brand`, `title`, `categories`, `model`, `deiceName`

### asset_get_cloud_device
- 摘要：查询cloud设备
- `GET /platform/asset/cloud-device` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `mobileDeviceModels`, `brand`, `title`, `categories`, `model`, `deiceName`

### asset_get_container_num
- 摘要：获取容器池数量
- `GET /platform/asset/container/num` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `deviceTotalNum`, `deviceUsedNum`, `deviceWaitingNum`, `deviceRiskNum`

### asset_get_device_brand
- 摘要：获取所有设备和品牌
- `GET /platform/asset/device/brand` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `mobileDeviceModels`, `brand`, `title`, `categories`, `model`, `deiceName`

### asset_get_device_detail_deviceid
- 摘要：查询设备详情
- `GET /platform/asset/device/detail/{deviceId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `id`, `deviceCode`, `deviceMode`, `deviceName`, `category`, `manufacturer`, `deviceStatus`, `resolutionRatio`, `nodeId` …

### asset_get_device_group
- 摘要：查询设备分组
- `GET /platform/asset/device/group` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `groupId`, `groupName`

### asset_get_enums
- 摘要：获取枚举
- `GET /platform/asset/enums` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`

### asset_get_group
- 摘要：查询分组
- `GET /platform/asset/group` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `id`, `suiteName`, `suiteDesc`, `amount`, `proxyAmount`, `accAmount`

### asset_get_operator
- 摘要：查询运营商
- `GET /platform/asset/operator` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `id`, `operatorZhName`, `operatorEnName`, `allName`

### asset_get_proxy_num
- 摘要：获取代理池数量
- `GET /platform/asset/proxy/num` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `proxyTotalNum`, `proxyUsedNum`, `proxyWaitNum`, `proxyRiskNum`

### asset_get_proxy_region_tree
- 摘要：获取代理地区树
- `GET /platform/asset/proxy/region-tree` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `name`, `level`, `children`, `name`, `level`, `children`

### asset_get_summary
- 摘要：获取汇总信息
- `GET /platform/asset/summary` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `deviceTotalNum`, `deviceUsedNum`, `accountTotalNum`, `accountUsedNum`, `proxyTotalNum`, `proxyUsedNum`, `userTotalNum`, `userUsedNum`

### asset_get_template_account
- 摘要：下载账号模板
- `GET /platform/asset/template/account` · 风险：read · 鉴权：required

### asset_get_template_proxy
- 摘要：下载代理模板
- `GET /platform/asset/template/proxy` · 风险：read · 鉴权：required

### asset_post_account_import
- 摘要：导入账号
- `POST /platform/asset/account/import` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- 响应字段：`code`, `msg`, `data`

### asset_post_account_page
- 摘要：获取账号资产分页信息
- `POST /platform/asset/account/page` · 风险：read · 鉴权：required
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
  - `appIds` (string [], 可选) — 应用id
  - `accountName` (string, 可选) — 账号
  - `suiteIds` (string [], 可选) — 分组id集合
  - `sortType` (string, 可选) — 排序条件 1. 按风险排序（低风险的靠上） 2. 按录入时间排序（新录入的先显示）
  - `deviceIds` (string [], 可选) — 设备id集合
  - `accountIds` (string [], 可选) — 账号id集合
- 响应字段：`code`, `msg`, `data`, `records`, `platform`, `appId`, `inputTime`, `riskTips`, `nickName`, `account`, `accountId`, `userAccount` …
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### asset_post_account_unbind
- 摘要：解绑账号
- `POST /platform/asset/account/unbind` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `accountIds` (string [], 可选) — 账号ID
  - `deviceId` (string, 可选) — 设备ID
  - `bind` (string, 可选) — 绑定状态 "UNBINDING"
- 响应字段：`code`, `msg`, `data`

### asset_post_add_account
- 摘要：新增账号
- `POST /platform/asset/add/account` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `id` (string, 可选) — 账号id
  - `nickName` (string, 可选) — 用户昵称
  - `appAccount` (string, 可选) — 账号
  - `accountPasswd` (string, 可选) — 账号密码
  - `emailAddr` (string, 可选) — 邮箱地址
  - `emailPasswd` (string, 可选) — 邮箱密码
  - `loginStatus` (string, 可选) — 登录状态
  - `twiceCheck` (string, 可选) — 二次确认信息
  - `appId` (string, 可选) — 所属应用编号
  - `appName` (string, 可选) — 应用名称
  - `riskLevel` (string, 可选) — 风险等级
  - `suiteId` (string, 可选) — 分组编号
  - `suiteName` (string, 可选) — 分组名称
  - `suiteDesc` (string, 可选) — 分组描述
  - `remark` (string, 可选) — 备注
- 响应字段：`code`, `msg`, `data`

### asset_post_add_account_group
- 摘要：账号分组新增
- `POST /platform/asset/add/account-group` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `suiteId` (string, 可选) — 分组编号
  - `suiteName` (string, 可选) — 分组名称
  - `suiteDesc` (string, 可选) — 分组描述
  - `accountIds` (string [], 可选) — 账号id集合
- 响应字段：`code`, `msg`, `data`

### asset_post_add_account_remark
- 摘要：新增账号备注
- `POST /platform/asset/add/account-remark` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `accountId` (string, 可选) — 账号id
  - `remark` (string, 可选) — 账号备注
- 响应字段：`code`, `msg`, `data`

### asset_post_add_device_group
- 摘要：设备分组新增
- `POST /platform/asset/add/device-group` · 风险：write · 鉴权：required
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
- 响应字段：`code`, `msg`, `data`

### asset_post_add_proxy
- 摘要：新增代理
- `POST /platform/asset/add/proxy` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `ip` (string, 可选) — IP地址
  - `area` (string, 可选) — 地区（如：北京、旧金山）
  - `agreement` (string, 可选) — 协议类型（如HTTP/HTTPS、TCP/UDP）
  - `networkStatus` (string, 可选) — 网络状态 BINDING(已绑定)/ARREARAGE(欠费)/LEISURE(空闲)/INVALID(无效)
  - `expirationTime` (string, 可选) — 过期时间
  - `networkLink` (string, 可选) — 网络链接URL
  - `phones` (object [], 可选) — 节点信息集合
  - `phoneId` (string, 可选) — 节点id
  - `phoneIp` (string, 可选) — 节点地址
  - `proxyLinkIp` (string, 可选) — 代理ip
  - `proxyLinkPort` (integer, 可选) — 代理端口
  - `username` (string, 可选) — 用户名
  - `password` (string, 可选) — 密码
- 响应字段：`code`, `msg`, `data`

### asset_post_add_proxy_group
- 摘要：新增代理分组
- `POST /platform/asset/add/proxy-group` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `suiteId` (string, 可选) — 分组编号
  - `suiteName` (string, 可选) — 分组名称
  - `suiteDesc` (string, 可选) — 分组描述
  - `proxyIds` (string [], 可选) — 代理id集合
- 响应字段：`code`, `msg`, `data`

### asset_post_add_proxy_remark
- 摘要：新增代理备注
- `POST /platform/asset/add/proxy-remark` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `proxyId` (string, 可选) — 代理ID
  - `remark` (string, 可选) — 代理备注
- 响应字段：`code`, `msg`, `data`

### asset_post_app_list
- 摘要：应用列表
- `POST /platform/asset/app/list` · 风险：read · 鉴权：required
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
  - `applicationName` (string, 可选) — 应用名称
  - `applicationStatus` (integer, 可选) — 应用状态 0：启用 1：禁用
- 响应字段：`code`, `msg`, `data`, `records`, `id`, `applicationName`, `programType`, `id`, `logoPath`, `programName`, `scriptId`, `form` …
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### asset_post_batch_new_device
- 摘要：批量新机
- `POST /platform/asset/batch/new-device` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceReqs` (object [], 可选) — 一键新机设备信息集合
  - `deviceId` (string, 必填) — 设备编号
  - `armId` (string, 可选) — 服务器编号
  - `nodeId` (string, 可选) — 节点编号
  - `chipCode` (string, 可选) — 芯片类型
  - `onClickNewBrandReqs` (object [], 可选) — 手机品牌、运营商信息集合
  - `brand` (string, 必填) — 品牌
  - `category` (string, 可选) — 型号
  - `operatorReqs` (object [], 可选) — 运营商集合
  - `netOperatorId` (string, 可选) — 运营商编号
  - `netOperator` (string, 可选) — 运营商
- 响应字段：`code`, `msg`, `data`, `totalCount`, `successCount`, `failedCount`, `totalDuration`, `results`, `deviceIp`, `success`, `message`, `duration`

### asset_post_batch_reset_device
- 摘要：批量重置设备
- `POST /platform/asset/batch/reset-device` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceIds` (string [], 可选) — 容器id集合
- 响应字段：`code`, `msg`, `data`

### asset_post_batch_unbind
- 摘要：批量解绑账号与代理
- `POST /platform/asset/batch/unbind` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceIds` (string [], 可选) — 设备id集合
  - `type` (string, 可选) — 解绑类型 代理/账号/全部
  - `isDel` (boolean, 可选) — 是否删除
- 响应字段：`code`, `msg`, `data`

### asset_post_batch_unbind_account
- 摘要：批量解绑账号
- `POST /platform/asset/batch/unbind-account` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `accountIds` (string [], 可选) — 账号id集合
- 响应字段：`code`, `msg`, `data`

### asset_post_batch_unbind_proxy
- 摘要：批量解绑代理
- `POST /platform/asset/batch/unbind-proxy` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `proxyIds` (string [], 可选) — 代理id集合
- 响应字段：`code`, `msg`, `data`

### asset_post_batch_update_account
- 摘要：批量更新账号
- `POST /platform/asset/batch/update-account` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `accountIds` (string [], 可选) — 账号id集合
  - `riskLevel` (string, 可选)
  - `loginStatus` (string, 可选)
  - `remark` (string, 可选)
- 响应字段：`code`, `msg`, `data`

### asset_post_check_account_device
- 摘要：校验账号与容器，代理与容器
- `POST /platform/asset/check/account-device` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceEnables` (object [], 可选) — 启用参数
  - `deviceId` (string, 可选) — 容器（设备）ID 集合
  - `deviceIp` (string, 可选) — 容器（设备）IP
  - `accountIds` (string [], 可选) — 账号 ID 集合
  - `proxyId` (string, 可选) — 代理（网络）id
- 响应字段：`code`, `msg`, `data`

### asset_post_container_page
- 摘要：容器分页
- `POST /platform/asset/container/page` · 风险：read · 鉴权：required
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
  - `screening` (string, 可选) — 设备筛选
  - `search` (string, 可选) — 设备搜索
  - `suiteIds` (string [], 可选) — 设备分组名称
  - `relationStatus` (string, 可选) — 关联状态
  - `sortType` (string, 可选) — 排序字段
  - `server` (string [], 可选) — 所属服务器
  - `startTime` (string, 可选) — 开始 时间
  - `endTime` (string, 可选) — 结束 时间
  - `chip` (string, 可选) — 所属芯片
  - `systemVersion` (string, 可选) — rom版
  - `brand` (string, 可选) — 手机品牌
  - `deviceMode` (string, 可选) — 手机型号
  - `netOperator` (string, 可选) — 运营商
  - `phoneNumber` (string, 可选) — 手机号码
  - `deviceArea` (string, 可选) — 设备版本
  - `remark` (string, 可选) — 备注
  - `appAccount` (string, 可选) — 关联账号
  - `networkIp` (string, 可选) — 关联代理
  - `mobileDeviceIp` (string, 可选) — 手机设备ip
  - `lockIds` (string [], 可选) — 锁id
  - `armId` (string, 可选) — 所属服务器编号
  - `deviceIds` (string [], 可选) — 设备id结合
- 响应字段：`code`, `msg`, `data`, `records`, `server`, `inputTime`, `chip`, `deviceIp`, `romVersion`, `phoneBrand`, `phoneModel`, `operator` …
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### asset_post_container_reset
- 摘要：重置容器
- `POST /platform/asset/container/reset` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceIds` (string [], 可选) — 设备ID集合
- 响应字段：`code`, `msg`, `data`

### asset_post_dedicated_line
- 摘要：配置专线
- `POST /platform/asset/dedicated-line` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceIds` (string [], 可选) — 容器ID
  - `routeIp` (string, 可选) — 路由IP
- 响应字段：`code`, `msg`, `data`

### asset_post_device_disable
- 摘要：调度禁用设备（标记设备不被调度中心选中）
- `POST /platform/asset/device/disable` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `projectId` (integer, 可选) — 项目 ID
  - `deviceIds` (string [], 可选) — 设备 ID 列表（支持批量）
  - `reason` (string, 可选) — 禁用原因（可选）
- 响应字段：`code`, `msg`, `data`

### asset_post_device_enable
- 摘要：取消调度禁用（恢复设备可被调度）
- `POST /platform/asset/device/enable` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `projectId` (integer, 可选) — 项目 ID
  - `deviceIds` (string [], 可选) — 设备 ID 列表（支持批量）
  - `reason` (string, 可选) — 禁用原因（可选）
- 响应字段：`code`, `msg`, `data`

### asset_post_device_list
- 摘要：设备列表
- `POST /platform/asset/device/list` · 风险：read · 鉴权：required
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
  - `deviceIp` (string, 可选) — 设备ip
- 响应字段：`code`, `msg`, `data`, `records`, `deviceIp`, `deviceId`, `disabled`, `isLock`, `total`, `size`, `current`, `orders` …
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### asset_post_device_page
- 摘要：获取容器资产分页信息
- `POST /platform/asset/device/page` · 风险：read · 鉴权：required
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
  - `screening` (string, 可选) — 容器筛选
  - `search` (string, 可选) — 容器搜索
  - `groupId` (string, 可选) — 容器分组
  - `sort` (object, 可选) — 排序
  - `key` (string, 可选)
- 响应字段：`code`, `msg`, `data`, `records`, `server`, `inputTime`, `chip`, `deviceIp`, `deviceId`, `romVersion`, `phoneBrand`, `phoneModel` …
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### asset_post_device_remark
- 摘要：新增设备备注
- `POST /platform/asset/device/remark` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceId` (string, 可选) — 设备ID
  - `remark` (string, 可选) — 设备备注
- 响应字段：`code`, `msg`, `data`

### asset_post_enable
- 摘要：正式启用
- `POST /platform/asset/enable` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceEnables` (object [], 可选) — 启用参数
  - `deviceId` (string, 可选) — 容器（设备）ID 集合
  - `deviceIp` (string, 可选) — 容器（设备）IP
  - `accountIds` (string [], 可选) — 账号 ID 集合
  - `proxyId` (string, 可选) — 代理（网络）id
- 响应字段：`code`, `msg`, `data`

### asset_post_intelligent_recognition
- 摘要：智能识别
- `POST /platform/asset/intelligent/recognition` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `networkLink` (string, 可选) — 代理链接
- 响应字段：`code`, `msg`, `data`, `proxyLinkIp`, `proxyLinkPort`, `username`, `password`

### asset_post_lock_account
- 摘要：锁定账号
- `POST /platform/asset/lock-account` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `accountIds` (string [], 可选) — 账号id集合
  - `lock` (boolean, 可选) — 是否锁定
- 响应字段：`code`, `msg`, `data`

### asset_post_lock_device
- 摘要：锁定/解锁设备
- `POST /platform/asset/lock-device` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceIds` (string [], 可选) — 设备ID集合
  - `isLock` (boolean, 可选) — 是否锁
- 响应字段：`code`, `msg`, `data`

### asset_post_network_test
- 摘要：测试网络代理是否可用
- `POST /platform/asset/network/test` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `ids` (string [], 可选) — 代理id集合
- 响应字段：`code`, `msg`, `data`

### asset_post_new_device
- 摘要：新机
- `POST /platform/asset/new-device` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceId` (string, 可选) — 设备编号
  - `armId` (string, 可选) — 服务器编号
  - `nodeId` (string, 可选) — 节点编号
  - `brand` (string, 可选) — 品牌
  - `category` (string, 可选) — 型号
  - `phoneNumber` (string, 可选) — 手机号码
  - `imei` (string, 可选) — imei码
  - `serialNumber` (string, 可选) — 序列号
  - `battery` (string, 可选) — 电量
  - `netOperator` (string, 可选) — 运营商
  - `imsi` (string, 可选)
  - `sn` (string, 可选)
  - `iccid` (string, 可选)
  - `chipCode` (string, 可选) — 芯片类型
  - `areaCodeZone` (string, 可选) — 时区
- 响应字段：`code`, `msg`, `data`

### asset_post_proxy_batch_update
- 摘要：批量编辑代理
- `POST /platform/asset/proxy/batch/update` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `proxyIds` (string [], 可选) — 地区
  - `area` (string, 可选) — 地区（如：北京、旧金山）
  - `agreement` (string, 可选) — 协议类型（如HTTP/HTTPS、TCP/UDP）
  - `isRenew` (boolean, 可选) — 是否续费
  - `expirationTime` (string, 可选) — 过期时间
- 响应字段：`code`, `msg`, `data`

### asset_post_proxy_import
- 摘要：导入代理
- `POST /platform/asset/proxy/import` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- 响应字段：`code`, `msg`, `data`

### asset_post_proxy_page
- 摘要：获取代理资产分页信息
- `POST /platform/asset/proxy/page` · 风险：read · 鉴权：required
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
  - `area` (string [], 可选) — 地区
  - `proxy` (string, 可选) — 代理
  - `suiteIds` (string [], 可选) — 分组
  - `sortType` (string, 可选) — 排序条件 1. 按风险排序（低风险的靠上） 2. 按录入时间排序（新录入的先显示）
  - `deviceIds` (string [], 可选) — 设备id集合
  - `proxyIds` (string [], 可选) — 代理id结合
- 响应字段：`code`, `msg`, `data`, `records`, `proxyId`, `area`, `inputTime`, `protocol`, `ip`, `proxyLinkIp`, `proxyLinkPort`, `username` …
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### asset_post_proxy_unbind
- 摘要：解除绑定代理
- `POST /platform/asset/proxy/unbind` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `assId` (string, 可选) — 关联id集合
  - `proxyId` (string, 可选) — 代理id
- 响应字段：`code`, `msg`, `data`

### asset_post_remove_top
- 摘要：移除置顶
- `POST /platform/asset/remove-top` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceIds` (string [], 可选) — 设备ID
- 响应字段：`code`, `msg`, `data`

### asset_post_reverse_query
- 摘要：反向查询
- `POST /platform/asset/reverse/query` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `accountIds` (string [], 可选) — 账号id集合
  - `proxyIds` (string [], 可选) — 代理id集合
  - `deviceIds` (string [], 可选) — 容器id集合
- 响应字段：`code`, `msg`, `data`, `accountInfos`, `account`, `accountId`, `color`, `logoPath`, `nickName`, `proxyInfos`, `proxyId`, `area` …

### asset_post_social_proxy_suite_add
- 摘要：增加代理到分组
- `POST /social/proxy-suite/add` · 风险：write · 鉴权：required
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

### asset_post_social_proxy_suite_update
- 摘要：全量更新分组下的代理信息
- `POST /social/proxy-suite/update` · 风险：write · 鉴权：required
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

### asset_post_top
- 摘要：置顶
- `POST /platform/asset/top` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceIds` (string [], 可选) — 设备ID
- 响应字段：`code`, `msg`, `data`

### asset_post_update_device_info
- 摘要：更新设备信息
- `POST /platform/asset/update-device-info` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceIds` (string [], 必填) — 设备ID集合
  - `operation` (string, 可选) — 操作指令，SHUTDOWN：关机/POWER_ON:开机/RESTART:重启/CHANGE_IMG:更换镜像/MODIFY:更新设备信息/GPS:修改定位信息
  - `imgId` (string, 可选) — 镜像ID
  - `modifyDeviceInfoReq` (object, 可选) — 设备信息
  - `brand` (string, 可选) — 手机品牌
  - `category` (string, 可选) — 手机型号
  - `phoneNumber` (string, 可选) — 手机号码
  - `lon` (number, 可选) — 经度
  - `lat` (number, 可选) — 纬度
  - `alt` (number, 可选) — 海拔
  - `imei` (string, 可选) — imei码
  - `serialNumber` (string, 可选) — 序列号
  - `battery` (string, 可选) — 电量
  - `netOperator` (string, 可选) — 运营商
  - `imsi` (string, 可选)
  - `sn` (string, 可选)
  - `iccid` (string, 可选)
- 响应字段：`code`, `msg`, `data`

### asset_post_update_proxy_group
- 摘要：更新代理分组
- `POST /platform/asset/update/proxy-group` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `suiteId` (string, 可选) — 分组编号
  - `suiteName` (string, 可选) — 分组名称
  - `suiteDesc` (string, 可选) — 分组描述
  - `proxyIds` (string [], 可选) — 代理id集合
- 响应字段：`code`, `msg`, `data`

### asset_post_user_allocation
- 摘要：用户分配
- `POST /platform/asset/user/allocation` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceIds` (string [], 可选) — 设备id集合
  - `userIds` (string [], 可选) — 用户id集合
  - `networkIds` (string [], 可选) — 网络id集合
  - `accountIds` (string [], 可选) — 账号id集合
- 响应字段：`code`, `msg`, `data`

### asset_put_operator_update
- 摘要：运营商详情或编辑
- `PUT /platform/asset/operator/update` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `operatorId` (string, 可选) — 运营商id
- 响应字段：`code`, `msg`, `data`, `phoneNum`, `power`, `serialNumber`, `imei`, `imsi`, `sn`, `iccid`, `androidId`, `areaCodeZone`

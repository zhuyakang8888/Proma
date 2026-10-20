# platform-account-api 接口目录

> 业务域：社媒账号管理 · 来源：callfans-standard.md, callfans-platform.md · 共 61 个操作
> 本文件是 catalog 的人工可读版；机器可读单一真源见 `api_catalog.json`。

## 登录
- `auth_post_login`  POST `/auth/login`  →  返回 `token`，执行器自动处理，无需手工传 token。

## 操作一览

| operation_id | 方法 | 路由 | 路径 | 摘要 | 风险 |
| --- | --- | --- | --- | --- | --- |
| `account_delete_social_account_del` | DELETE | `/` | `/social/account/del` | 批量删除账户信息 | destructive |
| `account_delete_social_account_info` | DELETE | `/` | `/social/account/info` | 删除账号信息 | destructive |
| `account_delete_social_account_quit` | DELETE | `/` | `/social/account/quit` | 退出计划 | destructive |
| `account_delete_social_account_suite_del` | DELETE | `/` | `/social/account-suite/del` | 删除账号分组信息 | destructive |
| `account_get_social_account_account_total` | GET | `/` | `/social/account/account-total` | 查询账号数量和被绑定的账号数量 | read |
| `account_get_social_account_accountid` | GET | `/` | `/social/account/{accountId}` | 账号个人中心查询 | read |
| `account_get_social_account_detail_accountid` | GET | `/` | `/social/account/detail/{accountId}` | 获取账号详情 | read |
| `account_get_social_account_device_deviceid` | GET | `/` | `/social/account/device/{deviceId}` | 根据设备id查询账号信息 | read |
| `account_get_social_account_device_total` | GET | `/` | `/social/account/device-total` | 查询已绑定的设备的账号 | read |
| `account_get_social_account_group_accountid` | GET | `/` | `/social/account/group/{accountId}` | 获取账号分组信息 | read |
| `account_get_social_account_plan_page` | GET | `/` | `/social/account/plan/page` | 账号下查询计划列表 | read |
| `account_get_social_account_risk_device_total` | GET | `/` | `/social/account/risk-device-total` | 查询风控设备数 | read |
| `account_get_social_account_sec_code` | GET | `/` | `/social/account/sec/{code}` | 获取一次性校验码 | read |
| `account_get_social_account_user_id` | GET | `/` | `/social/account/user/{id}` | 根据id账号信息 | read |
| `account_get_social_account_user_info_id` | GET | `/` | `/social/account/user/info/{id}` | 根据id查询账号信息 | read |
| `account_get_social_measure_info` | GET | `/` | `/social/measure/info` | 查询总数据信息 | read |
| `account_get_social_measure_point` | GET | `/` | `/social/measure/point` | 查询测点 | read |
| `account_post_account_suite_update` | POST | `/platform` | `/account-suite/update` | 更新账号分组 | write |
| `account_post_accounts` | POST | `/platform` | `/accounts` | 根据用户id查账号 | write |
| `account_post_accounts_band` | POST | `/platform` | `/accounts/band` | 绑定账号 | write |
| `account_post_accounts_page` | POST | `/platform` | `/accounts/page` | 查询应用账号分页 | read |
| `account_post_accounts_users` | POST | `/platform` | `/accounts/users` | 根据账号id查用户 | write |
| `account_post_accounts_users_page` | POST | `/platform` | `/accounts/users/page` | 查询用户分页 | read |
| `account_post_list` | POST | `/platform` | `/account/list` | 分页查询账号列表 | read |
| `account_post_social_account_active` | POST | `/` | `/social/account/active` | 根据id查询账号活跃度 | read |
| `account_post_social_account_add_tag` | POST | `/` | `/social/account/add-tag` | 新增账号标签 | write |
| `account_post_social_account_batch_join` | POST | `/` | `/social/account/batch/join` | 批量加入计划 | write |
| `account_post_social_account_batch_unbind` | POST | `/` | `/social/account/batch/unbind` | 批量解绑账号 | destructive |
| `account_post_social_account_batch_unbind_2` | POST | `/` | `/social/account/batch-unbind` | 批量解绑账号/代理 | destructive |
| `account_post_social_account_bind_account` | POST | `/` | `/social/account/bind-account` | 获取账号绑定的设备和代理 | read |
| `account_post_social_account_bind_tag` | POST | `/` | `/social/account/bind-tag` | 账号绑定标签 | write |
| `account_post_social_account_check` | POST | `/` | `/social/account/check` | 校验账号和设备（含区域匹配、绑定一致性、代理冲突等） | read |
| `account_post_social_account_collection_switch` | POST | `/` | `/social/account/collection-switch` | 数据采集开关（开启/关闭账号的数据采集脚本） | write |
| `account_post_social_account_del_tag` | POST | `/` | `/social/account/del-tag` | 删除账号标签 | destructive |
| `account_post_social_account_homepage_save` | POST | `/` | `/social/account/homepage/save` | 账号主页保存 | read |
| `account_post_social_account_import_xlsx` | POST | `/` | `/social/account/import/xlsx` | 通过 Excel 导入账号信息 | write |
| `account_post_social_account_info_cancel` | POST | `/` | `/social/account/info/cancel` | 取消任务 | write |
| `account_post_social_account_info_page` | POST | `/` | `/social/account/info/page` | 账号信息同步分页 | read |
| `account_post_social_account_join` | POST | `/` | `/social/account/join` | 账号加入公用计划 | write |
| `account_post_social_account_list` | POST | `/` | `/social/account/list` | 账号列表查询 | read |
| `account_post_social_account_lock` | POST | `/` | `/social/account/lock` | 锁定账号 | write |
| `account_post_social_account_remark` | POST | `/` | `/social/account/remark` | 新增备注 | write |
| `account_post_social_account_reverse` | POST | `/` | `/social/account/reverse` | 反向查询分页 | read |
| `account_post_social_account_run_process` | POST | `/` | `/social/account/run/process` | 已废弃-执行流程脚本 | write |
| `account_post_social_account_suite_add` | POST | `/` | `/social/account-suite/add` | 增加账号到分组 | write |
| `account_post_social_account_suite_update` | POST | `/` | `/social/account-suite/update` | 更新账号分组 | write |
| `account_post_social_account_tag_list` | POST | `/` | `/social/account/tag-list` | 查询标签列表 | read |
| `account_post_social_account_update` | POST | `/` | `/social/account/update` | 账号更新 | write |
| `account_post_social_account_user_info` | POST | `/` | `/social/account/user/info` | 同步用户信息 | write |
| `account_post_social_account_user_info_update` | POST | `/` | `/social/account/user/info/update` | 更新用户信息 | write |
| `account_post_social_accounts` | POST | `/` | `/social/accounts` | 根据用户id查账号 | write |
| `account_post_social_accounts_band` | POST | `/` | `/social/accounts/band` | 绑定账号 | write |
| `account_post_social_accounts_page` | POST | `/` | `/social/accounts/page` | 查询应用账号分页 | read |
| `account_post_social_accounts_users` | POST | `/` | `/social/accounts/users` | 根据账号id查用户 | write |
| `account_post_social_accounts_users_page` | POST | `/` | `/social/accounts/users/page` | 查询用户分页 | read |
| `account_post_social_measure_accountinfo` | POST | `/` | `/social/measure/accountInfo` | 账号年月日数据统计 | write |
| `account_post_social_measure_hotpost` | POST | `/` | `/social/measure/hotPost` | 查询账号热帖 | read |
| `account_post_social_measure_overview` | POST | `/` | `/social/measure/overview` | 账号信息总览 | write |
| `account_put_social_account_bind` | PUT | `/` | `/social/account/bind` | 账号绑定或解绑设备 | destructive |
| `account_put_social_account_login_again_accountid` | PUT | `/` | `/social/account/login/again/{accountId}` | 账户重新登录 | write |
| `account_put_social_account_login_batch` | PUT | `/` | `/social/account/login/batch` | 批量登录 | write |

## 操作详情
### account_delete_social_account_del
- 摘要：批量删除账户信息
- `DELETE /social/account/del` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `accountIds` (string [], 必填) — 账号信息
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### account_delete_social_account_info
- 摘要：删除账号信息
- `DELETE /social/account/info` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `taskIds` (string [], 可选) — 账号信息ID集合
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### account_delete_social_account_quit
- 摘要：退出计划
- `DELETE /social/account/quit` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `rltIds` (string [], 可选) — 关联ids
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### account_delete_social_account_suite_del
- 摘要：删除账号分组信息
- `DELETE /social/account-suite/del` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `suiteIds` (string [], 必填) — 分组编号集合
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### account_get_social_account_account_total
- 摘要：查询账号数量和被绑定的账号数量
- `GET /social/account/account-total` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `accountTotalNum`, `accountUsedNum`, `accountWaitNum`, `accountRiskNum`, `licenseState`, `licenseExpireDate`

### account_get_social_account_accountid
- 摘要：账号个人中心查询
- `GET /social/account/{accountId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `id`, `appAccount`, `accountPasswd`, `appName`, `emailAddr`, `emailPasswd`, `safeEmailAddr`, `safeEmailPasswd`, `area` …

### account_get_social_account_detail_accountid
- 摘要：获取账号详情
- `GET /social/account/detail/{accountId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `id`, `appAccount`, `nickName`, `accountPasswd`, `appName`, `appId`, `emailAddr`, `emailPasswd`, `deviceIdx` …

### account_get_social_account_device_deviceid
- 摘要：根据设备id查询账号信息
- `GET /social/account/device/{deviceId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `appId`, `appLogo`, `accountId`, `userAccount`, `accountNickname`, `color`, `licenseState`, `licenseExpireDate`

### account_get_social_account_device_total
- 摘要：查询已绑定的设备的账号
- `GET /social/account/device-total` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `creatorId`, `createTime`, `updatorId`, `updateTime`, `deleted`, `version`, `deptId`, `params`, `key` …

### account_get_social_account_group_accountid
- 摘要：获取账号分组信息
- `GET /social/account/group/{accountId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `groupName`, `groupMemberCount`, `licenseState`, `licenseExpireDate`

### account_get_social_account_plan_page
- 摘要：账号下查询计划列表
- `GET /social/account/plan/page` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### account_get_social_account_risk_device_total
- 摘要：查询风控设备数
- `GET /social/account/risk-device-total` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### account_get_social_account_sec_code
- 摘要：获取一次性校验码
- `GET /social/account/sec/{code}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### account_get_social_account_user_id
- 摘要：根据id账号信息
- `GET /social/account/user/{id}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `totalFans`, `totalPost`, `totalFollows`, `totalComments`, `totalActiveTime`, `totalLikes`, `totalVideoViewing`, `totalShare`, `totalVideoPosted` …

### account_get_social_account_user_info_id
- 摘要：根据id查询账号信息
- `GET /social/account/user/info/{id}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `id`, `userName`, `nickName`, `profile`, `accountType`, `location`, `eMail`, `imageUrl`, `taskStatus` …

### account_get_social_measure_info
- 摘要：查询总数据信息
- `GET /social/measure/info` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `totalFans`, `totalPlays`, `totalLikes`, `totalAccounts`, `accountLogin`, `accountLogout`, `licenseState`, `licenseExpireDate`

### account_get_social_measure_point
- 摘要：查询测点
- `GET /social/measure/point` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `points`, `key`, `licenseState`, `licenseExpireDate`

### account_post_account_suite_update
- 摘要：更新账号分组
- `POST /platform/account-suite/update` · 风险：write · 鉴权：required
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

### account_post_accounts
- 摘要：根据用户id查账号
- `POST /platform/accounts` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `userIds` (string [], 可选) — 用户id集合
  - `appId` (string, 可选) — 应用id
- 响应字段：`code`, `msg`, `data`, `accountId`, `account`, `nickname`, `email`, `group`, `owner`

### account_post_accounts_band
- 摘要：绑定账号
- `POST /platform/accounts/band` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `accountIds` (string [], 可选) — 账号id
  - `userIds` (string [], 可选) — 用户id
  - `bindDirection` (string, 可选) — 绑定方向枚举
  - `delIds` (string [], 可选) — 删除的id集合
  - `appId` (string, 可选) — 应用id
- 响应字段：`code`, `msg`, `data`

### account_post_accounts_page
- 摘要：查询应用账号分页
- `POST /platform/accounts/page` · 风险：read · 鉴权：required
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
  - `appId` (string, 可选) — 应用ID
  - `keyword` (string, 可选) — 账号 昵称 邮箱 分组
- 响应字段：`code`, `msg`, `data`, `records`, `accountId`, `account`, `nickName`, `email`, `group`, `owner`, `userId`, `isLock` …
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### account_post_accounts_users
- 摘要：根据账号id查用户
- `POST /platform/accounts/users` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `accountIds` (string [], 可选) — 账号id集合
- 响应字段：`code`, `msg`, `data`, `userId`, `userName`, `nickName`

### account_post_accounts_users_page
- 摘要：查询用户分页
- `POST /platform/accounts/users/page` · 风险：read · 鉴权：required
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
  - `keyword` (string, 可选) — 用户名 昵称
- 响应字段：`code`, `msg`, `data`, `records`, `userId`, `userName`, `nickName`, `status`, `total`, `size`, `current`, `orders` …
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### account_post_list
- 摘要：分页查询账号列表
- `POST /platform/account/list` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `appIds` (string [], 可选) — 应用id
  - `accountName` (string, 可选) — 账号
  - `suiteIds` (string [], 可选) — 分组id集合
  - `sortType` (string, 可选) — 排序条件 1. 按风险排序（低风险的靠上） 2. 按录入时间排序（新录入的先显示）
  - `current` (integer, 可选) — 当前页
  - `size` (integer, 可选) — 大小
  - `id` (string, 可选) — 账号id
  - `appAccount` (string, 可选) — 用户账号
  - `deviceIds` (string [], 可选) — 设备id集合
  - `accountIds` (string [], 可选) — 账号id集合
- 响应字段：`code`, `msg`, `data`, `records`, `platform`, `appId`, `inputTime`, `riskTips`, `nickName`, `account`, `accountId`, `userAccount` …
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。

### account_post_social_account_active
- 摘要：根据id查询账号活跃度
- `POST /social/account/active` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `accountId` (string, 可选) — 账号ID
- 响应字段：`code`, `msg`, `data`, `totalFans`, `totalPost`, `totalFollows`, `totalComments`, `totalActiveTime`, `totalLikes`, `totalVideoViewing`, `totalShare`, `accountDate` …

### account_post_social_account_add_tag
- 摘要：新增账号标签
- `POST /social/account/add-tag` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `tagName` (string, 可选) — 标签名称
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### account_post_social_account_batch_join
- 摘要：批量加入计划
- `POST /social/account/batch/join` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `planId` (string, 可选) — 计划编号
  - `accountIds` (string [], 可选) — 账号编号集合
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### account_post_social_account_batch_unbind
- 摘要：批量解绑账号
- `POST /social/account/batch/unbind` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `accountIds` (string [], 可选) — 账号id集合
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### account_post_social_account_batch_unbind_2
- 摘要：批量解绑账号/代理
- `POST /social/account/batch-unbind` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceIds` (string [], 可选) — 设备id集合
  - `type` (string, 可选) — 解绑类型 代理/账号/全部
  - `isDel` (boolean, 可选) — 是否删除
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### account_post_social_account_bind_account
- 摘要：获取账号绑定的设备和代理
- `POST /social/account/bind-account` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `accountIds` (string [], 可选) — 账号id集合
- 响应字段：`code`, `msg`, `data`, `deviceIds`, `proxyIds`, `licenseState`, `licenseExpireDate`

### account_post_social_account_bind_tag
- 摘要：账号绑定标签
- `POST /social/account/bind-tag` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `tagIds` (string [], 可选) — 标签id集合
  - `accountId` (string, 可选) — 账号id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### account_post_social_account_check
- 摘要：校验账号和设备（含区域匹配、绑定一致性、代理冲突等）
- `POST /social/account/check` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceEnables` (object [], 可选) — 设备校验信息
  - `deviceId` (string, 可选) — 容器（设备）ID 集合
  - `deviceIp` (string, 可选) — 容器（设备）IP
  - `accountIds` (string [], 可选) — 账号 ID 集合
  - `proxyId` (string, 可选) — 代理（网络）id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### account_post_social_account_collection_switch
- 摘要：数据采集开关（开启/关闭账号的数据采集脚本）
- `POST /social/account/collection-switch` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `accountId` (string, 可选) — 账号ID
  - `isOpen` (boolean, 可选) — 是否开启数据采集
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### account_post_social_account_del_tag
- 摘要：删除账号标签
- `POST /social/account/del-tag` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `tagId` (string, 可选) — 标签id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### account_post_social_account_homepage_save
- 摘要：账号主页保存
- `POST /social/account/homepage/save` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `id` (integer, 可选) — 账号主键
  - `sex` (string, 可选) — 性别
  - `birthday` (string, 可选) — 出生日期
  - `company` (string, 可选) — 公司名
  - `post` (string, 可选) — 职务
  - `country` (string, 可选) — 国家
  - `location` (string, 可选) — 所在地
  - `interested` (string, 可选) — 感兴趣
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### account_post_social_account_import_xlsx
- 摘要：通过 Excel 导入账号信息
- `POST /social/account/import/xlsx` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### account_post_social_account_info_cancel
- 摘要：取消任务
- `POST /social/account/info/cancel` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `id` (string, 可选) — 任务主键id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### account_post_social_account_info_page
- 摘要：账号信息同步分页
- `POST /social/account/info/page` · 风险：read · 鉴权：required
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
  - `id` (integer, 可选) — 主键id
  - `batches` (string, 可选) — 批次号
  - `title` (string, 可选) — 标题
  - `deviceNum` (string, 可选) — 设备编号
  - `deviceAliases` (string, 可选) — 设备别名
  - `deviceIp` (string, 可选) — 设备ip
  - `accountName` (string, 可选) — 账号名称
  - `applicationType` (string, 可选) — 应用类型
  - `taskStatus` (string, 可选) — 信息状态
  - `startTime` (string, 可选) — 开始时间
  - `endTime` (string, 可选) — 结束时间
  - `executionTimeRange` (string, 可选) — 执行时间
  - `jobId` (string, 可选) — jobId
  - `taskId` (string, 可选) — 任务id
  - `taskType` (string, 可选) — 任务类型
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
  - `taskStatus` (string, 可选) — 信息状态
  - `deviceIp` (string, 可选) — 设备ip
  - `batches` (string, 可选) — 批次号
  - `title` (string, 可选) — 标题
  - `startTime` (string, 可选) — 开始时间
  - `endTime` (string, 可选) — 结束时间
  - `executionTimeRange` (string [], 可选) — 执行时间
  - `taskType` (string, 可选) — 功能名称
  - `appId` (string, 可选) — 应用id
  - `programId` (string, 可选) — 应用功能id
- 响应字段：`code`, `msg`, `data`, `records`, `id`, `batches`, `title`, `deviceNum`, `deviceAliases`, `deviceIp`, `accountName`, `applicationType` …
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### account_post_social_account_join
- 摘要：账号加入公用计划
- `POST /social/account/join` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `planIds` (string [], 可选) — 计划编号
  - `accountId` (string, 可选) — 账号编号
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### account_post_social_account_list
- 摘要：账号列表查询
- `POST /social/account/list` · 风险：read · 鉴权：required
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
  - `id` (integer, 可选) — 账号主键
  - `statisticsRemark` (string, 可选) — 账号统计备注
  - `appAccount` (string, 可选) — 账号
  - `nickName` (string, 可选) — 用户昵称
  - `accountPasswd` (string, 可选) — 账号密码
  - `appId` (integer, 可选) — 所属应用编号
  - `appName` (string, 可选) — 应用名称（FB\TW\YT）
  - `emailAddr` (string, 可选) — 邮箱地址
  - `emailPasswd` (string, 可选) — 邮箱密码
  - `safeEmailAddr` (string, 可选) — 安全邮箱地址
  - `safeEmailPasswd` (string, 可选) — 安全邮箱密码
  - `avatar` (string, 可选) — 头像
  - `twiceCheck` (string, 可选) — 二次验证
  - `loginStatus` (string, 可选) — 登录状态；LOGINED(已登录) NOT_LOGIN(未登录) LOGIN_FAILED(登录失败) BE_LOGIN(登录中)
  - `loginTime` (string, 可选) — 登录时间
  - `deviceId` (string, 可选) — 设备编号
  - `deviceIp` (string, 可选) — 设备IP
  - `armId` (string, 可选) — 服务器编号
  - `nodeId` (string, 可选) — 节点编号
  - `devicePort` (string, 可选) — 設備端口號
  - `proxyIp` (string, 可选) — 代理ip
  - `failedReason` (string, 可选) — 登录失败原因
  - `jobId` (string, 可选) — RPA登录任务编号
  - `deviceIdx` (string, 可选) — 设备序号
  - `deviceAliases` (string, 可选) — 设备别名
  - `totalFans` (integer, 可选) — 粉丝总数
  - `totalPost` (integer, 可选) — 帖子总数
  - `totalFollows` (integer, 可选) — 关注总数
  - `totalComments` (integer, 可选) — 评论总数
  - `totalActiveTime` (integer, 可选) — 活跃时间
  - `totalLikes` (integer, 可选) — 点赞总数
  - `totalVideoViewing` (integer, 可选) — 视频播放总数
  - `totalShare` (integer, 可选) — 分享总数
  - `totalVideoPosted` (integer, 可选) — 视频发布总数
  - `totalVideoViews` (integer, 可选) — 视频观看总数
  - `totalRetweets` (integer, 可选) — 转推总数
  - `totalTweets` (integer, 可选) — 推文总数
  - `totalVisits` (integer, 可选) — 访问总数
  - `totalFriends` (integer, 可选) — 好友总数
  - `totalViewingTimes` (integer, 可选) — 总观看时长
  - `totalFollowerNumbers` (integer, 可选) — 关注者数量
  - `riskLevel` (string, 可选) — 风险等级
  - `remark` (string, 可选) — 备注
  - `isLock` (boolean, 可选) — 是否锁定
  - `collectionSwitch` (boolean, 可选) — 采集开关
  - `verifiedLink` (string, 可选) — 验证连接
  - `verifiedKey` (string, 可选) — key
  - `area` (string, 可选) — 区域
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
  - `id` (string, 可选) — 账号主键
  - `appAccount` (string, 可选) — 账号
  - `appName` (string, 可选) — 应用名称（FB\TW\YT）
  - `appId` (string, 可选) — 应用编号
  - `emailAddr` (string, 可选) — 邮箱地址
  - `loginStatus` (string, 可选) — 登录状态；LOGINED(已登录) NOT_LOGIN(未登录) LOGIN_FAILED(登录失败) BE_LOGIN(登录中)
  - `createTime` (string, 可选) — 创建日期
  - `updateTime` (string, 可选) — 更改时间
  - `creatorId` (string, 可选) — 创建者
  - `updatorId` (string, 可选) — 更新者
  - `deviceIp` (string, 可选) — 设备ip
  - `suiteIds` (string [], 可选) — 分组编号
  - `deviceIds` (string [], 可选) — 设备 ID 集合:只查这些设备上的账号,匹配{@code social_account.device_id}。前端以字符串数组形式提交(防 JS 长整数丢精度);为空 / null 时不参与过滤。
  - `fansMagnitude` (string, 可选) — 粉丝量级
  - `appIds` (string [], 可选) — 应用id
  - `accountName` (string, 可选) — 账号
  - `sortType` (string, 可选) — 排序条件 1. 按风险排序（低风险的靠上） 2. 按录入时间排序（新录入的先显示）
  - `accountIds` (string [], 可选) — 账号id集合
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### account_post_social_account_lock
- 摘要：锁定账号
- `POST /social/account/lock` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `accountIds` (string [], 可选) — 账号id集合
  - `lock` (boolean, 可选) — 是否锁定
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### account_post_social_account_remark
- 摘要：新增备注
- `POST /social/account/remark` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `accountId` (string, 可选) — 账号id
  - `remark` (string, 可选) — 备注
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### account_post_social_account_reverse
- 摘要：反向查询分页
- `POST /social/account/reverse` · 风险：read · 鉴权：required
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
  - `id` (integer, 可选) — 账号主键
  - `statisticsRemark` (string, 可选) — 账号统计备注
  - `appAccount` (string, 可选) — 账号
  - `nickName` (string, 可选) — 用户昵称
  - `accountPasswd` (string, 可选) — 账号密码
  - `appId` (integer, 可选) — 所属应用编号
  - `appName` (string, 可选) — 应用名称（FB\TW\YT）
  - `emailAddr` (string, 可选) — 邮箱地址
  - `emailPasswd` (string, 可选) — 邮箱密码
  - `safeEmailAddr` (string, 可选) — 安全邮箱地址
  - `safeEmailPasswd` (string, 可选) — 安全邮箱密码
  - `avatar` (string, 可选) — 头像
  - `twiceCheck` (string, 可选) — 二次验证
  - `loginStatus` (string, 可选) — 登录状态；LOGINED(已登录) NOT_LOGIN(未登录) LOGIN_FAILED(登录失败) BE_LOGIN(登录中)
  - `loginTime` (string, 可选) — 登录时间
  - `deviceId` (string, 可选) — 设备编号
  - `deviceIp` (string, 可选) — 设备IP
  - `armId` (string, 可选) — 服务器编号
  - `nodeId` (string, 可选) — 节点编号
  - `devicePort` (string, 可选) — 設備端口號
  - `proxyIp` (string, 可选) — 代理ip
  - `failedReason` (string, 可选) — 登录失败原因
  - `jobId` (string, 可选) — RPA登录任务编号
  - `deviceIdx` (string, 可选) — 设备序号
  - `deviceAliases` (string, 可选) — 设备别名
  - `totalFans` (integer, 可选) — 粉丝总数
  - `totalPost` (integer, 可选) — 帖子总数
  - `totalFollows` (integer, 可选) — 关注总数
  - `totalComments` (integer, 可选) — 评论总数
  - `totalActiveTime` (integer, 可选) — 活跃时间
  - `totalLikes` (integer, 可选) — 点赞总数
  - `totalVideoViewing` (integer, 可选) — 视频播放总数
  - `totalShare` (integer, 可选) — 分享总数
  - `totalVideoPosted` (integer, 可选) — 视频发布总数
  - `totalVideoViews` (integer, 可选) — 视频观看总数
  - `totalRetweets` (integer, 可选) — 转推总数
  - `totalTweets` (integer, 可选) — 推文总数
  - `totalVisits` (integer, 可选) — 访问总数
  - `totalFriends` (integer, 可选) — 好友总数
  - `totalViewingTimes` (integer, 可选) — 总观看时长
  - `totalFollowerNumbers` (integer, 可选) — 关注者数量
  - `riskLevel` (string, 可选) — 风险等级
  - `remark` (string, 可选) — 备注
  - `isLock` (boolean, 可选) — 是否锁定
  - `collectionSwitch` (boolean, 可选) — 采集开关
  - `verifiedLink` (string, 可选) — 验证连接
  - `verifiedKey` (string, 可选) — key
  - `area` (string, 可选) — 区域
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
  - `accountIds` (string [], 可选) — 账号id集合
  - `proxyIds` (string [], 可选) — 代理id集合
  - `deviceIds` (string [], 可选) — 容器id集合
- 响应字段：`code`, `msg`, `data`, `accountInfos`, `account`, `accountId`, `color`, `logoPath`, `nickName`, `proxyInfos`, `proxyId`, `area` …
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### account_post_social_account_run_process
- 摘要：已废弃-执行流程脚本
- `POST /social/account/run/process` · 风险：write · 鉴权：required
- 响应字段：`job_id`, `success`, `data`, `job_id`, `name`, `user_name`, `location`, `gender`, `birthday`, `image_base_info`, `company`, `homepageUrl` …

### account_post_social_account_suite_add
- 摘要：增加账号到分组
- `POST /social/account-suite/add` · 风险：write · 鉴权：required
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

### account_post_social_account_suite_update
- 摘要：更新账号分组
- `POST /social/account-suite/update` · 风险：write · 鉴权：required
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

### account_post_social_account_tag_list
- 摘要：查询标签列表
- `POST /social/account/tag-list` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `tagName` (string, 可选) — 标签名称
- 响应字段：`code`, `msg`, `data`, `tagId`, `tagName`, `licenseState`, `licenseExpireDate`

### account_post_social_account_update
- 摘要：账号更新
- `POST /social/account/update` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `id` (string, 可选) — 账号主键
  - `nickName` (string, 可选) — 用户昵称
  - `appAccount` (string, 可选) — 账号
  - `accountPasswd` (string, 可选) — 账号密码
  - `emailAddr` (string, 可选) — 邮箱地址
  - `emailPasswd` (string, 可选) — 邮箱密码
  - `safeEmailAddr` (string, 可选) — 安全邮箱地址（非必填）
  - `safeEmailPasswd` (string, 可选) — 安全邮箱密码（非必填）
  - `area` (string, 可选) — 地区
  - `loginStatus` (string, 可选) — 登录状态
  - `twiceCheck` (string, 可选) — 二次确认信息
  - `appId` (string, 可选) — 所属应用编号
  - `appName` (string, 可选) — 应用名称
  - `riskLevel` (string, 可选) — 风险等级
  - `suiteId` (string, 可选) — 分组编号
  - `suiteName` (string, 可选) — 分组名称
  - `suiteDesc` (string, 可选) — 分组描述
  - `remark` (string, 可选) — 备注
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### account_post_social_account_user_info
- 摘要：同步用户信息
- `POST /social/account/user/info` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `id` (string, 可选)
  - `deviceIp` (string, 可选) — 设备ip
  - `appId` (string, 可选) — 应用id
  - `appAccount` (string, 可选) — 账号名称
  - `AccountId` (string, 可选) — 账号id
  - `userInfoId` (string, 可选) — 用户信息表主键id
  - `syncType` (string, 可选) — 同步类型
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### account_post_social_account_user_info_update
- 摘要：更新用户信息
- `POST /social/account/user/info/update` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `id` (string, 可选) — 主键ID
  - `deviceId` (string, 可选) — 设备IP
  - `userName` (string, 可选) — 用户名
  - `nickName` (string, 可选) — 昵称
  - `profile` (string, 可选) — 简介
  - `accountType` (integer, 可选) — 账号类型
  - `location` (string, 可选) — 地区
  - `eMail` (string, 可选) — 邮箱
  - `imageUrl` (string, 可选) — 图片地址
  - `taskStatus` (string, 可选) — 任务状态
  - `taskId` (string, 可选) — 任务ID
  - `accountId` (string, 可选) — 账号ID
  - `channelUrl` (string, 可选) — 频道网址
  - `address` (string, 可选) — 国家/地区
  - `gender` (string, 可选) — 性别
  - `birthday` (string, 可选) — 出生日期
  - `interest` (string, 可选) — 兴趣爱好
  - `accessionDate` (string, 可选) — 加入日期
  - `appId` (string, 可选) — 应用ID
  - `webSiteLink` (string, 可选) — 网站链接
  - `appAccount` (string, 可选) — 账号名称
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### account_post_social_accounts
- 摘要：根据用户id查账号
- `POST /social/accounts` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `userIds` (string [], 可选) — 用户id集合
  - `appId` (string, 可选) — 应用id
- 响应字段：`code`, `msg`, `data`, `accountId`, `account`, `nickname`, `email`, `group`, `owner`, `licenseState`, `licenseExpireDate`

### account_post_social_accounts_band
- 摘要：绑定账号
- `POST /social/accounts/band` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `accountIds` (string [], 可选) — 账号id
  - `userIds` (string [], 可选) — 用户id
  - `bindDirection` (string, 可选) — 绑定方向枚举
  - `delIds` (string [], 可选) — 删除的id集合
  - `appId` (string, 可选) — 应用id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### account_post_social_accounts_page
- 摘要：查询应用账号分页
- `POST /social/accounts/page` · 风险：read · 鉴权：required
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
  - `id` (integer, 可选) — 主键id
  - `userId` (integer, 可选) — *用户id
  - `userName` (string, 可选) — 用户名
  - `nickName` (string, 可选) — 昵称
  - `accountId` (integer, 可选) — 账号id
  - `accountName` (string, 可选) — 账号名称
  - `appId` (string, 可选) — 应用id
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
  - `keyword` (string, 可选) — 账号 昵称 邮箱 分组
- 响应字段：`code`, `msg`, `data`, `records`, `accountId`, `account`, `nickName`, `email`, `group`, `owner`, `userId`, `isLock` …
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### account_post_social_accounts_users
- 摘要：根据账号id查用户
- `POST /social/accounts/users` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `accountIds` (string [], 可选) — 账号id集合
- 响应字段：`code`, `msg`, `data`, `userId`, `userName`, `nickName`, `licenseState`, `licenseExpireDate`

### account_post_social_accounts_users_page
- 摘要：查询用户分页
- `POST /social/accounts/users/page` · 风险：read · 鉴权：required
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
  - `id` (integer, 可选) — 主键id
  - `userId` (integer, 可选) — *用户id
  - `userName` (string, 可选) — 用户名
  - `nickName` (string, 可选) — 昵称
  - `accountId` (integer, 可选) — 账号id
  - `accountName` (string, 可选) — 账号名称
  - `appId` (string, 可选) — 应用id
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
  - `keyword` (string, 可选) — 用户名 昵称
- 响应字段：`code`, `msg`, `data`, `records`, `userId`, `userName`, `nickName`, `status`, `total`, `size`, `current`, `orders` …
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### account_post_social_measure_accountinfo
- 摘要：账号年月日数据统计
- `POST /social/measure/accountInfo` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `accountDateEnum` (string, 可选) — 年月日枚举
  - `accountViewEnum` (string, 可选) — 增量/总览枚举
  - `accountIds` (string [], 可选) — 账号id
- 响应字段：`code`, `msg`, `data`, `key`, `key`, `licenseState`, `licenseExpireDate`

### account_post_social_measure_hotpost
- 摘要：查询账号热帖
- `POST /social/measure/hotPost` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `accountIds` (string [], 可选) — 账号id集合
  - `postDateEnum` (string, 可选) — 热帖枚举
- 响应字段：`code`, `msg`, `data`, `hotPosts`, `accountId`, `accountName`, `postName`, `postUrl`, `postTime`, `postView`, `licenseState`, `licenseExpireDate`

### account_post_social_measure_overview
- 摘要：账号信息总览
- `POST /social/measure/overview` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `accountDateEnum` (string, 可选) — 年月日枚举
  - `appId` (string, 可选) — 应用id
- 响应字段：`code`, `msg`, `data`, `key`, `key`, `licenseState`, `licenseExpireDate`

### account_put_social_account_bind
- 摘要：账号绑定或解绑设备
- `PUT /social/account/bind` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceId` (string, 可选) — 设备编号
  - `accountIds` (string [], 可选) — 账号ID
  - `bind` (string, 可选) — 绑定或解绑
  - `orgId` (string, 可选) — 归属编号（更新设备归属时必填）
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### account_put_social_account_login_again_accountid
- 摘要：账户重新登录
- `PUT /social/account/login/again/{accountId}` · 风险：write · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### account_put_social_account_login_batch
- 摘要：批量登录
- `PUT /social/account/login/batch` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `appAccountIds` (string [], 可选) — 账号IDs
  - `userId` (string, 可选) — 当前操作人（为空时默认当前用户）
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

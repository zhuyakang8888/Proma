# platform-plan-api 接口目录

> 业务域：系统计划与日程 · 来源：callfans-standard.md, callfans-platform.md · 共 36 个操作
> 本文件是 catalog 的人工可读版；机器可读单一真源见 `api_catalog.json`。

## 登录
- `auth_post_login`  POST `/auth/login`  →  返回 `token`，执行器自动处理，无需手工传 token。

## 操作一览

| operation_id | 方法 | 路由 | 路径 | 摘要 | 风险 |
| --- | --- | --- | --- | --- | --- |
| `plan_delete_social_system_plan_del` | DELETE | `/` | `/social/system-plan/del` | 删除任务计划 | destructive |
| `plan_delete_social_system_schedule_conflict` | DELETE | `/` | `/social/system-schedule/conflict` | 删除账号下冲突日程信息 | destructive |
| `plan_delete_social_system_schedule_del` | DELETE | `/` | `/social/system-schedule/del` | 删除日程信息 | destructive |
| `plan_delete_social_system_schedule_del_cache_schedule` | DELETE | `/` | `/social/system-schedule/del-cache-schedule` | 删除暂存区日程 | destructive |
| `plan_delete_system_plan_del` | DELETE | `/platform` | `/system-plan/del` | 删除任务计划 | destructive |
| `plan_get_social_system_plan_account_page` | GET | `/` | `/social/system-plan/account/page` | 计划维度账号信息分页列表 | read |
| `plan_get_social_system_plan_detail` | GET | `/` | `/social/system-plan/detail` | 计划详情 | read |
| `plan_get_social_system_plan_detail_planid` | GET | `/` | `/social/system-plan/detail/{planId}` | 获取计划下账号信息主键集合 | read |
| `plan_get_social_system_plan_join_page` | GET | `/` | `/social/system-plan/join/page` | 计划维度账号信息分页列表(计划相关) | read |
| `plan_get_social_system_plan_page` | GET | `/` | `/social/system-plan/page` | 计划分页列表 | read |
| `plan_get_social_system_schedule_conflict_accids` | GET | `/` | `/social/system-schedule/conflict/{accIds}` | 获取账号下冲突日程信息 | read |
| `plan_get_social_system_schedule_download_temp_csv` | GET | `/` | `/social/system-schedule/download/temp/csv` | 下载内容模板 | read |
| `plan_get_system_plan_account_page` | GET | `/platform` | `/system-plan/account/page` | 计划维度账号信息分页列表 | read |
| `plan_get_system_plan_detail` | GET | `/platform` | `/system-plan/detail` | 计划详情 | read |
| `plan_get_system_plan_detail_planid` | GET | `/platform` | `/system-plan/detail/{planId}` | 获取计划下账号信息主键集合 | read |
| `plan_get_system_plan_join_page` | GET | `/platform` | `/system-plan/join/page` | 计划维度账号信息分页列表(计划相关) | read |
| `plan_get_system_plan_page` | GET | `/platform` | `/system-plan/page` | 计划分页列表 | read |
| `plan_post_social_system_plan_join` | POST | `/` | `/social/system-plan/join` | 账号加入计划 | write |
| `plan_post_social_system_plan_update` | POST | `/` | `/social/system-plan/update` | 更新计划信息 | write |
| `plan_post_social_system_schedule_acc_schedule` | POST | `/` | `/social/system-schedule/acc/schedule` | 获取账号下日程信息 | read |
| `plan_post_social_system_schedule_batch_operate` | POST | `/` | `/social/system-schedule/batch/operate` | 批量操作日程 | write |
| `plan_post_social_system_schedule_batch_update_time` | POST | `/` | `/social/system-schedule/batch/update-time` | 批量修改日程执行时间（REQ-2609-113）。 | write |
| `plan_post_social_system_schedule_cache_hold_schedule` | POST | `/` | `/social/system-schedule/cache-hold-schedule` | 查询暂存区 | read |
| `plan_post_social_system_schedule_cache_schedule` | POST | `/` | `/social/system-schedule/cache-schedule` | 日程进入暂存区 | write |
| `plan_post_social_system_schedule_cache_task` | POST | `/` | `/social/system-schedule/cache/task` | 新增缓存任务 | write |
| `plan_post_social_system_schedule_conflict` | POST | `/` | `/social/system-schedule/conflict` | 获取账号下冲突日程信息 | read |
| `plan_post_social_system_schedule_savebatch` | POST | `/` | `/social/system-schedule/saveBatch` | 批量保存日程信息 | write |
| `plan_post_social_system_schedule_update` | POST | `/` | `/social/system-schedule/update` | 更新日程信息 | write |
| `plan_post_system_plan_join` | POST | `/platform` | `/system-plan/join` | 账号加入计划 | write |
| `plan_post_system_plan_update` | POST | `/platform` | `/system-plan/update` | 更新计划信息 | write |
| `plan_put_social_system_plan_copy_planid` | PUT | `/` | `/social/system-plan/copy/{planId}` | 复制计划 | write |
| `plan_put_social_system_plan_publish` | PUT | `/` | `/social/system-plan/publish` | 一键启停用账号计划 | write |
| `plan_put_social_system_plan_quit` | PUT | `/` | `/social/system-plan/quit` | 解除账号加入计划 | write |
| `plan_put_system_plan_copy_planid` | PUT | `/platform` | `/system-plan/copy/{planId}` | 复制计划 | write |
| `plan_put_system_plan_publish` | PUT | `/platform` | `/system-plan/publish` | 一键启停用账号计划 | write |
| `plan_put_system_plan_quit` | PUT | `/platform` | `/system-plan/quit` | 解除账号加入计划 | write |

## 操作详情
### plan_delete_social_system_plan_del
- 摘要：删除任务计划
- `DELETE /social/system-plan/del` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `planIds` (string [], 可选) — 计划编号集合
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### plan_delete_social_system_schedule_conflict
- 摘要：删除账号下冲突日程信息
- `DELETE /social/system-schedule/conflict` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `threshold` (integer, 可选) — The next size value at which to resize (capacity * load factor).
  - `loadFactor` (number, 可选) — The load factor for the hash table.
  - `id` (string, 可选) — 主键id
  - `tagId` (string, 可选)
  - `programId` (string, 可选) — 应用功能id
  - `title` (string, 可选) — 任务标题
  - `groupId` (string, 可选) — 分组id
  - `deviceIds` (string [], 可选) — 设备id集合
  - `appId` (string, 可选) — 应用id
  - `taskId` (string, 可选) — 任务id
  - `planId` (integer, 可选) — 计划编号
  - `scheduleId` (string, 可选) — 日程编号
  - `creatorId` (string, 可选)
  - `scheduleName` (string, 可选) — 任务名称
  - `executionTime` (string, 可选) — 执行时间
  - `scheduleType` (string, 可选) — 日程类型
  - `endTime` (string, 可选) — 截至时间
  - `taskStatus` (string, 可选) — 任务状态
  - `taskColour` (string, 可选) — 卡片颜色
  - `repeatInterval` (integer, 可选) — 间隔时间
  - `delayTimeRange` (integer, 可选) — 延后执行时间范围（分钟），0=不延后
  - `accountId` (string, 可选) — 归属账号编号
  - `nickName` (string, 可选) — 用户昵称
  - `deviceIp` (string, 可选) — 设备IP
  - `appAccount` (string, 可选) — 用户账号
  - `deviceId` (integer, 可选) — 设备ID（用于设备重启任务）
  - `taskCategory` (string, 可选) — 任务分类（NORMAL-普通任务，DEVICE_RESTART-设备重启任务）
  - `durationTime` (integer, 可选) — 持续时间
  - `taskData` (object, 可选) — 任务数据
  - `key` (object, 可选)
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### plan_delete_social_system_schedule_del
- 摘要：删除日程信息
- `DELETE /social/system-schedule/del` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `scheduleIds` (string [], 可选) — 计划编号集合
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### plan_delete_social_system_schedule_del_cache_schedule
- 摘要：删除暂存区日程
- `DELETE /social/system-schedule/del-cache-schedule` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `cacheId` (string, 可选) — 缓存ID
  - `accountId` (string, 可选) — 账号ID
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### plan_delete_system_plan_del
- 摘要：删除任务计划
- `DELETE /platform/system-plan/del` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `planIds` (string [], 可选) — 计划编号集合
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### plan_get_social_system_plan_account_page
- 摘要：计划维度账号信息分页列表
- `GET /social/system-plan/account/page` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### plan_get_social_system_plan_detail
- 摘要：计划详情
- `GET /social/system-plan/detail` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `id`, `planName`, `planScope`, `planState`, `createTime`, `planSchedules`, `threshold`, `loadFactor`, `id` …

### plan_get_social_system_plan_detail_planid
- 摘要：获取计划下账号信息主键集合
- `GET /social/system-plan/detail/{planId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `planId`, `accountIds`, `licenseState`, `licenseExpireDate`

### plan_get_social_system_plan_join_page
- 摘要：计划维度账号信息分页列表(计划相关)
- `GET /social/system-plan/join/page` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### plan_get_social_system_plan_page
- 摘要：计划分页列表
- `GET /social/system-plan/page` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### plan_get_social_system_schedule_conflict_accids
- 摘要：获取账号下冲突日程信息
- `GET /social/system-schedule/conflict/{accIds}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `threshold`, `loadFactor`, `id`, `tagId`, `programId`, `title`, `groupId`, `deviceIds`, `appId` …

### plan_get_social_system_schedule_download_temp_csv
- 摘要：下载内容模板
- `GET /social/system-schedule/download/temp/csv` · 风险：read · 鉴权：required

### plan_get_system_plan_account_page
- 摘要：计划维度账号信息分页列表
- `GET /platform/system-plan/account/page` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `records`, `id`, `accountId`, `appAccount`, `deviceIp`, `appName`, `state`, `deviceAliases`, `isLock` …

### plan_get_system_plan_detail
- 摘要：计划详情
- `GET /platform/system-plan/detail` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `id`, `planName`, `planScope`, `planState`, `createTime`, `planSchedules`, `threshold`, `loadFactor`, `id` …

### plan_get_system_plan_detail_planid
- 摘要：获取计划下账号信息主键集合
- `GET /platform/system-plan/detail/{planId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `planId`, `accountIds`, `licenseState`, `licenseExpireDate`

### plan_get_system_plan_join_page
- 摘要：计划维度账号信息分页列表(计划相关)
- `GET /platform/system-plan/join/page` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### plan_get_system_plan_page
- 摘要：计划分页列表
- `GET /platform/system-plan/page` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `records`, `id`, `planName`, `planScope`, `relationships`, `id`, `planId`, `targetId`, `targetValue` …

### plan_post_social_system_plan_join
- 摘要：账号加入计划
- `POST /social/system-plan/join` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `accountId` (string, 可选) — 账号id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### plan_post_social_system_plan_update
- 摘要：更新计划信息
- `POST /social/system-plan/update` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `planId` (string, 可选) — 计划主键编号
  - `planName` (string, 可选) — 计划名称
  - `accountId` (string, 可选) — 账号编号
  - `planScope` (string, 可选) — 作用域
  - `planState` (string, 可选) — 状态
  - `accIds` (string [], 可选) — 账号下创建日程绑定
  - `delScheduleIds` (string [], 可选) — 删除的日程编号集合
  - `taskSchedules` (object [], 可选) — 任务日程信息
  - `threshold` (integer, 可选) — The next size value at which to resize (capacity * load factor).
  - `loadFactor` (number, 可选) — The load factor for the hash table.
  - `id` (string, 可选) — 主键id
  - `tagId` (string, 可选)
  - `programId` (string, 可选) — 应用功能id
  - `title` (string, 可选) — 任务标题
  - `groupId` (string, 可选) — 分组id
  - `deviceIds` (string [], 可选) — 设备id集合
  - `appId` (string, 可选) — 应用id
  - `taskId` (string, 可选) — 任务id
  - `planId` (integer, 可选) — 计划编号
  - `scheduleId` (string, 可选) — 日程编号
  - `creatorId` (string, 可选)
  - `scheduleName` (string, 可选) — 日程名称
  - `executionTime` (string, 可选) — 执行时间
  - `endTime` (string, 可选) — 截至日期
  - `scheduleType` (string, 可选) — 重复类型
  - `repeatInterval` (integer, 可选) — 间隔时长
  - `taskColour` (string, 可选) — 色块
  - `durationTime` (integer, 可选) — 持续时间
  - `delayTimeRange` (integer, 可选) — 延迟时间
  - `taskData` (object, 可选) — 任务数据
  - `key` (object, 可选)
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### plan_post_social_system_schedule_acc_schedule
- 摘要：获取账号下日程信息
- `POST /social/system-schedule/acc/schedule` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `accountIds` (string [], 必填) — 账号信息
  - `startTime` (string, 可选) — 执行开始时间
  - `endTime` (string, 可选) — 执行结束时间
- 响应字段：`code`, `msg`, `data`, `threshold`, `loadFactor`, `id`, `tagId`, `programId`, `title`, `groupId`, `deviceIds`, `appId` …

### plan_post_social_system_schedule_batch_operate
- 摘要：批量操作日程
- `POST /social/system-schedule/batch/operate` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `threshold` (integer, 可选) — The next size value at which to resize (capacity * load factor).
  - `loadFactor` (number, 可选) — The load factor for the hash table.
  - `id` (string, 可选) — 主键id
  - `tagId` (string, 可选)
  - `programId` (string, 可选) — 应用功能id
  - `title` (string, 可选) — 任务标题
  - `groupId` (string, 可选) — 分组id
  - `deviceIds` (string [], 可选) — 设备id集合
  - `appId` (string, 可选) — 应用id
  - `taskId` (string, 可选) — 任务id
  - `planId` (integer, 可选) — 计划编号
  - `scheduleId` (string, 可选) — 日程编号
  - `creatorId` (string, 可选)
  - `scheduleParams` (object [], 可选) — 多模态参数列表
  - `accountId` (string, 可选) — 账号ID（每个元素对应一个独立账号）
  - `executeCount` (integer, 可选) — 执行次数
  - `items` (object [], 可选) — *执行参数列表
  - `key` (object, 可选)
  - `accountIds` (string [], 可选) — 账号ID列表（当scheduleParams为空时使用）
  - `scheduleType` (string, 可选) — 重复类型
  - `globalExecuteCount` (integer, 可选) — 全局执行次数
  - `windowStartTime` (object, 可选) — 窗口开始时间
  - `hour` (number, 可选) — The hour.
  - `minute` (number, 可选) — The minute.
  - `second` (number, 可选) — The second.
  - `nano` (integer, 可选) — The nanosecond.
  - `windowEndTime` (object, 可选) — 窗口结束时间
  - `hour` (number, 可选) — The hour.
  - `minute` (number, 可选) — The minute.
  - `second` (number, 可选) — The second.
  - `nano` (integer, 可选) — The nanosecond.
  - `startDate` (string, 可选) — 开始日期
  - `timeZone` (string, 可选) — 时区
  - `delayTimeRange` (integer, 可选) — 延后执行时间范围（分钟）。 0 = 不延后 >0 = 触发时从 [1, delayTimeRange] 随机出延迟分钟数， 任务入{@code TaskServiceJobDelayQueue}（Redis ZSet）等待触发默认 0。
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### plan_post_social_system_schedule_batch_update_time
- 摘要：批量修改日程执行时间（REQ-2609-113）。
- `POST /social/system-schedule/batch/update-time` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `scheduleIds` (string [], 必填) — 日程 ID 列表（必填，上限 200）
  - `mode` (string, 必填) — 修改模式：SHIFT 平移 / SET 设定（必填）
  - `deltaMinutes` (integer, 可选) — SHIFT 模式：偏移分钟数，正=延后，负=提前（SHIFT 模式必填，不能为 0）
  - `targetExecutionTime` (string, 可选) — SET 模式：目标执行时间（SET 模式必填，格式 yyyy-MM-dd HH:mm:ss）
- 响应字段：`code`, `msg`, `data`, `total`, `successCount`, `failures`, `scheduleId`, `code`, `message`, `licenseState`, `licenseExpireDate`

### plan_post_social_system_schedule_cache_hold_schedule
- 摘要：查询暂存区
- `POST /social/system-schedule/cache-hold-schedule` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `accountIds` (string [], 可选) — 账号ID列表
- 响应字段：`code`, `msg`, `data`, `threshold`, `loadFactor`, `id`, `tagId`, `programId`, `title`, `groupId`, `deviceIds`, `appId` …

### plan_post_social_system_schedule_cache_schedule
- 摘要：日程进入暂存区
- `POST /social/system-schedule/cache-schedule` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `scheduleIds` (string [], 可选) — 日程id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### plan_post_social_system_schedule_cache_task
- 摘要：新增缓存任务
- `POST /social/system-schedule/cache/task` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `_nodeFactory` (object, 可选)
  - `_cfgBigDecimalExact` (boolean, 可选) — 「已废弃」「已废弃」
  - `_children` (object, 可选)
  - `key` (array [], 可选)
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### plan_post_social_system_schedule_conflict
- 摘要：获取账号下冲突日程信息
- `POST /social/system-schedule/conflict` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `accountIds` (string [], 可选) — 账号ID列表
- 响应字段：`code`, `msg`, `data`, `threshold`, `loadFactor`, `id`, `tagId`, `programId`, `title`, `groupId`, `deviceIds`, `appId` …

### plan_post_social_system_schedule_savebatch
- 摘要：批量保存日程信息
- `POST /social/system-schedule/saveBatch` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `threshold` (integer, 可选) — The next size value at which to resize (capacity * load factor).
  - `loadFactor` (number, 可选) — The load factor for the hash table.
  - `id` (string, 可选) — 主键id
  - `tagId` (string, 可选)
  - `programId` (string, 可选) — 应用功能id
  - `title` (string, 可选) — 任务标题
  - `groupId` (string, 可选) — 分组id
  - `deviceIds` (string [], 可选) — 设备id集合
  - `appId` (string, 可选) — 应用id
  - `taskId` (string, 可选) — 任务id
  - `planId` (integer, 可选) — 计划编号
  - `scheduleId` (string, 可选) — 日程编号
  - `creatorId` (string, 可选)
  - `accountId` (string, 可选) — 账号id
  - `scheduleType` (string, 可选) — 重复类型
  - `putCount` (integer, 可选) — 放入数量
  - `postOrderEnum` (string, 可选) — 发布方式
  - `windowStartTime` (object, 可选) — 窗口开始时间
  - `hour` (number, 可选) — The hour.
  - `minute` (number, 可选) — The minute.
  - `second` (number, 可选) — The second.
  - `nano` (integer, 可选) — The nanosecond.
  - `windowEndTime` (object, 可选) — 窗口结束时间
  - `hour` (number, 可选) — The hour.
  - `minute` (number, 可选) — The minute.
  - `second` (number, 可选) — The second.
  - `nano` (integer, 可选) — The nanosecond.
  - `publishCount` (integer, 可选) — 发布数量
  - `intervalTime` (integer, 可选) — 间隔时间
  - `offsetTime` (integer, 可选) — 偏移量
  - `conflict` (boolean, 可选) — 是否冲突 true 规避冲突 false 不规避不冲突
  - `startDate` (string, 可选) — 日程开始时间
  - `timeZone` (string, 可选) — 时区
  - `delayTimeRange` (integer, 可选) — 延后执行时间范围（分钟）。 0 = 不延后 >0 = 触发时从 [1, delayTimeRange] 随机出延迟分钟数， 任务入{@code TaskServiceJobDelayQueue}（Redis ZSet）等待触发默认 0。
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### plan_post_social_system_schedule_update
- 摘要：更新日程信息
- `POST /social/system-schedule/update` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `accountId` (string, 可选) — 账号编号
  - `accIds` (string [], 可选) — 账号下创建日程绑定
  - `taskSchedule` (object, 可选) — 日程信息
  - `threshold` (integer, 可选) — The next size value at which to resize (capacity * load factor).
  - `loadFactor` (number, 可选) — The load factor for the hash table.
  - `id` (string, 可选) — 主键id
  - `tagId` (string, 可选)
  - `programId` (string, 可选) — 应用功能id
  - `title` (string, 可选) — 任务标题
  - `groupId` (string, 可选) — 分组id
  - `deviceIds` (string [], 可选) — 设备id集合
  - `appId` (string, 可选) — 应用id
  - `taskId` (string, 可选) — 任务id
  - `planId` (integer, 可选) — 计划编号
  - `scheduleId` (string, 可选) — 日程编号
  - `creatorId` (string, 可选)
  - `scheduleName` (string, 可选) — 日程名称
  - `executionTime` (string, 可选) — 执行时间
  - `endTime` (string, 可选) — 截至日期
  - `scheduleType` (string, 可选) — 重复类型
  - `repeatInterval` (integer, 可选) — 间隔时长
  - `taskColour` (string, 可选) — 色块
  - `durationTime` (integer, 可选) — 持续时间
  - `delayTimeRange` (integer, 可选) — 延迟时间
  - `taskData` (object, 可选) — 任务数据
  - `key` (object, 可选)
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### plan_post_system_plan_join
- 摘要：账号加入计划
- `POST /platform/system-plan/join` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `accountId` (string, 可选) — 账号id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### plan_post_system_plan_update
- 摘要：更新计划信息
- `POST /platform/system-plan/update` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `planId` (string, 可选) — 计划主键编号
  - `planName` (string, 可选) — 计划名称
  - `accountId` (string, 可选) — 账号编号
  - `planScope` (string, 可选) — 作用域
  - `planState` (string, 可选) — 状态
  - `accIds` (string [], 可选) — 账号下创建日程绑定
  - `delScheduleIds` (string [], 可选) — 删除的日程编号集合
  - `taskSchedules` (object [], 可选) — 任务日程信息
  - `threshold` (integer, 可选) — The next size value at which to resize (capacity * load factor).
  - `loadFactor` (number, 可选) — The load factor for the hash table.
  - `id` (string, 可选) — 主键id
  - `tagId` (string, 可选)
  - `programId` (string, 可选) — 应用功能id
  - `title` (string, 可选) — 任务标题
  - `groupId` (string, 可选) — 分组id
  - `deviceIds` (string [], 可选) — 设备id集合
  - `appId` (string, 可选) — 应用id
  - `taskId` (string, 可选) — 任务id
  - `planId` (integer, 可选) — 计划编号
  - `scheduleId` (string, 可选) — 日程编号
  - `creatorId` (string, 可选)
  - `scheduleName` (string, 可选) — 日程名称
  - `executionTime` (string, 可选) — 执行时间
  - `endTime` (string, 可选) — 截至日期
  - `scheduleType` (string, 可选) — 重复类型
  - `repeatInterval` (integer, 可选) — 间隔时长
  - `taskColour` (string, 可选) — 色块
  - `durationTime` (integer, 可选) — 持续时间
  - `taskData` (object, 可选) — 任务数据
  - `key` (object, 可选)
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### plan_put_social_system_plan_copy_planid
- 摘要：复制计划
- `PUT /social/system-plan/copy/{planId}` · 风险：write · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### plan_put_social_system_plan_publish
- 摘要：一键启停用账号计划
- `PUT /social/system-plan/publish` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `planAccountState` (string, 可选) — 启用/停用
  - `rlts` (object [], 可选) — 计划下关联关系主键集合
  - `rltId` (string, 可选)
  - `accountId` (string, 可选)
  - `planId` (string, 可选)
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### plan_put_social_system_plan_quit
- 摘要：解除账号加入计划
- `PUT /social/system-plan/quit` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `accountId` (string, 可选) — 账号id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### plan_put_system_plan_copy_planid
- 摘要：复制计划
- `PUT /platform/system-plan/copy/{planId}` · 风险：write · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### plan_put_system_plan_publish
- 摘要：一键启停用账号计划
- `PUT /platform/system-plan/publish` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `planAccountState` (string, 可选) — 启用/停用
  - `rlts` (object [], 可选) — 计划下关联关系主键集合
  - `rltId` (string, 可选)
  - `accountId` (string, 可选)
  - `planId` (string, 可选)
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### plan_put_system_plan_quit
- 摘要：解除账号加入计划
- `PUT /platform/system-plan/quit` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `accountId` (string, 可选) — 账号id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

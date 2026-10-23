# platform-dispatch-api 接口目录

> 业务域：任务调度（调度中心/发帖任务/脚本流程/执行记录） · 来源：callfans-standard.md · 共 87 个操作
> 本文件是 catalog 的人工可读版；机器可读单一真源见 `api_catalog.json`。

## 登录
- `auth_post_login`  POST `/auth/login`  →  返回 `token`，执行器自动处理，无需手工传 token。

## 操作一览

| operation_id | 方法 | 路由 | 路径 | 摘要 | 风险 |
| --- | --- | --- | --- | --- | --- |
| `dispatch_delete_social_cache_clear` | DELETE | `/` | `/social/cache/clear` | 清空缓存列表（不允许存在正在执行中的任务） | destructive |
| `dispatch_delete_social_dispatch_delete` | DELETE | `/` | `/social/dispatch/delete` | 删除项目 | destructive |
| `dispatch_delete_social_dispatch_deleteevent` | DELETE | `/` | `/social/dispatch/deleteEvent` | 删除事件 | destructive |
| `dispatch_delete_social_dispatch_removetask` | DELETE | `/` | `/social/dispatch/removeTask` | 移除任务 | destructive |
| `dispatch_delete_social_dispatch_removewaterlevelstep` | DELETE | `/` | `/social/dispatch/removeWaterLevelStep` | 移除单个水位阶梯点 —— 按子表 social_dispatch_water_level_config_det 主键 ID 逻辑删除。 | destructive |
| `dispatch_delete_social_script_flow_delete` | DELETE | `/` | `/social/script/flow/delete` | 删除脚本流程 | destructive |
| `dispatch_delete_social_system_component_del` | DELETE | `/` | `/social/system-component/del` | 删除组件 | destructive |
| `dispatch_delete_social_task` | DELETE | `/` | `/social/task` | 批量删除任务 | destructive |
| `dispatch_delete_social_template_executionrecord_del_recordid` | DELETE | `/` | `/social/template/executionRecord/del/{recordId}` | 删除执行记录 | destructive |
| `dispatch_get_social_analysis_setting_list` | GET | `/` | `/social/analysis/setting/list` | 获取所有分析 Agent 设置列表 | read |
| `dispatch_get_social_cache_query` | GET | `/` | `/social/cache/query` | 查询缓存列表 | read |
| `dispatch_get_social_postspread_detail` | GET | `/` | `/social/postSpread/detail` | 帖子推广详情 | read |
| `dispatch_get_social_posttask_posttaskid` | GET | `/` | `/social/postTask/{postTaskId}` | 发帖任务详情 | read |
| `dispatch_get_social_script_flow_detail_id` | GET | `/` | `/social/script/flow/detail/{id}` | 获取脚本流程详情 | read |
| `dispatch_get_social_script_flow_download_id` | GET | `/` | `/social/script/flow/download/{id}` | 下载脚本文件 | read |
| `dispatch_get_social_system_component_detail_componentid` | GET | `/` | `/social/system-component/detail/{componentId}` | 组件详情 | read |
| `dispatch_get_social_tag_list` | GET | `/` | `/social/tag/list` | 查询任务标签集合 | read |
| `dispatch_get_social_task_id` | GET | `/` | `/social/task/{id}` | 根据id查询任务 | read |
| `dispatch_get_social_template_executionrecord_detail_recordid` | GET | `/` | `/social/template/executionRecord/detail/{recordId}` | 获取执行记录详情 | read |
| `dispatch_get_social_template_executionrecord_now_tempid` | GET | `/` | `/social/template/executionRecord/now/{tempId}` | 获取当前模板执行情况 | read |
| `dispatch_post_social_analysis_update` | POST | `/` | `/social/analysis/update` | 更新分析 Agent 设置 | write |
| `dispatch_post_social_dispatch_add` | POST | `/` | `/social/dispatch/add` | 新增项目 | write |
| `dispatch_post_social_dispatch_addevent` | POST | `/` | `/social/dispatch/addEvent` | 新增事件 | write |
| `dispatch_post_social_dispatch_allocate` | POST | `/` | `/social/dispatch/allocate` | 分配挂载 | write |
| `dispatch_post_social_dispatch_batchupdateevent` | POST | `/` | `/social/dispatch/batchUpdateEvent` | 批量编辑事件 | write |
| `dispatch_post_social_dispatch_checklabeldevice` | POST | `/` | `/social/dispatch/checkLabelDevice` | 校验标签设备 | read |
| `dispatch_post_social_dispatch_clearevent` | POST | `/` | `/social/dispatch/clearEvent` | 一键清空事件 | destructive |
| `dispatch_post_social_dispatch_clearscreendominance` | POST | `/` | `/social/dispatch/clearScreenDominance` | 取消霸屏 | destructive |
| `dispatch_post_social_dispatch_continue` | POST | `/` | `/social/dispatch/continue` | 事件继续 | write |
| `dispatch_post_social_dispatch_continueproject` | POST | `/` | `/social/dispatch/continueProject` | 项目继续 | write |
| `dispatch_post_social_dispatch_datastatistics` | POST | `/` | `/social/dispatch/dataStatistics` | 数据统计 | write |
| `dispatch_post_social_dispatch_detail` | POST | `/` | `/social/dispatch/detail` | 项目详情 | read |
| `dispatch_post_social_dispatch_device_disable` | POST | `/` | `/social/dispatch/device/disable` | 人工调度禁用设备（批量）。 | write |
| `dispatch_post_social_dispatch_device_enable` | POST | `/` | `/social/dispatch/device/enable` | 取消调度禁用设备（批量）。 | write |
| `dispatch_post_social_dispatch_eventterminated` | POST | `/` | `/social/dispatch/eventTerminated` | 事件终止 | write |
| `dispatch_post_social_dispatch_exportbriefing` | POST | `/` | `/social/dispatch/exportBriefing` | 项目执行简报导出（5-sheet xlsx）。 | read |
| `dispatch_post_social_dispatch_exportscreenshot` | POST | `/` | `/social/dispatch/exportScreenshot` | 项目截图记录导出（zip 包，按{@code 项目名/设备IP/任务名/logId_序号_原文件名} 目录组织）。 | read |
| `dispatch_post_social_dispatch_getdevicepool` | POST | `/` | `/social/dispatch/getDevicePool` | 获取待命池设备 | read |
| `dispatch_post_social_dispatch_getdevicestatusnum` | POST | `/` | `/social/dispatch/getDeviceStatusNum` | 获取设备状态数量 | read |
| `dispatch_post_social_dispatch_list` | POST | `/` | `/social/dispatch/list` | 项目集合 | read |
| `dispatch_post_social_dispatch_liveovercontinue` | POST | `/` | `/social/dispatch/liveOverContinue` | 直播间结束"继续"接口 —— 前端在收到 WS 推送的{@code isOver=true} 时弹框， | write |
| `dispatch_post_social_dispatch_page` | POST | `/` | `/social/dispatch/page` | 项目分页 | read |
| `dispatch_post_social_dispatch_pauseproject` | POST | `/` | `/social/dispatch/pauseProject` | 项目暂停 | write |
| `dispatch_post_social_dispatch_pausetask` | POST | `/` | `/social/dispatch/pauseTask` | 暂停任务 | write |
| `dispatch_post_social_dispatch_querydevice` | POST | `/` | `/social/dispatch/queryDevice` | 根据项目查询所绑定的设备 | read |
| `dispatch_post_social_dispatch_querydevicepool` | POST | `/` | `/social/dispatch/queryDevicePool` | 查询设备 | read |
| `dispatch_post_social_dispatch_querydevicepoolbyevent` | POST | `/` | `/social/dispatch/queryDevicePoolByEvent` | 根据事件查询设备待命池列表 | read |
| `dispatch_post_social_dispatch_querydevicepoollabel` | POST | `/` | `/social/dispatch/queryDevicePoolLabel` | 查询设备池标签 | read |
| `dispatch_post_social_dispatch_queryeventlist` | POST | `/` | `/social/dispatch/queryEventList` | 查询事件列表 | read |
| `dispatch_post_social_dispatch_queryprojectconfig` | POST | `/` | `/social/dispatch/queryProjectConfig` | 查询项目配置字段 | read |
| `dispatch_post_social_dispatch_queryprojecttime` | POST | `/` | `/social/dispatch/queryProjectTime` | 查询项目执行时间 | read |
| `dispatch_post_social_dispatch_refreshruncount` | POST | `/` | `/social/dispatch/refreshRunCount` | 刷新运行次数 | write |
| `dispatch_post_social_dispatch_revokeevent` | POST | `/` | `/social/dispatch/revokeEvent` | 撤回最近一次操作 | write |
| `dispatch_post_social_dispatch_screendominance` | POST | `/` | `/social/dispatch/screenDominance` | 霸屏操作 | write |
| `dispatch_post_social_dispatch_start` | POST | `/` | `/social/dispatch/start` | 项目开始 | write |
| `dispatch_post_social_dispatch_stop` | POST | `/` | `/social/dispatch/stop` | 事件暂停 | write |
| `dispatch_post_social_dispatch_terminate` | POST | `/` | `/social/dispatch/terminate` | 紧急终止 | write |
| `dispatch_post_social_dispatch_unbind` | POST | `/` | `/social/dispatch/unbind` | 事件和设备解绑 | destructive |
| `dispatch_post_social_dispatch_updateevent` | POST | `/` | `/social/dispatch/updateEvent` | 修改事件 | write |
| `dispatch_post_social_dispatch_updatewaterlevel` | POST | `/` | `/social/dispatch/updateWaterLevel` | 修改水位 | write |
| `dispatch_post_social_postspread_save` | POST | `/` | `/social/postSpread/save` | 帖子推广参数保存 | write |
| `dispatch_post_social_posttask_cancel` | POST | `/` | `/social/postTask/cancel` | 发帖任务取消 | write |
| `dispatch_post_social_posttask_deletebatch` | POST | `/` | `/social/postTask/deleteBatch` | 发帖任务 - 删除 | destructive |
| `dispatch_post_social_posttask_list` | POST | `/` | `/social/postTask/list` | 发帖任务列表 | read |
| `dispatch_post_social_posttask_posttaskid_det_list` | POST | `/` | `/social/postTask/{postTaskId}/det/list` | 发帖任务明细列表 | read |
| `dispatch_post_social_posttask_publish` | POST | `/` | `/social/postTask/publish` | 发帖任务 - 发布 | write |
| `dispatch_post_social_posttask_rerun` | POST | `/` | `/social/postTask/rerun` | 发帖任务 - 重新运行 | write |
| `dispatch_post_social_posttask_save` | POST | `/` | `/social/postTask/save` | 发帖任务保存 | write |
| `dispatch_post_social_posttask_upload_appname` | POST | `/` | `/social/postTask/upload/{appName}` | 发帖任务上传图片或者视频 | write |
| `dispatch_post_social_script_flow_add` | POST | `/` | `/social/script/flow/add` | 新增脚本流程 | write |
| `dispatch_post_social_script_flow_edit` | POST | `/` | `/social/script/flow/edit` | 编辑脚本流程 | write |
| `dispatch_post_social_script_flow_page` | POST | `/` | `/social/script/flow/page` | 分页脚本流程 | read |
| `dispatch_post_social_script_flow_upload` | POST | `/` | `/social/script/flow/upload` | 上传脚本文件 | write |
| `dispatch_post_social_script_import` | POST | `/` | `/social/script/import` | 话术导入 | write |
| `dispatch_post_social_system_component_list` | POST | `/` | `/social/system-component/list` | 获取系统组件列表 | read |
| `dispatch_post_social_system_component_update` | POST | `/` | `/social/system-component/update` | 新增或编辑组件 | write |
| `dispatch_post_social_task` | POST | `/` | `/social/task` | 保存任务并触发设备分发/执行。Plan B（修复 commit 72581136 引入的 401）： | write |
| `dispatch_post_social_task_download` | POST | `/` | `/social/task/download` | 下载任务日志信息 | read |
| `dispatch_post_social_task_downloadtaskdocuments` | POST | `/` | `/social/task/downloadTaskDocuments` | 汇总下载多个任务日志中的 taskDocuments 为单个 CSV 文件。 | read |
| `dispatch_post_social_task_log` | POST | `/` | `/social/task/log` | 根据id查询任务分页 | read |
| `dispatch_post_social_task_log_cancel` | POST | `/` | `/social/task/log/cancel` | 取消任务 | write |
| `dispatch_post_social_task_page` | POST | `/` | `/social/task/page` | 分页查询任务 | read |
| `dispatch_post_social_task_perform` | POST | `/` | `/social/task/perform` | 执行任务 | write |
| `dispatch_post_social_task_plan_page` | POST | `/` | `/social/task/plan/page` | 计划任务查询应用和表单配置 | read |
| `dispatch_post_social_template_executionrecord_page` | POST | `/` | `/social/template/executionRecord/page` | 模板执行记录分页查询 | read |
| `dispatch_put_social_dispatch_edit` | PUT | `/` | `/social/dispatch/edit` | 编辑项目 | write |
| `dispatch_put_social_task_update` | PUT | `/` | `/social/task/update` | 更新任务 | write |

## 操作详情
### dispatch_delete_social_cache_clear
- 摘要：清空缓存列表（不允许存在正在执行中的任务）
- `DELETE /social/cache/clear` · 风险：destructive · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_delete_social_dispatch_delete
- 摘要：删除项目
- `DELETE /social/dispatch/delete` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `projectId` (string, 可选) — 项目ID
  - `liveRoomOverCountdownMinutes` (integer, 可选) — 倒计时时间
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_delete_social_dispatch_deleteevent
- 摘要：删除事件
- `DELETE /social/dispatch/deleteEvent` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `eventId` (string, 可选) — 事件ID
  - `topicId` (string, 可选) — 话题id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_delete_social_dispatch_removetask
- 摘要：移除任务
- `DELETE /social/dispatch/removeTask` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `projectId` (string, 可选) — 项目id
  - `deviceIds` (string [], 可选) — 设备ID集合
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_delete_social_dispatch_removewaterlevelstep
- 摘要：移除单个水位阶梯点 —— 按子表 social_dispatch_water_level_config_det 主键 ID 逻辑删除。
- `DELETE /social/dispatch/removeWaterLevelStep` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `id` (integer, 可选) — 子表 social_dispatch_water_level_config_det 主键 id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_delete_social_script_flow_delete
- 摘要：删除脚本流程
- `DELETE /social/script/flow/delete` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `scriptIds` (string [], 可选) — 脚本id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_delete_social_system_component_del
- 摘要：删除组件
- `DELETE /social/system-component/del` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `componentId` (string, 可选) — 组件编号
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_delete_social_task
- 摘要：批量删除任务
- `DELETE /social/task` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `taskIds` (string [], 可选) — 任务id集合
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_delete_social_template_executionrecord_del_recordid
- 摘要：删除执行记录
- `DELETE /social/template/executionRecord/del/{recordId}` · 风险：destructive · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_get_social_analysis_setting_list
- 摘要：获取所有分析 Agent 设置列表
- `GET /social/analysis/setting/list` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `id`, `settingName`, `licenseState`, `licenseExpireDate`

### dispatch_get_social_cache_query
- 摘要：查询缓存列表
- `GET /social/cache/query` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `deviceNum`, `taskType`, `taskStatus`, `localDateTime`, `deviceId`, `taskId`, `licenseState`, `licenseExpireDate`

### dispatch_get_social_postspread_detail
- 摘要：帖子推广详情
- `GET /social/postSpread/detail` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `postTaskVO`, `id`, `appName`, `jobName`, `headline`, `intervalDuration`, `createTime`, `status`, `startTime` …

### dispatch_get_social_posttask_posttaskid
- 摘要：发帖任务详情
- `GET /social/postTask/{postTaskId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `id`, `appName`, `jobName`, `status`, `headline`, `startTime`, `intervalDuration`, `createTime`, `accountCount` …

### dispatch_get_social_script_flow_detail_id
- 摘要：获取脚本流程详情
- `GET /social/script/flow/detail/{id}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `id`, `name`, `remark`, `type`, `flow`, `key`, `variables`, `key`, `code` …

### dispatch_get_social_script_flow_download_id
- 摘要：下载脚本文件
- `GET /social/script/flow/download/{id}` · 风险：read · 鉴权：required

### dispatch_get_social_system_component_detail_componentid
- 摘要：组件详情
- `GET /social/system-component/detail/{componentId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `componentId`, `componentName`, `componentType`, `templateType`, `engineType`, `componentJson`, `key`, `workflowId`, `componentParam` …

### dispatch_get_social_tag_list
- 摘要：查询任务标签集合
- `GET /social/tag/list` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `id`, `parentId`, `tagName`, `children`, `id`, `parentId`, `tagName`, `children`, `licenseState` …

### dispatch_get_social_task_id
- 摘要：根据id查询任务
- `GET /social/task/{id}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_get_social_template_executionrecord_detail_recordid
- 摘要：获取执行记录详情
- `GET /social/template/executionRecord/detail/{recordId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `id`, `templateLibraryId`, `startTime`, `actualFinishTime`, `endTime`, `executionStatus`, `failureReason`, `bp`, `execDetail` …

### dispatch_get_social_template_executionrecord_now_tempid
- 摘要：获取当前模板执行情况
- `GET /social/template/executionRecord/now/{tempId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `id`, `templateLibraryId`, `startTime`, `actualFinishTime`, `endTime`, `executionStatus`, `failureReason`, `bp`, `execNowDetail` …

### dispatch_post_social_analysis_update
- 摘要：更新分析 Agent 设置
- `POST /social/analysis/update` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `analysisId` (string, 可选) — 社群信息编号
  - `settingId` (string, 可选) — agentId
  - `groupTag` (string, 可选) — 群标签
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_post_social_dispatch_add
- 摘要：新增项目
- `POST /social/dispatch/add` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `projectName` (string, 可选) — 项目名称
  - `business` (string, 可选) — 业务场景 直播间运维/社媒内容分发/聊天群聊维护
  - `appId` (string, 可选) — 应用ID
  - `appName` (string, 可选) — 平台名称
  - `targetUrl` (string, 可选) — 目标URL
  - `startTime` (string, 可选) — 开始时间
  - `endTime` (string, 可选) — 结束时间
  - `priority` (string, 可选) — 优先级 高/中/低
  - `deviceScope` (integer, 可选) — 设备范围(设备数量)
  - `deviceIds` (string [], 可选) — 设备ID集合
  - `anchorId` (string, 可选) — 主播号
  - `anchorName` (string, 可选) — 主播名称（传给 RPA 脚本作为变量）
  - `audienceListCapture` (boolean, 可选) — 直播间观众清单抓取开关：开启=true / 关闭=false（默认）。{@code ClueConvertDispatchJob} 在派单循环中读取，任一开关开启才触发脚本派单；默认两个开关都是关闭（false），与"新增项目表单里默认全部为"否""对齐。
  - `commentUserCapture` (boolean, 可选) — 直播间评论用户抓取开关：开启=true / 关闭=false（默认）。
  - `liveRoomOverCountdownMinutes` (integer, 可选) — 直播间结束倒计时分钟数，默认 15。可空，null 时按 15 入库。
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_post_social_dispatch_addevent
- 摘要：新增事件
- `POST /social/dispatch/addEvent` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `projectId` (string, 可选) — 关联项目ID
  - `eventName` (string, 可选) — 事件名称
  - `deviceAssignMode` (string, 可选) — 设备指派模式 (对应下拉框，如：RANDOM_DEVICE, SPECIFIC_DEVICE)
  - `devices` (object [], 可选) — 设备列表（含 deviceId + deviceIp）
  - `deviceId` (string, 可选) — 设备ID
  - `deviceIp` (string, 可选) — 设备IP
  - `accountName` (string, 可选) — 账号名称
  - `executeCount` (integer, 可选) — 执行数量
  - `entryRhythm` (string, 可选) — 入场节奏
  - `exitRhythm` (string, 可选) — 离场节奏
  - `operationFrequency` (string, 可选) — 单台操作频率
  - `customOperationFrequency` (string, 可选) — 自定义单台操作频率
  - `actionFailureRate` (number, 可选) — 动作失败率阈值
  - `blockStrategy` (string, 可选) — 熔断策略 (可定义为 String 或对应的枚举)
  - `deviceExclusion` (boolean, 可选) — 设备排除 (开关)
  - `abnormalDeviceRecord` (boolean, 可选) — 异常设备记录 (开关)
  - `interactionMode` (string, 可选) — 互动模式
  - `interactionIntimacy` (integer, 可选) — 互动亲密(条/min)
  - `topicControl` (object, 可选) — 话题控制台
  - `key` (object, 可选)
  - `matchTag` (string, 可选) — 匹配标签
  - `topicDeviceType` (string, 可选) — 设备类型
  - `topicDeviceAssign` (string, 可选) — 设备指定
  - `expansionMode` (string, 可选) — 扩容模式
  - `topicPoolType` (string, 可选) — 预设话题池类型
  - `topicPool` (string [], 可选) — 预设话题池
  - `topics` (object [], 可选) — 话题配置列表（含权重、话术等）
  - `key` (object, 可选)
  - `executeCycle` (string, 可选) — 执行周期
  - `customCycle` (string, 可选) — 自定义周期
  - `startTime` (string, 可选) — 事件开始时间
  - `endTime` (string, 可选) — 事件结束时间
  - `appId` (string, 可选) — 应用ID
  - `programId` (string, 可选) — 任务功能id
  - `taskData` (object, 可选) — 任务数据
  - `key` (object, 可选)
  - `track` (string, 可选) — 事件轨道
  - `eventStatus` (string, 可选) — 事件状态
  - `totalDevices` (integer, 可选) — 设备总数
- 响应字段：`code`, `msg`, `data`, `eventId`, `eventName`, `startTime`, `endTime`, `programId`, `track`, `eventMode`, `entryRhythm`, `exitRhythm` …

### dispatch_post_social_dispatch_allocate
- 摘要：分配挂载
- `POST /social/dispatch/allocate` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `projectId` (string, 可选) — 项目id
  - `deviceIds` (string [], 可选) — 设备id集合
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_post_social_dispatch_batchupdateevent
- 摘要：批量编辑事件
- `POST /social/dispatch/batchUpdateEvent` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `projectId` (string, 可选) — 项目ID
  - `events` (object [], 可选) — 批量更新事件
  - `eventId` (string, 可选) — 事件ID
  - `eventName` (string, 可选) — 事件名称
  - `startTime` (string, 可选) — 开始 时间
  - `endTime` (string, 可选) — 结束 时间
  - `programId` (string, 可选) — 功能id
  - `executeCount` (integer, 可选) — 执行次数
  - `devices` (object [], 可选) — 设备列表（含 deviceId + deviceIp）
  - `deviceId` (string, 可选) — 设备ID
  - `deviceIp` (string, 可选) — 设备IP
  - `accountName` (string, 可选) — 账号名称
  - `taskData` (object, 可选) — 任务数据
  - `key` (object, 可选)
  - `track` (string, 可选) — 轨迹
  - `deviceAssignMode` (string, 可选) — 设备分配模式
  - `entryRhythm` (string, 可选) — 入口模式
  - `exitRhythm` (string, 可选) — 出口模式
  - `operationFrequency` (string, 可选) — 操作频率
  - `customOperationFrequency` (string, 可选) — 自定义操作频率
  - `actionFailureRate` (number, 可选) — 行为失败率
  - `blockStrategy` (string, 可选) — 屏蔽策略
  - `deviceExclusion` (boolean, 可选) — 设备排除
  - `abnormalDeviceRecord` (boolean, 可选) — 异常设备记录
  - `interactionMode` (string, 可选) — 互动模式
  - `interactionIntimacy` (integer, 可选) — 互动亲密度
  - `topicControl` (object, 可选) — 互动数量
  - `key` (object, 可选)
  - `matchTag` (string, 可选) — 匹配标签
  - `topicDeviceType` (string, 可选) — 匹配标签数量
  - `topicDeviceAssign` (string, 可选) — 设备分配
  - `expansionMode` (string, 可选) — 扩容模式
  - `topicPoolType` (string, 可选) — 扩容数量
  - `topicPool` (string [], 可选) — 扩容标签
  - `topics` (object [], 可选) — 话题配置列表（含权重、话术等）
  - `key` (object, 可选)
  - `executeCycle` (string, 可选) — 执行周期
  - `customCycle` (string, 可选) — 自定义执行周期
  - `eventStatus` (string, 可选) — 事件状态
  - `totalDevices` (integer, 可选) — 设备总数
  - `isScreenDominance` (boolean, 可选) — 是否霸屏
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_post_social_dispatch_checklabeldevice
- 摘要：校验标签设备
- `POST /social/dispatch/checkLabelDevice` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `tagIds` (string [], 可选) — 标签ID
  - `deviceIds` (string [], 可选) — 设备id集合
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_post_social_dispatch_clearevent
- 摘要：一键清空事件
- `POST /social/dispatch/clearEvent` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `projectId` (string, 可选) — 项目ID
  - `liveRoomOverCountdownMinutes` (integer, 可选) — 倒计时时间
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_post_social_dispatch_clearscreendominance
- 摘要：取消霸屏
- `POST /social/dispatch/clearScreenDominance` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `eventId` (string, 可选) — 事件ID
  - `topicId` (string, 可选) — 话题id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_post_social_dispatch_continue
- 摘要：事件继续
- `POST /social/dispatch/continue` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `eventId` (string, 可选) — 事件ID
  - `topicId` (string, 可选) — 话题id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_post_social_dispatch_continueproject
- 摘要：项目继续
- `POST /social/dispatch/continueProject` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `projectId` (string, 可选) — 项目ID
  - `liveRoomOverCountdownMinutes` (integer, 可选) — 倒计时时间
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_post_social_dispatch_datastatistics
- 摘要：数据统计
- `POST /social/dispatch/dataStatistics` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `projectId` (string, 可选) — 项目ID
  - `liveRoomOverCountdownMinutes` (integer, 可选) — 倒计时时间
- 响应字段：`code`, `msg`, `data`, `metrics`, `fieldCode`, `fieldName`, `value`, `unit`, `licenseState`, `licenseExpireDate`

### dispatch_post_social_dispatch_detail
- 摘要：项目详情
- `POST /social/dispatch/detail` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `projectId` (string, 可选) — 项目ID
  - `liveRoomOverCountdownMinutes` (integer, 可选) — 倒计时时间
- 响应字段：`code`, `msg`, `data`, `projectId`, `projectName`, `business`, `businessName`, `appId`, `appName`, `targetUrl`, `startTime`, `endTime` …

### dispatch_post_social_dispatch_device_disable
- 摘要：人工调度禁用设备（批量）。
- `POST /social/dispatch/device/disable` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `projectId` (integer, 可选) — 项目 ID（可选，决定禁用作用域）。 非空：项目级禁用，设备仅在该项目不可调度； 为空：全局禁用，设备在所有项目都不可调度（扇出全部项目池行 + 全局标记）。
  - `deviceIds` (string [], 可选) — 设备 ID 列表（必填，支持批量）
  - `reason` (string, 可选) — 禁用/启用原因（可选，用于日志记录）
- 响应字段：`code`, `msg`, `data`, `successCount`, `failedDeviceIds`, `licenseState`, `licenseExpireDate`

### dispatch_post_social_dispatch_device_enable
- 摘要：取消调度禁用设备（批量）。
- `POST /social/dispatch/device/enable` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `projectId` (integer, 可选) — 项目 ID（可选，决定禁用作用域）。 非空：项目级禁用，设备仅在该项目不可调度； 为空：全局禁用，设备在所有项目都不可调度（扇出全部项目池行 + 全局标记）。
  - `deviceIds` (string [], 可选) — 设备 ID 列表（必填，支持批量）
  - `reason` (string, 可选) — 禁用/启用原因（可选，用于日志记录）
- 响应字段：`code`, `msg`, `data`, `successCount`, `failedDeviceIds`, `licenseState`, `licenseExpireDate`

### dispatch_post_social_dispatch_eventterminated
- 摘要：事件终止
- `POST /social/dispatch/eventTerminated` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `eventId` (string, 可选) — 事件ID
  - `topicId` (string, 可选) — 话题id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_post_social_dispatch_exportbriefing
- 摘要：项目执行简报导出（5-sheet xlsx）。
- `POST /social/dispatch/exportBriefing` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `projectId` (integer, 可选) — 项目 ID（social_dispatch_project.id）

### dispatch_post_social_dispatch_exportscreenshot
- 摘要：项目截图记录导出（zip 包，按{@code 项目名/设备IP/任务名/logId_序号_原文件名} 目录组织）。
- `POST /social/dispatch/exportScreenshot` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `projectId` (integer, 可选) — 项目 ID（social_dispatch_project.id）

### dispatch_post_social_dispatch_getdevicepool
- 摘要：获取待命池设备
- `POST /social/dispatch/getDevicePool` · 风险：read · 鉴权：required
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
  - `projectId` (integer, 可选) — 项目ID
  - `deviceId` (string, 可选) — 设备ID
  - `deviceIp` (string, 可选) — 设备IP
  - `accountId` (string, 可选) — 账号ID
  - `accountName` (string, 可选) — 账号名称
  - `accountStatus` (string, 可选) — 账号状态 空闲 蓝色/活动中 绿色/队列中 黄色/禁用 灰色/异常状态 红色
  - `operationNum` (integer, 可选) — 运行次数
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
  - `projectId` (string, 可选) — 项目ID
  - `accountStatus` (string, 可选) — 账号状态 空闲 蓝色/活动中 绿色/队列中 黄色/禁用 灰色/异常状态 红色
  - `eventId` (string, 可选) — 事件ID
- 响应字段：`code`, `msg`, `data`, `records`, `deviceId`, `deviceIp`, `accountId`, `accountName`, `deviceTagList`, `accountStatus`, `accountStatusName`, `operationNum` …
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### dispatch_post_social_dispatch_getdevicestatusnum
- 摘要：获取设备状态数量
- `POST /social/dispatch/getDeviceStatusNum` · 风险：read · 鉴权：required
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
  - `projectId` (integer, 可选) — 项目ID
  - `deviceId` (string, 可选) — 设备ID
  - `deviceIp` (string, 可选) — 设备IP
  - `accountId` (string, 可选) — 账号ID
  - `accountName` (string, 可选) — 账号名称
  - `accountStatus` (string, 可选) — 账号状态 空闲 蓝色/活动中 绿色/队列中 黄色/禁用 灰色/异常状态 红色
  - `operationNum` (integer, 可选) — 运行次数
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
  - `projectId` (string, 可选) — 项目ID
  - `accountStatus` (string, 可选) — 账号状态 空闲 蓝色/活动中 绿色/队列中 黄色/禁用 灰色/异常状态 红色
  - `eventId` (string, 可选) — 事件ID
- 响应字段：`code`, `msg`, `data`, `activeNum`, `idleNum`, `exceptionNum`, `queueNum`, `disabledNum`, `licenseState`, `licenseExpireDate`
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### dispatch_post_social_dispatch_list
- 摘要：项目集合
- `POST /social/dispatch/list` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `projectName` (string, 可选) — 项目名称
- 响应字段：`code`, `msg`, `data`, `projectId`, `projectName`, `business`, `businessName`, `appId`, `appName`, `targetUrl`, `startTime`, `endTime` …

### dispatch_post_social_dispatch_liveovercontinue
- 摘要：直播间结束"继续"接口 —— 前端在收到 WS 推送的{@code isOver=true} 时弹框，
- `POST /social/dispatch/liveOverContinue` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `projectId` (string, 可选) — 项目ID
  - `liveRoomOverCountdownMinutes` (integer, 可选) — 倒计时时间
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_post_social_dispatch_page
- 摘要：项目分页
- `POST /social/dispatch/page` · 风险：read · 鉴权：required
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
  - `projectName` (string, 可选) — 项目名称
  - `business` (string, 可选) — 业务场景 直播间运维/社媒内容分发/聊天群聊维护
  - `appId` (string, 可选) — 应用ID
  - `appName` (string, 可选) — 平台名称
  - `targetUrl` (string, 可选) — 目标URL
  - `startTime` (string, 可选) — 开始时间
  - `endTime` (string, 可选) — 结束时间
  - `priority` (string, 可选) — 优先级 高/中/低
  - `projectStatus` (string, 可选) — 项目状态 配置中/执行中/已结束
  - `deviceScope` (integer, 可选) — 设备范围(设备数量)
  - `executionStartTime` (string, 可选) — 当前执行会话开始时间
  - `executedSeconds` (integer, 可选) — 累计已执行秒数
  - `anchorId` (string, 可选) — 主播号
  - `anchorName` (string, 可选) — 主播名称（传给 RPA 脚本作为变量）
  - `audienceListCapture` (boolean, 可选) — 直播间观众清单抓取开关：开启=1（true）/ 关闭=0（false）。由{@code ClueConvertDispatchJob} 在派单循环中读取 —— 任一开关开启才触发脚本派单。默认 false；新增项目入参为{@code null} 时按 false 处理。
  - `commentUserCapture` (boolean, 可选) — 直播间评论用户抓取开关：开启=1（true）/ 关闭=0（false）。语义同{@link #audienceListCapture}，与 CLUE 脚本的"观众清单/评论用户抓取"一一对应。
  - `liveRoomOverCountdownMinutes` (integer, 可选) — 直播间结束倒计时分钟数，默认 15。写入 addProject / editProject 时由前端表单传入；null 时{@code LiveRoomOverCountdownJob} 与{@code WaterLevelWebSocketHandler}均按 15 fallback（与历史硬编码行为一致）。 {@code LiveRoomOverCountdownJob#handleKey} 用此值计算 "距首次触发多久后终止项目" {@code WaterLevelWebSocketHandler#attachLiveRoomOverFlag} 用此值计算 "点继续后多久内 isOver=false"
  - `monitorJobId` (integer, 可选) — 直播间人数监控 XXL-Job ID（每 10 秒一次，缓存与 currentLevel 偏差超 1 分钟触发入场脚本）
  - `clueConvertJobId` (integer, 可选) — 直播线索转化 XXL-Job ID（每分钟一次，按枚举 CLUE 查询脚本并行派发到手机）项目开始时由 ClueConvertJobLifecycleManager 注册；项目暂停/终止/删除时移除。
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
- 响应字段：`code`, `msg`, `data`, `records`, `projectId`, `projectName`, `business`, `businessName`, `appId`, `appName`, `targetUrl`, `startTime` …
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### dispatch_post_social_dispatch_pauseproject
- 摘要：项目暂停
- `POST /social/dispatch/pauseProject` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `projectId` (string, 可选) — 项目ID
  - `liveRoomOverCountdownMinutes` (integer, 可选) — 倒计时时间
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_post_social_dispatch_pausetask
- 摘要：暂停任务
- `POST /social/dispatch/pauseTask` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `rapTaskId` (string, 可选) — rpa执行id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_post_social_dispatch_querydevice
- 摘要：根据项目查询所绑定的设备
- `POST /social/dispatch/queryDevice` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `projectId` (string, 可选) — 项目ID
- 响应字段：`code`, `msg`, `data`, `deviceId`, `deviceIp`, `deviceStatus`, `deviceStatusName`, `dispatchStatus`, `operationNum`, `eventTaskStatus`, `deviceTagList`, `licenseState` …

### dispatch_post_social_dispatch_querydevicepool
- 摘要：查询设备
- `POST /social/dispatch/queryDevicePool` · 风险：read · 鉴权：required
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
  - `projectId` (integer, 可选) — 项目ID
  - `deviceId` (string, 可选) — 设备ID
  - `deviceIp` (string, 可选) — 设备IP
  - `accountId` (string, 可选) — 账号ID
  - `accountName` (string, 可选) — 账号名称
  - `accountStatus` (string, 可选) — 账号状态 空闲 蓝色/活动中 绿色/队列中 黄色/禁用 灰色/异常状态 红色
  - `operationNum` (integer, 可选) — 运行次数
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
  - `projectId` (string, 可选) — 项目id
  - `appId` (string, 可选) — 应用id
  - `condition` (string, 可选) — 条件(支持 设备编号,设备分组，设备ip，用户名称，用户昵称)
  - `deviceStatus` (string, 可选) — 设备状态
  - `eventTaskStatus` (string, 可选) — 任务状态
  - `tagId` (string [], 可选) — 标签id集合
  - `healthFilter` (boolean, 可选) — 健康过滤。默认关闭：开启后会 fork curl + adb 在 parallelStream 内做冷路径探测,重启后第一次查询因为 libc / ForkJoinPool / TLS 链路冷启动全 false → 0 条返回。默认 false 让列表页直接拿结果,需要时前端显式传 true。
  - `deviceIds` (string [], 可选) — 设备id集合
  - `eventProjectId` (string, 可选) — 事件关联项目id
  - `suiteIds` (string [], 可选) — 分组id集合
- 响应字段：`code`, `msg`, `data`, `records`, `projectId`, `deviceId`, `deviceIp`, `accountName`, `deviceStatus`, `deviceStatusName`, `operationNum`, `eventTaskStatus` …
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### dispatch_post_social_dispatch_querydevicepoolbyevent
- 摘要：根据事件查询设备待命池列表
- `POST /social/dispatch/queryDevicePoolByEvent` · 风险：read · 鉴权：required
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
  - `projectId` (integer, 可选) — 项目ID
  - `deviceId` (string, 可选) — 设备ID
  - `deviceIp` (string, 可选) — 设备IP
  - `accountId` (string, 可选) — 账号ID
  - `accountName` (string, 可选) — 账号名称
  - `accountStatus` (string, 可选) — 账号状态 空闲 蓝色/活动中 绿色/队列中 黄色/禁用 灰色/异常状态 红色
  - `operationNum` (integer, 可选) — 运行次数
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
  - `eventId` (string, 可选) — 事件id
- 响应字段：`code`, `msg`, `data`, `records`, `deviceId`, `deviceIp`, `accountId`, `accountName`, `deviceTagList`, `accountStatus`, `accountStatusName`, `operationNum` …
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### dispatch_post_social_dispatch_querydevicepoollabel
- 摘要：查询设备池标签
- `POST /social/dispatch/queryDevicePoolLabel` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `projectId` (string, 可选) — 项目ID
  - `liveRoomOverCountdownMinutes` (integer, 可选) — 倒计时时间
- 响应字段：`code`, `msg`, `data`, `tagId`, `tagName`, `licenseState`, `licenseExpireDate`

### dispatch_post_social_dispatch_queryeventlist
- 摘要：查询事件列表
- `POST /social/dispatch/queryEventList` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `projectId` (string, 可选)
- 响应字段：`code`, `msg`, `data`, `eventId`, `eventName`, `startTime`, `endTime`, `programId`, `track`, `eventMode`, `entryRhythm`, `exitRhythm` …

### dispatch_post_social_dispatch_queryprojectconfig
- 摘要：查询项目配置字段
- `POST /social/dispatch/queryProjectConfig` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `projectId` (string, 可选) — 项目ID
  - `liveRoomOverCountdownMinutes` (integer, 可选) — 倒计时时间
- 响应字段：`code`, `msg`, `data`, `id`, `projectType`, `fieldCode`, `fieldName`, `unit`, `showFlag`, `sortNum`, `color`, `isWater` …

### dispatch_post_social_dispatch_queryprojecttime
- 摘要：查询项目执行时间
- `POST /social/dispatch/queryProjectTime` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `projectId` (string, 可选) — 项目ID
  - `liveRoomOverCountdownMinutes` (integer, 可选) — 倒计时时间
- 响应字段：`code`, `msg`, `data`, `projectId`, `projectName`, `startTime`, `endTime`, `projectStatus`, `executedHours`, `remainingMinutes`, `licenseState`, `licenseExpireDate`

### dispatch_post_social_dispatch_refreshruncount
- 摘要：刷新运行次数
- `POST /social/dispatch/refreshRunCount` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `projectId` (string, 可选) — 项目id
  - `deviceId` (string, 可选) — 设备id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_post_social_dispatch_revokeevent
- 摘要：撤回最近一次操作
- `POST /social/dispatch/revokeEvent` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `projectId` (string, 可选) — 项目ID
  - `liveRoomOverCountdownMinutes` (integer, 可选) — 倒计时时间
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_post_social_dispatch_screendominance
- 摘要：霸屏操作
- `POST /social/dispatch/screenDominance` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `eventId` (string, 可选) — 事件ID
  - `topicId` (string, 可选) — 话题id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_post_social_dispatch_start
- 摘要：项目开始
- `POST /social/dispatch/start` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `projectId` (string, 可选) — 项目ID
  - `liveRoomOverCountdownMinutes` (integer, 可选) — 倒计时时间
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_post_social_dispatch_stop
- 摘要：事件暂停
- `POST /social/dispatch/stop` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `eventId` (string, 可选) — 事件ID
  - `topicId` (string, 可选) — 话题id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_post_social_dispatch_terminate
- 摘要：紧急终止
- `POST /social/dispatch/terminate` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `projectId` (string, 可选) — 项目ID
  - `liveRoomOverCountdownMinutes` (integer, 可选) — 倒计时时间
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_post_social_dispatch_unbind
- 摘要：事件和设备解绑
- `POST /social/dispatch/unbind` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `eventId` (string, 可选) — 事件id
  - `deviceId` (string, 可选) — 设备id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_post_social_dispatch_updateevent
- 摘要：修改事件
- `POST /social/dispatch/updateEvent` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `eventId` (string, 可选) — 事件ID
  - `eventName` (string, 可选) — 事件名称
  - `startTime` (string, 可选) — 开始 时间
  - `endTime` (string, 可选) — 结束 时间
  - `programId` (string, 可选) — 功能id
  - `executeCount` (integer, 可选) — 执行次数
  - `devices` (object [], 可选) — 设备列表（含 deviceId + deviceIp）
  - `deviceId` (string, 可选) — 设备ID
  - `deviceIp` (string, 可选) — 设备IP
  - `accountName` (string, 可选) — 账号名称
  - `taskData` (object, 可选) — 任务数据
  - `key` (object, 可选)
  - `track` (string, 可选) — 轨迹
  - `deviceAssignMode` (string, 可选) — 设备分配模式
  - `entryRhythm` (string, 可选) — 入口模式
  - `exitRhythm` (string, 可选) — 出口模式
  - `operationFrequency` (string, 可选) — 操作频率
  - `customOperationFrequency` (string, 可选) — 自定义操作频率
  - `actionFailureRate` (number, 可选) — 行为失败率
  - `blockStrategy` (string, 可选) — 屏蔽策略
  - `deviceExclusion` (boolean, 可选) — 设备排除
  - `abnormalDeviceRecord` (boolean, 可选) — 异常设备记录
  - `interactionMode` (string, 可选) — 互动模式
  - `interactionIntimacy` (integer, 可选) — 互动亲密度
  - `topicControl` (object, 可选) — 互动数量
  - `key` (object, 可选)
  - `matchTag` (string, 可选) — 匹配标签
  - `topicDeviceType` (string, 可选) — 匹配标签数量
  - `topicDeviceAssign` (string, 可选) — 设备分配
  - `expansionMode` (string, 可选) — 扩容模式
  - `topicPoolType` (string, 可选) — 扩容数量
  - `topicPool` (string [], 可选) — 扩容标签
  - `topics` (object [], 可选) — 话题配置列表（含权重、话术等）
  - `key` (object, 可选)
  - `executeCycle` (string, 可选) — 执行周期
  - `customCycle` (string, 可选) — 自定义执行周期
  - `eventStatus` (string, 可选) — 事件状态
  - `totalDevices` (integer, 可选) — 设备总数
  - `isScreenDominance` (boolean, 可选) — 是否霸屏
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_post_social_dispatch_updatewaterlevel
- 摘要：修改水位
- `POST /social/dispatch/updateWaterLevel` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `projectId` (string, 可选) — 项目ID
  - `waterLevel` (integer, 可选) — 水位单值场景：{@link #waterLevelSteps} 为空时，本字段作为"立即生效"的单阶梯点水位写入 det 子表，{@code timePoint} 兜底为当前时间。
  - `slope` (integer, 可选) — 坡度
  - `programId` (string, 可选) — 功能id
  - `entryMode` (string, 可选) — 进入模式控制水位入场路径的来源策略：自然进入 / 直接进入 / 搜索进入 / 智能混合。缺省时由调用方回填为{@link EntryModeEnum#SMART_MIXED}。
  - `peak` (integer, 可选) — 水位峰值上限 —— 直播间当前人数达到该值后,水位入场自动停止触发。与{@link #slope} 同属项目级固定配置。{@code null} 表示不更新(保留主表现有值);显式传{@code 0} 表示清空峰值上限(回到无上限默认行为)。
  - `waterLevelSteps` (object [], 可选) — 多组水位子表数据 —— 可选。非空时作为阶梯点位列表写入 det 子表（timePoint + waterLevel），{@link #waterLevel} 字段被忽略。空时回退到{@link #waterLevel} 单值兼容路径。与{@link DispatchWaterLevelStepsUpdateDTO#getSteps()} 类型一致（共享{@link WaterLevelStep}），这样单值 DTO 与阶梯 DTO 可在同一调用方代码里通用。
  - `timePoint` (string, 可选) — 本阶梯点生效时间（绝对时间戳）。不能为空。
  - `waterLevel` (integer, 可选) — 本阶梯点水位阈值。不能为空，且必须 > 0。
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_post_social_postspread_save
- 摘要：帖子推广参数保存
- `POST /social/postSpread/save` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `id` (integer, 可选) — 账号主键
  - `postTaskId` (integer, 可选) — 帖子发布任务 id
  - `postTaskName` (string, 可选) — 发布任务名称
  - `comment` (integer, 可选) — 评论生效原则
  - `commentCandidate` (string, 可选) — 评论候选语，多个
  - `thumbsUp` (integer, 可选) — 点赞生效原则
  - `transpond` (integer, 可选) — 转发生效原则
  - `share` (integer, 可选) — 分享生效原则
  - `shareFriends` (integer, 可选) — 分享好友原则
  - `collect` (integer, 可选) — 收藏生效原则
  - `addFriends` (integer, 可选) — 加好友生效原则
  - `follow` (integer, 可选) — 关注生效原则
- 响应字段：`code`, `msg`, `data`, `postTaskVO`, `id`, `appName`, `jobName`, `headline`, `intervalDuration`, `createTime`, `status`, `startTime` …

### dispatch_post_social_posttask_cancel
- 摘要：发帖任务取消
- `POST /social/postTask/cancel` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `postTaskId` (string, 可选) — 发帖任务 id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_post_social_posttask_deletebatch
- 摘要：发帖任务 - 删除
- `POST /social/postTask/deleteBatch` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `postTaskIds` (integer [], 可选) — 发帖任务 id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_post_social_posttask_list
- 摘要：发帖任务列表
- `POST /social/postTask/list` · 风险：read · 鉴权：required
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
  - `appName` (string, 可选) — 软件 app 名称
  - `jobName` (string, 可选) — 任务名称
  - `status` (string, 可选) — 发布状态
  - `headline` (string, 可选) — 文章标题
  - `startTime` (string, 可选) — 开始时间
  - `intervalDuration` (integer, 可选) — 间隔时长 单位 min
  - `fileUrl` (string, 可选) — 上传图片或者视频
  - `jobId` (string, 可选) — RPA 任务 Id
  - `postLink` (string, 可选) — 帖子链接
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
  - `keywords` (string, 可选) — 关键词搜索，支持任务名称或标题模糊查询
  - `appName` (string, 可选) — 软件 app 名称
  - `jobName` (string, 可选) — 任务名称
  - `status` (string [], 可选) — 发布状态，可多选
  - `headline` (string, 可选) — 文章标题
  - `startTime` (string, 可选) — 开始时间
  - `intervalDuration` (integer, 可选) — 间隔时长 单位 min
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### dispatch_post_social_posttask_posttaskid_det_list
- 摘要：发帖任务明细列表
- `POST /social/postTask/{postTaskId}/det/list` · 风险：read · 鉴权：required
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
  - `accountId` (integer, 可选) — 账号主键 id
  - `appAccount` (string, 可选) — app内真实账号
  - `postTaskId` (integer, 可选) — 发布任务 id
  - `status` (string, 可选) — 发布状态
  - `startTime` (string, 可选) — 开始时间
  - `endTime` (string, 可选) — 结束时间
  - `rpaTaskId` (string, 可选) — rpa 任务 id
  - `deviceIp` (string, 可选) — 设备 ip
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
  - `id` (integer, 可选) — 账号主键
  - `accountId` (integer, 可选) — 账号主键 id
  - `appAccount` (string, 可选) — app内真实账号
  - `postTaskId` (string, 可选) — 发布任务 id
  - `status` (string, 可选) — 发布状态
  - `startTime` (string, 可选) — 开始时间
  - `endTime` (string, 可选) — 开始时间
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### dispatch_post_social_posttask_publish
- 摘要：发帖任务 - 发布
- `POST /social/postTask/publish` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `id` (integer, 可选) — 账号主键
  - `appName` (string, 可选) — 软件 app 名称
  - `jobName` (string, 可选) — 任务名称
  - `status` (string, 可选) — 发布状态
  - `headline` (string, 可选) — 文章标题
  - `startTime` (string, 可选) — 开始时间
  - `intervalDuration` (integer, 可选) — 间隔时长 单位 min
  - `fileUrl` (string, 可选) — 上传图片或者视频(多个用分号;隔开)
  - `accounts` (object [], 可选) — 账号列表
  - `id` (integer, 可选) — 账号主键
  - `appAccount` (string, 可选) — 账号
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_post_social_posttask_rerun
- 摘要：发帖任务 - 重新运行
- `POST /social/postTask/rerun` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `postTaskId` (string, 可选) — 发帖任务 id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_post_social_posttask_save
- 摘要：发帖任务保存
- `POST /social/postTask/save` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `id` (integer, 可选) — 账号主键
  - `appName` (string, 可选) — 软件 app 名称
  - `jobName` (string, 可选) — 任务名称
  - `status` (string, 可选) — 发布状态
  - `headline` (string, 可选) — 文章标题
  - `startTime` (string, 可选) — 开始时间
  - `intervalDuration` (integer, 可选) — 间隔时长 单位 min
  - `fileUrl` (string, 可选) — 上传图片或者视频(多个用分号;隔开)
  - `accounts` (object [], 可选) — 账号列表
  - `id` (integer, 可选) — 账号主键
  - `appAccount` (string, 可选) — 账号
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_post_social_posttask_upload_appname
- 摘要：发帖任务上传图片或者视频
- `POST /social/postTask/upload/{appName}` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- 响应字段：`code`, `msg`, `data`, `link`, `licenseState`, `licenseExpireDate`

### dispatch_post_social_script_flow_add
- 摘要：新增脚本流程
- `POST /social/script/flow/add` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `name` (string, 可选) — 脚本名称
  - `scriptVersion` (string, 可选) — 脚本版本
  - `remark` (string, 可选) — 脚本描述
  - `code` (string, 可选) — 脚本内容
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_post_social_script_flow_edit
- 摘要：编辑脚本流程
- `POST /social/script/flow/edit` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `id` (string, 可选) — 脚本id
  - `code` (string, 可选) — 脚本内容
  - `scriptVersion` (string, 可选) — 脚本版本
  - `remark` (string, 可选) — 脚本描述
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_post_social_script_flow_page
- 摘要：分页脚本流程
- `POST /social/script/flow/page` · 风险：read · 鉴权：required
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
  - `name` (string, 可选) — 脚本名称
  - `remark` (string, 可选) — 脚本描述
  - `type` (string, 可选) — 脚本类型
  - `code` (string, 可选) — 脚本内容
  - `scriptVersion` (string, 可选) — 脚本版本
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
  - `name` (string, 可选) — 脚本名称
  - `startTime` (string, 可选) — 开始时间
  - `endTime` (string, 可选) — 结束时间
- 响应字段：`code`, `msg`, `data`, `records`, `id`, `name`, `scriptVersion`, `createTime`, `updateTime`, `developer`, `remark`, `total` …
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### dispatch_post_social_script_flow_upload
- 摘要：上传脚本文件
- `POST /social/script/flow/upload` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_post_social_script_import
- 摘要：话术导入
- `POST /social/script/import` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- 响应字段：`code`, `msg`, `data`, `id`, `content`, `fileUrl`, `scriptType`, `fileName`, `licenseState`, `licenseExpireDate`

### dispatch_post_social_system_component_list
- 摘要：获取系统组件列表
- `POST /social/system-component/list` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `componentName` (string, 可选) — 组件名
  - `componentType` (string, 可选) — 组件类型
- 响应字段：`code`, `msg`, `data`, `id`, `componentName`, `componentType`, `templateType`, `componentParam`, `key`, `assembles`, `key`, `componentColor` …

### dispatch_post_social_system_component_update
- 摘要：新增或编辑组件
- `POST /social/system-component/update` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `componentId` (string, 可选) — 组件编号
  - `componentName` (string, 必填) — 组件名称
  - `componentType` (string, 必填) — 组件类型
  - `templateType` (string, 可选) — 组装类型（text:文本库、template:模板库）
  - `engineType` (string, 必填) — 引擎类型
  - `componentJson` (object, 可选) — comfyuiJson文件信息
  - `key` (object, 可选)
  - `workflowId` (string, 可选) — Workflow_ID
  - `componentParam` (object, 可选) — 组件参数
  - `key` (object, 可选)
  - `assembles` (object [], 可选) — 组件链接
  - `key` (object, 可选)
  - `componentColor` (string, 可选) — 组件相关颜色
  - `componentFileName` (string, 可选) — 组件英文名
  - `workflowRequest` (object [], 可选) — 工作流入参
  - `key` (object, 可选)
  - `workflowResponse` (object [], 可选) — 工作流响应
  - `key` (object, 可选)
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_post_social_task
- 摘要：保存任务并触发设备分发/执行。Plan B（修复 commit 72581136 引入的 401）：
- `POST /social/task` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `key` (object, 可选)
- 响应字段：`code`, `msg`, `data`, `id`, `licenseState`, `licenseExpireDate`

### dispatch_post_social_task_download
- 摘要：下载任务日志信息
- `POST /social/task/download` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `taskIds` (string [], 可选) — 选中的任务id
  - `id` (string, 可选) — 主键id
  - `appId` (string, 可选) — 应用ID
  - `title` (string, 可选) — 任务标题
  - `taskType` (string, 可选) — 任务类型
  - `groupId` (string, 可选) — 分组id
  - `accGroupId` (string, 可选) — 账号分组ID
  - `deviceIp` (string, 可选) — 设备ip
  - `taskStatus` (string, 可选) — 任务状态
  - `executionTimeRange` (string [], 可选) — 时间范围
  - `programId` (string, 可选) — 应用功能id
  - `accName` (string, 可选) — 账号
  - `deviceIds` (string [], 可选) — 设备id集合

### dispatch_post_social_task_downloadtaskdocuments
- 摘要：汇总下载多个任务日志中的 taskDocuments 为单个 CSV 文件。
- `POST /social/task/downloadTaskDocuments` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `taskIds` (string [], 可选) — 任务id集合

### dispatch_post_social_task_log
- 摘要：根据id查询任务分页
- `POST /social/task/log` · 风险：read · 鉴权：required
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
  - `id` (string, 可选) — 主键id
  - `systemTaskId` (string, 可选) — 任务表id
  - `taskStatus` (string, 可选) — 任务状态
  - `deviceNum` (string, 可选) — 设备编号
  - `deviceAliases` (string, 可选) — 设备别名
  - `deviceIp` (string, 可选) — 设备ip
  - `deviceId` (string, 可选) — 设备id
  - `accId` (integer, 可选) — 账号编号
  - `suiteId` (integer, 可选) — 分组编号
  - `startTime` (string, 可选) — 开始时间
  - `endTime` (string, 可选) — 结束时间
  - `rpaJobId` (string, 可选) — 执行任务id
  - `rpaTaskId` (string, 可选) — 任务id
  - `postLink` (string, 可选) — 帖子链接
  - `taskPics` (object [], 可选) — 图片相关信息
  - `file` (string, 可选) — 文件信息
  - `fileName` (string, 可选) — 文件名字
  - `fileOriginalName` (string, 可选) — minio文件名
  - `taskDocuments` (object [], 可选) — 文档相关信息
  - `file` (string, 可选) — 文件信息
  - `fileName` (string, 可选) — 文件名字
  - `fileOriginalName` (string, 可选) — minio文件名
  - `aiLog` (string, 可选) — ai日志相关信息
  - `aiPhotos` (object [], 可选) — ai截图相关信息
  - `file` (string, 可选) — 文件信息
  - `fileName` (string, 可选) — 文件名字
  - `fileOriginalName` (string, 可选) — minio文件名
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
  - `systemTaskId` (string, 可选) — 任务执行id
- 响应字段：`code`, `msg`, `data`, `records`, `id`, `systemTaskId`, `deviceIp`, `deviceNum`, `deviceAliases`, `deviceId`, `deviceIdx`, `connIp` …
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### dispatch_post_social_task_log_cancel
- 摘要：取消任务
- `POST /social/task/log/cancel` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `id` (string, 可选) — 任务主键id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_post_social_task_page
- 摘要：分页查询任务
- `POST /social/task/page` · 风险：read · 鉴权：required
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
  - `id` (string, 可选) — 主键id
  - `taskTag` (string, 可选) — 任务标签
  - `appName` (string, 可选) — 应用名称
  - `title` (string, 可选) — 任务标题
  - `taskData` (object, 可选) — 任务数据
  - `key` (object, 可选)
  - `appId` (string, 可选) — 应用id
  - `rpaJobId` (string, 可选) — 计划id
  - `taskStatus` (string, 可选) — 任务状态
  - `deviceNum` (string, 可选) — 设备编号
  - `executionTimeRange` (string, 可选) — 执行时间范围
  - `groupId` (string, 可选) — 分组id
  - `deviceId` (string, 可选) — 设备id
  - `deviceIp` (string, 可选) — 设备ip
  - `fileUrl` (string, 可选) — 文件地址
  - `cellGroup` (string, 可选) — 设备分组
  - `postingId` (string, 可选) — 上传话术id
  - `taskType` (string, 可选) — 任务类型
  - `taskTypeId` (integer, 可选) — 任务类型ID（对应 social_app_form.id）
  - `programCategory` (string, 可选) — 功能类别
  - `programId` (string, 可选) — 应用功能id
  - `raisingTime` (integer, 可选) — 养号时间长
  - `scheduleId` (integer, 可选) — 日程主键
  - `planId` (integer, 可选) — 计划编号
  - `projectId` (integer, 可选) — 项目编号
  - `projectName` (string, 可选) — 项目名称（调度中心发起的任务统一标记为"调度中心"，便于在任务管理页筛选）
  - `eventId` (integer, 可选) — 事件id
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
  - `id` (string, 可选) — 主键id
  - `appIds` (string [], 可选) — 应用ID
  - `title` (string, 可选) — 任务标题
  - `taskTypeIds` (integer [], 可选) — 任务类型
  - `groupId` (string, 可选) — 分组id
  - `accGroupId` (string, 可选) — 账号分组ID
  - `deviceIp` (string, 可选) — 设备ip
  - `taskStatus` (string, 可选) — 任务状态
  - `startTime` (string, 可选) — 开始时间
  - `endTime` (string, 可选) — 结束时间
  - `executionTimeRange` (string [], 可选) — 时间范围
  - `programId` (string, 可选) — 应用功能id
  - `accName` (string, 可选) — 账号
  - `userName` (string, 可选) — 用户名
  - `projectAffiliation` (integer, 可选) — 所属项目（用于筛选任务归属）： {@code null} —— 忽略该条件 {@code 0} —— 日常任务（{@code social_system_task.project_id} 为空） 非零 —— 调度中心项目 id（按{@code project_id = ?} 精确匹配）
  - `deviceIds` (string [], 可选) — 设备id
  - `taskIds` (string [], 可选) — 任务 id 多选。走{@code id IN (...)} 过滤;与其它筛选项{@code AND} 组合。三种语义: {@code null} / 空集合 —— 忽略该条件; 含至少 1 个非空字符串 —— IN 过滤,空串/纯空白串静默丢弃; 原始输入非空但全部是空串/纯空白 —— 视为"用户明确指定过滤但无匹配",返空分页 (与矩阵总览{@code chipNodeIds} 修复对称,避免"条件不成立却返回全量")。
- 响应字段：`code`, `msg`, `data`, `records`, `total`, `size`, `current`, `orders`, `column`, `asc`, `optimizeCountSql`, `searchCount` …
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### dispatch_post_social_task_perform
- 摘要：执行任务
- `POST /social/task/perform` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `id` (string, 可选) — 任务id
  - `deviceIds` (string [], 可选) — 设备id集合
  - `child` (object, 可选)
  - `deviceIp` (string, 可选)
  - `deviceNum` (string, 可选)
  - `endTime` (string, 可选)
  - `id` (string, 可选)
  - `startTime` (string, 可选)
  - `taskStatus` (string, 可选)
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_post_social_task_plan_page
- 摘要：计划任务查询应用和表单配置
- `POST /social/task/plan/page` · 风险：read · 鉴权：required
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
  - `id` (string, 可选) — 主键id
  - `taskTag` (string, 可选) — 任务标签
  - `appName` (string, 可选) — 应用名称
  - `title` (string, 可选) — 任务标题
  - `taskData` (object, 可选) — 任务数据
  - `key` (object, 可选)
  - `appId` (string, 可选) — 应用id
  - `rpaJobId` (string, 可选) — 计划id
  - `taskStatus` (string, 可选) — 任务状态
  - `deviceNum` (string, 可选) — 设备编号
  - `executionTimeRange` (string, 可选) — 执行时间范围
  - `groupId` (string, 可选) — 分组id
  - `deviceId` (string, 可选) — 设备id
  - `deviceIp` (string, 可选) — 设备ip
  - `fileUrl` (string, 可选) — 文件地址
  - `cellGroup` (string, 可选) — 设备分组
  - `postingId` (string, 可选) — 上传话术id
  - `taskType` (string, 可选) — 任务类型
  - `taskTypeId` (integer, 可选) — 任务类型ID（对应 social_app_form.id）
  - `programCategory` (string, 可选) — 功能类别
  - `programId` (string, 可选) — 应用功能id
  - `raisingTime` (integer, 可选) — 养号时间长
  - `scheduleId` (integer, 可选) — 日程主键
  - `planId` (integer, 可选) — 计划编号
  - `projectId` (integer, 可选) — 项目编号
  - `projectName` (string, 可选) — 项目名称（调度中心发起的任务统一标记为"调度中心"，便于在任务管理页筛选）
  - `eventId` (integer, 可选) — 事件id
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
  - `title` (string, 可选) — 任务名称
- 响应字段：`code`, `msg`, `data`, `records`, `total`, `size`, `current`, `orders`, `column`, `asc`, `optimizeCountSql`, `searchCount` …
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### dispatch_post_social_template_executionrecord_page
- 摘要：模板执行记录分页查询
- `POST /social/template/executionRecord/page` · 风险：read · 鉴权：required
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
  - `templateLibraryId` (string, 可选) — 模板id
  - `startTime` (string, 可选) — 开始时间
  - `endTime` (string, 可选) — 结束时间
  - `executionStatus` (string, 可选) — 执行状态
  - `failureReason` (string, 可选) — 失败原因
  - `execSource` (string, 可选) — 触发来源
  - `execId` (string, 可选) — 触发编号（主键）
  - `engineType` (string, 可选) — 引擎类型
  - `workflowId` (string, 可选) — Workflow_ID
  - `workflowRequest` (object [], 可选) — 工作流入参
  - `key` (object, 可选)
  - `workflowParam` (object [], 可选) — 请求入参
  - `key` (object, 可选)
  - `actualTime` (string, 可选) — 实际执行时间
  - `execDetail` (object [], 可选) — 执行结果
  - `bp` (string, 可选) — 批次号
  - `assembles` (object [], 可选) — 组件链接
  - `key` (object, 可选)
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
  - `templateLibraryId` (string, 必填) — 模板库id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### dispatch_put_social_dispatch_edit
- 摘要：编辑项目
- `PUT /social/dispatch/edit` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `projectId` (string, 可选) — 项目ID
  - `projectName` (string, 可选) — 项目名称
  - `business` (string, 可选) — 业务场景 直播间运维/社媒内容分发/聊天群聊维护
  - `appId` (string, 可选) — 应用ID
  - `appName` (string, 可选) — 平台名称
  - `targetUrl` (string, 可选) — 目标URL
  - `startTime` (string, 可选) — 开始时间
  - `endTime` (string, 可选) — 结束时间
  - `priority` (string, 可选) — 优先级 高/中/低
  - `projectStatus` (string, 可选) — 项目状态 配置中/执行中/已结束
  - `deviceScope` (integer, 可选) — 设备范围(设备数量)
  - `minStartBase` (integer, 可选) — 最小启动基数
  - `maxConcurrent` (integer, 可选) — 最大并发上线
  - `deviceIds` (string [], 可选) — 设备ID集合（新增设备）
  - `removeDeviceIds` (string [], 可选) — 待移除的设备ID集合
  - `anchorId` (string, 可选) — 主播号
  - `anchorName` (string, 可选) — 主播名称（传给 RPA 脚本作为变量）
  - `audienceListCapture` (boolean, 可选) — 直播间观众清单抓取开关：开启=true / 关闭=false。入参{@code null} 时沿用库中现值（与{@code ProjectEditDTO} 其它字段一致，由{@code BeanUtil.toBean} 跳过{@code null} 字段，仅在显式传 true/false 时覆盖）。
  - `commentUserCapture` (boolean, 可选) — 直播间评论用户抓取开关：开启=true / 关闭=false。
  - `liveRoomOverCountdownMinutes` (integer, 可选) — 直播间结束倒计时分钟数，默认 15。可空 —— null 时不更新（沿用库中现值）。
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### dispatch_put_social_task_update
- 摘要：更新任务
- `PUT /social/task/update` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `key` (object, 可选)
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

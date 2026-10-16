# 社媒矩阵运营平台 —— 社媒域（/social）

共 369 个接口。由 `scripts/gen-references.mjs` 从 `docs/api.json` 生成，请勿手改。

鉴权方式：使用 POST /auth/app/login，请求头 App-Key 与 App-Secret，请求体 username 与 password，响应顶层 token 字段，无验证码。业务接口的鉴权头默认为 Authorization: Bearer，尚未经真实调用验证，第一次联调时需确认。POST /auth/login 需要 code 与 uuid 验证码，不可用于自动化，仅作人工兜底。

返回总索引：[index.md](./index.md)

## 云手机相关 前端控制器

### GET /social/device/appList/{deviceName}

**标题**：获取应用列表

**所属分类**：云手机相关 前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceName` | string | 是 | 设备地址(格式 ip:port，如 172.25.14.2:5555) |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/device/clearSpeed

**标题**：清理加速

**所属分类**：云手机相关 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，清理加速请求参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceNames` | array<string> | 是 | - |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/device/detail/{deviceId}

**标题**：获取设备详情

**所属分类**：云手机相关 前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceId` | string | 是 | 设备ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/device/goBack

**标题**：返回上一步

**所属分类**：云手机相关 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，返回上一步请求参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceNames` | array<string> | 是 | - |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/device/goHome

**标题**：回到主页面

**所属分类**：云手机相关 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，回到主页面请求参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceNames` | array<string> | 是 | - |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /social/device/modify

**标题**：更新设备信息

**所属分类**：云手机相关 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，设备信息修改请求参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceId` | string | 是 | 设备编号 |
| `deviceAliases` | string | 否 | 设备别名 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/device/multitask

**标题**：打开多任务窗口

**所属分类**：云手机相关 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，打开多任务窗口请求参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceNames` | array<string> | 是 | - |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/device/open/{deviceId}

**标题**：查看单个设备下是否在执行任务

**所属分类**：云手机相关 前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceId` | string | 是 | 设备ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/device/openApp

**标题**：打开应用

**所属分类**：云手机相关 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，打开应用请求参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceNames` | array<string> | 是 | - |
| `packageName` | string | 否 | 包名 |
| `activityName` | string | 否 | 启动类名 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/device/page

**标题**：社交媒体设备分页信息查询

**所属分类**：云手机相关 前端控制器

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records[0].creatorId` | string | 否 | 创建者 |
| `records[0].createTime` | string | 否 | 创建时间 |
| `records[0].updatorId` | string | 否 | 更新者 |
| `records[0].updateTime` | string | 否 | 更新时间 |
| `records[0].deleted` | string | 否 | 删除标识，0未删 1已删 |
| `records[0].version` | string | 否 | 版本 |
| `records[0].deptId` | string | 否 | - |
| `records[0].params.key` | string | 否 | - |
| `records[0].id` | string | 否 | 主键 |
| `records[0].deviceCode` | string | 否 | 设备编号 |
| `records[0].deviceMode` | string | 否 | 设备型号 |
| `records[0].deviceName` | string | 否 | 设备名称 |
| `records[0].deviceCategory` | string | 否 | 设备类别 |
| `records[0].manufacturer` | string | 否 | 厂商 |
| `records[0].deviceStatus` | string | 否 | 设备状态 |
| `records[0].resolutionRatio` | string | 否 | 分辨率 |
| `records[0].armId` | string | 否 | 所属服务器ID |
| `records[0].nodeId` | string | 否 | 节点编号 |
| `records[0].nodeIp` | string | 否 | 节点IP |
| `records[0].deviceIp` | string | 否 | 设备宿主机Ip地址 |
| `records[0].battery` | string | 否 | 电量 |
| `records[0].netOperator` | string | 否 | 运营商 |
| `records[0].connIp` | string | 否 | 链接Ip地址 |
| `records[0].proxyIp` | string | 否 | 代理ADB链接IP |
| `records[0].proxyPort` | string | 否 | 代理ADB链接端口 |
| `records[0].deviceMac` | string | 否 | 设备MAC地址 |
| `records[0].devicePort` | string | 否 | 端口号 |
| `records[0].connPort` | string | 否 | 链接端口号 |
| `records[0].systemVersion` | string | 否 | 系统版本 |
| `records[0].deployed` | string | 否 | true：已部署 false：未部署 |
| `records[0].conIdx` | string | 否 | 镜像序列码 |
| `records[0].deviceIdx` | string | 否 | 设备序号-组合 |
| `records[0].deviceAliases` | string | 否 | 设备别名 |
| `records[0].deviceNo` | string | 否 | 设备序号 |
| `records[0].imei` | string | 否 | imei |
| `records[0].imsi` | string | 否 | imsi |
| `records[0].baseBand` | string | 否 | 基带 |
| `records[0].brand` | string | 否 | 品牌 |
| `records[0].deviceHost` | string | 否 | 品牌主机 |
| `records[0].model` | string | 否 | 型号 |
| `records[0].iccid` | string | 否 | 集成电路卡识别码 |
| `records[0].sn` | string | 否 | 序号 |
| `records[0].serialNumber` | string | 否 | 序列号 |
| `records[0].agentVersion` | string | 否 | 代理版本 |
| `records[0].systemImageSrc` | string | 否 | 镜像版本 |
| `records[0].imageId` | string | 否 | 镜像Id主键 |
| `records[0].phoneNumber` | string | 否 | 手机号码 xxx-xxxx-xxxx |
| `records[0].tags` | string | 否 | 标签 |
| `records[0].isRealPhone` | string | 否 | 是否真机 |
| `records[0].wsPort` | string | 否 | aiBox 视频端口 |
| `records[0].remark` | string | 否 | 备注 |
| `records[0].routeIp` | string | 否 | 路由IP

updateStrategy = ALWAYS：允许 null 值更新到 DB，用于取消专线时清除 route_ip |
| `records[0].isLock` | string | 否 | 是否锁定 |
| `records[0].relationStatus` | string | 否 | 关联状态 |
| `records[0].riskStatus` | string | 否 | 风险状态(未使用\无风险\低风险\高风险\已禁用) |
| `records[0].isBindAccount` | string | 否 | 是否绑定账号 |
| `total` | string | 否 | - |
| `size` | string | 否 | - |
| `current` | string | 否 | - |
| `orders[0].column` | string | 否 | - |
| `orders[0].asc` | string | 否 | - |
| `optimizeCountSql` | string | 否 | - |
| `searchCount` | string | 否 | - |
| `optimizeJoinOfCountSql` | string | 否 | - |
| `maxLimit` | string | 否 | - |
| `countId` | string | 否 | - |
| `suiteId` | string | 否 | 所属分组 |
| `suiteIds[0]` | string | 否 | 所属分组编号 |
| `suiteName` | string | 否 | 所属分组 |
| `deviceStatuses[0]` | string | 否 | 设备状态 |
| `deviceIdx` | string | 否 | 序号 |
| `deviceIp` | string | 否 | 设备IP |
| `deviceCategories` | string | 否 | 品牌 |
| `deviceAliases` | string | 否 | 设备别名 |
| `phoneUser` | string | 否 | 设备使用者 |
| `screening` | string | 否 | 设备筛选 |
| `search` | string | 否 | 设备搜索 |
| `relationStatus` | string | 否 | 设备关联状态 |
| `sortType` | string | 否 | 排序字段 |
| `server[0]` | string | 否 | 所属服务器 |
| `startTime` | string | 否 | 开始 时间 |
| `endTime` | string | 否 | 结束 时间 |
| `chip` | string | 否 | 所属芯片 |
| `systemVersion` | string | 否 | rom版 |
| `brand` | string | 否 | 手机品牌 |
| `deviceMode` | string | 否 | 手机型号 |
| `netOperator` | string | 否 | 运营商 |
| `phoneNumber` | string | 否 | 手机号码 |
| `deviceArea` | string | 否 | 设备版本 |
| `remark` | string | 否 | 备注 |
| `appAccount` | string | 否 | 关联账号 |
| `networkIp` | string | 否 | 关联代理 |
| `mobileDeviceIp` | string | 否 | 手机设备ip |
| `condition` | string | 否 | 条件 |
| `lockIds[0]` | string | 否 | 设备锁id集合 |
| `deviceIds[0]` | string | 否 | 设备id集合 |
| `armId` | string | 否 | arm编号 |
| `projectId` | string | 否 | 调度项目 ID（可选）。

非空时：返回「全局禁用 \|\| 该项目禁用」的合并标识（DeviceSuiteVo.manuallyDisabled）；
为空时：仅返回「全局禁用」标识（全局禁用跨项目，设备列表页也应展示）。 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /social/device/refresh

**标题**：刷新设备投屏

**所属分类**：云手机相关 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，刷新服务入参）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceIds` | array<string> | 是 | 需检查投屏服务的设备ID集合 |
| `isRestart` | boolean | 否 | 是否强制刷新投屏服务，true强制停止后重启 false 则检查服务是否启动，若服务未启动则执行 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/device/risk/count

**标题**：查询风控设备数量

**所属分类**：云手机相关 前端控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | string | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/device/screenCap

**标题**：截图到电脑（SCREENSHOT_TO_COMPUTER 操作）

**所属分类**：云手机相关 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，仅支持 SCREENSHOT_TO_COMPUTER（截图到电脑））

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceIds` | array<string> | 否 | 设备ID集合 |
| `operation` | string | 否 | 操作标识  SHUTDOWN    ("关机"),  POWER_ON    ("开机"),  RESTART     ("重启")  VOLUME_UP   ("音量+")  VOLUME_DOWN ("音量-")  ROTATE     ("旋转")  APK                     ("安装软件"),  SCREENSHOT_TO_COMPUTER  ("截图到电脑"),  SCREENSHOT_TO_ALBUM     ("截图到相册"),  LOCATION                ("位置信息"),  RESOLUTION_RATIO        ("分辨率")  SCREEN_DENSITY          ("画质") |
| `locationReqVo` | object | 否 | 经纬度信息 |
| `ratioValue` | integer | 否 | 分辨率 （ex：1-ex） |
| `filePathId` | integer | 否 | 上传应用位置编号 |


### POST /social/device/task/ai_log/push

**标题**：RPA任务上传AI任务关联图片

**所属分类**：云手机相关 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 multipart/form-data |

**请求体**（form）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `rpaTaskId` | string | 是 | 任务编号 |
| `aiLog` | object | 否 | AI日志信息 |
| `aiPhotos` | array<string> | 否 | AI相关截图 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | string | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/device/task/callback

**标题**：RPA 任务状态/结果回调（RPA 平台无 token，匿名访问，SecurityConfig + JwtFilter 双放行）。

**所属分类**：云手机相关 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，回调请求（rpaJobId 必填，state 可选；不传 state 时由监听链路轮询 RPA 确认））

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `rpaJobId` | string | 否 | RPA 作业ID（必填，用于关联社媒侧任务） |
| `state` | string | 否 | RPA 主任务状态（可选，SUCCESSFUL/FAILED/CANCELED/TIMEOUT）。 不传时由社媒侧轮询 RPA 确认终态。 |
| `endTime` | integer | 否 | 任务结束时间戳（可选，秒级或毫秒级均可，内部自动归一化为秒）。 传入时优先作为任务结束时间落库，不传则由监听链路轮询 RPA 的 finishTime 获取。 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |

**说明**

RPA 任务执行完成后回调本接口，社媒侧按 rpaJobId 查出仍处于中间态的任务日志，
发布[LoopTaskStatusEvent] 复用 SyncTaskStatusListen 完整终态链路
（轮询确认终态 → SystemTaskLog/SystemTask/DispatchJobTask 三表状态联动 →
设备池释放/风控熔断/事件收敛等副作用）。

幂等：已处于终态（SUCCESS/FAIL/CANCEL/TIMEOUT）的任务日志直接跳过，
避免与正在轮询的监听线程重复处理（重复回调/回调与轮询并发均安全）。


### POST /social/device/task/doc/upload/{rpaTaskId}

**标题**：RPA任务上传任务关联文档

**所属分类**：云手机相关 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 multipart/form-data |

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `rpaTaskId` | string | 是 | RPA任务ID |

**请求体**（form）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `documents` | file | 是 | 任务文档列表 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | string | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/device/task/upload/{rpaTaskId}

**标题**：RPA任务上传任务关联图片

**所属分类**：云手机相关 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `rpaTaskId` | string | 是 | RPA任务ID |

**请求体**（json，任务截图上传请求参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `files` | array<object> | 否 | 文件信息 |
| `rpaJobId` | string | 否 | rpa任务编号 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | string | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/device/unused/get

**标题**：获取绑定设备

**所属分类**：云手机相关 前端控制器

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `pageNum` | string | 否 | 当前记录起始索引 |
| `pageSize` | string | 否 | 每页显示记录数 |
| `orderByColumn` | string | 否 | 排序列 |
| `isAsc` | string | 否 | 排序的方向desc或者asc |
| `reasonable` | string | 否 | 分页参数合理化 |
| `chipType` | string | 否 | 芯片类型 |
| `deviceIp` | string | 否 | 设备地址 |
| `nodeCode` | string | 否 | 节点序号 |
| `nodeIp` | string | 否 | 节点地址 |
| `deviceIdx` | string | 否 | 设备序号 |
| `appId` | string | 是 | 应用类型 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PATCH /social/device/update

**标题**：社交媒体操作设备执行手机更多功能及开关机

**所属分类**：云手机相关 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，设备更新请求参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceIds` | array<string> | 否 | 设备ID集合 |
| `operation` | string | 否 | 操作标识  SHUTDOWN    ("关机"),  POWER_ON    ("开机"),  RESTART     ("重启")  VOLUME_UP   ("音量+")  VOLUME_DOWN ("音量-")  ROTATE     ("旋转")  APK                     ("安装软件"),  SCREENSHOT_TO_COMPUTER  ("截图到电脑"),  SCREENSHOT_TO_ALBUM     ("截图到相册"),  LOCATION                ("位置信息"),  RESOLUTION_RATIO        ("分辨率")  SCREEN_DENSITY          ("画质") |
| `locationReqVo` | object | 否 | 经纬度信息 |
| `ratioValue` | integer | 否 | 分辨率 （ex：1-ex） |
| `filePathId` | integer | 否 | 上传应用位置编号 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/device/upload

**标题**：社交媒体安装包上传

**所属分类**：云手机相关 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 multipart/form-data |

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params.key.key` | string | 否 | - |
| `appIcon` | string | 否 | logo |
| `appName` | string | 否 | 应用名称 |
| `appVersion` | string | 否 | 安装包版本 |
| `packageName` | string | 否 | 安装包名称 |
| `size` | string | 否 | 安装包大小 |

**请求体**（form）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `file` | file | 是 | 上传的安装包文件（apk/xapk） |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 动态表单前端控制器

### PUT /social/dynamic/form

**标题**：新增动态表单

**所属分类**：动态表单前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，保存条件）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 否 | 主键id |
| `programCategory` | enum(YH/FT/PL/LIKE/FOLLOW/COLLECT/LC/SW/RC/CLUE) | 否 | 任务类型 |
| `schedulingEngine` | enum(RPA/BARRIER_FREE) | 是 | 调度引擎 |
| `programName` | string | 否 | 功能名称 |
| `logoPath` | string | 否 | 图片路径 |
| `appId` | string | 否 | 应用id |
| `form` | array<object> | 否 | 表单 |
| `scriptId` | string | 否 | 脚本id |
| `extendedColumn` | array<object> | 否 | 扩展列 |
| `formTemplate` | array<object> | 否 | 数据模板 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/dynamic/form/{id}

**标题**：根据id查询动态表单

**所属分类**：动态表单前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 是 | id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/dynamic/form/column

**标题**：查询动态表单列

**所属分类**：动态表单前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，查询条件）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records` | array<object> | 否 | - |
| `total` | integer | 否 | - |
| `size` | integer | 否 | - |
| `current` | integer | 否 | - |
| `orders` | array<object> | 否 | - |
| `optimizeCountSql` | boolean | 否 | - |
| `searchCount` | boolean | 否 | - |
| `optimizeJoinOfCountSql` | boolean | 否 | - |
| `maxLimit` | integer | 否 | - |
| `countId` | string | 否 | - |
| `appId` | string | 否 | 应用id |
| `taskType` | string | 否 | 任务类型 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/dynamic/form/column/table

**标题**：查询动态表单动态列表

**所属分类**：动态表单前端控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/dynamic/form/page

**标题**：分页查询动态表单

**所属分类**：动态表单前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，查询条件）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records` | array<object> | 否 | - |
| `total` | integer | 否 | - |
| `size` | integer | 否 | - |
| `current` | integer | 否 | - |
| `orders` | array<object> | 否 | - |
| `optimizeCountSql` | boolean | 否 | - |
| `searchCount` | boolean | 否 | - |
| `optimizeJoinOfCountSql` | boolean | 否 | - |
| `maxLimit` | integer | 否 | - |
| `countId` | string | 否 | - |
| `appId` | string | 否 | 应用id |
| `taskType` | string | 否 | 任务类型 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 应用管理前端控制器

### PUT /social/application/management

**标题**：保存应用管理

**所属分类**：应用管理前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，保存条件）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 否 | 应用id |
| `applicationName` | string | 否 | 应用名称 |
| `applicationStatus` | integer | 否 | 状态 0启用，1禁用 |
| `logoPath` | string | 否 | logo路径 |
| `programName` | string | 否 | 应用功能 |
| `scriptId` | string | 否 | 脚本id |
| `programIds` | array<string> | 否 | 应用功能id集合 |
| `programType` | array<object> | 否 | - |
| `packageName` | string | 否 | 应用包名 |
| `activityName` | string | 否 | 应用类名 |
| `orderNum` | integer | 否 | 排序 |
| `appArea` | string | 否 | 应用地区 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /social/application/management

**标题**：删除应用管理

**所属分类**：应用管理前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，删除条件）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `checkIds` | array<integer> | 否 | 勾选的id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/application/management

**标题**：更新应用管理

**所属分类**：应用管理前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，更新条件）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 否 | 应用id |
| `applicationName` | string | 否 | 应用名称 |
| `applicationStatus` | integer | 否 | 状态 0启用，1禁用 |
| `logoPath` | string | 否 | logo路径 |
| `programName` | string | 否 | 应用功能 |
| `scriptId` | string | 否 | 脚本id |
| `programIds` | array<string> | 否 | 应用功能id集合 |
| `programType` | array<object> | 否 | - |
| `packageName` | string | 否 | 应用包名 |
| `activityName` | string | 否 | 应用类名 |
| `orderNum` | integer | 否 | 排序 |
| `appArea` | string | 否 | 应用地区 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/application/management/{id}

**标题**：根据id查询应用管理

**所属分类**：应用管理前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 是 | 应用id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/application/management/{id}/{status}

**标题**：更新应用管理状态

**所属分类**：应用管理前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 是 | 根据id更新 |
| `status` | string | 是 | - |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/application/management/duplicate

**标题**：获取应用类型去重（按应用管理id分组返回）

**所属分类**：应用管理前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，查询条件（ids 传多个应用管理id；不传则回退到单 id 字段））

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | integer | 否 | 应用管理id |
| `ids` | array<integer> | 否 | 应用管理id集合（用于按多个应用管理id查询并分组返回的场景） |
| `applicationStatus` | integer | 否 | 应用状态 |
| `systemConfig` | integer | 否 | 是否展示任务 |
| `programCategory` | enum(YH/FT/PL/LIKE/FOLLOW/COLLECT/LC/SW/RC/CLUE) | 否 | 任务类型 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/application/management/page

**标题**：查询应用管理分页

**所属分类**：应用管理前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，查询条件）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records` | array<object> | 否 | - |
| `total` | integer | 否 | - |
| `size` | integer | 否 | - |
| `current` | integer | 否 | - |
| `orders` | array<object> | 否 | - |
| `optimizeCountSql` | boolean | 否 | - |
| `searchCount` | boolean | 否 | - |
| `optimizeJoinOfCountSql` | boolean | 否 | - |
| `maxLimit` | integer | 否 | - |
| `countId` | string | 否 | - |
| `applicationName` | string | 否 | 应用名称 |
| `applicationStatus` | integer | 否 | 应用状态 0：启用 1：禁用 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/application/management/script

**标题**：获取脚本列表

**所属分类**：应用管理前端控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/application/management/type

**标题**：获取应用类型

**所属分类**：应用管理前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，查询条件）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | integer | 否 | 应用管理id |
| `ids` | array<integer> | 否 | 应用管理id集合（用于按多个应用管理id查询并分组返回的场景） |
| `applicationStatus` | integer | 否 | 应用状态 |
| `systemConfig` | integer | 否 | 是否展示任务 |
| `programCategory` | enum(YH/FT/PL/LIKE/FOLLOW/COLLECT/LC/SW/RC/CLUE) | 否 | 任务类型 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/application/management/user/menu

**标题**：查询用户分配菜单的应用（分页）

**所属分类**：应用管理前端控制器

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `current` | string | 是 | 当前页 |
| `size` | string | 是 | 每页大小 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 人设管理

### GET /social/interested/page

**标题**：获取人设列表分页

**所属分类**：人设管理

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records[0].creatorId` | string | 否 | 创建者 |
| `records[0].createTime` | string | 否 | 创建时间 |
| `records[0].updatorId` | string | 否 | 更新者 |
| `records[0].updateTime` | string | 否 | 更新时间 |
| `records[0].deleted` | string | 否 | 删除标识，0未删 1已删 |
| `records[0].version` | string | 否 | 版本 |
| `records[0].deptId` | string | 否 | - |
| `records[0].params.key` | string | 否 | - |
| `records[0].id` | string | 否 | 主键 |
| `records[0].interestedName` | string | 否 | 兴趣名称 |
| `total` | string | 否 | - |
| `size` | string | 否 | - |
| `current` | string | 否 | - |
| `orders[0].column` | string | 否 | - |
| `orders[0].asc` | string | 否 | - |
| `optimizeCountSql` | string | 否 | - |
| `searchCount` | string | 否 | - |
| `optimizeJoinOfCountSql` | string | 否 | - |
| `maxLimit` | string | 否 | - |
| `countId` | string | 否 | - |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /social/interested/set

**标题**：为账号设置人设

**所属分类**：人设管理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，人设分配参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `interestedId` | integer | 否 | 兴趣主键 |
| `accountId` | string | 否 | 账号主键 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 数据中心控制器

### POST /social/datacenter/account-export

**标题**：导出账号数据

**所属分类**：数据中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，查询条件）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `appId` | string | 否 | 应用id |
| `accountIds` | array<string> | 否 | 账号id集合 |


### POST /social/datacenter/account-page

**标题**：查询账号数据分页

**所属分类**：数据中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，查询条件）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records` | array<object> | 否 | - |
| `total` | integer | 否 | - |
| `size` | integer | 否 | - |
| `current` | integer | 否 | - |
| `orders` | array<object> | 否 | - |
| `optimizeCountSql` | boolean | 否 | - |
| `searchCount` | boolean | 否 | - |
| `optimizeJoinOfCountSql` | boolean | 否 | - |
| `maxLimit` | integer | 否 | - |
| `countId` | string | 否 | - |
| `appId` | string | 否 | 应用id |
| `suiteName` | string | 否 | 所属分组 |
| `accountId` | string | 否 | 账号 |
| `deviceNum` | string | 否 | 设备号 |
| `startTime` | string | 否 | 开始时间 |
| `endTime` | string | 否 | 结束时间 |
| `sortFields` | object | 否 | 排序字段 |
| `deleteIds` | array<string> | 否 | 删除的id集合 |
| `deviceIds` | array<string> | 否 | 设备id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/datacenter/account-total

**标题**：账号数据总计

**所属分类**：数据中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，账号数据总计查询条件）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `appId` | string | 否 | 应用id |
| `accountIds` | array<string> | 否 | 账号id集合 |
| `custom` | enum(ACCOUNT/HOTPOST/OTHER/HOTLIST/ANALYSIS) | 否 | 数据自定义枚举(ACCOUNT/HOTPOST/OTHER) |
| `startTime` | string | 否 | 开始时间 |
| `endTime` | string | 否 | 结束时间 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/datacenter/add-app

**标题**：新增上次选择的 app

**所属分类**：数据中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，app 信息）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `appId` | string | 否 | 应用id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/datacenter/add-remark

**标题**：添加备注

**所属分类**：数据中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，添加备注参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `accountId` | string | 否 | 账号id |
| `remark` | string | 否 | 备注 |
| `custom` | enum(ACCOUNT/HOTPOST/OTHER/HOTLIST/ANALYSIS) | 否 | 数据自定义枚举(ACCOUNT/HOTPOST/OTHER) |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/datacenter/analysis

**标题**：触发社群信息分析

**所属分类**：数据中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，分析参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `analysisIds` | array<string> | 是 | 社群数据id |
| `appId` | string | 否 | 应用ID |
| `agentId` | string | 否 | 合并分析下的agentId |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/datacenter/analysis-download/{processId}/{report}

**标题**：社群分析报告导出

**所属分类**：数据中心控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `processId` | string | 是 | 过程 ID |
| `report` | string | 是 | 0 过程 / 1 结果 |


### POST /social/datacenter/analysis-export

**标题**：下载社群信息

**所属分类**：数据中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，查询参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `appId` | string | 否 | 应用id |
| `analysisIds` | array<string> | 否 | 社区信息id集合 |


### POST /social/datacenter/analysis-list

**标题**：社群分析过程查询

**所属分类**：数据中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，查询参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records` | array<object> | 否 | - |
| `total` | integer | 否 | - |
| `size` | integer | 否 | - |
| `current` | integer | 否 | - |
| `orders` | array<object> | 否 | - |
| `optimizeCountSql` | boolean | 否 | - |
| `searchCount` | boolean | 否 | - |
| `optimizeJoinOfCountSql` | boolean | 否 | - |
| `maxLimit` | integer | 否 | - |
| `countId` | string | 否 | - |
| `appId` | string | 否 | 应用ID |
| `analysisId` | string | 否 | 社群数据ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/datacenter/analysis-msg/{analysisId}

**标题**：获取原始分析消息

**所属分类**：数据中心控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `analysisId` | string | 是 | 分析 ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | string | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/datacenter/analysis-page

**标题**：社群信息分页查询

**所属分类**：数据中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，查询参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records` | array<object> | 否 | - |
| `total` | integer | 否 | - |
| `size` | integer | 否 | - |
| `current` | integer | 否 | - |
| `orders` | array<object> | 否 | - |
| `optimizeCountSql` | boolean | 否 | - |
| `searchCount` | boolean | 否 | - |
| `optimizeJoinOfCountSql` | boolean | 否 | - |
| `maxLimit` | integer | 否 | - |
| `countId` | string | 否 | - |
| `appId` | string | 否 | 应用id |
| `suiteIds` | array<string> | 否 | 分组id集合 |
| `groupName` | string | 否 | 社群名 |
| `tag` | string | 否 | 标签名 |
| `accountName` | string | 否 | 账号信息或昵称 |
| `deviceInfo` | string | 否 | 设备IP或别名 |
| `startTime` | string | 否 | 开始时间 |
| `endTime` | string | 否 | 结束时间 |
| `deleteIds` | array<string> | 否 | 不展示的数据信息 |
| `sortFields` | object | 否 | 排序字段 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/datacenter/analysis-process/{processId}/{report}

**标题**：获取分析过程或报告消息

**所属分类**：数据中心控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `processId` | string | 是 | 过程 ID |
| `report` | string | 是 | false 过程 / true 结果 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | string | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/datacenter/cool-export

**标题**：酷安数据导出

**所属分类**：数据中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，查询参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `appId` | string | 否 | 应用id |
| `ids` | array<string> | 否 | id集合 |


### POST /social/datacenter/cool-page

**标题**：酷安数据分页

**所属分类**：数据中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，查询参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records` | array<object> | 否 | - |
| `total` | integer | 否 | - |
| `size` | integer | 否 | - |
| `current` | integer | 否 | - |
| `orders` | array<object> | 否 | - |
| `optimizeCountSql` | boolean | 否 | - |
| `searchCount` | boolean | 否 | - |
| `optimizeJoinOfCountSql` | boolean | 否 | - |
| `maxLimit` | integer | 否 | - |
| `countId` | string | 否 | - |
| `collectionTime` | string | 否 | 更新时间 |
| `hotRank` | integer | 否 | 热点排名 |
| `author` | string | 否 | 作者昵称 |
| `content` | string | 否 | 内容 |
| `deleteIds` | array<string> | 否 | 删除的id集合 |
| `appId` | string | 否 | 应用id |
| `sortFields` | object | 否 | 排序字段 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/datacenter/custom-points

**标题**：查询用户自定义测点

**所属分类**：数据中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，查询条件）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `appId` | string | 否 | 应用id |
| `custom` | enum(ACCOUNT/HOTPOST/OTHER/HOTLIST/ANALYSIS) | 否 | 数据自定义枚举(ACCOUNT/HOTPOST/OTHER) |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/datacenter/hot-post-export

**标题**：导出账号热帖数据

**所属分类**：数据中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，查询条件）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `appId` | string | 否 | 应用id |
| `ids` | array<string> | 否 | id集合 |


### POST /social/datacenter/hot-post-page

**标题**：查询账号热帖数据分页

**所属分类**：数据中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，查询条件）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records` | array<object> | 否 | - |
| `total` | integer | 否 | - |
| `size` | integer | 否 | - |
| `current` | integer | 否 | - |
| `orders` | array<object> | 否 | - |
| `optimizeCountSql` | boolean | 否 | - |
| `searchCount` | boolean | 否 | - |
| `optimizeJoinOfCountSql` | boolean | 否 | - |
| `maxLimit` | integer | 否 | - |
| `countId` | string | 否 | - |
| `appId` | string | 否 | 应用id |
| `suiteName` | string | 否 | 所属分组 |
| `accountId` | string | 否 | 账号 |
| `deviceNum` | string | 否 | 设备号 |
| `startTime` | string | 否 | 开始时间 |
| `endTime` | string | 否 | 结束时间 |
| `sortFields` | object | 否 | 排序字段 |
| `deleteIds` | array<string> | 否 | 删除的id集合 |
| `deviceIds` | array<string> | 否 | 设备id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/datacenter/last-app

**标题**：查询上次选择的app

**所属分类**：数据中心控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/datacenter/lock

**标题**：锁定数据

**所属分类**：数据中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，锁定数据参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `ids` | array<string> | 否 | id集合 |
| `custom` | enum(ACCOUNT/HOTPOST/OTHER/HOTLIST/ANALYSIS) | 否 | 数据自定义枚举(ACCOUNT/HOTPOST/OTHER) |
| `accountId` | string | 否 | 账号id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/datacenter/other-export

**标题**：导出其他数据

**所属分类**：数据中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，查询条件）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `appId` | string | 否 | 应用id |
| `ids` | array<string> | 否 | id集合 |


### POST /social/datacenter/other-page

**标题**：查询账号其他数据分页

**所属分类**：数据中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，查询条件）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records` | array<object> | 否 | - |
| `total` | integer | 否 | - |
| `size` | integer | 否 | - |
| `current` | integer | 否 | - |
| `orders` | array<object> | 否 | - |
| `optimizeCountSql` | boolean | 否 | - |
| `searchCount` | boolean | 否 | - |
| `optimizeJoinOfCountSql` | boolean | 否 | - |
| `maxLimit` | integer | 否 | - |
| `countId` | string | 否 | - |
| `appId` | string | 否 | 应用id |
| `accountId` | string | 否 | 账号id |
| `startTime` | string | 否 | 开始时间 |
| `endTime` | string | 否 | 结束时间 |
| `sortFields` | object | 否 | 排序字段 |
| `deleteIds` | array<string> | 否 | 删除的id集合 |
| `deviceIds` | array<string> | 否 | 设备id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/datacenter/points

**标题**：查询测点数据

**所属分类**：数据中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，查询条件）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `appId` | string | 否 | 应用id |
| `custom` | enum(ACCOUNT/HOTPOST/OTHER/HOTLIST/ANALYSIS) | 否 | 数据自定义枚举(ACCOUNT/HOTPOST/OTHER) |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/datacenter/save-points

**标题**：保存所勾选的测点

**所属分类**：数据中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，保存测点数据）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `appId` | string | 否 | 应用id |
| `pointIds` | array<string> | 否 | 测点id |
| `custom` | enum(ACCOUNT/HOTPOST/OTHER/HOTLIST/ANALYSIS) | 否 | 数据自定义枚举(ACCOUNT/HOTPOST/OTHER) |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/datacenter/unlock

**标题**：解锁数据

**所属分类**：数据中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，解锁数据参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `ids` | array<string> | 否 | id集合 |
| `custom` | enum(ACCOUNT/HOTPOST/OTHER/HOTLIST/ANALYSIS) | 否 | 数据自定义枚举(ACCOUNT/HOTPOST/OTHER) |
| `accountId` | string | 否 | 账号id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 用户分配网络前端控制器

### POST /social/allocation/network/allocate

**标题**：分配网络

**所属分类**：用户分配网络前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，网络分配参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `userIds` | array<string> | 否 | 用户id |
| `networkIds` | array<string> | 否 | 网络id集合 |
| `bindDirection` | boolean | 否 | 绑定方向 true是网络分配给用户 false是用户分配网络 |
| `delIds` | array<string> | 否 | 删除的id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/allocation/network/list

**标题**：根据代理id查询用户列表

**所属分类**：用户分配网络前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，网络用户查询参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `networkIds` | array<string> | 否 | 网络id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/allocation/network/page

**标题**：网络分配分页

**所属分类**：用户分配网络前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，网络分配分页查询参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records` | array<object> | 否 | - |
| `total` | integer | 否 | - |
| `size` | integer | 否 | - |
| `current` | integer | 否 | - |
| `orders` | array<object> | 否 | - |
| `optimizeCountSql` | boolean | 否 | - |
| `searchCount` | boolean | 否 | - |
| `optimizeJoinOfCountSql` | boolean | 否 | - |
| `maxLimit` | integer | 否 | - |
| `countId` | string | 否 | - |
| `condition` | string | 否 | 搜索条件 所有者-所属地区-IP-链接-到期时间-代理分组-备注 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/allocation/network/user/list

**标题**：根据用户id查询代理列表

**所属分类**：用户分配网络前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，用户容器查询参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `userIds` | array<string> | 否 | 用户id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 导入数据任务前端控制器

### GET /social/import-task/download/{taskId}

**标题**：下载分析报告

**所属分类**：导入数据任务前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `taskId` | string | 是 | 任务ID |


### POST /social/import-task/page

**标题**：分页查询导入任务

**所属分类**：导入数据任务前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，查询参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records` | array<object> | 否 | - |
| `total` | integer | 否 | - |
| `size` | integer | 否 | - |
| `current` | integer | 否 | - |
| `orders` | array<object> | 否 | - |
| `optimizeCountSql` | boolean | 否 | - |
| `searchCount` | boolean | 否 | - |
| `optimizeJoinOfCountSql` | boolean | 否 | - |
| `maxLimit` | integer | 否 | - |
| `countId` | string | 否 | - |
| `userName` | string | 否 | 操作人 |
| `businessType` | enum(NETWORK_IMPORT/ACCOUNT_IMPORT) | 否 | 业务类型 网络导入/账号导入 |
| `taskId` | string | 否 | 任务ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 系统组件 前端控制器

### DELETE /social/system-component/del

**标题**：删除组件

**所属分类**：系统组件 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，删除参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `componentId` | string | 否 | 组件编号 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/system-component/detail/{componentId}

**标题**：组件详情

**所属分类**：系统组件 前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `componentId` | string | 是 | 组件ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/system-component/list

**标题**：获取系统组件列表

**所属分类**：系统组件 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，查询条件）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `componentName` | string | 否 | 组件名 |
| `componentType` | string | 否 | 组件类型 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/system-component/update

**标题**：新增或编辑组件

**所属分类**：系统组件 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，组件参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `componentId` | string | 否 | 组件编号 |
| `componentName` | string | 是 | 组件名称 |
| `componentType` | string | 是 | 组件类型 |
| `templateType` | enum(TEXT/TEMPLATE) | 否 | 组装类型（text:文本库、template:模板库） |
| `engineType` | enum(COMFYUI/RUNNING_HUB) | 是 | 引擎类型 |
| `componentJson` | object | 否 | comfyuiJson文件信息 |
| `workflowId` | string | 否 | Workflow_ID |
| `componentParam` | object | 否 | 组件参数 |
| `assembles` | array<object> | 否 | 组件链接 |
| `componentColor` | string | 否 | 组件相关颜色 |
| `componentFileName` | string | 否 | 组件英文名 |
| `workflowRequest` | array<object> | 否 | 工作流入参 |
| `workflowResponse` | array<object> | 否 | 工作流响应 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | string | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 模板库前端控制器

### GET /social/template/{id}

**标题**：根据id查询模板库

**所属分类**：模板库前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 是 | id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/template/add

**标题**：新增模板库

**所属分类**：模板库前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `templateName` | string | 否 | 模板名称 限制 30个字符 |
| `triggerTime` | string | 否 | 触发时间 |
| `assembles` | array<object> | 否 | 模板组件集合 |
| `connections` | array<object> | 否 | 模板连接 |
| `templateType` | enum(TEXT/TEMPLATE) | 否 | 模板类型（text:文本库、template:模板库） |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /social/template/cancel/{tempId}

**标题**：取消任务

**所属分类**：模板库前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `tempId` | string | 是 | 模板任务id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /social/template/del

**标题**：批量删除模板库

**所属分类**：模板库前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `templateLibraryIds` | array<string> | 否 | 模板id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/template/disable

**标题**：批量禁用模板库

**所属分类**：模板库前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `templateLibraryIds` | array<string> | 否 | 模板id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/template/enable

**标题**：批量启用模板库 0禁用 1启用

**所属分类**：模板库前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `templateLibraryIds` | array<string> | 否 | 模板id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/template/execute

**标题**：执行模板库

**所属分类**：模板库前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `templateId` | string | 否 | 模板id |
| `execSource` | string | 否 | 触发来源 |
| `execId` | string | 否 | 触发编号（主键） |
| `templateLibrary` | object | 否 | 运行指定模板 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/template/page

**标题**：模板库列表分页

**所属分类**：模板库前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，查询条件）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records` | array<object> | 否 | - |
| `total` | integer | 否 | - |
| `size` | integer | 否 | - |
| `current` | integer | 否 | - |
| `orders` | array<object> | 否 | - |
| `optimizeCountSql` | boolean | 否 | - |
| `searchCount` | boolean | 否 | - |
| `optimizeJoinOfCountSql` | boolean | 否 | - |
| `maxLimit` | integer | 否 | - |
| `countId` | string | 否 | - |
| `templateName` | string | 否 | 模板名称 |
| `templateStatus` | integer | 否 | 模板状态 |
| `lastEndTime` | array<string> | 否 | 上次执行结束时间 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /social/template/update

**标题**：修改模板库

**所属分类**：模板库前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `templateLibraryId` | string | 否 | 模板id |
| `templateName` | string | 否 | 模板名称 |
| `triggerTime` | string | 否 | 触发时间 |
| `assembles` | array<object> | 否 | 模板组件集合 |
| `connections` | array<object> | 否 | 模板连接 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 模板执行记录前端控制器

### DELETE /social/template/executionRecord/del/{recordId}

**标题**：删除执行记录

**所属分类**：模板执行记录前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `recordId` | string | 是 | 执行记录ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/template/executionRecord/detail/{recordId}

**标题**：获取执行记录详情

**所属分类**：模板执行记录前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `recordId` | string | 是 | 执行记录ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/template/executionRecord/now/{tempId}

**标题**：获取当前模板执行情况

**所属分类**：模板执行记录前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `tempId` | string | 是 | 模板ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/template/executionRecord/page

**标题**：模板执行记录分页查询

**所属分类**：模板执行记录前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，分页参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records` | array<object> | 否 | - |
| `total` | integer | 否 | - |
| `size` | integer | 否 | - |
| `current` | integer | 否 | - |
| `orders` | array<object> | 否 | - |
| `optimizeCountSql` | boolean | 否 | - |
| `searchCount` | boolean | 否 | - |
| `optimizeJoinOfCountSql` | boolean | 否 | - |
| `maxLimit` | integer | 否 | - |
| `countId` | string | 否 | - |
| `templateLibraryId` | string | 是 | 模板库id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 系统计划日程 前端控制器

### POST /social/system-schedule/acc/schedule

**标题**：获取账号下日程信息

**所属分类**：系统计划日程 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，账号查询条件）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `accountIds` | array<string> | 是 | 账号信息 |
| `startTime` | string | 否 | 执行开始时间 |
| `endTime` | string | 否 | 执行结束时间 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/system-schedule/batch/operate

**标题**：批量操作日程

**所属分类**：系统计划日程 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，日程信息）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `threshold` | integer | 否 | The next size value at which to resize (capacity * load factor). |
| `loadFactor` | number | 否 | The load factor for the hash table. |
| `id` | string | 否 | 主键id |
| `tagId` | string | 否 | - |
| `programId` | string | 否 | 应用功能id |
| `title` | string | 否 | 任务标题 |
| `groupId` | string | 否 | 分组id |
| `deviceIds` | array<string> | 否 | 设备id集合 |
| `appId` | string | 否 | 应用id |
| `taskId` | string | 否 | 任务id |
| `planId` | integer | 否 | 计划编号 |
| `scheduleId` | string | 否 | 日程编号 |
| `creatorId` | string | 否 | - |
| `scheduleParams` | array<object> | 否 | 多模态参数列表 |
| `accountIds` | array<string> | 否 | 账号ID列表（当scheduleParams为空时使用） |
| `scheduleType` | enum(SINGLE/MINUTE/DAY/WEEK/MONTH) | 否 | 重复类型 |
| `globalExecuteCount` | integer | 否 | 全局执行次数 |
| `windowStartTime` | object | 否 | 窗口开始时间 |
| `windowEndTime` | object | 否 | 窗口结束时间 |
| `startDate` | string | 否 | 开始日期 |
| `timeZone` | string | 否 | 时区 |
| `delayTimeRange` | integer | 否 | 延后执行时间范围（分钟）。     0 = 不延后     >0 = 触发时从 [1, delayTimeRange] 随机出延迟分钟数，         任务入{@code TaskServiceJobDelayQueue}（Redis ZSet）等待触发 默认 0。 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | string | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/system-schedule/batch/update-time

**标题**：批量修改日程执行时间（REQ-2609-113）。

**所属分类**：系统计划日程 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，批量改时间请求）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `scheduleIds` | array<string> | 是 | 日程 ID 列表（必填，上限 200） |
| `mode` | enum(SHIFT/SET) | 是 | 修改模式：SHIFT 平移 / SET 设定（必填） |
| `deltaMinutes` | integer | 否 | SHIFT 模式：偏移分钟数，正=延后，负=提前（SHIFT 模式必填，不能为 0） |
| `targetExecutionTime` | string | 否 | SET 模式：目标执行时间（SET 模式必填，格式 yyyy-MM-dd HH:mm:ss） |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |

**说明**

支持日程视图多选任务块后：

  SHIFT 平移（拖拽）：传 deltaMinutes，保持任务块相对间隔整体移动；

  SET 设定（统一改点）：传 targetExecutionTime。

采用部分成功策略，失败明细逐条返回（不存在/执行中/时间已过/冲突/调度器失败）。


### POST /social/system-schedule/cache-hold-schedule

**标题**：查询暂存区

**所属分类**：系统计划日程 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，查询参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `accountIds` | array<string> | 否 | 账号ID列表 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/system-schedule/cache-schedule

**标题**：日程进入暂存区

**所属分类**：系统计划日程 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，暂存参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `scheduleIds` | array<string> | 否 | 日程id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | string | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/system-schedule/cache/task

**标题**：新增缓存任务

**所属分类**：系统计划日程 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，任务信息）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `_nodeFactory` | object | 否 | - |
| `_children` | object | 否 | - |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | string | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /social/system-schedule/conflict

**标题**：删除账号下冲突日程信息

**所属分类**：系统计划日程 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，删除参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `threshold` | integer | 否 | The next size value at which to resize (capacity * load factor). |
| `loadFactor` | number | 否 | The load factor for the hash table. |
| `id` | string | 否 | 主键id |
| `tagId` | string | 否 | - |
| `programId` | string | 否 | 应用功能id |
| `title` | string | 否 | 任务标题 |
| `groupId` | string | 否 | 分组id |
| `deviceIds` | array<string> | 否 | 设备id集合 |
| `appId` | string | 否 | 应用id |
| `taskId` | string | 否 | 任务id |
| `planId` | integer | 否 | 计划编号 |
| `scheduleId` | string | 否 | 日程编号 |
| `creatorId` | string | 否 | - |
| `scheduleName` | string | 否 | 任务名称 |
| `executionTime` | string | 否 | 执行时间 |
| `scheduleType` | enum(SINGLE/MINUTE/DAY/WEEK/MONTH) | 否 | 日程类型 |
| `endTime` | string | 否 | 截至时间 |
| `taskStatus` | enum(BE_EXECUTED/IN_EXECUTION/SUCCESS/FAIL/CANCEL/IN_QUEUE/TIMEOUT) | 否 | 任务状态 |
| `taskColour` | string | 否 | 卡片颜色 |
| `repeatInterval` | integer | 否 | 间隔时间 |
| `delayTimeRange` | integer | 否 | 延后执行时间范围（分钟），0=不延后 |
| `accountId` | string | 否 | 归属账号编号 |
| `nickName` | string | 否 | 用户昵称 |
| `deviceIp` | string | 否 | 设备IP |
| `appAccount` | string | 否 | 用户账号 |
| `deviceId` | integer | 否 | 设备ID（用于设备重启任务） |
| `taskCategory` | string | 否 | 任务分类（NORMAL-普通任务，DEVICE_RESTART-设备重启任务） |
| `durationTime` | integer | 否 | 持续时间 |
| `taskData` | object | 否 | 任务数据 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/system-schedule/conflict

**标题**：获取账号下冲突日程信息

**所属分类**：系统计划日程 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，账号列表）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `accountIds` | array<string> | 否 | 账号ID列表 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/system-schedule/conflict/{accIds}

**标题**：获取账号下冲突日程信息

**所属分类**：系统计划日程 前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `accIds` | string | 是 | 账号列表 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /social/system-schedule/del

**标题**：删除日程信息

**所属分类**：系统计划日程 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，日程编号信息（支持批量））

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `scheduleIds` | array<string> | 否 | 计划编号集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /social/system-schedule/del-cache-schedule

**标题**：删除暂存区日程

**所属分类**：系统计划日程 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，删除参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `cacheId` | string | 否 | 缓存ID |
| `accountId` | string | 否 | 账号ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/system-schedule/download/temp/csv

**标题**：下载内容模板

**所属分类**：系统计划日程 前端控制器


### POST /social/system-schedule/saveBatch

**标题**：批量保存日程信息

**所属分类**：系统计划日程 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，日程信息）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `threshold` | integer | 否 | The next size value at which to resize (capacity * load factor). |
| `loadFactor` | number | 否 | The load factor for the hash table. |
| `id` | string | 否 | 主键id |
| `tagId` | string | 否 | - |
| `programId` | string | 否 | 应用功能id |
| `title` | string | 否 | 任务标题 |
| `groupId` | string | 否 | 分组id |
| `deviceIds` | array<string> | 否 | 设备id集合 |
| `appId` | string | 否 | 应用id |
| `taskId` | string | 否 | 任务id |
| `planId` | integer | 否 | 计划编号 |
| `scheduleId` | string | 否 | 日程编号 |
| `creatorId` | string | 否 | - |
| `accountId` | string | 否 | 账号id |
| `scheduleType` | enum(SINGLE/MINUTE/DAY/WEEK/MONTH) | 否 | 重复类型 |
| `putCount` | integer | 否 | 放入数量 |
| `postOrderEnum` | enum(RANDOM/NAME_ASC/NAME_DESC) | 否 | 发布方式 |
| `windowStartTime` | object | 否 | 窗口开始时间 |
| `windowEndTime` | object | 否 | 窗口结束时间 |
| `publishCount` | integer | 否 | 发布数量 |
| `intervalTime` | integer | 否 | 间隔时间 |
| `offsetTime` | integer | 否 | 偏移量 |
| `conflict` | boolean | 否 | 是否冲突 true 规避冲突 false 不规避不冲突 |
| `startDate` | string | 否 | 日程开始时间 |
| `timeZone` | string | 否 | 时区 |
| `delayTimeRange` | integer | 否 | 延后执行时间范围（分钟）。     0 = 不延后     >0 = 触发时从 [1, delayTimeRange] 随机出延迟分钟数，         任务入{@code TaskServiceJobDelayQueue}（Redis ZSet）等待触发 默认 0。 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | string | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/system-schedule/update

**标题**：更新日程信息

**所属分类**：系统计划日程 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，更新参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `accountId` | string | 否 | 账号编号 |
| `accIds` | array<string> | 否 | 账号下创建日程绑定 |
| `taskSchedule` | object | 否 | 日程信息 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | string | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 素材库前端控制器

### GET /social/material/{id}

**标题**：根据id查询素材库素材详情信息

**所属分类**：素材库前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 是 | id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /social/material/batch/delete

**标题**：批量删除素材

**所属分类**：素材库前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，素材id列表）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `ids` | array<string> | 是 | 素材id列表 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/material/batch/download

**标题**：批量下载素材

**所属分类**：素材库前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，素材id列表）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `ids` | array<string> | 是 | 素材id列表 |


### PUT /social/material/callback

**标题**：回收站素材还原

**所属分类**：素材库前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `ids` | array<string> | 是 | 素材id列表 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/material/folder/download

**标题**：下载文件夹下的所有素材

**所属分类**：素材库前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，文件夹ID参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `folderId` | string | 否 | 文件夹id |


### POST /social/material/list

**标题**：分页查询素材信息

**所属分类**：素材库前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，查询条件）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records` | array<object> | 否 | - |
| `total` | integer | 否 | - |
| `size` | integer | 否 | - |
| `current` | integer | 否 | - |
| `orders` | array<object> | 否 | - |
| `optimizeCountSql` | boolean | 否 | - |
| `searchCount` | boolean | 否 | - |
| `optimizeJoinOfCountSql` | boolean | 否 | - |
| `maxLimit` | integer | 否 | - |
| `countId` | string | 否 | - |
| `materialClassify` | enum(ALL/UNCLASSIFIED/UNLABELED/UNSCORED/RECYCLE_BIN) | 否 | 素材分类 |
| `onlyFolderIds` | array<string> | 否 | 文件夹集合（仅展示文件夹下图片） |
| `folderId` | string | 否 | 文件夹（包含子文件） |
| `fileSuffix` | string | 否 | 文件后缀 |
| `tagIds` | array<string> | 否 | 便签IDs |
| `fileScores` | array<integer> | 否 | 评分 |
| `fileName` | string | 否 | 文件名 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /social/material/score

**标题**：更新素材评分

**所属分类**：素材库前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，更新条件）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `materialIds` | array<string> | 否 | 素材id |
| `fileScore` | integer | 否 | 素材分数 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/material/total

**标题**：获取素材分类数量

**所属分类**：素材库前端控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/material/totalNum

**标题**：查询素材分类总数

**所属分类**：素材库前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `materialClassify` | enum(ALL/UNCLASSIFIED/UNLABELED/UNSCORED/RECYCLE_BIN) | 否 | 素材分类 |
| `folderId` | string | 否 | 文件夹id |
| `fileSuffix` | string | 否 | 文件后缀 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/material/update

**标题**：更新素材信息

**所属分类**：素材库前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，更新条件）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 否 | 素材id |
| `fileName` | string | 否 | 文件名称 |
| `remarks` | string | 否 | 文件备注 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/material/upload

**标题**：素材库导入素材

**所属分类**：素材库前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 multipart/form-data |

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `folderName` | string | 否 | 文件夹名称（可选） |

**请求体**（form）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `files` | file | 是 | 上传文件列表 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 素材库文件夹前端控制器

### PUT /social/material/folder

**标题**：修改素材文件夹

**所属分类**：素材库文件夹前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，修改素材文件夹）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `materialFolderId` | string | 否 | 文件夹id |
| `folderName` | string | 否 | 文件夹名称 |
| `parentId` | integer | 否 | 父级文件夹 |
| `sortIndex` | integer | 否 | 下标排序 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /social/material/folder

**标题**：删除素材文件夹

**所属分类**：素材库文件夹前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，删除素材文件夹）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `materialFolderId` | string | 否 | 文件夹id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/material/folder

**标题**：新增文件夹

**所属分类**：素材库文件夹前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，素材文件夹）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `folderName` | string | 否 | 文件夹名称 |
| `parentId` | string | 否 | 父id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/material/folder/add

**标题**：新增素材文件夹和素材关联

**所属分类**：素材库文件夹前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，新增素材文件夹和素材关联）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `materialIds` | array<string> | 否 | 素材id集合 |
| `folderIds` | array<string> | 否 | 新增文件夹id |
| `folderDelIds` | array<string> | 否 | 删除文件夹id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/material/folder/cancel

**标题**：取消素材文件夹和素材关联

**所属分类**：素材库文件夹前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，取消素材文件夹和素材关联）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `materialIds` | array<string> | 否 | 素材id集合 |
| `folderIds` | array<string> | 否 | 文件夹id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/material/folder/total

**标题**：查询文件夹下素材数量

**所属分类**：素材库文件夹前端控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/material/folder/tree

**标题**：查询素材文件夹

**所属分类**：素材库文件夹前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，查询素材文件夹）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `folderName` | string | 否 | 文件夹名称 |
| `parentId` | integer | 否 | 文件夹层级 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/material/folder/tree

**标题**：查询素材文件夹树结构

**所属分类**：素材库文件夹前端控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 素材标签前端控制器

### POST /social/material/label/add

**标题**：新增素材和标签关联

**所属分类**：素材标签前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，关联条件）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `materialIds` | array<string> | 否 | 素材id集合 |
| `materialLabelId` | string | 否 | 标签id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/material/label/cancel

**标题**：取消素材和标签关联

**所属分类**：素材标签前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，关联条件）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `materialIds` | array<string> | 否 | 素材id集合 |
| `materialLabelId` | string | 否 | 标签id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/material/label/list

**标题**：根据枚举值或群组id查询标签集合

**所属分类**：素材标签前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，素材标签）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `materialLabelEnum` | enum(ALL/UNGROUPED) | 否 | 标签分类 |
| `groupId` | string | 否 | 群组id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/material/label/name

**标题**：模糊查询标签

**所属分类**：素材标签前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，关联条件）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `labelName` | string | 否 | 标签名称 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/material/label/save

**标题**：保存素材标签

**所属分类**：素材标签前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，素材标签）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `labelName` | string | 否 | 标签名称 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/material/label/total

**标题**：查询标签数量

**所属分类**：素材标签前端控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 标签群组前端控制器

### POST /social/label/group/add

**标题**：新增标签和群组关联关系

**所属分类**：标签群组前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，标签和标签群组关联关系参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `labelIds` | array<string> | 否 | 标签id集合 |
| `labelGroupId` | string | 否 | 标签群组id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/label/group/cancel

**标题**：取消标签和群组关联关系

**所属分类**：标签群组前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，标签和标签群组关联关系参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `labelIds` | array<string> | 否 | 标签id集合 |
| `labelGroupId` | string | 否 | 标签群组id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /social/label/group/del

**标题**：删除群组

**所属分类**：标签群组前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，删除标签群组参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `labelGroupId` | string | 否 | 标签群组id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/label/group/list

**标题**：查询群组集合

**所属分类**：标签群组前端控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/label/group/save

**标题**：保存群组

**所属分类**：标签群组前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，保存标签群组参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `groupName` | string | 否 | 标签群组名称 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/label/group/total

**标题**：查询群组下标签数量

**所属分类**：标签群组前端控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /social/label/group/update

**标题**：修改群组名称

**所属分类**：标签群组前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，修改标签参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 否 | 标签群组id |
| `groupName` | string | 否 | 标签群组名称 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 网络配置前端控制器

### GET /social/mobile-network/{id}

**标题**：根据id查询网络配置

**所属分类**：网络配置前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 是 | 参数 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/mobile-network/add-remark

**标题**：添加备注

**所属分类**：网络配置前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，添加备注参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `networkId` | string | 否 | 网络id |
| `remark` | string | 否 | 备注 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/mobile-network/agreements/list

**标题**：获取网络协议列表

**所属分类**：网络配置前端控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<string> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/mobile-network/batch-unbind-proxy

**标题**：批量解绑代理

**所属分类**：网络配置前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，批量解绑代理参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `proxyIds` | array<string> | 否 | 代理id 集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /social/mobile-network/bind

**标题**：绑定网络

**所属分类**：网络配置前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 否 | 主键ID |
| `phones` | array<object> | 否 | 节点信息集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /social/mobile-network/cancel/dedicated-line

**标题**：取消网络配置

**所属分类**：网络配置前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，入参信息）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `deviceIds` | array<string> | 否 | 容器ID |
| `routeIp` | string | 否 | 路由IP |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |

**说明**

批量操作：单台失败不中断后续设备，返回成功/失败明细。


### POST /social/mobile-network/dedicated-line

**标题**：网络配置

**所属分类**：网络配置前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，入参信息）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `deviceIds` | array<string> | 否 | 容器ID |
| `routeIp` | string | 否 | 路由IP |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |

**说明**

批量操作：单台失败不中断后续设备，返回成功/失败明细。


### DELETE /social/mobile-network/delete

**标题**：删除网络配置

**所属分类**：网络配置前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `ids` | array<string> | 否 | id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /social/mobile-network/delete-bind-data

**标题**：物理删除网络绑定的数据

**所属分类**：网络配置前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，待删除参数（设备id））

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceId` | string | 否 | 设备id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/mobile-network/device/bind-account

**标题**：获取设备绑定的账号和代理

**所属分类**：网络配置前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，设备id）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceIds` | array<string> | 否 | 设备id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/mobile-network/download

**标题**：下载

**所属分类**：网络配置前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，下载参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `ids` | array<string> | 否 | id集合 |


### GET /social/mobile-network/download/temp

**标题**：下载模板

**所属分类**：网络配置前端控制器


### POST /social/mobile-network/import/csv

**标题**：导入模板

**所属分类**：网络配置前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 multipart/form-data |

**请求体**（form）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `file` | file | 是 | 文件 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | string | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/mobile-network/nodes

**标题**：查询节点列表

**所属分类**：网络配置前端控制器

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `pageNum` | string | 否 | 当前记录起始索引 |
| `pageSize` | string | 否 | 每页显示记录数 |
| `orderByColumn` | string | 否 | 排序列 |
| `isAsc` | string | 否 | 排序的方向desc或者asc |
| `reasonable` | string | 否 | 分页参数合理化 |
| `networkId` | string | 否 | 网络主键编号 |
| `phoneIp` | string | 否 | 节点IP |
| `userId` | string | 否 | 用户ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/mobile-network/page

**标题**：分页查询网络配置

**所属分类**：网络配置前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，查询参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records` | array<object> | 否 | - |
| `total` | integer | 否 | - |
| `size` | integer | 否 | - |
| `current` | integer | 否 | - |
| `orders` | array<object> | 否 | - |
| `optimizeCountSql` | boolean | 否 | - |
| `searchCount` | boolean | 否 | - |
| `optimizeJoinOfCountSql` | boolean | 否 | - |
| `maxLimit` | integer | 否 | - |
| `countId` | string | 否 | - |
| `ip` | string | 否 | IP地址 |
| `area` | string | 否 | 地区 |
| `areas` | array<string> | 否 | 地区（如：北京、旧金山） |
| `phoneIp` | string | 否 | 节点IP |
| `agreement` | string | 否 | 协议类型（如HTTP/HTTPS、TCP/UDP） |
| `networkStatus` | string | 否 | 网络状态（LEISURE/IN_USE/MAINTENANCE） |
| `isNearExpire` | boolean | 否 | 待续费 |
| `proxy` | string | 否 | 代理 |
| `sortType` | enum(RISK/TIME) | 否 | 排序条件   1. 按风险排序（低风险的靠上）   2. 按录入时间排序（新录入的先显示） |
| `suiteIds` | array<string> | 否 | 分组id |
| `deviceIds` | array<string> | 否 | 设备 ID 集合:只查绑定了这些设备的网络配置。 链路{@code social_mobile_network_association.phone_id IN (deviceIds) AND deleted=0 →     * networkId → social_mobile_network};任一设备命中即保留该网络。 前端以字符串数组形式提交(防 JS 长整数丢精度);为空 / null 时不参与过滤。 |
| `proxyIds` | array<string> | 否 | 代理id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/mobile-network/proxy/bind-account

**标题**：获取代理绑定的账号和设备

**所属分类**：网络配置前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `proxyIds` | array<string> | 否 | 代理id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/mobile-network/proxy/bind-account-risk-num

**标题**：查询代理绑定账号的风控数

**所属分类**：网络配置前端控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | string | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/mobile-network/proxy/bind-device-list

**标题**：获取代理绑定的设备列表

**所属分类**：网络配置前端控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/mobile-network/proxy/bind-device-num/{id}

**标题**：查询代理绑定设备数量

**所属分类**：网络配置前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 是 | 代理id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | integer | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/mobile-network/proxy/bind-proxy-by-device

**标题**：根据设备查询绑定的代理

**所属分类**：网络配置前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，设备id）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceId` | string | 否 | 设备id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/mobile-network/proxy/disable

**标题**：停用代理服务

**所属分类**：网络配置前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，代理参数（包含网络id））

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `networkId` | string | 否 | 网络id |
| `operationStatus` | boolean | 否 | 代理操作状态(true 开启 false 关闭) |
| `assIds` | array<string> | 否 | 解绑ids |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/mobile-network/proxy/num

**标题**：查询代理数量和被使用的代理数量

**所属分类**：网络配置前端控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/mobile-network/proxy/split-link

**标题**：切割代理链接获取ip和端口

**所属分类**：网络配置前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，代理链接）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `networkLink` | string | 否 | 网络链接 |
| `agreement` | string | 否 | 协议 |
| `proxyLinkIp` | string | 否 | - |
| `proxyLinkPort` | string | 否 | - |
| `username` | string | 否 | - |
| `password` | string | 否 | - |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/mobile-network/proxy/update

**标题**：更新代理配置

**所属分类**：网络配置前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，网络id）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `networkId` | string | 否 | 网络id |
| `operationStatus` | boolean | 否 | 代理操作状态(true 开启 false 关闭) |
| `assIds` | array<string> | 否 | 解绑ids |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /social/mobile-network/renew

**标题**：续费网络配置

**所属分类**：网络配置前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 否 | 主键ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/mobile-network/save

**标题**：保存网络配置

**所属分类**：网络配置前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `ip` | string | 否 | IP地址 |
| `area` | string | 否 | 地区（如：北京、旧金山） |
| `agreement` | string | 否 | 协议类型（如HTTP/HTTPS、TCP/UDP） |
| `networkStatus` | enum(BINDING/ARREARAGE/LEISURE/INVALID) | 否 | 网络状态 BINDING(已绑定)/ARREARAGE(欠费)/LEISURE(空闲)/INVALID(无效) |
| `expirationTime` | string | 否 | 过期时间 |
| `networkLink` | string | 否 | 网络链接URL |
| `phones` | array<object> | 否 | 节点信息集合 |
| `proxyLinkIp` | string | 否 | 代理ip |
| `proxyLinkPort` | string | 否 | 代理端口 |
| `username` | string | 否 | 用户名 |
| `password` | string | 否 | 密码 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/mobile-network/test

**标题**：测试网络连接是否可用

**所属分类**：网络配置前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，测试参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `ids` | array<string> | 否 | - |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /social/mobile-network/unbind

**标题**：解绑网络

**所属分类**：网络配置前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 否 | 主键id |
| `assIds` | array<string> | 否 | 关联编号集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /social/mobile-network/update

**标题**：修改网络配置

**所属分类**：网络配置前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 否 | 主键ID |
| `ip` | string | 否 | IP地址 |
| `area` | string | 否 | 地区（如：北京、旧金山） |
| `nodeIp` | string | 否 | 节点IP |
| `agreement` | string | 否 | 协议类型（如HTTP/HTTPS、TCP/UDP） |
| `networkStatus` | enum(BINDING/ARREARAGE/LEISURE/INVALID) | 否 | 网络状态 BINDING(已绑定)/ARREARAGE(欠费)/LEISURE(空闲)/INVALID(无效) |
| `expirationTime` | string | 否 | 过期时间 |
| `networkLink` | string | 否 | 网络链接URL |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 账号数据信息前端控制器

### POST /social/measure/accountInfo

**标题**：账号年月日数据统计

**所属分类**：账号数据信息前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `accountDateEnum` | enum(DAY/MONTH/YEAR) | 否 | 年月日枚举 |
| `accountViewEnum` | enum(INCREMENT/TOTAL) | 否 | 增量/总览枚举 |
| `accountIds` | array<string> | 否 | 账号id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/measure/hotPost

**标题**：查询账号热帖

**所属分类**：账号数据信息前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `accountIds` | array<string> | 否 | 账号id集合 |
| `postDateEnum` | enum(DAYS_7/DAYS_28/DAYS_60/DAYS_365) | 否 | 热帖枚举 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/measure/info

**标题**：查询总数据信息

**所属分类**：账号数据信息前端控制器

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `appId` | string | 是 | 应用ID |
| `extendSql` | string | 否 | - |
| `onlyMyself` | string | 否 | - |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/measure/overview

**标题**：账号信息总览

**所属分类**：账号数据信息前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `extendSql` | string | 否 | - |
| `onlyMyself` | string | 否 | - |

**请求体**（json，参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `accountDateEnum` | enum(DAY/MONTH/YEAR) | 否 | 年月日枚举 |
| `appId` | string | 否 | 应用id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/measure/point

**标题**：查询测点

**所属分类**：账号数据信息前端控制器

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `appId` | string | 是 | 应用ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 应用账号管理

### GET /social/account/{accountId}

**标题**：账号个人中心查询

**所属分类**：应用账号管理

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `accountId` | string | 是 | 账号id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/account/account-total

**标题**：查询账号数量和被绑定的账号数量

**所属分类**：应用账号管理

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/account/add-tag

**标题**：新增账号标签

**所属分类**：应用账号管理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，账号标签参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `tagName` | string | 否 | 标签名称 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | string | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/account/batch-unbind

**标题**：批量解绑账号/代理

**所属分类**：应用账号管理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，批量解绑参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceIds` | array<string> | 否 | 设备id集合 |
| `type` | enum(PROXY/ACCOUNT/ALL) | 否 | 解绑类型 代理/账号/全部 |
| `isDel` | boolean | 否 | 是否删除 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/account/batch/join

**标题**：批量加入计划

**所属分类**：应用账号管理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，批量加入计划参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `planId` | string | 否 | 计划编号 |
| `accountIds` | array<string> | 否 | 账号编号集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/account/batch/unbind

**标题**：批量解绑账号

**所属分类**：应用账号管理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，批量解绑参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `accountIds` | array<string> | 否 | 账号id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /social/account/bind

**标题**：账号绑定或解绑设备

**所属分类**：应用账号管理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，账号与设备绑定/解绑参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceId` | string | 否 | 设备编号 |
| `accountIds` | array<string> | 否 | 账号ID |
| `bind` | enum(BINDING/UNBINDING) | 否 | 绑定或解绑 |
| `orgId` | string | 否 | 归属编号（更新设备归属时必填） |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/account/bind-account

**标题**：获取账号绑定的设备和代理

**所属分类**：应用账号管理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，账号id列表）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `accountIds` | array<string> | 否 | 账号id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/account/bind-tag

**标题**：账号绑定标签

**所属分类**：应用账号管理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，账号标签更新参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `tagIds` | array<string> | 否 | 标签id集合 |
| `accountId` | string | 否 | 账号id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/account/check

**标题**：校验账号和设备（含区域匹配、绑定一致性、代理冲突等）

**所属分类**：应用账号管理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，账号与设备/代理校验参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceEnables` | array<object> | 否 | 设备校验信息 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/account/collection-switch

**标题**：数据采集开关（开启/关闭账号的数据采集脚本）

**所属分类**：应用账号管理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，采集开关参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `accountId` | string | 否 | 账号ID |
| `isOpen` | boolean | 否 | 是否开启数据采集 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /social/account/del

**标题**：批量删除账户信息

**所属分类**：应用账号管理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，批量删除参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `accountIds` | array<string> | 是 | 账号信息 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/account/del-tag

**标题**：删除账号标签

**所属分类**：应用账号管理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，账号标签删除参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `tagId` | string | 否 | 标签id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/account/detail/{accountId}

**标题**：获取账号详情

**所属分类**：应用账号管理

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `accountId` | string | 是 | 账号主键 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/account/device-total

**标题**：查询已绑定的设备的账号

**所属分类**：应用账号管理

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/account/device/{deviceId}

**标题**：根据设备id查询账号信息

**所属分类**：应用账号管理

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceId` | string | 是 | 设备id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/account/group/{accountId}

**标题**：获取账号分组信息

**所属分类**：应用账号管理

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `accountId` | string | 是 | 账号id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/account/homepage/save

**标题**：账号主页保存

**所属分类**：应用账号管理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，账号主页保存参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | integer | 否 | 账号主键 |
| `sex` | string | 否 | 性别 |
| `birthday` | string | 否 | 出生日期 |
| `company` | string | 否 | 公司名 |
| `post` | string | 否 | 职务 |
| `country` | string | 否 | 国家 |
| `location` | string | 否 | 所在地 |
| `interested` | string | 否 | 感兴趣 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/account/import/xlsx

**标题**：通过 Excel 导入账号信息

**所属分类**：应用账号管理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 multipart/form-data |

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `appId` | string | 是 | 应用id |

**请求体**（form）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `file` | file | 是 | 上传的 Excel 文件 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/account/join

**标题**：账号加入公用计划

**所属分类**：应用账号管理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，加入计划参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `planIds` | array<string> | 否 | 计划编号 |
| `accountId` | string | 否 | 账号编号 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/account/list

**标题**：账号列表查询

**所属分类**：应用账号管理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，账号查询条件）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records` | array<object> | 否 | - |
| `total` | integer | 否 | - |
| `size` | integer | 否 | - |
| `current` | integer | 否 | - |
| `orders` | array<object> | 否 | - |
| `optimizeCountSql` | boolean | 否 | - |
| `searchCount` | boolean | 否 | - |
| `optimizeJoinOfCountSql` | boolean | 否 | - |
| `maxLimit` | integer | 否 | - |
| `countId` | string | 否 | - |
| `id` | string | 否 | 账号主键 |
| `appAccount` | string | 否 | 账号 |
| `appName` | string | 否 | 应用名称（FB\TW\YT） |
| `appId` | string | 否 | 应用编号 |
| `emailAddr` | string | 否 | 邮箱地址 |
| `loginStatus` | enum(LOGINED/NOT_LOGIN/LOGIN_FAILE/BE_LOGIN/REALPHONE_LOGIN) | 否 | 登录状态；LOGINED(已登录) NOT_LOGIN(未登录) LOGIN_FAILED(登录失败) BE_LOGIN(登录中) |
| `createTime` | string | 否 | 创建日期 |
| `updateTime` | string | 否 | 更改时间 |
| `creatorId` | string | 否 | 创建者 |
| `updatorId` | string | 否 | 更新者 |
| `deviceIp` | string | 否 | 设备ip |
| `suiteIds` | array<string> | 否 | 分组编号 |
| `deviceIds` | array<string> | 否 | 设备 ID 集合:只查这些设备上的账号,匹配{@code social_account.device_id}。 前端以字符串数组形式提交(防 JS 长整数丢精度); 为空 / null 时不参与过滤。 |
| `fansMagnitude` | enum(LT_1000/RANGE_1000_5K/RANGE_5K_10K/RANGE_10K_50K/RANGE_50K_100K/RANGE_100K_500K/RANGE_500K_1M/GT_1M) | 否 | 粉丝量级 |
| `appIds` | array<string> | 否 | 应用id |
| `accountName` | string | 否 | 账号 |
| `sortType` | enum(RISK/TIME) | 否 | 排序条件   1. 按风险排序（低风险的靠上）   2. 按录入时间排序（新录入的先显示） |
| `accountIds` | array<string> | 否 | 账号id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/account/lock

**标题**：锁定账号

**所属分类**：应用账号管理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，账号锁定参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `accountIds` | array<string> | 否 | 账号id集合 |
| `lock` | boolean | 否 | 是否锁定 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /social/account/login/again/{accountId}

**标题**：账户重新登录

**所属分类**：应用账号管理

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `accountId` | string | 是 | 账号id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /social/account/login/batch

**标题**：批量登录

**所属分类**：应用账号管理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，批量登录参数（账号id列表））

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `appAccountIds` | array<string> | 否 | 账号IDs |
| `userId` | string | 否 | 当前操作人（为空时默认当前用户） |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/account/plan/page

**标题**：账号下查询计划列表

**所属分类**：应用账号管理

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records[0].creatorId` | string | 否 | 创建者 |
| `records[0].createTime` | string | 否 | 创建时间 |
| `records[0].updatorId` | string | 否 | 更新者 |
| `records[0].updateTime` | string | 否 | 更新时间 |
| `records[0].deleted` | string | 否 | 删除标识，0未删 1已删 |
| `records[0].version` | string | 否 | 版本 |
| `records[0].deptId` | string | 否 | - |
| `records[0].params.key` | string | 否 | - |
| `records[0].id` | string | 否 | 计划主键 |
| `records[0].planName` | string | 否 | 计划名称 |
| `records[0].planScope` | string | 否 | 作用域
PUBLIC :PUBLIC
PRIVATE :PRIVATE |
| `records[0].planState` | string | 否 | 计划状态
PUBLISH :PUBLISH
EXPIRE :EXPIRE
OBSOLETE :OBSOLETE
DRAFT :DRAFT |
| `total` | string | 否 | - |
| `size` | string | 否 | - |
| `current` | string | 否 | - |
| `orders[0].column` | string | 否 | - |
| `orders[0].asc` | string | 否 | - |
| `optimizeCountSql` | string | 否 | - |
| `searchCount` | string | 否 | - |
| `optimizeJoinOfCountSql` | string | 否 | - |
| `maxLimit` | string | 否 | - |
| `countId` | string | 否 | - |
| `planName` | string | 否 | 计划名称 |
| `planScope` | string | 否 | 作用域 |
| `searchValue` | string | 否 | 所属账号/设备 |
| `planState` | string | 否 | 计划状态
PUBLISH :PUBLISH
EXPIRE :EXPIRE
OBSOLETE :OBSOLETE
DRAFT :DRAFT |
| `accountId` | string | 否 | 账号编号 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /social/account/quit

**标题**：退出计划

**所属分类**：应用账号管理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，退出计划参数（关系id列表））

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `rltIds` | array<string> | 否 | 关联ids |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/account/remark

**标题**：新增备注

**所属分类**：应用账号管理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，新增备注参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `accountId` | string | 否 | 账号id |
| `remark` | string | 否 | 备注 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/account/reverse

**标题**：反向查询分页

**所属分类**：应用账号管理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，反向查询参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records` | array<object> | 否 | - |
| `total` | integer | 否 | - |
| `size` | integer | 否 | - |
| `current` | integer | 否 | - |
| `orders` | array<object> | 否 | - |
| `optimizeCountSql` | boolean | 否 | - |
| `searchCount` | boolean | 否 | - |
| `optimizeJoinOfCountSql` | boolean | 否 | - |
| `maxLimit` | integer | 否 | - |
| `countId` | string | 否 | - |
| `accountIds` | array<string> | 否 | 账号id集合 |
| `proxyIds` | array<string> | 否 | 代理id集合 |
| `deviceIds` | array<string> | 否 | 容器id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/account/risk-device-total

**标题**：查询风控设备数

**所属分类**：应用账号管理

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | string | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/account/run/process

**标题**：已废弃-执行流程脚本

**所属分类**：应用账号管理

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `job_id` | string | 否 | - |
| `success` | boolean | 否 | - |
| `data` | object | 否 | - |
| `msg` | string | 否 | - |

**说明**

「已废弃」


### GET /social/account/sec/{code}

**标题**：获取一次性校验码

**所属分类**：应用账号管理

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | string | 是 | 二次验证密钥 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | string | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/account/tag-list

**标题**：查询标签列表

**所属分类**：应用账号管理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，标签查询参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `tagName` | string | 否 | 标签名称 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/account/update

**标题**：账号更新

**所属分类**：应用账号管理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，账号更新参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 否 | 账号主键 |
| `nickName` | string | 否 | 用户昵称 |
| `appAccount` | string | 否 | 账号 |
| `accountPasswd` | string | 否 | 账号密码 |
| `emailAddr` | string | 否 | 邮箱地址 |
| `emailPasswd` | string | 否 | 邮箱密码 |
| `safeEmailAddr` | string | 否 | 安全邮箱地址（非必填） |
| `safeEmailPasswd` | string | 否 | 安全邮箱密码（非必填） |
| `area` | string | 否 | 地区 |
| `loginStatus` | string | 否 | 登录状态 |
| `twiceCheck` | string | 否 | 二次确认信息 |
| `appId` | string | 否 | 所属应用编号 |
| `appName` | string | 否 | 应用名称 |
| `riskLevel` | enum(UNUSED/NONE/LOW/HIGH/DISABLE) | 否 | 风险等级 |
| `suiteId` | string | 否 | 分组编号 |
| `suiteName` | string | 否 | 分组名称 |
| `suiteDesc` | string | 否 | 分组描述 |
| `remark` | string | 否 | 备注 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/account/user/{id}

**标题**：根据id账号信息

**所属分类**：应用账号管理

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 是 | 主键id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 发帖任务管理

### GET /social/postTask/{postTaskId}

**标题**：发帖任务详情

**所属分类**：发帖任务管理

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `postTaskId` | string | 是 | 发帖任务 id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/postTask/{postTaskId}/det/list

**标题**：发帖任务明细列表

**所属分类**：发帖任务管理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `postTaskId` | string | 是 | 发帖任务id |

**请求体**（json，明细查询条件）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records` | array<object> | 否 | - |
| `total` | integer | 否 | - |
| `size` | integer | 否 | - |
| `current` | integer | 否 | - |
| `orders` | array<object> | 否 | - |
| `optimizeCountSql` | boolean | 否 | - |
| `searchCount` | boolean | 否 | - |
| `optimizeJoinOfCountSql` | boolean | 否 | - |
| `maxLimit` | integer | 否 | - |
| `countId` | string | 否 | - |
| `id` | integer | 否 | 账号主键 |
| `accountId` | integer | 否 | 账号主键 id |
| `appAccount` | string | 否 | app内真实账号 |
| `postTaskId` | string | 否 | 发布任务 id |
| `status` | enum(SUCCESS/FAILED/RUNNING/CANCELED/READ_RUN) | 否 | 发布状态 |
| `startTime` | string | 否 | 开始时间 |
| `endTime` | string | 否 | 开始时间 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/postTask/cancel

**标题**：发帖任务取消

**所属分类**：发帖任务管理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，取消参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `postTaskId` | string | 否 | 发帖任务 id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/postTask/deleteBatch

**标题**：发帖任务 - 删除

**所属分类**：发帖任务管理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，取消参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `postTaskIds` | array<integer> | 否 | 发帖任务 id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/postTask/list

**标题**：发帖任务列表

**所属分类**：发帖任务管理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，查询参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records` | array<object> | 否 | - |
| `total` | integer | 否 | - |
| `size` | integer | 否 | - |
| `current` | integer | 否 | - |
| `orders` | array<object> | 否 | - |
| `optimizeCountSql` | boolean | 否 | - |
| `searchCount` | boolean | 否 | - |
| `optimizeJoinOfCountSql` | boolean | 否 | - |
| `maxLimit` | integer | 否 | - |
| `countId` | string | 否 | - |
| `keywords` | string | 否 | 关键词搜索，支持任务名称或标题模糊查询 |
| `appName` | string | 否 | 软件 app 名称 |
| `jobName` | string | 否 | 任务名称 |
| `status` | array<string> | 否 | 发布状态，可多选 |
| `headline` | string | 否 | 文章标题 |
| `startTime` | string | 否 | 开始时间 |
| `intervalDuration` | integer | 否 | 间隔时长 单位 min |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/postTask/publish

**标题**：发帖任务 - 发布

**所属分类**：发帖任务管理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，发布参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | integer | 否 | 账号主键 |
| `appName` | string | 否 | 软件 app 名称 |
| `jobName` | string | 否 | 任务名称 |
| `status` | enum(SUCCESS/FAILED/RUNNING/CANCELED/READ_RUN) | 否 | 发布状态 |
| `headline` | string | 否 | 文章标题 |
| `startTime` | string | 否 | 开始时间 |
| `intervalDuration` | integer | 否 | 间隔时长 单位 min |
| `fileUrl` | string | 否 | 上传图片或者视频(多个用分号;隔开) |
| `accounts` | array<object> | 否 | 账号列表 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/postTask/rerun

**标题**：发帖任务 - 重新运行

**所属分类**：发帖任务管理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，取消参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `postTaskId` | string | 否 | 发帖任务 id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/postTask/save

**标题**：发帖任务保存

**所属分类**：发帖任务管理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，保存参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | integer | 否 | 账号主键 |
| `appName` | string | 否 | 软件 app 名称 |
| `jobName` | string | 否 | 任务名称 |
| `status` | enum(SUCCESS/FAILED/RUNNING/CANCELED/READ_RUN) | 否 | 发布状态 |
| `headline` | string | 否 | 文章标题 |
| `startTime` | string | 否 | 开始时间 |
| `intervalDuration` | integer | 否 | 间隔时长 单位 min |
| `fileUrl` | string | 否 | 上传图片或者视频(多个用分号;隔开) |
| `accounts` | array<object> | 否 | 账号列表 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/postTask/upload/{appName}

**标题**：发帖任务上传图片或者视频

**所属分类**：发帖任务管理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 multipart/form-data |

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `appName` | string | 是 | app名称 例如 facebook twitter youtube |

**请求体**（form）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `files` | file | 是 | 图片或者视频，支持上传多个 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 帖子推广管理

### GET /social/postSpread/detail

**标题**：帖子推广详情

**所属分类**：帖子推广管理

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `postTaskId` | string | 是 | 发帖任务id |
| `accountId` | string | 是 | 账号id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/postSpread/save

**标题**：帖子推广参数保存

**所属分类**：帖子推广管理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，帖子推广保存参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | integer | 否 | 账号主键 |
| `postTaskId` | integer | 否 | 帖子发布任务 id |
| `postTaskName` | string | 否 | 发布任务名称 |
| `comment` | integer | 否 | 评论生效原则 |
| `commentCandidate` | string | 否 | 评论候选语，多个 |
| `thumbsUp` | integer | 否 | 点赞生效原则 |
| `transpond` | integer | 否 | 转发生效原则 |
| `share` | integer | 否 | 分享生效原则 |
| `shareFriends` | integer | 否 | 分享好友原则 |
| `collect` | integer | 否 | 收藏生效原则 |
| `addFriends` | integer | 否 | 加好友生效原则 |
| `follow` | integer | 否 | 关注生效原则 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 同步信息前端控制器

### DELETE /social/account/info

**标题**：删除账号信息

**所属分类**：同步信息前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，删除请求参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `taskIds` | array<string> | 否 | 账号信息ID集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/account/info/cancel

**标题**：取消任务

**所属分类**：同步信息前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，取消任务参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 否 | 任务主键id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/account/info/page

**标题**：账号信息同步分页

**所属分类**：同步信息前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，分页请求参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records` | array<object> | 否 | - |
| `total` | integer | 否 | - |
| `size` | integer | 否 | - |
| `current` | integer | 否 | - |
| `orders` | array<object> | 否 | - |
| `optimizeCountSql` | boolean | 否 | - |
| `searchCount` | boolean | 否 | - |
| `optimizeJoinOfCountSql` | boolean | 否 | - |
| `maxLimit` | integer | 否 | - |
| `countId` | string | 否 | - |
| `taskStatus` | string | 否 | 信息状态 |
| `deviceIp` | string | 否 | 设备ip |
| `batches` | string | 否 | 批次号 |
| `title` | string | 否 | 标题 |
| `startTime` | string | 否 | 开始时间 |
| `endTime` | string | 否 | 结束时间 |
| `executionTimeRange` | array<string> | 否 | 执行时间 |
| `taskType` | string | 否 | 功能名称 |
| `appId` | string | 否 | 应用id |
| `programId` | string | 否 | 应用功能id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 账号活跃度前端控制器

### POST /social/account/active

**标题**：根据id查询账号活跃度

**所属分类**：账号活跃度前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，查询参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `accountId` | string | 否 | 账号ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 账号用户信息同步修改前端控制器

### POST /social/account/user/info

**标题**：同步用户信息

**所属分类**：账号用户信息同步修改前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，请求参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 否 | - |
| `deviceIp` | string | 否 | 设备ip |
| `appId` | string | 否 | 应用id |
| `appAccount` | string | 否 | 账号名称 |
| `AccountId` | string | 否 | 账号id |
| `userInfoId` | string | 否 | 用户信息表主键id |
| `syncType` | string | 否 | 同步类型 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/account/user/info/{id}

**标题**：根据id查询账号信息

**所属分类**：账号用户信息同步修改前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 是 | 账号信息id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/account/user/info/update

**标题**：更新用户信息

**所属分类**：账号用户信息同步修改前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，请求参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 否 | 主键ID |
| `deviceId` | string | 否 | 设备IP |
| `userName` | string | 否 | 用户名 |
| `nickName` | string | 否 | 昵称 |
| `profile` | string | 否 | 简介 |
| `accountType` | integer | 否 | 账号类型 |
| `location` | string | 否 | 地区 |
| `eMail` | string | 否 | 邮箱 |
| `imageUrl` | string | 否 | 图片地址 |
| `taskStatus` | enum(BE_EXECUTED/IN_EXECUTION/SUCCESS/FAIL/CANCEL/IN_QUEUE/TIMEOUT) | 否 | 任务状态 |
| `taskId` | string | 否 | 任务ID |
| `accountId` | string | 否 | 账号ID |
| `channelUrl` | string | 否 | 频道网址 |
| `address` | string | 否 | 国家/地区 |
| `gender` | string | 否 | 性别 |
| `birthday` | string | 否 | 出生日期 |
| `interest` | string | 否 | 兴趣爱好 |
| `accessionDate` | string | 否 | 加入日期 |
| `appId` | string | 否 | 应用ID |
| `webSiteLink` | string | 否 | 网站链接 |
| `appAccount` | string | 否 | 账号名称 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 社媒账号管理前端控制器

### POST /social/accounts

**标题**：根据用户id查账号

**所属分类**：社媒账号管理前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，查询参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `userIds` | array<string> | 否 | 用户id集合 |
| `appId` | string | 否 | 应用id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/accounts/band

**标题**：绑定账号

**所属分类**：社媒账号管理前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，绑定参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `accountIds` | array<string> | 否 | 账号id |
| `userIds` | array<string> | 否 | 用户id |
| `bindDirection` | string | 否 | 绑定方向枚举 |
| `delIds` | array<string> | 否 | 删除的id集合 |
| `appId` | string | 否 | 应用id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/accounts/page

**标题**：查询应用账号分页

**所属分类**：社媒账号管理前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，分页查询参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records` | array<object> | 否 | - |
| `total` | integer | 否 | - |
| `size` | integer | 否 | - |
| `current` | integer | 否 | - |
| `orders` | array<object> | 否 | - |
| `optimizeCountSql` | boolean | 否 | - |
| `searchCount` | boolean | 否 | - |
| `optimizeJoinOfCountSql` | boolean | 否 | - |
| `maxLimit` | integer | 否 | - |
| `countId` | string | 否 | - |
| `appId` | string | 否 | 应用ID |
| `keyword` | string | 否 | 账号 昵称 邮箱 分组 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/accounts/users

**标题**：根据账号id查用户

**所属分类**：社媒账号管理前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，查询参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `accountIds` | array<string> | 否 | 账号id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/accounts/users/page

**标题**：查询用户分页

**所属分类**：社媒账号管理前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，分页查询参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records` | array<object> | 否 | - |
| `total` | integer | 否 | - |
| `size` | integer | 否 | - |
| `current` | integer | 否 | - |
| `orders` | array<object> | 否 | - |
| `optimizeCountSql` | boolean | 否 | - |
| `searchCount` | boolean | 否 | - |
| `optimizeJoinOfCountSql` | boolean | 否 | - |
| `maxLimit` | integer | 否 | - |
| `countId` | string | 否 | - |
| `keyword` | string | 否 | 用户名 昵称 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 普通文件上传 前端控制器

### GET /social/oss/download

**标题**：下载

**所属分类**：普通文件上传 前端控制器

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params.key.key` | string | 否 | - |
| `fileName` | string | 否 | - |


### GET /social/oss/download/{fileName}

**标题**：下载

**所属分类**：普通文件上传 前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `fileName` | string | 是 | 文件 |


### POST /social/oss/upload

**标题**：普通上传图片或视频

**所属分类**：普通文件上传 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 multipart/form-data |

**请求体**（form）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `file` | file | 是 | 图片或者视频 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/oss/upload/file

**标题**：上传文本或csv文件

**所属分类**：普通文件上传 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 multipart/form-data |

**请求体**（form）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `file` | file | 是 | 文件 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | string | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/oss/view/{imgName}

**标题**：预览图片

**所属分类**：普通文件上传 前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `imgName` | string | 是 | 图片或者视频 |


## 应用话术前端控制器

### POST /social/script/import

**标题**：话术导入

**所属分类**：应用话术前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 multipart/form-data |

**请求体**（form）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `file` | file | 是 | 文件资源 |
| `appType` | text | 否 | 应用类型（FACEBOOk\X\TIkTOK....） |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 上传记录管理

### GET /social/upload-records/download/{id}

**标题**：文件下载（下载上传失败的错误文件）

**所属分类**：上传记录管理

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 是 | 上传记录id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/upload-records/download/temp

**标题**：下载账号导入模板

**所属分类**：上传记录管理


### GET /social/upload-records/page

**标题**：上传记录分页查询

**所属分类**：上传记录管理

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records[0].creatorId` | string | 否 | 创建者 |
| `records[0].createTime` | string | 否 | 创建时间 |
| `records[0].updatorId` | string | 否 | 更新者 |
| `records[0].updateTime` | string | 否 | 更新时间 |
| `records[0].deleted` | string | 否 | 删除标识，0未删 1已删 |
| `records[0].version` | string | 否 | 版本 |
| `records[0].deptId` | string | 否 | - |
| `records[0].params.key` | string | 否 | - |
| `records[0].id` | string | 否 | 主键ID |
| `records[0].fileName` | string | 否 | 文件名 |
| `records[0].updateState` | string | 否 | 上传状态(uploading, failed, successful)
UPLOADING :UPLOADING
FAILED :FAILED
SUCCESSFUL :SUCCESSFUL |
| `records[0].uploadTime` | string | 否 | 导入时间 |
| `records[0].creatorName` | string | 否 | 操作人名-创建人名 |
| `records[0].failedFile` | string | 否 | 失败文件路径 |
| `total` | string | 否 | - |
| `size` | string | 否 | - |
| `current` | string | 否 | - |
| `orders[0].column` | string | 否 | - |
| `orders[0].asc` | string | 否 | - |
| `optimizeCountSql` | string | 否 | - |
| `searchCount` | string | 否 | - |
| `optimizeJoinOfCountSql` | string | 否 | - |
| `maxLimit` | string | 否 | - |
| `countId` | string | 否 | - |
| `creatorId` | string | 否 | 操作人（非必填，默认取当前用户） |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 设备组 前端控制器

### DELETE /social/suite/del

**标题**：批量删除设备分组信息

**所属分类**：设备组 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，分组id列表）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `suiteIds` | array<string> | 是 | 分组编号集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/suite/detail/{suiteId}

**标题**：获取分组详情

**所属分类**：设备组 前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `suiteId` | string | 是 | 分组编号 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/suite/device/add

**标题**：分组追加设备（不清空已有设备，仅新增）

**所属分类**：设备组 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，分组与设备更新参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `suiteId` | string | 否 | 分组编号 |
| `suiteName` | string | 是 | 分组名称 |
| `suiteDesc` | string | 否 | 分组描述 |
| `mobiles` | array<object> | 否 | 设备信息 |
| `accountIds` | array<string> | 否 | 账号编号集合 |
| `proxyIds` | array<string> | 否 | 代理id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/suite/device/sort

**标题**：设备拖动排序（更新设备在分组内的顺序）

**所属分类**：设备组 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，设备排序参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `suiteId` | string | 否 | 目标分组id |
| `sourceSuiteId` | string | 否 | 源分组id（跨组拖拽时传入，为空表示同组排序） |
| `deviceIds` | array<string> | 否 | 设备id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/suite/list

**标题**：获取所有设备分组的名称列表

**所属分类**：设备组 前端控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<string> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/suite/page

**标题**：获取设备分组列表

**所属分类**：设备组 前端控制器

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records[0].creatorId` | string | 否 | 创建者 |
| `records[0].createTime` | string | 否 | 创建时间 |
| `records[0].updatorId` | string | 否 | 更新者 |
| `records[0].updateTime` | string | 否 | 更新时间 |
| `records[0].deleted` | string | 否 | 删除标识，0未删 1已删 |
| `records[0].version` | string | 否 | 版本 |
| `records[0].deptId` | string | 否 | - |
| `records[0].params.key` | string | 否 | - |
| `records[0].id` | string | 否 | 主键ID |
| `records[0].suiteIdx` | string | 否 | 序号 |
| `records[0].suiteName` | string | 否 | 组名 |
| `records[0].amount` | string | 否 | 数量 |
| `records[0].suiteDesc` | string | 否 | 分组描述 |
| `records[0].suiteType` | string | 否 | 分组类型（PRODUCT：产品分组/USER：用户分组）
PRODUCT :PRODUCT
USER :USER
ACC :ACC
Proxy :Proxy |
| `total` | string | 否 | - |
| `size` | string | 否 | - |
| `current` | string | 否 | - |
| `orders[0].column` | string | 否 | - |
| `orders[0].asc` | string | 否 | - |
| `optimizeCountSql` | string | 否 | - |
| `searchCount` | string | 否 | - |
| `optimizeJoinOfCountSql` | string | 否 | - |
| `maxLimit` | string | 否 | - |
| `countId` | string | 否 | - |
| `suiteName` | string | 否 | 分组名称 |
| `deviceIp` | string | 否 | 设备地址 |
| `deviceStatuses[0]` | string | 否 | 设备状态 |
| `suiteId` | string | 否 | 分组编号 |
| `deviceIdx` | string | 否 | 设备序号 |
| `nodeIp` | string | 否 | 节点地址 |
| `suiteType` | string | 否 | 分组类型
PRODUCT :PRODUCT
USER :USER
ACC :ACC
Proxy :Proxy |
| `ignoreZero` | string | 否 | 是否忽略条数为0的记录 true: 忽略展示 false: 展示
默认 展示 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/suite/screen-page

**标题**：获取设备分组列表（投屏矩阵）

**所属分类**：设备组 前端控制器

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records[0].creatorId` | string | 否 | 创建者 |
| `records[0].createTime` | string | 否 | 创建时间 |
| `records[0].updatorId` | string | 否 | 更新者 |
| `records[0].updateTime` | string | 否 | 更新时间 |
| `records[0].deleted` | string | 否 | 删除标识，0未删 1已删 |
| `records[0].version` | string | 否 | 版本 |
| `records[0].deptId` | string | 否 | - |
| `records[0].params.key` | string | 否 | - |
| `records[0].id` | string | 否 | 主键ID |
| `records[0].suiteIdx` | string | 否 | 序号 |
| `records[0].suiteName` | string | 否 | 组名 |
| `records[0].amount` | string | 否 | 数量 |
| `records[0].suiteDesc` | string | 否 | 分组描述 |
| `records[0].suiteType` | string | 否 | 分组类型（PRODUCT：产品分组/USER：用户分组）
PRODUCT :PRODUCT
USER :USER
ACC :ACC
Proxy :Proxy |
| `total` | string | 否 | - |
| `size` | string | 否 | - |
| `current` | string | 否 | - |
| `orders[0].column` | string | 否 | - |
| `orders[0].asc` | string | 否 | - |
| `optimizeCountSql` | string | 否 | - |
| `searchCount` | string | 否 | - |
| `optimizeJoinOfCountSql` | string | 否 | - |
| `maxLimit` | string | 否 | - |
| `countId` | string | 否 | - |
| `suiteName` | string | 否 | 分组名称 |
| `deviceIp` | string | 否 | 设备地址 |
| `deviceStatuses[0]` | string | 否 | 设备状态 |
| `suiteId` | string | 否 | 分组编号 |
| `deviceIdx` | string | 否 | 设备序号 |
| `server` | string | 否 | 节点IP |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/suite/update

**标题**：更新设备分组（先全量替换已有设备再新增）

**所属分类**：设备组 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，分组与设备更新参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `suiteId` | string | 否 | 分组编号 |
| `suiteName` | string | 是 | 分组名称 |
| `suiteDesc` | string | 否 | 分组描述 |
| `mobiles` | array<object> | 否 | 设备信息 |
| `accountIds` | array<string> | 否 | 账号编号集合 |
| `proxyIds` | array<string> | 否 | 代理id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | string | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 账号分组关联表 前端控制器

### POST /social/account-suite/add

**标题**：增加账号到分组

**所属分类**：账号分组关联表 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，分组新增账号参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `suiteId` | string | 否 | 分组编号 |
| `suiteName` | string | 是 | 分组名称 |
| `suiteDesc` | string | 否 | 分组描述 |
| `mobiles` | array<object> | 否 | 设备信息 |
| `accountIds` | array<string> | 否 | 账号编号集合 |
| `proxyIds` | array<string> | 否 | 代理id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /social/account-suite/del

**标题**：删除账号分组信息

**所属分类**：账号分组关联表 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，分组id列表）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `suiteIds` | array<string> | 是 | 分组编号集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/account-suite/update

**标题**：更新账号分组

**所属分类**：账号分组关联表 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，账号分组更新参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `suiteId` | string | 否 | 分组编号 |
| `suiteName` | string | 是 | 分组名称 |
| `suiteDesc` | string | 否 | 分组描述 |
| `mobiles` | array<object> | 否 | 设备信息 |
| `accountIds` | array<string> | 否 | 账号编号集合 |
| `proxyIds` | array<string> | 否 | 代理id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | string | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 任务缓存列表前端控制器

### DELETE /social/cache/clear

**标题**：清空缓存列表（不允许存在正在执行中的任务）

**所属分类**：任务缓存列表前端控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/cache/query

**标题**：查询缓存列表

**所属分类**：任务缓存列表前端控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 文本库 前端控制器

### POST /social/text-library/batch

**标题**：文本库批量关联

**所属分类**：文本库 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，批量关联参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `textLibs` | array<object> | 否 | - |
| `source` | string | 否 | 来源 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/text-library/batch/update

**标题**：批量更新文本库

**所属分类**：文本库 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，批量文本库参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `batchDtos` | array<object> | 否 | - |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /social/text-library/cancel

**标题**：取消执行(支持批量)

**所属分类**：文本库 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，文本库ID集合）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `textIds` | array<string> | 否 | 文本库主键 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /social/text-library/del

**标题**：删除文本库信息(支持批量)

**所属分类**：文本库 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，删除参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `textIds` | array<string> | 否 | 文本库主键 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/text-library/detail/{id}

**标题**：获取文本库详情

**所属分类**：文本库 前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 是 | 文本库ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/text-library/field

**标题**：获取文本库字段信息

**所属分类**：文本库 前端控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/text-library/list/{id}

**标题**：获取文本库列表详情

**所属分类**：文本库 前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 是 | 文本库ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /social/text-library/modify

**标题**：启用或禁用文本库 (支持批量)

**所属分类**：文本库 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，启停状态参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `textIds` | array<string> | 否 | 文本库主键 |
| `libState` | enum(ENABLE/DISABLED) | 否 | - |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/text-library/page

**标题**：分页查询

**所属分类**：文本库 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，分页参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records` | array<object> | 否 | - |
| `total` | integer | 否 | - |
| `size` | integer | 否 | - |
| `current` | integer | 否 | - |
| `orders` | array<object> | 否 | - |
| `optimizeCountSql` | boolean | 否 | - |
| `searchCount` | boolean | 否 | - |
| `optimizeJoinOfCountSql` | boolean | 否 | - |
| `maxLimit` | integer | 否 | - |
| `countId` | string | 否 | - |
| `tag` | string | 否 | 标签 |
| `keyWord` | string | 否 | 关键字 |
| `title` | string | 否 | 发布文案 |
| `suiteName` | string | 否 | 自定义分组 |
| `state` | enum(ENABLE/DISABLED) | 否 | 状态 |
| `execState` | enum(BE_EXECUTED/IN_EXECUTION/SUCCESS/FAIL/CANCEL/IN_QUEUE/TIMEOUT) | 否 | 执行状态 |
| `generationTimeRange` | array<string> | 否 | 时间 |
| `isEnd` | boolean | 否 | 是否查询结束态 true 查询成功、失败、已取消，false则查询全部 与执行状态字段同时生效 |
| `mixField` | string | 否 | 混合查询字段 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /social/text-library/start

**标题**：立即执行

**所属分类**：文本库 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，文本库ID集合）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `textIds` | array<string> | 否 | 文本库主键 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/text-library/update

**标题**：更新文本库

**所属分类**：文本库 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，文本库参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `textId` | string | 否 | 文本库主键 |
| `themeSettings` | enum(L/R) | 否 | 方向设置（L->左 R->右） |
| `suiteName` | string | 否 | 分组 |
| `topic` | string | 否 | 主题 |
| `title` | string | 否 | 发布文案 |
| `hashTags` | string | 否 | 标签 |
| `mainTextRef` | string | 否 | 主文案参照 |
| `mainText` | string | 否 | 文案 |
| `keyWords` | string | 否 | 关键字 |
| `coverText` | string | 否 | 封面文案 |
| `taskRef` | string | 否 | 图片、视频minio地址 |
| `aigcId` | string | 否 | Aigc编号 |
| `componentParam` | array<object> | 否 | 关联aigc组件信息 |
| `source` | string | 否 | 文件来源 |
| `execState` | string | 否 | 执行状态 |
| `state` | enum(ENABLE/DISABLED) | 否 | 状态 |
| `comfyuiTask` | enum(CUSTOM_SM/IMAGE_2_TEXT/TITLE_HASHTAGS_MAIN/CREATE_IMAGE) | 否 | 执行任务类型 |
| `columnState` | object | 否 | 字段状态信息 |
| `generationTime` | string | 否 | 生成时间 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | string | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 任务前端控制器

### POST /social/task

**标题**：保存任务并触发设备分发/执行。Plan B（修复 commit 72581136 引入的 401）：

**所属分类**：任务前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，任务参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `key` | object | 否 | - |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |

**说明**

控制器同步返回[AjaxResult(操作消息提醒)]：先调
        {@code taskService.saveTaskAndExecute(taskDTO, true)} 完成写库 + 离线设备入{@code toDoTask/{ip}} Redis 队列，
        拿到[TaskAddVO(任务新增VO)]（含任务 id）后立即返回，不再返回[CompletableFuture(A{@link Future} that may be explicitly completed (setting its
value and status), and may be used as a{@link CompletionStage},
supporting dependent functions and actions that trigger upon its
completion.

When two or more threads attempt to
{@link #complete complete},
{@link #completeExceptionally completeExceptionally}, or
{@link #cancel cancel}
a CompletableFuture, only one of them succeeds.

In addition to these and related methods for directly
manipulating status and results, CompletableFuture implements
interface{@link CompletionStage} with the following policies:

Actions supplied for dependent completions of
non-async methods may be performed by the thread that
completes the current CompletableFuture, or by any other caller of
a completion method.

All async methods without an explicit Executor
argument are performed using the{@link ForkJoinPool#commonPool()}
(unless it does not support a parallelism level of at least two, in
which case, a new Thread is created to run each task).  This may be
overridden for non-static methods in subclasses by defining method
{@link #defaultExecutor()}. To simplify monitoring, debugging,
and tracking, all generated asynchronous tasks are instances of the
marker interface{@link AsynchronousCompletionTask}.  Operations
with time-delays can use adapter methods defined in this class, for
example:{@code supplyAsync(supplier, delayedExecutor(timeout,
* timeUnit))}.  To support methods with delays and timeouts, this
class maintains at most one daemon thread for triggering and
cancelling actions, not for running them.

All CompletionStage methods are implemented independently of
other public methods, so the behavior of one method is not impacted
by overrides of others in subclasses.

All CompletionStage methods return CompletableFutures.  To
restrict usages to only those methods defined in interface
CompletionStage, use method{@link #minimalCompletionStage}. Or to
ensure only that clients do not themselves modify a future, use
method{@link #copy}.

CompletableFuture also implements{@link Future} with the following
policies:

Since (unlike{@link FutureTask}) this class has no direct
control over the computation that causes it to be completed,
cancellation is treated as just another form of exceptional
completion.  Method{@link #cancel cancel} has the same effect as
{@code completeExceptionally(new CancellationException())}. Method
{@link #isCompletedExceptionally} can be used to determine if a
CompletableFuture completed in any exceptional fashion.

In case of exceptional completion with a CompletionException,
methods{@link #get()} and{@link #get(long, TimeUnit)} throw an
{@link ExecutionException} with the same cause as held in the
corresponding CompletionException.  To simplify usage in most
contexts, this class also defines methods{@link #join()} and
{@link #getNow} that instead throw the CompletionException directly
in these cases.

Arguments used to pass a completion result (that is, for
parameters of type{@code T}) for methods accepting them may be
null, but passing a null value for any other parameter will result
in a{@link NullPointerException} being thrown.

Subclasses of this class should normally override the "virtual
constructor" method{@link #newIncompleteFuture}, which establishes
the concrete type returned by CompletionStage methods. For example,
here is a class that substitutes a different default Executor and
disables the{@code obtrude} methods:

{@code
* class MyCompletableFuture extends CompletableFuture {
*   static final Executor myExecutor = ...;
*   public MyCompletableFuture() { }
*   public  CompletableFuture newIncompleteFuture() {
*     return new MyCompletableFuture(); }
*   public Executor defaultExecutor() {
*     return myExecutor; }
*   public void obtrudeValue(T value) {
*     throw new UnsupportedOperationException(); }
*   public void obtrudeException(Throwable ex) {
*     throw new UnsupportedOperationException(); }
* }})]，
        从而避免 Spring MVC 触发 async dispatch 后 Spring Security 6 在 STATELESS 模式下
        重新走 SecurityContextHolder 时拉到空 context 的 401。

    写库之外的分发执行交给[cn.callfans.admin.social.controller.admin.task.SystemTaskController#socialThreadPool(异步执行保存与设备分发的线程池，复用 framework/ThreadPoolConfig#socialThreadPoolTaskExecutor。
)] 上的 fire-and-forget
        [java.util.concurrent.CompletableFuture#runAsync(java.lang.Runnable)(Returns a new CompletableFuture that is asynchronously completed)]：worker 线程从 DB 拉回最新
        [SystemTask(任务实体)]/{@code DynamicForm}/[SystemTaskLog(任务日志实体)]，再调
        {@code taskService.executeNow(...)} 完成在线设备的入队，与 servlet 线程解耦。

    与原同步版本相比保留了"不阻塞 servlet 线程做长任务"的目标，但杜绝了
        [CompletableFuture(A{@link Future} that may be explicitly completed (setting its
value and status), and may be used as a{@link CompletionStage},
supporting dependent functions and actions that trigger upon its
completion.

When two or more threads attempt to
{@link #complete complete},
{@link #completeExceptionally completeExceptionally}, or
{@link #cancel cancel}
a CompletableFuture, only one of them succeeds.

In addition to these and related methods for directly
manipulating status and results, CompletableFuture implements
interface{@link CompletionStage} with the following policies:

Actions supplied for dependent completions of
non-async methods may be performed by the thread that
completes the current CompletableFuture, or by any other caller of
a completion method.

All async methods without an explicit Executor
argument are performed using the{@link ForkJoinPool#commonPool()}
(unless it does not support a parallelism level of at least two, in
which case, a new Thread is created to run each task).  This may be
overridden for non-static methods in subclasses by defining method
{@link #defaultExecutor()}. To simplify monitoring, debugging,
and tracking, all generated asynchronous tasks are instances of the
marker interface{@link AsynchronousCompletionTask}.  Operations
with time-delays can use adapter methods defined in this class, for
example:{@code supplyAsync(supplier, delayedExecutor(timeout,
* timeUnit))}.  To support methods with delays and timeouts, this
class maintains at most one daemon thread for triggering and
cancelling actions, not for running them.

All CompletionStage methods are implemented independently of
other public methods, so the behavior of one method is not impacted
by overrides of others in subclasses.

All CompletionStage methods return CompletableFutures.  To
restrict usages to only those methods defined in interface
CompletionStage, use method{@link #minimalCompletionStage}. Or to
ensure only that clients do not themselves modify a future, use
method{@link #copy}.

CompletableFuture also implements{@link Future} with the following
policies:

Since (unlike{@link FutureTask}) this class has no direct
control over the computation that causes it to be completed,
cancellation is treated as just another form of exceptional
completion.  Method{@link #cancel cancel} has the same effect as
{@code completeExceptionally(new CancellationException())}. Method
{@link #isCompletedExceptionally} can be used to determine if a
CompletableFuture completed in any exceptional fashion.

In case of exceptional completion with a CompletionException,
methods{@link #get()} and{@link #get(long, TimeUnit)} throw an
{@link ExecutionException} with the same cause as held in the
corresponding CompletionException.  To simplify usage in most
contexts, this class also defines methods{@link #join()} and
{@link #getNow} that instead throw the CompletionException directly
in these cases.

Arguments used to pass a completion result (that is, for
parameters of type{@code T}) for methods accepting them may be
null, but passing a null value for any other parameter will result
in a{@link NullPointerException} being thrown.

Subclasses of this class should normally override the "virtual
constructor" method{@link #newIncompleteFuture}, which establishes
the concrete type returned by CompletionStage methods. For example,
here is a class that substitutes a different default Executor and
disables the{@code obtrude} methods:

{@code
* class MyCompletableFuture extends CompletableFuture {
*   static final Executor myExecutor = ...;
*   public MyCompletableFuture() { }
*   public  CompletableFuture newIncompleteFuture() {
*     return new MyCompletableFuture(); }
*   public Executor defaultExecutor() {
*     return myExecutor; }
*   public void obtrudeValue(T value) {
*     throw new UnsupportedOperationException(); }
*   public void obtrudeException(Throwable ex) {
*     throw new UnsupportedOperationException(); }
* }})] 返回值 → Spring MVC Async → Spring Security 二次验证的链路。


### DELETE /social/task

**标题**：批量删除任务

**所属分类**：任务前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，任务参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `taskIds` | array<string> | 否 | 任务id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/task/{id}

**标题**：根据id查询任务

**所属分类**：任务前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 是 | 任务id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<string> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/task/download

**标题**：下载任务日志信息

**所属分类**：任务前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，下载参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `taskIds` | array<string> | 否 | 选中的任务id |
| `id` | string | 否 | 主键id |
| `appId` | string | 否 | 应用ID |
| `title` | string | 否 | 任务标题 |
| `taskType` | string | 否 | 任务类型 |
| `groupId` | string | 否 | 分组id |
| `accGroupId` | string | 否 | 账号分组ID |
| `deviceIp` | string | 否 | 设备ip |
| `taskStatus` | string | 否 | 任务状态 |
| `executionTimeRange` | array<string> | 否 | 时间范围 |
| `programId` | string | 否 | 应用功能id |
| `accName` | string | 否 | 账号 |
| `deviceIds` | array<string> | 否 | 设备id集合 |


### POST /social/task/downloadTaskDocuments

**标题**：汇总下载多个任务日志中的 taskDocuments 为单个 CSV 文件。

**所属分类**：任务前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，请求体,见）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `taskIds` | array<string> | 否 | 任务id集合 |

**说明**

聚合规则:首份 CSV 的表头作为输出表头,其余 CSV 跳过表头只追加数据行(假定所有 CSV schema 一致)。
单个文档拉取失败(OSS NoSuchKey、网络错误等)仅 warn 跳过,不阻断整次导出。
输出文件带 UTF-8 BOM,确保 Excel 直接打开不乱码。


### POST /social/task/page

**标题**：分页查询任务

**所属分类**：任务前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，查询参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records` | array<object> | 否 | - |
| `total` | integer | 否 | - |
| `size` | integer | 否 | - |
| `current` | integer | 否 | - |
| `orders` | array<object> | 否 | - |
| `optimizeCountSql` | boolean | 否 | - |
| `searchCount` | boolean | 否 | - |
| `optimizeJoinOfCountSql` | boolean | 否 | - |
| `maxLimit` | integer | 否 | - |
| `countId` | string | 否 | - |
| `id` | string | 否 | 主键id |
| `appIds` | array<string> | 否 | 应用ID |
| `title` | string | 否 | 任务标题 |
| `taskTypeIds` | array<integer> | 否 | 任务类型 |
| `groupId` | string | 否 | 分组id |
| `accGroupId` | string | 否 | 账号分组ID |
| `deviceIp` | string | 否 | 设备ip |
| `taskStatus` | string | 否 | 任务状态 |
| `startTime` | string | 否 | 开始时间 |
| `endTime` | string | 否 | 结束时间 |
| `executionTimeRange` | array<string> | 否 | 时间范围 |
| `programId` | string | 否 | 应用功能id |
| `accName` | string | 否 | 账号 |
| `userName` | string | 否 | 用户名 |
| `projectAffiliation` | integer | 否 | 所属项目（用于筛选任务归属）：     {@code null} —— 忽略该条件     {@code 0} —— 日常任务（{@code social_system_task.project_id} 为空）     非零 —— 调度中心项目 id（按{@code project_id = ?} 精确匹配） |
| `deviceIds` | array<string> | 否 | 设备id |
| `taskIds` | array<string> | 否 | 任务 id 多选。 走{@code id IN (...)} 过滤;与其它筛选项{@code AND} 组合。 三种语义:   {@code null} / 空集合 —— 忽略该条件;   含至少 1 个非空字符串 —— IN 过滤,空串/纯空白串静默丢弃;   原始输入非空但全部是空串/纯空白 —— 视为"用户明确指定过滤但无匹配",返空分页       (与矩阵总览{@code chipNodeIds} 修复对称,避免"条件不成立却返回全量")。 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/task/perform

**标题**：执行任务

**所属分类**：任务前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，任务参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 否 | 任务id |
| `deviceIds` | array<string> | 否 | 设备id集合 |
| `child` | object | 否 | - |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/task/plan/page

**标题**：计划任务查询应用和表单配置

**所属分类**：任务前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，查询参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records` | array<object> | 否 | - |
| `total` | integer | 否 | - |
| `size` | integer | 否 | - |
| `current` | integer | 否 | - |
| `orders` | array<object> | 否 | - |
| `optimizeCountSql` | boolean | 否 | - |
| `searchCount` | boolean | 否 | - |
| `optimizeJoinOfCountSql` | boolean | 否 | - |
| `maxLimit` | integer | 否 | - |
| `countId` | string | 否 | - |
| `title` | string | 否 | 任务名称 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /social/task/update

**标题**：更新任务

**所属分类**：任务前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，更新参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `key` | object | 否 | - |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 任务日志前端控制器

### POST /social/task/log

**标题**：根据id查询任务分页

**所属分类**：任务日志前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，查询参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records` | array<object> | 否 | - |
| `total` | integer | 否 | - |
| `size` | integer | 否 | - |
| `current` | integer | 否 | - |
| `orders` | array<object> | 否 | - |
| `optimizeCountSql` | boolean | 否 | - |
| `searchCount` | boolean | 否 | - |
| `optimizeJoinOfCountSql` | boolean | 否 | - |
| `maxLimit` | integer | 否 | - |
| `countId` | string | 否 | - |
| `systemTaskId` | string | 否 | 任务执行id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/task/log/cancel

**标题**：取消任务

**所属分类**：任务日志前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，任务参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 否 | 任务主键id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 系统计划 前端控制器

### GET /social/system-plan/account/page

**标题**：计划维度账号信息分页列表

**所属分类**：系统计划 前端控制器

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records[0].creatorId` | string | 否 | 创建者 |
| `records[0].createTime` | string | 否 | 创建时间 |
| `records[0].updatorId` | string | 否 | 更新者 |
| `records[0].updateTime` | string | 否 | 更新时间 |
| `records[0].deleted` | string | 否 | 删除标识，0未删 1已删 |
| `records[0].version` | string | 否 | 版本 |
| `records[0].deptId` | string | 否 | - |
| `records[0].params.key` | string | 否 | - |
| `records[0].id` | string | 否 | 账号主键 |
| `records[0].statisticsRemark` | string | 否 | 账号统计备注 |
| `records[0].appAccount` | string | 否 | 账号 |
| `records[0].nickName` | string | 否 | 用户昵称 |
| `records[0].accountPasswd` | string | 否 | 账号密码 |
| `records[0].appId` | string | 否 | 所属应用编号 |
| `records[0].appName` | string | 否 | 应用名称（FB\TW\YT） |
| `records[0].emailAddr` | string | 否 | 邮箱地址 |
| `records[0].emailPasswd` | string | 否 | 邮箱密码 |
| `records[0].safeEmailAddr` | string | 否 | 安全邮箱地址 |
| `records[0].safeEmailPasswd` | string | 否 | 安全邮箱密码 |
| `records[0].avatar` | string | 否 | 头像 |
| `records[0].twiceCheck` | string | 否 | 二次验证 |
| `records[0].loginStatus` | string | 否 | 登录状态；LOGINED(已登录) NOT_LOGIN(未登录) LOGIN_FAILED(登录失败) BE_LOGIN(登录中)
LOGINED :LOGINED
NOT_LOGIN :NOT_LOGIN
LOGIN_FAILE :LOGIN_FAILE
BE_LOGIN :BE_LOGIN
REALPHONE_LOGIN :REALPHONE_LOGIN |
| `records[0].loginTime` | string | 否 | 登录时间 |
| `records[0].deviceId` | string | 否 | 设备编号 |
| `records[0].deviceIp` | string | 否 | 设备IP |
| `records[0].armId` | string | 否 | 服务器编号 |
| `records[0].nodeId` | string | 否 | 节点编号 |
| `records[0].devicePort` | string | 否 | 設備端口號 |
| `records[0].proxyIp` | string | 否 | 代理ip |
| `records[0].failedReason` | string | 否 | 登录失败原因 |
| `records[0].jobId` | string | 否 | RPA登录任务编号 |
| `records[0].deviceIdx` | string | 否 | 设备序号 |
| `records[0].deviceAliases` | string | 否 | 设备别名 |
| `records[0].totalFans` | string | 否 | 粉丝总数 |
| `records[0].totalPost` | string | 否 | 帖子总数 |
| `records[0].totalFollows` | string | 否 | 关注总数 |
| `records[0].totalComments` | string | 否 | 评论总数 |
| `records[0].totalActiveTime` | string | 否 | 活跃时间 |
| `records[0].totalLikes` | string | 否 | 点赞总数 |
| `records[0].totalVideoViewing` | string | 否 | 视频播放总数 |
| `records[0].totalShare` | string | 否 | 分享总数 |
| `records[0].totalVideoPosted` | string | 否 | 视频发布总数 |
| `records[0].totalVideoViews` | string | 否 | 视频观看总数 |
| `records[0].totalRetweets` | string | 否 | 转推总数 |
| `records[0].totalTweets` | string | 否 | 推文总数 |
| `records[0].totalVisits` | string | 否 | 访问总数 |
| `records[0].totalFriends` | string | 否 | 好友总数 |
| `records[0].totalViewingTimes` | string | 否 | 总观看时长 |
| `records[0].totalFollowerNumbers` | string | 否 | 关注者数量 |
| `records[0].riskLevel` | string | 否 | 风险等级 |
| `records[0].remark` | string | 否 | 备注 |
| `records[0].isLock` | string | 否 | 是否锁定 |
| `records[0].collectionSwitch` | string | 否 | 采集开关 |
| `records[0].verifiedLink` | string | 否 | 验证连接 |
| `records[0].verifiedKey` | string | 否 | key |
| `records[0].area` | string | 否 | 区域 |
| `total` | string | 否 | - |
| `size` | string | 否 | - |
| `current` | string | 否 | - |
| `orders[0].column` | string | 否 | - |
| `orders[0].asc` | string | 否 | - |
| `optimizeCountSql` | string | 否 | - |
| `searchCount` | string | 否 | - |
| `optimizeJoinOfCountSql` | string | 否 | - |
| `maxLimit` | string | 否 | - |
| `countId` | string | 否 | - |
| `planId` | string | 是 | 计划编号 |
| `searchValue` | string | 否 | 所属账号/设备 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /social/system-plan/copy/{planId}

**标题**：复制计划

**所属分类**：系统计划 前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `planId` | string | 是 | 复制的计划编号 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /social/system-plan/del

**标题**：删除任务计划

**所属分类**：系统计划 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，计划删除参数（含计划编号列表））

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `planIds` | array<string> | 否 | 计划编号集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/system-plan/detail

**标题**：计划详情

**所属分类**：系统计划 前端控制器

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `planId` | string | 否 | 计划编号 |
| `startTime` | string | 否 | 开始时间 |
| `endTime` | string | 否 | 结束时间 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/system-plan/detail/{planId}

**标题**：获取计划下账号信息主键集合

**所属分类**：系统计划 前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `planId` | string | 是 | 计划编号 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/system-plan/join

**标题**：账号加入计划

**所属分类**：系统计划 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，账号加入计划）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `accountId` | string | 否 | 账号id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/system-plan/join/page

**标题**：计划维度账号信息分页列表(计划相关)

**所属分类**：系统计划 前端控制器

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records[0].creatorId` | string | 否 | 创建者 |
| `records[0].createTime` | string | 否 | 创建时间 |
| `records[0].updatorId` | string | 否 | 更新者 |
| `records[0].updateTime` | string | 否 | 更新时间 |
| `records[0].deleted` | string | 否 | 删除标识，0未删 1已删 |
| `records[0].version` | string | 否 | 版本 |
| `records[0].deptId` | string | 否 | - |
| `records[0].params.key` | string | 否 | - |
| `records[0].id` | string | 否 | 关联表主键 |
| `records[0].planId` | string | 否 | 计划主键 |
| `records[0].scheduleId` | string | 否 | 日程主键 |
| `records[0].targetId` | string | 否 | 设备主键或账号主键信息 |
| `records[0].targetValue` | string | 否 | 设备或账号主键 |
| `records[0].state` | string | 否 | 状态
启用：enable
停用：disable
ENABLE :ENABLE
DISABLED :DISABLED |
| `total` | string | 否 | - |
| `size` | string | 否 | - |
| `current` | string | 否 | - |
| `orders[0].column` | string | 否 | - |
| `orders[0].asc` | string | 否 | - |
| `optimizeCountSql` | string | 否 | - |
| `searchCount` | string | 否 | - |
| `optimizeJoinOfCountSql` | string | 否 | - |
| `maxLimit` | string | 否 | - |
| `countId` | string | 否 | - |
| `planId` | string | 是 | 计划编号 |
| `searchValue` | string | 否 | 所属账号/设备 |
| `userId` | string | 否 | 用户id |
| `isAdmin` | string | 否 | 是否管理员 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/system-plan/page

**标题**：计划分页列表

**所属分类**：系统计划 前端控制器

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records[0].creatorId` | string | 否 | 创建者 |
| `records[0].createTime` | string | 否 | 创建时间 |
| `records[0].updatorId` | string | 否 | 更新者 |
| `records[0].updateTime` | string | 否 | 更新时间 |
| `records[0].deleted` | string | 否 | 删除标识，0未删 1已删 |
| `records[0].version` | string | 否 | 版本 |
| `records[0].deptId` | string | 否 | - |
| `records[0].params.key` | string | 否 | - |
| `records[0].id` | string | 否 | 计划主键 |
| `records[0].planName` | string | 否 | 计划名称 |
| `records[0].planScope` | string | 否 | 作用域
PUBLIC :PUBLIC
PRIVATE :PRIVATE |
| `records[0].planState` | string | 否 | 计划状态
PUBLISH :PUBLISH
EXPIRE :EXPIRE
OBSOLETE :OBSOLETE
DRAFT :DRAFT |
| `total` | string | 否 | - |
| `size` | string | 否 | - |
| `current` | string | 否 | - |
| `orders[0].column` | string | 否 | - |
| `orders[0].asc` | string | 否 | - |
| `optimizeCountSql` | string | 否 | - |
| `searchCount` | string | 否 | - |
| `optimizeJoinOfCountSql` | string | 否 | - |
| `maxLimit` | string | 否 | - |
| `countId` | string | 否 | - |
| `planName` | string | 否 | 计划名称 |
| `planScope` | string | 否 | 作用域 |
| `searchValue` | string | 否 | 所属账号/设备 |
| `planState` | string | 否 | 计划状态
PUBLISH :PUBLISH
EXPIRE :EXPIRE
OBSOLETE :OBSOLETE
DRAFT :DRAFT |
| `accountId` | string | 否 | 账号编号 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /social/system-plan/publish

**标题**：一键启停用账号计划

**所属分类**：系统计划 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，启停参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `planAccountState` | enum(ENABLE/DISABLED) | 否 | 启用/停用 |
| `rlts` | array<object> | 否 | 计划下关联关系主键集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /social/system-plan/quit

**标题**：解除账号加入计划

**所属分类**：系统计划 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，账号计划参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `accountId` | string | 否 | 账号id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/system-plan/update

**标题**：更新计划信息

**所属分类**：系统计划 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，计划更新参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `planId` | string | 否 | 计划主键编号 |
| `planName` | string | 否 | 计划名称 |
| `accountId` | string | 否 | 账号编号 |
| `planScope` | enum(PUBLIC/PRIVATE) | 否 | 作用域 |
| `planState` | enum(PUBLISH/EXPIRE/OBSOLETE/DRAFT) | 否 | 状态 |
| `accIds` | array<string> | 否 | 账号下创建日程绑定 |
| `delScheduleIds` | array<string> | 否 | 删除的日程编号集合 |
| `taskSchedules` | array<object> | 否 | 任务日程信息 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | string | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 字典管理

### GET /social/dict/pull

**标题**：获取字典，查询指定的字典及其子集

**所属分类**：字典管理

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | string | 否 | 字典代码，非必填，为空查全部 |
| `view` | string | 否 | - |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/dict/pull-array

**标题**：获取字典，查询指定的字典及其子集

**所属分类**：字典管理

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | string | 否 | 字典代码，非必填，为空查全部 |
| `locale` | string | 否 | 语言环境，可选参数，默认使用当前请求的语言环境 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/dict/pull/0

**标题**：获取字典，查询全部0级的字典，包含子集

**所属分类**：字典管理

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 任务标签控制器

### GET /social/tag/list

**标题**：查询任务标签集合

**所属分类**：任务标签控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 消息队列管理

### GET /social/sms/page

**标题**：获取当前用户未读消息（分页）

**所属分类**：消息队列管理

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records[0].creatorId` | string | 否 | 创建者 |
| `records[0].createTime` | string | 否 | 创建时间 |
| `records[0].updatorId` | string | 否 | 更新者 |
| `records[0].updateTime` | string | 否 | 更新时间 |
| `records[0].deleted` | string | 否 | 删除标识，0未删 1已删 |
| `records[0].version` | string | 否 | 版本 |
| `records[0].deptId` | string | 否 | - |
| `records[0].params.key` | string | 否 | - |
| `records[0].notifyId` | string | 否 | 消息主键 |
| `records[0].author` | string | 否 | 消息发布者 |
| `records[0].messageTitle` | string | 否 | 消息标题 |
| `records[0].messageDesc` | string | 否 | 消息简介 |
| `records[0].messageContent` | string | 否 | 消息正文 |
| `records[0].messageState` | string | 否 | 消息状态 READ:已读 UNREAD:未读
READ :READ
UNREAD :UNREAD |
| `records[0].messageType` | string | 否 | 消息类型 system:系统 user: 用户 |
| `records[0].notifyType` | string | 否 | 通知方式，local:本地通知 email：邮件通知 sms：短信通知 |
| `records[0].notifyUser` | string | 否 | 被通知人 |
| `records[0].pushTime` | string | 否 | 发布时间 |
| `records[0].failedFile` | string | 否 | 登录失败账号信息文件 |
| `total` | string | 否 | - |
| `size` | string | 否 | - |
| `current` | string | 否 | - |
| `orders[0].column` | string | 否 | - |
| `orders[0].asc` | string | 否 | - |
| `optimizeCountSql` | string | 否 | - |
| `searchCount` | string | 否 | - |
| `optimizeJoinOfCountSql` | string | 否 | - |
| `maxLimit` | string | 否 | - |
| `countId` | string | 否 | - |
| `messageState` | string | 否 | 消息状态 READ:已读 UNREAD:未读
READ :READ
UNREAD :UNREAD |
| `notifyUser` | string | 否 | 当前用户编号（非必填，默认当前用户） |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/sms/read/{smsId}

**标题**：单条消息已读（标记为已读，若消息携带失败文件则一并下载）

**所属分类**：消息队列管理

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `smsId` | string | 是 | 消息id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /social/sms/read/all

**标题**：清除某用户下全部未读消息

**所属分类**：消息队列管理

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## AI插件分组管理前端控制器

### POST /social/ai-plugin-group/list

**标题**：查询插件分组列表

**所属分类**：AI插件分组管理前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，查询条件）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `groupName` | string | 否 | 分组名称 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /social/ai-plugin-group/remove

**标题**：移除插件分组

**所属分类**：AI插件分组管理前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，插件分组信息）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `groupId` | string | 否 | 分组id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /social/ai-plugin-group/update

**标题**：修改插件分组名称

**所属分类**：AI插件分组管理前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，插件分组信息）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `groupId` | string | 否 | 插件组id |
| `groupName` | string | 否 | 插件组名称 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 调度中心控制器

### POST /social/dispatch/add

**标题**：新增项目

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，新增项目参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `projectName` | string | 否 | 项目名称 |
| `business` | enum(LIVE_ROOM_OPERATION) | 否 | 业务场景 直播间运维/社媒内容分发/聊天群聊维护 |
| `appId` | string | 否 | 应用ID |
| `appName` | string | 否 | 平台名称 |
| `targetUrl` | string | 否 | 目标URL |
| `startTime` | string | 否 | 开始时间 |
| `endTime` | string | 否 | 结束时间 |
| `priority` | enum(HIGH/MIDDLE/LOW) | 否 | 优先级 高/中/低 |
| `deviceScope` | integer | 否 | 设备范围(设备数量) |
| `deviceIds` | array<string> | 否 | 设备ID集合 |
| `anchorId` | string | 否 | 主播号 |
| `anchorName` | string | 否 | 主播名称（传给 RPA 脚本作为变量） |
| `audienceListCapture` | boolean | 否 | 直播间观众清单抓取开关：开启=true / 关闭=false（默认）。 {@code ClueConvertDispatchJob} 在派单循环中读取，任一开关开启才触发脚本派单； 默认两个开关都是关闭（false），与"新增项目表单里默认全部为"否""对齐。 |
| `commentUserCapture` | boolean | 否 | 直播间评论用户抓取开关：开启=true / 关闭=false（默认）。 |
| `liveRoomOverCountdownMinutes` | integer | 否 | 直播间结束倒计时分钟数，默认 15。可空，null 时按 15 入库。 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | string | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/dispatch/addEvent

**标题**：新增事件

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，事件新增参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `projectId` | string | 否 | 关联项目ID |
| `eventName` | string | 否 | 事件名称 |
| `deviceAssignMode` | enum(RANDOM_DEVICE) | 否 | 设备指派模式 (对应下拉框，如：RANDOM_DEVICE, SPECIFIC_DEVICE) |
| `devices` | array<object> | 否 | 设备列表（含 deviceId + deviceIp） |
| `executeCount` | integer | 否 | 执行数量 |
| `entryRhythm` | enum(S_SHAPE/LINEAR/PULSE/IMMEDIATELY) | 否 | 入场节奏 |
| `exitRhythm` | enum(NATURAL_DECAY/LINEAR_EXIT/DIRECT_EXIT) | 否 | 离场节奏 |
| `operationFrequency` | enum(HIGH_FREQ/MED_FREQ/LOW_FREQ/CUSTOM) | 否 | 单台操作频率 |
| `customOperationFrequency` | string | 否 | 自定义单台操作频率 |
| `actionFailureRate` | number | 否 | 动作失败率阈值 |
| `blockStrategy` | enum(GLOBAL_PAUSE/GLOBAL_EXIT) | 否 | 熔断策略 (可定义为 String 或对应的枚举) |
| `deviceExclusion` | boolean | 否 | 设备排除 (开关) |
| `abnormalDeviceRecord` | boolean | 否 | 异常设备记录 (开关) |
| `interactionMode` | enum(PULSE/RANDOM) | 否 | 互动模式 |
| `interactionIntimacy` | integer | 否 | 互动亲密(条/min) |
| `topicControl` | object | 否 | 话题控制台 |
| `matchTag` | enum(WEIGHT_MATCH/FORCE_LOCK) | 否 | 匹配标签 |
| `topicDeviceType` | string | 否 | 设备类型 |
| `topicDeviceAssign` | string | 否 | 设备指定 |
| `expansionMode` | enum(MAX_CYCLE/CONTINUOUS_RANDOM) | 否 | 扩容模式 |
| `topicPoolType` | enum(MANUAL_EDIT/SYNONYM_REPLACE/AI_DYNAMIC_COMMENT) | 否 | 预设话题池类型 |
| `topicPool` | array<string> | 否 | 预设话题池 |
| `topics` | array<object> | 否 | 话题配置列表（含权重、话术等） |
| `executeCycle` | enum(CUSTOM_TIME/EXECUTE_UNTIL_DONE) | 否 | 执行周期 |
| `customCycle` | string | 否 | 自定义周期 |
| `startTime` | string | 否 | 事件开始时间 |
| `endTime` | string | 否 | 事件结束时间 |
| `appId` | string | 否 | 应用ID |
| `programId` | string | 否 | 任务功能id |
| `taskData` | object | 否 | 任务数据 |
| `track` | string | 否 | 事件轨道 |
| `eventStatus` | string | 否 | 事件状态 |
| `totalDevices` | integer | 否 | 设备总数 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/dispatch/allocate

**标题**：分配挂载

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，项目分配参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `projectId` | string | 否 | 项目id |
| `deviceIds` | array<string> | 否 | 设备id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/dispatch/batchUpdateEvent

**标题**：批量编辑事件

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，批量事件更新参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `projectId` | string | 否 | 项目ID |
| `events` | array<object> | 否 | 批量更新事件 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/dispatch/checkLabelDevice

**标题**：校验标签设备

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，标签设备校验参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `tagIds` | array<string> | 否 | 标签ID |
| `deviceIds` | array<string> | 否 | 设备id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/dispatch/clearEvent

**标题**：一键清空事件

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，项目参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `projectId` | string | 否 | 项目ID |
| `liveRoomOverCountdownMinutes` | integer | 否 | 倒计时时间 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/dispatch/clearScreenDominance

**标题**：取消霸屏

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，事件参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `eventId` | string | 否 | 事件ID |
| `topicId` | string | 否 | 话题id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/dispatch/continue

**标题**：事件继续

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，事件参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `eventId` | string | 否 | 事件ID |
| `topicId` | string | 否 | 话题id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/dispatch/continueProject

**标题**：项目继续

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，项目参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `projectId` | string | 否 | 项目ID |
| `liveRoomOverCountdownMinutes` | integer | 否 | 倒计时时间 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/dispatch/dataStatistics

**标题**：数据统计

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，项目参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `projectId` | string | 否 | 项目ID |
| `liveRoomOverCountdownMinutes` | integer | 否 | 倒计时时间 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /social/dispatch/delete

**标题**：删除项目

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，项目删除参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `projectId` | string | 否 | 项目ID |
| `liveRoomOverCountdownMinutes` | integer | 否 | 倒计时时间 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /social/dispatch/deleteEvent

**标题**：删除事件

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，事件删除参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `eventId` | string | 否 | 事件ID |
| `topicId` | string | 否 | 话题id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/dispatch/detail

**标题**：项目详情

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，项目详情查询参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `projectId` | string | 否 | 项目ID |
| `liveRoomOverCountdownMinutes` | integer | 否 | 倒计时时间 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/dispatch/device/disable

**标题**：人工调度禁用设备（批量）。

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `projectId` | integer | 否 | 项目 ID（可选，决定禁用作用域）。   非空：项目级禁用，设备仅在该项目不可调度；   为空：全局禁用，设备在所有项目都不可调度（扇出全部项目池行 + 全局标记）。 |
| `deviceIds` | array<string> | 否 | 设备 ID 列表（必填，支持批量） |
| `reason` | string | 否 | 禁用/启用原因（可选，用于日志记录） |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |

**说明**

标记设备为调度禁用，调度中心筛选设备时默认排除该设备。
立即设置 accountStatus=DISABLED + Redis Set 标记人工禁用来源；
在途任务不主动取消（自然完成），新任务不再分配。


### POST /social/dispatch/device/enable

**标题**：取消调度禁用设备（批量）。

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `projectId` | integer | 否 | 项目 ID（可选，决定禁用作用域）。   非空：项目级禁用，设备仅在该项目不可调度；   为空：全局禁用，设备在所有项目都不可调度（扇出全部项目池行 + 全局标记）。 |
| `deviceIds` | array<string> | 否 | 设备 ID 列表（必填，支持批量） |
| `reason` | string | 否 | 禁用/启用原因（可选，用于日志记录） |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |

**说明**

仅取消"人工禁用"的设备，恢复 accountStatus=IDLE。
风控禁用和设备物理锁定不受影响。


### PUT /social/dispatch/edit

**标题**：编辑项目

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，项目编辑参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `projectId` | string | 否 | 项目ID |
| `projectName` | string | 否 | 项目名称 |
| `business` | enum(LIVE_ROOM_OPERATION) | 否 | 业务场景 直播间运维/社媒内容分发/聊天群聊维护 |
| `appId` | string | 否 | 应用ID |
| `appName` | string | 否 | 平台名称 |
| `targetUrl` | string | 否 | 目标URL |
| `startTime` | string | 否 | 开始时间 |
| `endTime` | string | 否 | 结束时间 |
| `priority` | enum(HIGH/MIDDLE/LOW) | 否 | 优先级 高/中/低 |
| `projectStatus` | enum(CONFIGURING/EXECUTING/FINISHED/PAUSED) | 否 | 项目状态 配置中/执行中/已结束 |
| `deviceScope` | integer | 否 | 设备范围(设备数量) |
| `minStartBase` | integer | 否 | 最小启动基数 |
| `maxConcurrent` | integer | 否 | 最大并发上线 |
| `deviceIds` | array<string> | 否 | 设备ID集合（新增设备） |
| `removeDeviceIds` | array<string> | 否 | 待移除的设备ID集合 |
| `anchorId` | string | 否 | 主播号 |
| `anchorName` | string | 否 | 主播名称（传给 RPA 脚本作为变量） |
| `audienceListCapture` | boolean | 否 | 直播间观众清单抓取开关：开启=true / 关闭=false。 入参{@code null} 时沿用库中现值（与{@code ProjectEditDTO} 其它字段一致，由 {@code BeanUtil.toBean} 跳过{@code null} 字段，仅在显式传 true/false 时覆盖）。 |
| `commentUserCapture` | boolean | 否 | 直播间评论用户抓取开关：开启=true / 关闭=false。 |
| `liveRoomOverCountdownMinutes` | integer | 否 | 直播间结束倒计时分钟数，默认 15。可空 —— null 时不更新（沿用库中现值）。 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/dispatch/eventTerminated

**标题**：事件终止

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，事件参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `eventId` | string | 否 | 事件ID |
| `topicId` | string | 否 | 话题id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/dispatch/exportBriefing

**标题**：项目执行简报导出（5-sheet xlsx）。

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `projectId` | integer | 否 | 项目 ID（social_dispatch_project.id） |

**说明**

模板结构参考{@code XXX项目简报_20280807.xlsx}：

    项目总览（KV：项目名/业务/平台/链接/服务时间/执行时长/设备/账号/地区/进场模式/互动数/话题数/评论数/线索数）

    矩阵在线时长（按账号入场/退场 + 在线时长）

    矩阵评论明细（评论派单记录 —{@code social_dispatch_comment_record}）

    线索-直播观众（Redis Set channel=online_user 按 unique_id 聚合查询次数）

    线索-互动观众（Redis Set channel=live_comment）

异常时直接抛出由全局异常处理接管，避免写出半成品 xlsx。

文件名："{项目名称}_项目简报_YYYYMMDD.xlsx"；项目名为空时 fallback 到"未命名项目"。


### POST /social/dispatch/exportScreenshot

**标题**：项目截图记录导出（zip 包，按{@code 项目名/设备IP/任务名/logId_序号_原文件名} 目录组织）。

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `projectId` | integer | 否 | 项目 ID（social_dispatch_project.id） |

**说明**

数据流：social_dispatch_project → social_system_task（projectId 过滤）→
social_system_task_log（ai_log/ai_photos 非空）→ ai_photos（即 taskPics）每张图
从 MinIO 拉原图字节流后打包进 ZIP；不再生成 Excel。

拉取失败 / 空 fileKey 的图直接跳过；存在任意失败时 ZIP 根目录额外写一份
{@code _MANIFEST.txt} 汇总失败清单，便于后续追溯或重试。

响应头：{@code Content-Type=application/zip} +{@code Content-Disposition} 携带
URL 编码后的中文文件名（避免 ExcelContextUtil 自动追加{@code .xlsx} 后缀）。


### POST /social/dispatch/getDevicePool

**标题**：获取待命池设备

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，项目设备查询参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records` | array<object> | 否 | - |
| `total` | integer | 否 | - |
| `size` | integer | 否 | - |
| `current` | integer | 否 | - |
| `orders` | array<object> | 否 | - |
| `optimizeCountSql` | boolean | 否 | - |
| `searchCount` | boolean | 否 | - |
| `optimizeJoinOfCountSql` | boolean | 否 | - |
| `maxLimit` | integer | 否 | - |
| `countId` | string | 否 | - |
| `projectId` | string | 否 | 项目ID |
| `accountStatus` | enum(IDLE/ACTIVE/QUEUE/DISABLED/EXCEPTION) | 否 | 账号状态 空闲 蓝色/活动中 绿色/队列中 黄色/禁用 灰色/异常状态 红色 |
| `eventId` | string | 否 | 事件ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/dispatch/getDeviceStatusNum

**标题**：获取设备状态数量

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，项目设备查询参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records` | array<object> | 否 | - |
| `total` | integer | 否 | - |
| `size` | integer | 否 | - |
| `current` | integer | 否 | - |
| `orders` | array<object> | 否 | - |
| `optimizeCountSql` | boolean | 否 | - |
| `searchCount` | boolean | 否 | - |
| `optimizeJoinOfCountSql` | boolean | 否 | - |
| `maxLimit` | integer | 否 | - |
| `countId` | string | 否 | - |
| `projectId` | string | 否 | 项目ID |
| `accountStatus` | enum(IDLE/ACTIVE/QUEUE/DISABLED/EXCEPTION) | 否 | 账号状态 空闲 蓝色/活动中 绿色/队列中 黄色/禁用 灰色/异常状态 红色 |
| `eventId` | string | 否 | 事件ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/dispatch/list

**标题**：项目集合

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，项目列表查询参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `projectName` | string | 否 | 项目名称 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/dispatch/liveOverContinue

**标题**：直播间结束"继续"接口 —— 前端在收到 WS 推送的{@code isOver=true} 时弹框，

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `projectId` | string | 否 | 项目ID |
| `liveRoomOverCountdownMinutes` | integer | 否 | 倒计时时间 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | boolean | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |

**说明**

用户选择"继续"则调用本接口重新倒计时 15 分钟（不会立即终止项目）。

行为：

    DEL 旧的[cn.callfans.social.api.config.api.utils.RedisKeyUtils#LIVE_ROOM_OVER_COUNTDOWN(直播间结束倒计时 key。

当 WaterLevelWebSocketHandler 在{@link #LIVE_ROOM_VIEWER_COUNT} 读到最新一条
{@code isOver=true} 时，会在 key 不存在的情况下写入该 key，value = 首次触发时间戳（毫秒）。

    前端调用"继续"接口 → DEL 该 key + SET{@link #LIVE_ROOM_OVER_CONTINUE} 标记，倒计时取消且后续推送不再复活；

    {@code LiveRoomOverCountdownJob} 每分钟扫描该 key：距首次触发 ≥ 项目配置的 liveRoomOverCountdownMinutes → 终止项目。

TTL 策略：

    {@code DispatchController.liveOverContinue}（继续接口）写入时按 dto.getLiveRoomOverCountdownMinutes()
        × 60s + 90s 缓冲 设置 TTL。90s 缓冲用于覆盖{@code LiveRoomOverCountdownJob} 每分钟第 0 秒
        跑的扫描周期，确保 TTL 到期前 Job 仍能扫到 key 并触发 terminate（避免 1 分钟项目
        在 :00 那一轮 TTL 刚过期、Job 扫不到的情况）。dto 无效值 / DB 无配置时不会
        fallback 15，会直接报错给前端（保证用户配的 1 分钟不会被静默放大成 15）。

    {@code WaterLevelWebSocketHandler.attachLiveRoomOverFlag}（WS 自动写入）不设 TTL，保留原始时间戳
        便于 Job 精确判断过期，终止完成后由 Job 主动 DEL；项目配置的 liveRoomOverCountdownMinutes 可为任意分钟数
        （包括 1~14），Job 不再有"小窗口项目永不终止"的硬编码 15 分钟问题（见
        {@code LiveRoomOverCountdownJob.handleKey} 注释）。

)] 倒计时 key
        （取消首轮 15 分钟倒计时）；

    SET[cn.callfans.social.api.config.api.utils.RedisKeyUtils#LIVE_ROOM_OVER_CONTINUE(直播间结束"用户已确认继续"标记 key。

由{@code DispatchController.liveOverContinue} 在 DEL 倒计时 key 时同步写入；
WaterLevelWebSocketHandler 读到{@code isOver=true} 时若发现该 key 存在，则
不重新写入倒计时 key、不输出{@code isOver=true}，避免用户点过"继续"
后又被下一分钟推送"复活"。

生命周期：

    SET：继续接口被调用时（无 TTL，长期标记直至外部解除结束态）；

    DEL：WS 读到{@code isOver=false}（外部清除结束态）时同步清理；DEL 时也兜底清掉
        {@link #LIVE_ROOM_OVER_COUNTDOWN}，避免脏数据残留。

)] = "1"
        （标记用户已确认，继续期间不再输出{@code isOver=true}）；

    SET 新的[cn.callfans.social.api.config.api.utils.RedisKeyUtils#LIVE_ROOM_OVER_COUNTDOWN(直播间结束倒计时 key。

当 WaterLevelWebSocketHandler 在{@link #LIVE_ROOM_VIEWER_COUNT} 读到最新一条
{@code isOver=true} 时，会在 key 不存在的情况下写入该 key，value = 首次触发时间戳（毫秒）。

    前端调用"继续"接口 → DEL 该 key + SET{@link #LIVE_ROOM_OVER_CONTINUE} 标记，倒计时取消且后续推送不再复活；

    {@code LiveRoomOverCountdownJob} 每分钟扫描该 key：距首次触发 ≥ 项目配置的 liveRoomOverCountdownMinutes → 终止项目。

TTL 策略：

    {@code DispatchController.liveOverContinue}（继续接口）写入时按 dto.getLiveRoomOverCountdownMinutes()
        × 60s + 90s 缓冲 设置 TTL。90s 缓冲用于覆盖{@code LiveRoomOverCountdownJob} 每分钟第 0 秒
        跑的扫描周期，确保 TTL 到期前 Job 仍能扫到 key 并触发 terminate（避免 1 分钟项目
        在 :00 那一轮 TTL 刚过期、Job 扫不到的情况）。dto 无效值 / DB 无配置时不会
        fallback 15，会直接报错给前端（保证用户配的 1 分钟不会被静默放大成 15）。

    {@code WaterLevelWebSocketHandler.attachLiveRoomOverFlag}（WS 自动写入）不设 TTL，保留原始时间戳
        便于 Job 精确判断过期，终止完成后由 Job 主动 DEL；项目配置的 liveRoomOverCountdownMinutes 可为任意分钟数
        （包括 1~14），Job 不再有"小窗口项目永不终止"的硬编码 15 分钟问题（见
        {@code LiveRoomOverCountdownJob.handleKey} 注释）。

)] = 当前时间戳
        （重启倒计时：距 now 15 分钟后才会被 Job 终止）；

    调[cn.callfans.social.api.config.server.impl.dispatch.strategy.WaterLevelLogPersistenceService#persistContinue(java.lang.Long,java.lang.String)(直播间结束"继续"事件入库 —— 由{@code DispatchController.liveOverContinue} 调用。)]：
        内部 INSERT 一条仅含{@code continue_time} 的水位日志行 + 发布
        {@code WaterLevelPushEvent} 事件推 WS（与{@code persistOneMinute}
        写库后发{@code DispatchEventChangedEvent} 模式一致）。

仅接收[cn.callfans.social.api.config.api.dto.dispatch.ProjectDelOrQueryDTO#projectId(项目ID
)]。


### POST /social/dispatch/page

**标题**：项目分页

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，项目分页查询参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records` | array<object> | 否 | - |
| `total` | integer | 否 | - |
| `size` | integer | 否 | - |
| `current` | integer | 否 | - |
| `orders` | array<object> | 否 | - |
| `optimizeCountSql` | boolean | 否 | - |
| `searchCount` | boolean | 否 | - |
| `optimizeJoinOfCountSql` | boolean | 否 | - |
| `maxLimit` | integer | 否 | - |
| `countId` | string | 否 | - |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/dispatch/pauseProject

**标题**：项目暂停

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `projectId` | string | 否 | 项目ID |
| `liveRoomOverCountdownMinutes` | integer | 否 | 倒计时时间 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |

**说明**

设备状态差异化调整（异步段处理）：
EXCEPTION 设备不动；ACTIVE 设备按本项目 FAIL/TIMEOUT 任务数决定 →
EXCEPTION / → IDLE；IDLE/QUEUE/DISABLED 设备不动。


### POST /social/dispatch/pauseTask

**标题**：暂停任务

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，任务停止参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `rapTaskId` | string | 否 | rpa执行id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/dispatch/queryDevice

**标题**：根据项目查询所绑定的设备

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `projectId` | string | 否 | 项目ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/dispatch/queryDevicePool

**标题**：查询设备

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records` | array<object> | 否 | - |
| `total` | integer | 否 | - |
| `size` | integer | 否 | - |
| `current` | integer | 否 | - |
| `orders` | array<object> | 否 | - |
| `optimizeCountSql` | boolean | 否 | - |
| `searchCount` | boolean | 否 | - |
| `optimizeJoinOfCountSql` | boolean | 否 | - |
| `maxLimit` | integer | 否 | - |
| `countId` | string | 否 | - |
| `projectId` | string | 否 | 项目id |
| `appId` | string | 否 | 应用id |
| `condition` | string | 否 | 条件(支持 设备编号,设备分组，设备ip，用户名称，用户昵称) |
| `deviceStatus` | enum(ONLINE/OFFLINE) | 否 | 设备状态 |
| `eventTaskStatus` | enum(BE_EXECUTED/IN_EXECUTION/SUCCESS/FAIL/CANCEL/IN_QUEUE/TIMEOUT) | 否 | 任务状态 |
| `tagId` | array<string> | 否 | 标签id集合 |
| `healthFilter` | boolean | 否 | 健康过滤。默认关闭：开启后会 fork curl + adb 在 parallelStream 内做冷路径探测, 重启后第一次查询因为 libc / ForkJoinPool / TLS 链路冷启动全 false → 0 条返回。 默认 false 让列表页直接拿结果,需要时前端显式传 true。 |
| `deviceIds` | array<string> | 否 | 设备id集合 |
| `eventProjectId` | string | 否 | 事件关联项目id |
| `suiteIds` | array<string> | 否 | 分组id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |

**说明**

默认按当前登录用户维度过滤账号：先查{@code social_user_account} 得到该用户分配的账号集，
再用账号去收窄设备池；管理员（userId = 1L）跳过此过滤，看全部账号对应设备。
userId 由 Service 端通过{@code SecurityUtils.getUserId()} 直接读取 —— 不走 DTO，避免外部伪造越权。


### POST /social/dispatch/queryDevicePoolByEvent

**标题**：根据事件查询设备待命池列表

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，项目设备查询参数（按事件过滤））

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records` | array<object> | 否 | - |
| `total` | integer | 否 | - |
| `size` | integer | 否 | - |
| `current` | integer | 否 | - |
| `orders` | array<object> | 否 | - |
| `optimizeCountSql` | boolean | 否 | - |
| `searchCount` | boolean | 否 | - |
| `optimizeJoinOfCountSql` | boolean | 否 | - |
| `maxLimit` | integer | 否 | - |
| `countId` | string | 否 | - |
| `eventId` | string | 否 | 事件id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/dispatch/queryDevicePoolLabel

**标题**：查询设备池标签

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，项目参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `projectId` | string | 否 | 项目ID |
| `liveRoomOverCountdownMinutes` | integer | 否 | 倒计时时间 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/dispatch/queryEventList

**标题**：查询事件列表

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，事件查询参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `projectId` | string | 否 | - |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/dispatch/queryProjectConfig

**标题**：查询项目配置字段

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，项目参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `projectId` | string | 否 | 项目ID |
| `liveRoomOverCountdownMinutes` | integer | 否 | 倒计时时间 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/dispatch/queryProjectTime

**标题**：查询项目执行时间

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，项目参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `projectId` | string | 否 | 项目ID |
| `liveRoomOverCountdownMinutes` | integer | 否 | 倒计时时间 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/dispatch/refreshRunCount

**标题**：刷新运行次数

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，项目刷新参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `projectId` | string | 否 | 项目id |
| `deviceId` | string | 否 | 设备id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | string | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /social/dispatch/removeTask

**标题**：移除任务

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，移除任务参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `projectId` | string | 否 | 项目id |
| `deviceIds` | array<string> | 否 | 设备ID集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /social/dispatch/removeWaterLevelStep

**标题**：移除单个水位阶梯点 —— 按子表 social_dispatch_water_level_config_det 主键 ID 逻辑删除。

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | integer | 否 | 子表 social_dispatch_water_level_config_det 主键 id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |

**说明**

幂等：id 不存在或已删除均视为成功。前端调用后建议重新调 detail 接口刷新 waterLevelSteps。


### POST /social/dispatch/revokeEvent

**标题**：撤回最近一次操作

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，项目参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `projectId` | string | 否 | 项目ID |
| `liveRoomOverCountdownMinutes` | integer | 否 | 倒计时时间 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/dispatch/screenDominance

**标题**：霸屏操作

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，事件参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `eventId` | string | 否 | 事件ID |
| `topicId` | string | 否 | 话题id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/dispatch/start

**标题**：项目开始

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，项目参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `projectId` | string | 否 | 项目ID |
| `liveRoomOverCountdownMinutes` | integer | 否 | 倒计时时间 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/dispatch/stop

**标题**：事件暂停

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，事件参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `eventId` | string | 否 | 事件ID |
| `topicId` | string | 否 | 话题id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/dispatch/terminate

**标题**：紧急终止

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，项目参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `projectId` | string | 否 | 项目ID |
| `liveRoomOverCountdownMinutes` | integer | 否 | 倒计时时间 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/dispatch/unbind

**标题**：事件和设备解绑

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，解绑参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `eventId` | string | 否 | 事件id |
| `deviceId` | string | 否 | 设备id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/dispatch/updateEvent

**标题**：修改事件

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，事件更新参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `eventId` | string | 否 | 事件ID |
| `eventName` | string | 否 | 事件名称 |
| `startTime` | string | 否 | 开始 时间 |
| `endTime` | string | 否 | 结束 时间 |
| `programId` | string | 否 | 功能id |
| `executeCount` | integer | 否 | 执行次数 |
| `devices` | array<object> | 否 | 设备列表（含 deviceId + deviceIp） |
| `taskData` | object | 否 | 任务数据 |
| `track` | string | 否 | 轨迹 |
| `deviceAssignMode` | enum(RANDOM_DEVICE) | 否 | 设备分配模式 |
| `entryRhythm` | enum(S_SHAPE/LINEAR/PULSE/IMMEDIATELY) | 否 | 入口模式 |
| `exitRhythm` | enum(NATURAL_DECAY/LINEAR_EXIT/DIRECT_EXIT) | 否 | 出口模式 |
| `operationFrequency` | enum(HIGH_FREQ/MED_FREQ/LOW_FREQ/CUSTOM) | 否 | 操作频率 |
| `customOperationFrequency` | string | 否 | 自定义操作频率 |
| `actionFailureRate` | number | 否 | 行为失败率 |
| `blockStrategy` | enum(GLOBAL_PAUSE/GLOBAL_EXIT) | 否 | 屏蔽策略 |
| `deviceExclusion` | boolean | 否 | 设备排除 |
| `abnormalDeviceRecord` | boolean | 否 | 异常设备记录 |
| `interactionMode` | string | 否 | 互动模式 |
| `interactionIntimacy` | integer | 否 | 互动亲密度 |
| `topicControl` | object | 否 | 互动数量 |
| `matchTag` | enum(WEIGHT_MATCH/FORCE_LOCK) | 否 | 匹配标签 |
| `topicDeviceType` | string | 否 | 匹配标签数量 |
| `topicDeviceAssign` | string | 否 | 设备分配 |
| `expansionMode` | string | 否 | 扩容模式 |
| `topicPoolType` | enum(MANUAL_EDIT/SYNONYM_REPLACE/AI_DYNAMIC_COMMENT) | 否 | 扩容数量 |
| `topicPool` | array<string> | 否 | 扩容标签 |
| `topics` | array<object> | 否 | 话题配置列表（含权重、话术等） |
| `executeCycle` | enum(CUSTOM_TIME/EXECUTE_UNTIL_DONE) | 否 | 执行周期 |
| `customCycle` | string | 否 | 自定义执行周期 |
| `eventStatus` | string | 否 | 事件状态 |
| `totalDevices` | integer | 否 | 设备总数 |
| `isScreenDominance` | boolean | 否 | 是否霸屏 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/dispatch/updateWaterLevel

**标题**：修改水位

**所属分类**：调度中心控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，水位更新参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `projectId` | string | 否 | 项目ID |
| `waterLevel` | integer | 否 | 水位 单值场景：{@link #waterLevelSteps} 为空时，本字段作为"立即生效"的单阶梯点水位写入 det 子表， {@code timePoint} 兜底为当前时间。 |
| `slope` | integer | 否 | 坡度 |
| `programId` | string | 否 | 功能id |
| `entryMode` | enum(NATURAL_ENTRY/DIRECT_ENTRY/SEARCH_ENTRY/SMART_MIXED) | 否 | 进入模式 控制水位入场路径的来源策略：自然进入 / 直接进入 / 搜索进入 / 智能混合。 缺省时由调用方回填为{@link EntryModeEnum#SMART_MIXED}。 |
| `peak` | integer | 否 | 水位峰值上限 —— 直播间当前人数达到该值后,水位入场自动停止触发。 与{@link #slope} 同属项目级固定配置。{@code null} 表示不更新(保留主表现有值); 显式传{@code 0} 表示清空峰值上限(回到无上限默认行为)。 |
| `waterLevelSteps` | array<object> | 否 | 多组水位子表数据 —— 可选。 非空时作为阶梯点位列表写入 det 子表（timePoint + waterLevel）， {@link #waterLevel} 字段被忽略。空时回退到{@link #waterLevel} 单值兼容路径。 与{@link DispatchWaterLevelStepsUpdateDTO#getSteps()} 类型一致（共享{@link WaterLevelStep}）， 这样单值 DTO 与阶梯 DTO 可在同一调用方代码里通用。 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 矩阵总览前端控制器(迁移到 social 模块)。

### GET /social/workstation/matrix/chip-tree

**标题**：芯片类型 → 节点 二级菜单(矩阵总览筛选条件下拉 / 级联选择数据源)。

**所属分类**：矩阵总览前端控制器(迁移到 social 模块)。

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `chip` | string | 否 | 可选,按  过滤单个芯片类型;不传 = 全量
ARM_3588 :ARM_3588
ARM_3399 :ARM_3399
REAL_MOBILE :REAL_MOBILE
C_ARM_392000 :小红书机器
AIBOX_L02 :百度盒子 ARM_3588 :ARM_3588
ARM_3399 :ARM_3399
REAL_MOBILE :REAL_MOBILE
C_ARM_392000 :小红书机器
AIBOX_L02 :百度盒子 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |

**说明**

前端在矩阵总览页面打开时一次性调用,缓存为下拉数据;用户多选节点后把
选中的 id 数组回填到[cn.callfans.social.api.config.api.req.OverviewQueryDTO#setChipNodeIds(java.util.List)]。
不传{@code chip} → 返回 5 个芯片类型({@code nodes} 可能为空数组);
传{@code chip} → 只返回该 chip 的一项(用于"选中芯片后再异步加载节点"的场景,
但本接口一次性返回全量,前端可缓存复用,不需要二次请求)。


### POST /social/workstation/matrix/device-selector

**标题**：项目矩阵总览 · 设备选择面板预览 —— "取消选择/下一步操作"弹窗的数据源。

**所属分类**：矩阵总览前端控制器(迁移到 social 模块)。

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，设备选择查询参数:

deviceIds — 设备 ID 集合(List);可空,空时返回空面板）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceIds` | array<string> | 否 | 设备 ID 集合(从矩阵分页查出来的那批设备)。 空集合 = 不返回设备,只返回空 chip × slot 网格。 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |

**说明**

根据入参的设备 ID 集合,返回顶部统计(已选 / 可用 / 不可用 / 上一次任务失败 /
该范围最大并发)+ chip × slot 网格。无副作用(不持久化),纯查询接口。
智能补选逻辑独立接口处理。


### POST /social/workstation/matrix/device-selector/fill

**标题**：项目矩阵总览 · 设备选择面板 · 智能补选。

**所属分类**：矩阵总览前端控制器(迁移到 social 模块)。

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，补选请求:

deviceIds — 已选设备 ID(List)

fillCount — 目标总数(=已选 + 补选)）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceIds` | array<string> | 否 | 当前已选设备 ID 集合(来自{@code /device-selector} 查询接口的结果)。 补选范围 = "全库可用设备" - 此集合。 |
| `fillCount` | integer | 否 | 目标总数 = 已选 + 补选。   {@code {@code > \|deviceIds\|} → 补足到该数   {@code |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |

**说明**

基于"已选 + 目标总数"从全库可用设备中按"可用 → 不同芯片分散 → 芯片并发上限"
的优先级补到{@code fillCount} 台,返回"已选 + 补选"两份 ID 集合。
无副作用(不持久化),纯计算接口。


### GET /social/workstation/matrix/devices/{id}

**标题**：单台设备详情(右栏)。

**所属分类**：矩阵总览前端控制器(迁移到 social 模块)。

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 是 | 设备主键(路径参数,Long) |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/workstation/matrix/networks

**标题**：筛选字典:网络地区(来自 social_mobile_network 按 area 聚合)。

**所属分类**：矩阵总览前端控制器(迁移到 social 模块)。

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `keyword` | string | 否 | 可选关键字,对 area 做 LIKE 过滤 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/workstation/matrix/page

**标题**：矩阵总览分页查询。

**所属分类**：矩阵总览前端控制器(迁移到 social 模块)。

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，矩阵总览查询入参,字段全部平铺(displayMode / keyword / chipId /
chipNodeIds / mirrorRegion / availability / taskStatus / appId / accountRisk /
armChips / loginStatus / accountTags / networkRegions /
userName / suiteIds / deviceIds / suiteId / suiteName /
deviceStatuses / deviceIdx,以及 current/size 分页参数)。可空,空时按默认行为处理。）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records` | array<object> | 否 | - |
| `total` | integer | 否 | - |
| `size` | integer | 否 | - |
| `current` | integer | 否 | - |
| `orders` | array<object> | 否 | - |
| `optimizeCountSql` | boolean | 否 | - |
| `searchCount` | boolean | 否 | - |
| `optimizeJoinOfCountSql` | boolean | 否 | - |
| `maxLimit` | integer | 否 | - |
| `countId` | string | 否 | - |
| `displayMode` | enum(BINDING/ACCOUNT/NETWORK/NOTIFICATION/DEVICE_INFO) | 否 | 卡片中部显示模式,必填。为 null 时 Service 抛 BusinessException。 决定 DeviceVO 里哪些字段被装配(accounts / network / androidVersion 等)。 |
| `keyword` | string | 否 | 模糊搜索关键字。 匹配字段:与名称、与编号、与 IP、账号名、芯片名称;任一命中即保留设备。 实现见{@code MatrixQueryServiceImpl#filterDevicesByKeyword},三段匹配: ① 设备级(内存):device_name / device_code / device_ip; ② 芯片级(内存):所属 ARM 服务器的 arm_name; ③ 账号级(DB):social_account.nick_name / app_account。 关键字不空且三段全不命中时返回空集,触发 4.0.1 节点级裁剪,前端展示 0 chip / 0 device。 |
| `userName` | string | 否 | 关联用户:对 sys_user 的 user_name / nick_name 模糊匹配, 再经 mobile_device_org.user_id 反查设备,保留分配给该用户的设备。 |
| `chipNodeIds` | array<string> | 否 | 节点 ID 多选(mobile_arm_node.id)。 命中则只查这些节点;多个节点之间是 IN 关系。 与{@link #armChips} 是 AND 关系:armChips 先按 chipCode 反查到候选 nodeId 集合, 再与本集合求交;两者都为空时 = 不过滤。 本字段为"节点级"裁剪(在 chipQuery 阶段生效),与设备级筛选器(节点行保留 / 设备裁掉)语义不同。 前端传字符串数组(防 JS 长整数丢精度);后端按 Long 解析,非法值静默跳过。 二级菜单数据源:前端从{@code GET /social/workstation/matrix/chip-tree} 拉菜单, 把选中节点的{@code id} 数组回填到本字段。 |
| `chipId` | string | 否 | 节点 ID 单值(mobile_arm_node.id)。命中则只查这一个节点。 已废弃:为兼容老前端 / 老 Redis 中已存的"保留视图",仍保留作为单值入口; 服务端把{@code chipId} 与{@link #chipNodeIds} 合并去重后一起用于 IN 过滤。 新代码请直接用{@link #chipNodeIds} 多选。 「已废弃」since 2026-10-08, use {@link #chipNodeIds} for multi-select. 「已废弃」 |
| `mirrorRegion` | enum(CN/OVERSEAS) | 否 | 镜像区域:null=全部; {@link cn.callfans.social.api.config.api.enums.MirrorRegionEnum#CN} 国内 / {@link cn.callfans.social.api.config.api.enums.MirrorRegionEnum#OVERSEAS} 国外。 匹配 mobile_arm_server.arm_area 字段(枚举 name() 与列值一致)。 |
| `armChips` | array<string> | 否 | 芯片类型多选:匹配 mobile_arm_server.chip_code,null/空=全部。 链路:Service 端拼成 IN 子句,每个枚举同时匹配{@code name()} 与{@code toLowerCase()} 两种写法, 兼容历史脏数据(列值偶有 "arm_3588" 这种小写)。 该筛选为"节点级":在 chipQuery 阶段就把不命中的节点裁掉, 避免节点行还在但设备全被裁掉的"空壳"卡片。 可与{@link #chipNodeIds} 组合使用(AND 关系),典型场景:先按芯片类型大范围圈选,再按具体节点精确到几台。 |
| `availability` | enum(AVAILABLE/UNAVAILABLE/ANOMALY) | 否 | 设备状态单选:null=全部。 按设计 §九,共 3 类,互斥:可用 / 不可用 / 异常。   {@link AvailabilityFilterEnum#AVAILABLE}  —— 通过全部就绪检查       (deployed=true 且 isLock=false 且已配置并开启代理,且无近期任务失败)   {@link AvailabilityFilterEnum#UNAVAILABLE}—— 结构性不可用:任一命中即落入       (未一键新机 / 人工标注 / 无代理 / ADB 无响应)   {@link AvailabilityFilterEnum#ANOMALY}    —— 结构 OK,但最近 7 天内最近一条       SystemTask=FAIL 与顶部统计卡「可用 / 异常」互斥 3 分口径一致,保证用户从概览下钻时数字对得上。 实现见{@code MatrixQueryServiceImpl#filterDevicesByAvailability}。 |
| `taskStatus` | enum(BE_EXECUTED/IN_EXECUTION/SUCCESS/FAIL/CANCEL/IN_QUEUE/TIMEOUT) | 否 | 任务状态单值:null=全部。设备下任一任务命中即保留该设备,匹配 social_system_task.task_status。 枚举见{@link TaskStatusEnum}: BE_EXECUTED(待执行) / IN_EXECUTION(执行中) / SUCCESS(已完成) / FAIL(失败) / CANCEL(取消) / IN_QUEUE(队列中) / TIMEOUT(超时)。 |
| `appId` | string | 否 | 社媒 App 单选(TikTok / 小红书 / 微博 / 抖音 / Instagram / Facebook / YouTube 等)。 取值是**应用名称**,精确匹配 social_application_management.application_name (即 AppOptionVO.name),不是平台编码、也不是应用主键 id。 再经 social_account.app_id 反查设备。 |
| `accountRisk` | enum(UNUSED/NONE/LOW/HIGH/DISABLE) | 否 | 账号风险等级单选:匹配 social_account.risk_level,null=全部。 取值见{@link RiskLevel}:UNUSED(未使用) / NONE(无风险) / LOW(低风险) / HIGH(高风险) / DISABLE(已禁用)。设备下任一账号命中即保留。 |
| `loginStatus` | array<string> | 否 | 账号登录状态多选(社媒账号服务面板):null/空=全部。 枚举见{@link LoginStatusEnum}: LOGINED(已登录) / NOT_LOGIN(未登录) / LOGIN_FAILE(登录失败) / BE_LOGIN(登陆中) / REALPHONE_LOGIN(真机登陆)。 链路:Service 端拼成 IN 子句,匹配 social_account.login_status 列值 (列值与{@link LoginStatusEnum#name()} 一致),任一账号命中即保留设备。 实现见{@code MatrixQueryServiceImpl#filterDevicesByLoginStatus}。 |
| `accountTags` | array<string> | 否 | 账号标签 ID 多选:取值是标签主键 ID 字符串(social_account_tag.id,数字字符串)。 二跳链路 social_account_tag_org → social_account, 任一标签命中即保留账号,账号任一命中即保留设备。 不再经 tag_name 反查,前端下拉框直接传标签 id(用 String 防止 JS 长整数丢精度)。 |
| `networkRegions` | array<string> | 否 | 网络地区多选(后台代理池级联选择:国家 / 地区 / 城市 / 代理地区)。 取值是地区名(social_mobile_network.area,即 NetworkOptionVO.region), 经 social_mobile_network_association.phone_id 反查设备,任一地区命中即保留。 |
| `suiteIds` | array<string> | 否 | 设备分组 ID 多选:匹配 social_mobile_suite_org.suite_id, 命中即保留设备(任一 suite 命中即可)。 优先级:与{@link #deviceIds} /{@link #suiteId} /{@link #suiteName} 共用一条筛选链, 命中更高优先级字段后本字段被忽略(见类级 Javadoc)。 |
| `deviceIds` | array<string> | 否 | 设备 ID 白名单:非空时直接当白名单过滤,跳过{@link #suiteIds} /{@link #suiteId} / {@link #suiteName} 解析(与{@code MobileController.page} 语义一致)。 前端传字符串数组(防 JS 长整数丢精度),后端按 Long 命中 mobile_device.id。 与分组字段互斥,但与{@link #deviceStatuses} /{@link #deviceIdx} 可叠加。 |
| `suiteId` | string | 否 | 所属分组(单值 ID):{@link #suiteIds} 为空时本字段会被折叠为 1 元素 list; 非空时本字段被忽略。 典型场景:前端单选分组时只传{@code suiteId},与{@code suiteIds} 等价。 |
| `suiteName` | string | 否 | 所属分组名(模糊):{@link #deviceIds} /{@link #suiteIds} /{@link #suiteId} 都为空时生效, 按 social_mobile_suite.suite_name LIKE → suiteId → 设备归属; 实现见{@code MatrixQueryServiceImpl#filterDevicesBySuiteName}。 |
| `deviceStatuses` | array<string> | 否 | 设备状态多选:匹配 mobile_device.device_status(ONLINE / OFFLINE / SHUTDOWN 等), 与分组字段独立,可叠加。 取值与{@link cn.callfans.social.api.config.api.enums.DeviceStateEnum#name()} 一致, 兼容历史脏数据(列值可能含大小写差异)。 兼容说明:为避免前端误传 String(如{@code "deviceStatuses":"ONLINE"})导致整个 筛选项被 Jackson 静默丢弃,改用{@link #setDeviceStatuses(Object)} 单 setter 内分发, 详见该方法 Javadoc。 |
| `deviceIdx` | string | 否 | 设备序号(模糊):匹配 mobile_device.device_idx LIKE '%value%',纯内存匹配,无 DB IO。 与分组字段独立,可叠加;实现见{@code MatrixQueryServiceImpl#filterDevicesByDeviceIdx}。 |
| `server` | array<string> | 否 | 所属服务器(节点 IP 多选,设备级筛选):匹配 mobile_device.node_ip LIKE '%value%', 内存判定,无 DB IO;节点行保留,只裁掉不命中设备的 chip(配合 {@code MatrixQueryServiceImpl} 的 needNodeCrop 裁掉空 chip)。 字段语义与{@code MobileController.page /device/page} 的 server 字段对齐 (XML:{@code tmd.node_ip LIKE CONCAT('%', #{con.server}, '%')}), 两端以"设备所属节点 IP"为查询口径。早期版本曾误将本字段实现为 mobile_arm_server.address 的 chip-level,后已纠正。 多值语义:与{@code MobileController.page} 不同,本字段为真正多查询 — 任一 IP 命中即保留设备(OR);空集合 / 全空字符串视为未传,不过滤。 兼容说明:支持{@code "server":"10.13.1"} 单值入参与 {@code "server":["10.13.1","10.13.2"]} 数组入参,详见 {@link #setServer(Object)}。 与{@link #keyword} /{@link #deviceIp} 同属设备级,与分组字段 / {@link #deviceStatuses} /{@link #deviceIdx} 独立可叠加; 实现见{@code MatrixQueryServiceImpl#filterDevicesByServer}。 |
| `deviceIp` | string | 否 | 设备 IP(模糊):匹配 mobile_device.device_ip LIKE '%value%',纯内存匹配,无 DB IO, 大小写不敏感。 与{@link #keyword} 语义重叠(后者已覆盖 device_ip),但作为单独字段可让前端在不做 关键字搜索时直接按 IP 圈选,避免与名称 / 账号名模糊匹配串台。 与分组字段 /{@link #deviceStatuses} /{@link #deviceIdx} 独立,可叠加; 实现见{@code MatrixQueryServiceImpl#filterDevicesByIp}。 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/workstation/matrix/projects

**标题**：左栏项目列表(树形结构,按更新时间倒序)。

**所属分类**：矩阵总览前端控制器(迁移到 social 模块)。

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `keyword` | string | 否 | 可选,项目名称模糊关键字(对 {@code project_name} LIKE 匹配);
不传 / 空字符串 = 返回全量 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |

**说明**

支持 2 层(Level 1 顶级 + Level 2 子项目):返回顶层项目列表,
每个 ProjectVO.children 携带其下子项目(最多 1 层)。
前端可直接渲染 2 层树形结构;展平用 flatMap + 项目过滤 children 不为空判断。


### POST /social/workstation/matrix/projects

**标题**：新建项目(项目编组)。

**所属分类**：矩阵总览前端控制器(迁移到 social 模块)。

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，创建入参:

projectName — 项目名称,必填,trim 后唯一

chipIds — 关联芯片(节点)ID 列表,必填

slotRange — 关联范围(目标设备数量上限),选填

deviceStatus — AVAILABLE/UNAVAILABLE/ANOMALY,选填

appIds — 社媒平台 ID 列表,选填

currentUserId — 当前操作人）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `projectName` | string | 否 | 项目名称,必填 |
| `deviceIds` | array<string> | 否 | 设备 ID(mobile_device.id)列表,必填,字符串防 JS 丢精度。 按 mobile_device.node_id 分组生成 slot_index; 设备必须存在且未被软删(deleted=0)。 |
| `appId` | string | 否 | 社媒平台 ID(选填,来自 social_application_management.id),单选 |
| `parentId` | string | 否 | 父项目 ID(选填);null = 创建顶级项目(默认),非 null = 创建二级子项目。 约束:parent 必须是 Level 1 顶级项目(parent_id IS NULL), 系统最多支持 2 层(parent 不允许再有自己的子项目)。 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /social/workstation/matrix/projects

**标题**：更新项目(部分更新)。

**所属分类**：矩阵总览前端控制器(迁移到 social 模块)。

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，部分更新参数:

id — 必填,被改动的项目主键

projectName — 非空 = trim 后覆盖;null = 不改

chipIds — null = 不改绑定;[] = 清空;.. = 重绑到这些节点

slotRange / appId / deviceStatus — 非空覆盖;null 不改）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 否 | 项目主键,必填(social_workstation_project.id),字符串防 JS 丢精度 |
| `projectName` | string | 否 | 项目名称,选填;非空时 trim 后覆盖 |
| `appId` | string | 否 | 社媒平台 ID(单选),选填 |
| `deviceIds` | array<string> | 否 | 设备 ID(mobile_device.id)列表,选填,字符串防 JS 丢精度。 编辑时前端直接选设备用此字段:null = 不改绑定;[] = 清空所有绑定; [ids] = 增量绑定:仅插入该项目下当前未绑定的设备;已绑定的设备 (按 project_id+device_id 命中)直接跳过,不删 slot、不动 slot_number。 新增设备的 slot_number 按所在节点当前 max+1 递增。 |
| `parentId` | string | 否 | 父项目 ID(选填)。 语义:   null — 不改归属(保留现有 parentId)   非 null — 修改归属为目标父项目(必须 Level 1 顶级项目) |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |

**说明**

[UpdateProjectDTO(更新项目参数(部分更新)。
所有字段 nullable:仅非空字段才会被更新;为 null 表示"不动该字段"。
允许只改名称 / 只改其中一项 / 全改等任意组合。

字段语义:

  id — 必填,被改动的项目主键(social_workstation_project.id),字符串防 JS 丢精度

  projectName — null/空 = 不改;非空 = trim 后覆盖

  deviceIds — null = 不改绑定;[] = 清空所有绑定;[ids] = 增量绑定,
        仅插入该项目下当前未绑定的设备;已绑定的设备(命中 project_id+device_id)直接跳过,
        不删 slot、不动 slot_number,前端可放心重复下发相同清单

  appId — null = 不改;非空 = 覆盖

  parentId — null = 不改归属;非空 = 修改父项目(必须 Level 1,且不能形成 3 层)

绑定关系统一走 deviceIds(精确到设备),不再使用 chipIds 节点范围绑定。
注:slotRange / deviceStatus 不再支持编辑(建组时定一次)。)] 所有字段 nullable:仅非空字段才更新。
支持只改名称不改芯片、只改其中一项、清空所有绑定等任意组合。


### DELETE /social/workstation/matrix/projects/{id}

**标题**：删除项目(软删,级联软删所有 project_slot)。

**所属分类**：矩阵总览前端控制器(迁移到 social 模块)。

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 是 | 项目主键(路径参数,字符串) |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/workstation/matrix/projects/{id}

**标题**：单个项目详情(项目主体 + 已绑定槽位列表)。

**所属分类**：矩阵总览前端控制器(迁移到 social 模块)。

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 是 | 项目主键(路径参数) |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/workstation/matrix/projects/{projectId}/devices

**标题**：项目下的设备 ID 集合 —— 点击左侧项目后,右栏加载该项目绑定的设备列表(扁平,

**所属分类**：矩阵总览前端控制器(迁移到 social 模块)。

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `projectId` | string | 是 | 项目 ID(必填,路径参数) |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<string> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |

**说明**

不带 chip / 节点信息,不返回矩阵视图)。
链路:{@code MatrixQueryServiceImpl#listProjectDeviceIds} 走
{@code social_workstation_project_slot},按项目 ID 命中所有未软删的 deviceId,
保持 DB 返回顺序,不去重。


### POST /social/workstation/matrix/projects/devices/unbind

**标题**：项目矩阵总览 · 按设备集合解绑。

**所属分类**：矩阵总览前端控制器(迁移到 social 模块)。

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，解绑请求体;null / projectId 缺失都会走参数缺失错误）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `projectId` | string | 否 | 项目 ID(social_workstation_project.id),字符串防 JS 丢精度。必填。 |
| `deviceIds` | array<string> | 否 | 设备 ID 集合(mobile_device.id),字符串防 JS 丢精度。 不传 / null = no-op;[] = 解绑全部;[ids] = 解绑子集,未命中跳过。 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |

**说明**

所有入参集中在[UnbindDevicesDTO(项目矩阵总览 · 按设备集合解绑请求体。
POST body 入参,所有字段集中在 DTO 中(不再走路径参数):

  {@link #projectId} — 项目 ID(social_workstation_project.id),字符串防 JS 丢精度;必填

  {@link #deviceIds} — 待解绑的设备 ID 集合(mobile_device.id),字符串防 JS 丢精度。

语义:

        {@code null} / 不传 — 视为"不动现有绑定",接口直接返回当前 slotCount(等同 no-op)

        {@code []} 空集合 — 视为"解绑该项目下所有设备"(显式清空)

        {@code [ids]} — 仅解绑这些设备中"当前该项目下已绑定"的那部分;
            没在该项目下绑定的设备静默跳过,不报错

)] 中(body 形式),不再走路径参数:

  {@code projectId} — 必填

  {@code deviceIds=null} / 不传 → no-op

  {@code deviceIds=[]} → 解绑该项目下所有设备(显式清空)

  {@code deviceIds=ids} → 仅解绑"该项目下当前已绑定"的设备子集,
      未在该项目下绑定的设备静默跳过,不报错

解绑后会对受影响节点跑 slotNumber 重排,避免编号空洞。


### GET /social/workstation/matrix/stats

**标题**：矩阵数据三块数据卡

**所属分类**：矩阵总览前端控制器(迁移到 social 模块)。

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/workstation/matrix/view-preset

**标题**：查询当前登录用户已保存的所有筛选视图(筛选预设)。

**所属分类**：矩阵总览前端控制器(迁移到 social 模块)。

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /social/workstation/matrix/view-preset/{id}

**标题**：按视图唯一 id 删除当前登录用户的一条筛选视图(精确删一条)。

**所属分类**：矩阵总览前端控制器(迁移到 social 模块)。

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 是 | 视图唯一 id(UUID 字符串,路径参数) |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | integer | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/workstation/matrix/view-preset/save

**标题**：保留视图(筛选预设):将当前筛选条件追加到当前登录用户的视图列表(保存到 Redis)。

**所属分类**：矩阵总览前端控制器(迁移到 social 模块)。

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |

**说明**

按用户分 key — Redis key 为{@code matrix:view:preset:{userId}}。
每次保存时 SET 一次该用户自己的 list,新视图追加到列表尾部,
不覆盖该用户已有的视图(其它用户互不影响)。
请求体支持两种格式(自动识别):

  新格式 —{@code {name: "xxx", query: {...OverviewQueryDTO 字段...}}}

  旧格式(兼容)— 直接传[OverviewQueryDTO(矩阵总览查询请求(字段全部平铺 + Page 包装)。

对应接口{@code POST /social/workstation/matrix/page},
前端以{@code @RequestBody} 方式直接提交。

继承{@link Page} 拿分页参数:{@code current}(页码,默认 1)/{@code size}(每页条数,默认 10),
分页作用于**节点**(mobile_arm_node),不是设备。

除 displayMode / chipId / chipNodeIds 外的筛选项都是"设备级"过滤:节点行保留,只裁掉不命中的设备。
各字段的实际过滤链路见{@code MatrixQueryServiceImpl#getOverview} 的 1.0 ~ 1.3(节点级)与
2.5 ~ 2.17(设备级)步。

分组相关字段的优先级(与{@code MobileController.page} 对齐):
{@code deviceIds} >{@code suiteIds} >{@code suiteId} >{@code suiteName},
任一命中后即停,前者会绕过后续解析;{@code deviceStatuses} /{@code deviceIdx}
与分组字段相互独立,可叠加。)] 平铺,name 默认{@code "default"}

前端传入的{@code name} 原样落库;只有没传 name 时,后端才用 query 里的 ID 筛选项
翻译成"节点:xxx | App:xxx"这种中文名兜底。
返回{@code data} 为[Map(An object that maps keys to values.  A map cannot contain duplicate keys;
each key can map to at most one value.

This interface takes the place of the{@code Dictionary} class, which
was a totally abstract class rather than an interface.

The{@code Map} interface provides three collection views, which
allow a map's contents to be viewed as a set of keys, collection of values,
or set of key-value mappings.  The order of a map is defined as
the order in which the iterators on the map's collection views return their
elements.  Some map implementations, like the{@code TreeMap} class, make
specific guarantees as to their order; others, like the{@code HashMap}
class, do not.

Note: great care must be exercised if mutable objects are used as map
keys.  The behavior of a map is not specified if the value of an object is
changed in a manner that affects{@code equals} comparisons while the
object is a key in the map.  A special case of this prohibition is that it
is not permissible for a map to contain itself as a key.  While it is
permissible for a map to contain itself as a value, extreme caution is
advised: the{@code equals} and{@code hashCode} methods are no longer
well defined on such a map.

All general-purpose map implementation classes should provide two
"standard" constructors: a void (no arguments) constructor which creates an
empty map, and a constructor with a single argument of type{@code Map},
which creates a new map with the same key-value mappings as its argument.
In effect, the latter constructor allows the user to copy any map,
producing an equivalent map of the desired class.  There is no way to
enforce this recommendation (as interfaces cannot contain constructors) but
all of the general-purpose map implementations in the JDK comply.

The "destructive" methods contained in this interface, that is, the
methods that modify the map on which they operate, are specified to throw
{@code UnsupportedOperationException} if this map does not support the
operation.  If this is the case, these methods may, but are not required
to, throw an{@code UnsupportedOperationException} if the invocation would
have no effect on the map.  For example, invoking the{@link #putAll(Map)}
method on an unmodifiable map may, but is not required to, throw the
exception if the map whose mappings are to be "superimposed" is empty.

Some map implementations have restrictions on the keys and values they
may contain.  For example, some implementations prohibit null keys and
values, and some have restrictions on the types of their keys.  Attempting
to insert an ineligible key or value throws an unchecked exception,
typically{@code NullPointerException} or{@code ClassCastException}.
Attempting to query the presence of an ineligible key or value may throw an
exception, or it may simply return false; some implementations will exhibit
the former behavior and some will exhibit the latter.  More generally,
attempting an operation on an ineligible key or value whose completion
would not result in the insertion of an ineligible element into the map may
throw an exception or it may succeed, at the option of the implementation.
Such exceptions are marked as "optional" in the specification for this
interface.

Many methods in Collections Framework interfaces are defined
in terms of the{@link Object#equals(Object) equals} method.  For
example, the specification for the{@link #containsKey(Object)
* containsKey(Object key)} method says: "returns{@code true} if and
only if this map contains a mapping for a key{@code k} such that
{@code (key==null ? k==null : key.equals(k))}." This specification should
not be construed to imply that invoking{@code Map.containsKey}
with a non-null argument{@code key} will cause{@code key.equals(k)} to
be invoked for any key{@code k}.  Implementations are free to
implement optimizations whereby the{@code equals} invocation is avoided,
for example, by first comparing the hash codes of the two keys.  (The
{@link Object#hashCode()} specification guarantees that two objects with
unequal hash codes cannot be equal.)  More generally, implementations of
the various Collections Framework interfaces are free to take advantage of
the specified behavior of underlying{@link Object} methods wherever the
implementor deems it appropriate.

Some map operations which perform recursive traversal of the map may fail
with an exception for self-referential instances where the map directly or
indirectly contains itself. This includes the{@code clone()},
{@code equals()},{@code hashCode()} and{@code toString()} methods.
Implementations may optionally handle the self-referential scenario, however
most current implementations do not do so.

Unmodifiable Maps
The{@link Map#of() Map.of},
{@link Map#ofEntries(Map.Entry...) Map.ofEntries}, and
{@link Map#copyOf Map.copyOf}
static factory methods provide a convenient way to create unmodifiable maps.
The{@code Map}
instances created by these methods have the following characteristics:

They are unmodifiable. Keys and values
cannot be added, removed, or updated. Calling any mutator method on the Map
will always cause{@code UnsupportedOperationException} to be thrown.
However, if the contained keys or values are themselves mutable, this may cause the
Map to behave inconsistently or its contents to appear to change.
They disallow{@code null} keys and values. Attempts to create them with
{@code null} keys or values result in{@code NullPointerException}.
They are serializable if all keys and values are serializable.
They reject duplicate keys at creation time. Duplicate keys
passed to a static factory method result in{@code IllegalArgumentException}.
The iteration order of mappings is unspecified and is subject to change.
They are value-based.
Programmers should treat instances that are{@linkplain #equals(Object) equal}
as interchangeable and should not use them for synchronization, or
unpredictable behavior may occur. For example, in a future release,
synchronization may fail. Callers should make no assumptions
about the identity of the returned instances. Factories are free to
create new instances or reuse existing ones.
They are serialized as specified on the
Serialized Form
page.

This interface is a member of the

Java Collections Framework.)],key 为{@code id} /{@code name} —
前端应保留{@code id} 用于删除接口的精确匹配,直接展示{@code name} 做"已保存为:xxx"提示。


## AI插件管理前端控制器

### DELETE /social/ai-plugin/delete

**标题**：移除插件

**所属分类**：AI插件管理前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，移除的插件信息）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 否 | 插件id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/ai-plugin/list

**标题**：获取插件列表

**所属分类**：AI插件管理前端控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/ai-plugin/list/offshelve

**标题**：查询待上架的插件列表

**所属分类**：AI插件管理前端控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/ai-plugin/popular

**标题**：获取热门插件列表

**所属分类**：AI插件管理前端控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/ai-plugin/save

**标题**：保存插件信息

**所属分类**：AI插件管理前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，插件信息）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `title` | string | 否 | 标题 |
| `subtitle` | string | 否 | 副标题 |
| `link` | string | 否 | 链接 |
| `iconUrl` | string | 否 | 图标链接 |
| `aiGroupId` | string | 否 | 分组id |
| `aiGroupName` | string | 否 | 分组名称 |
| `groupIconUrl` | string | 否 | 分组链接 |
| `aiState` | boolean | 否 | ai状态(true 上架,false 待上架) |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /social/ai-plugin/scoring

**标题**：评分插件

**所属分类**：AI插件管理前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，评分信息）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 否 | 插件id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /social/ai-plugin/shelve

**标题**：批量上架插件

**所属分类**：AI插件管理前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，上架的插件信息）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `ids` | array<string> | 否 | ai插件id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /social/ai-plugin/update

**标题**：修改插件信息

**所属分类**：AI插件管理前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，修改的插件信息）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 否 | id |
| `title` | string | 否 | 标题 |
| `subtitle` | string | 否 | 副标题 |
| `link` | string | 否 | 链接 |
| `iconUrl` | string | 否 | 图标链接 |
| `aiGroupId` | string | 否 | 分组id |
| `aiGroupName` | string | 否 | 分组名称 |
| `groupIconUrl` | string | 否 | ai分组图标链接 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 分析 Agent 设置

### GET /social/analysis/setting/list

**标题**：获取所有分析 Agent 设置列表

**所属分类**：分析 Agent 设置

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/analysis/update

**标题**：更新分析 Agent 设置

**所属分类**：分析 Agent 设置

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，更新参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `analysisId` | string | 否 | 社群信息编号 |
| `settingId` | string | 否 | agentId |
| `groupTag` | string | 否 | 群标签 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 飞书机器人消息推送 控制器

### POST /social/lark/send

**标题**：飞书机器人发送消息

**所属分类**：飞书机器人消息推送 控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，消息参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `title` | string | 否 | 消息标题 |
| `content` | string | 否 | 消息内容 |
| `userId` | string | 否 | 消息接收人 all代表所有人 |
| `prompt` | string | 否 | 提示语 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 设备指纹

### GET /social/fingerprint/get

**标题**：获取设备指纹

**所属分类**：设备指纹

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | string | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 真机设备 前端控制器

### POST /social/realPhone/add

**标题**：新增真机设备

**所属分类**：真机设备 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 脚本流程前端控制器

### POST /social/script/flow/add

**标题**：新增脚本流程

**所属分类**：脚本流程前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，新增参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `name` | string | 否 | 脚本名称 |
| `scriptVersion` | string | 否 | 脚本版本 |
| `remark` | string | 否 | 脚本描述 |
| `code` | string | 否 | 脚本内容 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /social/script/flow/delete

**标题**：删除脚本流程

**所属分类**：脚本流程前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，删除参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `scriptIds` | array<string> | 否 | 脚本id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/script/flow/detail/{id}

**标题**：获取脚本流程详情

**所属分类**：脚本流程前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 是 | 脚本流程id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /social/script/flow/download/{id}

**标题**：下载脚本文件

**所属分类**：脚本流程前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 是 | 脚本流程ID |


### POST /social/script/flow/edit

**标题**：编辑脚本流程

**所属分类**：脚本流程前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，编辑参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 否 | 脚本id |
| `code` | string | 否 | 脚本内容 |
| `scriptVersion` | string | 否 | 脚本版本 |
| `remark` | string | 否 | 脚本描述 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/script/flow/page

**标题**：分页脚本流程

**所属分类**：脚本流程前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，分页参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records` | array<object> | 否 | - |
| `total` | integer | 否 | - |
| `size` | integer | 否 | - |
| `current` | integer | 否 | - |
| `orders` | array<object> | 否 | - |
| `optimizeCountSql` | boolean | 否 | - |
| `searchCount` | boolean | 否 | - |
| `optimizeJoinOfCountSql` | boolean | 否 | - |
| `maxLimit` | integer | 否 | - |
| `countId` | string | 否 | - |
| `name` | string | 否 | 脚本名称 |
| `startTime` | string | 否 | 开始时间 |
| `endTime` | string | 否 | 结束时间 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/script/flow/upload

**标题**：上传脚本文件

**所属分类**：脚本流程前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 multipart/form-data |

**请求体**（form）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `file` | file | 是 | 文件 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | string | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 代理分组关联 前端控制器

### POST /social/proxy-suite/add

**标题**：增加代理到分组

**所属分类**：代理分组关联 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，代理与分组的更新参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `suiteId` | string | 否 | 分组编号 |
| `suiteName` | string | 是 | 分组名称 |
| `suiteDesc` | string | 否 | 分组描述 |
| `mobiles` | array<object> | 否 | 设备信息 |
| `accountIds` | array<string> | 否 | 账号编号集合 |
| `proxyIds` | array<string> | 否 | 代理id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | string | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /social/proxy-suite/update

**标题**：全量更新分组下的代理信息

**所属分类**：代理分组关联 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，更新代理信息（{@code suiteId} 必传））

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `suiteId` | string | 否 | 分组编号 |
| `suiteName` | string | 是 | 分组名称 |
| `suiteDesc` | string | 否 | 分组描述 |
| `mobiles` | array<object> | 否 | 设备信息 |
| `accountIds` | array<string> | 否 | 账号编号集合 |
| `proxyIds` | array<string> | 否 | 代理id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | string | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |

**说明**

语义：先全量物理删除{@code dto.suiteId} 分组下所有代理关系，
再全量新增{@code dto.proxyIds} 给出的代理关系。
与[增加代理到分组] 的差异：本接口不更新分组基础信息，
仅替换分组下的代理成员。

入参约束：{@code suiteId} 必传；{@code proxyIds} 为空/null 时不做任何操作
（既不删除原成员，也不新增）；本接口忽略{@code suiteName / suiteDesc}。


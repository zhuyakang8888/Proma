# 运营管理后台 —— 计划与应用域（/system-plan、/application、/suite、/dynamic）

共 32 个接口。由 `scripts/gen-references.mjs` 从 `docs/platform_api.json` 生成，请勿手改。

鉴权方式：该系统的 YApi 导出里没有任何登录或鉴权接口，登录端点未知。运行时由用户以 --login-path 提供登录路径（必要时用 --login-method、--token-path 修正），调用器不会猜测。首次联调确认后，请把路径填回本文件的 login.path。

返回总索引：[index.md](./index.md)

## 应用前端控制器

### PUT /application/management

**标题**：保存应用

**所属分类**：应用前端控制器

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
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |


### DELETE /application/management

**标题**：删除应用

**所属分类**：应用前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，删除条件）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `checkIds` | array<string> | 否 | 勾选的id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |


### POST /application/management

**标题**：更新应用

**所属分类**：应用前端控制器

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
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |


### GET /application/management/{id}

**标题**：根据id查询应用

**所属分类**：应用前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 是 | 应用id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


### POST /application/management/{id}/{status}

**标题**：更新应用状态

**所属分类**：应用前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 是 | 根据id更新 |
| `status` | string | 是 | - |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |


### POST /application/management/duplicate

**标题**：获取应用类型去重

**所属分类**：应用前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，查询条件）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 否 | 应用管理id |
| `applicationStatus` | integer | 否 | 应用状态 |
| `systemConfig` | integer | 否 | 是否展示任务 |
| `programCategory` | string | 否 | 任务类型 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | array<object> | 否 | - |


### POST /application/management/page

**标题**：分页查询应用

**所属分类**：应用前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，查询条件）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records` | array<object> | 否 | 查询数据列表 |
| `total` | integer | 否 | 总数 |
| `size` | integer | 否 | 每页显示条数，默认 10 |
| `current` | integer | 否 | 当前页 |
| `orders` | array<object> | 否 | 排序字段信息 |
| `optimizeCountSql` | boolean | 否 | 自动优化 COUNT SQL |
| `searchCount` | boolean | 否 | 是否进行 count 查询 |
| `optimizeJoinOfCountSql` | boolean | 否 | {@link #optimizeJoinOfCountSql()} |
| `maxLimit` | integer | 否 | 单页分页条数限制 |
| `countId` | string | 否 | countId |
| `applicationName` | string | 否 | 应用名称 |
| `applicationStatus` | integer | 否 | 应用状态 0：启用 1：禁用 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


### GET /application/management/script

**标题**：获取脚本列表

**所属分类**：应用前端控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | array<object> | 否 | - |


### POST /application/management/type

**标题**：获取应用类型

**所属分类**：应用前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，查询条件）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 否 | 应用管理id |
| `applicationStatus` | integer | 否 | 应用状态 |
| `systemConfig` | integer | 否 | 是否展示任务 |
| `programCategory` | string | 否 | 任务类型 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | array<object> | 否 | - |


## 动态表单前端控制器

### PUT /dynamic/form

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
| `programCategory` | string | 否 | 任务类型 |
| `programName` | string | 否 | 功能名称 |
| `logoPath` | string | 否 | 图片路径 |
| `appId` | string | 否 | 应用id |
| `form` | array<object> | 否 | 表单 |
| `scriptId` | string | 否 | 脚本id |
| `extendedColumn` | array<object> | 否 | 扩展列 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


### GET /dynamic/form/{id}

**标题**：根据id查询动态表单

**所属分类**：动态表单前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 是 | id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


### POST /dynamic/form/column

**标题**：查询动态表单列

**所属分类**：动态表单前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，查询条件）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `appId` | string | 否 | 应用id |
| `taskType` | string | 否 | 任务类型 |
| `current` | integer | 否 | - |
| `size` | integer | 否 | - |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | array<object> | 否 | - |


### POST /dynamic/form/column/table

**标题**：查询动态表单动态列表

**所属分类**：动态表单前端控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | array<object> | 否 | - |


### POST /dynamic/form/page

**标题**：分页查询动态表单

**所属分类**：动态表单前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，查询条件）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `appId` | string | 否 | 应用id |
| `taskType` | string | 否 | 任务类型 |
| `current` | integer | 否 | - |
| `size` | integer | 否 | - |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


## 系统计划 前端控制器

### GET /system-plan/account/page

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
| `total` | string | 否 | 总数 |
| `size` | string | 否 | 每页显示条数，默认 10 |
| `current` | string | 否 | 当前页 |
| `orders[0].column` | string | 否 | 需要进行排序的字段 |
| `orders[0].asc` | string | 否 | 是否正序排列，默认 true |
| `optimizeCountSql` | string | 否 | 自动优化 COUNT SQL |
| `searchCount` | string | 否 | 是否进行 count 查询 |
| `optimizeJoinOfCountSql` | string | 否 | {@link #optimizeJoinOfCountSql()} |
| `maxLimit` | string | 否 | 单页分页条数限制 |
| `countId` | string | 否 | countId |
| `planId` | string | 是 | 计划编号 |
| `searchValue` | string | 否 | 所属账号/设备 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /system-plan/copy/{planId}

**标题**：复制计划

**所属分类**：系统计划 前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `planId` | string | 是 | 复制的计划编号 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /system-plan/del

**标题**：删除任务计划

**所属分类**：系统计划 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，计划编号）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `planIds` | array<string> | 否 | 计划编号集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /system-plan/detail

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
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /system-plan/detail/{planId}

**标题**：获取计划下账号信息主键集合

**所属分类**：系统计划 前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `planId` | string | 是 | - |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /system-plan/join

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
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /system-plan/join/page

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
| `total` | string | 否 | 总数 |
| `size` | string | 否 | 每页显示条数，默认 10 |
| `current` | string | 否 | 当前页 |
| `orders[0].column` | string | 否 | 需要进行排序的字段 |
| `orders[0].asc` | string | 否 | 是否正序排列，默认 true |
| `optimizeCountSql` | string | 否 | 自动优化 COUNT SQL |
| `searchCount` | string | 否 | 是否进行 count 查询 |
| `optimizeJoinOfCountSql` | string | 否 | {@link #optimizeJoinOfCountSql()} |
| `maxLimit` | string | 否 | 单页分页条数限制 |
| `countId` | string | 否 | countId |
| `planId` | string | 是 | 计划编号 |
| `searchValue` | string | 否 | 所属账号/设备 |
| `userId` | string | 否 | 用户id |
| `isAdmin` | string | 否 | 是否管理员 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /system-plan/page

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
| `total` | string | 否 | 总数 |
| `size` | string | 否 | 每页显示条数，默认 10 |
| `current` | string | 否 | 当前页 |
| `orders[0].column` | string | 否 | 需要进行排序的字段 |
| `orders[0].asc` | string | 否 | 是否正序排列，默认 true |
| `optimizeCountSql` | string | 否 | 自动优化 COUNT SQL |
| `searchCount` | string | 否 | 是否进行 count 查询 |
| `optimizeJoinOfCountSql` | string | 否 | {@link #optimizeJoinOfCountSql()} |
| `maxLimit` | string | 否 | 单页分页条数限制 |
| `countId` | string | 否 | countId |
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
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /system-plan/publish

**标题**：一键启停用账号计划

**所属分类**：系统计划 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，入参）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `planAccountState` | enum(ENABLE/DISABLED) | 否 | 启用/停用 |
| `rlts` | array<object> | 否 | 计划下关联关系主键集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /system-plan/quit

**标题**：解除账号加入计划

**所属分类**：系统计划 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `accountId` | string | 否 | 账号id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /system-plan/update

**标题**：更新计划信息

**所属分类**：系统计划 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json）

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
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | string | 否 | - |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 设备组 前端控制器

### DELETE /suite/del

**标题**：批量删除设备分组信息

**所属分类**：设备组 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，删除参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `suiteIds` | array<string> | 是 | 分组编号集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


### GET /suite/detail/{suiteId}

**标题**：获取分组详情

**所属分类**：设备组 前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `suiteId` | string | 是 | 分组编号 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


### POST /suite/device/add

**标题**：分组更新仅增加设备

**所属分类**：设备组 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，设备分组信息）

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
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


### GET /suite/list

**标题**：获取设备分组列表

**所属分类**：设备组 前端控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | array<string> | 否 | - |


### GET /suite/page

**标题**：获取设备分组列表

**所属分类**：设备组 前端控制器

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records[0].key` | string | 否 | - |
| `total` | string | 否 | 总数 |
| `size` | string | 否 | 每页显示条数，默认 10 |
| `current` | string | 否 | 当前页 |
| `orders[0].column` | string | 否 | 需要进行排序的字段 |
| `orders[0].asc` | string | 否 | 是否正序排列，默认 true |
| `optimizeCountSql` | string | 否 | 自动优化 COUNT SQL |
| `searchCount` | string | 否 | 是否进行 count 查询 |
| `optimizeJoinOfCountSql` | string | 否 | {@link #optimizeJoinOfCountSql()} |
| `maxLimit` | string | 否 | 单页分页条数限制 |
| `countId` | string | 否 | countId |
| `suiteName` | string | 否 | 分组名称 |
| `deviceIp` | string | 否 | 设备地址 |
| `deviceStatuses[0]` | string | 否 | 设备状态 |
| `suiteId` | string | 否 | 分组编号 |
| `deviceIdx` | string | 否 | 设备序号 |
| `nodeIp` | string | 否 | 节点地址 |
| `suiteType` | string | 否 | 分组类型 |
| `ignoreZero` | string | 否 | 是否忽略条数为0的记录 true: 忽略展示 false: 展示
默认 展示 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


### GET /suite/screen-page

**标题**：获取设备分组列表（投屏矩阵）

**所属分类**：设备组 前端控制器

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `records[0].id` | string | 否 | 主键ID |
| `records[0].suiteIdx` | string | 否 | 序号 |
| `records[0].suiteName` | string | 否 | 组名 |
| `records[0].amount` | string | 否 | 数量 |
| `records[0].suiteDesc` | string | 否 | 分组描述 |
| `records[0].suiteType` | string | 否 | 分组类型（PRODUCT：产品分组/USER：用户分组） |
| `total` | string | 否 | 总数 |
| `size` | string | 否 | 每页显示条数，默认 10 |
| `current` | string | 否 | 当前页 |
| `orders[0].column` | string | 否 | 需要进行排序的字段 |
| `orders[0].asc` | string | 否 | 是否正序排列，默认 true |
| `optimizeCountSql` | string | 否 | 自动优化 COUNT SQL |
| `searchCount` | string | 否 | 是否进行 count 查询 |
| `optimizeJoinOfCountSql` | string | 否 | {@link #optimizeJoinOfCountSql()} |
| `maxLimit` | string | 否 | 单页分页条数限制 |
| `countId` | string | 否 | countId |
| `suiteName` | string | 否 | 分组名称 |
| `deviceIp` | string | 否 | 设备地址 |
| `deviceStatuses[0]` | string | 否 | 设备状态 |
| `suiteId` | string | 否 | 分组编号 |
| `deviceIdx` | string | 否 | 设备序号 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


### POST /suite/update

**标题**：更新设备分组

**所属分类**：设备组 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，设备分组信息）

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
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | string | 否 | - |


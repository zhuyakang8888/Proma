# 运营管理后台 —— 关联中心与素材域（/asset）

共 62 个接口。由 `scripts/gen-references.mjs` 从 `docs/platform_api.json` 生成，请勿手改。

鉴权方式：该系统的 YApi 导出里没有任何登录或鉴权接口，登录端点未知。运行时由用户以 --login-path 提供登录路径（必要时用 --login-method、--token-path 修正），调用器不会猜测。首次联调确认后，请把路径填回本文件的 login.path。

返回总索引：[index.md](./index.md)

## 关联中心前端控制器

### GET /asset/account/detail/{accountId}

**标题**：查询账号详情

**所属分类**：关联中心前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `accountId` | string | 是 | - |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


### POST /asset/account/import

**标题**：导入账号

**所属分类**：关联中心前端控制器

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
| `file` | file | 是 | 文件 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |


### GET /asset/account/num

**标题**：获取账号池数量

**所属分类**：关联中心前端控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


### POST /asset/account/page

**标题**：获取账号资产分页信息

**所属分类**：关联中心前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，账号资产分页参数）

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
| `appIds` | array<string> | 否 | 应用id |
| `accountName` | string | 否 | 账号 |
| `suiteIds` | array<string> | 否 | 分组id集合 |
| `sortType` | string | 否 | 排序条件   1. 按风险排序（低风险的靠上）   2. 按录入时间排序（新录入的先显示） |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


### POST /asset/account/unbind

**标题**：解绑账号

**所属分类**：关联中心前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，解绑账号参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `accountIds` | array<string> | 否 | 账号ID |
| `deviceId` | string | 否 | 设备ID |
| `bind` | string | 否 | 绑定状态 "UNBINDING" |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |


### POST /asset/add/account

**标题**：新增账号

**所属分类**：关联中心前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，新增账号参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 否 | 账号id |
| `nickName` | string | 否 | 用户昵称 |
| `appAccount` | string | 否 | 账号 |
| `accountPasswd` | string | 否 | 账号密码 |
| `emailAddr` | string | 否 | 邮箱地址 |
| `emailPasswd` | string | 否 | 邮箱密码 |
| `loginStatus` | string | 否 | 登录状态 |
| `twiceCheck` | string | 否 | 二次确认信息 |
| `appId` | string | 否 | 所属应用编号 |
| `appName` | string | 否 | 应用名称 |
| `riskLevel` | string | 否 | 风险等级 |
| `suiteId` | string | 否 | 分组编号 |
| `suiteName` | string | 否 | 分组名称 |
| `suiteDesc` | string | 否 | 分组描述 |
| `remark` | string | 否 | 备注 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |


### POST /asset/add/account-group

**标题**：账号分组新增

**所属分类**：关联中心前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，新增账号分组参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `suiteId` | string | 否 | 分组编号 |
| `suiteName` | string | 否 | 分组名称 |
| `suiteDesc` | string | 否 | 分组描述 |
| `accountIds` | array<string> | 否 | 账号id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |


### POST /asset/add/account-remark

**标题**：账号备注

**所属分类**：关联中心前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `accountId` | string | 否 | 账号id |
| `remark` | string | 否 | 账号备注 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |


### POST /asset/add/device-group

**标题**：设备分组新增

**所属分类**：关联中心前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，设备分组新增参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `suiteId` | string | 否 | 分组编号 |
| `suiteName` | string | 是 | 分组名称 |
| `suiteDesc` | string | 否 | 分组描述 |
| `mobiles` | array<object> | 否 | 设备信息 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |


### POST /asset/add/proxy

**标题**：新增代理

**所属分类**：关联中心前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，新增代理参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `ip` | string | 否 | IP地址 |
| `area` | string | 否 | 地区（如：北京、旧金山） |
| `agreement` | string | 否 | 协议类型（如HTTP/HTTPS、TCP/UDP） |
| `networkStatus` | string | 否 | 网络状态 BINDING(已绑定)/ARREARAGE(欠费)/LEISURE(空闲)/INVALID(无效) |
| `expirationTime` | string | 否 | 过期时间 |
| `networkLink` | string | 否 | 网络链接URL |
| `phones` | array<object> | 否 | 节点信息集合 |
| `proxyLinkIp` | string | 否 | 代理ip |
| `proxyLinkPort` | integer | 否 | 代理端口 |
| `username` | string | 否 | 用户名 |
| `password` | string | 否 | 密码 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |


### POST /asset/add/proxy-group

**标题**：新增代理分组

**所属分类**：关联中心前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，新增代理分组参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `suiteId` | string | 否 | 分组编号 |
| `suiteName` | string | 否 | 分组名称 |
| `suiteDesc` | string | 否 | 分组描述 |
| `proxyIds` | array<string> | 否 | 代理id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |


### POST /asset/add/proxy-remark

**标题**：新增代理备注

**所属分类**：关联中心前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，新增代理备注参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `proxyId` | string | 否 | 代理ID |
| `remark` | string | 否 | 代理备注 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |


### GET /asset/aibox-device

**标题**：查询aibox设备

**所属分类**：关联中心前端控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


### POST /asset/app/list

**标题**：应用列表

**所属分类**：关联中心前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，应用列表参数）

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


### DELETE /asset/batch/del-account

**标题**：批量删除账号

**所属分类**：关联中心前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，账号批量删除参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `accountIds` | array<string> | 否 | 账号id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |


### DELETE /asset/batch/del-proxy

**标题**：批量删除代理

**所属分类**：关联中心前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，代理批量删除参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `proxyIds` | array<string> | 否 | 代理id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |


### POST /asset/batch/new-device

**标题**：批量新机

**所属分类**：关联中心前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，新机参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceReqs` | array<object> | 否 | 一键新机设备信息集合 |
| `onClickNewBrandReqs` | array<object> | 否 | 手机品牌、运营商信息集合 |
| `operatorReqs` | array<object> | 否 | 运营商集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


### POST /asset/batch/reset-device

**标题**：批量重置设备

**所属分类**：关联中心前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，设备批量重置参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceIds` | array<string> | 否 | 容器id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |


### POST /asset/batch/unbind

**标题**：批量解绑

**所属分类**：关联中心前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceIds` | array<string> | 否 | 设备id集合 |
| `type` | string | 否 | 解绑类型 代理/账号/全部 |
| `isDel` | boolean | 否 | 是否删除 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |


### POST /asset/batch/unbind-account

**标题**：批量解绑账号

**所属分类**：关联中心前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `accountIds` | array<string> | 否 | 账号id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |


### POST /asset/batch/unbind-proxy

**标题**：批量解绑代理

**所属分类**：关联中心前端控制器

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
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |


### POST /asset/batch/update-account

**标题**：批量更新账号

**所属分类**：关联中心前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，账号批量删除参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `accountIds` | array<string> | 否 | 账号id集合 |
| `riskLevel` | string | 否 | - |
| `loginStatus` | string | 否 | - |
| `remark` | string | 否 | - |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |


### POST /asset/check/account-device

**标题**：校验账号与容器，代理与容器

**所属分类**：关联中心前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，校验参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceEnables` | array<object> | 否 | 启用参数 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |


### GET /asset/cloud-device

**标题**：查询cloud设备

**所属分类**：关联中心前端控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


### GET /asset/container/num

**标题**：获取容器池数量

**所属分类**：关联中心前端控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


### POST /asset/container/page

**标题**：容器分页

**所属分类**：关联中心前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，设备分页参数）

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
| `screening` | string | 否 | 设备筛选 |
| `search` | string | 否 | 设备搜索 |
| `suiteIds` | array<string> | 否 | 设备分组名称 |
| `relationStatus` | string | 否 | 关联状态 |
| `sortType` | string | 否 | 排序字段 |
| `server` | string | 否 | 所属服务器 |
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
| `lockIds` | array<string> | 否 | 锁id |
| `armId` | string | 否 | 所属服务器编号 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


### POST /asset/container/reset

**标题**：重置容器

**所属分类**：关联中心前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，重置容器参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceIds` | array<string> | 否 | 设备ID集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |


### DELETE /asset/dedicated-line

**标题**：取消配置专线配置

**所属分类**：关联中心前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceIds` | array<string> | 否 | 容器ID |
| `routeIp` | string | 否 | 路由IP |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |


### POST /asset/dedicated-line

**标题**：配置专线配置

**所属分类**：关联中心前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceIds` | array<string> | 否 | 容器ID |
| `routeIp` | string | 否 | 路由IP |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |


### GET /asset/device/brand

**标题**：获取所有设备和品牌

**所属分类**：关联中心前端控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


### GET /asset/device/detail/{deviceId}

**标题**：查询设备详情

**所属分类**：关联中心前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceId` | string | 是 | 设备id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


### POST /asset/device/disable

**标题**：调度禁用设备（标记设备不被调度中心选中）

**所属分类**：关联中心前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，禁用参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `projectId` | integer | 否 | 项目 ID |
| `deviceIds` | array<string> | 否 | 设备 ID 列表（支持批量） |
| `reason` | string | 否 | 禁用原因（可选） |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |


### POST /asset/device/enable

**标题**：取消调度禁用（恢复设备可被调度）

**所属分类**：关联中心前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，启用参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `projectId` | integer | 否 | 项目 ID |
| `deviceIds` | array<string> | 否 | 设备 ID 列表（支持批量） |
| `reason` | string | 否 | 禁用原因（可选） |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |


### GET /asset/device/group

**标题**：查询设备分组

**所属分类**：关联中心前端控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | array<object> | 否 | - |


### POST /asset/device/list

**标题**：设备列表

**所属分类**：关联中心前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，设备列表参数）

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
| `deviceIp` | string | 否 | 设备ip |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


### POST /asset/device/page

**标题**：获取容器资产分页信息

**所属分类**：关联中心前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，容器资产分页参数）

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
| `screening` | string | 否 | 容器筛选 |
| `search` | string | 否 | 容器搜索 |
| `groupId` | string | 否 | 容器分组 |
| `sort` | object | 否 | 排序 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


### POST /asset/device/remark

**标题**：新增设备备注

**所属分类**：关联中心前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，新增设备备注参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceId` | string | 否 | 设备ID |
| `remark` | string | 否 | 设备备注 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |


### POST /asset/enable

**标题**：正式启用

**所属分类**：关联中心前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，启用参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceEnables` | array<object> | 否 | 启用参数 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |


### GET /asset/enums

**标题**：获取枚举

**所属分类**：关联中心前端控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


### GET /asset/group

**标题**：查询分组

**所属分类**：关联中心前端控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | array<object> | 否 | - |


### POST /asset/intelligent/recognition

**标题**：智能识别

**所属分类**：关联中心前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，智能识别参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `networkLink` | string | 否 | 代理链接 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


### POST /asset/lock-account

**标题**：锁定账号

**所属分类**：关联中心前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，锁定账号参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `accountIds` | array<string> | 否 | 账号id集合 |
| `lock` | boolean | 否 | 是否锁定 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |


### POST /asset/lock-device

**标题**：锁定/解锁设备

**所属分类**：关联中心前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，锁定/解锁设备参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceIds` | array<string> | 否 | 设备ID集合 |
| `isLock` | boolean | 否 | 是否锁 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |


### POST /asset/network/test

**标题**：测试网络代理是否可用

**所属分类**：关联中心前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，代理id集合）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `ids` | array<string> | 否 | 代理id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


### POST /asset/new-device

**标题**：新机

**所属分类**：关联中心前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，新机参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceId` | string | 否 | 设备编号 |
| `armId` | string | 否 | 服务器编号 |
| `nodeId` | string | 否 | 节点编号 |
| `brand` | string | 否 | 品牌 |
| `category` | string | 否 | 型号 |
| `phoneNumber` | string | 否 | 手机号码 |
| `imei` | string | 否 | imei码 |
| `serialNumber` | string | 否 | 序列号 |
| `battery` | string | 否 | 电量 |
| `netOperator` | string | 否 | 运营商 |
| `imsi` | string | 否 | - |
| `sn` | string | 否 | - |
| `iccid` | string | 否 | - |
| `chipCode` | enum(ARM_3588/ARM_3399/REAL_MOBILE/C_ARM_392000/AIBOX_L02) | 否 | 芯片类型 |
| `areaCodeZone` | string | 否 | 时区 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |


### GET /asset/operator

**标题**：查询运营商

**所属分类**：关联中心前端控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | array<object> | 否 | - |


### PUT /asset/operator/update

**标题**：运营商详情或编辑

**所属分类**：关联中心前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，运营商id）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `operatorId` | string | 否 | 运营商id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


### POST /asset/proxy/batch/update

**标题**：批量编辑

**所属分类**：关联中心前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，代理资产分页参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `proxyIds` | array<string> | 否 | 地区 |
| `area` | string | 否 | 地区（如：北京、旧金山） |
| `agreement` | string | 否 | 协议类型（如HTTP/HTTPS、TCP/UDP） |
| `isRenew` | boolean | 否 | 是否续费 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


### POST /asset/proxy/import

**标题**：导入代理

**所属分类**：关联中心前端控制器

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
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | string | 否 | - |


### GET /asset/proxy/num

**标题**：获取代理池数量

**所属分类**：关联中心前端控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


### POST /asset/proxy/page

**标题**：获取代理资产分页信息

**所属分类**：关联中心前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，代理资产分页参数）

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
| `area` | array<string> | 否 | 地区 |
| `proxy` | string | 否 | 代理 |
| `suiteIds` | array<string> | 否 | 分组 |
| `sortType` | string | 否 | 排序条件   1. 按风险排序（低风险的靠上）   2. 按录入时间排序（新录入的先显示） |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


### GET /asset/proxy/region-tree

**标题**：获取代理地区树

**所属分类**：关联中心前端控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | array<object> | 否 | - |


### POST /asset/proxy/unbind

**标题**：解除绑定代理

**所属分类**：关联中心前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，解除绑定代理参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `assId` | string | 否 | 关联id集合 |
| `proxyId` | string | 否 | 代理id |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |


### POST /asset/remove-top

**标题**：移除置顶

**所属分类**：关联中心前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceIds` | array<string> | 否 | 设备ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |


### POST /asset/reverse/query

**标题**：反向查询

**所属分类**：关联中心前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，反向查询参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `accountIds` | array<string> | 否 | 账号id集合 |
| `proxyIds` | array<string> | 否 | 代理id集合 |
| `deviceIds` | array<string> | 否 | 容器id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


### GET /asset/summary

**标题**：获取汇总信息

**所属分类**：关联中心前端控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


### GET /asset/template/account

**标题**：下载账号模板

**所属分类**：关联中心前端控制器


### GET /asset/template/proxy

**标题**：下载代理模板

**所属分类**：关联中心前端控制器


### POST /asset/top

**标题**：置顶

**所属分类**：关联中心前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceIds` | array<string> | 否 | 设备ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |


### POST /asset/update-device-info

**标题**：更新设备信息

**所属分类**：关联中心前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，更新设备信息参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceIds` | array<string> | 是 | 设备ID集合 |
| `operation` | string | 否 | 操作指令，SHUTDOWN：关机/POWER_ON:开机/RESTART:重启/CHANGE_IMG:更换镜像/MODIFY:更新设备信息/GPS:修改定位信息 |
| `imgId` | string | 否 | 镜像ID |
| `modifyDeviceInfoReq` | object | 否 | 设备信息 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |


### POST /asset/update/proxy-group

**标题**：更新代理分组

**所属分类**：关联中心前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，更新代理分组参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `suiteId` | string | 否 | 分组编号 |
| `suiteName` | string | 否 | 分组名称 |
| `suiteDesc` | string | 否 | 分组描述 |
| `proxyIds` | array<string> | 否 | 代理id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |


### POST /asset/user/allocation

**标题**：用户分配

**所属分类**：关联中心前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceIds` | array<string> | 否 | 设备id集合 |
| `userIds` | array<string> | 否 | 用户id集合 |
| `networkIds` | array<string> | 否 | 网络id集合 |
| `accountIds` | array<string> | 否 | 账号id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |


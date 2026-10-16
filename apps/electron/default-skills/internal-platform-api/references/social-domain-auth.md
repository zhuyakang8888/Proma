# 社媒矩阵运营平台 —— 认证与后台管理域（/auth）

共 139 个接口。由 `scripts/gen-references.mjs` 从 `docs/api.json` 生成，请勿手改。

鉴权方式：使用 POST /auth/app/login，请求头 App-Key 与 App-Secret，请求体 username 与 password，响应顶层 token 字段，无验证码。业务接口的鉴权头默认为 Authorization: Bearer，尚未经真实调用验证，第一次联调时需确认。POST /auth/login 需要 code 与 uuid 验证码，不可用于自动化，仅作人工兜底。

返回总索引：[index.md](./index.md)

## 缓存监控

### GET /auth/monitor/cache

**标题**：获取Redis缓存监控信息

**所属分类**：缓存监控

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /auth/monitor/cache/clearCacheAll

**标题**：清空全部缓存

**所属分类**：缓存监控

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /auth/monitor/cache/clearCacheKey/{cacheKey}

**标题**：按缓存key清空缓存

**所属分类**：缓存监控

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `cacheKey` | string | 是 | 缓存key |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /auth/monitor/cache/clearCacheName/{cacheName}

**标题**：按缓存名称清空缓存

**所属分类**：缓存监控

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `cacheName` | string | 是 | 缓存名称 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /auth/monitor/cache/getKeys/{cacheName}

**标题**：获取指定缓存名称下的所有key

**所属分类**：缓存监控

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `cacheName` | string | 是 | 缓存名称 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /auth/monitor/cache/getNames

**标题**：获取系统预置缓存名称列表

**所属分类**：缓存监控

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /auth/monitor/cache/getValue/{cacheName}/{cacheKey}

**标题**：获取指定缓存的值

**所属分类**：缓存监控

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `cacheName` | string | 是 | 缓存名称 |
| `cacheKey` | string | 是 | 缓存key |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 服务器监控

### GET /auth/monitor/server

**标题**：获取服务器监控信息（CPU/内存/磁盘/JVM等）

**所属分类**：服务器监控

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 操作日志记录

### DELETE /auth/monitor/operlog/{operIds}

**标题**：删除操作日志

**所属分类**：操作日志记录

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `operIds` | string | 是 | 操作日志ID数组 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /auth/monitor/operlog/clean

**标题**：清空操作日志

**所属分类**：操作日志记录

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /auth/monitor/operlog/export

**标题**：导出操作日志

**所属分类**：操作日志记录

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/x-www-form-urlencoded |

**请求体**（form）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | text | 否 | 创建者 |
| `createTime` | text | 否 | 创建时间 |
| `updateBy` | text | 否 | 更新者 |
| `updateTime` | text | 否 | 更新时间 |
| `remark` | text | 否 | 备注 |
| `params.key.key` | text | 否 | - |
| `operId` | text | 否 | 日志主键 |
| `title` | text | 否 | 操作模块 |
| `businessType` | text | 否 | 业务类型（0其它 1新增 2修改 3删除） |
| `businessTypes[0]` | text | 否 | 业务类型数组 |
| `method` | text | 否 | 请求方法 |
| `requestMethod` | text | 否 | 请求方式 |
| `operatorType` | text | 否 | 操作类别（0其它 1后台用户 2手机端用户） |
| `operName` | text | 否 | 操作人员 |
| `deptName` | text | 否 | 部门名称 |
| `operUrl` | text | 否 | 请求url |
| `operIp` | text | 否 | 操作地址 |
| `operLocation` | text | 否 | 操作地点 |
| `operParam` | text | 否 | 请求参数 |
| `jsonResult` | text | 否 | 返回参数 |
| `status` | text | 否 | 操作状态（0正常 1异常） |
| `errorMsg` | text | 否 | 错误消息 |
| `operTime` | text | 否 | 操作时间 |
| `costTime` | text | 否 | 消耗时间 |


### GET /auth/monitor/operlog/list

**标题**：查询操作日志列表

**所属分类**：操作日志记录

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params.key.key` | string | 否 | - |
| `operId` | string | 否 | 日志主键 |
| `title` | string | 否 | 操作模块 |
| `businessType` | string | 否 | 业务类型（0其它 1新增 2修改 3删除） |
| `businessTypes[0]` | string | 否 | 业务类型数组 |
| `method` | string | 否 | 请求方法 |
| `requestMethod` | string | 否 | 请求方式 |
| `operatorType` | string | 否 | 操作类别（0其它 1后台用户 2手机端用户） |
| `operName` | string | 否 | 操作人员 |
| `deptName` | string | 否 | 部门名称 |
| `operUrl` | string | 否 | 请求url |
| `operIp` | string | 否 | 操作地址 |
| `operLocation` | string | 否 | 操作地点 |
| `operParam` | string | 否 | 请求参数 |
| `jsonResult` | string | 否 | 返回参数 |
| `status` | string | 否 | 操作状态（0正常 1异常） |
| `errorMsg` | string | 否 | 错误消息 |
| `operTime` | string | 否 | 操作时间 |
| `costTime` | string | 否 | 消耗时间 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `total` | integer | 否 | 总记录数 |
| `rows` | array<object> | 否 | 列表数据 |
| `code` | integer | 否 | 消息状态码 |
| `msg` | string | 否 | 消息内容 |


## 系统访问记录

### DELETE /auth/monitor/logininfor/{infoIds}

**标题**：删除登录日志

**所属分类**：系统访问记录

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `infoIds` | string | 是 | 登录日志ID数组 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /auth/monitor/logininfor/clean

**标题**：清空登录日志

**所属分类**：系统访问记录

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /auth/monitor/logininfor/export

**标题**：导出登录日志

**所属分类**：系统访问记录

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/x-www-form-urlencoded |

**请求体**（form）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | text | 否 | 创建者 |
| `createTime` | text | 否 | 创建时间 |
| `updateBy` | text | 否 | 更新者 |
| `updateTime` | text | 否 | 更新时间 |
| `remark` | text | 否 | 备注 |
| `params.key.key` | text | 否 | - |
| `infoId` | text | 否 | ID |
| `userName` | text | 否 | 用户账号 |
| `status` | text | 否 | 登录状态 0成功 1失败 |
| `ipaddr` | text | 否 | 登录IP地址 |
| `loginLocation` | text | 否 | 登录地点 |
| `browser` | text | 否 | 浏览器类型 |
| `os` | text | 否 | 操作系统 |
| `msg` | text | 否 | 提示消息 |
| `loginTime` | text | 否 | 访问时间 |


### GET /auth/monitor/logininfor/list

**标题**：查询登录日志列表

**所属分类**：系统访问记录

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params.key.key` | string | 否 | - |
| `infoId` | string | 否 | ID |
| `userName` | string | 否 | 用户账号 |
| `status` | string | 否 | 登录状态 0成功 1失败 |
| `ipaddr` | string | 否 | 登录IP地址 |
| `loginLocation` | string | 否 | 登录地点 |
| `browser` | string | 否 | 浏览器类型 |
| `os` | string | 否 | 操作系统 |
| `msg` | string | 否 | 提示消息 |
| `loginTime` | string | 否 | 访问时间 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `total` | integer | 否 | 总记录数 |
| `rows` | array<object> | 否 | 列表数据 |
| `code` | integer | 否 | 消息状态码 |
| `msg` | string | 否 | 消息内容 |


### GET /auth/monitor/logininfor/unlock/{userName}

**标题**：解锁账户（清理登录失败重试缓存）

**所属分类**：系统访问记录

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `userName` | string | 是 | 用户名 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 在线用户监控

### DELETE /auth/monitor/online/{tokenId}

**标题**：强退用户

**所属分类**：在线用户监控

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `tokenId` | string | 是 | 用户tokenId |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /auth/monitor/online/list

**标题**：查询在线用户列表

**所属分类**：在线用户监控

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `ipaddr` | string | 否 | 登录IP（可选过滤） |
| `userName` | string | 否 | 用户名（可选过滤） |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `total` | integer | 否 | 总记录数 |
| `rows` | array<object> | 否 | 列表数据 |
| `code` | integer | 否 | 消息状态码 |
| `msg` | string | 否 | 消息内容 |


## 应用信息Controller

### PUT /auth/system/app

**标题**：修改应用信息

**所属分类**：应用信息Controller

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，应用信息）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `appId` | integer | 否 | 应用ID |
| `appName` | string | 否 | 应用名称 |
| `appSort` | integer | 否 | 显示顺序 |
| `status` | string | 否 | 状态（0正常 1停用） |
| `appKey` | string | 否 | app key |
| `appSecret` | string | 否 | app secret |
| `trustedIp` | string | 否 | trustedIp 地址 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /auth/system/app

**标题**：新增应用信息

**所属分类**：应用信息Controller

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，应用信息）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `appId` | integer | 否 | 应用ID |
| `appName` | string | 否 | 应用名称 |
| `appSort` | integer | 否 | 显示顺序 |
| `status` | string | 否 | 状态（0正常 1停用） |
| `appKey` | string | 否 | app key |
| `appSecret` | string | 否 | app secret |
| `trustedIp` | string | 否 | trustedIp 地址 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /auth/system/app/{appId}

**标题**：根据应用ID获取应用信息详细信息

**所属分类**：应用信息Controller

**路径参数**

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


### DELETE /auth/system/app/{appIds}

**标题**：删除应用信息

**所属分类**：应用信息Controller

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `appIds` | string | 是 | 应用ID数组 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /auth/system/app/auth

**标题**：根据应用名称获取应用信息详细信息

**所属分类**：应用信息Controller

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `appName` | string | 是 | 应用名称 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /auth/system/app/export

**标题**：导出应用信息列表

**所属分类**：应用信息Controller

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/x-www-form-urlencoded |

**请求体**（form）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | text | 否 | 创建者 |
| `createTime` | text | 否 | 创建时间 |
| `updateBy` | text | 否 | 更新者 |
| `updateTime` | text | 否 | 更新时间 |
| `remark` | text | 否 | 备注 |
| `params.key.key` | text | 否 | - |
| `appId` | text | 否 | 应用ID |
| `appName` | text | 否 | 应用名称 |
| `appSort` | text | 否 | 显示顺序 |
| `status` | text | 否 | 状态（0正常 1停用） |
| `appKey` | text | 否 | app key |
| `appSecret` | text | 否 | app secret |
| `trustedIp` | text | 否 | trustedIp 地址 |


### GET /auth/system/app/list

**标题**：查询应用信息列表

**所属分类**：应用信息Controller

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params.key.key` | string | 否 | - |
| `appId` | string | 否 | 应用ID |
| `appName` | string | 否 | 应用名称 |
| `appSort` | string | 否 | 显示顺序 |
| `status` | string | 否 | 状态（0正常 1停用） |
| `appKey` | string | 否 | app key |
| `appSecret` | string | 否 | app secret |
| `trustedIp` | string | 否 | trustedIp 地址 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `total` | integer | 否 | 总记录数 |
| `rows` | array<object> | 否 | 列表数据 |
| `code` | integer | 否 | 消息状态码 |
| `msg` | string | 否 | 消息内容 |


## 部门信息

### PUT /auth/system/dept

**标题**：修改部门

**所属分类**：部门信息

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，部门信息）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `deptId` | integer | 否 | 部门ID |
| `parentId` | integer | 否 | 父部门ID |
| `ancestors` | string | 否 | 祖级列表 |
| `deptName` | string | 否 | 部门名称 |
| `orderNum` | integer | 否 | 显示顺序 |
| `leader` | string | 否 | 负责人 |
| `phone` | string | 否 | 联系电话 |
| `email` | string | 否 | 邮箱 |
| `status` | string | 否 | 部门状态:0正常,1停用 |
| `delFlag` | string | 否 | 删除标志（0代表存在 2代表删除） |
| `parentName` | string | 否 | 父部门名称 |
| `children` | array<object> | 否 | 子部门 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /auth/system/dept

**标题**：新增部门

**所属分类**：部门信息

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，部门信息）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `deptId` | integer | 否 | 部门ID |
| `parentId` | integer | 否 | 父部门ID |
| `ancestors` | string | 否 | 祖级列表 |
| `deptName` | string | 否 | 部门名称 |
| `orderNum` | integer | 否 | 显示顺序 |
| `leader` | string | 否 | 负责人 |
| `phone` | string | 否 | 联系电话 |
| `email` | string | 否 | 邮箱 |
| `status` | string | 否 | 部门状态:0正常,1停用 |
| `delFlag` | string | 否 | 删除标志（0代表存在 2代表删除） |
| `parentName` | string | 否 | 父部门名称 |
| `children` | array<object> | 否 | 子部门 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /auth/system/dept/{deptId}

**标题**：删除部门

**所属分类**：部门信息

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deptId` | string | 是 | 部门 ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /auth/system/dept/{deptId}

**标题**：根据部门编号获取详细信息

**所属分类**：部门信息

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deptId` | string | 是 | 部门 ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /auth/system/dept/list

**标题**：获取部门列表

**所属分类**：部门信息

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params.key.key` | string | 否 | - |
| `deptId` | string | 否 | 部门ID |
| `parentId` | string | 否 | 父部门ID |
| `ancestors` | string | 否 | 祖级列表 |
| `deptName` | string | 否 | 部门名称 |
| `orderNum` | string | 否 | 显示顺序 |
| `leader` | string | 否 | 负责人 |
| `phone` | string | 否 | 联系电话 |
| `email` | string | 否 | 邮箱 |
| `status` | string | 否 | 部门状态:0正常,1停用 |
| `delFlag` | string | 否 | 删除标志（0代表存在 2代表删除） |
| `parentName` | string | 否 | 父部门名称 |
| `children[0].createBy` | string | 否 | 创建者 |
| `children[0].createTime` | string | 否 | 创建时间 |
| `children[0].updateBy` | string | 否 | 更新者 |
| `children[0].updateTime` | string | 否 | 更新时间 |
| `children[0].remark` | string | 否 | 备注 |
| `children[0].params.key.key` | string | 否 | - |
| `children[0].deptId` | string | 否 | 部门ID |
| `children[0].parentId` | string | 否 | 父部门ID |
| `children[0].ancestors` | string | 否 | 祖级列表 |
| `children[0].deptName` | string | 否 | 部门名称 |
| `children[0].orderNum` | string | 否 | 显示顺序 |
| `children[0].leader` | string | 否 | 负责人 |
| `children[0].phone` | string | 否 | 联系电话 |
| `children[0].email` | string | 否 | 邮箱 |
| `children[0].status` | string | 否 | 部门状态:0正常,1停用 |
| `children[0].delFlag` | string | 否 | 删除标志（0代表存在 2代表删除） |
| `children[0].parentName` | string | 否 | 父部门名称 |
| `children[0].children[0].key` | string | 否 | - |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /auth/system/dept/list/exclude/{deptId}

**标题**：查询部门列表（排除节点）

**所属分类**：部门信息

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deptId` | string | 是 | 排除的部门 ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 菜单信息

### PUT /auth/system/menu

**标题**：修改菜单

**所属分类**：菜单信息

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，菜单信息）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `menuId` | integer | 否 | 菜单ID |
| `menuName` | string | 否 | 菜单名称 |
| `menuNameZhTw` | string | 否 | 菜单名称中文繁体 |
| `menuNameEnUs` | string | 否 | 菜单名称英文 |
| `menuNameViVn` | string | 否 | 菜单名称越南 |
| `menuNameThTh` | string | 否 | 菜单名称泰语 |
| `parentName` | string | 否 | 父菜单名称 |
| `parentId` | integer | 否 | 父菜单ID |
| `orderNum` | integer | 否 | 显示顺序 |
| `path` | string | 否 | 路由地址 |
| `component` | string | 否 | 组件路径 |
| `query` | string | 否 | 路由参数 |
| `isFrame` | string | 否 | 是否为外链（0是 1否） |
| `isCache` | string | 否 | 是否缓存（0缓存 1不缓存） |
| `menuType` | string | 否 | 类型（M目录 C菜单 F按钮） |
| `visible` | string | 否 | 显示状态（0显示 1隐藏） |
| `status` | string | 否 | 菜单状态（0正常 1停用） |
| `perms` | string | 否 | 权限字符串 |
| `icon` | string | 否 | 菜单图标 |
| `appId` | integer | 否 | 应用id |
| `meta` | object | 否 | - |
| `originId` | string | 否 | 菜单来源id |
| `children` | array<object> | 否 | 子菜单 |
| `logoPath` | string | 否 | logo路径 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /auth/system/menu

**标题**：新增菜单

**所属分类**：菜单信息

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，菜单信息）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `menuId` | integer | 否 | 菜单ID |
| `menuName` | string | 否 | 菜单名称 |
| `menuNameZhTw` | string | 否 | 菜单名称中文繁体 |
| `menuNameEnUs` | string | 否 | 菜单名称英文 |
| `menuNameViVn` | string | 否 | 菜单名称越南 |
| `menuNameThTh` | string | 否 | 菜单名称泰语 |
| `parentName` | string | 否 | 父菜单名称 |
| `parentId` | integer | 否 | 父菜单ID |
| `orderNum` | integer | 否 | 显示顺序 |
| `path` | string | 否 | 路由地址 |
| `component` | string | 否 | 组件路径 |
| `query` | string | 否 | 路由参数 |
| `isFrame` | string | 否 | 是否为外链（0是 1否） |
| `isCache` | string | 否 | 是否缓存（0缓存 1不缓存） |
| `menuType` | string | 否 | 类型（M目录 C菜单 F按钮） |
| `visible` | string | 否 | 显示状态（0显示 1隐藏） |
| `status` | string | 否 | 菜单状态（0正常 1停用） |
| `perms` | string | 否 | 权限字符串 |
| `icon` | string | 否 | 菜单图标 |
| `appId` | integer | 否 | 应用id |
| `meta` | object | 否 | - |
| `originId` | string | 否 | 菜单来源id |
| `children` | array<object> | 否 | 子菜单 |
| `logoPath` | string | 否 | logo路径 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /auth/system/menu/{appId}/list

**标题**：根据应用 ID 获取菜单列表

**所属分类**：菜单信息

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `appId` | string | 是 | 应用 ID |

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params.key.key` | string | 否 | - |
| `menuId` | string | 否 | 菜单ID |
| `menuName` | string | 否 | 菜单名称 |
| `menuNameZhTw` | string | 否 | 菜单名称中文繁体 |
| `menuNameEnUs` | string | 否 | 菜单名称英文 |
| `menuNameViVn` | string | 否 | 菜单名称越南 |
| `menuNameThTh` | string | 否 | 菜单名称泰语 |
| `parentName` | string | 否 | 父菜单名称 |
| `parentId` | string | 否 | 父菜单ID |
| `orderNum` | string | 否 | 显示顺序 |
| `path` | string | 否 | 路由地址 |
| `component` | string | 否 | 组件路径 |
| `query` | string | 否 | 路由参数 |
| `isFrame` | string | 否 | 是否为外链（0是 1否） |
| `isCache` | string | 否 | 是否缓存（0缓存 1不缓存） |
| `menuType` | string | 否 | 类型（M目录 C菜单 F按钮） |
| `visible` | string | 否 | 显示状态（0显示 1隐藏） |
| `status` | string | 否 | 菜单状态（0正常 1停用） |
| `perms` | string | 否 | 权限字符串 |
| `icon` | string | 否 | 菜单图标 |
| `appId` | string | 否 | 应用id |
| `meta.originId` | string | 否 | 应用id |
| `meta.title` | string | 否 | 应用名称 |
| `originId` | string | 否 | 菜单来源id |
| `children[0].createBy` | string | 否 | 创建者 |
| `children[0].createTime` | string | 否 | 创建时间 |
| `children[0].updateBy` | string | 否 | 更新者 |
| `children[0].updateTime` | string | 否 | 更新时间 |
| `children[0].remark` | string | 否 | 备注 |
| `children[0].params.key.key` | string | 否 | - |
| `children[0].menuId` | string | 否 | 菜单ID |
| `children[0].menuName` | string | 否 | 菜单名称 |
| `children[0].menuNameZhTw` | string | 否 | 菜单名称中文繁体 |
| `children[0].menuNameEnUs` | string | 否 | 菜单名称英文 |
| `children[0].menuNameViVn` | string | 否 | 菜单名称越南 |
| `children[0].menuNameThTh` | string | 否 | 菜单名称泰语 |
| `children[0].parentName` | string | 否 | 父菜单名称 |
| `children[0].parentId` | string | 否 | 父菜单ID |
| `children[0].orderNum` | string | 否 | 显示顺序 |
| `children[0].path` | string | 否 | 路由地址 |
| `children[0].component` | string | 否 | 组件路径 |
| `children[0].query` | string | 否 | 路由参数 |
| `children[0].isFrame` | string | 否 | 是否为外链（0是 1否） |
| `children[0].isCache` | string | 否 | 是否缓存（0缓存 1不缓存） |
| `children[0].menuType` | string | 否 | 类型（M目录 C菜单 F按钮） |
| `children[0].visible` | string | 否 | 显示状态（0显示 1隐藏） |
| `children[0].status` | string | 否 | 菜单状态（0正常 1停用） |
| `children[0].perms` | string | 否 | 权限字符串 |
| `children[0].icon` | string | 否 | 菜单图标 |
| `children[0].appId` | string | 否 | 应用id |
| `children[0].meta.originId` | string | 否 | 应用id |
| `children[0].meta.title` | string | 否 | 应用名称 |
| `children[0].originId` | string | 否 | 菜单来源id |
| `children[0].children[0].key` | string | 否 | - |
| `children[0].logoPath` | string | 否 | logo路径 |
| `logoPath` | string | 否 | logo路径 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /auth/system/menu/{appId}/tree

**标题**：获取菜单树形结构

**所属分类**：菜单信息

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `appId` | string | 是 | 应用 ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /auth/system/menu/{menuId}

**标题**：删除菜单

**所属分类**：菜单信息

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `menuId` | string | 是 | 菜单 ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /auth/system/menu/{menuId}

**标题**：根据菜单编号获取详细信息

**所属分类**：菜单信息

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `menuId` | string | 是 | 菜单 ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /auth/system/menu/addBatch

**标题**：批量新增菜单

**所属分类**：菜单信息

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


### DELETE /auth/system/menu/del

**标题**：根据菜单来源 id 删除菜单

**所属分类**：菜单信息

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，菜单来源 id 集合）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `originIds` | array<string> | 否 | - |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /auth/system/menu/gather

**标题**：查询菜单列表 没有token校验

**所属分类**：菜单信息

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /auth/system/menu/list

**标题**：获取菜单列表

**所属分类**：菜单信息

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params.key.key` | string | 否 | - |
| `menuId` | string | 否 | 菜单ID |
| `menuName` | string | 否 | 菜单名称 |
| `menuNameZhTw` | string | 否 | 菜单名称中文繁体 |
| `menuNameEnUs` | string | 否 | 菜单名称英文 |
| `menuNameViVn` | string | 否 | 菜单名称越南 |
| `menuNameThTh` | string | 否 | 菜单名称泰语 |
| `parentName` | string | 否 | 父菜单名称 |
| `parentId` | string | 否 | 父菜单ID |
| `orderNum` | string | 否 | 显示顺序 |
| `path` | string | 否 | 路由地址 |
| `component` | string | 否 | 组件路径 |
| `query` | string | 否 | 路由参数 |
| `isFrame` | string | 否 | 是否为外链（0是 1否） |
| `isCache` | string | 否 | 是否缓存（0缓存 1不缓存） |
| `menuType` | string | 否 | 类型（M目录 C菜单 F按钮） |
| `visible` | string | 否 | 显示状态（0显示 1隐藏） |
| `status` | string | 否 | 菜单状态（0正常 1停用） |
| `perms` | string | 否 | 权限字符串 |
| `icon` | string | 否 | 菜单图标 |
| `appId` | string | 否 | 应用id |
| `meta.originId` | string | 否 | 应用id |
| `meta.title` | string | 否 | 应用名称 |
| `originId` | string | 否 | 菜单来源id |
| `children[0].createBy` | string | 否 | 创建者 |
| `children[0].createTime` | string | 否 | 创建时间 |
| `children[0].updateBy` | string | 否 | 更新者 |
| `children[0].updateTime` | string | 否 | 更新时间 |
| `children[0].remark` | string | 否 | 备注 |
| `children[0].params.key.key` | string | 否 | - |
| `children[0].menuId` | string | 否 | 菜单ID |
| `children[0].menuName` | string | 否 | 菜单名称 |
| `children[0].menuNameZhTw` | string | 否 | 菜单名称中文繁体 |
| `children[0].menuNameEnUs` | string | 否 | 菜单名称英文 |
| `children[0].menuNameViVn` | string | 否 | 菜单名称越南 |
| `children[0].menuNameThTh` | string | 否 | 菜单名称泰语 |
| `children[0].parentName` | string | 否 | 父菜单名称 |
| `children[0].parentId` | string | 否 | 父菜单ID |
| `children[0].orderNum` | string | 否 | 显示顺序 |
| `children[0].path` | string | 否 | 路由地址 |
| `children[0].component` | string | 否 | 组件路径 |
| `children[0].query` | string | 否 | 路由参数 |
| `children[0].isFrame` | string | 否 | 是否为外链（0是 1否） |
| `children[0].isCache` | string | 否 | 是否缓存（0缓存 1不缓存） |
| `children[0].menuType` | string | 否 | 类型（M目录 C菜单 F按钮） |
| `children[0].visible` | string | 否 | 显示状态（0显示 1隐藏） |
| `children[0].status` | string | 否 | 菜单状态（0正常 1停用） |
| `children[0].perms` | string | 否 | 权限字符串 |
| `children[0].icon` | string | 否 | 菜单图标 |
| `children[0].appId` | string | 否 | 应用id |
| `children[0].meta.originId` | string | 否 | 应用id |
| `children[0].meta.title` | string | 否 | 应用名称 |
| `children[0].originId` | string | 否 | 菜单来源id |
| `children[0].children[0].key` | string | 否 | - |
| `children[0].logoPath` | string | 否 | logo路径 |
| `logoPath` | string | 否 | logo路径 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /auth/system/menu/list/{originId}

**标题**：根据来源 ID 查询菜单

**所属分类**：菜单信息

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `originId` | string | 是 | 来源 ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /auth/system/menu/listUnSafe

**标题**：获取菜单列表 - 无权限验证

**所属分类**：菜单信息

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params.key.key` | string | 否 | - |
| `menuId` | string | 否 | 菜单ID |
| `menuName` | string | 否 | 菜单名称 |
| `menuNameZhTw` | string | 否 | 菜单名称中文繁体 |
| `menuNameEnUs` | string | 否 | 菜单名称英文 |
| `menuNameViVn` | string | 否 | 菜单名称越南 |
| `menuNameThTh` | string | 否 | 菜单名称泰语 |
| `parentName` | string | 否 | 父菜单名称 |
| `parentId` | string | 否 | 父菜单ID |
| `orderNum` | string | 否 | 显示顺序 |
| `path` | string | 否 | 路由地址 |
| `component` | string | 否 | 组件路径 |
| `query` | string | 否 | 路由参数 |
| `isFrame` | string | 否 | 是否为外链（0是 1否） |
| `isCache` | string | 否 | 是否缓存（0缓存 1不缓存） |
| `menuType` | string | 否 | 类型（M目录 C菜单 F按钮） |
| `visible` | string | 否 | 显示状态（0显示 1隐藏） |
| `status` | string | 否 | 菜单状态（0正常 1停用） |
| `perms` | string | 否 | 权限字符串 |
| `icon` | string | 否 | 菜单图标 |
| `appId` | string | 否 | 应用id |
| `meta.originId` | string | 否 | 应用id |
| `meta.title` | string | 否 | 应用名称 |
| `originId` | string | 否 | 菜单来源id |
| `children[0].createBy` | string | 否 | 创建者 |
| `children[0].createTime` | string | 否 | 创建时间 |
| `children[0].updateBy` | string | 否 | 更新者 |
| `children[0].updateTime` | string | 否 | 更新时间 |
| `children[0].remark` | string | 否 | 备注 |
| `children[0].params.key.key` | string | 否 | - |
| `children[0].menuId` | string | 否 | 菜单ID |
| `children[0].menuName` | string | 否 | 菜单名称 |
| `children[0].menuNameZhTw` | string | 否 | 菜单名称中文繁体 |
| `children[0].menuNameEnUs` | string | 否 | 菜单名称英文 |
| `children[0].menuNameViVn` | string | 否 | 菜单名称越南 |
| `children[0].menuNameThTh` | string | 否 | 菜单名称泰语 |
| `children[0].parentName` | string | 否 | 父菜单名称 |
| `children[0].parentId` | string | 否 | 父菜单ID |
| `children[0].orderNum` | string | 否 | 显示顺序 |
| `children[0].path` | string | 否 | 路由地址 |
| `children[0].component` | string | 否 | 组件路径 |
| `children[0].query` | string | 否 | 路由参数 |
| `children[0].isFrame` | string | 否 | 是否为外链（0是 1否） |
| `children[0].isCache` | string | 否 | 是否缓存（0缓存 1不缓存） |
| `children[0].menuType` | string | 否 | 类型（M目录 C菜单 F按钮） |
| `children[0].visible` | string | 否 | 显示状态（0显示 1隐藏） |
| `children[0].status` | string | 否 | 菜单状态（0正常 1停用） |
| `children[0].perms` | string | 否 | 权限字符串 |
| `children[0].icon` | string | 否 | 菜单图标 |
| `children[0].appId` | string | 否 | 应用id |
| `children[0].meta.originId` | string | 否 | 应用id |
| `children[0].meta.title` | string | 否 | 应用名称 |
| `children[0].originId` | string | 否 | 菜单来源id |
| `children[0].children[0].key` | string | 否 | - |
| `children[0].logoPath` | string | 否 | logo路径 |
| `logoPath` | string | 否 | logo路径 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /auth/system/menu/roleMenuTreeselect/{roleId}

**标题**：加载对应角色菜单列表树

**所属分类**：菜单信息

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `roleId` | string | 是 | 角色 ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |
| `checkedKeys` | array<integer> | 否 | 选中key列表 |
| `menus` | array<object> | 否 | 菜单集合 |


### GET /auth/system/menu/treeselect

**标题**：获取菜单下拉树列表

**所属分类**：菜单信息

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params.key.key` | string | 否 | - |
| `menuId` | string | 否 | 菜单ID |
| `menuName` | string | 否 | 菜单名称 |
| `menuNameZhTw` | string | 否 | 菜单名称中文繁体 |
| `menuNameEnUs` | string | 否 | 菜单名称英文 |
| `menuNameViVn` | string | 否 | 菜单名称越南 |
| `menuNameThTh` | string | 否 | 菜单名称泰语 |
| `parentName` | string | 否 | 父菜单名称 |
| `parentId` | string | 否 | 父菜单ID |
| `orderNum` | string | 否 | 显示顺序 |
| `path` | string | 否 | 路由地址 |
| `component` | string | 否 | 组件路径 |
| `query` | string | 否 | 路由参数 |
| `isFrame` | string | 否 | 是否为外链（0是 1否） |
| `isCache` | string | 否 | 是否缓存（0缓存 1不缓存） |
| `menuType` | string | 否 | 类型（M目录 C菜单 F按钮） |
| `visible` | string | 否 | 显示状态（0显示 1隐藏） |
| `status` | string | 否 | 菜单状态（0正常 1停用） |
| `perms` | string | 否 | 权限字符串 |
| `icon` | string | 否 | 菜单图标 |
| `appId` | string | 否 | 应用id |
| `meta.originId` | string | 否 | 应用id |
| `meta.title` | string | 否 | 应用名称 |
| `originId` | string | 否 | 菜单来源id |
| `children[0].createBy` | string | 否 | 创建者 |
| `children[0].createTime` | string | 否 | 创建时间 |
| `children[0].updateBy` | string | 否 | 更新者 |
| `children[0].updateTime` | string | 否 | 更新时间 |
| `children[0].remark` | string | 否 | 备注 |
| `children[0].params.key.key` | string | 否 | - |
| `children[0].menuId` | string | 否 | 菜单ID |
| `children[0].menuName` | string | 否 | 菜单名称 |
| `children[0].menuNameZhTw` | string | 否 | 菜单名称中文繁体 |
| `children[0].menuNameEnUs` | string | 否 | 菜单名称英文 |
| `children[0].menuNameViVn` | string | 否 | 菜单名称越南 |
| `children[0].menuNameThTh` | string | 否 | 菜单名称泰语 |
| `children[0].parentName` | string | 否 | 父菜单名称 |
| `children[0].parentId` | string | 否 | 父菜单ID |
| `children[0].orderNum` | string | 否 | 显示顺序 |
| `children[0].path` | string | 否 | 路由地址 |
| `children[0].component` | string | 否 | 组件路径 |
| `children[0].query` | string | 否 | 路由参数 |
| `children[0].isFrame` | string | 否 | 是否为外链（0是 1否） |
| `children[0].isCache` | string | 否 | 是否缓存（0缓存 1不缓存） |
| `children[0].menuType` | string | 否 | 类型（M目录 C菜单 F按钮） |
| `children[0].visible` | string | 否 | 显示状态（0显示 1隐藏） |
| `children[0].status` | string | 否 | 菜单状态（0正常 1停用） |
| `children[0].perms` | string | 否 | 权限字符串 |
| `children[0].icon` | string | 否 | 菜单图标 |
| `children[0].appId` | string | 否 | 应用id |
| `children[0].meta.originId` | string | 否 | 应用id |
| `children[0].meta.title` | string | 否 | 应用名称 |
| `children[0].originId` | string | 否 | 菜单来源id |
| `children[0].children[0].key` | string | 否 | - |
| `children[0].logoPath` | string | 否 | logo路径 |
| `logoPath` | string | 否 | logo路径 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /auth/system/menu/update

**标题**：根据菜单来源 id 修改菜单

**所属分类**：菜单信息

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，菜单信息）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `menuId` | integer | 否 | 菜单ID |
| `menuName` | string | 否 | 菜单名称 |
| `menuNameZhTw` | string | 否 | 菜单名称中文繁体 |
| `menuNameEnUs` | string | 否 | 菜单名称英文 |
| `menuNameViVn` | string | 否 | 菜单名称越南 |
| `menuNameThTh` | string | 否 | 菜单名称泰语 |
| `parentName` | string | 否 | 父菜单名称 |
| `parentId` | integer | 否 | 父菜单ID |
| `orderNum` | integer | 否 | 显示顺序 |
| `path` | string | 否 | 路由地址 |
| `component` | string | 否 | 组件路径 |
| `query` | string | 否 | 路由参数 |
| `isFrame` | string | 否 | 是否为外链（0是 1否） |
| `isCache` | string | 否 | 是否缓存（0缓存 1不缓存） |
| `menuType` | string | 否 | 类型（M目录 C菜单 F按钮） |
| `visible` | string | 否 | 显示状态（0显示 1隐藏） |
| `status` | string | 否 | 菜单状态（0正常 1停用） |
| `perms` | string | 否 | 权限字符串 |
| `icon` | string | 否 | 菜单图标 |
| `appId` | integer | 否 | 应用id |
| `meta` | object | 否 | - |
| `originId` | string | 否 | 菜单来源id |
| `children` | array<object> | 否 | 子菜单 |
| `logoPath` | string | 否 | logo路径 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 岗位信息操作处理

### PUT /auth/system/post

**标题**：修改岗位

**所属分类**：岗位信息操作处理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，岗位信息）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `postId` | integer | 否 | 岗位序号 |
| `postCode` | string | 否 | 岗位编码 |
| `postName` | string | 否 | 岗位名称 |
| `postSort` | integer | 否 | 岗位排序 |
| `status` | string | 否 | 状态（0正常 1停用） |
| `flag` | boolean | 否 | 用户是否存在此岗位标识 默认不存在 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /auth/system/post

**标题**：新增岗位

**所属分类**：岗位信息操作处理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，岗位信息）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `postId` | integer | 否 | 岗位序号 |
| `postCode` | string | 否 | 岗位编码 |
| `postName` | string | 否 | 岗位名称 |
| `postSort` | integer | 否 | 岗位排序 |
| `status` | string | 否 | 状态（0正常 1停用） |
| `flag` | boolean | 否 | 用户是否存在此岗位标识 默认不存在 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /auth/system/post/{postId}

**标题**：根据岗位编号获取详细信息

**所属分类**：岗位信息操作处理

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `postId` | string | 是 | 岗位 ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /auth/system/post/{postIds}

**标题**：删除岗位

**所属分类**：岗位信息操作处理

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `postIds` | string | 是 | 岗位 ID 数组 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /auth/system/post/export

**标题**：导出岗位数据

**所属分类**：岗位信息操作处理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/x-www-form-urlencoded |

**请求体**（form）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | text | 否 | 创建者 |
| `createTime` | text | 否 | 创建时间 |
| `updateBy` | text | 否 | 更新者 |
| `updateTime` | text | 否 | 更新时间 |
| `remark` | text | 否 | 备注 |
| `params.key.key` | text | 否 | - |
| `postId` | text | 否 | 岗位序号 |
| `postCode` | text | 否 | 岗位编码 |
| `postName` | text | 否 | 岗位名称 |
| `postSort` | text | 否 | 岗位排序 |
| `status` | text | 否 | 状态（0正常 1停用） |
| `flag` | text | 否 | 用户是否存在此岗位标识 默认不存在 |


### GET /auth/system/post/list

**标题**：获取岗位列表

**所属分类**：岗位信息操作处理

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params.key.key` | string | 否 | - |
| `postId` | string | 否 | 岗位序号 |
| `postCode` | string | 否 | 岗位编码 |
| `postName` | string | 否 | 岗位名称 |
| `postSort` | string | 否 | 岗位排序 |
| `status` | string | 否 | 状态（0正常 1停用） |
| `flag` | string | 否 | 用户是否存在此岗位标识 默认不存在 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `total` | integer | 否 | 总记录数 |
| `rows` | array<object> | 否 | 列表数据 |
| `code` | integer | 否 | 消息状态码 |
| `msg` | string | 否 | 消息内容 |


### GET /auth/system/post/optionselect

**标题**：获取岗位选择框列表

**所属分类**：岗位信息操作处理

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 角色信息

### PUT /auth/system/role

**标题**：修改保存角色

**所属分类**：角色信息

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，角色信息）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `roleId` | integer | 否 | 角色ID |
| `roleName` | string | 否 | 角色名称 |
| `roleKey` | string | 否 | 角色权限 |
| `roleSort` | integer | 否 | 角色排序 |
| `dataScope` | string | 否 | 数据范围（1：所有数据权限；2：自定义数据权限；3：本部门数据权限；4：本部门及以下数据权限；5：仅本人数据权限） |
| `menuCheckStrictly` | boolean | 否 | 菜单树选择项是否关联显示（ 0：父子不互相关联显示 1：父子互相关联显示） |
| `deptCheckStrictly` | boolean | 否 | 部门树选择项是否关联显示（0：父子不互相关联显示 1：父子互相关联显示 ） |
| `status` | string | 否 | 角色状态（0正常 1停用） |
| `delFlag` | string | 否 | 删除标志（0代表存在 2代表删除） |
| `flag` | boolean | 否 | 用户是否存在此角色标识 默认不存在 |
| `menuIds` | array<integer> | 否 | 菜单组 |
| `deptIds` | array<integer> | 否 | 部门组（数据权限） |
| `permissions` | array<string> | 否 | 角色菜单权限 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /auth/system/role

**标题**：新增角色

**所属分类**：角色信息

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，角色信息）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `roleId` | integer | 否 | 角色ID |
| `roleName` | string | 否 | 角色名称 |
| `roleKey` | string | 否 | 角色权限 |
| `roleSort` | integer | 否 | 角色排序 |
| `dataScope` | string | 否 | 数据范围（1：所有数据权限；2：自定义数据权限；3：本部门数据权限；4：本部门及以下数据权限；5：仅本人数据权限） |
| `menuCheckStrictly` | boolean | 否 | 菜单树选择项是否关联显示（ 0：父子不互相关联显示 1：父子互相关联显示） |
| `deptCheckStrictly` | boolean | 否 | 部门树选择项是否关联显示（0：父子不互相关联显示 1：父子互相关联显示 ） |
| `status` | string | 否 | 角色状态（0正常 1停用） |
| `delFlag` | string | 否 | 删除标志（0代表存在 2代表删除） |
| `flag` | boolean | 否 | 用户是否存在此角色标识 默认不存在 |
| `menuIds` | array<integer> | 否 | 菜单组 |
| `deptIds` | array<integer> | 否 | 部门组（数据权限） |
| `permissions` | array<string> | 否 | 角色菜单权限 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /auth/system/role/{roleId}

**标题**：根据角色编号获取详细信息

**所属分类**：角色信息

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `roleId` | string | 是 | 角色 ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /auth/system/role/{roleIds}

**标题**：删除角色

**所属分类**：角色信息

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `roleIds` | string | 是 | 角色 ID 数组 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /auth/system/role/authUser/allocatedList

**标题**：查询已分配用户角色列表

**所属分类**：角色信息

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params.key.key` | string | 否 | - |
| `userId` | string | 否 | 用户ID |
| `deptId` | string | 否 | 部门ID |
| `userName` | string | 否 | 用户账号 |
| `nickName` | string | 否 | 用户昵称 |
| `email` | string | 否 | 用户邮箱 |
| `phonenumber` | string | 否 | 手机号码 |
| `sex` | string | 否 | 用户性别 |
| `avatar` | string | 否 | 用户头像 |
| `password` | string | 否 | 密码 |
| `status` | string | 否 | 帐号状态（0正常 1停用） |
| `delFlag` | string | 否 | 删除标志（0代表存在 2代表删除） |
| `loginIp` | string | 否 | 最后登录IP |
| `loginDate` | string | 否 | 最后登录时间 |
| `dept.createBy` | string | 否 | 创建者 |
| `dept.createTime` | string | 否 | 创建时间 |
| `dept.updateBy` | string | 否 | 更新者 |
| `dept.updateTime` | string | 否 | 更新时间 |
| `dept.remark` | string | 否 | 备注 |
| `dept.params.key.key` | string | 否 | - |
| `dept.deptId` | string | 否 | 部门ID |
| `dept.parentId` | string | 否 | 父部门ID |
| `dept.ancestors` | string | 否 | 祖级列表 |
| `dept.deptName` | string | 否 | 部门名称 |
| `dept.orderNum` | string | 否 | 显示顺序 |
| `dept.leader` | string | 否 | 负责人 |
| `dept.phone` | string | 否 | 联系电话 |
| `dept.email` | string | 否 | 邮箱 |
| `dept.status` | string | 否 | 部门状态:0正常,1停用 |
| `dept.delFlag` | string | 否 | 删除标志（0代表存在 2代表删除） |
| `dept.parentName` | string | 否 | 父部门名称 |
| `dept.children[0].createBy` | string | 否 | 创建者 |
| `dept.children[0].createTime` | string | 否 | 创建时间 |
| `dept.children[0].updateBy` | string | 否 | 更新者 |
| `dept.children[0].updateTime` | string | 否 | 更新时间 |
| `dept.children[0].remark` | string | 否 | 备注 |
| `dept.children[0].params.key.key` | string | 否 | - |
| `dept.children[0].deptId` | string | 否 | 部门ID |
| `dept.children[0].parentId` | string | 否 | 父部门ID |
| `dept.children[0].ancestors` | string | 否 | 祖级列表 |
| `dept.children[0].deptName` | string | 否 | 部门名称 |
| `dept.children[0].orderNum` | string | 否 | 显示顺序 |
| `dept.children[0].leader` | string | 否 | 负责人 |
| `dept.children[0].phone` | string | 否 | 联系电话 |
| `dept.children[0].email` | string | 否 | 邮箱 |
| `dept.children[0].status` | string | 否 | 部门状态:0正常,1停用 |
| `dept.children[0].delFlag` | string | 否 | 删除标志（0代表存在 2代表删除） |
| `dept.children[0].parentName` | string | 否 | 父部门名称 |
| `dept.children[0].children[0].key` | string | 否 | - |
| `roles[0].createBy` | string | 否 | 创建者 |
| `roles[0].createTime` | string | 否 | 创建时间 |
| `roles[0].updateBy` | string | 否 | 更新者 |
| `roles[0].updateTime` | string | 否 | 更新时间 |
| `roles[0].remark` | string | 否 | 备注 |
| `roles[0].params.key.key` | string | 否 | - |
| `roles[0].roleId` | string | 否 | 角色ID |
| `roles[0].roleName` | string | 否 | 角色名称 |
| `roles[0].roleKey` | string | 否 | 角色权限 |
| `roles[0].roleSort` | string | 否 | 角色排序 |
| `roles[0].dataScope` | string | 否 | 数据范围（1：所有数据权限；2：自定义数据权限；3：本部门数据权限；4：本部门及以下数据权限；5：仅本人数据权限） |
| `roles[0].menuCheckStrictly` | string | 否 | 菜单树选择项是否关联显示（ 0：父子不互相关联显示 1：父子互相关联显示） |
| `roles[0].deptCheckStrictly` | string | 否 | 部门树选择项是否关联显示（0：父子不互相关联显示 1：父子互相关联显示 ） |
| `roles[0].status` | string | 否 | 角色状态（0正常 1停用） |
| `roles[0].delFlag` | string | 否 | 删除标志（0代表存在 2代表删除） |
| `roles[0].flag` | string | 否 | 用户是否存在此角色标识 默认不存在 |
| `roles[0].menuIds[0]` | string | 否 | 菜单组 |
| `roles[0].deptIds[0]` | string | 否 | 部门组（数据权限） |
| `roles[0].permissions[0]` | string | 否 | 角色菜单权限 |
| `roleIds[0]` | string | 否 | 角色组 |
| `postIds[0]` | string | 否 | 岗位组 |
| `roleId` | string | 否 | 角色ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `total` | integer | 否 | 总记录数 |
| `rows` | array<object> | 否 | 列表数据 |
| `code` | integer | 否 | 消息状态码 |
| `msg` | string | 否 | 消息内容 |


### PUT /auth/system/role/authUser/cancel

**标题**：取消授权用户

**所属分类**：角色信息

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，用户角色关联）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `userId` | integer | 否 | 用户ID |
| `roleId` | integer | 否 | 角色ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /auth/system/role/authUser/cancelAll

**标题**：批量取消授权用户

**所属分类**：角色信息

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `roleId` | string | 否 | 角色 ID |
| `userIds` | string | 否 | 用户 ID 数组 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /auth/system/role/authUser/selectAll

**标题**：批量选择用户授权

**所属分类**：角色信息

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `roleId` | string | 否 | 角色 ID |
| `userIds` | string | 否 | 用户 ID 数组 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /auth/system/role/authUser/unallocatedList

**标题**：查询未分配用户角色列表

**所属分类**：角色信息

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params.key.key` | string | 否 | - |
| `userId` | string | 否 | 用户ID |
| `deptId` | string | 否 | 部门ID |
| `userName` | string | 否 | 用户账号 |
| `nickName` | string | 否 | 用户昵称 |
| `email` | string | 否 | 用户邮箱 |
| `phonenumber` | string | 否 | 手机号码 |
| `sex` | string | 否 | 用户性别 |
| `avatar` | string | 否 | 用户头像 |
| `password` | string | 否 | 密码 |
| `status` | string | 否 | 帐号状态（0正常 1停用） |
| `delFlag` | string | 否 | 删除标志（0代表存在 2代表删除） |
| `loginIp` | string | 否 | 最后登录IP |
| `loginDate` | string | 否 | 最后登录时间 |
| `dept.createBy` | string | 否 | 创建者 |
| `dept.createTime` | string | 否 | 创建时间 |
| `dept.updateBy` | string | 否 | 更新者 |
| `dept.updateTime` | string | 否 | 更新时间 |
| `dept.remark` | string | 否 | 备注 |
| `dept.params.key.key` | string | 否 | - |
| `dept.deptId` | string | 否 | 部门ID |
| `dept.parentId` | string | 否 | 父部门ID |
| `dept.ancestors` | string | 否 | 祖级列表 |
| `dept.deptName` | string | 否 | 部门名称 |
| `dept.orderNum` | string | 否 | 显示顺序 |
| `dept.leader` | string | 否 | 负责人 |
| `dept.phone` | string | 否 | 联系电话 |
| `dept.email` | string | 否 | 邮箱 |
| `dept.status` | string | 否 | 部门状态:0正常,1停用 |
| `dept.delFlag` | string | 否 | 删除标志（0代表存在 2代表删除） |
| `dept.parentName` | string | 否 | 父部门名称 |
| `dept.children[0].createBy` | string | 否 | 创建者 |
| `dept.children[0].createTime` | string | 否 | 创建时间 |
| `dept.children[0].updateBy` | string | 否 | 更新者 |
| `dept.children[0].updateTime` | string | 否 | 更新时间 |
| `dept.children[0].remark` | string | 否 | 备注 |
| `dept.children[0].params.key.key` | string | 否 | - |
| `dept.children[0].deptId` | string | 否 | 部门ID |
| `dept.children[0].parentId` | string | 否 | 父部门ID |
| `dept.children[0].ancestors` | string | 否 | 祖级列表 |
| `dept.children[0].deptName` | string | 否 | 部门名称 |
| `dept.children[0].orderNum` | string | 否 | 显示顺序 |
| `dept.children[0].leader` | string | 否 | 负责人 |
| `dept.children[0].phone` | string | 否 | 联系电话 |
| `dept.children[0].email` | string | 否 | 邮箱 |
| `dept.children[0].status` | string | 否 | 部门状态:0正常,1停用 |
| `dept.children[0].delFlag` | string | 否 | 删除标志（0代表存在 2代表删除） |
| `dept.children[0].parentName` | string | 否 | 父部门名称 |
| `dept.children[0].children[0].key` | string | 否 | - |
| `roles[0].createBy` | string | 否 | 创建者 |
| `roles[0].createTime` | string | 否 | 创建时间 |
| `roles[0].updateBy` | string | 否 | 更新者 |
| `roles[0].updateTime` | string | 否 | 更新时间 |
| `roles[0].remark` | string | 否 | 备注 |
| `roles[0].params.key.key` | string | 否 | - |
| `roles[0].roleId` | string | 否 | 角色ID |
| `roles[0].roleName` | string | 否 | 角色名称 |
| `roles[0].roleKey` | string | 否 | 角色权限 |
| `roles[0].roleSort` | string | 否 | 角色排序 |
| `roles[0].dataScope` | string | 否 | 数据范围（1：所有数据权限；2：自定义数据权限；3：本部门数据权限；4：本部门及以下数据权限；5：仅本人数据权限） |
| `roles[0].menuCheckStrictly` | string | 否 | 菜单树选择项是否关联显示（ 0：父子不互相关联显示 1：父子互相关联显示） |
| `roles[0].deptCheckStrictly` | string | 否 | 部门树选择项是否关联显示（0：父子不互相关联显示 1：父子互相关联显示 ） |
| `roles[0].status` | string | 否 | 角色状态（0正常 1停用） |
| `roles[0].delFlag` | string | 否 | 删除标志（0代表存在 2代表删除） |
| `roles[0].flag` | string | 否 | 用户是否存在此角色标识 默认不存在 |
| `roles[0].menuIds[0]` | string | 否 | 菜单组 |
| `roles[0].deptIds[0]` | string | 否 | 部门组（数据权限） |
| `roles[0].permissions[0]` | string | 否 | 角色菜单权限 |
| `roleIds[0]` | string | 否 | 角色组 |
| `postIds[0]` | string | 否 | 岗位组 |
| `roleId` | string | 否 | 角色ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `total` | integer | 否 | 总记录数 |
| `rows` | array<object> | 否 | 列表数据 |
| `code` | integer | 否 | 消息状态码 |
| `msg` | string | 否 | 消息内容 |


### PUT /auth/system/role/changeStatus

**标题**：状态修改

**所属分类**：角色信息

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，角色信息）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `roleId` | integer | 否 | 角色ID |
| `roleName` | string | 否 | 角色名称 |
| `roleKey` | string | 否 | 角色权限 |
| `roleSort` | integer | 否 | 角色排序 |
| `dataScope` | string | 否 | 数据范围（1：所有数据权限；2：自定义数据权限；3：本部门数据权限；4：本部门及以下数据权限；5：仅本人数据权限） |
| `menuCheckStrictly` | boolean | 否 | 菜单树选择项是否关联显示（ 0：父子不互相关联显示 1：父子互相关联显示） |
| `deptCheckStrictly` | boolean | 否 | 部门树选择项是否关联显示（0：父子不互相关联显示 1：父子互相关联显示 ） |
| `status` | string | 否 | 角色状态（0正常 1停用） |
| `delFlag` | string | 否 | 删除标志（0代表存在 2代表删除） |
| `flag` | boolean | 否 | 用户是否存在此角色标识 默认不存在 |
| `menuIds` | array<integer> | 否 | 菜单组 |
| `deptIds` | array<integer> | 否 | 部门组（数据权限） |
| `permissions` | array<string> | 否 | 角色菜单权限 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /auth/system/role/dataScope

**标题**：修改保存数据权限

**所属分类**：角色信息

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，角色信息）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `roleId` | integer | 否 | 角色ID |
| `roleName` | string | 否 | 角色名称 |
| `roleKey` | string | 否 | 角色权限 |
| `roleSort` | integer | 否 | 角色排序 |
| `dataScope` | string | 否 | 数据范围（1：所有数据权限；2：自定义数据权限；3：本部门数据权限；4：本部门及以下数据权限；5：仅本人数据权限） |
| `menuCheckStrictly` | boolean | 否 | 菜单树选择项是否关联显示（ 0：父子不互相关联显示 1：父子互相关联显示） |
| `deptCheckStrictly` | boolean | 否 | 部门树选择项是否关联显示（0：父子不互相关联显示 1：父子互相关联显示 ） |
| `status` | string | 否 | 角色状态（0正常 1停用） |
| `delFlag` | string | 否 | 删除标志（0代表存在 2代表删除） |
| `flag` | boolean | 否 | 用户是否存在此角色标识 默认不存在 |
| `menuIds` | array<integer> | 否 | 菜单组 |
| `deptIds` | array<integer> | 否 | 部门组（数据权限） |
| `permissions` | array<string> | 否 | 角色菜单权限 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /auth/system/role/deptTree/{roleId}

**标题**：获取对应角色部门树列表

**所属分类**：角色信息

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `roleId` | string | 是 | 角色 ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |
| `checkedKeys` | array<integer> | 否 | 选中的部门 |
| `depts` | array<object> | 否 | 部门列表 |


### POST /auth/system/role/export

**标题**：导出角色数据

**所属分类**：角色信息

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/x-www-form-urlencoded |

**请求体**（form）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | text | 否 | 创建者 |
| `createTime` | text | 否 | 创建时间 |
| `updateBy` | text | 否 | 更新者 |
| `updateTime` | text | 否 | 更新时间 |
| `remark` | text | 否 | 备注 |
| `params.key.key` | text | 否 | - |
| `roleId` | text | 否 | 角色ID |
| `roleName` | text | 否 | 角色名称 |
| `roleKey` | text | 否 | 角色权限 |
| `roleSort` | text | 否 | 角色排序 |
| `dataScope` | text | 否 | 数据范围（1：所有数据权限；2：自定义数据权限；3：本部门数据权限；4：本部门及以下数据权限；5：仅本人数据权限） |
| `menuCheckStrictly` | text | 否 | 菜单树选择项是否关联显示（ 0：父子不互相关联显示 1：父子互相关联显示） |
| `deptCheckStrictly` | text | 否 | 部门树选择项是否关联显示（0：父子不互相关联显示 1：父子互相关联显示 ） |
| `status` | text | 否 | 角色状态（0正常 1停用） |
| `delFlag` | text | 否 | 删除标志（0代表存在 2代表删除） |
| `flag` | text | 否 | 用户是否存在此角色标识 默认不存在 |
| `menuIds[0]` | text | 否 | 菜单组 |
| `deptIds[0]` | text | 否 | 部门组（数据权限） |
| `permissions[0]` | text | 否 | 角色菜单权限 |


### GET /auth/system/role/list

**标题**：查询角色列表

**所属分类**：角色信息

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params.key.key` | string | 否 | - |
| `roleId` | string | 否 | 角色ID |
| `roleName` | string | 否 | 角色名称 |
| `roleKey` | string | 否 | 角色权限 |
| `roleSort` | string | 否 | 角色排序 |
| `dataScope` | string | 否 | 数据范围（1：所有数据权限；2：自定义数据权限；3：本部门数据权限；4：本部门及以下数据权限；5：仅本人数据权限） |
| `menuCheckStrictly` | string | 否 | 菜单树选择项是否关联显示（ 0：父子不互相关联显示 1：父子互相关联显示） |
| `deptCheckStrictly` | string | 否 | 部门树选择项是否关联显示（0：父子不互相关联显示 1：父子互相关联显示 ） |
| `status` | string | 否 | 角色状态（0正常 1停用） |
| `delFlag` | string | 否 | 删除标志（0代表存在 2代表删除） |
| `flag` | string | 否 | 用户是否存在此角色标识 默认不存在 |
| `menuIds[0]` | string | 否 | 菜单组 |
| `deptIds[0]` | string | 否 | 部门组（数据权限） |
| `permissions[0]` | string | 否 | 角色菜单权限 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `total` | integer | 否 | 总记录数 |
| `rows` | array<object> | 否 | 列表数据 |
| `code` | integer | 否 | 消息状态码 |
| `msg` | string | 否 | 消息内容 |


### GET /auth/system/role/optionselect

**标题**：获取角色选择框列表

**所属分类**：角色信息

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 用户信息

### PUT /auth/system/user

**标题**：修改用户

**所属分类**：用户信息

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，用户信息）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `userId` | integer | 否 | 用户ID |
| `deptId` | integer | 否 | 部门ID |
| `userName` | string | 否 | 用户账号 |
| `nickName` | string | 否 | 用户昵称 |
| `email` | string | 否 | 用户邮箱 |
| `phonenumber` | string | 否 | 手机号码 |
| `sex` | string | 否 | 用户性别 |
| `avatar` | string | 否 | 用户头像 |
| `password` | string | 否 | 密码 |
| `status` | string | 否 | 帐号状态（0正常 1停用） |
| `delFlag` | string | 否 | 删除标志（0代表存在 2代表删除） |
| `loginIp` | string | 否 | 最后登录IP |
| `loginDate` | string | 否 | 最后登录时间 |
| `dept` | object | 否 | 部门对象 |
| `roles` | array<object> | 否 | 角色对象 |
| `roleIds` | array<integer> | 否 | 角色组 |
| `postIds` | array<integer> | 否 | 岗位组 |
| `roleId` | integer | 否 | 角色ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /auth/system/user

**标题**：新增用户

**所属分类**：用户信息

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，用户信息）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `userId` | integer | 否 | 用户ID |
| `deptId` | integer | 否 | 部门ID |
| `userName` | string | 否 | 用户账号 |
| `nickName` | string | 否 | 用户昵称 |
| `email` | string | 否 | 用户邮箱 |
| `phonenumber` | string | 否 | 手机号码 |
| `sex` | string | 否 | 用户性别 |
| `avatar` | string | 否 | 用户头像 |
| `password` | string | 否 | 密码 |
| `status` | string | 否 | 帐号状态（0正常 1停用） |
| `delFlag` | string | 否 | 删除标志（0代表存在 2代表删除） |
| `loginIp` | string | 否 | 最后登录IP |
| `loginDate` | string | 否 | 最后登录时间 |
| `dept` | object | 否 | 部门对象 |
| `roles` | array<object> | 否 | 角色对象 |
| `roleIds` | array<integer> | 否 | 角色组 |
| `postIds` | array<integer> | 否 | 岗位组 |
| `roleId` | integer | 否 | 角色ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /auth/system/user/

**标题**：根据用户编号获取详细信息

**所属分类**：用户信息

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `userId` | string | 是 | 用户 ID(可选,为空时返回空数据供新增使用) |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |
| `roles` | array<object> | 否 | 角色列表 |
| `posts` | array<object> | 否 | 岗位列表 |
| `postIds` | array<integer> | 否 | 岗位 ids |
| `roleIds` | array<integer> | 否 | 角色 ids |


### DELETE /auth/system/user/{userIds}

**标题**：删除用户

**所属分类**：用户信息

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `userIds` | string | 是 | 用户 ID 数组 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /auth/system/user/authRole

**标题**：用户授权角色

**所属分类**：用户信息

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `userId` | string | 否 | 用户 ID |
| `roleIds` | string | 否 | 角色 ID 数组 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /auth/system/user/authRole/{userId}

**标题**：根据用户编号获取授权角色

**所属分类**：用户信息

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `userId` | string | 是 | 用户 ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |
| `user` | object | 否 | 用户信息 |
| `roles` | array<object> | 否 | 角色列表 |


### PUT /auth/system/user/changeStatus

**标题**：状态修改

**所属分类**：用户信息

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，用户信息(含状态)）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `userId` | integer | 否 | 用户ID |
| `deptId` | integer | 否 | 部门ID |
| `userName` | string | 否 | 用户账号 |
| `nickName` | string | 否 | 用户昵称 |
| `email` | string | 否 | 用户邮箱 |
| `phonenumber` | string | 否 | 手机号码 |
| `sex` | string | 否 | 用户性别 |
| `avatar` | string | 否 | 用户头像 |
| `password` | string | 否 | 密码 |
| `status` | string | 否 | 帐号状态（0正常 1停用） |
| `delFlag` | string | 否 | 删除标志（0代表存在 2代表删除） |
| `loginIp` | string | 否 | 最后登录IP |
| `loginDate` | string | 否 | 最后登录时间 |
| `dept` | object | 否 | 部门对象 |
| `roles` | array<object> | 否 | 角色对象 |
| `roleIds` | array<integer> | 否 | 角色组 |
| `postIds` | array<integer> | 否 | 岗位组 |
| `roleId` | integer | 否 | 角色ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /auth/system/user/count

**标题**：查询用户总数和已使用的用户数量

**所属分类**：用户信息

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /auth/system/user/deptTree

**标题**：获取部门树列表

**所属分类**：用户信息

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params.key.key` | string | 否 | - |
| `deptId` | string | 否 | 部门ID |
| `parentId` | string | 否 | 父部门ID |
| `ancestors` | string | 否 | 祖级列表 |
| `deptName` | string | 否 | 部门名称 |
| `orderNum` | string | 否 | 显示顺序 |
| `leader` | string | 否 | 负责人 |
| `phone` | string | 否 | 联系电话 |
| `email` | string | 否 | 邮箱 |
| `status` | string | 否 | 部门状态:0正常,1停用 |
| `delFlag` | string | 否 | 删除标志（0代表存在 2代表删除） |
| `parentName` | string | 否 | 父部门名称 |
| `children[0].createBy` | string | 否 | 创建者 |
| `children[0].createTime` | string | 否 | 创建时间 |
| `children[0].updateBy` | string | 否 | 更新者 |
| `children[0].updateTime` | string | 否 | 更新时间 |
| `children[0].remark` | string | 否 | 备注 |
| `children[0].params.key.key` | string | 否 | - |
| `children[0].deptId` | string | 否 | 部门ID |
| `children[0].parentId` | string | 否 | 父部门ID |
| `children[0].ancestors` | string | 否 | 祖级列表 |
| `children[0].deptName` | string | 否 | 部门名称 |
| `children[0].orderNum` | string | 否 | 显示顺序 |
| `children[0].leader` | string | 否 | 负责人 |
| `children[0].phone` | string | 否 | 联系电话 |
| `children[0].email` | string | 否 | 邮箱 |
| `children[0].status` | string | 否 | 部门状态:0正常,1停用 |
| `children[0].delFlag` | string | 否 | 删除标志（0代表存在 2代表删除） |
| `children[0].parentName` | string | 否 | 父部门名称 |
| `children[0].children[0].key` | string | 否 | - |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /auth/system/user/export

**标题**：导出用户数据

**所属分类**：用户信息

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/x-www-form-urlencoded |

**请求体**（form）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | text | 否 | 创建者 |
| `createTime` | text | 否 | 创建时间 |
| `updateBy` | text | 否 | 更新者 |
| `updateTime` | text | 否 | 更新时间 |
| `remark` | text | 否 | 备注 |
| `params.key.key` | text | 否 | - |
| `userId` | text | 否 | 用户ID |
| `deptId` | text | 否 | 部门ID |
| `userName` | text | 否 | 用户账号 |
| `nickName` | text | 否 | 用户昵称 |
| `email` | text | 否 | 用户邮箱 |
| `phonenumber` | text | 否 | 手机号码 |
| `sex` | text | 否 | 用户性别 |
| `avatar` | text | 否 | 用户头像 |
| `password` | text | 否 | 密码 |
| `status` | text | 否 | 帐号状态（0正常 1停用） |
| `delFlag` | text | 否 | 删除标志（0代表存在 2代表删除） |
| `loginIp` | text | 否 | 最后登录IP |
| `loginDate` | text | 否 | 最后登录时间 |
| `dept.createBy` | text | 否 | 创建者 |
| `dept.createTime` | text | 否 | 创建时间 |
| `dept.updateBy` | text | 否 | 更新者 |
| `dept.updateTime` | text | 否 | 更新时间 |
| `dept.remark` | text | 否 | 备注 |
| `dept.params.key.key` | text | 否 | - |
| `dept.deptId` | text | 否 | 部门ID |
| `dept.parentId` | text | 否 | 父部门ID |
| `dept.ancestors` | text | 否 | 祖级列表 |
| `dept.deptName` | text | 否 | 部门名称 |
| `dept.orderNum` | text | 否 | 显示顺序 |
| `dept.leader` | text | 否 | 负责人 |
| `dept.phone` | text | 否 | 联系电话 |
| `dept.email` | text | 否 | 邮箱 |
| `dept.status` | text | 否 | 部门状态:0正常,1停用 |
| `dept.delFlag` | text | 否 | 删除标志（0代表存在 2代表删除） |
| `dept.parentName` | text | 否 | 父部门名称 |
| `dept.children[0].createBy` | text | 否 | 创建者 |
| `dept.children[0].createTime` | text | 否 | 创建时间 |
| `dept.children[0].updateBy` | text | 否 | 更新者 |
| `dept.children[0].updateTime` | text | 否 | 更新时间 |
| `dept.children[0].remark` | text | 否 | 备注 |
| `dept.children[0].params.key.key` | text | 否 | - |
| `dept.children[0].deptId` | text | 否 | 部门ID |
| `dept.children[0].parentId` | text | 否 | 父部门ID |
| `dept.children[0].ancestors` | text | 否 | 祖级列表 |
| `dept.children[0].deptName` | text | 否 | 部门名称 |
| `dept.children[0].orderNum` | text | 否 | 显示顺序 |
| `dept.children[0].leader` | text | 否 | 负责人 |
| `dept.children[0].phone` | text | 否 | 联系电话 |
| `dept.children[0].email` | text | 否 | 邮箱 |
| `dept.children[0].status` | text | 否 | 部门状态:0正常,1停用 |
| `dept.children[0].delFlag` | text | 否 | 删除标志（0代表存在 2代表删除） |
| `dept.children[0].parentName` | text | 否 | 父部门名称 |
| `dept.children[0].children[0].key` | text | 否 | - |
| `roles[0].createBy` | text | 否 | 创建者 |
| `roles[0].createTime` | text | 否 | 创建时间 |
| `roles[0].updateBy` | text | 否 | 更新者 |
| `roles[0].updateTime` | text | 否 | 更新时间 |
| `roles[0].remark` | text | 否 | 备注 |
| `roles[0].params.key.key` | text | 否 | - |
| `roles[0].roleId` | text | 否 | 角色ID |
| `roles[0].roleName` | text | 否 | 角色名称 |
| `roles[0].roleKey` | text | 否 | 角色权限 |
| `roles[0].roleSort` | text | 否 | 角色排序 |
| `roles[0].dataScope` | text | 否 | 数据范围（1：所有数据权限；2：自定义数据权限；3：本部门数据权限；4：本部门及以下数据权限；5：仅本人数据权限） |
| `roles[0].menuCheckStrictly` | text | 否 | 菜单树选择项是否关联显示（ 0：父子不互相关联显示 1：父子互相关联显示） |
| `roles[0].deptCheckStrictly` | text | 否 | 部门树选择项是否关联显示（0：父子不互相关联显示 1：父子互相关联显示 ） |
| `roles[0].status` | text | 否 | 角色状态（0正常 1停用） |
| `roles[0].delFlag` | text | 否 | 删除标志（0代表存在 2代表删除） |
| `roles[0].flag` | text | 否 | 用户是否存在此角色标识 默认不存在 |
| `roles[0].menuIds[0]` | text | 否 | 菜单组 |
| `roles[0].deptIds[0]` | text | 否 | 部门组（数据权限） |
| `roles[0].permissions[0]` | text | 否 | 角色菜单权限 |
| `roleIds[0]` | text | 否 | 角色组 |
| `postIds[0]` | text | 否 | 岗位组 |
| `roleId` | text | 否 | 角色ID |


### POST /auth/system/user/importData

**标题**：导入用户数据

**所属分类**：用户信息

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 multipart/form-data |

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `updateSupport` | string | 否 | 是否更新已存在的用户 |

**请求体**（form）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `file` | file | 否 | 导入文件 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /auth/system/user/importTemplate

**标题**：下载用户导入模板

**所属分类**：用户信息


### GET /auth/system/user/list

**标题**：获取用户列表

**所属分类**：用户信息

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params.key.key` | string | 否 | - |
| `userId` | string | 否 | 用户ID |
| `deptId` | string | 否 | 部门ID |
| `userName` | string | 否 | 用户账号 |
| `nickName` | string | 否 | 用户昵称 |
| `email` | string | 否 | 用户邮箱 |
| `phonenumber` | string | 否 | 手机号码 |
| `sex` | string | 否 | 用户性别 |
| `avatar` | string | 否 | 用户头像 |
| `password` | string | 否 | 密码 |
| `status` | string | 否 | 帐号状态（0正常 1停用） |
| `delFlag` | string | 否 | 删除标志（0代表存在 2代表删除） |
| `loginIp` | string | 否 | 最后登录IP |
| `loginDate` | string | 否 | 最后登录时间 |
| `dept.createBy` | string | 否 | 创建者 |
| `dept.createTime` | string | 否 | 创建时间 |
| `dept.updateBy` | string | 否 | 更新者 |
| `dept.updateTime` | string | 否 | 更新时间 |
| `dept.remark` | string | 否 | 备注 |
| `dept.params.key.key` | string | 否 | - |
| `dept.deptId` | string | 否 | 部门ID |
| `dept.parentId` | string | 否 | 父部门ID |
| `dept.ancestors` | string | 否 | 祖级列表 |
| `dept.deptName` | string | 否 | 部门名称 |
| `dept.orderNum` | string | 否 | 显示顺序 |
| `dept.leader` | string | 否 | 负责人 |
| `dept.phone` | string | 否 | 联系电话 |
| `dept.email` | string | 否 | 邮箱 |
| `dept.status` | string | 否 | 部门状态:0正常,1停用 |
| `dept.delFlag` | string | 否 | 删除标志（0代表存在 2代表删除） |
| `dept.parentName` | string | 否 | 父部门名称 |
| `dept.children[0].createBy` | string | 否 | 创建者 |
| `dept.children[0].createTime` | string | 否 | 创建时间 |
| `dept.children[0].updateBy` | string | 否 | 更新者 |
| `dept.children[0].updateTime` | string | 否 | 更新时间 |
| `dept.children[0].remark` | string | 否 | 备注 |
| `dept.children[0].params.key.key` | string | 否 | - |
| `dept.children[0].deptId` | string | 否 | 部门ID |
| `dept.children[0].parentId` | string | 否 | 父部门ID |
| `dept.children[0].ancestors` | string | 否 | 祖级列表 |
| `dept.children[0].deptName` | string | 否 | 部门名称 |
| `dept.children[0].orderNum` | string | 否 | 显示顺序 |
| `dept.children[0].leader` | string | 否 | 负责人 |
| `dept.children[0].phone` | string | 否 | 联系电话 |
| `dept.children[0].email` | string | 否 | 邮箱 |
| `dept.children[0].status` | string | 否 | 部门状态:0正常,1停用 |
| `dept.children[0].delFlag` | string | 否 | 删除标志（0代表存在 2代表删除） |
| `dept.children[0].parentName` | string | 否 | 父部门名称 |
| `dept.children[0].children[0].key` | string | 否 | - |
| `roles[0].createBy` | string | 否 | 创建者 |
| `roles[0].createTime` | string | 否 | 创建时间 |
| `roles[0].updateBy` | string | 否 | 更新者 |
| `roles[0].updateTime` | string | 否 | 更新时间 |
| `roles[0].remark` | string | 否 | 备注 |
| `roles[0].params.key.key` | string | 否 | - |
| `roles[0].roleId` | string | 否 | 角色ID |
| `roles[0].roleName` | string | 否 | 角色名称 |
| `roles[0].roleKey` | string | 否 | 角色权限 |
| `roles[0].roleSort` | string | 否 | 角色排序 |
| `roles[0].dataScope` | string | 否 | 数据范围（1：所有数据权限；2：自定义数据权限；3：本部门数据权限；4：本部门及以下数据权限；5：仅本人数据权限） |
| `roles[0].menuCheckStrictly` | string | 否 | 菜单树选择项是否关联显示（ 0：父子不互相关联显示 1：父子互相关联显示） |
| `roles[0].deptCheckStrictly` | string | 否 | 部门树选择项是否关联显示（0：父子不互相关联显示 1：父子互相关联显示 ） |
| `roles[0].status` | string | 否 | 角色状态（0正常 1停用） |
| `roles[0].delFlag` | string | 否 | 删除标志（0代表存在 2代表删除） |
| `roles[0].flag` | string | 否 | 用户是否存在此角色标识 默认不存在 |
| `roles[0].menuIds[0]` | string | 否 | 菜单组 |
| `roles[0].deptIds[0]` | string | 否 | 部门组（数据权限） |
| `roles[0].permissions[0]` | string | 否 | 角色菜单权限 |
| `roleIds[0]` | string | 否 | 角色组 |
| `postIds[0]` | string | 否 | 岗位组 |
| `roleId` | string | 否 | 角色ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `total` | integer | 否 | 总记录数 |
| `rows` | array<object> | 否 | 列表数据 |
| `code` | integer | 否 | 消息状态码 |
| `msg` | string | 否 | 消息内容 |


### POST /auth/system/user/mix_list

**标题**：分页查询用户列表

**所属分类**：用户信息

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，查询参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `userIds` | array<string> | 否 | - |
| `keyword` | string | 否 | - |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /auth/system/user/resetPwd

**标题**：重置密码

**所属分类**：用户信息

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，用户信息(含新密码)）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `userId` | integer | 否 | 用户ID |
| `deptId` | integer | 否 | 部门ID |
| `userName` | string | 否 | 用户账号 |
| `nickName` | string | 否 | 用户昵称 |
| `email` | string | 否 | 用户邮箱 |
| `phonenumber` | string | 否 | 手机号码 |
| `sex` | string | 否 | 用户性别 |
| `avatar` | string | 否 | 用户头像 |
| `password` | string | 否 | 密码 |
| `status` | string | 否 | 帐号状态（0正常 1停用） |
| `delFlag` | string | 否 | 删除标志（0代表存在 2代表删除） |
| `loginIp` | string | 否 | 最后登录IP |
| `loginDate` | string | 否 | 最后登录时间 |
| `dept` | object | 否 | 部门对象 |
| `roles` | array<object> | 否 | 角色对象 |
| `roleIds` | array<integer> | 否 | 角色组 |
| `postIds` | array<integer> | 否 | 岗位组 |
| `roleId` | integer | 否 | 角色ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 首页

### GET /auth/

**标题**：访问首页，提示语

**所属分类**：首页


## 登录验证

### POST /auth/app/login

**标题**：应用登录

**所属分类**：登录验证

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `App-Key` | string | 是 | 应用 Key |
| `App-Secret` | string | 是 | 应用密钥 |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，登录信息）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `username` | string | 否 | 用户名 |
| `password` | string | 否 | 用户密码 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |
| `token` | string | 否 | 登录凭证 |


### GET /auth/getInfo

**标题**：获取用户信息

**所属分类**：登录验证

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |
| `user` | object | 否 | 用户信息 |
| `roles` | array<string> | 否 | 角色列表 |
| `permissions` | array<string> | 否 | 权限列表 |


### GET /auth/getMenuByUser

**标题**：获取当前用户菜单列表

**所属分类**：登录验证

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /auth/login

**标题**：用户登录

**所属分类**：登录验证

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，登录信息）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `username` | string | 否 | 用户名 |
| `password` | string | 否 | 用户密码 |
| `code` | string | 否 | 验证码 |
| `uuid` | string | 否 | 唯一标识 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |
| `token` | string | 否 | 登录凭证 |


## 参数配置 信息操作处理

### PUT /auth/system/config

**标题**：修改参数配置

**所属分类**：参数配置 信息操作处理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，参数信息）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `configId` | integer | 否 | 参数主键 |
| `configName` | string | 否 | 参数名称 |
| `configKey` | string | 否 | 参数键名 |
| `configValue` | string | 否 | 参数键值 |
| `configType` | string | 否 | 系统内置（Y是 N否） |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /auth/system/config

**标题**：新增参数配置

**所属分类**：参数配置 信息操作处理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，参数信息）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `configId` | integer | 否 | 参数主键 |
| `configName` | string | 否 | 参数名称 |
| `configKey` | string | 否 | 参数键名 |
| `configValue` | string | 否 | 参数键值 |
| `configType` | string | 否 | 系统内置（Y是 N否） |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /auth/system/config/{configId}

**标题**：根据参数编号获取详细信息

**所属分类**：参数配置 信息操作处理

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `configId` | string | 是 | 参数 ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /auth/system/config/{configIds}

**标题**：删除参数配置

**所属分类**：参数配置 信息操作处理

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `configIds` | string | 是 | 参数 ID 数组 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /auth/system/config/configKey/{configKey}

**标题**：根据参数键名查询参数值

**所属分类**：参数配置 信息操作处理

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `configKey` | string | 是 | 参数键名 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /auth/system/config/export

**标题**：导出参数配置

**所属分类**：参数配置 信息操作处理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/x-www-form-urlencoded |

**请求体**（form）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | text | 否 | 创建者 |
| `createTime` | text | 否 | 创建时间 |
| `updateBy` | text | 否 | 更新者 |
| `updateTime` | text | 否 | 更新时间 |
| `remark` | text | 否 | 备注 |
| `params.key.key` | text | 否 | - |
| `configId` | text | 否 | 参数主键 |
| `configName` | text | 否 | 参数名称 |
| `configKey` | text | 否 | 参数键名 |
| `configValue` | text | 否 | 参数键值 |
| `configType` | text | 否 | 系统内置（Y是 N否） |


### GET /auth/system/config/list

**标题**：获取参数配置列表

**所属分类**：参数配置 信息操作处理

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params.key.key` | string | 否 | - |
| `configId` | string | 否 | 参数主键 |
| `configName` | string | 否 | 参数名称 |
| `configKey` | string | 否 | 参数键名 |
| `configValue` | string | 否 | 参数键值 |
| `configType` | string | 否 | 系统内置（Y是 N否） |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `total` | integer | 否 | 总记录数 |
| `rows` | array<object> | 否 | 列表数据 |
| `code` | integer | 否 | 消息状态码 |
| `msg` | string | 否 | 消息内容 |


### DELETE /auth/system/config/refreshCache

**标题**：刷新参数缓存

**所属分类**：参数配置 信息操作处理

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 公告 信息操作处理

### PUT /auth/system/notice

**标题**：修改通知公告

**所属分类**：公告 信息操作处理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，通知公告）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `noticeId` | integer | 否 | 公告ID |
| `noticeTitle` | string | 否 | 公告标题 |
| `noticeType` | string | 否 | 公告类型（1通知 2公告） |
| `noticeContent` | string | 否 | 公告内容 |
| `status` | string | 否 | 公告状态（0正常 1关闭） |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /auth/system/notice

**标题**：新增通知公告

**所属分类**：公告 信息操作处理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，通知公告）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `noticeId` | integer | 否 | 公告ID |
| `noticeTitle` | string | 否 | 公告标题 |
| `noticeType` | string | 否 | 公告类型（1通知 2公告） |
| `noticeContent` | string | 否 | 公告内容 |
| `status` | string | 否 | 公告状态（0正常 1关闭） |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /auth/system/notice/{noticeId}

**标题**：根据通知公告编号获取详细信息

**所属分类**：公告 信息操作处理

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `noticeId` | string | 是 | 通知公告ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /auth/system/notice/{noticeIds}

**标题**：删除通知公告

**所属分类**：公告 信息操作处理

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `noticeIds` | string | 是 | 通知公告ID数组 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /auth/system/notice/list

**标题**：获取通知公告列表

**所属分类**：公告 信息操作处理

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params.key.key` | string | 否 | - |
| `noticeId` | string | 否 | 公告ID |
| `noticeTitle` | string | 否 | 公告标题 |
| `noticeType` | string | 否 | 公告类型（1通知 2公告） |
| `noticeContent` | string | 否 | 公告内容 |
| `status` | string | 否 | 公告状态（0正常 1关闭） |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `total` | integer | 否 | 总记录数 |
| `rows` | array<object> | 否 | 列表数据 |
| `code` | integer | 否 | 消息状态码 |
| `msg` | string | 否 | 消息内容 |


## 个人信息 业务处理

### GET /auth/system/user/profile

**标题**：个人信息

**所属分类**：个人信息 业务处理

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |
| `roleGroup` | string | 否 | 角色组 |
| `postGroup` | string | 否 | 岗位组 |


### PUT /auth/system/user/profile

**标题**：修改用户个人信息

**所属分类**：个人信息 业务处理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，用户信息（昵称、邮箱、手机号、性别））

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `userId` | integer | 否 | 用户ID |
| `deptId` | integer | 否 | 部门ID |
| `userName` | string | 否 | 用户账号 |
| `nickName` | string | 否 | 用户昵称 |
| `email` | string | 否 | 用户邮箱 |
| `phonenumber` | string | 否 | 手机号码 |
| `sex` | string | 否 | 用户性别 |
| `avatar` | string | 否 | 用户头像 |
| `password` | string | 否 | 密码 |
| `status` | string | 否 | 帐号状态（0正常 1停用） |
| `delFlag` | string | 否 | 删除标志（0代表存在 2代表删除） |
| `loginIp` | string | 否 | 最后登录IP |
| `loginDate` | string | 否 | 最后登录时间 |
| `dept` | object | 否 | 部门对象 |
| `roles` | array<object> | 否 | 角色对象 |
| `roleIds` | array<integer> | 否 | 角色组 |
| `postIds` | array<integer> | 否 | 岗位组 |
| `roleId` | integer | 否 | 角色ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /auth/system/user/profile/avatar

**标题**：头像上传

**所属分类**：个人信息 业务处理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 multipart/form-data |

**请求体**（form）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `avatarfile` | file | 是 | 头像文件 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |
| `imgUrl` | string | 否 | 图片地址 |


### PUT /auth/system/user/profile/updatePwd

**标题**：重置密码

**所属分类**：个人信息 业务处理

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `oldPassword` | string | 否 | 旧密码 |
| `newPassword` | string | 否 | 新密码 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 数据字典信息

### PUT /auth/system/dict/data

**标题**：修改保存字典类型

**所属分类**：数据字典信息

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，字典数据）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `dictCode` | integer | 否 | 字典编码 |
| `dictSort` | integer | 否 | 字典排序 |
| `dictLabel` | string | 否 | 字典标签 |
| `dictValue` | string | 否 | 字典键值 |
| `dictType` | string | 否 | 字典类型 |
| `cssClass` | string | 否 | 样式属性（其他样式扩展） |
| `listClass` | string | 否 | 表格字典样式 |
| `isDefault` | string | 否 | 是否默认（Y是 N否） |
| `status` | string | 否 | 状态（0正常 1停用） |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /auth/system/dict/data

**标题**：新增字典类型

**所属分类**：数据字典信息

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，字典数据）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `dictCode` | integer | 否 | 字典编码 |
| `dictSort` | integer | 否 | 字典排序 |
| `dictLabel` | string | 否 | 字典标签 |
| `dictValue` | string | 否 | 字典键值 |
| `dictType` | string | 否 | 字典类型 |
| `cssClass` | string | 否 | 样式属性（其他样式扩展） |
| `listClass` | string | 否 | 表格字典样式 |
| `isDefault` | string | 否 | 是否默认（Y是 N否） |
| `status` | string | 否 | 状态（0正常 1停用） |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /auth/system/dict/data/{dictCode}

**标题**：查询字典数据详细

**所属分类**：数据字典信息

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `dictCode` | string | 是 | 字典编码 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /auth/system/dict/data/{dictCodes}

**标题**：删除字典类型

**所属分类**：数据字典信息

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `dictCodes` | string | 是 | 字典编码数组 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /auth/system/dict/data/export

**标题**：导出字典数据

**所属分类**：数据字典信息

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/x-www-form-urlencoded |

**请求体**（form）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | text | 否 | 创建者 |
| `createTime` | text | 否 | 创建时间 |
| `updateBy` | text | 否 | 更新者 |
| `updateTime` | text | 否 | 更新时间 |
| `remark` | text | 否 | 备注 |
| `params.key.key` | text | 否 | - |
| `dictCode` | text | 否 | 字典编码 |
| `dictSort` | text | 否 | 字典排序 |
| `dictLabel` | text | 否 | 字典标签 |
| `dictValue` | text | 否 | 字典键值 |
| `dictType` | text | 否 | 字典类型 |
| `cssClass` | text | 否 | 样式属性（其他样式扩展） |
| `listClass` | text | 否 | 表格字典样式 |
| `isDefault` | text | 否 | 是否默认（Y是 N否） |
| `status` | text | 否 | 状态（0正常 1停用） |


### GET /auth/system/dict/data/list

**标题**：查询字典数据列表

**所属分类**：数据字典信息

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params.key.key` | string | 否 | - |
| `dictCode` | string | 否 | 字典编码 |
| `dictSort` | string | 否 | 字典排序 |
| `dictLabel` | string | 否 | 字典标签 |
| `dictValue` | string | 否 | 字典键值 |
| `dictType` | string | 否 | 字典类型 |
| `cssClass` | string | 否 | 样式属性（其他样式扩展） |
| `listClass` | string | 否 | 表格字典样式 |
| `isDefault` | string | 否 | 是否默认（Y是 N否） |
| `status` | string | 否 | 状态（0正常 1停用） |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `total` | integer | 否 | 总记录数 |
| `rows` | array<object> | 否 | 列表数据 |
| `code` | integer | 否 | 消息状态码 |
| `msg` | string | 否 | 消息内容 |


### GET /auth/system/dict/data/type/{dictType}

**标题**：根据字典类型查询字典数据信息

**所属分类**：数据字典信息

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `dictType` | string | 是 | 字典类型 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /auth/system/dict/type

**标题**：修改字典类型

**所属分类**：数据字典信息

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，字典类型）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `dictId` | integer | 否 | 字典主键 |
| `dictName` | string | 否 | 字典名称 |
| `dictType` | string | 否 | 字典类型 |
| `status` | string | 否 | 状态（0正常 1停用） |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /auth/system/dict/type

**标题**：新增字典类型

**所属分类**：数据字典信息

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，字典类型）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `dictId` | integer | 否 | 字典主键 |
| `dictName` | string | 否 | 字典名称 |
| `dictType` | string | 否 | 字典类型 |
| `status` | string | 否 | 状态（0正常 1停用） |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /auth/system/dict/type/{dictId}

**标题**：查询字典类型详细

**所属分类**：数据字典信息

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `dictId` | string | 是 | 字典类型ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /auth/system/dict/type/{dictIds}

**标题**：删除字典类型

**所属分类**：数据字典信息

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `dictIds` | string | 是 | 字典类型ID数组 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /auth/system/dict/type/export

**标题**：导出字典类型列表

**所属分类**：数据字典信息

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/x-www-form-urlencoded |

**请求体**（form）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | text | 否 | 创建者 |
| `createTime` | text | 否 | 创建时间 |
| `updateBy` | text | 否 | 更新者 |
| `updateTime` | text | 否 | 更新时间 |
| `remark` | text | 否 | 备注 |
| `params.key.key` | text | 否 | - |
| `dictId` | text | 否 | 字典主键 |
| `dictName` | text | 否 | 字典名称 |
| `dictType` | text | 否 | 字典类型 |
| `status` | text | 否 | 状态（0正常 1停用） |


### GET /auth/system/dict/type/list

**标题**：查询字典类型列表

**所属分类**：数据字典信息

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params.key.key` | string | 否 | - |
| `dictId` | string | 否 | 字典主键 |
| `dictName` | string | 否 | 字典名称 |
| `dictType` | string | 否 | 字典类型 |
| `status` | string | 否 | 状态（0正常 1停用） |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `total` | integer | 否 | 总记录数 |
| `rows` | array<object> | 否 | 列表数据 |
| `code` | integer | 否 | 消息状态码 |
| `msg` | string | 否 | 消息内容 |


### GET /auth/system/dict/type/optionselect

**标题**：获取字典选择框列表

**所属分类**：数据字典信息

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /auth/system/dict/type/refreshCache

**标题**：刷新字典缓存

**所属分类**：数据字典信息

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 注册验证

### POST /auth/register

**标题**：用户注册

**所属分类**：注册验证

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，注册信息）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `username` | string | 否 | 用户名 |
| `password` | string | 否 | 用户密码 |
| `code` | string | 否 | 验证码 |
| `uuid` | string | 否 | 唯一标识 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 路由信息Controller

### PUT /auth/system/route

**标题**：修改路由信息

**所属分类**：路由信息Controller

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，路由信息）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `id` | integer | 否 | - |
| `after` | string | 否 | 匹配时间 |
| `cookie` | string | 否 | 匹配 cookie， 多个用英文逗号隔开 |
| `header` | string | 否 | 匹配 header |
| `host` | string | 否 | 匹配主机名，多个用英文逗号隔开 |
| `method` | string | 否 | 匹配请求方式，多个用英文逗号隔开 |
| `query` | string | 否 | 匹配 query |
| `remoteAddr` | string | 否 | 匹配IP地址和子网掩码 |
| `weight` | string | 否 | 匹配权重 |
| `path` | string | 否 | 匹配路径 |
| `uri` | string | 否 | 转发地址 |
| `appId` | integer | 否 | 应用id |
| `order` | integer | 否 | - |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /auth/system/route

**标题**：新增路由信息

**所属分类**：路由信息Controller

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，路由信息）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `id` | integer | 否 | - |
| `after` | string | 否 | 匹配时间 |
| `cookie` | string | 否 | 匹配 cookie， 多个用英文逗号隔开 |
| `header` | string | 否 | 匹配 header |
| `host` | string | 否 | 匹配主机名，多个用英文逗号隔开 |
| `method` | string | 否 | 匹配请求方式，多个用英文逗号隔开 |
| `query` | string | 否 | 匹配 query |
| `remoteAddr` | string | 否 | 匹配IP地址和子网掩码 |
| `weight` | string | 否 | 匹配权重 |
| `path` | string | 否 | 匹配路径 |
| `uri` | string | 否 | 转发地址 |
| `appId` | integer | 否 | 应用id |
| `order` | integer | 否 | - |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /auth/system/route/{routeId}

**标题**：获取路由信息详细信息

**所属分类**：路由信息Controller

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `routeId` | string | 是 | 路由 ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /auth/system/route/{routeIds}

**标题**：删除路由信息

**所属分类**：路由信息Controller

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `routeIds` | string | 是 | 路由 ID 数组 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /auth/system/route/export

**标题**：导出路由信息列表

**所属分类**：路由信息Controller

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/x-www-form-urlencoded |

**请求体**（form）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | text | 否 | 创建者 |
| `createTime` | text | 否 | 创建时间 |
| `updateBy` | text | 否 | 更新者 |
| `updateTime` | text | 否 | 更新时间 |
| `remark` | text | 否 | 备注 |
| `params.key.key` | text | 否 | - |
| `id` | text | 否 | - |
| `after` | text | 否 | 匹配时间 |
| `cookie` | text | 否 | 匹配 cookie， 多个用英文逗号隔开 |
| `header` | text | 否 | 匹配 header |
| `host` | text | 否 | 匹配主机名，多个用英文逗号隔开 |
| `method` | text | 否 | 匹配请求方式，多个用英文逗号隔开 |
| `query` | text | 否 | 匹配 query |
| `remoteAddr` | text | 否 | 匹配IP地址和子网掩码 |
| `weight` | text | 否 | 匹配权重 |
| `path` | text | 否 | 匹配路径 |
| `uri` | text | 否 | 转发地址 |
| `appId` | text | 否 | 应用id |
| `order` | text | 否 | - |


### GET /auth/system/route/info

**标题**：根据应用 ID 获取路由信息

**所属分类**：路由信息Controller

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `appId` | string | 是 | 应用 ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /auth/system/route/list

**标题**：查询路由信息列表

**所属分类**：路由信息Controller

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params.key.key` | string | 否 | - |
| `id` | string | 否 | - |
| `after` | string | 否 | 匹配时间 |
| `cookie` | string | 否 | 匹配 cookie， 多个用英文逗号隔开 |
| `header` | string | 否 | 匹配 header |
| `host` | string | 否 | 匹配主机名，多个用英文逗号隔开 |
| `method` | string | 否 | 匹配请求方式，多个用英文逗号隔开 |
| `query` | string | 否 | 匹配 query |
| `remoteAddr` | string | 否 | 匹配IP地址和子网掩码 |
| `weight` | string | 否 | 匹配权重 |
| `path` | string | 否 | 匹配路径 |
| `uri` | string | 否 | 转发地址 |
| `appId` | string | 否 | 应用id |
| `order` | string | 否 | - |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `total` | integer | 否 | 总记录数 |
| `rows` | array<object> | 否 | 列表数据 |
| `code` | integer | 否 | 消息状态码 |
| `msg` | string | 否 | 消息内容 |


## 通用请求处理

### GET /auth/common/download

**标题**：通用下载请求

**所属分类**：通用请求处理

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `fileName` | string | 否 | 文件名称 |
| `delete` | string | 否 | 是否删除 |


### GET /auth/common/download/resource

**标题**：本地资源通用下载

**所属分类**：通用请求处理

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `resource` | string | 否 | 资源路径 |


### POST /auth/common/upload

**标题**：通用上传请求（单个）

**所属分类**：通用请求处理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 multipart/form-data |

**请求体**（form）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `file` | file | 否 | 上传文件 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |
| `url` | string | 否 | 访问地址 |
| `fileName` | string | 否 | 文件名称 |
| `newFileName` | string | 否 | 新文件名称 |
| `originalFilename` | string | 否 | 源文件名称 |


### POST /auth/common/uploads

**标题**：通用上传请求（多个）

**所属分类**：通用请求处理

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 multipart/form-data |

**请求体**（form）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `files` | file | 否 | 文件列表 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |
| `urls` | string | 否 | 访问地址 |
| `fileNames` | string | 否 | 文件名称 |
| `newFileNames` | string | 否 | 新文件名称 |
| `originalFilenames` | string | 否 | 源文件名称 |


## 验证码操作处理

### GET /auth/captchaImage

**标题**：生成验证码

**所属分类**：验证码操作处理

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | null | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |
| `captchaEnabled` | boolean | 否 | 是否开启验证码 |
| `uuid` | string | 否 | 唯一标识，后台验证以此为准 |
| `img` | string | 否 | 验证码base64图片 |


## swagger 用户测试方法

### DELETE /auth/test/user/{userId}

**标题**：删除用户

**所属分类**：swagger 用户测试方法

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `userId` | string | 是 | 用户 ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | string | 否 | - |


### GET /auth/test/user/{userId}

**标题**：根据用户 ID 获取用户详情

**所属分类**：swagger 用户测试方法

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `userId` | string | 是 | 用户 ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


### GET /auth/test/user/list

**标题**：获取用户列表

**所属分类**：swagger 用户测试方法

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | array<object> | 否 | - |


### POST /auth/test/user/save

**标题**：新增用户

**所属分类**：swagger 用户测试方法

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `userId` | string | 否 | - |
| `username` | string | 否 | - |
| `password` | string | 否 | - |
| `mobile` | string | 否 | - |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | string | 否 | - |


### PUT /auth/test/user/update

**标题**：更新用户

**所属分类**：swagger 用户测试方法

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，用户信息）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `userId` | integer | 否 | - |
| `username` | string | 否 | - |
| `password` | string | 否 | - |
| `mobile` | string | 否 | - |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | string | 否 | - |


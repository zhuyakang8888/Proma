# 社媒矩阵运营平台 —— MCC 域（/mcc）

共 83 个接口。由 `scripts/gen-references.mjs` 从 `docs/api.json` 生成，请勿手改。

鉴权方式：使用 POST /auth/app/login，请求头 App-Key 与 App-Secret，请求体 username 与 password，响应顶层 token 字段，无验证码。业务接口的鉴权头默认为 Authorization: Bearer，尚未经真实调用验证，第一次联调时需确认。POST /auth/login 需要 code 与 uuid 验证码，不可用于自动化，仅作人工兜底。

返回总索引：[index.md](./index.md)

## 云手机消息通知表 前端控制器

### DELETE /mcc/api/notify/clear-all

**标题**：一键清除：物理删除当前登录用户的全部通知消息（已读+未读）。

**所属分类**：云手机消息通知表 前端控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | integer | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |

**说明**

删除目标限定为当前登录用户（防越权），同时清理列表 Redis 缓存；
前端刷新页面/重连 WS 后不再收到历史消息。


### GET /mcc/api/notify/detail/{notifyId}

**标题**：获取某条消息详情

**所属分类**：云手机消息通知表 前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `notifyId` | string | 是 | 消息主键 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /mcc/api/notify/get

**标题**：获取系统消息通知信息

**所属分类**：云手机消息通知表 前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，消息查询请求参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `onlyUnread` | boolean | 否 | 是否获取全部，true：仅获取未读，false：获取全部 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /mcc/api/notify/modify/{notifyId}

**标题**：消息已读

**所属分类**：云手机消息通知表 前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `notifyId` | string | 是 | 消息主键 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 设备前端控制器

### POST /mcc/api/device/add

**标题**：新增真机设备

**所属分类**：设备前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<string> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /mcc/api/device/add/remark

**标题**：新增设备备注

**所属分类**：设备前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceId` | string | 否 | 设备ID |
| `remark` | string | 否 | 设备备注 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /mcc/api/device/brand/future/get

**标题**：获取云巅未来手机品牌列表

**所属分类**：设备前端控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /mcc/api/device/brand/get

**标题**：获取手机品牌列表

**所属分类**：设备前端控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /mcc/api/device/conn/{deviceId}

**标题**：测试是否设备是否可以建立链接

**所属分类**：设备前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceId` | string | 是 | 设备编号 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /mcc/api/device/count

**标题**：查询设备数量

**所属分类**：设备前端控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | integer | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /mcc/api/device/del

**标题**：删除设备信息

**所属分类**：设备前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，删除设备请求参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `deviceIds` | array<string> | 是 | 设备编码集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /mcc/api/device/detail/{deviceId}

**标题**：设备信息详情查询

**所属分类**：设备前端控制器

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


### PUT /mcc/api/device/gen

**标题**：生成设备信息

**所属分类**：设备前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，生成设备信息请求参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `id` | string | 否 | 运营商编号 |
| `netOperator` | enum(CHINA_MOBILE/CHINA_UNICOM/CHINA_TELECOM/VERIZON/ATT/T_MOBILE/SPRINT/EE/VODAFONE_UK/THREE_UK/O2_UK/NTT_DOCOMO/KDDI/SOFTBANK/TELCEL/AT_T_MEXICO/MOVISTAR/TELKOMSEL/INDOSAT/XL_AXIATA/TRI_INDONESIA/SMARTFREN/JIO/AIRTEL/VODAFONE_IDEA/BSNL) | 否 | 运营商 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /mcc/api/device/isBind

**标题**：查询设备是否绑定过账号

**所属分类**：设备前端控制器

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceId` | string | 是 | - |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | string | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /mcc/api/device/list

**标题**：查询设备集合

**所属分类**：设备前端控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /mcc/api/device/lock

**标题**：设备锁定和解锁

**所属分类**：设备前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，入参信息）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceIds` | array<string> | 否 | 设备ID集合 |
| `isLock` | boolean | 否 | 是否锁 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | string | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /mcc/api/device/mock/opera

**标题**：Mock相关(开启、关闭)

**所属分类**：设备前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，Mock操作请求参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `deviceId` | string | 是 | 设备编号 |
| `operaState` | boolean | 是 | mock状态 true :建立链接 / false :断开连接 |
| `appId` | string | 否 | 应用ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /mcc/api/device/new

**标题**：一键新机

**所属分类**：设备前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，一键新机请求参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `deviceId` | string | 是 | 设备编号 |
| `armId` | string | 否 | 服务器编号 |
| `nodeId` | string | 否 | 节点编号 |
| `brand` | string | 是 | 品牌 |
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

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | string | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /mcc/api/device/new/batch

**标题**：批量一键新机

**所属分类**：设备前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，批量一键新机请求参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `deviceReqs` | array<object> | 否 | 一键新机设备信息集合 |
| `onClickNewBrandReqs` | array<object> | 否 | 手机品牌、运营商信息集合 |
| `operatorReqs` | array<object> | 否 | 运营商集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /mcc/api/device/org/{userId}

**标题**：设备用户关联关系-查询

**所属分类**：设备前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `userId` | string | 是 | 用户ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /mcc/api/device/org/del

**标题**：设备用户关联关系-删除

**所属分类**：设备前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，删除设备关联请求参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `userIds` | array<string> | 是 | 用户编码集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /mcc/api/device/org/update

**标题**：设备用户关联关系-更新

**所属分类**：设备前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，设备用户关联更新请求参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `deviceIds` | array<string> | 否 | 设备编号集合 |
| `userId` | string | 否 | 用户编号 |
| `isHasAll` | boolean | 否 | 是否拥有全部，true：全部，false：部分 |
| `bindDirection` | boolean | 否 | 绑定方向 true是容器分配给用户 false是用户分配容器 |
| `userIds` | array<string> | 否 | 用户编号集合 |
| `delIds` | array<string> | 否 | 删除id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /mcc/api/device/page

**标题**：设备信息分页查询

**所属分类**：设备前端控制器

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `pageNum` | string | 否 | 当前记录起始索引 |
| `pageSize` | string | 否 | 每页显示记录数 |
| `orderByColumn` | string | 否 | 排序列 |
| `isAsc` | string | 否 | 排序的方向desc或者asc |
| `reasonable` | string | 否 | 分页参数合理化 |
| `deviceStates[0]` | string | 否 | 查询设备状态列表 OFFLINE :离线 / ONLINE :在线 |
| `deviceIp` | string | 否 | 设备Ip地址 |
| `proxyIp` | string | 否 | 代理ip |
| `proxyPort` | string | 否 | 设备端口 |
| `userId` | string | 否 | 用户编号 |
| `isShowAll` | string | 否 | 是否展示全部， ture:展示全部,false:展示用户下设备 |
| `deviceCategories[0]` | string | 否 | 手机品牌列 |
| `androidVersions[0]` | string | 否 | 查询安卓版本列表 |
| `processName` | string | 否 | 流程名称 |
| `armId` | string | 否 | ARM服务器ID |
| `nodeId` | string | 否 | 节点ID |
| `imgId` | string | 否 | 镜像ID |
| `devicePort` | string | 否 | 设备端口 |
| `suiteName` | string | 否 | 分组名称 |
| `screening` | string | 否 | 设备筛选 |
| `search` | string | 否 | 设备搜索 |
| `relationStatus` | string | 否 | 设备关联状态 |
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
| `condition` | string | 否 | 条件 |
| `lockIds[0]` | string | 否 | 锁id |
| `deviceIds[0]` | string | 否 | 设备id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /mcc/api/device/page/allocation

**标题**：待分配设备信息分页查询

**所属分类**：设备前端控制器

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `pageNum` | string | 否 | 当前记录起始索引 |
| `pageSize` | string | 否 | 每页显示记录数 |
| `orderByColumn` | string | 否 | 排序列 |
| `isAsc` | string | 否 | 排序的方向desc或者asc |
| `reasonable` | string | 否 | 分页参数合理化 |
| `deviceStatus` | string | 否 | 设备状态 （ONLINE: 在线/ OFFLINE :离线） |
| `nodeId` | string | 否 | 节点编号 |
| `deviceIp` | string | 否 | 设备IP |

**响应顶层字段**

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


### GET /mcc/api/device/page/category

**标题**：按类别汇总分页查询设备

**所属分类**：设备前端控制器

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `pageNum` | string | 否 | 当前记录起始索引 |
| `pageSize` | string | 否 | 每页显示记录数 |
| `orderByColumn` | string | 否 | 排序列 |
| `isAsc` | string | 否 | 排序的方向desc或者asc |
| `reasonable` | string | 否 | 分页参数合理化 |
| `deviceCategories[0]` | string | 否 | 设备类别列表 |
| `deviceStates[0]` | string | 否 | 设备状态列表 OFFLINE:离线 / ONLINE:在线 |
| `armId` | string | 否 | 所属服务器ID |
| `chip` | string | 否 | 芯片编码 |
| `brand` | string | 否 | 手机品牌 |
| `search` | string | 否 | 搜索关键字 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /mcc/api/device/reset

**标题**：重置设备

**所属分类**：设备前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，重置设备请求参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `deviceIds` | array<string> | 是 | 设备编号集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /mcc/api/device/select/device

**标题**：根据用户id查询设备信息

**所属分类**：设备前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `userIds` | array<string> | 否 | 用户ID集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /mcc/api/device/select/user

**标题**：根据设备id查询用户信息

**所属分类**：设备前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceIds` | array<string> | 否 | 设备ID集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /mcc/api/device/sync

**标题**：同步当前设备

**所属分类**：设备前端控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /mcc/api/device/uitree/xml_json/{ip}/{port}

**标题**：获取设备uiTree.xml信息，json返回

**所属分类**：设备前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `ip` | string | 是 | 设备IP |
| `port` | string | 是 | 设备端口 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /mcc/api/device/uitree/xml_str/{ip}/{port}

**标题**：获取设备uiTree.xml信息，字符串返回

**所属分类**：设备前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `ip` | string | 是 | 设备IP |
| `port` | string | 是 | 设备端口 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /mcc/api/device/uitree/xml/{ip}/{port}

**标题**：获取设备uiTree.xml信息，文件流返回

**所属分类**：设备前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `ip` | string | 是 | 设备IP |
| `port` | string | 是 | 设备端口 |


### POST /mcc/api/device/update

**标题**：设备信息更新

**所属分类**：设备前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，(支持关机/开机/重启/更换镜像/更新设备信息)）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `deviceIds` | array<string> | 是 | 设备ID集合 |
| `operation` | string | 是 | 操作指令，SHUTDOWN：关机/POWER_ON:开机/RESTART:重启/CHANGE_IMG:更换镜像/MODIFY:更新设备信息/GPS:修改定位信息 |
| `imgId` | string | 否 | 镜像ID |
| `modifyDeviceInfoReq` | object | 否 | 设备信息 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /mcc/api/device/update/bind

**标题**：修改是否绑定过账号

**所属分类**：设备前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceId` | string | 否 | 设备ID |
| `isBind` | string | 否 | 是否绑定 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 镜像管理前端控制器

### POST /mcc/api/image/del

**标题**：镜像信息删除

**所属分类**：镜像管理前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，镜像删除请求参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `imgIds` | array<string> | 是 | 镜像ID集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /mcc/api/image/detail/{imgId}

**标题**：镜像详情信息

**所属分类**：镜像管理前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `imgId` | string | 是 | 镜像ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /mcc/api/image/page

**标题**：镜像信息列表查询

**所属分类**：镜像管理前端控制器

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `pageNum` | string | 否 | 当前记录起始索引 |
| `pageSize` | string | 否 | 每页显示记录数 |
| `orderByColumn` | string | 否 | 排序列 |
| `isAsc` | string | 否 | 排序的方向desc或者asc |
| `reasonable` | string | 否 | 分页参数合理化 |
| `imgName` | string | 否 | 镜像名称 |
| `vagueSearchContent` | string | 否 | 模糊查询（支持镜像名称及版本号） |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /mcc/api/image/remove/{imageName}

**标题**：删除镜像

**所属分类**：镜像管理前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `imageName` | string | 是 | - |

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `project` | string | 否 | 项目名（默认 library） |
| `imageName` | string | 否 | 镜像名 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /mcc/api/image/update

**标题**：镜像信息新增或编辑

**所属分类**：镜像管理前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 multipart/form-data |

**请求体**（form）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | text | 否 | 创建者 |
| `createTime` | text | 否 | 创建时间 |
| `updateBy` | text | 否 | 更新者 |
| `updateTime` | text | 否 | 更新时间 |
| `remark` | text | 否 | 备注 |
| `params.key.key` | text | 否 | - |
| `imgId` | text | 否 | 镜像ID, 空时为新增，非空为编辑 |
| `imgName` | text | 否 | 镜像名称 |
| `imgVersion` | text | 否 | 镜像版本 |
| `chipCode` | text | 否 | 芯片类型编码 |
| `brand` | text | 否 | 品牌 |
| `model` | text | 否 | 型号 |
| `file` | file | 否 | 镜像文件和 filePath(镜像文件地址) 二选一，如果 filePath 不为空优先选filePath |
| `filePath` | text | 否 | 镜像文件地址，和 file(镜像文件) 二选一，如果 filePath 不为空优先选filePath |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /mcc/api/image/uploadImages

**标题**：上传镜像

**所属分类**：镜像管理前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 multipart/form-data |

**请求体**（form）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `file` | file | 否 | 镜像文件 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 运营商

### GET /mcc/api/operator/list

**标题**：获取运营商列表

**所属分类**：运营商

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 磁盘挂载服务

### DELETE /mcc/api/mount/{diskId}

**标题**：删除外部磁盘信息

**所属分类**：磁盘挂载服务

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `diskId` | string | 是 | 磁盘 ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | string | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /mcc/api/mount/backup

**标题**：备份节点数据

**所属分类**：磁盘挂载服务

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，备份请求参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `diskId` | string | 是 | 磁盘编号 |
| `nodeId` | string | 是 | 节点编号 |
| `mountDir` | string | 否 | 目录 当备份方式为内部备份时不可为空 |
| `backupType` | enum(INNER/OUTER) | 是 | 备份方式 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | string | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /mcc/api/mount/check

**标题**：外部磁盘健康检查

**所属分类**：磁盘挂载服务

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，磁盘信息）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `diskId` | string | 否 | 磁盘编号 |
| `nodeId` | string | 否 | @NotNull(message = "节点编号不可为空") |
| `diskIp` | string | 是 | 磁盘地址 |
| `diskName` | string | 是 | 磁盘名称 |
| `diskUserName` | string | 是 | 用户名 |
| `diskPawd` | string | 是 | 密码 |
| `mountDirectory` | string | 是 | 挂载目录 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | string | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /mcc/api/mount/detail/{diskId}

**标题**：获取磁盘详情

**所属分类**：磁盘挂载服务

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `diskId` | string | 是 | 磁盘 ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /mcc/api/mount/doing

**标题**：磁盘挂载

**所属分类**：磁盘挂载服务

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，挂载请求参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `diskId` | string | 是 | 磁盘编号 |
| `nodeId` | string | 是 | 节点编号 |
| `mountDir` | string | 否 | 节点挂载目录 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | string | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /mcc/api/mount/install/{diskId}

**标题**：安装 nftserver 插件

**所属分类**：磁盘挂载服务

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `diskId` | string | 是 | 磁盘 ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | string | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /mcc/api/mount/list/{nodeId}

**标题**：获取可用外部磁盘列表

**所属分类**：磁盘挂载服务

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `nodeId` | string | 是 | 节点 ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /mcc/api/mount/remove

**标题**：移除外部磁盘信息

**所属分类**：磁盘挂载服务

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，节点及磁盘信息）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `nodeId` | string | 是 | 节点编号 |
| `diskId` | string | 否 | 磁盘编号 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | string | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /mcc/api/mount/update

**标题**：新增或编辑磁盘信息

**所属分类**：磁盘挂载服务

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，磁盘请求参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `diskId` | string | 否 | 磁盘编号 |
| `nodeId` | string | 否 | @NotNull(message = "节点编号不可为空") |
| `diskIp` | string | 是 | 磁盘地址 |
| `diskName` | string | 是 | 磁盘名称 |
| `diskUserName` | string | 是 | 用户名 |
| `diskPawd` | string | 是 | 密码 |
| `mountDirectory` | string | 是 | 挂载目录 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## ARM服务器节点相关前端控制器

### PUT /mcc/api/node/admin/push/{armId}

**标题**：管理人员使用，推送端口python环境

**所属分类**：ARM服务器节点相关前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `armId` | string | 是 | ARM服务器ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | boolean | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /mcc/api/node/admin/restart/{armId}

**标题**：重启节点端口代理服务

**所属分类**：ARM服务器节点相关前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `armId` | string | 是 | ARM服务器ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | boolean | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /mcc/api/node/chip_type/get

**标题**：获取支持的芯片列表

**所属分类**：ARM服务器节点相关前端控制器

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /mcc/api/node/download/temp

**标题**：下载节点导出模板

**所属分类**：ARM服务器节点相关前端控制器


### GET /mcc/api/node/get/{armId}

**标题**：获取armIP列表

**所属分类**：ARM服务器节点相关前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `armId` | string | 是 | ARM服务器ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /mcc/api/node/page

**标题**：节点信息列表查询

**所属分类**：ARM服务器节点相关前端控制器

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `pageNum` | string | 否 | 当前记录起始索引 |
| `pageSize` | string | 否 | 每页显示记录数 |
| `orderByColumn` | string | 否 | 排序列 |
| `isAsc` | string | 否 | 排序的方向desc或者asc |
| `reasonable` | string | 否 | 分页参数合理化 |
| `armId` | string | 否 | 服务器Id |
| `nodeCode` | string | 否 | 节点编号 |
| `nodeIp` | string | 否 | 节点IP |
| `chipCode` | string | 否 | 芯片类型编码 |
| `nodeState` | string | 否 | 节点状态：ONLINE 在线  OFFLINE 离线 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /mcc/api/node/reload

**标题**：重新加载获取某节点下设备信息

**所属分类**：ARM服务器节点相关前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，重新加载设备请求参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `armId` | string | 否 | 服务器地址信息，可空 |
| `nodeIds` | array<string> | 是 | 节点地址不可为空 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /mcc/api/node/update

**标题**：服务器节点操作

**所属分类**：ARM服务器节点相关前端控制器

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
| `nodeIds` | array<string> | 否 | 节点编号集合 |
| `operation` | string | 否 | 操作指令，SHUTDOWN:关机/POWER_ON:开机/RESTART:重启 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | boolean | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /mcc/api/node/upload

**标题**：节点及设备信息模板导入

**所属分类**：ARM服务器节点相关前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 multipart/form-data |

**请求体**（form）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `file` | file | 是 | 导入信息模板 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 服务器信息前端控制器

### PUT /mcc/api/arm/board

**标题**：修改Board映射集合

**所属分类**：服务器信息前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，板卡映射请求参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `armIds` | array<string> | 否 | 服务器编号集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /mcc/api/arm/config/{ip}

**标题**：获取服务器配置信息

**所属分类**：服务器信息前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `ip` | string | 是 | ARM服务器IP地址 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /mcc/api/arm/del/{armId}

**标题**：删除服务器信息

**所属分类**：服务器信息前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `armId` | string | 是 | ARM服务器ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /mcc/api/arm/download/temp

**标题**：下载服务器导出模板

**所属分类**：服务器信息前端控制器


### GET /mcc/api/arm/get

**标题**：获取armIP列表

**所属分类**：服务器信息前端控制器

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `armIp` | string | 否 | ARM服务器IP（模糊过滤，可选） |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | array<object> | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /mcc/api/arm/get/{armId}

**标题**：ARM服务器详情查询

**所属分类**：服务器信息前端控制器

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `armId` | string | 是 | ARM服务器ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /mcc/api/arm/page

**标题**：服务器分页查询

**所属分类**：服务器信息前端控制器

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `pageNum` | string | 否 | 当前记录起始索引 |
| `pageSize` | string | 否 | 每页显示记录数 |
| `orderByColumn` | string | 否 | 排序列 |
| `isAsc` | string | 否 | 排序的方向desc或者asc |
| `reasonable` | string | 否 | 分页参数合理化 |
| `armState` | string | 否 | - |
| `address` | string | 否 | - |
| `armName` | string | 否 | - |
| `machineRoom` | string | 否 | - |
| `manager` | string | 否 | - |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /mcc/api/arm/update

**标题**：ARM服务器更新接口

**所属分类**：服务器信息前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，ARM服务器更新请求参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `armId` | string | 否 | 服务器编号 |
| `armName` | string | 否 | 服务器名称 |
| `configInfo` | string | 否 | 配置信息 |
| `machineRoom` | string | 否 | 所属机房 |
| `nodeIpSegment` | string | 否 | 节点IP段 |
| `containerIpSegment` | string | 否 | 容器IP段 |
| `manufacturer` | string | 否 | 厂商 |
| `manager` | string | 否 | 管理人员 |
| `description` | string | 否 | 描述 |
| `address` | string | 否 | 地址 |
| `chipCode` | string | 是 | 芯片类型,ARM_3588/ARM_3399 |
| `armPort` | string | 否 | arm服务器端口（默认80） |
| `nodeUser` | string | 否 | 服务器节点用户（空值取默认） |
| `nodePasswd` | string | 否 | 服务器节点密码（空值取默认） |
| `armArea` | string | 否 | 区域 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | integer | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /mcc/api/arm/upload

**标题**：服务器模板导入

**所属分类**：服务器信息前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 multipart/form-data |

**请求体**（form）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `file` | file | 是 | 上传的模板信息文件 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 设备APP操作相关前端控制器

### POST /mcc/api/app/del

**标题**：删除应用程序包（常用APP及直接上传APP）

**所属分类**：设备APP操作相关前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，删除应用请求参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `appIds` | array<string> | 否 | 常用APP唯一标识集合 |
| `filePathIds` | array<string> | 否 | 直接上传APP资源标识集合 |
| `appFileType` | string | 是 | 资源类别（often:常用，direct:直接安装） |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /mcc/api/app/install

**标题**：应用程序安装

**所属分类**：设备APP操作相关前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，应用安装请求参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `appId` | string | 否 | appId(安装常用应用赋值，直接安装时为空) |
| `deviceIds` | array<string> | 是 | 设备ID集合 |
| `filePathId` | string | 否 | 安装资源路径ID(直接安装时赋值) |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | string | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /mcc/api/app/page

**标题**：常用应用程序分页查询

**所属分类**：设备APP操作相关前端控制器

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `pageNum` | string | 否 | 当前记录起始索引 |
| `pageSize` | string | 否 | 每页显示记录数 |
| `orderByColumn` | string | 否 | 排序列 |
| `isAsc` | string | 否 | 排序的方向desc或者asc |
| `reasonable` | string | 否 | 分页参数合理化 |
| `appName` | string | 否 | 应用名称 |
| `packageName` | string | 否 | 安装包名称 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /mcc/api/app/record/page

**标题**：设备应用程序安装记录查询（实时，全部返回）

**所属分类**：设备APP操作相关前端控制器

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `pageNum` | string | 否 | 当前记录起始索引 |
| `pageSize` | string | 否 | 每页显示记录数 |
| `orderByColumn` | string | 否 | 排序列 |
| `isAsc` | string | 否 | 排序的方向desc或者asc |
| `reasonable` | string | 否 | 分页参数合理化 |
| `deviceIds[0]` | string | 是 | 设备编码集合 |
| `appName` | string | 否 | 应用名称 |
| `packageName` | string | 否 | 安装包名称 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |

**说明**

数据源为设备实时状态（ADB: pm list packages -e -3），仅支持单设备查询；
应用名称/图标/版本等信息由平台应用表回查补全，内存过滤后全量返回。


### POST /mcc/api/app/set/often

**标题**：设置常用应用程序

**所属分类**：设备APP操作相关前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，设置常用请求参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `filePathIds` | array<string> | 是 | 软件包资源位置ID集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /mcc/api/app/unload

**标题**：卸载应用程序

**所属分类**：设备APP操作相关前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，应用卸载请求参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `createBy` | string | 否 | 创建者 |
| `createTime` | string | 否 | 创建时间 |
| `updateBy` | string | 否 | 更新者 |
| `updateTime` | string | 否 | 更新时间 |
| `remark` | string | 否 | 备注 |
| `params` | object | 否 | 请求参数 |
| `deviceIds` | array<string> | 是 | 设备ID集合 |
| `appName` | string | 否 | 应用名称 |
| `appId` | string | 否 | 应用Id |
| `appFileType` | string | 否 | 资源类别（often:常用，direct:直接安装） |
| `packageName` | string | 否 | 应用包名（优先使用，传了 packageName 则不依赖 DB 安装记录表） |
| `recordId` | string | 否 | 安装记录ID（实时列表中此字段存的是包名，兼容前端回传） |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | boolean | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /mcc/api/app/upload

**标题**：安装包上传

**所属分类**：设备APP操作相关前端控制器

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
| `file` | file | 是 | 上传的APK文件 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /mcc/api/app/upload/page

**标题**：应用程序分页查询

**所属分类**：设备APP操作相关前端控制器

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `pageNum` | string | 否 | 当前记录起始索引 |
| `pageSize` | string | 否 | 每页显示记录数 |
| `orderByColumn` | string | 否 | 排序列 |
| `isAsc` | string | 否 | 排序的方向desc或者asc |
| `reasonable` | string | 否 | 分页参数合理化 |
| `appName` | string | 否 | 应用名称 |
| `packageName` | string | 否 | 安装包名称 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


## 通知公告

### POST /mcc/api/system/notice/create

**标题**：创建通知公告

**所属分类**：通知公告

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，公告创建参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | integer | 否 | 岗位公告编号 |
| `title` | string | 是 | 公告标题 |
| `type` | integer | 是 | 公告类型 |
| `content` | string | 否 | 公告内容 |
| `status` | integer | 否 | 状态，参见 CommonStatusEnum 枚举类 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | integer | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### DELETE /mcc/api/system/notice/delete

**标题**：删除通知公告

**所属分类**：通知公告

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 是 | 公告 ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | boolean | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /mcc/api/system/notice/get

**标题**：查询通知公告详情

**所属分类**：通知公告

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 是 | 公告 ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /mcc/api/system/notice/info/{nodeId}

**标题**：获取实时节点系统运行信息

**所属分类**：通知公告

**路径参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `nodeId` | string | 是 | 节点 ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### GET /mcc/api/system/notice/page

**标题**：分页查询通知公告

**所属分类**：通知公告

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `pageNum` | string | 否 | 当前记录起始索引 |
| `pageSize` | string | 否 | 每页显示记录数 |
| `orderByColumn` | string | 否 | 排序列 |
| `isAsc` | string | 否 | 排序的方向desc或者asc |
| `reasonable` | string | 否 | 分页参数合理化 |
| `title` | string | 否 | 通知公告名称，模糊匹配 |
| `status` | string | 否 | 展示状态，参见 CommonStatusEnum 枚举类 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /mcc/api/system/notice/push

**标题**：通过 WebSocket 推送公告给在线用户

**所属分类**：通知公告

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 是 | 公告 ID |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | boolean | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### PUT /mcc/api/system/notice/update

**标题**：更新通知公告

**所属分类**：通知公告

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，公告更新参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | integer | 否 | 岗位公告编号 |
| `title` | string | 是 | 公告标题 |
| `type` | integer | 是 | 公告类型 |
| `content` | string | 否 | 公告内容 |
| `status` | integer | 否 | 状态，参见 CommonStatusEnum 枚举类 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | boolean | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


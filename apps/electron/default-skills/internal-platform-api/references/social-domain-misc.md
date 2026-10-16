# 社媒矩阵运营平台 —— 其他（/label、/allocation、/ai-plugin-group 等）

共 16 个接口。由 `scripts/gen-references.mjs` 从 `docs/api.json` 生成，请勿手改。

鉴权方式：使用 POST /auth/app/login，请求头 App-Key 与 App-Secret，请求体 username 与 password，响应顶层 token 字段，无验证码。业务接口的鉴权头默认为 Authorization: Bearer，尚未经真实调用验证，第一次联调时需确认。POST /auth/login 需要 code 与 uuid 验证码，不可用于自动化，仅作人工兜底。

返回总索引：[index.md](./index.md)

## 用户分配网络前端控制器

### POST /allocation/network/allocate

**标题**：分配网络

**所属分类**：用户分配网络前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json）

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


### POST /allocation/network/list

**标题**：根据代理id查询用户列表

**所属分类**：用户分配网络前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json）

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


### POST /allocation/network/page

**标题**：网络分配分页

**所属分类**：用户分配网络前端控制器

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
| `condition` | string | 否 | 搜索条件 所有者-所属地区-IP-链接-到期时间-代理分组-备注 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


### POST /allocation/network/user/list

**标题**：根据用户id查询代理列表

**所属分类**：用户分配网络前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json）

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


## 标签群组前端控制器

### POST /label/group/add

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


### POST /label/group/cancel

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


### DELETE /label/group/del

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


### GET /label/group/list

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


### POST /label/group/save

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


### GET /label/group/total

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


### PUT /label/group/update

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


## AI插件分组管理前端控制器

### POST /ai-plugin-group/list

**标题**：查询插件分组列表

**所属分类**：AI插件分组管理前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json）

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


### DELETE /ai-plugin-group/remove

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


### PUT /ai-plugin-group/update

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


## 验证码操作处理

### GET /captchaImage

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


## WebSocket 广播测试口子：给所有在线 WS 客户端推送一条消息。

### GET /ws/broadcast

**标题**：广播一条消息给所有在线 WS 客户端。

**所属分类**：WebSocket 广播测试口子：给所有在线 WS 客户端推送一条消息。

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `msg` | string | 否 | 广播内容（缺省 "hello"） |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | 状态码 |
| `msg` | string | 否 | 返回内容 |
| `data` | object | 否 | 数据对象 |
| `licenseState` | string | 否 | - |
| `licenseExpireDate` | string | 否 | - |


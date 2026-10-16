# 运营管理后台 —— 其他（/allocation、/accounts、/device、/dict）

共 20 个接口。由 `scripts/gen-references.mjs` 从 `docs/platform_api.json` 生成，请勿手改。

鉴权方式：该系统的 YApi 导出里没有任何登录或鉴权接口，登录端点未知。运行时由用户以 --login-path 提供登录路径（必要时用 --login-method、--token-path 修正），调用器不会猜测。首次联调确认后，请把路径填回本文件的 login.path。

返回总索引：[index.md](./index.md)

## 字典管理

### GET /dict/pull

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
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


### GET /dict/pull-array

**标题**：获取字典，查询指定的字典及其子集（数组形式）

**所属分类**：字典管理

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | string | 否 | 字典代码，非必填，为空查全部 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


### GET /dict/pull/0

**标题**：获取字典，查询全部0级的字典，包含子集

**所属分类**：字典管理

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


## 社媒账号管理前端控制器

### POST /accounts

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
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | array<object> | 否 | - |


### POST /accounts/band

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
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |


### POST /accounts/page

**标题**：查询应用账号分页

**所属分类**：社媒账号管理前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，分页查询参数）

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
| `appId` | string | 否 | 应用ID |
| `keyword` | string | 否 | 账号 昵称 邮箱 分组 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


### POST /accounts/users

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
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | array<object> | 否 | - |


### POST /accounts/users/page

**标题**：查询用户分页

**所属分类**：社媒账号管理前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json，分页查询参数）

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
| `keyword` | string | 否 | 用户名 昵称 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


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
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |


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
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


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
| `condition` | string | 否 | 搜索条件 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


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
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


## 用户分配容器前端控制器

### POST /allocation/container/allocate

**标题**：分配容器

**所属分类**：用户分配容器前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `userIds` | array<string> | 否 | 用户id |
| `deviceIds` | array<string> | 否 | 设备id集合 |
| `bindDirection` | boolean | 否 | 绑定方向 true是设备分配给用户 false是用户分配设备 |
| `delIds` | array<string> | 否 | 删除的id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | null | 否 | - |


### POST /allocation/container/list

**标题**：根据设备id查询用户列表

**所属分类**：用户分配容器前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceIds` | array<string> | 否 | 设备id集合 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


### POST /allocation/container/page

**标题**：容器配置分页

**所属分类**：用户分配容器前端控制器

**请求头**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `Content-Type` | string | 是 | 示例 application/json |

**请求体**（json）

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
| `condition` | string | 否 | 搜索条件 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


### POST /allocation/container/user/list

**标题**：根据用户id查询设备列表

**所属分类**：用户分配容器前端控制器

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
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


## MobileDeviceController

### GET /device/fold/floor/page

**标题**：折叠二层查询

**所属分类**：MobileDeviceController

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
| `foldType` | string | 否 | 分組類型
SERVER :SERVER
GROUP :GROUP
CHIP :CHIP |
| `objectId` | string | 否 | - |
| `objectName` | string | 否 | - |
| `screening` | string | 否 | 设备筛选 |
| `search` | string | 否 | 设备搜索 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


### GET /device/fold/page

**标题**：折叠查询

**所属分类**：MobileDeviceController

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
| `foldType` | string | 否 | 分組類型
SERVER :SERVER
GROUP :GROUP
CHIP :CHIP |
| `objectId` | string | 否 | - |
| `objectName` | string | 否 | - |
| `screening` | string | 否 | 设备筛选 |
| `search` | string | 否 | 设备搜索 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


### GET /device/page

**标题**：page

**所属分类**：MobileDeviceController

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
| `deviceIdx` | string | 否 | 设备序号/ip/别名 |
| `deviceStatuses` | string | 否 | 设备状态 |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | object | 否 | - |


### GET /device/server/list/

**标题**：获取服务器列表信息

**所属分类**：MobileDeviceController

**Query 参数**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `armIp` | string | 否 | - |

**响应顶层字段**

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `code` | integer | 否 | - |
| `msg` | string | 否 | - |
| `data` | array<object> | 否 | - |


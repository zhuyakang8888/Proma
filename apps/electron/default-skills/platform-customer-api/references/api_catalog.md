# platform-customer-api 接口目录

> 业务域：客户与许可证管理 · 来源：callfans-platform.md · 共 5 个操作
> 本文件是 catalog 的人工可读版；机器可读单一真源见 `api_catalog.json`。

## 登录
- `auth_post_login`  POST `/auth/login`  →  返回 `token`，执行器自动处理，无需手工传 token。

## 操作一览

| operation_id | 方法 | 路由 | 路径 | 摘要 | 风险 |
| --- | --- | --- | --- | --- | --- |
| `customer_delete_license_customer_delete` | DELETE | `/platform` | `/license/customer/delete` | 批量删除客户 | destructive |
| `customer_get_license_customer_id` | GET | `/platform` | `/license/customer/{id}` | 根据id查询客户信息 | read |
| `customer_post_license_customer_page` | POST | `/platform` | `/license/customer/page` | 客户列表 | read |
| `customer_post_license_customer_save` | POST | `/platform` | `/license/customer/save` | 新增客户 | write |
| `customer_put_license_customer_update` | PUT | `/platform` | `/license/customer/update` | 更新客户信息 | write |

## 操作详情
### customer_delete_license_customer_delete
- 摘要：批量删除客户
- `DELETE /platform/license/customer/delete` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `ids` (string [], 可选) — 客户ID列表
- 响应字段：`code`, `msg`, `data`

### customer_get_license_customer_id
- 摘要：根据id查询客户信息
- `GET /platform/license/customer/{id}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `id`, `customersName`, `customersType`, `customersTypeName`, `unifiedSocialCreditCode`, `legalPerson`, `legalPersonIdType`, `legalPersonIdNumber`, `personalIdType` …

### customer_post_license_customer_page
- 摘要：客户列表
- `POST /platform/license/customer/page` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `records` (object [], 可选) — 查询数据列表
  - `creatorId` (string, 可选) — 创建者
  - `createTime` (string, 可选) — 创建时间
  - `updatorId` (string, 可选) — 更新者
  - `updateTime` (string, 可选) — 更新时间
  - `deleted` (boolean, 可选) — 删除标识，0未删 1已删
  - `version` (integer, 可选) — 版本
  - `params` (object, 可选)
  - `key` (string, 可选)
  - `id` (integer, 可选) — 主键ID
  - `customersName` (string, 可选) — 客户名称
  - `customersType` (string, 可选) — 客户类型
  - `unifiedSocialCreditCode` (string, 可选) — 社会统一信用代码
  - `legalPerson` (string, 可选) — 法人姓名
  - `legalPersonIdType` (string, 可选) — 法人证件类型
  - `legalPersonIdNumber` (string, 可选) — 法人证件号码
  - `individualBusinessLicenseCode` (string, 可选) — 个体工商经营代码
  - `personalIdType` (string, 可选) — 个人证件类型
  - `personalIdNumber` (string, 可选) — 个人证件号码
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
  - `customersName` (string, 可选) — 客户名称
  - `customersType` (string, 可选) — 客户类型
- 响应字段：`code`, `msg`, `data`, `records`, `id`, `customersName`, `customersType`, `customersTypeName`, `certificateCode`, `legalPerson`, `legalPersonIdType`, `legalPersonIdTypeName` …
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### customer_post_license_customer_save
- 摘要：新增客户
- `POST /platform/license/customer/save` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `customersName` (string, 可选) — 客户名称
  - `customersType` (string, 可选) — 客户类型
  - `unifiedSocialCreditCode` (string, 可选) — 社会统一信用代码
  - `legalPerson` (string, 可选) — 法人姓名
  - `legalPersonIdType` (string, 可选) — 法人证件类型
  - `legalPersonIdNumber` (string, 可选) — 法人证件号码
  - `individualBusinessLicenseCode` (string, 可选) — 个体工商经验代码
  - `personalIdType` (string, 可选) — 个人证件类型
  - `personalIdNumber` (string, 可选) — 个人证件号码
  - `shareholderInfos` (object [], 可选) — 股东信息集合
  - `id` (string, 可选) — 股东id
  - `shareholderName` (string, 可选) — 股东姓名
  - `shareholderIdType` (string, 可选) — 股东证件类型
  - `shareholderIdNumber` (string, 可选) — 股东证件号码
- 响应字段：`code`, `msg`, `data`

### customer_put_license_customer_update
- 摘要：更新客户信息
- `PUT /platform/license/customer/update` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `id` (string, 可选) — 客户id
  - `customersName` (string, 可选) — 客户名称
  - `customersType` (string, 可选) — 客户类型
  - `unifiedSocialCreditCode` (string, 可选) — 社会统一信用代码
  - `legalPerson` (string, 可选) — 法人姓名
  - `legalPersonIdType` (string, 可选) — 法人证件类型
  - `legalPersonIdNumber` (string, 可选) — 法人证件号码
  - `personalIdType` (string, 可选) — 个人证件类型
  - `personalIdNumber` (string, 可选) — 个人证件号码
  - `individualBusinessLicenseCode` (string, 可选) — 个体工商经验代码
  - `shareholderInfos` (object [], 可选) — 股东信息集合
  - `id` (string, 可选) — 股东id
  - `shareholderName` (string, 可选) — 股东姓名
  - `shareholderIdType` (string, 可选) — 股东证件类型
  - `shareholderIdNumber` (string, 可选) — 股东证件号码
- 响应字段：`code`, `msg`, `data`

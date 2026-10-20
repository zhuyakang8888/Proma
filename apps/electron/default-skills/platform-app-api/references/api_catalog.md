# platform-app-api 接口目录

> 业务域：应用与AI插件管理 · 来源：callfans-standard.md, callfans-platform.md · 共 51 个操作
> 本文件是 catalog 的人工可读版；机器可读单一真源见 `api_catalog.json`。

## 登录
- `auth_post_login`  POST `/auth/login`  →  返回 `token`，执行器自动处理，无需手工传 token。

## 操作一览

| operation_id | 方法 | 路由 | 路径 | 摘要 | 风险 |
| --- | --- | --- | --- | --- | --- |
| `app_delete_ai_plugin_group_remove` | DELETE | `/social` | `/ai-plugin-group/remove` | 移除插件分组 | destructive |
| `app_delete_application_management` | DELETE | `/platform` | `/application/management` | 删除应用 | destructive |
| `app_delete_social_ai_plugin_delete` | DELETE | `/` | `/social/ai-plugin/delete` | 移除插件 | destructive |
| `app_delete_social_ai_plugin_group_remove` | DELETE | `/` | `/social/ai-plugin-group/remove` | 移除插件分组 | destructive |
| `app_delete_social_application_management` | DELETE | `/` | `/social/application/management` | 删除应用管理 | destructive |
| `app_get_application_management_id` | GET | `/platform` | `/application/management/{id}` | 根据id查询应用 | read |
| `app_get_application_management_script` | GET | `/platform` | `/application/management/script` | 获取脚本列表 | read |
| `app_get_dynamic_form_id` | GET | `/platform` | `/dynamic/form/{id}` | 根据id查询动态表单 | read |
| `app_get_social_ai_plugin_list` | GET | `/` | `/social/ai-plugin/list` | 获取插件列表 | read |
| `app_get_social_ai_plugin_list_offshelve` | GET | `/` | `/social/ai-plugin/list/offshelve` | 查询待上架的插件列表 | read |
| `app_get_social_ai_plugin_popular` | GET | `/` | `/social/ai-plugin/popular` | 获取热门插件列表 | read |
| `app_get_social_application_management_id` | GET | `/` | `/social/application/management/{id}` | 根据id查询应用管理 | read |
| `app_get_social_application_management_script` | GET | `/` | `/social/application/management/script` | 获取脚本列表 | read |
| `app_get_social_application_management_user_menu` | GET | `/` | `/social/application/management/user/menu` | 查询用户分配菜单的应用（分页） | read |
| `app_get_social_dynamic_form_id` | GET | `/` | `/social/dynamic/form/{id}` | 根据id查询动态表单 | read |
| `app_get_social_oss_download` | GET | `/` | `/social/oss/download` | 下载 | read |
| `app_get_social_oss_download_filename` | GET | `/` | `/social/oss/download/{fileName}` | 下载 | read |
| `app_get_social_oss_view_imgname` | GET | `/` | `/social/oss/view/{imgName}` | 预览图片 | read |
| `app_get_social_upload_records_download_id` | GET | `/` | `/social/upload-records/download/{id}` | 文件下载（下载上传失败的错误文件） | read |
| `app_get_social_upload_records_download_temp` | GET | `/` | `/social/upload-records/download/temp` | 下载账号导入模板 | read |
| `app_get_social_upload_records_page` | GET | `/` | `/social/upload-records/page` | 上传记录分页查询 | read |
| `app_post_ai_plugin_group_list` | POST | `/social` | `/ai-plugin-group/list` | 查询插件分组列表 | read |
| `app_post_application_management` | POST | `/platform` | `/application/management` | 更新应用 | write |
| `app_post_application_management_duplicate` | POST | `/platform` | `/application/management/duplicate` | 获取应用类型去重 | read |
| `app_post_application_management_id_status` | POST | `/platform` | `/application/management/{id}/{status}` | 更新应用状态 | write |
| `app_post_application_management_page` | POST | `/platform` | `/application/management/page` | 分页查询应用 | read |
| `app_post_application_management_type` | POST | `/platform` | `/application/management/type` | 获取应用类型 | read |
| `app_post_dynamic_form_column` | POST | `/platform` | `/dynamic/form/column` | 查询动态表单列 | read |
| `app_post_dynamic_form_column_table` | POST | `/platform` | `/dynamic/form/column/table` | 查询动态表单动态列表 | read |
| `app_post_dynamic_form_page` | POST | `/platform` | `/dynamic/form/page` | 分页查询动态表单 | read |
| `app_post_social_ai_plugin_group_list` | POST | `/` | `/social/ai-plugin-group/list` | 查询插件分组列表 | read |
| `app_post_social_ai_plugin_save` | POST | `/` | `/social/ai-plugin/save` | 保存插件信息 | write |
| `app_post_social_application_management` | POST | `/` | `/social/application/management` | 更新应用管理 | write |
| `app_post_social_application_management_duplicate` | POST | `/` | `/social/application/management/duplicate` | 获取应用类型去重（按应用管理id分组返回） | read |
| `app_post_social_application_management_id_status` | POST | `/` | `/social/application/management/{id}/{status}` | 更新应用管理状态 | write |
| `app_post_social_application_management_page` | POST | `/` | `/social/application/management/page` | 查询应用管理分页 | read |
| `app_post_social_application_management_type` | POST | `/` | `/social/application/management/type` | 获取应用类型 | read |
| `app_post_social_dynamic_form_column` | POST | `/` | `/social/dynamic/form/column` | 查询动态表单列 | read |
| `app_post_social_dynamic_form_column_table` | POST | `/` | `/social/dynamic/form/column/table` | 查询动态表单动态列表 | read |
| `app_post_social_dynamic_form_page` | POST | `/` | `/social/dynamic/form/page` | 分页查询动态表单 | read |
| `app_post_social_oss_upload` | POST | `/` | `/social/oss/upload` | 普通上传图片或视频 | write |
| `app_post_social_oss_upload_file` | POST | `/` | `/social/oss/upload/file` | 上传文本或csv文件 | write |
| `app_put_ai_plugin_group_update` | PUT | `/social` | `/ai-plugin-group/update` | 修改插件分组名称 | write |
| `app_put_application_management` | PUT | `/platform` | `/application/management` | 保存应用 | write |
| `app_put_dynamic_form` | PUT | `/platform` | `/dynamic/form` | 新增动态表单 | write |
| `app_put_social_ai_plugin_group_update` | PUT | `/` | `/social/ai-plugin-group/update` | 修改插件分组名称 | write |
| `app_put_social_ai_plugin_scoring` | PUT | `/` | `/social/ai-plugin/scoring` | 评分插件 | write |
| `app_put_social_ai_plugin_shelve` | PUT | `/` | `/social/ai-plugin/shelve` | 批量上架插件 | write |
| `app_put_social_ai_plugin_update` | PUT | `/` | `/social/ai-plugin/update` | 修改插件信息 | write |
| `app_put_social_application_management` | PUT | `/` | `/social/application/management` | 保存应用管理 | write |
| `app_put_social_dynamic_form` | PUT | `/` | `/social/dynamic/form` | 新增动态表单 | write |

## 操作详情
### app_delete_ai_plugin_group_remove
- 摘要：移除插件分组
- `DELETE /social/ai-plugin-group/remove` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `groupId` (string, 可选) — 分组id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### app_delete_application_management
- 摘要：删除应用
- `DELETE /platform/application/management` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `checkIds` (string [], 可选) — 勾选的id
- 响应字段：`code`, `msg`, `data`

### app_delete_social_ai_plugin_delete
- 摘要：移除插件
- `DELETE /social/ai-plugin/delete` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `id` (string, 可选) — 插件id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### app_delete_social_ai_plugin_group_remove
- 摘要：移除插件分组
- `DELETE /social/ai-plugin-group/remove` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `groupId` (string, 可选) — 分组id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### app_delete_social_application_management
- 摘要：删除应用管理
- `DELETE /social/application/management` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `checkIds` (integer [], 可选) — 勾选的id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### app_get_application_management_id
- 摘要：根据id查询应用
- `GET /platform/application/management/{id}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `id`, `applicationName`, `programType`, `id`, `logoPath`, `programName`, `scriptId`, `form`, `key` …

### app_get_application_management_script
- 摘要：获取脚本列表
- `GET /platform/application/management/script` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `id`, `name`

### app_get_dynamic_form_id
- 摘要：根据id查询动态表单
- `GET /platform/dynamic/form/{id}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `id`, `programName`, `programCategory`, `schedulingEngine`, `logoPath`, `applicationManagementId`, `form`, `key`, `scriptId` …

### app_get_social_ai_plugin_list
- 摘要：获取插件列表
- `GET /social/ai-plugin/list` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `categories`, `aiGroupId`, `aiGroupName`, `groupIcon`, `groupIconUrl`, `ais`, `id`, `title`, `subtitle` …

### app_get_social_ai_plugin_list_offshelve
- 摘要：查询待上架的插件列表
- `GET /social/ai-plugin/list/offshelve` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `id`, `title`, `subtitle`, `link`, `iconUrl`, `aiGroupId`, `aiGroupName`, `aiState`, `aiStateName` …

### app_get_social_ai_plugin_popular
- 摘要：获取热门插件列表
- `GET /social/ai-plugin/popular` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `id`, `title`, `subtitle`, `link`, `iconUrl`, `aiGroupId`, `aiGroupName`, `aiState`, `aiStateName` …

### app_get_social_application_management_id
- 摘要：根据id查询应用管理
- `GET /social/application/management/{id}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `creatorId`, `createTime`, `updatorId`, `updateTime`, `deleted`, `version`, `deptId`, `params`, `key` …

### app_get_social_application_management_script
- 摘要：获取脚本列表
- `GET /social/application/management/script` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `id`, `name`, `licenseState`, `licenseExpireDate`

### app_get_social_application_management_user_menu
- 摘要：查询用户分配菜单的应用（分页）
- `GET /social/application/management/user/menu` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `records`, `id`, `applicationName`, `logoPath`, `total`, `size`, `current`, `orders`, `column` …

### app_get_social_dynamic_form_id
- 摘要：根据id查询动态表单
- `GET /social/dynamic/form/{id}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `creatorId`, `createTime`, `updatorId`, `updateTime`, `deleted`, `version`, `deptId`, `params`, `key` …

### app_get_social_oss_download
- 摘要：下载
- `GET /social/oss/download` · 风险：read · 鉴权：required

### app_get_social_oss_download_filename
- 摘要：下载
- `GET /social/oss/download/{fileName}` · 风险：read · 鉴权：required

### app_get_social_oss_view_imgname
- 摘要：预览图片
- `GET /social/oss/view/{imgName}` · 风险：read · 鉴权：required

### app_get_social_upload_records_download_id
- 摘要：文件下载（下载上传失败的错误文件）
- `GET /social/upload-records/download/{id}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### app_get_social_upload_records_download_temp
- 摘要：下载账号导入模板
- `GET /social/upload-records/download/temp` · 风险：read · 鉴权：required

### app_get_social_upload_records_page
- 摘要：上传记录分页查询
- `GET /social/upload-records/page` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### app_post_ai_plugin_group_list
- 摘要：查询插件分组列表
- `POST /social/ai-plugin-group/list` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `groupName` (string, 可选) — 分组名称
- 响应字段：`code`, `msg`, `data`, `groupId`, `groupName`, `groupIcon`, `groupIconUrl`, `licenseState`, `licenseExpireDate`

### app_post_application_management
- 摘要：更新应用
- `POST /platform/application/management` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `id` (string, 可选) — 应用id
  - `applicationName` (string, 可选) — 应用名称
  - `applicationStatus` (integer, 可选) — 状态 0启用，1禁用
  - `logoPath` (string, 可选) — logo路径
  - `programName` (string, 可选) — 应用功能
  - `scriptId` (string, 可选) — 脚本id
  - `programIds` (string [], 可选) — 应用功能id集合
  - `programType` (object [], 可选)
  - `id` (string, 可选) — 主键id
  - `logoPath` (string, 可选) — logo路径
  - `programName` (string, 可选) — 功能名称
  - `scriptId` (string, 可选) — 脚本id
  - `form` (object [], 可选) — 表单
  - `key` (object, 可选)
  - `extendedColumn` (object [], 可选) — 扩展字段
  - `key` (object, 可选)
  - `systemConfig` (integer, 可选) — 系统配置
  - `packageName` (string, 可选) — 应用包名
  - `activityName` (string, 可选) — 应用类名
  - `orderNum` (integer, 可选) — 排序
  - `appArea` (string, 可选) — 应用地区
- 响应字段：`code`, `msg`, `data`

### app_post_application_management_duplicate
- 摘要：获取应用类型去重
- `POST /platform/application/management/duplicate` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `id` (string, 可选) — 应用管理id
  - `applicationStatus` (integer, 可选) — 应用状态
  - `systemConfig` (integer, 可选) — 是否展示任务
  - `programCategory` (string, 可选) — 任务类型
- 响应字段：`code`, `msg`, `data`, `id`, `applicationType`, `programCategory`, `systemConfig`, `logoPath`

### app_post_application_management_id_status
- 摘要：更新应用状态
- `POST /platform/application/management/{id}/{status}` · 风险：write · 鉴权：required
- 响应字段：`code`, `msg`, `data`

### app_post_application_management_page
- 摘要：分页查询应用
- `POST /platform/application/management/page` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `records` (object [], 可选) — 查询数据列表
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
  - `applicationName` (string, 可选) — 应用名称
  - `applicationStatus` (integer, 可选) — 应用状态 0：启用 1：禁用
- 响应字段：`code`, `msg`, `data`, `records`, `id`, `applicationName`, `programType`, `id`, `logoPath`, `programName`, `scriptId`, `form` …
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### app_post_application_management_type
- 摘要：获取应用类型
- `POST /platform/application/management/type` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `id` (string, 可选) — 应用管理id
  - `applicationStatus` (integer, 可选) — 应用状态
  - `systemConfig` (integer, 可选) — 是否展示任务
  - `programCategory` (string, 可选) — 任务类型
- 响应字段：`code`, `msg`, `data`, `id`, `applicationType`, `programCategory`, `systemConfig`, `logoPath`

### app_post_dynamic_form_column
- 摘要：查询动态表单列
- `POST /platform/dynamic/form/column` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `appId` (string, 可选) — 应用id
  - `taskType` (string, 可选) — 任务类型
  - `current` (integer, 可选)
  - `size` (integer, 可选)
- 响应字段：`code`, `msg`, `data`, `key`
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。

### app_post_dynamic_form_column_table
- 摘要：查询动态表单动态列表
- `POST /platform/dynamic/form/column/table` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `tableName`, `field`, `type`, `comment`, `children`, `tableName`, `field`, `type`, `comment` …

### app_post_dynamic_form_page
- 摘要：分页查询动态表单
- `POST /platform/dynamic/form/page` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `appId` (string, 可选) — 应用id
  - `taskType` (string, 可选) — 任务类型
  - `current` (integer, 可选)
  - `size` (integer, 可选)
- 响应字段：`code`, `msg`, `data`, `records`, `total`, `size`, `current`, `orders`, `column`, `asc`, `optimizeCountSql`, `searchCount` …
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。

### app_post_social_ai_plugin_group_list
- 摘要：查询插件分组列表
- `POST /social/ai-plugin-group/list` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `groupName` (string, 可选) — 分组名称
- 响应字段：`code`, `msg`, `data`, `groupId`, `groupName`, `groupIcon`, `groupIconUrl`, `licenseState`, `licenseExpireDate`

### app_post_social_ai_plugin_save
- 摘要：保存插件信息
- `POST /social/ai-plugin/save` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `title` (string, 可选) — 标题
  - `subtitle` (string, 可选) — 副标题
  - `link` (string, 可选) — 链接
  - `iconUrl` (string, 可选) — 图标链接
  - `aiGroupId` (string, 可选) — 分组id
  - `aiGroupName` (string, 可选) — 分组名称
  - `groupIconUrl` (string, 可选) — 分组链接
  - `aiState` (boolean, 可选) — ai状态(true 上架,false 待上架)
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### app_post_social_application_management
- 摘要：更新应用管理
- `POST /social/application/management` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `id` (string, 可选) — 应用id
  - `applicationName` (string, 可选) — 应用名称
  - `applicationStatus` (integer, 可选) — 状态 0启用，1禁用
  - `logoPath` (string, 可选) — logo路径
  - `programName` (string, 可选) — 应用功能
  - `scriptId` (string, 可选) — 脚本id
  - `programIds` (string [], 可选) — 应用功能id集合
  - `programType` (object [], 可选)
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
  - `logoPath` (string, 可选) — logo路径
  - `programName` (string, 可选) — 功能名称
  - `scriptId` (string, 可选) — 脚本id
  - `form` (object [], 可选) — 表单
  - `key` (object, 可选)
  - `extendedColumn` (object [], 可选) — 扩展字段
  - `key` (object, 可选)
  - `systemConfig` (integer, 可选) — 系统配置
  - `packageName` (string, 可选) — 应用包名
  - `activityName` (string, 可选) — 应用类名
  - `orderNum` (integer, 可选) — 排序
  - `appArea` (string, 可选) — 应用地区
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### app_post_social_application_management_duplicate
- 摘要：获取应用类型去重（按应用管理id分组返回）
- `POST /social/application/management/duplicate` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `id` (integer, 可选) — 应用管理id
  - `ids` (integer [], 可选) — 应用管理id集合（用于按多个应用管理id查询并分组返回的场景）
  - `applicationStatus` (integer, 可选) — 应用状态
  - `systemConfig` (integer, 可选) — 是否展示任务
  - `programCategory` (string, 可选) — 任务类型
- 响应字段：`code`, `msg`, `data`, `0`, `id`, `applicationType`, `programCategory`, `systemConfig`, `logoPath`, `applicationManagementId`, `licenseState`, `licenseExpireDate`

### app_post_social_application_management_id_status
- 摘要：更新应用管理状态
- `POST /social/application/management/{id}/{status}` · 风险：write · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### app_post_social_application_management_page
- 摘要：查询应用管理分页
- `POST /social/application/management/page` · 风险：read · 鉴权：required
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
  - `id` (integer, 可选) — 主键
  - `applicationName` (string, 可选) — 应用名称
  - `programType` (object [], 可选) — 功能类型
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
  - `logoPath` (string, 可选) — logo路径
  - `programName` (string, 可选) — 功能名称
  - `scriptId` (string, 可选) — 脚本id
  - `form` (object [], 可选) — 表单
  - `key` (object, 可选)
  - `extendedColumn` (object [], 可选) — 扩展字段
  - `key` (object, 可选)
  - `systemConfig` (integer, 可选) — 系统配置
  - `applicationStatus` (integer, 可选) — 状态 0启用，1禁用
  - `logoPath` (string, 可选) — logo路径
  - `orderNum` (integer, 可选) — 排序
  - `programName` (string, 可选) — 应用功能
  - `packageName` (string, 可选) — 应用包名
  - `activityName` (string, 可选) — 应用类名
  - `appArea` (string, 可选) — 应用地区
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
  - `applicationName` (string, 可选) — 应用名称
  - `applicationStatus` (integer, 可选) — 应用状态 0：启用 1：禁用
- 响应字段：`code`, `msg`, `data`, `records`, `creatorId`, `createTime`, `updatorId`, `updateTime`, `deleted`, `version`, `deptId`, `params` …
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### app_post_social_application_management_type
- 摘要：获取应用类型
- `POST /social/application/management/type` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `id` (integer, 可选) — 应用管理id
  - `ids` (integer [], 可选) — 应用管理id集合（用于按多个应用管理id查询并分组返回的场景）
  - `applicationStatus` (integer, 可选) — 应用状态
  - `systemConfig` (integer, 可选) — 是否展示任务
  - `programCategory` (string, 可选) — 任务类型
- 响应字段：`code`, `msg`, `data`, `id`, `applicationType`, `programCategory`, `systemConfig`, `logoPath`, `applicationManagementId`, `licenseState`, `licenseExpireDate`

### app_post_social_dynamic_form_column
- 摘要：查询动态表单列
- `POST /social/dynamic/form/column` · 风险：read · 鉴权：required
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
  - `programName` (string, 可选) — 功能名称
  - `programCategory` (string, 可选) — 功能类型
  - `schedulingEngine` (string, 可选) — 调度引擎
  - `logoPath` (string, 可选) — 图片路径
  - `applicationManagementId` (string, 可选) — 应用id
  - `form` (object [], 可选) — 表单
  - `key` (object, 可选)
  - `scriptId` (string, 可选) — 脚本id
  - `extendedColumn` (object [], 可选) — 扩展字段
  - `key` (object, 可选)
  - `systemConfig` (integer, 可选) — 是否显示任务
  - `formTemplate` (object [], 可选) — 数据模板
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
  - `appId` (string, 可选) — 应用id
  - `taskType` (string, 可选) — 任务类型
- 响应字段：`code`, `msg`, `data`, `key`, `licenseState`, `licenseExpireDate`
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### app_post_social_dynamic_form_column_table
- 摘要：查询动态表单动态列表
- `POST /social/dynamic/form/column/table` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `tableName`, `field`, `type`, `comment`, `children`, `tableName`, `field`, `type`, `comment` …

### app_post_social_dynamic_form_page
- 摘要：分页查询动态表单
- `POST /social/dynamic/form/page` · 风险：read · 鉴权：required
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
  - `programName` (string, 可选) — 功能名称
  - `programCategory` (string, 可选) — 功能类型
  - `schedulingEngine` (string, 可选) — 调度引擎
  - `logoPath` (string, 可选) — 图片路径
  - `applicationManagementId` (string, 可选) — 应用id
  - `form` (object [], 可选) — 表单
  - `key` (object, 可选)
  - `scriptId` (string, 可选) — 脚本id
  - `extendedColumn` (object [], 可选) — 扩展字段
  - `key` (object, 可选)
  - `systemConfig` (integer, 可选) — 是否显示任务
  - `formTemplate` (object [], 可选) — 数据模板
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
  - `appId` (string, 可选) — 应用id
  - `taskType` (string, 可选) — 任务类型
- 响应字段：`code`, `msg`, `data`, `records`, `total`, `size`, `current`, `orders`, `column`, `asc`, `optimizeCountSql`, `searchCount` …
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### app_post_social_oss_upload
- 摘要：普通上传图片或视频
- `POST /social/oss/upload` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- 响应字段：`code`, `msg`, `data`, `key`, `licenseState`, `licenseExpireDate`

### app_post_social_oss_upload_file
- 摘要：上传文本或csv文件
- `POST /social/oss/upload/file` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### app_put_ai_plugin_group_update
- 摘要：修改插件分组名称
- `PUT /social/ai-plugin-group/update` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `groupId` (string, 可选) — 插件组id
  - `groupName` (string, 可选) — 插件组名称
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### app_put_application_management
- 摘要：保存应用
- `PUT /platform/application/management` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `id` (string, 可选) — 应用id
  - `applicationName` (string, 可选) — 应用名称
  - `applicationStatus` (integer, 可选) — 状态 0启用，1禁用
  - `logoPath` (string, 可选) — logo路径
  - `programName` (string, 可选) — 应用功能
  - `scriptId` (string, 可选) — 脚本id
  - `programIds` (string [], 可选) — 应用功能id集合
  - `programType` (object [], 可选)
  - `id` (string, 可选) — 主键id
  - `logoPath` (string, 可选) — logo路径
  - `programName` (string, 可选) — 功能名称
  - `scriptId` (string, 可选) — 脚本id
  - `form` (object [], 可选) — 表单
  - `key` (object, 可选)
  - `extendedColumn` (object [], 可选) — 扩展字段
  - `key` (object, 可选)
  - `systemConfig` (integer, 可选) — 系统配置
  - `packageName` (string, 可选) — 应用包名
  - `activityName` (string, 可选) — 应用类名
  - `orderNum` (integer, 可选) — 排序
  - `appArea` (string, 可选) — 应用地区
- 响应字段：`code`, `msg`, `data`

### app_put_dynamic_form
- 摘要：新增动态表单
- `PUT /platform/dynamic/form` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `id` (string, 可选) — 主键id
  - `programCategory` (string, 可选) — 任务类型
  - `programName` (string, 可选) — 功能名称
  - `logoPath` (string, 可选) — 图片路径
  - `schedulingEngine` (string, 可选) — 引擎类型
  - `appId` (string, 可选) — 应用id
  - `form` (object [], 可选) — 表单
  - `key` (object, 可选)
  - `scriptId` (string, 可选) — 脚本id
  - `extendedColumn` (object [], 可选) — 扩展列
  - `key` (object, 可选)
  - `formTemplate` (object [], 可选) — 数据模板
  - `key` (object, 可选)
- 响应字段：`code`, `msg`, `data`, `id`

### app_put_social_ai_plugin_group_update
- 摘要：修改插件分组名称
- `PUT /social/ai-plugin-group/update` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `groupId` (string, 可选) — 插件组id
  - `groupName` (string, 可选) — 插件组名称
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### app_put_social_ai_plugin_scoring
- 摘要：评分插件
- `PUT /social/ai-plugin/scoring` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `id` (string, 可选) — 插件id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### app_put_social_ai_plugin_shelve
- 摘要：批量上架插件
- `PUT /social/ai-plugin/shelve` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `ids` (string [], 可选) — ai插件id集合
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### app_put_social_ai_plugin_update
- 摘要：修改插件信息
- `PUT /social/ai-plugin/update` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `id` (string, 可选) — id
  - `title` (string, 可选) — 标题
  - `subtitle` (string, 可选) — 副标题
  - `link` (string, 可选) — 链接
  - `iconUrl` (string, 可选) — 图标链接
  - `aiGroupId` (string, 可选) — 分组id
  - `aiGroupName` (string, 可选) — 分组名称
  - `groupIconUrl` (string, 可选) — ai分组图标链接
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### app_put_social_application_management
- 摘要：保存应用管理
- `PUT /social/application/management` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `id` (string, 可选) — 应用id
  - `applicationName` (string, 可选) — 应用名称
  - `applicationStatus` (integer, 可选) — 状态 0启用，1禁用
  - `logoPath` (string, 可选) — logo路径
  - `programName` (string, 可选) — 应用功能
  - `scriptId` (string, 可选) — 脚本id
  - `programIds` (string [], 可选) — 应用功能id集合
  - `programType` (object [], 可选)
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
  - `logoPath` (string, 可选) — logo路径
  - `programName` (string, 可选) — 功能名称
  - `scriptId` (string, 可选) — 脚本id
  - `form` (object [], 可选) — 表单
  - `key` (object, 可选)
  - `extendedColumn` (object [], 可选) — 扩展字段
  - `key` (object, 可选)
  - `systemConfig` (integer, 可选) — 系统配置
  - `packageName` (string, 可选) — 应用包名
  - `activityName` (string, 可选) — 应用类名
  - `orderNum` (integer, 可选) — 排序
  - `appArea` (string, 可选) — 应用地区
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### app_put_social_dynamic_form
- 摘要：新增动态表单
- `PUT /social/dynamic/form` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `id` (string, 可选) — 主键id
  - `programCategory` (string, 可选) — 任务类型
  - `schedulingEngine` (string, 必填) — 调度引擎
  - `programName` (string, 可选) — 功能名称
  - `logoPath` (string, 可选) — 图片路径
  - `appId` (string, 可选) — 应用id
  - `form` (object [], 可选) — 表单
  - `key` (object, 可选)
  - `scriptId` (string, 可选) — 脚本id
  - `extendedColumn` (object [], 可选) — 扩展列
  - `key` (object, 可选)
  - `formTemplate` (object [], 可选) — 数据模板
  - `key` (object, 可选)
- 响应字段：`code`, `msg`, `data`, `id`, `licenseState`, `licenseExpireDate`

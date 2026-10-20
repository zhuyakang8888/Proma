# platform-content-api 接口目录

> 业务域：内容素材库（素材/文本/模板/标签群组/人设） · 来源：callfans-standard.md · 共 61 个操作
> 本文件是 catalog 的人工可读版；机器可读单一真源见 `api_catalog.json`。

## 登录
- `auth_post_login`  POST `/auth/login`  →  返回 `token`，执行器自动处理，无需手工传 token。

## 操作一览

| operation_id | 方法 | 路由 | 路径 | 摘要 | 风险 |
| --- | --- | --- | --- | --- | --- |
| `content_delete_label_group_del` | DELETE | `/social` | `/label/group/del` | 删除群组 | destructive |
| `content_delete_social_label_group_del` | DELETE | `/` | `/social/label/group/del` | 删除群组 | destructive |
| `content_delete_social_material_batch_delete` | DELETE | `/` | `/social/material/batch/delete` | 批量删除素材 | destructive |
| `content_delete_social_material_folder` | DELETE | `/` | `/social/material/folder` | 删除素材文件夹 | destructive |
| `content_delete_social_template_del` | DELETE | `/` | `/social/template/del` | 批量删除模板库 | destructive |
| `content_delete_social_text_library_del` | DELETE | `/` | `/social/text-library/del` | 删除文本库信息(支持批量) | destructive |
| `content_get_label_group_list` | GET | `/social` | `/label/group/list` | 查询群组集合 | read |
| `content_get_label_group_total` | GET | `/social` | `/label/group/total` | 查询群组下标签数量 | read |
| `content_get_social_interested_page` | GET | `/` | `/social/interested/page` | 获取人设列表分页 | read |
| `content_get_social_label_group_list` | GET | `/` | `/social/label/group/list` | 查询群组集合 | read |
| `content_get_social_label_group_total` | GET | `/` | `/social/label/group/total` | 查询群组下标签数量 | read |
| `content_get_social_material_folder_total` | GET | `/` | `/social/material/folder/total` | 查询文件夹下素材数量 | read |
| `content_get_social_material_folder_tree` | GET | `/` | `/social/material/folder/tree` | 查询素材文件夹树结构 | read |
| `content_get_social_material_id` | GET | `/` | `/social/material/{id}` | 根据id查询素材库素材详情信息 | read |
| `content_get_social_material_label_total` | GET | `/` | `/social/material/label/total` | 查询标签数量 | read |
| `content_get_social_material_total` | GET | `/` | `/social/material/total` | 获取素材分类数量 | read |
| `content_get_social_template_id` | GET | `/` | `/social/template/{id}` | 根据id查询模板库 | read |
| `content_get_social_text_library_detail_id` | GET | `/` | `/social/text-library/detail/{id}` | 获取文本库详情 | read |
| `content_get_social_text_library_field` | GET | `/` | `/social/text-library/field` | 获取文本库字段信息 | read |
| `content_get_social_text_library_list_id` | GET | `/` | `/social/text-library/list/{id}` | 获取文本库列表详情 | read |
| `content_post_label_group_add` | POST | `/social` | `/label/group/add` | 新增标签和群组关联关系 | write |
| `content_post_label_group_cancel` | POST | `/social` | `/label/group/cancel` | 取消标签和群组关联关系 | write |
| `content_post_label_group_save` | POST | `/social` | `/label/group/save` | 保存群组 | write |
| `content_post_social_label_group_add` | POST | `/` | `/social/label/group/add` | 新增标签和群组关联关系 | write |
| `content_post_social_label_group_cancel` | POST | `/` | `/social/label/group/cancel` | 取消标签和群组关联关系 | write |
| `content_post_social_label_group_save` | POST | `/` | `/social/label/group/save` | 保存群组 | write |
| `content_post_social_material_batch_download` | POST | `/` | `/social/material/batch/download` | 批量下载素材 | read |
| `content_post_social_material_folder` | POST | `/` | `/social/material/folder` | 新增文件夹 | write |
| `content_post_social_material_folder_add` | POST | `/` | `/social/material/folder/add` | 新增素材文件夹和素材关联 | write |
| `content_post_social_material_folder_cancel` | POST | `/` | `/social/material/folder/cancel` | 取消素材文件夹和素材关联 | write |
| `content_post_social_material_folder_download` | POST | `/` | `/social/material/folder/download` | 下载文件夹下的所有素材 | read |
| `content_post_social_material_folder_tree` | POST | `/` | `/social/material/folder/tree` | 查询素材文件夹 | read |
| `content_post_social_material_label_add` | POST | `/` | `/social/material/label/add` | 新增素材和标签关联 | write |
| `content_post_social_material_label_cancel` | POST | `/` | `/social/material/label/cancel` | 取消素材和标签关联 | write |
| `content_post_social_material_label_list` | POST | `/` | `/social/material/label/list` | 根据枚举值或群组id查询标签集合 | read |
| `content_post_social_material_label_name` | POST | `/` | `/social/material/label/name` | 模糊查询标签 | read |
| `content_post_social_material_label_save` | POST | `/` | `/social/material/label/save` | 保存素材标签 | write |
| `content_post_social_material_list` | POST | `/` | `/social/material/list` | 分页查询素材信息 | read |
| `content_post_social_material_totalnum` | POST | `/` | `/social/material/totalNum` | 查询素材分类总数 | read |
| `content_post_social_material_update` | POST | `/` | `/social/material/update` | 更新素材信息 | write |
| `content_post_social_material_upload` | POST | `/` | `/social/material/upload` | 素材库导入素材 | write |
| `content_post_social_template_add` | POST | `/` | `/social/template/add` | 新增模板库 | write |
| `content_post_social_template_disable` | POST | `/` | `/social/template/disable` | 批量禁用模板库 | write |
| `content_post_social_template_enable` | POST | `/` | `/social/template/enable` | 批量启用模板库 0禁用 1启用 | write |
| `content_post_social_template_execute` | POST | `/` | `/social/template/execute` | 执行模板库 | write |
| `content_post_social_template_page` | POST | `/` | `/social/template/page` | 模板库列表分页 | read |
| `content_post_social_text_library_batch` | POST | `/` | `/social/text-library/batch` | 文本库批量关联 | write |
| `content_post_social_text_library_batch_update` | POST | `/` | `/social/text-library/batch/update` | 批量更新文本库 | write |
| `content_post_social_text_library_page` | POST | `/` | `/social/text-library/page` | 分页查询 | read |
| `content_post_social_text_library_update` | POST | `/` | `/social/text-library/update` | 更新文本库 | write |
| `content_put_label_group_update` | PUT | `/social` | `/label/group/update` | 修改群组名称 | write |
| `content_put_social_interested_set` | PUT | `/` | `/social/interested/set` | 为账号设置人设 | write |
| `content_put_social_label_group_update` | PUT | `/` | `/social/label/group/update` | 修改群组名称 | write |
| `content_put_social_material_callback` | PUT | `/` | `/social/material/callback` | 回收站素材还原 | write |
| `content_put_social_material_folder` | PUT | `/` | `/social/material/folder` | 修改素材文件夹 | write |
| `content_put_social_material_score` | PUT | `/` | `/social/material/score` | 更新素材评分 | write |
| `content_put_social_template_cancel_tempid` | PUT | `/` | `/social/template/cancel/{tempId}` | 取消任务 | write |
| `content_put_social_template_update` | PUT | `/` | `/social/template/update` | 修改模板库 | write |
| `content_put_social_text_library_cancel` | PUT | `/` | `/social/text-library/cancel` | 取消执行(支持批量) | write |
| `content_put_social_text_library_modify` | PUT | `/` | `/social/text-library/modify` | 启用或禁用文本库 (支持批量) | write |
| `content_put_social_text_library_start` | PUT | `/` | `/social/text-library/start` | 立即执行 | write |

## 操作详情
### content_delete_label_group_del
- 摘要：删除群组
- `DELETE /social/label/group/del` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `labelGroupId` (string, 可选) — 标签群组id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### content_delete_social_label_group_del
- 摘要：删除群组
- `DELETE /social/label/group/del` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `labelGroupId` (string, 可选) — 标签群组id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### content_delete_social_material_batch_delete
- 摘要：批量删除素材
- `DELETE /social/material/batch/delete` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `ids` (string [], 必填) — 素材id列表
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### content_delete_social_material_folder
- 摘要：删除素材文件夹
- `DELETE /social/material/folder` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `materialFolderId` (string, 可选) — 文件夹id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### content_delete_social_template_del
- 摘要：批量删除模板库
- `DELETE /social/template/del` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `templateLibraryIds` (string [], 可选) — 模板id集合
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### content_delete_social_text_library_del
- 摘要：删除文本库信息(支持批量)
- `DELETE /social/text-library/del` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `textIds` (string [], 可选) — 文本库主键
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### content_get_label_group_list
- 摘要：查询群组集合
- `GET /social/label/group/list` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `id`, `groupName`, `licenseState`, `licenseExpireDate`

### content_get_label_group_total
- 摘要：查询群组下标签数量
- `GET /social/label/group/total` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `key`, `licenseState`, `licenseExpireDate`

### content_get_social_interested_page
- 摘要：获取人设列表分页
- `GET /social/interested/page` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### content_get_social_label_group_list
- 摘要：查询群组集合
- `GET /social/label/group/list` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `id`, `groupName`, `licenseState`, `licenseExpireDate`

### content_get_social_label_group_total
- 摘要：查询群组下标签数量
- `GET /social/label/group/total` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `key`, `licenseState`, `licenseExpireDate`

### content_get_social_material_folder_total
- 摘要：查询文件夹下素材数量
- `GET /social/material/folder/total` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `0`, `licenseState`, `licenseExpireDate`

### content_get_social_material_folder_tree
- 摘要：查询素材文件夹树结构
- `GET /social/material/folder/tree` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `id`, `folderName`, `parentId`, `fileCount`, `materialFolderIds`, `sortIndex`, `children`, `id`, `folderName` …

### content_get_social_material_id
- 摘要：根据id查询素材库素材详情信息
- `GET /social/material/{id}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `id`, `fileName`, `fileDimension`, `fileSize`, `fileType`, `addDate`, `remarks`, `updateTime`, `licenseState` …

### content_get_social_material_label_total
- 摘要：查询标签数量
- `GET /social/material/label/total` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `all`, `ungrouped`, `licenseState`, `licenseExpireDate`

### content_get_social_material_total
- 摘要：获取素材分类数量
- `GET /social/material/total` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `all`, `unclassified`, `unlabeled`, `unscored`, `licenseState`, `licenseExpireDate`

### content_get_social_template_id
- 摘要：根据id查询模板库
- `GET /social/template/{id}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `id`, `templateName`, `triggerTime`, `lastEndTime`, `executionTimes`, `templateStatus`, `assembles`, `key`, `connections` …

### content_get_social_text_library_detail_id
- 摘要：获取文本库详情
- `GET /social/text-library/detail/{id}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `id`, `themeSettings`, `suiteName`, `topic`, `title`, `hashTags`, `mainTextRef`, `mainText`, `keyWords` …

### content_get_social_text_library_field
- 摘要：获取文本库字段信息
- `GET /social/text-library/field` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `fieldEn`, `fieldCh`, `licenseState`, `licenseExpireDate`

### content_get_social_text_library_list_id
- 摘要：获取文本库列表详情
- `GET /social/text-library/list/{id}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `id`, `themeSettings`, `suiteName`, `topic`, `title`, `hashTags`, `mainTextRef`, `mainText`, `keyWords` …

### content_post_label_group_add
- 摘要：新增标签和群组关联关系
- `POST /social/label/group/add` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `labelIds` (string [], 可选) — 标签id集合
  - `labelGroupId` (string, 可选) — 标签群组id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### content_post_label_group_cancel
- 摘要：取消标签和群组关联关系
- `POST /social/label/group/cancel` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `labelIds` (string [], 可选) — 标签id集合
  - `labelGroupId` (string, 可选) — 标签群组id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### content_post_label_group_save
- 摘要：保存群组
- `POST /social/label/group/save` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `groupName` (string, 可选) — 标签群组名称
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### content_post_social_label_group_add
- 摘要：新增标签和群组关联关系
- `POST /social/label/group/add` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `labelIds` (string [], 可选) — 标签id集合
  - `labelGroupId` (string, 可选) — 标签群组id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### content_post_social_label_group_cancel
- 摘要：取消标签和群组关联关系
- `POST /social/label/group/cancel` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `labelIds` (string [], 可选) — 标签id集合
  - `labelGroupId` (string, 可选) — 标签群组id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### content_post_social_label_group_save
- 摘要：保存群组
- `POST /social/label/group/save` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `groupName` (string, 可选) — 标签群组名称
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### content_post_social_material_batch_download
- 摘要：批量下载素材
- `POST /social/material/batch/download` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `ids` (string [], 必填) — 素材id列表

### content_post_social_material_folder
- 摘要：新增文件夹
- `POST /social/material/folder` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `folderName` (string, 可选) — 文件夹名称
  - `parentId` (string, 可选) — 父id
- 响应字段：`code`, `msg`, `data`, `id`, `licenseState`, `licenseExpireDate`

### content_post_social_material_folder_add
- 摘要：新增素材文件夹和素材关联
- `POST /social/material/folder/add` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `materialIds` (string [], 可选) — 素材id集合
  - `folderIds` (string [], 可选) — 新增文件夹id
  - `folderDelIds` (string [], 可选) — 删除文件夹id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### content_post_social_material_folder_cancel
- 摘要：取消素材文件夹和素材关联
- `POST /social/material/folder/cancel` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `materialIds` (string [], 可选) — 素材id集合
  - `folderIds` (string [], 可选) — 文件夹id集合
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### content_post_social_material_folder_download
- 摘要：下载文件夹下的所有素材
- `POST /social/material/folder/download` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `folderId` (string, 可选) — 文件夹id

### content_post_social_material_folder_tree
- 摘要：查询素材文件夹
- `POST /social/material/folder/tree` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `folderName` (string, 可选) — 文件夹名称
  - `parentId` (integer, 可选) — 文件夹层级
- 响应字段：`code`, `msg`, `data`, `id`, `folderName`, `parentId`, `fileCount`, `materialFolderIds`, `sortIndex`, `children`, `id`, `folderName` …

### content_post_social_material_label_add
- 摘要：新增素材和标签关联
- `POST /social/material/label/add` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `materialIds` (string [], 可选) — 素材id集合
  - `materialLabelId` (string, 可选) — 标签id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### content_post_social_material_label_cancel
- 摘要：取消素材和标签关联
- `POST /social/material/label/cancel` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `materialIds` (string [], 可选) — 素材id集合
  - `materialLabelId` (string, 可选) — 标签id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### content_post_social_material_label_list
- 摘要：根据枚举值或群组id查询标签集合
- `POST /social/material/label/list` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `materialLabelEnum` (string, 可选) — 标签分类
  - `groupId` (string, 可选) — 群组id
- 响应字段：`code`, `msg`, `data`, `id`, `labelName`, `licenseState`, `licenseExpireDate`

### content_post_social_material_label_name
- 摘要：模糊查询标签
- `POST /social/material/label/name` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `labelName` (string, 可选) — 标签名称
- 响应字段：`code`, `msg`, `data`, `id`, `labelName`, `licenseState`, `licenseExpireDate`

### content_post_social_material_label_save
- 摘要：保存素材标签
- `POST /social/material/label/save` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `labelName` (string, 可选) — 标签名称
- 响应字段：`code`, `msg`, `data`, `id`, `licenseState`, `licenseExpireDate`

### content_post_social_material_list
- 摘要：分页查询素材信息
- `POST /social/material/list` · 风险：read · 鉴权：required
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
  - `fileUrl` (string, 可选) — 文件url
  - `fileName` (string, 可选) — 文件名称
  - `fileScore` (integer, 可选) — 文件评分 0表示未评分
  - `fileDimension` (string, 可选) — 文件尺寸
  - `fileSize` (string, 可选) — 文件大小
  - `fileType` (string, 可选) — 文件格式
  - `addDate` (string, 可选) — 文件添加时间
  - `remarks` (string, 可选) — 文件备注
  - `recordId` (integer, 可选) — 执行记录编号
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
  - `materialClassify` (string, 可选) — 素材分类
  - `onlyFolderIds` (string [], 可选) — 文件夹集合（仅展示文件夹下图片）
  - `folderId` (string, 可选) — 文件夹（包含子文件）
  - `fileSuffix` (string, 可选) — 文件后缀
  - `tagIds` (string [], 可选) — 便签IDs
  - `fileScores` (integer [], 可选) — 评分
  - `fileName` (string, 可选) — 文件名
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### content_post_social_material_totalnum
- 摘要：查询素材分类总数
- `POST /social/material/totalNum` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `materialClassify` (string, 可选) — 素材分类
  - `folderId` (string, 可选) — 文件夹id
  - `fileSuffix` (string, 可选) — 文件后缀
- 响应字段：`code`, `msg`, `data`, `totalFileNum`, `totalFileSize`, `totalFolderNum`, `licenseState`, `licenseExpireDate`

### content_post_social_material_update
- 摘要：更新素材信息
- `POST /social/material/update` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `id` (string, 可选) — 素材id
  - `fileName` (string, 可选) — 文件名称
  - `remarks` (string, 可选) — 文件备注
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### content_post_social_material_upload
- 摘要：素材库导入素材
- `POST /social/material/upload` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### content_post_social_template_add
- 摘要：新增模板库
- `POST /social/template/add` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `templateName` (string, 可选) — 模板名称 限制 30个字符
  - `triggerTime` (string, 可选) — 触发时间
  - `assembles` (object [], 可选) — 模板组件集合
  - `key` (object, 可选)
  - `connections` (object [], 可选) — 模板连接
  - `templateType` (string, 可选) — 模板类型（text:文本库、template:模板库）
- 响应字段：`code`, `msg`, `data`, `id`, `licenseState`, `licenseExpireDate`

### content_post_social_template_disable
- 摘要：批量禁用模板库
- `POST /social/template/disable` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `templateLibraryIds` (string [], 可选) — 模板id集合
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### content_post_social_template_enable
- 摘要：批量启用模板库 0禁用 1启用
- `POST /social/template/enable` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `templateLibraryIds` (string [], 可选) — 模板id集合
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### content_post_social_template_execute
- 摘要：执行模板库
- `POST /social/template/execute` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `templateId` (string, 可选) — 模板id
  - `execSource` (string, 可选) — 触发来源
  - `execId` (string, 可选) — 触发编号（主键）
  - `templateLibrary` (object, 可选) — 运行指定模板
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
  - `templateName` (string, 可选) — 模板名称
  - `triggerTime` (string, 可选) — 触发时间
  - `lastEndTime` (string, 可选) — 上次执行结束时间
  - `executionTimes` (integer, 可选) — 执行次数
  - `templateStatus` (integer, 可选) — 模板状态
  - `assembles` (object [], 可选) — 模板组件集合
  - `key` (object, 可选)
  - `connections` (object [], 可选) — 模板连接
  - `jobId` (integer, 可选) — job平台的任务id
  - `cronExpr` (string, 可选) — cron表达式
  - `templateType` (string, 可选)
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### content_post_social_template_page
- 摘要：模板库列表分页
- `POST /social/template/page` · 风险：read · 鉴权：required
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
  - `templateName` (string, 可选) — 模板名称
  - `triggerTime` (string, 可选) — 触发时间
  - `lastEndTime` (string, 可选) — 上次执行结束时间
  - `executionTimes` (integer, 可选) — 执行次数
  - `templateStatus` (integer, 可选) — 模板状态
  - `assembles` (object [], 可选) — 模板组件集合
  - `key` (object, 可选)
  - `connections` (object [], 可选) — 模板连接
  - `jobId` (integer, 可选) — job平台的任务id
  - `cronExpr` (string, 可选) — cron表达式
  - `templateType` (string, 可选)
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
  - `templateName` (string, 可选) — 模板名称
  - `templateStatus` (integer, 可选) — 模板状态
  - `lastEndTime` (string [], 可选) — 上次执行结束时间
- 响应字段：`code`, `msg`, `data`, `records`, `id`, `templateName`, `triggerTime`, `lastEndTime`, `executionTimes`, `templateStatus`, `assembles`, `key` …
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### content_post_social_text_library_batch
- 摘要：文本库批量关联
- `POST /social/text-library/batch` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `textLibs` (object [], 可选)
  - `textId` (string, 可选) — 文本库主键
  - `filePath` (string, 可选) — 文件地址
  - `source` (string, 可选) — 来源
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### content_post_social_text_library_batch_update
- 摘要：批量更新文本库
- `POST /social/text-library/batch/update` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `batchDtos` (object [], 可选)
  - `textId` (string, 可选) — 文本库主键
  - `themeSettings` (string, 可选) — 方向设置（L->左 R->右）
  - `suiteName` (string, 可选) — 分组
  - `topic` (string, 可选) — 主题
  - `title` (string, 可选) — 发布文案
  - `hashTags` (string, 可选) — 标签
  - `mainTextRef` (string, 可选) — 主文案参照
  - `mainText` (string, 可选) — 文案
  - `keyWords` (string, 可选) — 关键字
  - `coverText` (string, 可选) — 封面文案
  - `taskRef` (string, 可选) — 图片、视频minio地址
  - `aigcId` (string, 可选) — Aigc编号
  - `componentParam` (object [], 可选) — 关联aigc组件信息
  - `key` (object, 可选)
  - `source` (string, 可选) — 文件来源
  - `execState` (string, 可选) — 执行状态
  - `state` (string, 可选) — 状态
  - `comfyuiTask` (string, 可选) — 执行任务类型
  - `columnState` (object, 可选) — 字段状态信息
  - `generationTime` (string, 可选) — 生成时间
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### content_post_social_text_library_page
- 摘要：分页查询
- `POST /social/text-library/page` · 风险：read · 鉴权：required
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
  - `id` (string, 可选) — 文本库主键
  - `themeSettings` (string, 可选) — 方向设置（L->左 R->右）
  - `suiteName` (string, 可选) — 分组
  - `topic` (string, 可选) — 主题
  - `title` (string, 可选) — 发布文案
  - `hashTags` (string, 可选) — 标签
  - `mainTextRef` (string, 可选) — 主文案参照
  - `mainText` (string, 可选) — 文案
  - `keyWords` (string, 可选) — 关键字
  - `promptId` (string, 可选) — comfyui任务ID
  - `queueNum` (integer, 可选) — comfyui 队列编号
  - `nextPromptId` (string, 可选) — 下一次comfyui任务ID
  - `nextQueueNum` (integer, 可选) — 下一次comfyui 队列编号
  - `coverText` (string, 可选) — 封面文案
  - `execState` (string, 可选) — 执行状态BE_EXECUTED("待执行"), IN_EXECUTION("执行中"), SUCCESS("成功"), FAIL("失败"), CANCEL("已取消"), IN_QUEUE("队列中"){@link cn.callfans.social.api.config.api.enums.TaskStatusEnum}
  - `state` (string, 可选) — 状态 ENABLE("启用"),DISABLED("停用")
  - `aigcId` (integer, 可选) — aigc编号
  - `componentParam` (object [], 可选) — 关联aigc组件信息
  - `key` (object, 可选)
  - `source` (string, 可选) — 文件来源local、template、aigc
  - `taskRef` (string, 可选) — 图片、视频minio地址
  - `errorMsg` (string, 可选) — 错误原因
  - `generationTime` (string, 可选) — 生成时间
  - `columnState` (object, 可选) — 字段禁启用
  - `key` (string, 可选)
  - `isLock` (boolean, 可选)
  - `thirdPromptId` (string, 可选) — 三次comfyui任务编号
  - `thirdQueueNum` (integer, 可选) — 三次comfyui任务编号
  - `comfyuiTask` (string, 可选) — 当前任务类型
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
  - `tag` (string, 可选) — 标签
  - `keyWord` (string, 可选) — 关键字
  - `title` (string, 可选) — 发布文案
  - `suiteName` (string, 可选) — 自定义分组
  - `state` (string, 可选) — 状态
  - `execState` (string, 可选) — 执行状态
  - `generationTimeRange` (string [], 可选) — 时间
  - `isEnd` (boolean, 可选) — 是否查询结束态true 查询成功、失败、已取消，false则查询全部与执行状态字段同时生效
  - `mixField` (string, 可选) — 混合查询字段
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### content_post_social_text_library_update
- 摘要：更新文本库
- `POST /social/text-library/update` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `textId` (string, 可选) — 文本库主键
  - `themeSettings` (string, 可选) — 方向设置（L->左 R->右）
  - `suiteName` (string, 可选) — 分组
  - `topic` (string, 可选) — 主题
  - `title` (string, 可选) — 发布文案
  - `hashTags` (string, 可选) — 标签
  - `mainTextRef` (string, 可选) — 主文案参照
  - `mainText` (string, 可选) — 文案
  - `keyWords` (string, 可选) — 关键字
  - `coverText` (string, 可选) — 封面文案
  - `taskRef` (string, 可选) — 图片、视频minio地址
  - `aigcId` (string, 可选) — Aigc编号
  - `componentParam` (object [], 可选) — 关联aigc组件信息
  - `key` (object, 可选)
  - `source` (string, 可选) — 文件来源
  - `execState` (string, 可选) — 执行状态
  - `state` (string, 可选) — 状态
  - `comfyuiTask` (string, 可选) — 执行任务类型
  - `columnState` (object, 可选) — 字段状态信息
  - `generationTime` (string, 可选) — 生成时间
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### content_put_label_group_update
- 摘要：修改群组名称
- `PUT /social/label/group/update` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `id` (string, 可选) — 标签群组id
  - `groupName` (string, 可选) — 标签群组名称
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### content_put_social_interested_set
- 摘要：为账号设置人设
- `PUT /social/interested/set` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `interestedId` (integer, 可选) — 兴趣主键
  - `accountId` (string, 可选) — 账号主键
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### content_put_social_label_group_update
- 摘要：修改群组名称
- `PUT /social/label/group/update` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `id` (string, 可选) — 标签群组id
  - `groupName` (string, 可选) — 标签群组名称
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### content_put_social_material_callback
- 摘要：回收站素材还原
- `PUT /social/material/callback` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `ids` (string [], 必填) — 素材id列表
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### content_put_social_material_folder
- 摘要：修改素材文件夹
- `PUT /social/material/folder` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `materialFolderId` (string, 可选) — 文件夹id
  - `folderName` (string, 可选) — 文件夹名称
  - `parentId` (integer, 可选) — 父级文件夹
  - `sortIndex` (integer, 可选) — 下标排序
- 响应字段：`code`, `msg`, `data`, `id`, `licenseState`, `licenseExpireDate`

### content_put_social_material_score
- 摘要：更新素材评分
- `PUT /social/material/score` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `materialIds` (string [], 可选) — 素材id
  - `fileScore` (integer, 可选) — 素材分数
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### content_put_social_template_cancel_tempid
- 摘要：取消任务
- `PUT /social/template/cancel/{tempId}` · 风险：write · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### content_put_social_template_update
- 摘要：修改模板库
- `PUT /social/template/update` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `templateLibraryId` (string, 可选) — 模板id
  - `templateName` (string, 可选) — 模板名称
  - `triggerTime` (string, 可选) — 触发时间
  - `assembles` (object [], 可选) — 模板组件集合
  - `key` (object, 可选)
  - `connections` (object [], 可选) — 模板连接
- 响应字段：`code`, `msg`, `data`, `id`, `licenseState`, `licenseExpireDate`

### content_put_social_text_library_cancel
- 摘要：取消执行(支持批量)
- `PUT /social/text-library/cancel` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `textIds` (string [], 可选) — 文本库主键
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### content_put_social_text_library_modify
- 摘要：启用或禁用文本库 (支持批量)
- `PUT /social/text-library/modify` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `textIds` (string [], 可选) — 文本库主键
  - `libState` (string, 可选)
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### content_put_social_text_library_start
- 摘要：立即执行
- `PUT /social/text-library/start` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `textIds` (string [], 可选) — 文本库主键
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

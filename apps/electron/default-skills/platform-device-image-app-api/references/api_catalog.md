# platform-device-image-app-api 接口目录

> 业务域：镜像与设备APP管理 · 来源：callfans-standard.md, mobile-cloud-center.md · 共 27 个操作
> 本文件是 catalog 的人工可读版；机器可读单一真源见 `api_catalog.json`。

## 登录
- `auth_post_login`  POST `/auth/login`  →  返回 `token`，执行器自动处理，无需手工传 token。

## 操作一览

| operation_id | 方法 | 路由 | 路径 | 摘要 | 风险 |
| --- | --- | --- | --- | --- | --- |
| `device-image-app_delete_image_remove_imagename` | DELETE | `/mcc` | `/image/remove/{imageName}` | 删除镜像 | destructive |
| `device-image-app_delete_mcc_api_image_remove_imagename` | DELETE | `/` | `/mcc/api/image/remove/{imageName}` | 删除镜像 | destructive |
| `device-image-app_get_app_page` | GET | `/mcc` | `/app/page` | 常用应用程序分页查询 | read |
| `device-image-app_get_app_record_page` | GET | `/mcc` | `/app/record/page` | 设备应用程序安装记录分页查询 | read |
| `device-image-app_get_image_detail_imgid` | GET | `/mcc` | `/image/detail/{imgId}` | 镜像详情信息 | read |
| `device-image-app_get_image_page` | GET | `/mcc` | `/image/page` | 镜像信息列表查询 | read |
| `device-image-app_get_mcc_api_app_page` | GET | `/` | `/mcc/api/app/page` | 常用应用程序分页查询 | read |
| `device-image-app_get_mcc_api_app_record_page` | GET | `/` | `/mcc/api/app/record/page` | 设备应用程序安装记录查询（实时，全部返回） | read |
| `device-image-app_get_mcc_api_app_upload_page` | GET | `/` | `/mcc/api/app/upload/page` | 应用程序分页查询 | read |
| `device-image-app_get_mcc_api_image_detail_imgid` | GET | `/` | `/mcc/api/image/detail/{imgId}` | 镜像详情信息 | read |
| `device-image-app_get_mcc_api_image_page` | GET | `/` | `/mcc/api/image/page` | 镜像信息列表查询 | read |
| `device-image-app_post_app_del` | POST | `/mcc` | `/app/del` | 删除应用程序包（常用APP及直接上传APP） | destructive |
| `device-image-app_post_app_install` | POST | `/mcc` | `/app/install` | 应用程序安装 | write |
| `device-image-app_post_app_set_often` | POST | `/mcc` | `/app/set/often` | 设置常用应用程序 | write |
| `device-image-app_post_app_unload` | POST | `/mcc` | `/app/unload` | 卸载应用程序 | write |
| `device-image-app_post_app_upload` | POST | `/mcc` | `/app/upload` | 安装包上传 | write |
| `device-image-app_post_image_del` | POST | `/mcc` | `/image/del` | 镜像信息删除 | destructive |
| `device-image-app_post_image_update` | POST | `/mcc` | `/image/update` | 镜像信息新增或编辑 | write |
| `device-image-app_post_image_uploadimages` | POST | `/mcc` | `/image/uploadImages` | 上传镜像 | write |
| `device-image-app_post_mcc_api_app_del` | POST | `/` | `/mcc/api/app/del` | 删除应用程序包（常用APP及直接上传APP） | destructive |
| `device-image-app_post_mcc_api_app_install` | POST | `/` | `/mcc/api/app/install` | 应用程序安装 | write |
| `device-image-app_post_mcc_api_app_set_often` | POST | `/` | `/mcc/api/app/set/often` | 设置常用应用程序 | write |
| `device-image-app_post_mcc_api_app_unload` | POST | `/` | `/mcc/api/app/unload` | 卸载应用程序 | write |
| `device-image-app_post_mcc_api_app_upload` | POST | `/` | `/mcc/api/app/upload` | 安装包上传 | write |
| `device-image-app_post_mcc_api_image_del` | POST | `/` | `/mcc/api/image/del` | 镜像信息删除 | destructive |
| `device-image-app_post_mcc_api_image_update` | POST | `/` | `/mcc/api/image/update` | 镜像信息新增或编辑 | write |
| `device-image-app_post_mcc_api_image_uploadimages` | POST | `/` | `/mcc/api/image/uploadImages` | 上传镜像 | write |

## 操作详情
### device-image-app_delete_image_remove_imagename
- 摘要：删除镜像
- `DELETE /mcc/image/remove/{imageName}` · 风险：destructive · 鉴权：required

### device-image-app_delete_mcc_api_image_remove_imagename
- 摘要：删除镜像
- `DELETE /mcc/api/image/remove/{imageName}` · 风险：destructive · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-image-app_get_app_page
- 摘要：常用应用程序分页查询
- `GET /mcc/app/page` · 风险：read · 鉴权：required

### device-image-app_get_app_record_page
- 摘要：设备应用程序安装记录分页查询
- `GET /mcc/app/record/page` · 风险：read · 鉴权：required

### device-image-app_get_image_detail_imgid
- 摘要：镜像详情信息
- `GET /mcc/image/detail/{imgId}` · 风险：read · 鉴权：required

### device-image-app_get_image_page
- 摘要：镜像信息列表查询
- `GET /mcc/image/page` · 风险：read · 鉴权：required

### device-image-app_get_mcc_api_app_page
- 摘要：常用应用程序分页查询
- `GET /mcc/api/app/page` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `records`, `createBy`, `createTime`, `updateBy`, `updateTime`, `remark`, `params`, `key`, `appId` …

### device-image-app_get_mcc_api_app_record_page
- 摘要：设备应用程序安装记录查询（实时，全部返回）
- `GET /mcc/api/app/record/page` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `records`, `createBy`, `createTime`, `updateBy`, `updateTime`, `remark`, `params`, `key`, `recordId` …

### device-image-app_get_mcc_api_app_upload_page
- 摘要：应用程序分页查询
- `GET /mcc/api/app/upload/page` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `records`, `createBy`, `createTime`, `updateBy`, `updateTime`, `remark`, `params`, `key`, `appId` …

### device-image-app_get_mcc_api_image_detail_imgid
- 摘要：镜像详情信息
- `GET /mcc/api/image/detail/{imgId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `createBy`, `createTime`, `updateBy`, `updateTime`, `remark`, `params`, `key`, `imgId`, `imgName` …

### device-image-app_get_mcc_api_image_page
- 摘要：镜像信息列表查询
- `GET /mcc/api/image/page` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `records`, `createBy`, `createTime`, `updateBy`, `updateTime`, `remark`, `params`, `key`, `imgId` …

### device-image-app_post_app_del
- 摘要：删除应用程序包（常用APP及直接上传APP）
- `POST /mcc/app/del` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `appIds` (string [], 可选) — 常用APP唯一标识集合
  - `filePathIds` (string [], 可选) — 直接上传APP资源标识集合
  - `appFileType` (string, 必填) — 资源类别（often:常用，direct:直接安装）

### device-image-app_post_app_install
- 摘要：应用程序安装
- `POST /mcc/app/install` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `appId` (string, 可选) — appId(安装常用应用赋值，直接安装时为空)
  - `deviceIds` (string [], 必填) — 设备ID集合
  - `filePathId` (string, 可选) — 安装资源路径ID(直接安装时赋值)

### device-image-app_post_app_set_often
- 摘要：设置常用应用程序
- `POST /mcc/app/set/often` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `filePathIds` (string [], 必填) — 软件包资源位置ID集合

### device-image-app_post_app_unload
- 摘要：卸载应用程序
- `POST /mcc/app/unload` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceIds` (string [], 必填) — 设备ID集合
  - `appName` (string, 可选) — 应用名称
  - `appId` (string, 可选) — 应用Id
  - `appFileType` (string, 可选) — 资源类别（often:常用，direct:直接安装）

### device-image-app_post_app_upload
- 摘要：安装包上传
- `POST /mcc/app/upload` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)

### device-image-app_post_image_del
- 摘要：镜像信息删除
- `POST /mcc/image/del` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `imgIds` (string [], 必填) — 镜像ID集合

### device-image-app_post_image_update
- 摘要：镜像信息新增或编辑
- `POST /mcc/image/update` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)

### device-image-app_post_image_uploadimages
- 摘要：上传镜像
- `POST /mcc/image/uploadImages` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)

### device-image-app_post_mcc_api_app_del
- 摘要：删除应用程序包（常用APP及直接上传APP）
- `POST /mcc/api/app/del` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `createBy` (string, 可选) — 创建者
  - `createTime` (string, 可选) — 创建时间
  - `updateBy` (string, 可选) — 更新者
  - `updateTime` (string, 可选) — 更新时间
  - `remark` (string, 可选) — 备注
  - `params` (object, 可选) — 请求参数
  - `key` (object, 可选)
  - `appIds` (string [], 可选) — 常用APP唯一标识集合
  - `filePathIds` (string [], 可选) — 直接上传APP资源标识集合
  - `appFileType` (string, 必填) — 资源类别（often:常用，direct:直接安装）
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-image-app_post_mcc_api_app_install
- 摘要：应用程序安装
- `POST /mcc/api/app/install` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `createBy` (string, 可选) — 创建者
  - `createTime` (string, 可选) — 创建时间
  - `updateBy` (string, 可选) — 更新者
  - `updateTime` (string, 可选) — 更新时间
  - `remark` (string, 可选) — 备注
  - `params` (object, 可选) — 请求参数
  - `key` (object, 可选)
  - `appId` (string, 可选) — appId(安装常用应用赋值，直接安装时为空)
  - `deviceIds` (string [], 必填) — 设备ID集合
  - `filePathId` (string, 可选) — 安装资源路径ID(直接安装时赋值)
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-image-app_post_mcc_api_app_set_often
- 摘要：设置常用应用程序
- `POST /mcc/api/app/set/often` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `createBy` (string, 可选) — 创建者
  - `createTime` (string, 可选) — 创建时间
  - `updateBy` (string, 可选) — 更新者
  - `updateTime` (string, 可选) — 更新时间
  - `remark` (string, 可选) — 备注
  - `params` (object, 可选) — 请求参数
  - `key` (object, 可选)
  - `filePathIds` (string [], 必填) — 软件包资源位置ID集合
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-image-app_post_mcc_api_app_unload
- 摘要：卸载应用程序
- `POST /mcc/api/app/unload` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `createBy` (string, 可选) — 创建者
  - `createTime` (string, 可选) — 创建时间
  - `updateBy` (string, 可选) — 更新者
  - `updateTime` (string, 可选) — 更新时间
  - `remark` (string, 可选) — 备注
  - `params` (object, 可选) — 请求参数
  - `key` (object, 可选)
  - `deviceIds` (string [], 必填) — 设备ID集合
  - `appName` (string, 可选) — 应用名称
  - `appId` (string, 可选) — 应用Id
  - `appFileType` (string, 可选) — 资源类别（often:常用，direct:直接安装）
  - `packageName` (string, 可选) — 应用包名（优先使用，传了 packageName 则不依赖 DB 安装记录表）
  - `recordId` (string, 可选) — 安装记录ID（实时列表中此字段存的是包名，兼容前端回传）
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-image-app_post_mcc_api_app_upload
- 摘要：安装包上传
- `POST /mcc/api/app/upload` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- 响应字段：`code`, `msg`, `data`, `createBy`, `createTime`, `updateBy`, `updateTime`, `remark`, `params`, `key`, `filePathId`, `appName` …

### device-image-app_post_mcc_api_image_del
- 摘要：镜像信息删除
- `POST /mcc/api/image/del` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `createBy` (string, 可选) — 创建者
  - `createTime` (string, 可选) — 创建时间
  - `updateBy` (string, 可选) — 更新者
  - `updateTime` (string, 可选) — 更新时间
  - `remark` (string, 可选) — 备注
  - `params` (object, 可选) — 请求参数
  - `key` (object, 可选)
  - `imgIds` (string [], 必填) — 镜像ID集合
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-image-app_post_mcc_api_image_update
- 摘要：镜像信息新增或编辑
- `POST /mcc/api/image/update` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-image-app_post_mcc_api_image_uploadimages
- 摘要：上传镜像
- `POST /mcc/api/image/uploadImages` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

# platform-cloudphone-api 接口目录

> 业务域：云手机相关 · 来源：callfans-standard.md · 共 20 个操作
> 本文件是 catalog 的人工可读版；机器可读单一真源见 `api_catalog.json`。

## 登录
- `auth_post_login`  POST `/auth/login`  →  返回 `token`，执行器自动处理，无需手工传 token。

## 操作一览

| operation_id | 方法 | 路由 | 路径 | 摘要 | 风险 |
| --- | --- | --- | --- | --- | --- |
| `cloudphone_get_social_device_applist_devicename` | GET | `/` | `/social/device/appList/{deviceName}` | 获取应用列表 | read |
| `cloudphone_get_social_device_detail_deviceid` | GET | `/` | `/social/device/detail/{deviceId}` | 获取设备详情 | read |
| `cloudphone_get_social_device_open_deviceid` | GET | `/` | `/social/device/open/{deviceId}` | 查看单个设备下是否在执行任务 | read |
| `cloudphone_get_social_device_page` | GET | `/` | `/social/device/page` | 社交媒体设备分页信息查询 | read |
| `cloudphone_get_social_device_risk_count` | GET | `/` | `/social/device/risk/count` | 查询风控设备数量 | read |
| `cloudphone_get_social_device_unused_get` | GET | `/` | `/social/device/unused/get` | 获取绑定设备 | read |
| `cloudphone_patch_social_device_update` | PATCH | `/` | `/social/device/update` | 社交媒体操作设备执行手机更多功能及开关机 | write |
| `cloudphone_post_social_device_clearspeed` | POST | `/` | `/social/device/clearSpeed` | 清理加速 | destructive |
| `cloudphone_post_social_device_goback` | POST | `/` | `/social/device/goBack` | 返回上一步 | write |
| `cloudphone_post_social_device_gohome` | POST | `/` | `/social/device/goHome` | 回到主页面 | write |
| `cloudphone_post_social_device_multitask` | POST | `/` | `/social/device/multitask` | 打开多任务窗口 | write |
| `cloudphone_post_social_device_openapp` | POST | `/` | `/social/device/openApp` | 打开应用 | write |
| `cloudphone_post_social_device_screencap` | POST | `/` | `/social/device/screenCap` | 截图到电脑（SCREENSHOT_TO_COMPUTER 操作） | write |
| `cloudphone_post_social_device_task_ai_log_push` | POST | `/` | `/social/device/task/ai_log/push` | RPA任务上传AI任务关联图片 | write |
| `cloudphone_post_social_device_task_callback` | POST | `/` | `/social/device/task/callback` | RPA 任务状态/结果回调（RPA 平台无 token，匿名访问，SecurityConfig + JwtFilter 双放行）。 | write |
| `cloudphone_post_social_device_task_doc_upload_rpataskid` | POST | `/` | `/social/device/task/doc/upload/{rpaTaskId}` | RPA任务上传任务关联文档 | write |
| `cloudphone_post_social_device_task_upload_rpataskid` | POST | `/` | `/social/device/task/upload/{rpaTaskId}` | RPA任务上传任务关联图片 | write |
| `cloudphone_post_social_device_upload` | POST | `/` | `/social/device/upload` | 社交媒体安装包上传 | write |
| `cloudphone_put_social_device_modify` | PUT | `/` | `/social/device/modify` | 更新设备信息 | write |
| `cloudphone_put_social_device_refresh` | PUT | `/` | `/social/device/refresh` | 刷新设备投屏 | write |

## 操作详情
### cloudphone_get_social_device_applist_devicename
- 摘要：获取应用列表
- `GET /social/device/appList/{deviceName}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `apkName`, `packageName`, `logo`, `activityName`, `licenseState`, `licenseExpireDate`

### cloudphone_get_social_device_detail_deviceid
- 摘要：获取设备详情
- `GET /social/device/detail/{deviceId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### cloudphone_get_social_device_open_deviceid
- 摘要：查看单个设备下是否在执行任务
- `GET /social/device/open/{deviceId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### cloudphone_get_social_device_page
- 摘要：社交媒体设备分页信息查询
- `GET /social/device/page` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### cloudphone_get_social_device_risk_count
- 摘要：查询风控设备数量
- `GET /social/device/risk/count` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### cloudphone_get_social_device_unused_get
- 摘要：获取绑定设备
- `GET /social/device/unused/get` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `records`, `orgId`, `appId`, `appType`, `appAccount`, `deviceId`, `deviceIdx`, `deviceNo`, `deviceState` …

### cloudphone_patch_social_device_update
- 摘要：社交媒体操作设备执行手机更多功能及开关机
- `PATCH /social/device/update` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceIds` (string [], 可选) — 设备ID集合
  - `operation` (string, 可选) — 操作标识 SHUTDOWN ("关机"), POWER_ON ("开机"), RESTART ("重启") VOLUME_UP ("音量+") VOLUME_DOWN ("音量-") ROTATE ("旋转") APK ("安装软件"), SCREENSHOT_TO_COMPUTER ("截图到电脑"), SCREENSHOT_TO_ALBUM ("截图到相册"), LOCATION ("位置信息"), RESOLUTION_RATIO ("分辨率") SCREEN_DENSITY ("画质")
  - `locationReqVo` (object, 可选) — 经纬度信息
  - `emu_location_alt` (number, 可选) — 海拔
  - `emu_location_lat` (number, 可选) — 纬度
  - `emu_location_lon` (number, 可选) — 经度
  - `ratioValue` (integer, 可选) — 分辨率 （ex：1-ex）
  - `filePathId` (integer, 可选) — 上传应用位置编号
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### cloudphone_post_social_device_clearspeed
- 摘要：清理加速
- `POST /social/device/clearSpeed` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceNames` (string [], 必填)
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### cloudphone_post_social_device_goback
- 摘要：返回上一步
- `POST /social/device/goBack` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceNames` (string [], 必填)
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### cloudphone_post_social_device_gohome
- 摘要：回到主页面
- `POST /social/device/goHome` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceNames` (string [], 必填)
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### cloudphone_post_social_device_multitask
- 摘要：打开多任务窗口
- `POST /social/device/multitask` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceNames` (string [], 必填)
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### cloudphone_post_social_device_openapp
- 摘要：打开应用
- `POST /social/device/openApp` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceNames` (string [], 必填)
  - `packageName` (string, 可选) — 包名
  - `activityName` (string, 可选) — 启动类名
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### cloudphone_post_social_device_screencap
- 摘要：截图到电脑（SCREENSHOT_TO_COMPUTER 操作）
- `POST /social/device/screenCap` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceIds` (string [], 可选) — 设备ID集合
  - `operation` (string, 可选) — 操作标识 SHUTDOWN ("关机"), POWER_ON ("开机"), RESTART ("重启") VOLUME_UP ("音量+") VOLUME_DOWN ("音量-") ROTATE ("旋转") APK ("安装软件"), SCREENSHOT_TO_COMPUTER ("截图到电脑"), SCREENSHOT_TO_ALBUM ("截图到相册"), LOCATION ("位置信息"), RESOLUTION_RATIO ("分辨率") SCREEN_DENSITY ("画质")
  - `locationReqVo` (object, 可选) — 经纬度信息
  - `emu_location_alt` (number, 可选) — 海拔
  - `emu_location_lat` (number, 可选) — 纬度
  - `emu_location_lon` (number, 可选) — 经度
  - `ratioValue` (integer, 可选) — 分辨率 （ex：1-ex）
  - `filePathId` (integer, 可选) — 上传应用位置编号

### cloudphone_post_social_device_task_ai_log_push
- 摘要：RPA任务上传AI任务关联图片
- `POST /social/device/task/ai_log/push` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### cloudphone_post_social_device_task_callback
- 摘要：RPA 任务状态/结果回调（RPA 平台无 token，匿名访问，SecurityConfig + JwtFilter 双放行）。
- `POST /social/device/task/callback` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `rpaJobId` (string, 可选) — RPA 作业ID（必填，用于关联社媒侧任务）
  - `state` (string, 可选) — RPA 主任务状态（可选，SUCCESSFUL/FAILED/CANCELED/TIMEOUT）。不传时由社媒侧轮询 RPA 确认终态。
  - `endTime` (integer, 可选) — 任务结束时间戳（可选，秒级或毫秒级均可，内部自动归一化为秒）。传入时优先作为任务结束时间落库，不传则由监听链路轮询 RPA 的 finishTime 获取。
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### cloudphone_post_social_device_task_doc_upload_rpataskid
- 摘要：RPA任务上传任务关联文档
- `POST /social/device/task/doc/upload/{rpaTaskId}` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### cloudphone_post_social_device_task_upload_rpataskid
- 摘要：RPA任务上传任务关联图片
- `POST /social/device/task/upload/{rpaTaskId}` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `files` (object [], 可选) — 文件信息
  - `file` (string, 可选) — 文件信息
  - `fileName` (string, 可选) — 文件名字
  - `fileOriginalName` (string, 可选) — minio文件名
  - `rpaJobId` (string, 可选) — rpa任务编号
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### cloudphone_post_social_device_upload
- 摘要：社交媒体安装包上传
- `POST /social/device/upload` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- 响应字段：`code`, `msg`, `data`, `filePathId`, `appIcon`, `licenseState`, `licenseExpireDate`

### cloudphone_put_social_device_modify
- 摘要：更新设备信息
- `PUT /social/device/modify` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceId` (string, 必填) — 设备编号
  - `deviceAliases` (string, 可选) — 设备别名
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### cloudphone_put_social_device_refresh
- 摘要：刷新设备投屏
- `PUT /social/device/refresh` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceIds` (string [], 必填) — 需检查投屏服务的设备ID集合
  - `isRestart` (boolean, 可选) — 是否强制刷新投屏服务，true强制停止后重启false 则检查服务是否启动，若服务未启动则执行
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

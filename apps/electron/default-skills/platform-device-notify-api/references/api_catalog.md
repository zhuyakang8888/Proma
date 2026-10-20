# platform-device-notify-api 接口目录

> 业务域：消息通知（云手机消息/通知公告/SMS/飞书） · 来源：callfans-standard.md, mobile-cloud-center.md · 共 38 个操作
> 本文件是 catalog 的人工可读版；机器可读单一真源见 `api_catalog.json`。

## 登录
- `auth_post_login`  POST `/auth/login`  →  返回 `token`，执行器自动处理，无需手工传 token。

## 操作一览

| operation_id | 方法 | 路由 | 路径 | 摘要 | 风险 |
| --- | --- | --- | --- | --- | --- |
| `device-notify_delete_mcc_api_notify_clear_all` | DELETE | `/` | `/mcc/api/notify/clear-all` | 一键清除：物理删除当前登录用户的全部通知消息（已读+未读）。 | destructive |
| `device-notify_delete_mcc_api_system_notice_delete` | DELETE | `/` | `/mcc/api/system/notice/delete` | 删除通知公告 | destructive |
| `device-notify_delete_system_notice_delete` | DELETE | `/mcc` | `/system/notice/delete` | deleteNotice | destructive |
| `device-notify_delete_system_notify_template_delete` | DELETE | `/mcc` | `/system/notify-template/delete` | deleteNotifyTemplate | destructive |
| `device-notify_get_mcc_api_notify_detail_notifyid` | GET | `/` | `/mcc/api/notify/detail/{notifyId}` | 获取某条消息详情 | read |
| `device-notify_get_mcc_api_notify_get` | GET | `/` | `/mcc/api/notify/get` | 获取系统消息通知信息 | read |
| `device-notify_get_mcc_api_system_notice_get` | GET | `/` | `/mcc/api/system/notice/get` | 查询通知公告详情 | read |
| `device-notify_get_mcc_api_system_notice_info_nodeid` | GET | `/` | `/mcc/api/system/notice/info/{nodeId}` | 获取实时节点系统运行信息 | read |
| `device-notify_get_mcc_api_system_notice_page` | GET | `/` | `/mcc/api/system/notice/page` | 分页查询通知公告 | read |
| `device-notify_get_notify_detail_notifyid` | GET | `/mcc` | `/notify/detail/{notifyId}` | 获取某条消息详情 | read |
| `device-notify_get_notify_get` | GET | `/mcc` | `/notify/get` | 获取系统消息通知信息 | read |
| `device-notify_get_social_sms_page` | GET | `/` | `/social/sms/page` | 获取当前用户未读消息（分页） | read |
| `device-notify_get_social_sms_read_smsid` | GET | `/` | `/social/sms/read/{smsId}` | 单条消息已读（标记为已读，若消息携带失败文件则一并下载） | read |
| `device-notify_get_system_notice_get` | GET | `/mcc` | `/system/notice/get` | getNotice | read |
| `device-notify_get_system_notice_info_nodeid` | GET | `/mcc` | `/system/notice/info/{nodeId}` | 获取实时节点系统运行信息 | read |
| `device-notify_get_system_notice_page` | GET | `/mcc` | `/system/notice/page` | getNoticePage | read |
| `device-notify_get_system_notify_message_get` | GET | `/mcc` | `/system/notify-message/get` | getNotifyMessage | read |
| `device-notify_get_system_notify_message_get_unread_count` | GET | `/mcc` | `/system/notify-message/get-unread-count` | getUnreadNotifyMessageCount | read |
| `device-notify_get_system_notify_message_get_unread_list` | GET | `/mcc` | `/system/notify-message/get-unread-list` | getUnreadNotifyMessageList | read |
| `device-notify_get_system_notify_message_my_page` | GET | `/mcc` | `/system/notify-message/my-page` | getMyMyNotifyMessagePage | read |
| `device-notify_get_system_notify_message_page` | GET | `/mcc` | `/system/notify-message/page` | getNotifyMessagePage | read |
| `device-notify_get_system_notify_template_get` | GET | `/mcc` | `/system/notify-template/get` | getNotifyTemplate | read |
| `device-notify_get_system_notify_template_page` | GET | `/mcc` | `/system/notify-template/page` | getNotifyTemplatePage | read |
| `device-notify_post_mcc_api_system_notice_create` | POST | `/` | `/mcc/api/system/notice/create` | 创建通知公告 | write |
| `device-notify_post_mcc_api_system_notice_push` | POST | `/` | `/mcc/api/system/notice/push` | 通过 WebSocket 推送公告给在线用户 | write |
| `device-notify_post_social_lark_send` | POST | `/` | `/social/lark/send` | 飞书机器人发送消息 | write |
| `device-notify_post_system_notice_create` | POST | `/mcc` | `/system/notice/create` | createNotice | write |
| `device-notify_post_system_notice_push` | POST | `/mcc` | `/system/notice/push` | push | write |
| `device-notify_post_system_notify_template_create` | POST | `/mcc` | `/system/notify-template/create` | createNotifyTemplate | write |
| `device-notify_post_system_notify_template_send_notify` | POST | `/mcc` | `/system/notify-template/send-notify` | sendNotify | write |
| `device-notify_put_mcc_api_notify_modify_notifyid` | PUT | `/` | `/mcc/api/notify/modify/{notifyId}` | 消息已读 | write |
| `device-notify_put_mcc_api_system_notice_update` | PUT | `/` | `/mcc/api/system/notice/update` | 更新通知公告 | write |
| `device-notify_put_notify_modify_notifyid` | PUT | `/mcc` | `/notify/modify/{notifyId}` | 消息已读 | write |
| `device-notify_put_social_sms_read_all` | PUT | `/` | `/social/sms/read/all` | 清除某用户下全部未读消息 | write |
| `device-notify_put_system_notice_update` | PUT | `/mcc` | `/system/notice/update` | updateNotice | write |
| `device-notify_put_system_notify_message_update_all_read` | PUT | `/mcc` | `/system/notify-message/update-all-read` | updateAllNotifyMessageRead | write |
| `device-notify_put_system_notify_message_update_read` | PUT | `/mcc` | `/system/notify-message/update-read` | updateNotifyMessageRead | write |
| `device-notify_put_system_notify_template_update` | PUT | `/mcc` | `/system/notify-template/update` | updateNotifyTemplate | write |

## 操作详情
### device-notify_delete_mcc_api_notify_clear_all
- 摘要：一键清除：物理删除当前登录用户的全部通知消息（已读+未读）。
- `DELETE /mcc/api/notify/clear-all` · 风险：destructive · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-notify_delete_mcc_api_system_notice_delete
- 摘要：删除通知公告
- `DELETE /mcc/api/system/notice/delete` · 风险：destructive · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-notify_delete_system_notice_delete
- 摘要：deleteNotice
- `DELETE /mcc/system/notice/delete` · 风险：destructive · 鉴权：required

### device-notify_delete_system_notify_template_delete
- 摘要：deleteNotifyTemplate
- `DELETE /mcc/system/notify-template/delete` · 风险：destructive · 鉴权：required

### device-notify_get_mcc_api_notify_detail_notifyid
- 摘要：获取某条消息详情
- `GET /mcc/api/notify/detail/{notifyId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `creatorId`, `createTime`, `updatorId`, `updateTime`, `deleted`, `version`, `deptId`, `params`, `key` …

### device-notify_get_mcc_api_notify_get
- 摘要：获取系统消息通知信息
- `GET /mcc/api/notify/get` · 风险：read · 鉴权：required
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
  - `onlyUnread` (boolean, 可选) — 是否获取全部，true：仅获取未读，false：获取全部
- 响应字段：`code`, `msg`, `data`, `createBy`, `createTime`, `updateBy`, `updateTime`, `remark`, `params`, `key`, `notifyId`, `author` …

### device-notify_get_mcc_api_system_notice_get
- 摘要：查询通知公告详情
- `GET /mcc/api/system/notice/get` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `id`, `title`, `type`, `content`, `status`, `createTime`, `licenseState`, `licenseExpireDate`

### device-notify_get_mcc_api_system_notice_info_nodeid
- 摘要：获取实时节点系统运行信息
- `GET /mcc/api/system/notice/info/{nodeId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `createBy`, `createTime`, `updateBy`, `updateTime`, `remark`, `params`, `key`, `nodeId`, `nodeIp` …

### device-notify_get_mcc_api_system_notice_page
- 摘要：分页查询通知公告
- `GET /mcc/api/system/notice/page` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `records`, `id`, `title`, `type`, `content`, `status`, `createTime`, `total`, `size` …

### device-notify_get_notify_detail_notifyid
- 摘要：获取某条消息详情
- `GET /mcc/notify/detail/{notifyId}` · 风险：read · 鉴权：required

### device-notify_get_notify_get
- 摘要：获取系统消息通知信息
- `GET /mcc/notify/get` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `onlyUnread` (boolean, 可选) — 是否获取全部，true：仅获取未读，false：获取全部

### device-notify_get_social_sms_page
- 摘要：获取当前用户未读消息（分页）
- `GET /social/sms/page` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-notify_get_social_sms_read_smsid
- 摘要：单条消息已读（标记为已读，若消息携带失败文件则一并下载）
- `GET /social/sms/read/{smsId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-notify_get_system_notice_get
- 摘要：getNotice
- `GET /mcc/system/notice/get` · 风险：read · 鉴权：required

### device-notify_get_system_notice_info_nodeid
- 摘要：获取实时节点系统运行信息
- `GET /mcc/system/notice/info/{nodeId}` · 风险：read · 鉴权：required

### device-notify_get_system_notice_page
- 摘要：getNoticePage
- `GET /mcc/system/notice/page` · 风险：read · 鉴权：required

### device-notify_get_system_notify_message_get
- 摘要：getNotifyMessage
- `GET /mcc/system/notify-message/get` · 风险：read · 鉴权：required

### device-notify_get_system_notify_message_get_unread_count
- 摘要：getUnreadNotifyMessageCount
- `GET /mcc/system/notify-message/get-unread-count` · 风险：read · 鉴权：required

### device-notify_get_system_notify_message_get_unread_list
- 摘要：getUnreadNotifyMessageList
- `GET /mcc/system/notify-message/get-unread-list` · 风险：read · 鉴权：required

### device-notify_get_system_notify_message_my_page
- 摘要：getMyMyNotifyMessagePage
- `GET /mcc/system/notify-message/my-page` · 风险：read · 鉴权：required

### device-notify_get_system_notify_message_page
- 摘要：getNotifyMessagePage
- `GET /mcc/system/notify-message/page` · 风险：read · 鉴权：required

### device-notify_get_system_notify_template_get
- 摘要：getNotifyTemplate
- `GET /mcc/system/notify-template/get` · 风险：read · 鉴权：required

### device-notify_get_system_notify_template_page
- 摘要：getNotifyTemplatePage
- `GET /mcc/system/notify-template/page` · 风险：read · 鉴权：required

### device-notify_post_mcc_api_system_notice_create
- 摘要：创建通知公告
- `POST /mcc/api/system/notice/create` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `id` (integer, 可选) — 岗位公告编号
  - `title` (string, 必填) — 公告标题
  - `type` (integer, 必填) — 公告类型
  - `content` (string, 可选) — 公告内容
  - `status` (integer, 可选) — 状态，参见 CommonStatusEnum 枚举类
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-notify_post_mcc_api_system_notice_push
- 摘要：通过 WebSocket 推送公告给在线用户
- `POST /mcc/api/system/notice/push` · 风险：write · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-notify_post_social_lark_send
- 摘要：飞书机器人发送消息
- `POST /social/lark/send` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `title` (string, 可选) — 消息标题
  - `content` (string, 可选) — 消息内容
  - `userId` (string, 可选) — 消息接收人 all代表所有人
  - `prompt` (string, 可选) — 提示语
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-notify_post_system_notice_create
- 摘要：createNotice
- `POST /mcc/system/notice/create` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `id` (integer, 可选) — 岗位公告编号
  - `title` (string, 必填) — 公告标题
  - `type` (integer, 必填) — 公告类型
  - `content` (string, 可选) — 公告内容
  - `status` (integer, 可选) — 状态，参见 CommonStatusEnum 枚举类

### device-notify_post_system_notice_push
- 摘要：push
- `POST /mcc/system/notice/push` · 风险：write · 鉴权：required

### device-notify_post_system_notify_template_create
- 摘要：createNotifyTemplate
- `POST /mcc/system/notify-template/create` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `id` (integer, 可选)
  - `name` (string, 必填)
  - `code` (string, 必填)
  - `type` (integer, 必填)
  - `nickname` (string, 必填)
  - `content` (string, 必填)
  - `status` (integer, 必填)
  - `remark` (string, 可选)

### device-notify_post_system_notify_template_send_notify
- 摘要：sendNotify
- `POST /mcc/system/notify-template/send-notify` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `userId` (integer, 必填)
  - `userType` (integer, 必填)
  - `templateCode` (string, 必填)
  - `templateParams` (object, 可选)
  - `key` (object, 可选)

### device-notify_put_mcc_api_notify_modify_notifyid
- 摘要：消息已读
- `PUT /mcc/api/notify/modify/{notifyId}` · 风险：write · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-notify_put_mcc_api_system_notice_update
- 摘要：更新通知公告
- `PUT /mcc/api/system/notice/update` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `id` (integer, 可选) — 岗位公告编号
  - `title` (string, 必填) — 公告标题
  - `type` (integer, 必填) — 公告类型
  - `content` (string, 可选) — 公告内容
  - `status` (integer, 可选) — 状态，参见 CommonStatusEnum 枚举类
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-notify_put_notify_modify_notifyid
- 摘要：消息已读
- `PUT /mcc/notify/modify/{notifyId}` · 风险：write · 鉴权：required

### device-notify_put_social_sms_read_all
- 摘要：清除某用户下全部未读消息
- `PUT /social/sms/read/all` · 风险：write · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-notify_put_system_notice_update
- 摘要：updateNotice
- `PUT /mcc/system/notice/update` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `id` (integer, 可选) — 岗位公告编号
  - `title` (string, 必填) — 公告标题
  - `type` (integer, 必填) — 公告类型
  - `content` (string, 可选) — 公告内容
  - `status` (integer, 可选) — 状态，参见 CommonStatusEnum 枚举类

### device-notify_put_system_notify_message_update_all_read
- 摘要：updateAllNotifyMessageRead
- `PUT /mcc/system/notify-message/update-all-read` · 风险：write · 鉴权：required

### device-notify_put_system_notify_message_update_read
- 摘要：updateNotifyMessageRead
- `PUT /mcc/system/notify-message/update-read` · 风险：write · 鉴权：required

### device-notify_put_system_notify_template_update
- 摘要：updateNotifyTemplate
- `PUT /mcc/system/notify-template/update` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `id` (integer, 可选)
  - `name` (string, 必填)
  - `code` (string, 必填)
  - `type` (integer, 必填)
  - `nickname` (string, 必填)
  - `content` (string, 必填)
  - `status` (integer, 必填)
  - `remark` (string, 可选)

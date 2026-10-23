# platform-device-server-api 接口目录

> 业务域：服务器/存储/节点（ARM、磁盘挂载） · 来源：callfans-standard.md, mobile-cloud-center.md · 共 55 个操作
> 本文件是 catalog 的人工可读版；机器可读单一真源见 `api_catalog.json`。

## 登录
- `auth_post_login`  POST `/auth/login`  →  返回 `token`，执行器自动处理，无需手工传 token。

## 操作一览

| operation_id | 方法 | 路由 | 路径 | 摘要 | 风险 |
| --- | --- | --- | --- | --- | --- |
| `device-server_delete_arm_del_armid` | DELETE | `/mcc` | `/arm/del/{armId}` | 删除服务器信息 | destructive |
| `device-server_delete_mcc_api_arm_del_armid` | DELETE | `/` | `/mcc/api/arm/del/{armId}` | 删除服务器信息 | destructive |
| `device-server_delete_mcc_api_mount_diskid` | DELETE | `/` | `/mcc/api/mount/{diskId}` | 删除外部磁盘信息 | destructive |
| `device-server_delete_mcc_api_mount_remove` | DELETE | `/` | `/mcc/api/mount/remove` | 移除外部磁盘信息 | destructive |
| `device-server_delete_mount_diskid` | DELETE | `/mcc` | `/mount/{diskId}` | 删除外部磁盘信息 | destructive |
| `device-server_delete_mount_remove` | DELETE | `/mcc` | `/mount/remove` | 移除外部磁盘信息 | destructive |
| `device-server_get_arm_config_ip` | GET | `/mcc` | `/arm/config/{ip}` | 获取服务器配置信息 | read |
| `device-server_get_arm_download_temp` | GET | `/mcc` | `/arm/download/temp` | 下载服务器导出模板 | read |
| `device-server_get_arm_get` | GET | `/mcc` | `/arm/get` | 获取armIP列表 | read |
| `device-server_get_arm_get_armid` | GET | `/mcc` | `/arm/get/{armId}` | ARM服务器详情查询 | read |
| `device-server_get_arm_page` | GET | `/mcc` | `/arm/page` | 服务器分页查询 | read |
| `device-server_get_mcc_api_arm_config_ip` | GET | `/` | `/mcc/api/arm/config/{ip}` | 获取服务器配置信息 | read |
| `device-server_get_mcc_api_arm_download_temp` | GET | `/` | `/mcc/api/arm/download/temp` | 下载服务器导出模板 | read |
| `device-server_get_mcc_api_arm_get` | GET | `/` | `/mcc/api/arm/get` | 获取armIP列表 | read |
| `device-server_get_mcc_api_arm_get_armid` | GET | `/` | `/mcc/api/arm/get/{armId}` | ARM服务器详情查询 | read |
| `device-server_get_mcc_api_arm_page` | GET | `/` | `/mcc/api/arm/page` | 服务器分页查询 | read |
| `device-server_get_mcc_api_mount_detail_diskid` | GET | `/` | `/mcc/api/mount/detail/{diskId}` | 获取磁盘详情 | read |
| `device-server_get_mcc_api_mount_list_nodeid` | GET | `/` | `/mcc/api/mount/list/{nodeId}` | 获取可用外部磁盘列表 | read |
| `device-server_get_mcc_api_node_chip_type_get` | GET | `/` | `/mcc/api/node/chip_type/get` | 获取支持的芯片列表 | read |
| `device-server_get_mcc_api_node_download_temp` | GET | `/` | `/mcc/api/node/download/temp` | 下载节点导出模板 | read |
| `device-server_get_mcc_api_node_get_armid` | GET | `/` | `/mcc/api/node/get/{armId}` | 获取armIP列表 | read |
| `device-server_get_mcc_api_node_page` | GET | `/` | `/mcc/api/node/page` | 节点信息列表查询 | read |
| `device-server_get_mcc_api_operator_list` | GET | `/` | `/mcc/api/operator/list` | 获取运营商列表 | read |
| `device-server_get_mount_detail_diskid` | GET | `/mcc` | `/mount/detail/{diskId}` | 获取磁盘详情 | read |
| `device-server_get_mount_list_nodeid` | GET | `/mcc` | `/mount/list/{nodeId}` | 获取可用外部磁盘列表 | read |
| `device-server_get_node_chip_type_get` | GET | `/mcc` | `/node/chip_type/get` | 获取支持的芯片列表 | read |
| `device-server_get_node_download_temp` | GET | `/mcc` | `/node/download/temp` | 下载节点导出模板 | read |
| `device-server_get_node_get_armid` | GET | `/mcc` | `/node/get/{armId}` | 获取armIP列表 | read |
| `device-server_get_node_page` | GET | `/mcc` | `/node/page` | 节点信息列表查询 | read |
| `device-server_get_operator_list` | GET | `/mcc` | `/operator/list` | 获取运营商列表 | read |
| `device-server_post_arm_update` | POST | `/mcc` | `/arm/update` | ARM服务器更新接口 | write |
| `device-server_post_arm_upload` | POST | `/mcc` | `/arm/upload` | 服务器模板导入 | write |
| `device-server_post_mcc_api_arm_update` | POST | `/` | `/mcc/api/arm/update` | ARM服务器更新接口 | write |
| `device-server_post_mcc_api_arm_upload` | POST | `/` | `/mcc/api/arm/upload` | 服务器模板导入 | write |
| `device-server_post_mcc_api_mount_update` | POST | `/` | `/mcc/api/mount/update` | 新增或编辑磁盘信息 | write |
| `device-server_post_mcc_api_node_reload` | POST | `/` | `/mcc/api/node/reload` | 重新加载获取某节点下设备信息 | read |
| `device-server_post_mcc_api_node_update` | POST | `/` | `/mcc/api/node/update` | 服务器节点操作 | write |
| `device-server_post_mcc_api_node_upload` | POST | `/` | `/mcc/api/node/upload` | 节点及设备信息模板导入 | write |
| `device-server_post_mount_update` | POST | `/mcc` | `/mount/update` | 新增或编辑磁盘信息 | write |
| `device-server_post_node_reload` | POST | `/mcc` | `/node/reload` | 重新加载获取某节点下设备信息 | read |
| `device-server_post_node_update` | POST | `/mcc` | `/node/update` | 服务器节点操作 | write |
| `device-server_post_node_upload` | POST | `/mcc` | `/node/upload` | 节点及设备信息模板导入 | write |
| `device-server_put_mcc_api_arm_board` | PUT | `/` | `/mcc/api/arm/board` | 修改Board映射集合 | write |
| `device-server_put_mcc_api_mount_backup` | PUT | `/` | `/mcc/api/mount/backup` | 备份节点数据 | write |
| `device-server_put_mcc_api_mount_check` | PUT | `/` | `/mcc/api/mount/check` | 外部磁盘健康检查 | read |
| `device-server_put_mcc_api_mount_doing` | PUT | `/` | `/mcc/api/mount/doing` | 磁盘挂载 | write |
| `device-server_put_mcc_api_mount_install_diskid` | PUT | `/` | `/mcc/api/mount/install/{diskId}` | 安装 nftserver 插件 | write |
| `device-server_put_mcc_api_node_admin_push_armid` | PUT | `/` | `/mcc/api/node/admin/push/{armId}` | 管理人员使用，推送端口python环境 | write |
| `device-server_put_mcc_api_node_admin_restart_armid` | PUT | `/` | `/mcc/api/node/admin/restart/{armId}` | 重启节点端口代理服务 | write |
| `device-server_put_mount_backup` | PUT | `/mcc` | `/mount/backup` | 备份 | write |
| `device-server_put_mount_check` | PUT | `/mcc` | `/mount/check` | 外部磁盘检查 | read |
| `device-server_put_mount_doing` | PUT | `/mcc` | `/mount/doing` | 挂载 | write |
| `device-server_put_mount_install_diskid` | PUT | `/mcc` | `/mount/install/{diskId}` | 安装nfserver插件 | write |
| `device-server_put_node_admin_push_armid` | PUT | `/mcc` | `/node/admin/push/{armId}` | 管理人员使用，推送端口python环境 | write |
| `device-server_put_node_admin_restart_armid` | PUT | `/mcc` | `/node/admin/restart/{armId}` | 重启节点端口代理服务 | write |

## 操作详情
### device-server_delete_arm_del_armid
- 摘要：删除服务器信息
- `DELETE /mcc/arm/del/{armId}` · 风险：destructive · 鉴权：required
- 响应字段：`code`, `data`, `msg`, `timestamp`, `licenseState`, `licenseExpireDate`

### device-server_delete_mcc_api_arm_del_armid
- 摘要：删除服务器信息
- `DELETE /mcc/api/arm/del/{armId}` · 风险：destructive · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-server_delete_mcc_api_mount_diskid
- 摘要：删除外部磁盘信息
- `DELETE /mcc/api/mount/{diskId}` · 风险：destructive · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-server_delete_mcc_api_mount_remove
- 摘要：移除外部磁盘信息
- `DELETE /mcc/api/mount/remove` · 风险：destructive · 鉴权：required
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
  - `nodeId` (string, 必填) — 节点编号
  - `diskId` (string, 可选) — 磁盘编号
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-server_delete_mount_diskid
- 摘要：删除外部磁盘信息
- `DELETE /mcc/mount/{diskId}` · 风险：destructive · 鉴权：required

### device-server_delete_mount_remove
- 摘要：移除外部磁盘信息
- `DELETE /mcc/mount/remove` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `nodeId` (string, 必填) — 节点编号
  - `diskId` (string, 可选) — 磁盘编号

### device-server_get_arm_config_ip
- 摘要：获取服务器配置信息
- `GET /mcc/arm/config/{ip}` · 风险：read · 鉴权：required
- 响应字段：`code`, `data`, `msg`, `timestamp`, `licenseState`, `licenseExpireDate`

### device-server_get_arm_download_temp
- 摘要：下载服务器导出模板
- `GET /mcc/arm/download/temp` · 风险：read · 鉴权：required

### device-server_get_arm_get
- 摘要：获取armIP列表
- `GET /mcc/arm/get` · 风险：read · 鉴权：required
- 响应字段：`code`, `data`, `armId`, `armIp`, `armName`, `msg`, `timestamp`, `licenseState`, `licenseExpireDate`

### device-server_get_arm_get_armid
- 摘要：ARM服务器详情查询
- `GET /mcc/arm/get/{armId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `data`, `armId`, `armName`, `configInfo`, `manufacturer`, `machineRoom`, `manager`, `chipCode`, `description`, `address`, `nodeIpSegment` …

### device-server_get_arm_page
- 摘要：服务器分页查询
- `GET /mcc/arm/page` · 风险：read · 鉴权：required
- 响应字段：`code`, `data`, `armId`, `armName`, `armState`, `deviceNum`, `configInfo`, `manufacturer`, `machineRoom`, `manager`, `description`, `address` …

### device-server_get_mcc_api_arm_config_ip
- 摘要：获取服务器配置信息
- `GET /mcc/api/arm/config/{ip}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-server_get_mcc_api_arm_download_temp
- 摘要：下载服务器导出模板
- `GET /mcc/api/arm/download/temp` · 风险：read · 鉴权：required

### device-server_get_mcc_api_arm_get
- 摘要：获取armIP列表
- `GET /mcc/api/arm/get` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `createBy`, `createTime`, `updateBy`, `updateTime`, `remark`, `params`, `key`, `armId`, `armIp` …

### device-server_get_mcc_api_arm_get_armid
- 摘要：ARM服务器详情查询
- `GET /mcc/api/arm/get/{armId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `createBy`, `createTime`, `updateBy`, `updateTime`, `remark`, `params`, `key`, `armId`, `armName` …

### device-server_get_mcc_api_arm_page
- 摘要：服务器分页查询
- `GET /mcc/api/arm/page` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `records`, `createBy`, `createTime`, `updateBy`, `updateTime`, `remark`, `params`, `key`, `armId` …

### device-server_get_mcc_api_mount_detail_diskid
- 摘要：获取磁盘详情
- `GET /mcc/api/mount/detail/{diskId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `createBy`, `createTime`, `updateBy`, `updateTime`, `remark`, `params`, `key`, `diskId`, `diskIp` …

### device-server_get_mcc_api_mount_list_nodeid
- 摘要：获取可用外部磁盘列表
- `GET /mcc/api/mount/list/{nodeId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `createBy`, `createTime`, `updateBy`, `updateTime`, `remark`, `params`, `key`, `diskId`, `diskName` …

### device-server_get_mcc_api_node_chip_type_get
- 摘要：获取支持的芯片列表
- `GET /mcc/api/node/chip_type/get` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `key`, `licenseState`, `licenseExpireDate`

### device-server_get_mcc_api_node_download_temp
- 摘要：下载节点导出模板
- `GET /mcc/api/node/download/temp` · 风险：read · 鉴权：required

### device-server_get_mcc_api_node_get_armid
- 摘要：获取armIP列表
- `GET /mcc/api/node/get/{armId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `createBy`, `createTime`, `updateBy`, `updateTime`, `remark`, `params`, `key`, `nodeInfos`, `createBy` …

### device-server_get_mcc_api_node_page
- 摘要：节点信息列表查询
- `GET /mcc/api/node/page` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `records`, `createBy`, `createTime`, `updateBy`, `updateTime`, `remark`, `params`, `key`, `nodeId` …

### device-server_get_mcc_api_operator_list
- 摘要：获取运营商列表
- `GET /mcc/api/operator/list` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `createBy`, `createTime`, `updateBy`, `updateTime`, `remark`, `params`, `key`, `id`, `operatorZhName` …

### device-server_get_mount_detail_diskid
- 摘要：获取磁盘详情
- `GET /mcc/mount/detail/{diskId}` · 风险：read · 鉴权：required

### device-server_get_mount_list_nodeid
- 摘要：获取可用外部磁盘列表
- `GET /mcc/mount/list/{nodeId}` · 风险：read · 鉴权：required

### device-server_get_node_chip_type_get
- 摘要：获取支持的芯片列表
- `GET /mcc/node/chip_type/get` · 风险：read · 鉴权：required

### device-server_get_node_download_temp
- 摘要：下载节点导出模板
- `GET /mcc/node/download/temp` · 风险：read · 鉴权：required

### device-server_get_node_get_armid
- 摘要：获取armIP列表
- `GET /mcc/node/get/{armId}` · 风险：read · 鉴权：required

### device-server_get_node_page
- 摘要：节点信息列表查询
- `GET /mcc/node/page` · 风险：read · 鉴权：required

### device-server_get_operator_list
- 摘要：获取运营商列表
- `GET /mcc/operator/list` · 风险：read · 鉴权：required

### device-server_post_arm_update
- 摘要：ARM服务器更新接口
- `POST /mcc/arm/update` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `armId` (string, 可选) — 服务器编号
  - `armName` (string, 可选) — 服务器名称
  - `configInfo` (string, 可选) — 配置信息
  - `machineRoom` (string, 可选) — 所属机房
  - `nodeIpSegment` (string, 可选) — 节点IP段
  - `containerIpSegment` (string, 可选) — 容器IP段
  - `manufacturer` (string, 可选) — 厂商
  - `manager` (string, 可选) — 管理人员
  - `description` (string, 可选) — 描述
  - `address` (string, 可选) — 地址
  - `chipCode` (string, 必填) — 芯片类型,ARM_3588/ARM_3399
  - `armPort` (string, 可选) — arm服务器端口（默认80）
  - `nodeUser` (string, 可选) — 服务器节点用户（空值取默认）
  - `nodePasswd` (string, 可选) — 服务器节点密码（空值取默认）
  - `armArea` (string, 可选) — 地区
- 响应字段：`code`, `data`, `msg`, `timestamp`, `licenseState`, `licenseExpireDate`

### device-server_post_arm_upload
- 摘要：服务器模板导入
- `POST /mcc/arm/upload` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- 响应字段：`code`, `data`, `msg`, `timestamp`, `licenseState`, `licenseExpireDate`

### device-server_post_mcc_api_arm_update
- 摘要：ARM服务器更新接口
- `POST /mcc/api/arm/update` · 风险：write · 鉴权：required
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
  - `armId` (string, 可选) — 服务器编号
  - `armName` (string, 可选) — 服务器名称
  - `configInfo` (string, 可选) — 配置信息
  - `machineRoom` (string, 可选) — 所属机房
  - `nodeIpSegment` (string, 可选) — 节点IP段
  - `containerIpSegment` (string, 可选) — 容器IP段
  - `manufacturer` (string, 可选) — 厂商
  - `manager` (string, 可选) — 管理人员
  - `description` (string, 可选) — 描述
  - `address` (string, 可选) — 地址
  - `chipCode` (string, 必填) — 芯片类型,ARM_3588/ARM_3399
  - `armPort` (string, 可选) — arm服务器端口（默认80）
  - `nodeUser` (string, 可选) — 服务器节点用户（空值取默认）
  - `nodePasswd` (string, 可选) — 服务器节点密码（空值取默认）
  - `armArea` (string, 可选) — 区域
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-server_post_mcc_api_arm_upload
- 摘要：服务器模板导入
- `POST /mcc/api/arm/upload` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-server_post_mcc_api_mount_update
- 摘要：新增或编辑磁盘信息
- `POST /mcc/api/mount/update` · 风险：write · 鉴权：required
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
  - `diskId` (string, 可选) — 磁盘编号
  - `nodeId` (string, 可选) — @NotNull(message = "节点编号不可为空")
  - `diskIp` (string, 必填) — 磁盘地址
  - `diskName` (string, 必填) — 磁盘名称
  - `diskUserName` (string, 必填) — 用户名
  - `diskPawd` (string, 必填) — 密码
  - `mountDirectory` (string, 必填) — 挂载目录
- 响应字段：`code`, `msg`, `data`, `createBy`, `createTime`, `updateBy`, `updateTime`, `remark`, `params`, `key`, `diskId`, `licenseState` …

### device-server_post_mcc_api_node_reload
- 摘要：重新加载获取某节点下设备信息
- `POST /mcc/api/node/reload` · 风险：read · 鉴权：required
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
  - `armId` (string, 可选) — 服务器地址信息，可空
  - `nodeIds` (string [], 必填) — 节点地址不可为空
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-server_post_mcc_api_node_update
- 摘要：服务器节点操作
- `POST /mcc/api/node/update` · 风险：write · 鉴权：required
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
  - `nodeIds` (string [], 可选) — 节点编号集合
  - `operation` (string, 可选) — 操作指令，SHUTDOWN:关机/POWER_ON:开机/RESTART:重启
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-server_post_mcc_api_node_upload
- 摘要：节点及设备信息模板导入
- `POST /mcc/api/node/upload` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-server_post_mount_update
- 摘要：新增或编辑磁盘信息
- `POST /mcc/mount/update` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `diskId` (string, 可选) — 磁盘编号
  - `nodeId` (string, 可选) — @NotNull(message = "节点编号不可为空")
  - `diskIp` (string, 必填) — 磁盘地址
  - `diskName` (string, 必填) — 磁盘名称
  - `diskUserName` (string, 必填) — 用户名
  - `diskPawd` (string, 必填) — 密码
  - `mountDirectory` (string, 必填) — 挂载目录

### device-server_post_node_reload
- 摘要：重新加载获取某节点下设备信息
- `POST /mcc/node/reload` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `armId` (string, 可选) — 服务器地址信息，可空
  - `nodeIds` (string [], 必填) — 节点地址不可为空

### device-server_post_node_update
- 摘要：服务器节点操作
- `POST /mcc/node/update` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `nodeIds` (string [], 可选) — 节点编号集合
  - `operation` (string, 可选) — 操作指令，SHUTDOWN:关机/POWER_ON:开机/RESTART:重启

### device-server_post_node_upload
- 摘要：节点及设备信息模板导入
- `POST /mcc/node/upload` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)

### device-server_put_mcc_api_arm_board
- 摘要：修改Board映射集合
- `PUT /mcc/api/arm/board` · 风险：write · 鉴权：required
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
  - `armIds` (string [], 可选) — 服务器编号集合
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-server_put_mcc_api_mount_backup
- 摘要：备份节点数据
- `PUT /mcc/api/mount/backup` · 风险：write · 鉴权：required
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
  - `diskId` (string, 必填) — 磁盘编号
  - `nodeId` (string, 必填) — 节点编号
  - `mountDir` (string, 可选) — 目录当备份方式为内部备份时不可为空
  - `backupType` (string, 必填) — 备份方式
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-server_put_mcc_api_mount_check
- 摘要：外部磁盘健康检查
- `PUT /mcc/api/mount/check` · 风险：read · 鉴权：required
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
  - `diskId` (string, 可选) — 磁盘编号
  - `nodeId` (string, 可选) — @NotNull(message = "节点编号不可为空")
  - `diskIp` (string, 必填) — 磁盘地址
  - `diskName` (string, 必填) — 磁盘名称
  - `diskUserName` (string, 必填) — 用户名
  - `diskPawd` (string, 必填) — 密码
  - `mountDirectory` (string, 必填) — 挂载目录
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-server_put_mcc_api_mount_doing
- 摘要：磁盘挂载
- `PUT /mcc/api/mount/doing` · 风险：write · 鉴权：required
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
  - `diskId` (string, 必填) — 磁盘编号
  - `nodeId` (string, 必填) — 节点编号
  - `mountDir` (string, 可选) — 节点挂载目录
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-server_put_mcc_api_mount_install_diskid
- 摘要：安装 nftserver 插件
- `PUT /mcc/api/mount/install/{diskId}` · 风险：write · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-server_put_mcc_api_node_admin_push_armid
- 摘要：管理人员使用，推送端口python环境
- `PUT /mcc/api/node/admin/push/{armId}` · 风险：write · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-server_put_mcc_api_node_admin_restart_armid
- 摘要：重启节点端口代理服务
- `PUT /mcc/api/node/admin/restart/{armId}` · 风险：write · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-server_put_mount_backup
- 摘要：备份
- `PUT /mcc/mount/backup` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `diskId` (string, 必填) — 磁盘编号
  - `nodeId` (string, 必填) — 节点编号
  - `mountDir` (string, 可选) — 目录当备份方式为内部备份时不可为空
  - `backupType` (string, 必填) — 备份方式

### device-server_put_mount_check
- 摘要：外部磁盘检查
- `PUT /mcc/mount/check` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `diskId` (string, 可选) — 磁盘编号
  - `nodeId` (string, 可选) — @NotNull(message = "节点编号不可为空")
  - `diskIp` (string, 必填) — 磁盘地址
  - `diskName` (string, 必填) — 磁盘名称
  - `diskUserName` (string, 必填) — 用户名
  - `diskPawd` (string, 必填) — 密码
  - `mountDirectory` (string, 必填) — 挂载目录

### device-server_put_mount_doing
- 摘要：挂载
- `PUT /mcc/mount/doing` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `diskId` (string, 必填) — 磁盘编号
  - `nodeId` (string, 必填) — 节点编号
  - `mountDir` (string, 可选) — 节点挂载目录

### device-server_put_mount_install_diskid
- 摘要：安装nfserver插件
- `PUT /mcc/mount/install/{diskId}` · 风险：write · 鉴权：required

### device-server_put_node_admin_push_armid
- 摘要：管理人员使用，推送端口python环境
- `PUT /mcc/node/admin/push/{armId}` · 风险：write · 鉴权：required

### device-server_put_node_admin_restart_armid
- 摘要：重启节点端口代理服务
- `PUT /mcc/node/admin/restart/{armId}` · 风险：write · 鉴权：required

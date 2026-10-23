# platform-device-network-api 接口目录

> 业务域：设备与网络资产 · 来源：callfans-standard.md, mobile-cloud-center.md, callfans-platform.md · 共 104 个操作
> 本文件是 catalog 的人工可读版；机器可读单一真源见 `api_catalog.json`。

## 登录
- `auth_post_login`  POST `/auth/login`  →  返回 `token`，执行器自动处理，无需手工传 token。

## 操作一览

| operation_id | 方法 | 路由 | 路径 | 摘要 | 风险 |
| --- | --- | --- | --- | --- | --- |
| `device-network_delete_device_del` | DELETE | `/mcc` | `/device/del` | 删除设备信息 | destructive |
| `device-network_delete_device_org_del` | DELETE | `/mcc` | `/device/org/del` | 设备用户关联关系-删除 | destructive |
| `device-network_delete_mcc_api_device_del` | DELETE | `/` | `/mcc/api/device/del` | 删除设备信息 | destructive |
| `device-network_delete_mcc_api_device_org_del` | DELETE | `/` | `/mcc/api/device/org/del` | 设备用户关联关系-删除 | destructive |
| `device-network_delete_social_mobile_network_cancel_dedicated_line` | DELETE | `/` | `/social/mobile-network/cancel/dedicated-line` | 取消网络配置 | destructive |
| `device-network_delete_social_mobile_network_delete` | DELETE | `/` | `/social/mobile-network/delete` | 删除网络配置 | destructive |
| `device-network_delete_social_mobile_network_delete_bind_data` | DELETE | `/` | `/social/mobile-network/delete-bind-data` | 物理删除网络绑定的数据 | destructive |
| `device-network_get_device_brand_future_get` | GET | `/mcc` | `/device/brand/future/get` | 获取云巅未来手机品牌列表 | read |
| `device-network_get_device_brand_get` | GET | `/mcc` | `/device/brand/get` | 获取手机品牌列表 | read |
| `device-network_get_device_conn_deviceid` | GET | `/mcc` | `/device/conn/{deviceId}` | 测试是否设备是否可以建立链接 | read |
| `device-network_get_device_detail_deviceid` | GET | `/mcc` | `/device/detail/{deviceId}` | 设备信息详情查询 | read |
| `device-network_get_device_fold_floor_page` | GET | `/platform` | `/device/fold/floor/page` | 折叠二层查询 | read |
| `device-network_get_device_fold_page` | GET | `/platform` | `/device/fold/page` | 折叠查询（一级） | read |
| `device-network_get_device_org_userid` | GET | `/mcc` | `/device/org/{userId}` | 设备用户关联关系-查询 | read |
| `device-network_get_device_page` | GET | `/mcc` | `/device/page` | 设备信息分页查询 | read |
| `device-network_get_device_page_2` | GET | `/platform` | `/device/page` | 移动设备分页查询 | read |
| `device-network_get_device_page_allocation` | GET | `/mcc` | `/device/page/allocation` | 待分配设备信息分页查询 | read |
| `device-network_get_device_page_ex` | GET | `/mcc` | `/device/page/ex` | 获取设备信息（拓展） | read |
| `device-network_get_device_server_list` | GET | `/platform` | `/device/server/list/` | 获取服务器列表信息 | read |
| `device-network_get_device_sync` | GET | `/mcc` | `/device/sync` | 同步当前设备 | read |
| `device-network_get_device_uitree_xml_ip_port` | GET | `/mcc` | `/device/uitree/xml/{ip}/{port}` | 获取设备uiTree.xml信息，文件流返回 | read |
| `device-network_get_device_uitree_xml_json_ip_port` | GET | `/mcc` | `/device/uitree/xml_json/{ip}/{port}` | 获取设备uiTree.xml信息，json返回 | read |
| `device-network_get_device_uitree_xml_str_ip_port` | GET | `/mcc` | `/device/uitree/xml_str/{ip}/{port}` | 获取设备uiTree.xml信息，字符串返回 | read |
| `device-network_get_fingerprint_get` | GET | `/platform` | `/fingerprint/get` | 获取设备指纹 | read |
| `device-network_get_mcc_api_device_brand_future_get` | GET | `/` | `/mcc/api/device/brand/future/get` | 获取云巅未来手机品牌列表 | read |
| `device-network_get_mcc_api_device_brand_get` | GET | `/` | `/mcc/api/device/brand/get` | 获取手机品牌列表 | read |
| `device-network_get_mcc_api_device_conn_deviceid` | GET | `/` | `/mcc/api/device/conn/{deviceId}` | 测试是否设备是否可以建立链接 | read |
| `device-network_get_mcc_api_device_count` | GET | `/` | `/mcc/api/device/count` | 查询设备数量 | read |
| `device-network_get_mcc_api_device_detail_deviceid` | GET | `/` | `/mcc/api/device/detail/{deviceId}` | 设备信息详情查询 | read |
| `device-network_get_mcc_api_device_isbind` | GET | `/` | `/mcc/api/device/isBind` | 查询设备是否绑定过账号 | read |
| `device-network_get_mcc_api_device_list` | GET | `/` | `/mcc/api/device/list` | 查询设备集合 | read |
| `device-network_get_mcc_api_device_org_userid` | GET | `/` | `/mcc/api/device/org/{userId}` | 设备用户关联关系-查询 | read |
| `device-network_get_mcc_api_device_page` | GET | `/` | `/mcc/api/device/page` | 设备信息分页查询 | read |
| `device-network_get_mcc_api_device_page_allocation` | GET | `/` | `/mcc/api/device/page/allocation` | 待分配设备信息分页查询 | read |
| `device-network_get_mcc_api_device_page_category` | GET | `/` | `/mcc/api/device/page/category` | 按类别汇总分页查询设备 | read |
| `device-network_get_mcc_api_device_sync` | GET | `/` | `/mcc/api/device/sync` | 同步当前设备 | read |
| `device-network_get_mcc_api_device_uitree_xml_ip_port` | GET | `/` | `/mcc/api/device/uitree/xml/{ip}/{port}` | 获取设备uiTree.xml信息，文件流返回 | read |
| `device-network_get_mcc_api_device_uitree_xml_json_ip_port` | GET | `/` | `/mcc/api/device/uitree/xml_json/{ip}/{port}` | 获取设备uiTree.xml信息，json返回 | read |
| `device-network_get_mcc_api_device_uitree_xml_str_ip_port` | GET | `/` | `/mcc/api/device/uitree/xml_str/{ip}/{port}` | 获取设备uiTree.xml信息，字符串返回 | read |
| `device-network_get_social_fingerprint_get` | GET | `/` | `/social/fingerprint/get` | 获取设备指纹 | read |
| `device-network_get_social_mobile_network_agreements_list` | GET | `/` | `/social/mobile-network/agreements/list` | 获取网络协议列表 | read |
| `device-network_get_social_mobile_network_download_temp` | GET | `/` | `/social/mobile-network/download/temp` | 下载模板 | read |
| `device-network_get_social_mobile_network_id` | GET | `/` | `/social/mobile-network/{id}` | 根据id查询网络配置 | read |
| `device-network_get_social_mobile_network_nodes` | GET | `/` | `/social/mobile-network/nodes` | 查询节点列表 | read |
| `device-network_get_social_mobile_network_proxy_bind_account_risk_num` | GET | `/` | `/social/mobile-network/proxy/bind-account-risk-num` | 查询代理绑定账号的风控数 | read |
| `device-network_get_social_mobile_network_proxy_bind_device_list` | GET | `/` | `/social/mobile-network/proxy/bind-device-list` | 获取代理绑定的设备列表 | read |
| `device-network_get_social_mobile_network_proxy_bind_device_num_id` | GET | `/` | `/social/mobile-network/proxy/bind-device-num/{id}` | 查询代理绑定设备数量 | read |
| `device-network_get_social_mobile_network_proxy_num` | GET | `/` | `/social/mobile-network/proxy/num` | 查询代理数量和被使用的代理数量 | read |
| `device-network_post_allocation_container_allocate` | POST | `/platform` | `/allocation/container/allocate` | 分配容器给用户 | write |
| `device-network_post_allocation_container_list` | POST | `/platform` | `/allocation/container/list` | 根据设备id查询用户列表 | read |
| `device-network_post_allocation_container_page` | POST | `/platform` | `/allocation/container/page` | 容器配置分页查询 | read |
| `device-network_post_allocation_container_user_list` | POST | `/platform` | `/allocation/container/user/list` | 根据用户id查询设备列表 | read |
| `device-network_post_allocation_network_allocate` | POST | `/social` | `/allocation/network/allocate` | 分配网络 | write |
| `device-network_post_allocation_network_allocate_2` | POST | `/platform` | `/allocation/network/allocate` | 分配网络（代理）给用户 | write |
| `device-network_post_allocation_network_list` | POST | `/social` | `/allocation/network/list` | 根据代理id查询用户列表 | read |
| `device-network_post_allocation_network_list_2` | POST | `/platform` | `/allocation/network/list` | 根据代理id查询用户列表 | read |
| `device-network_post_allocation_network_page` | POST | `/social` | `/allocation/network/page` | 网络分配分页 | read |
| `device-network_post_allocation_network_page_2` | POST | `/platform` | `/allocation/network/page` | 网络分配分页查询 | read |
| `device-network_post_allocation_network_user_list` | POST | `/social` | `/allocation/network/user/list` | 根据用户id查询代理列表 | read |
| `device-network_post_allocation_network_user_list_2` | POST | `/platform` | `/allocation/network/user/list` | 根据用户id查询代理列表 | read |
| `device-network_post_device_add` | POST | `/mcc` | `/device/add` | 新增真机设备 | write |
| `device-network_post_device_mock_opera` | POST | `/mcc` | `/device/mock/opera` | Mock相关(开启、关闭) | write |
| `device-network_post_device_org_update` | POST | `/mcc` | `/device/org/update` | 设备用户关联关系-更新 | write |
| `device-network_post_device_reset` | POST | `/mcc` | `/device/reset` | 重置设备 | write |
| `device-network_post_device_update` | POST | `/mcc` | `/device/update` | 设备信息更新 | write |
| `device-network_post_device_update_ex` | POST | `/mcc` | `/device/update/ex` | 设备信息更新（拓展） | write |
| `device-network_post_mcc_api_device_add` | POST | `/` | `/mcc/api/device/add` | 新增真机设备 | write |
| `device-network_post_mcc_api_device_add_remark` | POST | `/` | `/mcc/api/device/add/remark` | 新增设备备注 | write |
| `device-network_post_mcc_api_device_lock` | POST | `/` | `/mcc/api/device/lock` | 设备锁定和解锁 | write |
| `device-network_post_mcc_api_device_mock_opera` | POST | `/` | `/mcc/api/device/mock/opera` | Mock相关(开启、关闭) | write |
| `device-network_post_mcc_api_device_org_update` | POST | `/` | `/mcc/api/device/org/update` | 设备用户关联关系-更新 | write |
| `device-network_post_mcc_api_device_reset` | POST | `/` | `/mcc/api/device/reset` | 重置设备 | write |
| `device-network_post_mcc_api_device_select_device` | POST | `/` | `/mcc/api/device/select/device` | 根据用户id查询设备信息 | read |
| `device-network_post_mcc_api_device_select_user` | POST | `/` | `/mcc/api/device/select/user` | 根据设备id查询用户信息 | read |
| `device-network_post_mcc_api_device_update` | POST | `/` | `/mcc/api/device/update` | 设备信息更新 | write |
| `device-network_post_mcc_api_device_update_bind` | POST | `/` | `/mcc/api/device/update/bind` | 修改是否绑定过账号 | write |
| `device-network_post_social_allocation_network_allocate` | POST | `/` | `/social/allocation/network/allocate` | 分配网络 | write |
| `device-network_post_social_allocation_network_list` | POST | `/` | `/social/allocation/network/list` | 根据代理id查询用户列表 | read |
| `device-network_post_social_allocation_network_page` | POST | `/` | `/social/allocation/network/page` | 网络分配分页 | read |
| `device-network_post_social_allocation_network_user_list` | POST | `/` | `/social/allocation/network/user/list` | 根据用户id查询代理列表 | read |
| `device-network_post_social_mobile_network_add_remark` | POST | `/` | `/social/mobile-network/add-remark` | 添加备注 | write |
| `device-network_post_social_mobile_network_batch_unbind_proxy` | POST | `/` | `/social/mobile-network/batch-unbind-proxy` | 批量解绑代理 | destructive |
| `device-network_post_social_mobile_network_dedicated_line` | POST | `/` | `/social/mobile-network/dedicated-line` | 网络配置 | write |
| `device-network_post_social_mobile_network_device_bind_account` | POST | `/` | `/social/mobile-network/device/bind-account` | 获取设备绑定的账号和代理 | read |
| `device-network_post_social_mobile_network_download` | POST | `/` | `/social/mobile-network/download` | 下载 | read |
| `device-network_post_social_mobile_network_import_csv` | POST | `/` | `/social/mobile-network/import/csv` | 导入模板 | write |
| `device-network_post_social_mobile_network_page` | POST | `/` | `/social/mobile-network/page` | 分页查询网络配置 | read |
| `device-network_post_social_mobile_network_proxy_bind_account` | POST | `/` | `/social/mobile-network/proxy/bind-account` | 获取代理绑定的账号和设备 | read |
| `device-network_post_social_mobile_network_proxy_bind_proxy_by_device` | POST | `/` | `/social/mobile-network/proxy/bind-proxy-by-device` | 根据设备查询绑定的代理 | read |
| `device-network_post_social_mobile_network_proxy_disable` | POST | `/` | `/social/mobile-network/proxy/disable` | 停用代理服务 | write |
| `device-network_post_social_mobile_network_proxy_split_link` | POST | `/` | `/social/mobile-network/proxy/split-link` | 切割代理链接获取ip和端口 | read |
| `device-network_post_social_mobile_network_proxy_update` | POST | `/` | `/social/mobile-network/proxy/update` | 更新代理配置 | write |
| `device-network_post_social_mobile_network_save` | POST | `/` | `/social/mobile-network/save` | 保存网络配置 | write |
| `device-network_post_social_mobile_network_test` | POST | `/` | `/social/mobile-network/test` | 测试网络连接是否可用 | read |
| `device-network_post_social_realphone_add` | POST | `/` | `/social/realPhone/add` | 新增真机设备 | write |
| `device-network_put_device_gen` | PUT | `/mcc` | `/device/gen` | 生成设备信息 | write |
| `device-network_put_device_new` | PUT | `/mcc` | `/device/new` | 一键新机 | write |
| `device-network_put_mcc_api_device_gen` | PUT | `/` | `/mcc/api/device/gen` | 生成设备信息 | write |
| `device-network_put_mcc_api_device_new` | PUT | `/` | `/mcc/api/device/new` | 一键新机 | write |
| `device-network_put_mcc_api_device_new_batch` | PUT | `/` | `/mcc/api/device/new/batch` | 批量一键新机 | write |
| `device-network_put_social_mobile_network_bind` | PUT | `/` | `/social/mobile-network/bind` | 绑定网络 | write |
| `device-network_put_social_mobile_network_renew` | PUT | `/` | `/social/mobile-network/renew` | 续费网络配置 | write |
| `device-network_put_social_mobile_network_unbind` | PUT | `/` | `/social/mobile-network/unbind` | 解绑网络 | destructive |
| `device-network_put_social_mobile_network_update` | PUT | `/` | `/social/mobile-network/update` | 修改网络配置 | write |

## 操作详情
### device-network_delete_device_del
- 摘要：删除设备信息
- `DELETE /mcc/device/del` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceIds` (string [], 必填) — 设备编码集合
- 响应字段：`code`, `data`, `msg`, `timestamp`, `licenseState`, `licenseExpireDate`

### device-network_delete_device_org_del
- 摘要：设备用户关联关系-删除
- `DELETE /mcc/device/org/del` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `userIds` (string [], 必填) — 用户编码集合
- 响应字段：`code`, `data`, `msg`, `timestamp`, `licenseState`, `licenseExpireDate`

### device-network_delete_mcc_api_device_del
- 摘要：删除设备信息
- `DELETE /mcc/api/device/del` · 风险：destructive · 鉴权：required
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
  - `deviceIds` (string [], 必填) — 设备编码集合
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-network_delete_mcc_api_device_org_del
- 摘要：设备用户关联关系-删除
- `DELETE /mcc/api/device/org/del` · 风险：destructive · 鉴权：required
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
  - `userIds` (string [], 必填) — 用户编码集合
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-network_delete_social_mobile_network_cancel_dedicated_line
- 摘要：取消网络配置
- `DELETE /social/mobile-network/cancel/dedicated-line` · 风险：destructive · 鉴权：required
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
  - `deviceIds` (string [], 可选) — 容器ID
  - `routeIp` (string, 可选) — 路由IP
- 响应字段：`code`, `msg`, `data`, `totalCount`, `successCount`, `failedCount`, `failedDevices`, `deviceId`, `deviceIp`, `reason`, `licenseState`, `licenseExpireDate`

### device-network_delete_social_mobile_network_delete
- 摘要：删除网络配置
- `DELETE /social/mobile-network/delete` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `ids` (string [], 可选) — id集合
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-network_delete_social_mobile_network_delete_bind_data
- 摘要：物理删除网络绑定的数据
- `DELETE /social/mobile-network/delete-bind-data` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceId` (string, 可选) — 设备id
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-network_get_device_brand_future_get
- 摘要：获取云巅未来手机品牌列表
- `GET /mcc/device/brand/future/get` · 风险：read · 鉴权：required
- 响应字段：`code`, `data`, `mobileDeviceModels`, `brand`, `title`, `categories`, `model`, `deiceName`, `msg`, `timestamp`, `licenseState`, `licenseExpireDate`

### device-network_get_device_brand_get
- 摘要：获取手机品牌列表
- `GET /mcc/device/brand/get` · 风险：read · 鉴权：required
- 响应字段：`code`, `data`, `mobileDeviceModels`, `brand`, `title`, `categories`, `model`, `deiceName`, `msg`, `timestamp`, `licenseState`, `licenseExpireDate`

### device-network_get_device_conn_deviceid
- 摘要：测试是否设备是否可以建立链接
- `GET /mcc/device/conn/{deviceId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `data`, `msg`, `timestamp`, `licenseState`, `licenseExpireDate`

### device-network_get_device_detail_deviceid
- 摘要：设备信息详情查询
- `GET /mcc/device/detail/{deviceId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `data`, `id`, `deviceCode`, `deviceMode`, `deviceName`, `category`, `manufacturer`, `deviceStatus`, `resolutionRatio`, `nodeId`, `deviceIp` …

### device-network_get_device_fold_floor_page
- 摘要：折叠二层查询
- `GET /platform/device/fold/floor/page` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `records`, `server`, `inputTime`, `chip`, `deviceIp`, `romVersion`, `phoneBrand`, `phoneModel`, `operator` …

### device-network_get_device_fold_page
- 摘要：折叠查询（一级）
- `GET /platform/device/fold/page` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `records`, `objectId`, `objectName`, `deviceNum`, `total`, `size`, `current`, `orders`, `column` …

### device-network_get_device_org_userid
- 摘要：设备用户关联关系-查询
- `GET /mcc/device/org/{userId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `data`, `msg`, `timestamp`, `licenseState`, `licenseExpireDate`

### device-network_get_device_page
- 摘要：设备信息分页查询
- `GET /mcc/device/page` · 风险：read · 鉴权：required
- 响应字段：`code`, `data`, `id`, `deviceCode`, `deviceMode`, `deviceName`, `deviceCategory`, `deviceIdx`, `manufacturer`, `deviceStatus`, `resolutionRatio`, `nodeId` …

### device-network_get_device_page_2
- 摘要：移动设备分页查询
- `GET /platform/device/page` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `records`, `server`, `inputTime`, `chip`, `deviceIp`, `romVersion`, `phoneBrand`, `phoneModel`, `operator` …

### device-network_get_device_page_allocation
- 摘要：待分配设备信息分页查询
- `GET /mcc/device/page/allocation` · 风险：read · 鉴权：required
- 响应字段：`code`, `data`, `id`, `deviceCode`, `deviceName`, `deviceCategory`, `deviceStatus`, `nodeId`, `deviceIp`, `devicePort`, `systemVersion`, `msg` …

### device-network_get_device_page_ex
- 摘要：获取设备信息（拓展）
- `GET /mcc/device/page/ex` · 风险：read · 鉴权：required
- 响应字段：`code`, `data`, `msg`, `timestamp`, `licenseState`, `licenseExpireDate`

### device-network_get_device_server_list
- 摘要：获取服务器列表信息
- `GET /platform/device/server/list/` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `armId`, `armIp`, `address`, `armName`, `deviceNum`

### device-network_get_device_sync
- 摘要：同步当前设备
- `GET /mcc/device/sync` · 风险：read · 鉴权：required
- 响应字段：`code`, `data`, `msg`, `timestamp`, `licenseState`, `licenseExpireDate`

### device-network_get_device_uitree_xml_ip_port
- 摘要：获取设备uiTree.xml信息，文件流返回
- `GET /mcc/device/uitree/xml/{ip}/{port}` · 风险：read · 鉴权：required

### device-network_get_device_uitree_xml_json_ip_port
- 摘要：获取设备uiTree.xml信息，json返回
- `GET /mcc/device/uitree/xml_json/{ip}/{port}` · 风险：read · 鉴权：required
- 响应字段：`code`, `data`, `msg`, `timestamp`, `licenseState`, `licenseExpireDate`

### device-network_get_device_uitree_xml_str_ip_port
- 摘要：获取设备uiTree.xml信息，字符串返回
- `GET /mcc/device/uitree/xml_str/{ip}/{port}` · 风险：read · 鉴权：required
- 响应字段：`code`, `data`, `msg`, `timestamp`, `licenseState`, `licenseExpireDate`

### device-network_get_fingerprint_get
- 摘要：获取设备指纹
- `GET /platform/fingerprint/get` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`

### device-network_get_mcc_api_device_brand_future_get
- 摘要：获取云巅未来手机品牌列表
- `GET /mcc/api/device/brand/future/get` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `createBy`, `createTime`, `updateBy`, `updateTime`, `remark`, `params`, `key`, `mobileDeviceModels`, `createBy` …

### device-network_get_mcc_api_device_brand_get
- 摘要：获取手机品牌列表
- `GET /mcc/api/device/brand/get` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `createBy`, `createTime`, `updateBy`, `updateTime`, `remark`, `params`, `key`, `mobileDeviceModels`, `createBy` …

### device-network_get_mcc_api_device_conn_deviceid
- 摘要：测试是否设备是否可以建立链接
- `GET /mcc/api/device/conn/{deviceId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-network_get_mcc_api_device_count
- 摘要：查询设备数量
- `GET /mcc/api/device/count` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-network_get_mcc_api_device_detail_deviceid
- 摘要：设备信息详情查询
- `GET /mcc/api/device/detail/{deviceId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `createBy`, `createTime`, `updateBy`, `updateTime`, `remark`, `params`, `key`, `id`, `deviceCode` …

### device-network_get_mcc_api_device_isbind
- 摘要：查询设备是否绑定过账号
- `GET /mcc/api/device/isBind` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-network_get_mcc_api_device_list
- 摘要：查询设备集合
- `GET /mcc/api/device/list` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `creatorId`, `createTime`, `updatorId`, `updateTime`, `deleted`, `version`, `deptId`, `params`, `key` …

### device-network_get_mcc_api_device_org_userid
- 摘要：设备用户关联关系-查询
- `GET /mcc/api/device/org/{userId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-network_get_mcc_api_device_page
- 摘要：设备信息分页查询
- `GET /mcc/api/device/page` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `records`, `createBy`, `createTime`, `updateBy`, `updateTime`, `remark`, `params`, `key`, `id` …

### device-network_get_mcc_api_device_page_allocation
- 摘要：待分配设备信息分页查询
- `GET /mcc/api/device/page/allocation` · 风险：read · 鉴权：required
- 响应字段：`records`, `createBy`, `createTime`, `updateBy`, `updateTime`, `remark`, `params`, `key`, `id`, `deviceCode`, `deviceName`, `deviceCategory` …

### device-network_get_mcc_api_device_page_category
- 摘要：按类别汇总分页查询设备
- `GET /mcc/api/device/page/category` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `records`, `deviceCategory`, `totalCount`, `onlineCount`, `offlineCount`, `boundCount`, `unboundCount`, `total`, `size` …

### device-network_get_mcc_api_device_sync
- 摘要：同步当前设备
- `GET /mcc/api/device/sync` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-network_get_mcc_api_device_uitree_xml_ip_port
- 摘要：获取设备uiTree.xml信息，文件流返回
- `GET /mcc/api/device/uitree/xml/{ip}/{port}` · 风险：read · 鉴权：required

### device-network_get_mcc_api_device_uitree_xml_json_ip_port
- 摘要：获取设备uiTree.xml信息，json返回
- `GET /mcc/api/device/uitree/xml_json/{ip}/{port}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-network_get_mcc_api_device_uitree_xml_str_ip_port
- 摘要：获取设备uiTree.xml信息，字符串返回
- `GET /mcc/api/device/uitree/xml_str/{ip}/{port}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-network_get_social_fingerprint_get
- 摘要：获取设备指纹
- `GET /social/fingerprint/get` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-network_get_social_mobile_network_agreements_list
- 摘要：获取网络协议列表
- `GET /social/mobile-network/agreements/list` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-network_get_social_mobile_network_download_temp
- 摘要：下载模板
- `GET /social/mobile-network/download/temp` · 风险：read · 鉴权：required

### device-network_get_social_mobile_network_id
- 摘要：根据id查询网络配置
- `GET /social/mobile-network/{id}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `id`, `ip`, `area`, `phones`, `assId`, `phoneId`, `phoneIp`, `deviceIdx`, `deviceNum` …

### device-network_get_social_mobile_network_nodes
- 摘要：查询节点列表
- `GET /social/mobile-network/nodes` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `records`, `deviceIp`, `deviceId`, `disabled`, `isLock`, `total`, `size`, `current`, `orders` …

### device-network_get_social_mobile_network_proxy_bind_account_risk_num
- 摘要：查询代理绑定账号的风控数
- `GET /social/mobile-network/proxy/bind-account-risk-num` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-network_get_social_mobile_network_proxy_bind_device_list
- 摘要：获取代理绑定的设备列表
- `GET /social/mobile-network/proxy/bind-device-list` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `deviceIds`, `licenseState`, `licenseExpireDate`

### device-network_get_social_mobile_network_proxy_bind_device_num_id
- 摘要：查询代理绑定设备数量
- `GET /social/mobile-network/proxy/bind-device-num/{id}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-network_get_social_mobile_network_proxy_num
- 摘要：查询代理数量和被使用的代理数量
- `GET /social/mobile-network/proxy/num` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `proxyTotalNum`, `proxyUsedNum`, `proxyWaitNum`, `proxyRiskNum`, `licenseState`, `licenseExpireDate`

### device-network_post_allocation_container_allocate
- 摘要：分配容器给用户
- `POST /platform/allocation/container/allocate` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `userIds` (string [], 可选) — 用户id
  - `deviceIds` (string [], 可选) — 设备id集合
  - `bindDirection` (boolean, 可选) — 绑定方向 true是设备分配给用户 false是用户分配设备
  - `delIds` (string [], 可选) — 删除的id集合
- 响应字段：`code`, `msg`, `data`

### device-network_post_allocation_container_list
- 摘要：根据设备id查询用户列表
- `POST /platform/allocation/container/list` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceIds` (string [], 可选) — 设备id集合
- 响应字段：`code`, `msg`, `data`, `records`, `userId`, `userName`, `nickName`, `status`, `total`, `size`, `current`, `orders` …

### device-network_post_allocation_container_page
- 摘要：容器配置分页查询
- `POST /platform/allocation/container/page` · 风险：read · 鉴权：required
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
  - `condition` (string, 可选) — 搜索条件
- 响应字段：`code`, `msg`, `data`, `records`, `userInfos`, `userId`, `userName`, `nickName`, `status`, `server`, `deviceId`, `deviceIp` …
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### device-network_post_allocation_container_user_list
- 摘要：根据用户id查询设备列表
- `POST /platform/allocation/container/user/list` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `userIds` (string [], 可选) — 用户id集合
- 响应字段：`code`, `msg`, `data`, `records`, `userInfos`, `userId`, `userName`, `nickName`, `status`, `server`, `deviceId`, `deviceIp` …

### device-network_post_allocation_network_allocate
- 摘要：分配网络
- `POST /social/allocation/network/allocate` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `userIds` (string [], 可选) — 用户id
  - `networkIds` (string [], 可选) — 网络id集合
  - `bindDirection` (boolean, 可选) — 绑定方向 true是网络分配给用户 false是用户分配网络
  - `delIds` (string [], 可选) — 删除的id集合
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-network_post_allocation_network_allocate_2
- 摘要：分配网络（代理）给用户
- `POST /platform/allocation/network/allocate` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `userIds` (string [], 可选) — 用户id
  - `networkIds` (string [], 可选) — 网络id集合
  - `bindDirection` (boolean, 可选) — 绑定方向 true是网络分配给用户 false是用户分配网络
  - `delIds` (string [], 可选) — 删除的id集合
- 响应字段：`code`, `msg`, `data`

### device-network_post_allocation_network_list
- 摘要：根据代理id查询用户列表
- `POST /social/allocation/network/list` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `networkIds` (string [], 可选) — 网络id集合
- 响应字段：`code`, `msg`, `data`, `records`, `userId`, `userName`, `nickName`, `status`, `total`, `size`, `current`, `orders` …

### device-network_post_allocation_network_list_2
- 摘要：根据代理id查询用户列表
- `POST /platform/allocation/network/list` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `networkIds` (string [], 可选) — 网络id集合
- 响应字段：`code`, `msg`, `data`, `records`, `userId`, `userName`, `nickName`, `status`, `total`, `size`, `current`, `orders` …

### device-network_post_allocation_network_page
- 摘要：网络分配分页
- `POST /social/allocation/network/page` · 风险：read · 鉴权：required
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
  - `userId` (integer, 可选) — 用户id
  - `userName` (string, 可选) — 用户名称
  - `nickName` (string, 可选) — 昵称
  - `networkId` (integer, 可选) — 网络id
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
  - `condition` (string, 可选) — 搜索条件 所有者-所属地区-IP-链接-到期时间-代理分组-备注
- 响应字段：`code`, `msg`, `data`, `records`, `userInfos`, `userId`, `userName`, `nickName`, `status`, `area`, `ip`, `networkLink` …
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### device-network_post_allocation_network_page_2
- 摘要：网络分配分页查询
- `POST /platform/allocation/network/page` · 风险：read · 鉴权：required
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
  - `condition` (string, 可选) — 搜索条件
- 响应字段：`code`, `msg`, `data`, `records`, `userInfos`, `userId`, `userName`, `nickName`, `status`, `area`, `ip`, `networkLink` …
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### device-network_post_allocation_network_user_list
- 摘要：根据用户id查询代理列表
- `POST /social/allocation/network/user/list` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `userIds` (string [], 可选) — 用户id集合
- 响应字段：`code`, `msg`, `data`, `records`, `userInfos`, `userId`, `userName`, `nickName`, `status`, `area`, `ip`, `networkLink` …

### device-network_post_allocation_network_user_list_2
- 摘要：根据用户id查询代理列表
- `POST /platform/allocation/network/user/list` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `userIds` (string [], 可选) — 用户id集合
- 响应字段：`code`, `msg`, `data`, `records`, `userInfos`, `userId`, `userName`, `nickName`, `status`, `area`, `ip`, `networkLink` …

### device-network_post_device_add
- 摘要：新增真机设备
- `POST /mcc/device/add` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceCode` (string, 可选) — 设备编号(容器编号)
  - `deviceMode` (string, 可选) — 设备型号
  - `systemVersion` (string, 可选) — 系统版本
  - `deviceName` (string, 可选) — 设备名称
  - `deviceCategory` (string, 可选) — 设备类别（apply、huawei、oppo等）
  - `manufacturer` (string, 可选) — 厂商
  - `deviceStatus` (string, 可选) — 设备状态（OFFLINE:离线，ONLINE:在线，SHUTDOWN:关机）
  - `resolutionRatio` (string, 可选) — 分辨率
  - `deviceIp` (string, 可选) — 设备宿主机Ip地址
  - `deviceMac` (string, 可选) — 设备MAC地址
  - `devicePort` (string, 可选) — 端口号
  - `deviceNo` (string, 可选) — 设备序号
  - `deviceAliases` (string, 可选) — 设备别名
  - `imei` (string, 可选) — imei
  - `brand` (string, 可选) — 品牌
  - `serialNumber` (string, 可选) — 手机序列号
  - `sn` (string, 可选) — 序号
  - `battery` (string, 可选) — 电量
- 响应字段：`code`, `data`, `msg`, `timestamp`, `licenseState`, `licenseExpireDate`

### device-network_post_device_mock_opera
- 摘要：Mock相关(开启、关闭)
- `POST /mcc/device/mock/opera` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceId` (string, 必填) — 设备编号
  - `operaState` (boolean, 必填) — mock状态 true :建立链接 / false :断开连接
  - `appId` (string, 可选) — 应用ID
- 响应字段：`code`, `data`, `msg`, `timestamp`, `licenseState`, `licenseExpireDate`

### device-network_post_device_org_update
- 摘要：设备用户关联关系-更新
- `POST /mcc/device/org/update` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceIds` (string [], 可选) — 设备编号集合
  - `userId` (string, 必填) — 用户编号
  - `isHasAll` (boolean, 可选) — 是否拥有全部，true：全部，false：部分
- 响应字段：`code`, `data`, `msg`, `timestamp`, `licenseState`, `licenseExpireDate`

### device-network_post_device_reset
- 摘要：重置设备
- `POST /mcc/device/reset` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceIds` (string [], 必填) — 设备编号集合
- 响应字段：`code`, `data`, `msg`, `timestamp`, `licenseState`, `licenseExpireDate`

### device-network_post_device_update
- 摘要：设备信息更新
- `POST /mcc/device/update` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceIds` (string [], 必填) — 设备ID集合
  - `operation` (string, 必填) — 操作指令，SHUTDOWN：关机/POWER_ON:开机/RESTART:重启/CHANGE_IMG:更换镜像/MODIFY:更新设备信息/GPS:修改定位信息
  - `imgId` (string, 可选) — 镜像ID
  - `modifyDeviceInfoReq` (object, 可选) — 设备信息
  - `brand` (string, 可选) — 手机品牌
  - `category` (string, 可选) — 手机型号
  - `phoneNumber` (string, 可选) — 手机号码
  - `lon` (number, 可选) — 经度
  - `lat` (number, 可选) — 纬度
  - `alt` (number, 可选) — 海拔
  - `imei` (string, 可选) — imei码
  - `serialNumber` (string, 可选) — 序列号
  - `battery` (string, 可选) — 电量
  - `netOperator` (string, 可选) — 运营商
  - `imsi` (string, 可选)
  - `sn` (string, 可选)
  - `iccid` (string, 可选)
- 响应字段：`code`, `data`, `msg`, `timestamp`, `licenseState`, `licenseExpireDate`

### device-network_post_device_update_ex
- 摘要：设备信息更新（拓展）
- `POST /mcc/device/update/ex` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `conIp` (string, 必填) — 设备IP
- 响应字段：`code`, `data`, `msg`, `timestamp`, `licenseState`, `licenseExpireDate`

### device-network_post_mcc_api_device_add
- 摘要：新增真机设备
- `POST /mcc/api/device/add` · 风险：write · 鉴权：required
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
  - `deviceCode` (string, 可选) — 设备编号(容器编号)
  - `deviceMode` (string, 可选) — 设备型号
  - `systemVersion` (string, 可选) — 系统版本
  - `deviceName` (string, 可选) — 设备名称
  - `deviceCategory` (string, 可选) — 设备类别（apply、huawei、oppo等）
  - `manufacturer` (string, 可选) — 厂商
  - `deviceStatus` (string, 可选) — 设备状态（OFFLINE:离线，ONLINE:在线，SHUTDOWN:关机）
  - `resolutionRatio` (string, 可选) — 分辨率
  - `deviceIp` (string, 可选) — 设备宿主机Ip地址
  - `deviceMac` (string, 可选) — 设备MAC地址
  - `devicePort` (string, 可选) — 端口号
  - `deviceNo` (string, 可选) — 设备序号
  - `deviceAliases` (string, 可选) — 设备别名
  - `imei` (string, 可选) — imei
  - `brand` (string, 可选) — 品牌
  - `serialNumber` (string, 可选) — 手机序列号
  - `sn` (string, 可选) — 序号
  - `battery` (string, 可选) — 电量
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-network_post_mcc_api_device_add_remark
- 摘要：新增设备备注
- `POST /mcc/api/device/add/remark` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceId` (string, 可选) — 设备ID
  - `remark` (string, 可选) — 设备备注
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-network_post_mcc_api_device_lock
- 摘要：设备锁定和解锁
- `POST /mcc/api/device/lock` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceIds` (string [], 可选) — 设备ID集合
  - `isLock` (boolean, 可选) — 是否锁
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-network_post_mcc_api_device_mock_opera
- 摘要：Mock相关(开启、关闭)
- `POST /mcc/api/device/mock/opera` · 风险：write · 鉴权：required
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
  - `deviceId` (string, 必填) — 设备编号
  - `operaState` (boolean, 必填) — mock状态 true :建立链接 / false :断开连接
  - `appId` (string, 可选) — 应用ID
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-network_post_mcc_api_device_org_update
- 摘要：设备用户关联关系-更新
- `POST /mcc/api/device/org/update` · 风险：write · 鉴权：required
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
  - `deviceIds` (string [], 可选) — 设备编号集合
  - `userId` (string, 可选) — 用户编号
  - `isHasAll` (boolean, 可选) — 是否拥有全部，true：全部，false：部分
  - `bindDirection` (boolean, 可选) — 绑定方向 true是容器分配给用户 false是用户分配容器
  - `userIds` (string [], 可选) — 用户编号集合
  - `delIds` (string [], 可选) — 删除id集合
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-network_post_mcc_api_device_reset
- 摘要：重置设备
- `POST /mcc/api/device/reset` · 风险：write · 鉴权：required
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
  - `deviceIds` (string [], 必填) — 设备编号集合
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-network_post_mcc_api_device_select_device
- 摘要：根据用户id查询设备信息
- `POST /mcc/api/device/select/device` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `userIds` (string [], 可选) — 用户ID集合
- 响应字段：`code`, `msg`, `data`, `records`, `userInfos`, `userId`, `userName`, `nickName`, `status`, `server`, `deviceId`, `deviceIp` …

### device-network_post_mcc_api_device_select_user
- 摘要：根据设备id查询用户信息
- `POST /mcc/api/device/select/user` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceIds` (string [], 可选) — 设备ID集合
- 响应字段：`code`, `msg`, `data`, `records`, `userId`, `userName`, `nickName`, `status`, `total`, `size`, `current`, `orders` …

### device-network_post_mcc_api_device_update
- 摘要：设备信息更新
- `POST /mcc/api/device/update` · 风险：write · 鉴权：required
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
  - `operation` (string, 必填) — 操作指令，SHUTDOWN：关机/POWER_ON:开机/RESTART:重启/CHANGE_IMG:更换镜像/MODIFY:更新设备信息/GPS:修改定位信息
  - `imgId` (string, 可选) — 镜像ID
  - `modifyDeviceInfoReq` (object, 可选) — 设备信息
  - `createBy` (string, 可选) — 创建者
  - `createTime` (string, 可选) — 创建时间
  - `updateBy` (string, 可选) — 更新者
  - `updateTime` (string, 可选) — 更新时间
  - `remark` (string, 可选) — 备注
  - `params` (object, 可选) — 请求参数
  - `key` (object, 可选)
  - `brand` (string, 可选) — 手机品牌
  - `category` (string, 可选) — 手机型号
  - `phoneNumber` (string, 可选) — 手机号码
  - `lon` (number, 可选) — 经度
  - `lat` (number, 可选) — 纬度
  - `alt` (number, 可选) — 海拔
  - `imei` (string, 可选) — imei码
  - `serialNumber` (string, 可选) — 序列号
  - `battery` (string, 可选) — 电量
  - `netOperator` (string, 可选) — 运营商
  - `imsi` (string, 可选)
  - `sn` (string, 可选)
  - `iccid` (string, 可选)
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-network_post_mcc_api_device_update_bind
- 摘要：修改是否绑定过账号
- `POST /mcc/api/device/update/bind` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceId` (string, 可选) — 设备ID
  - `isBind` (string, 可选) — 是否绑定
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-network_post_social_allocation_network_allocate
- 摘要：分配网络
- `POST /social/allocation/network/allocate` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `userIds` (string [], 可选) — 用户id
  - `networkIds` (string [], 可选) — 网络id集合
  - `bindDirection` (boolean, 可选) — 绑定方向 true是网络分配给用户 false是用户分配网络
  - `delIds` (string [], 可选) — 删除的id集合
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-network_post_social_allocation_network_list
- 摘要：根据代理id查询用户列表
- `POST /social/allocation/network/list` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `networkIds` (string [], 可选) — 网络id集合
- 响应字段：`code`, `msg`, `data`, `records`, `userId`, `userName`, `nickName`, `status`, `total`, `size`, `current`, `orders` …

### device-network_post_social_allocation_network_page
- 摘要：网络分配分页
- `POST /social/allocation/network/page` · 风险：read · 鉴权：required
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
  - `userId` (integer, 可选) — 用户id
  - `userName` (string, 可选) — 用户名称
  - `nickName` (string, 可选) — 昵称
  - `networkId` (integer, 可选) — 网络id
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
  - `condition` (string, 可选) — 搜索条件 所有者-所属地区-IP-链接-到期时间-代理分组-备注
- 响应字段：`code`, `msg`, `data`, `records`, `userInfos`, `userId`, `userName`, `nickName`, `status`, `area`, `ip`, `networkLink` …
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### device-network_post_social_allocation_network_user_list
- 摘要：根据用户id查询代理列表
- `POST /social/allocation/network/user/list` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `userIds` (string [], 可选) — 用户id集合
- 响应字段：`code`, `msg`, `data`, `records`, `userInfos`, `userId`, `userName`, `nickName`, `status`, `area`, `ip`, `networkLink` …

### device-network_post_social_mobile_network_add_remark
- 摘要：添加备注
- `POST /social/mobile-network/add-remark` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `networkId` (string, 可选) — 网络id
  - `remark` (string, 可选) — 备注
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-network_post_social_mobile_network_batch_unbind_proxy
- 摘要：批量解绑代理
- `POST /social/mobile-network/batch-unbind-proxy` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `proxyIds` (string [], 可选) — 代理id 集合
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-network_post_social_mobile_network_dedicated_line
- 摘要：网络配置
- `POST /social/mobile-network/dedicated-line` · 风险：write · 鉴权：required
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
  - `deviceIds` (string [], 可选) — 容器ID
  - `routeIp` (string, 可选) — 路由IP
- 响应字段：`code`, `msg`, `data`, `totalCount`, `successCount`, `failedCount`, `failedDevices`, `deviceId`, `deviceIp`, `reason`, `licenseState`, `licenseExpireDate`

### device-network_post_social_mobile_network_device_bind_account
- 摘要：获取设备绑定的账号和代理
- `POST /social/mobile-network/device/bind-account` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceIds` (string [], 可选) — 设备id集合
- 响应字段：`code`, `msg`, `data`, `accountIds`, `proxyIds`, `licenseState`, `licenseExpireDate`

### device-network_post_social_mobile_network_download
- 摘要：下载
- `POST /social/mobile-network/download` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `ids` (string [], 可选) — id集合

### device-network_post_social_mobile_network_import_csv
- 摘要：导入模板
- `POST /social/mobile-network/import/csv` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-network_post_social_mobile_network_page
- 摘要：分页查询网络配置
- `POST /social/mobile-network/page` · 风险：read · 鉴权：required
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
  - `id` (integer, 可选) — 主键ID
  - `ip` (string, 可选) — IP地址
  - `nodeId` (string, 可选) — 节点ID
  - `area` (string, 可选) — 地区（如：北京、旧金山）
  - `nodeIp` (string, 可选) — 节点IP
  - `agreement` (string, 可选) — 协议类型（如HTTP/HTTPS、TCP/UDP）
  - `networkStatus` (string, 可选) — 网络状态 BINDING(已绑定)/ARREARAGE(欠费)/LEISURE(空闲)/INVALID(无效)
  - `expirationTime` (string, 可选) — 过期时间
  - `networkLink` (string, 可选) — 网络链接URL
  - `batchNumber` (string, 可选) — 批次号
  - `operationStatus` (string, 可选) — 代理操作状态(true 开启 false 关闭)
  - `remark` (string, 可选) — 备注
  - `inboundTag` (string, 可选)
  - `outboundTag` (string, 可选)
  - `proxyAddr` (string, 可选)
  - `proxyIp` (string, 可选)
  - `proxyPort` (string, 可选)
  - `proxyLinkIp` (string, 可选) — 代理ip
  - `proxyLinkPort` (string, 可选) — 代理端口
  - `username` (string, 可选) — 用户名
  - `password` (string, 可选) — 密码
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
  - `ip` (string, 可选) — IP地址
  - `area` (string, 可选) — 地区
  - `areas` (string [], 可选) — 地区（如：北京、旧金山）
  - `phoneIp` (string, 可选) — 节点IP
  - `agreement` (string, 可选) — 协议类型（如HTTP/HTTPS、TCP/UDP）
  - `networkStatus` (string, 可选) — 网络状态（LEISURE/IN_USE/MAINTENANCE）
  - `isNearExpire` (boolean, 可选) — 待续费
  - `proxy` (string, 可选) — 代理
  - `sortType` (string, 可选) — 排序条件 1. 按风险排序（低风险的靠上） 2. 按录入时间排序（新录入的先显示）
  - `suiteIds` (string [], 可选) — 分组id
  - `deviceIds` (string [], 可选) — 设备 ID 集合:只查绑定了这些设备的网络配置。链路{@code social_mobile_network_association.phone_id IN (deviceIds) AND deleted=0 → * networkId → social_mobile_network};任一设备命中即保留该网络。前端以字符串数组形式提交(防 JS 长整数丢精度);为空 / null 时不参与过滤。
  - `proxyIds` (string [], 可选) — 代理id集合
- 响应字段：`code`, `msg`, `data`, `records`, `id`, `ip`, `area`, `phones`, `assId`, `phoneId`, `phoneIp`, `deviceIdx` …
- 分页：该接口含 page/pageSize 类参数，执行器 `--all` 可自动翻页。
- ⚠️ 该接口 Body 的 YApi 文档把 MyBatis-Plus Page 响应对象也写进了请求体（`asc`, `column`, `countId`, `maxLimit`, `optimizeCountSql`, `optimizeJoinOfCountSql`, `orders`, `records`, `searchCount`, `total`）。实际请求请只发送筛选条件 + 分页参数（`current`、`size`，或 `pageNum`/`pageSize` 视接口而定），不要发送响应侧字段。

### device-network_post_social_mobile_network_proxy_bind_account
- 摘要：获取代理绑定的账号和设备
- `POST /social/mobile-network/proxy/bind-account` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `proxyIds` (string [], 可选) — 代理id集合
- 响应字段：`code`, `msg`, `data`, `accountIds`, `deviceIds`, `licenseState`, `licenseExpireDate`

### device-network_post_social_mobile_network_proxy_bind_proxy_by_device
- 摘要：根据设备查询绑定的代理
- `POST /social/mobile-network/proxy/bind-proxy-by-device` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceId` (string, 可选) — 设备id
- 响应字段：`code`, `msg`, `data`, `assId`, `proxyId`, `licenseState`, `licenseExpireDate`

### device-network_post_social_mobile_network_proxy_disable
- 摘要：停用代理服务
- `POST /social/mobile-network/proxy/disable` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `networkId` (string, 可选) — 网络id
  - `operationStatus` (boolean, 可选) — 代理操作状态(true 开启 false 关闭)
  - `assIds` (string [], 可选) — 解绑ids
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-network_post_social_mobile_network_proxy_split_link
- 摘要：切割代理链接获取ip和端口
- `POST /social/mobile-network/proxy/split-link` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `networkLink` (string, 可选) — 网络链接
  - `agreement` (string, 可选) — 协议
  - `proxyLinkIp` (string, 可选)
  - `proxyLinkPort` (string, 可选)
  - `username` (string, 可选)
  - `password` (string, 可选)
- 响应字段：`code`, `msg`, `data`, `proxyLinkIp`, `proxyLinkPort`, `username`, `password`, `licenseState`, `licenseExpireDate`

### device-network_post_social_mobile_network_proxy_update
- 摘要：更新代理配置
- `POST /social/mobile-network/proxy/update` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `networkId` (string, 可选) — 网络id
  - `operationStatus` (boolean, 可选) — 代理操作状态(true 开启 false 关闭)
  - `assIds` (string [], 可选) — 解绑ids
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-network_post_social_mobile_network_save
- 摘要：保存网络配置
- `POST /social/mobile-network/save` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `ip` (string, 可选) — IP地址
  - `area` (string, 可选) — 地区（如：北京、旧金山）
  - `agreement` (string, 可选) — 协议类型（如HTTP/HTTPS、TCP/UDP）
  - `networkStatus` (string, 可选) — 网络状态 BINDING(已绑定)/ARREARAGE(欠费)/LEISURE(空闲)/INVALID(无效)
  - `expirationTime` (string, 可选) — 过期时间
  - `networkLink` (string, 可选) — 网络链接URL
  - `phones` (object [], 可选) — 节点信息集合
  - `phoneId` (string, 可选) — 节点id
  - `phoneIp` (string, 可选) — 节点地址
  - `proxyLinkIp` (string, 可选) — 代理ip
  - `proxyLinkPort` (string, 可选) — 代理端口
  - `username` (string, 可选) — 用户名
  - `password` (string, 可选) — 密码
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-network_post_social_mobile_network_test
- 摘要：测试网络连接是否可用
- `POST /social/mobile-network/test` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `ids` (string [], 可选)
- 响应字段：`code`, `msg`, `data`, `id`, `ip`, `area`, `available`, `message`, `licenseState`, `licenseExpireDate`

### device-network_post_social_realphone_add
- 摘要：新增真机设备
- `POST /social/realPhone/add` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceCode` (string, 可选) — 设备编号(容器编号)
  - `deviceMode` (string, 可选) — 设备型号
  - `systemVersion` (string, 可选) — 系统版本
  - `deviceName` (string, 可选) — 设备名称
  - `deviceCategory` (string, 可选) — 设备类别（apply、huawei、oppo等）
  - `manufacturer` (string, 可选) — 厂商
  - `deviceStatus` (string, 可选) — 设备状态（OFFLINE:离线，ONLINE:在线，SHUTDOWN:关机）
  - `resolutionRatio` (string, 可选) — 分辨率
  - `deviceIp` (string, 可选) — 设备宿主机Ip地址
  - `deviceMac` (string, 可选) — 设备MAC地址
  - `devicePort` (string, 可选) — 端口号
  - `deviceNo` (string, 可选) — 设备序号
  - `deviceAliases` (string, 可选) — 设备别名
  - `imei` (string, 可选) — imei
  - `brand` (string, 可选) — 品牌
  - `serialNumber` (string, 可选) — 手机序列号
  - `sn` (string, 可选) — 序号
  - `battery` (string, 可选) — 电量
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-network_put_device_gen
- 摘要：生成设备信息
- `PUT /mcc/device/gen` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `id` (string, 可选) — 运营商编号
  - `netOperator` (string, 可选) — 运营商
- 响应字段：`code`, `data`, `phoneNum`, `power`, `serialNumber`, `imei`, `imsi`, `sn`, `iccid`, `androidId`, `areaCodeZone`, `msg` …

### device-network_put_device_new
- 摘要：一键新机
- `PUT /mcc/device/new` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `deviceId` (string, 必填) — 设备编号
  - `armId` (string, 可选) — 服务器编号
  - `nodeId` (string, 可选) — 节点编号
  - `brand` (string, 必填) — 品牌
  - `category` (string, 可选) — 型号
  - `phoneNumber` (string, 可选) — 手机号码
  - `imei` (string, 可选) — imei码
  - `serialNumber` (string, 可选) — 序列号
  - `battery` (string, 可选) — 电量
  - `netOperator` (string, 可选) — 运营商
  - `imsi` (string, 可选)
  - `sn` (string, 可选)
  - `iccid` (string, 可选)
  - `chipCode` (string, 可选) — 芯片类型
  - `areaCodeZone` (string, 可选) — 时区
- 响应字段：`code`, `data`, `msg`, `timestamp`, `licenseState`, `licenseExpireDate`

### device-network_put_mcc_api_device_gen
- 摘要：生成设备信息
- `PUT /mcc/api/device/gen` · 风险：write · 鉴权：required
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
  - `id` (string, 可选) — 运营商编号
  - `netOperator` (string, 可选) — 运营商
- 响应字段：`code`, `msg`, `data`, `createBy`, `createTime`, `updateBy`, `updateTime`, `remark`, `params`, `key`, `phoneNum`, `power` …

### device-network_put_mcc_api_device_new
- 摘要：一键新机
- `PUT /mcc/api/device/new` · 风险：write · 鉴权：required
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
  - `deviceId` (string, 必填) — 设备编号
  - `armId` (string, 可选) — 服务器编号
  - `nodeId` (string, 可选) — 节点编号
  - `brand` (string, 必填) — 品牌
  - `category` (string, 可选) — 型号
  - `phoneNumber` (string, 可选) — 手机号码
  - `imei` (string, 可选) — imei码
  - `serialNumber` (string, 可选) — 序列号
  - `battery` (string, 可选) — 电量
  - `netOperator` (string, 可选) — 运营商
  - `imsi` (string, 可选)
  - `sn` (string, 可选)
  - `iccid` (string, 可选)
  - `chipCode` (string, 可选) — 芯片类型
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-network_put_mcc_api_device_new_batch
- 摘要：批量一键新机
- `PUT /mcc/api/device/new/batch` · 风险：write · 鉴权：required
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
  - `deviceReqs` (object [], 可选) — 一键新机设备信息集合
  - `createBy` (string, 可选) — 创建者
  - `createTime` (string, 可选) — 创建时间
  - `updateBy` (string, 可选) — 更新者
  - `updateTime` (string, 可选) — 更新时间
  - `remark` (string, 可选) — 备注
  - `params` (object, 可选) — 请求参数
  - `key` (object, 可选)
  - `deviceId` (string, 可选) — 设备编号
  - `armId` (string, 可选) — 服务器编号
  - `nodeId` (string, 可选) — 节点编号
  - `chipCode` (string, 可选) — 芯片类型
  - `onClickNewBrandReqs` (object [], 可选) — 手机品牌、运营商信息集合
  - `createBy` (string, 可选) — 创建者
  - `createTime` (string, 可选) — 创建时间
  - `updateBy` (string, 可选) — 更新者
  - `updateTime` (string, 可选) — 更新时间
  - `remark` (string, 可选) — 备注
  - `params` (object, 可选) — 请求参数
  - `key` (object, 可选)
  - `brand` (string, 可选) — 品牌
  - `category` (string, 可选) — 型号
  - `operatorReqs` (object [], 可选) — 运营商集合
  - `createBy` (string, 可选) — 创建者
  - `createTime` (string, 可选) — 创建时间
  - `updateBy` (string, 可选) — 更新者
  - `updateTime` (string, 可选) — 更新时间
  - `remark` (string, 可选) — 备注
  - `params` (object, 可选) — 请求参数
  - `key` (object, 可选)
  - `netOperatorId` (string, 可选) — 运营商编号
  - `netOperator` (string, 可选) — 运营商
- 响应字段：`code`, `msg`, `data`, `totalCount`, `successCount`, `failedCount`, `totalDuration`, `results`, `deviceIp`, `success`, `message`, `duration` …

### device-network_put_social_mobile_network_bind
- 摘要：绑定网络
- `PUT /social/mobile-network/bind` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `id` (string, 可选) — 主键ID
  - `phones` (object [], 可选) — 节点信息集合
  - `phoneId` (string, 可选) — 节点id
  - `phoneIp` (string, 可选) — 节点地址
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-network_put_social_mobile_network_renew
- 摘要：续费网络配置
- `PUT /social/mobile-network/renew` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `id` (string, 可选) — 主键ID
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-network_put_social_mobile_network_unbind
- 摘要：解绑网络
- `PUT /social/mobile-network/unbind` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `id` (string, 可选) — 主键id
  - `assIds` (string [], 可选) — 关联编号集合
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### device-network_put_social_mobile_network_update
- 摘要：修改网络配置
- `PUT /social/mobile-network/update` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `id` (string, 可选) — 主键ID
  - `ip` (string, 可选) — IP地址
  - `area` (string, 可选) — 地区（如：北京、旧金山）
  - `nodeIp` (string, 可选) — 节点IP
  - `agreement` (string, 可选) — 协议类型（如HTTP/HTTPS、TCP/UDP）
  - `networkStatus` (string, 可选) — 网络状态 BINDING(已绑定)/ARREARAGE(欠费)/LEISURE(空闲)/INVALID(无效)
  - `expirationTime` (string, 可选) — 过期时间
  - `networkLink` (string, 可选) — 网络链接URL
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

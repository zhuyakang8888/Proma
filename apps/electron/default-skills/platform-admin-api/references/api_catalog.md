# platform-admin-api 接口目录

> 业务域：平台后台管理（RuoYi /auth 认证/系统/监控 + 字典） · 来源：callfans-standard.md, callfans-platform.md · 共 147 个操作
> 本文件是 catalog 的人工可读版；机器可读单一真源见 `api_catalog.json`。

## 登录
- `auth_post_login`  POST `/auth/login`  →  返回 `token`，执行器自动处理，无需手工传 token。

## 操作一览

| operation_id | 方法 | 路由 | 路径 | 摘要 | 风险 |
| --- | --- | --- | --- | --- | --- |
| `admin_delete_auth_monitor_cache_clearcacheall` | DELETE | `/` | `/auth/monitor/cache/clearCacheAll` | 清空全部缓存 | destructive |
| `admin_delete_auth_monitor_cache_clearcachekey_cachekey` | DELETE | `/` | `/auth/monitor/cache/clearCacheKey/{cacheKey}` | 按缓存key清空缓存 | destructive |
| `admin_delete_auth_monitor_cache_clearcachename_cachename` | DELETE | `/` | `/auth/monitor/cache/clearCacheName/{cacheName}` | 按缓存名称清空缓存 | destructive |
| `admin_delete_auth_monitor_logininfor_clean` | DELETE | `/` | `/auth/monitor/logininfor/clean` | 清空登录日志 | destructive |
| `admin_delete_auth_monitor_logininfor_infoids` | DELETE | `/` | `/auth/monitor/logininfor/{infoIds}` | 删除登录日志 | destructive |
| `admin_delete_auth_monitor_online_tokenid` | DELETE | `/` | `/auth/monitor/online/{tokenId}` | 强退用户 | destructive |
| `admin_delete_auth_monitor_operlog_clean` | DELETE | `/` | `/auth/monitor/operlog/clean` | 清空操作日志 | destructive |
| `admin_delete_auth_monitor_operlog_operids` | DELETE | `/` | `/auth/monitor/operlog/{operIds}` | 删除操作日志 | destructive |
| `admin_delete_auth_system_app_appids` | DELETE | `/` | `/auth/system/app/{appIds}` | 删除应用信息 | destructive |
| `admin_delete_auth_system_config_configids` | DELETE | `/` | `/auth/system/config/{configIds}` | 删除参数配置 | destructive |
| `admin_delete_auth_system_config_refreshcache` | DELETE | `/` | `/auth/system/config/refreshCache` | 刷新参数缓存 | destructive |
| `admin_delete_auth_system_dept_deptid` | DELETE | `/` | `/auth/system/dept/{deptId}` | 删除部门 | destructive |
| `admin_delete_auth_system_dict_data_dictcodes` | DELETE | `/` | `/auth/system/dict/data/{dictCodes}` | 删除字典类型 | destructive |
| `admin_delete_auth_system_dict_type_dictids` | DELETE | `/` | `/auth/system/dict/type/{dictIds}` | 删除字典类型 | destructive |
| `admin_delete_auth_system_dict_type_refreshcache` | DELETE | `/` | `/auth/system/dict/type/refreshCache` | 刷新字典缓存 | destructive |
| `admin_delete_auth_system_menu_del` | DELETE | `/` | `/auth/system/menu/del` | 根据菜单来源 id 删除菜单 | destructive |
| `admin_delete_auth_system_menu_menuid` | DELETE | `/` | `/auth/system/menu/{menuId}` | 删除菜单 | destructive |
| `admin_delete_auth_system_notice_noticeids` | DELETE | `/` | `/auth/system/notice/{noticeIds}` | 删除通知公告 | destructive |
| `admin_delete_auth_system_post_postids` | DELETE | `/` | `/auth/system/post/{postIds}` | 删除岗位 | destructive |
| `admin_delete_auth_system_role_roleids` | DELETE | `/` | `/auth/system/role/{roleIds}` | 删除角色 | destructive |
| `admin_delete_auth_system_route_routeids` | DELETE | `/` | `/auth/system/route/{routeIds}` | 删除路由信息 | destructive |
| `admin_delete_auth_system_user_userids` | DELETE | `/` | `/auth/system/user/{userIds}` | 删除用户 | destructive |
| `admin_delete_auth_test_user_userid` | DELETE | `/` | `/auth/test/user/{userId}` | 删除用户 | destructive |
| `admin_get_auth` | GET | `/` | `/auth/` | 访问首页，提示语 | read |
| `admin_get_auth_captchaimage` | GET | `/` | `/auth/captchaImage` | 生成验证码 | read |
| `admin_get_auth_common_download` | GET | `/` | `/auth/common/download` | 通用下载请求 | read |
| `admin_get_auth_common_download_resource` | GET | `/` | `/auth/common/download/resource` | 本地资源通用下载 | read |
| `admin_get_auth_getinfo` | GET | `/` | `/auth/getInfo` | 获取用户信息 | read |
| `admin_get_auth_getmenubyuser` | GET | `/` | `/auth/getMenuByUser` | 获取当前用户菜单列表 | read |
| `admin_get_auth_monitor_cache` | GET | `/` | `/auth/monitor/cache` | 获取Redis缓存监控信息 | read |
| `admin_get_auth_monitor_cache_getkeys_cachename` | GET | `/` | `/auth/monitor/cache/getKeys/{cacheName}` | 获取指定缓存名称下的所有key | read |
| `admin_get_auth_monitor_cache_getnames` | GET | `/` | `/auth/monitor/cache/getNames` | 获取系统预置缓存名称列表 | read |
| `admin_get_auth_monitor_cache_getvalue_cachename_cachekey` | GET | `/` | `/auth/monitor/cache/getValue/{cacheName}/{cacheKey}` | 获取指定缓存的值 | read |
| `admin_get_auth_monitor_logininfor_list` | GET | `/` | `/auth/monitor/logininfor/list` | 查询登录日志列表 | read |
| `admin_get_auth_monitor_logininfor_unlock_username` | GET | `/` | `/auth/monitor/logininfor/unlock/{userName}` | 解锁账户（清理登录失败重试缓存） | read |
| `admin_get_auth_monitor_online_list` | GET | `/` | `/auth/monitor/online/list` | 查询在线用户列表 | read |
| `admin_get_auth_monitor_operlog_list` | GET | `/` | `/auth/monitor/operlog/list` | 查询操作日志列表 | read |
| `admin_get_auth_monitor_server` | GET | `/` | `/auth/monitor/server` | 获取服务器监控信息（CPU/内存/磁盘/JVM等） | read |
| `admin_get_auth_system_app_appid` | GET | `/` | `/auth/system/app/{appId}` | 根据应用ID获取应用信息详细信息 | read |
| `admin_get_auth_system_app_auth` | GET | `/` | `/auth/system/app/auth` | 根据应用名称获取应用信息详细信息 | read |
| `admin_get_auth_system_app_list` | GET | `/` | `/auth/system/app/list` | 查询应用信息列表 | read |
| `admin_get_auth_system_config_configid` | GET | `/` | `/auth/system/config/{configId}` | 根据参数编号获取详细信息 | read |
| `admin_get_auth_system_config_configkey_configkey` | GET | `/` | `/auth/system/config/configKey/{configKey}` | 根据参数键名查询参数值 | read |
| `admin_get_auth_system_config_list` | GET | `/` | `/auth/system/config/list` | 获取参数配置列表 | read |
| `admin_get_auth_system_dept_deptid` | GET | `/` | `/auth/system/dept/{deptId}` | 根据部门编号获取详细信息 | read |
| `admin_get_auth_system_dept_list` | GET | `/` | `/auth/system/dept/list` | 获取部门列表 | read |
| `admin_get_auth_system_dept_list_exclude_deptid` | GET | `/` | `/auth/system/dept/list/exclude/{deptId}` | 查询部门列表（排除节点） | read |
| `admin_get_auth_system_dict_data_dictcode` | GET | `/` | `/auth/system/dict/data/{dictCode}` | 查询字典数据详细 | read |
| `admin_get_auth_system_dict_data_list` | GET | `/` | `/auth/system/dict/data/list` | 查询字典数据列表 | read |
| `admin_get_auth_system_dict_data_type_dicttype` | GET | `/` | `/auth/system/dict/data/type/{dictType}` | 根据字典类型查询字典数据信息 | read |
| `admin_get_auth_system_dict_type_dictid` | GET | `/` | `/auth/system/dict/type/{dictId}` | 查询字典类型详细 | read |
| `admin_get_auth_system_dict_type_list` | GET | `/` | `/auth/system/dict/type/list` | 查询字典类型列表 | read |
| `admin_get_auth_system_dict_type_optionselect` | GET | `/` | `/auth/system/dict/type/optionselect` | 获取字典选择框列表 | read |
| `admin_get_auth_system_menu_appid_list` | GET | `/` | `/auth/system/menu/{appId}/list` | 根据应用 ID 获取菜单列表 | read |
| `admin_get_auth_system_menu_appid_tree` | GET | `/` | `/auth/system/menu/{appId}/tree` | 获取菜单树形结构 | read |
| `admin_get_auth_system_menu_gather` | GET | `/` | `/auth/system/menu/gather` | 查询菜单列表 没有token校验 | read |
| `admin_get_auth_system_menu_list` | GET | `/` | `/auth/system/menu/list` | 获取菜单列表 | read |
| `admin_get_auth_system_menu_list_originid` | GET | `/` | `/auth/system/menu/list/{originId}` | 根据来源 ID 查询菜单 | read |
| `admin_get_auth_system_menu_listunsafe` | GET | `/` | `/auth/system/menu/listUnSafe` | 获取菜单列表 - 无权限验证 | read |
| `admin_get_auth_system_menu_menuid` | GET | `/` | `/auth/system/menu/{menuId}` | 根据菜单编号获取详细信息 | read |
| `admin_get_auth_system_menu_rolemenutreeselect_roleid` | GET | `/` | `/auth/system/menu/roleMenuTreeselect/{roleId}` | 加载对应角色菜单列表树 | read |
| `admin_get_auth_system_menu_treeselect` | GET | `/` | `/auth/system/menu/treeselect` | 获取菜单下拉树列表 | read |
| `admin_get_auth_system_notice_list` | GET | `/` | `/auth/system/notice/list` | 获取通知公告列表 | read |
| `admin_get_auth_system_notice_noticeid` | GET | `/` | `/auth/system/notice/{noticeId}` | 根据通知公告编号获取详细信息 | read |
| `admin_get_auth_system_post_list` | GET | `/` | `/auth/system/post/list` | 获取岗位列表 | read |
| `admin_get_auth_system_post_optionselect` | GET | `/` | `/auth/system/post/optionselect` | 获取岗位选择框列表 | read |
| `admin_get_auth_system_post_postid` | GET | `/` | `/auth/system/post/{postId}` | 根据岗位编号获取详细信息 | read |
| `admin_get_auth_system_role_authuser_allocatedlist` | GET | `/` | `/auth/system/role/authUser/allocatedList` | 查询已分配用户角色列表 | read |
| `admin_get_auth_system_role_authuser_unallocatedlist` | GET | `/` | `/auth/system/role/authUser/unallocatedList` | 查询未分配用户角色列表 | read |
| `admin_get_auth_system_role_depttree_roleid` | GET | `/` | `/auth/system/role/deptTree/{roleId}` | 获取对应角色部门树列表 | read |
| `admin_get_auth_system_role_list` | GET | `/` | `/auth/system/role/list` | 查询角色列表 | read |
| `admin_get_auth_system_role_optionselect` | GET | `/` | `/auth/system/role/optionselect` | 获取角色选择框列表 | read |
| `admin_get_auth_system_role_roleid` | GET | `/` | `/auth/system/role/{roleId}` | 根据角色编号获取详细信息 | read |
| `admin_get_auth_system_route_info` | GET | `/` | `/auth/system/route/info` | 根据应用 ID 获取路由信息 | read |
| `admin_get_auth_system_route_list` | GET | `/` | `/auth/system/route/list` | 查询路由信息列表 | read |
| `admin_get_auth_system_route_routeid` | GET | `/` | `/auth/system/route/{routeId}` | 获取路由信息详细信息 | read |
| `admin_get_auth_system_user` | GET | `/` | `/auth/system/user/` | 根据用户编号获取详细信息 | read |
| `admin_get_auth_system_user_authrole_userid` | GET | `/` | `/auth/system/user/authRole/{userId}` | 根据用户编号获取授权角色 | read |
| `admin_get_auth_system_user_count` | GET | `/` | `/auth/system/user/count` | 查询用户总数和已使用的用户数量 | read |
| `admin_get_auth_system_user_depttree` | GET | `/` | `/auth/system/user/deptTree` | 获取部门树列表 | read |
| `admin_get_auth_system_user_list` | GET | `/` | `/auth/system/user/list` | 获取用户列表 | read |
| `admin_get_auth_system_user_profile` | GET | `/` | `/auth/system/user/profile` | 个人信息 | read |
| `admin_get_auth_test_user_list` | GET | `/` | `/auth/test/user/list` | 获取用户列表 | read |
| `admin_get_auth_test_user_userid` | GET | `/` | `/auth/test/user/{userId}` | 根据用户 ID 获取用户详情 | read |
| `admin_get_captchaimage` | GET | `/` | `/captchaImage` | 生成验证码 | read |
| `admin_get_dict_pull` | GET | `/platform` | `/dict/pull` | 获取字典，查询指定的字典及其子集 | read |
| `admin_get_dict_pull_0` | GET | `/platform` | `/dict/pull/0` | 获取字典，查询全部0级的字典，包含子集 | read |
| `admin_get_dict_pull_array` | GET | `/platform` | `/dict/pull-array` | 获取字典，查询指定的字典及其子集（数组形式） | read |
| `admin_get_social_dict_pull` | GET | `/` | `/social/dict/pull` | 获取字典，查询指定的字典及其子集 | read |
| `admin_get_social_dict_pull_0` | GET | `/` | `/social/dict/pull/0` | 获取字典，查询全部0级的字典，包含子集 | read |
| `admin_get_social_dict_pull_array` | GET | `/` | `/social/dict/pull-array` | 获取字典，查询指定的字典及其子集 | read |
| `admin_get_ws_broadcast` | GET | `/` | `/ws/broadcast` | 广播一条消息给所有在线 WS 客户端。 | read |
| `admin_post_auth_app_login` | POST | `/` | `/auth/app/login` | 应用登录 | write |
| `admin_post_auth_common_upload` | POST | `/` | `/auth/common/upload` | 通用上传请求（单个） | write |
| `admin_post_auth_common_uploads` | POST | `/` | `/auth/common/uploads` | 通用上传请求（多个） | write |
| `admin_post_auth_login` | POST | `/` | `/auth/login` | 用户登录 | write |
| `admin_post_auth_monitor_logininfor_export` | POST | `/` | `/auth/monitor/logininfor/export` | 导出登录日志 | read |
| `admin_post_auth_monitor_operlog_export` | POST | `/` | `/auth/monitor/operlog/export` | 导出操作日志 | read |
| `admin_post_auth_register` | POST | `/` | `/auth/register` | 用户注册 | write |
| `admin_post_auth_system_app` | POST | `/` | `/auth/system/app` | 新增应用信息 | write |
| `admin_post_auth_system_app_export` | POST | `/` | `/auth/system/app/export` | 导出应用信息列表 | read |
| `admin_post_auth_system_config` | POST | `/` | `/auth/system/config` | 新增参数配置 | write |
| `admin_post_auth_system_config_export` | POST | `/` | `/auth/system/config/export` | 导出参数配置 | read |
| `admin_post_auth_system_dept` | POST | `/` | `/auth/system/dept` | 新增部门 | write |
| `admin_post_auth_system_dict_data` | POST | `/` | `/auth/system/dict/data` | 新增字典类型 | write |
| `admin_post_auth_system_dict_data_export` | POST | `/` | `/auth/system/dict/data/export` | 导出字典数据 | read |
| `admin_post_auth_system_dict_type` | POST | `/` | `/auth/system/dict/type` | 新增字典类型 | write |
| `admin_post_auth_system_dict_type_export` | POST | `/` | `/auth/system/dict/type/export` | 导出字典类型列表 | read |
| `admin_post_auth_system_menu` | POST | `/` | `/auth/system/menu` | 新增菜单 | write |
| `admin_post_auth_system_menu_addbatch` | POST | `/` | `/auth/system/menu/addBatch` | 批量新增菜单 | write |
| `admin_post_auth_system_notice` | POST | `/` | `/auth/system/notice` | 新增通知公告 | write |
| `admin_post_auth_system_post` | POST | `/` | `/auth/system/post` | 新增岗位 | write |
| `admin_post_auth_system_post_export` | POST | `/` | `/auth/system/post/export` | 导出岗位数据 | read |
| `admin_post_auth_system_role` | POST | `/` | `/auth/system/role` | 新增角色 | write |
| `admin_post_auth_system_role_export` | POST | `/` | `/auth/system/role/export` | 导出角色数据 | read |
| `admin_post_auth_system_route` | POST | `/` | `/auth/system/route` | 新增路由信息 | write |
| `admin_post_auth_system_route_export` | POST | `/` | `/auth/system/route/export` | 导出路由信息列表 | read |
| `admin_post_auth_system_user` | POST | `/` | `/auth/system/user` | 新增用户 | write |
| `admin_post_auth_system_user_export` | POST | `/` | `/auth/system/user/export` | 导出用户数据 | read |
| `admin_post_auth_system_user_importdata` | POST | `/` | `/auth/system/user/importData` | 导入用户数据 | write |
| `admin_post_auth_system_user_importtemplate` | POST | `/` | `/auth/system/user/importTemplate` | 下载用户导入模板 | read |
| `admin_post_auth_system_user_mix_list` | POST | `/` | `/auth/system/user/mix_list` | 分页查询用户列表 | read |
| `admin_post_auth_system_user_profile_avatar` | POST | `/` | `/auth/system/user/profile/avatar` | 头像上传 | write |
| `admin_post_auth_test_user_save` | POST | `/` | `/auth/test/user/save` | 新增用户 | read |
| `admin_put_auth_system_app` | PUT | `/` | `/auth/system/app` | 修改应用信息 | write |
| `admin_put_auth_system_config` | PUT | `/` | `/auth/system/config` | 修改参数配置 | write |
| `admin_put_auth_system_dept` | PUT | `/` | `/auth/system/dept` | 修改部门 | write |
| `admin_put_auth_system_dict_data` | PUT | `/` | `/auth/system/dict/data` | 修改保存字典类型 | write |
| `admin_put_auth_system_dict_type` | PUT | `/` | `/auth/system/dict/type` | 修改字典类型 | write |
| `admin_put_auth_system_menu` | PUT | `/` | `/auth/system/menu` | 修改菜单 | write |
| `admin_put_auth_system_menu_update` | PUT | `/` | `/auth/system/menu/update` | 根据菜单来源 id 修改菜单 | write |
| `admin_put_auth_system_notice` | PUT | `/` | `/auth/system/notice` | 修改通知公告 | write |
| `admin_put_auth_system_post` | PUT | `/` | `/auth/system/post` | 修改岗位 | write |
| `admin_put_auth_system_role` | PUT | `/` | `/auth/system/role` | 修改保存角色 | write |
| `admin_put_auth_system_role_authuser_cancel` | PUT | `/` | `/auth/system/role/authUser/cancel` | 取消授权用户 | write |
| `admin_put_auth_system_role_authuser_cancelall` | PUT | `/` | `/auth/system/role/authUser/cancelAll` | 批量取消授权用户 | write |
| `admin_put_auth_system_role_authuser_selectall` | PUT | `/` | `/auth/system/role/authUser/selectAll` | 批量选择用户授权 | write |
| `admin_put_auth_system_role_changestatus` | PUT | `/` | `/auth/system/role/changeStatus` | 状态修改 | write |
| `admin_put_auth_system_role_datascope` | PUT | `/` | `/auth/system/role/dataScope` | 修改保存数据权限 | write |
| `admin_put_auth_system_route` | PUT | `/` | `/auth/system/route` | 修改路由信息 | write |
| `admin_put_auth_system_user` | PUT | `/` | `/auth/system/user` | 修改用户 | write |
| `admin_put_auth_system_user_authrole` | PUT | `/` | `/auth/system/user/authRole` | 用户授权角色 | write |
| `admin_put_auth_system_user_changestatus` | PUT | `/` | `/auth/system/user/changeStatus` | 状态修改 | write |
| `admin_put_auth_system_user_profile` | PUT | `/` | `/auth/system/user/profile` | 修改用户个人信息 | write |
| `admin_put_auth_system_user_profile_updatepwd` | PUT | `/` | `/auth/system/user/profile/updatePwd` | 重置密码 | write |
| `admin_put_auth_system_user_resetpwd` | PUT | `/` | `/auth/system/user/resetPwd` | 重置密码 | write |
| `admin_put_auth_test_user_update` | PUT | `/` | `/auth/test/user/update` | 更新用户 | read |

## 操作详情
### admin_delete_auth_monitor_cache_clearcacheall
- 摘要：清空全部缓存
- `DELETE /auth/monitor/cache/clearCacheAll` · 风险：destructive · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_delete_auth_monitor_cache_clearcachekey_cachekey
- 摘要：按缓存key清空缓存
- `DELETE /auth/monitor/cache/clearCacheKey/{cacheKey}` · 风险：destructive · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_delete_auth_monitor_cache_clearcachename_cachename
- 摘要：按缓存名称清空缓存
- `DELETE /auth/monitor/cache/clearCacheName/{cacheName}` · 风险：destructive · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_delete_auth_monitor_logininfor_clean
- 摘要：清空登录日志
- `DELETE /auth/monitor/logininfor/clean` · 风险：destructive · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_delete_auth_monitor_logininfor_infoids
- 摘要：删除登录日志
- `DELETE /auth/monitor/logininfor/{infoIds}` · 风险：destructive · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_delete_auth_monitor_online_tokenid
- 摘要：强退用户
- `DELETE /auth/monitor/online/{tokenId}` · 风险：destructive · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_delete_auth_monitor_operlog_clean
- 摘要：清空操作日志
- `DELETE /auth/monitor/operlog/clean` · 风险：destructive · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_delete_auth_monitor_operlog_operids
- 摘要：删除操作日志
- `DELETE /auth/monitor/operlog/{operIds}` · 风险：destructive · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_delete_auth_system_app_appids
- 摘要：删除应用信息
- `DELETE /auth/system/app/{appIds}` · 风险：destructive · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_delete_auth_system_config_configids
- 摘要：删除参数配置
- `DELETE /auth/system/config/{configIds}` · 风险：destructive · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_delete_auth_system_config_refreshcache
- 摘要：刷新参数缓存
- `DELETE /auth/system/config/refreshCache` · 风险：destructive · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_delete_auth_system_dept_deptid
- 摘要：删除部门
- `DELETE /auth/system/dept/{deptId}` · 风险：destructive · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_delete_auth_system_dict_data_dictcodes
- 摘要：删除字典类型
- `DELETE /auth/system/dict/data/{dictCodes}` · 风险：destructive · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_delete_auth_system_dict_type_dictids
- 摘要：删除字典类型
- `DELETE /auth/system/dict/type/{dictIds}` · 风险：destructive · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_delete_auth_system_dict_type_refreshcache
- 摘要：刷新字典缓存
- `DELETE /auth/system/dict/type/refreshCache` · 风险：destructive · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_delete_auth_system_menu_del
- 摘要：根据菜单来源 id 删除菜单
- `DELETE /auth/system/menu/del` · 风险：destructive · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `originIds` (string [], 可选)
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_delete_auth_system_menu_menuid
- 摘要：删除菜单
- `DELETE /auth/system/menu/{menuId}` · 风险：destructive · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_delete_auth_system_notice_noticeids
- 摘要：删除通知公告
- `DELETE /auth/system/notice/{noticeIds}` · 风险：destructive · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_delete_auth_system_post_postids
- 摘要：删除岗位
- `DELETE /auth/system/post/{postIds}` · 风险：destructive · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_delete_auth_system_role_roleids
- 摘要：删除角色
- `DELETE /auth/system/role/{roleIds}` · 风险：destructive · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_delete_auth_system_route_routeids
- 摘要：删除路由信息
- `DELETE /auth/system/route/{routeIds}` · 风险：destructive · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_delete_auth_system_user_userids
- 摘要：删除用户
- `DELETE /auth/system/user/{userIds}` · 风险：destructive · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_delete_auth_test_user_userid
- 摘要：删除用户
- `DELETE /auth/test/user/{userId}` · 风险：destructive · 鉴权：required
- 响应字段：`code`, `msg`, `data`

### admin_get_auth
- 摘要：访问首页，提示语
- `GET /auth/` · 风险：read · 鉴权：required

### admin_get_auth_captchaimage
- 摘要：生成验证码
- `GET /auth/captchaImage` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`, `captchaEnabled`, `uuid`, `img`

### admin_get_auth_common_download
- 摘要：通用下载请求
- `GET /auth/common/download` · 风险：read · 鉴权：required

### admin_get_auth_common_download_resource
- 摘要：本地资源通用下载
- `GET /auth/common/download/resource` · 风险：read · 鉴权：required

### admin_get_auth_getinfo
- 摘要：获取用户信息
- `GET /auth/getInfo` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`, `user`, `createBy`, `createTime`, `updateBy`, `updateTime`, `remark`, `params` …

### admin_get_auth_getmenubyuser
- 摘要：获取当前用户菜单列表
- `GET /auth/getMenuByUser` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `name`, `path`, `hidden`, `redirect`, `component`, `query`, `alwaysShow`, `meta`, `title` …

### admin_get_auth_monitor_cache
- 摘要：获取Redis缓存监控信息
- `GET /auth/monitor/cache` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_get_auth_monitor_cache_getkeys_cachename
- 摘要：获取指定缓存名称下的所有key
- `GET /auth/monitor/cache/getKeys/{cacheName}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_get_auth_monitor_cache_getnames
- 摘要：获取系统预置缓存名称列表
- `GET /auth/monitor/cache/getNames` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_get_auth_monitor_cache_getvalue_cachename_cachekey
- 摘要：获取指定缓存的值
- `GET /auth/monitor/cache/getValue/{cacheName}/{cacheKey}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_get_auth_monitor_logininfor_list
- 摘要：查询登录日志列表
- `GET /auth/monitor/logininfor/list` · 风险：read · 鉴权：required
- 响应字段：`total`, `rows`, `createBy`, `createTime`, `updateBy`, `updateTime`, `remark`, `params`, `key`, `infoId`, `userName`, `status` …

### admin_get_auth_monitor_logininfor_unlock_username
- 摘要：解锁账户（清理登录失败重试缓存）
- `GET /auth/monitor/logininfor/unlock/{userName}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_get_auth_monitor_online_list
- 摘要：查询在线用户列表
- `GET /auth/monitor/online/list` · 风险：read · 鉴权：required
- 响应字段：`total`, `rows`, `tokenId`, `deptName`, `userName`, `ipaddr`, `loginLocation`, `browser`, `os`, `loginTime`, `code`, `msg`

### admin_get_auth_monitor_operlog_list
- 摘要：查询操作日志列表
- `GET /auth/monitor/operlog/list` · 风险：read · 鉴权：required
- 响应字段：`total`, `rows`, `createBy`, `createTime`, `updateBy`, `updateTime`, `remark`, `params`, `key`, `operId`, `title`, `businessType` …

### admin_get_auth_monitor_server
- 摘要：获取服务器监控信息（CPU/内存/磁盘/JVM等）
- `GET /auth/monitor/server` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_get_auth_system_app_appid
- 摘要：根据应用ID获取应用信息详细信息
- `GET /auth/system/app/{appId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_get_auth_system_app_auth
- 摘要：根据应用名称获取应用信息详细信息
- `GET /auth/system/app/auth` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_get_auth_system_app_list
- 摘要：查询应用信息列表
- `GET /auth/system/app/list` · 风险：read · 鉴权：required
- 响应字段：`total`, `rows`, `createBy`, `createTime`, `updateBy`, `updateTime`, `remark`, `params`, `key`, `appId`, `appName`, `appSort` …

### admin_get_auth_system_config_configid
- 摘要：根据参数编号获取详细信息
- `GET /auth/system/config/{configId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_get_auth_system_config_configkey_configkey
- 摘要：根据参数键名查询参数值
- `GET /auth/system/config/configKey/{configKey}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_get_auth_system_config_list
- 摘要：获取参数配置列表
- `GET /auth/system/config/list` · 风险：read · 鉴权：required
- 响应字段：`total`, `rows`, `createBy`, `createTime`, `updateBy`, `updateTime`, `remark`, `params`, `key`, `configId`, `configName`, `configKey` …

### admin_get_auth_system_dept_deptid
- 摘要：根据部门编号获取详细信息
- `GET /auth/system/dept/{deptId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_get_auth_system_dept_list
- 摘要：获取部门列表
- `GET /auth/system/dept/list` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_get_auth_system_dept_list_exclude_deptid
- 摘要：查询部门列表（排除节点）
- `GET /auth/system/dept/list/exclude/{deptId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_get_auth_system_dict_data_dictcode
- 摘要：查询字典数据详细
- `GET /auth/system/dict/data/{dictCode}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_get_auth_system_dict_data_list
- 摘要：查询字典数据列表
- `GET /auth/system/dict/data/list` · 风险：read · 鉴权：required
- 响应字段：`total`, `rows`, `createBy`, `createTime`, `updateBy`, `updateTime`, `remark`, `params`, `key`, `dictCode`, `dictSort`, `dictLabel` …

### admin_get_auth_system_dict_data_type_dicttype
- 摘要：根据字典类型查询字典数据信息
- `GET /auth/system/dict/data/type/{dictType}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_get_auth_system_dict_type_dictid
- 摘要：查询字典类型详细
- `GET /auth/system/dict/type/{dictId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_get_auth_system_dict_type_list
- 摘要：查询字典类型列表
- `GET /auth/system/dict/type/list` · 风险：read · 鉴权：required
- 响应字段：`total`, `rows`, `createBy`, `createTime`, `updateBy`, `updateTime`, `remark`, `params`, `key`, `dictId`, `dictName`, `dictType` …

### admin_get_auth_system_dict_type_optionselect
- 摘要：获取字典选择框列表
- `GET /auth/system/dict/type/optionselect` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_get_auth_system_menu_appid_list
- 摘要：根据应用 ID 获取菜单列表
- `GET /auth/system/menu/{appId}/list` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_get_auth_system_menu_appid_tree
- 摘要：获取菜单树形结构
- `GET /auth/system/menu/{appId}/tree` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_get_auth_system_menu_gather
- 摘要：查询菜单列表 没有token校验
- `GET /auth/system/menu/gather` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_get_auth_system_menu_list
- 摘要：获取菜单列表
- `GET /auth/system/menu/list` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_get_auth_system_menu_list_originid
- 摘要：根据来源 ID 查询菜单
- `GET /auth/system/menu/list/{originId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_get_auth_system_menu_listunsafe
- 摘要：获取菜单列表 - 无权限验证
- `GET /auth/system/menu/listUnSafe` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_get_auth_system_menu_menuid
- 摘要：根据菜单编号获取详细信息
- `GET /auth/system/menu/{menuId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_get_auth_system_menu_rolemenutreeselect_roleid
- 摘要：加载对应角色菜单列表树
- `GET /auth/system/menu/roleMenuTreeselect/{roleId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`, `checkedKeys`, `menus`, `id`, `label`, `type`, `children`, `id` …

### admin_get_auth_system_menu_treeselect
- 摘要：获取菜单下拉树列表
- `GET /auth/system/menu/treeselect` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_get_auth_system_notice_list
- 摘要：获取通知公告列表
- `GET /auth/system/notice/list` · 风险：read · 鉴权：required
- 响应字段：`total`, `rows`, `createBy`, `createTime`, `updateBy`, `updateTime`, `remark`, `params`, `key`, `noticeId`, `noticeTitle`, `noticeType` …

### admin_get_auth_system_notice_noticeid
- 摘要：根据通知公告编号获取详细信息
- `GET /auth/system/notice/{noticeId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_get_auth_system_post_list
- 摘要：获取岗位列表
- `GET /auth/system/post/list` · 风险：read · 鉴权：required
- 响应字段：`total`, `rows`, `createBy`, `createTime`, `updateBy`, `updateTime`, `remark`, `params`, `key`, `postId`, `postCode`, `postName` …

### admin_get_auth_system_post_optionselect
- 摘要：获取岗位选择框列表
- `GET /auth/system/post/optionselect` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_get_auth_system_post_postid
- 摘要：根据岗位编号获取详细信息
- `GET /auth/system/post/{postId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_get_auth_system_role_authuser_allocatedlist
- 摘要：查询已分配用户角色列表
- `GET /auth/system/role/authUser/allocatedList` · 风险：read · 鉴权：required
- 响应字段：`total`, `rows`, `createBy`, `createTime`, `updateBy`, `updateTime`, `remark`, `params`, `key`, `userId`, `deptId`, `userName` …

### admin_get_auth_system_role_authuser_unallocatedlist
- 摘要：查询未分配用户角色列表
- `GET /auth/system/role/authUser/unallocatedList` · 风险：read · 鉴权：required
- 响应字段：`total`, `rows`, `createBy`, `createTime`, `updateBy`, `updateTime`, `remark`, `params`, `key`, `userId`, `deptId`, `userName` …

### admin_get_auth_system_role_depttree_roleid
- 摘要：获取对应角色部门树列表
- `GET /auth/system/role/deptTree/{roleId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`, `checkedKeys`, `depts`, `id`, `label`, `type`, `children`, `id` …

### admin_get_auth_system_role_list
- 摘要：查询角色列表
- `GET /auth/system/role/list` · 风险：read · 鉴权：required
- 响应字段：`total`, `rows`, `createBy`, `createTime`, `updateBy`, `updateTime`, `remark`, `params`, `key`, `roleId`, `roleName`, `roleKey` …

### admin_get_auth_system_role_optionselect
- 摘要：获取角色选择框列表
- `GET /auth/system/role/optionselect` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_get_auth_system_role_roleid
- 摘要：根据角色编号获取详细信息
- `GET /auth/system/role/{roleId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_get_auth_system_route_info
- 摘要：根据应用 ID 获取路由信息
- `GET /auth/system/route/info` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_get_auth_system_route_list
- 摘要：查询路由信息列表
- `GET /auth/system/route/list` · 风险：read · 鉴权：required
- 响应字段：`total`, `rows`, `createBy`, `createTime`, `updateBy`, `updateTime`, `remark`, `params`, `key`, `id`, `after`, `cookie` …

### admin_get_auth_system_route_routeid
- 摘要：获取路由信息详细信息
- `GET /auth/system/route/{routeId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_get_auth_system_user
- 摘要：根据用户编号获取详细信息
- `GET /auth/system/user/` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `createBy`, `createTime`, `updateBy`, `updateTime`, `remark`, `params`, `key`, `userId`, `deptId` …

### admin_get_auth_system_user_authrole_userid
- 摘要：根据用户编号获取授权角色
- `GET /auth/system/user/authRole/{userId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`, `user`, `createBy`, `createTime`, `updateBy`, `updateTime`, `remark`, `params` …

### admin_get_auth_system_user_count
- 摘要：查询用户总数和已使用的用户数量
- `GET /auth/system/user/count` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_get_auth_system_user_depttree
- 摘要：获取部门树列表
- `GET /auth/system/user/deptTree` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_get_auth_system_user_list
- 摘要：获取用户列表
- `GET /auth/system/user/list` · 风险：read · 鉴权：required
- 响应字段：`total`, `rows`, `createBy`, `createTime`, `updateBy`, `updateTime`, `remark`, `params`, `key`, `userId`, `deptId`, `userName` …

### admin_get_auth_system_user_profile
- 摘要：个人信息
- `GET /auth/system/user/profile` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `createBy`, `createTime`, `updateBy`, `updateTime`, `remark`, `params`, `key`, `userId`, `deptId` …

### admin_get_auth_test_user_list
- 摘要：获取用户列表
- `GET /auth/test/user/list` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `userId`, `username`, `password`, `mobile`

### admin_get_auth_test_user_userid
- 摘要：根据用户 ID 获取用户详情
- `GET /auth/test/user/{userId}` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `userId`, `username`, `password`, `mobile`

### admin_get_captchaimage
- 摘要：生成验证码
- `GET /captchaImage` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`, `captchaEnabled`, `uuid`, `img`

### admin_get_dict_pull
- 摘要：获取字典，查询指定的字典及其子集
- `GET /platform/dict/pull` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `name`, `content`, `group`, `groupContent`, `layer`, `level`, `mark`, `children`, `key` …

### admin_get_dict_pull_0
- 摘要：获取字典，查询全部0级的字典，包含子集
- `GET /platform/dict/pull/0` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `name`, `content`, `group`, `groupContent`, `layer`, `level`, `mark`, `children`, `key` …

### admin_get_dict_pull_array
- 摘要：获取字典，查询指定的字典及其子集（数组形式）
- `GET /platform/dict/pull-array` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `name`, `content`, `group`, `groupContent`, `layer`, `level`, `mark`, `children`, `name` …

### admin_get_social_dict_pull
- 摘要：获取字典，查询指定的字典及其子集
- `GET /social/dict/pull` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `name`, `content`, `group`, `groupContent`, `layer`, `level`, `mark`, `children`, `key` …

### admin_get_social_dict_pull_0
- 摘要：获取字典，查询全部0级的字典，包含子集
- `GET /social/dict/pull/0` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `key`, `name`, `content`, `group`, `groupContent`, `layer`, `level`, `mark`, `children` …

### admin_get_social_dict_pull_array
- 摘要：获取字典，查询指定的字典及其子集
- `GET /social/dict/pull-array` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_get_ws_broadcast
- 摘要：广播一条消息给所有在线 WS 客户端。
- `GET /ws/broadcast` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `key`, `licenseState`, `licenseExpireDate`

### admin_post_auth_app_login
- 摘要：应用登录
- `POST /auth/app/login` · 风险：write · 鉴权：required
- Header：
  - `App-Key` (?, 必填) — 应用 Key
  - `App-Secret` (?, 必填) — 应用密钥
  - `Content-Type` (?, 必填)
- Body：
  - `username` (string, 可选) — 用户名
  - `password` (string, 可选) — 用户密码
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`, `token`

### admin_post_auth_common_upload
- 摘要：通用上传请求（单个）
- `POST /auth/common/upload` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`, `url`, `fileName`, `newFileName`, `originalFilename`

### admin_post_auth_common_uploads
- 摘要：通用上传请求（多个）
- `POST /auth/common/uploads` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`, `urls`, `fileNames`, `newFileNames`, `originalFilenames`

### admin_post_auth_login
- 摘要：用户登录
- `POST /auth/login` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `username` (string, 可选) — 用户名
  - `password` (string, 可选) — 用户密码
  - `code` (string, 可选) — 验证码
  - `uuid` (string, 可选) — 唯一标识
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`, `token`

### admin_post_auth_monitor_logininfor_export
- 摘要：导出登录日志
- `POST /auth/monitor/logininfor/export` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)

### admin_post_auth_monitor_operlog_export
- 摘要：导出操作日志
- `POST /auth/monitor/operlog/export` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)

### admin_post_auth_register
- 摘要：用户注册
- `POST /auth/register` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `username` (string, 可选) — 用户名
  - `password` (string, 可选) — 用户密码
  - `code` (string, 可选) — 验证码
  - `uuid` (string, 可选) — 唯一标识
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_post_auth_system_app
- 摘要：新增应用信息
- `POST /auth/system/app` · 风险：write · 鉴权：required
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
  - `appId` (integer, 可选) — 应用ID
  - `appName` (string, 可选) — 应用名称
  - `appSort` (integer, 可选) — 显示顺序
  - `status` (string, 可选) — 状态（0正常 1停用）
  - `appKey` (string, 可选) — app key
  - `appSecret` (string, 可选) — app secret
  - `trustedIp` (string, 可选) — trustedIp 地址
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_post_auth_system_app_export
- 摘要：导出应用信息列表
- `POST /auth/system/app/export` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)

### admin_post_auth_system_config
- 摘要：新增参数配置
- `POST /auth/system/config` · 风险：write · 鉴权：required
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
  - `configId` (integer, 可选) — 参数主键
  - `configName` (string, 可选) — 参数名称
  - `configKey` (string, 可选) — 参数键名
  - `configValue` (string, 可选) — 参数键值
  - `configType` (string, 可选) — 系统内置（Y是 N否）
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_post_auth_system_config_export
- 摘要：导出参数配置
- `POST /auth/system/config/export` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)

### admin_post_auth_system_dept
- 摘要：新增部门
- `POST /auth/system/dept` · 风险：write · 鉴权：required
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
  - `deptId` (integer, 可选) — 部门ID
  - `parentId` (integer, 可选) — 父部门ID
  - `ancestors` (string, 可选) — 祖级列表
  - `deptName` (string, 可选) — 部门名称
  - `orderNum` (integer, 可选) — 显示顺序
  - `leader` (string, 可选) — 负责人
  - `phone` (string, 可选) — 联系电话
  - `email` (string, 可选) — 邮箱
  - `status` (string, 可选) — 部门状态:0正常,1停用
  - `delFlag` (string, 可选) — 删除标志（0代表存在 2代表删除）
  - `parentName` (string, 可选) — 父部门名称
  - `children` (object [], 可选) — 子部门
  - `createBy` (string, 可选) — 创建者
  - `createTime` (string, 可选) — 创建时间
  - `updateBy` (string, 可选) — 更新者
  - `updateTime` (string, 可选) — 更新时间
  - `remark` (string, 可选) — 备注
  - `params` (object, 可选) — 请求参数
  - `key` (object, 可选)
  - `deptId` (integer, 可选) — 部门ID
  - `parentId` (integer, 可选) — 父部门ID
  - `ancestors` (string, 可选) — 祖级列表
  - `deptName` (string, 可选) — 部门名称
  - `orderNum` (integer, 可选) — 显示顺序
  - `leader` (string, 可选) — 负责人
  - `phone` (string, 可选) — 联系电话
  - `email` (string, 可选) — 邮箱
  - `status` (string, 可选) — 部门状态:0正常,1停用
  - `delFlag` (string, 可选) — 删除标志（0代表存在 2代表删除）
  - `parentName` (string, 可选) — 父部门名称
  - `children` (object [], 可选) — 子部门
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_post_auth_system_dict_data
- 摘要：新增字典类型
- `POST /auth/system/dict/data` · 风险：write · 鉴权：required
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
  - `dictCode` (integer, 可选) — 字典编码
  - `dictSort` (integer, 可选) — 字典排序
  - `dictLabel` (string, 可选) — 字典标签
  - `dictValue` (string, 可选) — 字典键值
  - `dictType` (string, 可选) — 字典类型
  - `cssClass` (string, 可选) — 样式属性（其他样式扩展）
  - `listClass` (string, 可选) — 表格字典样式
  - `isDefault` (string, 可选) — 是否默认（Y是 N否）
  - `status` (string, 可选) — 状态（0正常 1停用）
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_post_auth_system_dict_data_export
- 摘要：导出字典数据
- `POST /auth/system/dict/data/export` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)

### admin_post_auth_system_dict_type
- 摘要：新增字典类型
- `POST /auth/system/dict/type` · 风险：write · 鉴权：required
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
  - `dictId` (integer, 可选) — 字典主键
  - `dictName` (string, 可选) — 字典名称
  - `dictType` (string, 可选) — 字典类型
  - `status` (string, 可选) — 状态（0正常 1停用）
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_post_auth_system_dict_type_export
- 摘要：导出字典类型列表
- `POST /auth/system/dict/type/export` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)

### admin_post_auth_system_menu
- 摘要：新增菜单
- `POST /auth/system/menu` · 风险：write · 鉴权：required
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
  - `menuId` (integer, 可选) — 菜单ID
  - `menuName` (string, 可选) — 菜单名称
  - `menuNameZhTw` (string, 可选) — 菜单名称中文繁体
  - `menuNameEnUs` (string, 可选) — 菜单名称英文
  - `menuNameViVn` (string, 可选) — 菜单名称越南
  - `menuNameThTh` (string, 可选) — 菜单名称泰语
  - `parentName` (string, 可选) — 父菜单名称
  - `parentId` (integer, 可选) — 父菜单ID
  - `orderNum` (integer, 可选) — 显示顺序
  - `path` (string, 可选) — 路由地址
  - `component` (string, 可选) — 组件路径
  - `query` (string, 可选) — 路由参数
  - `isFrame` (string, 可选) — 是否为外链（0是 1否）
  - `isCache` (string, 可选) — 是否缓存（0缓存 1不缓存）
  - `menuType` (string, 可选) — 类型（M目录 C菜单 F按钮）
  - `visible` (string, 可选) — 显示状态（0显示 1隐藏）
  - `status` (string, 可选) — 菜单状态（0正常 1停用）
  - `perms` (string, 可选) — 权限字符串
  - `icon` (string, 可选) — 菜单图标
  - `appId` (integer, 可选) — 应用id
  - `meta` (object, 可选)
  - `originId` (string, 可选) — 应用id
  - `title` (string, 可选) — 应用名称
  - `originId` (string, 可选) — 菜单来源id
  - `children` (object [], 可选) — 子菜单
  - `createBy` (string, 可选) — 创建者
  - `createTime` (string, 可选) — 创建时间
  - `updateBy` (string, 可选) — 更新者
  - `updateTime` (string, 可选) — 更新时间
  - `remark` (string, 可选) — 备注
  - `params` (object, 可选) — 请求参数
  - `key` (object, 可选)
  - `menuId` (integer, 可选) — 菜单ID
  - `menuName` (string, 可选) — 菜单名称
  - `menuNameZhTw` (string, 可选) — 菜单名称中文繁体
  - `menuNameEnUs` (string, 可选) — 菜单名称英文
  - `menuNameViVn` (string, 可选) — 菜单名称越南
  - `menuNameThTh` (string, 可选) — 菜单名称泰语
  - `parentName` (string, 可选) — 父菜单名称
  - `parentId` (integer, 可选) — 父菜单ID
  - `orderNum` (integer, 可选) — 显示顺序
  - `path` (string, 可选) — 路由地址
  - `component` (string, 可选) — 组件路径
  - `query` (string, 可选) — 路由参数
  - `isFrame` (string, 可选) — 是否为外链（0是 1否）
  - `isCache` (string, 可选) — 是否缓存（0缓存 1不缓存）
  - `menuType` (string, 可选) — 类型（M目录 C菜单 F按钮）
  - `visible` (string, 可选) — 显示状态（0显示 1隐藏）
  - `status` (string, 可选) — 菜单状态（0正常 1停用）
  - `perms` (string, 可选) — 权限字符串
  - `icon` (string, 可选) — 菜单图标
  - `appId` (integer, 可选) — 应用id
  - `meta` (object, 可选)
  - `originId` (string, 可选) — 应用id
  - `title` (string, 可选) — 应用名称
  - `originId` (string, 可选) — 菜单来源id
  - `children` (object [], 可选) — 子菜单
  - `logoPath` (string, 可选) — logo路径
  - `logoPath` (string, 可选) — logo路径
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_post_auth_system_menu_addbatch
- 摘要：批量新增菜单
- `POST /auth/system/menu/addBatch` · 风险：write · 鉴权：required
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
  - `menuId` (integer, 可选) — 菜单ID
  - `menuName` (string, 可选) — 菜单名称
  - `menuNameZhTw` (string, 可选) — 菜单名称中文繁体
  - `menuNameEnUs` (string, 可选) — 菜单名称英文
  - `menuNameViVn` (string, 可选) — 菜单名称越南
  - `menuNameThTh` (string, 可选) — 菜单名称泰语
  - `parentName` (string, 可选) — 父菜单名称
  - `parentId` (integer, 可选) — 父菜单ID
  - `orderNum` (integer, 可选) — 显示顺序
  - `path` (string, 可选) — 路由地址
  - `component` (string, 可选) — 组件路径
  - `query` (string, 可选) — 路由参数
  - `isFrame` (string, 可选) — 是否为外链（0是 1否）
  - `isCache` (string, 可选) — 是否缓存（0缓存 1不缓存）
  - `menuType` (string, 可选) — 类型（M目录 C菜单 F按钮）
  - `visible` (string, 可选) — 显示状态（0显示 1隐藏）
  - `status` (string, 可选) — 菜单状态（0正常 1停用）
  - `perms` (string, 可选) — 权限字符串
  - `icon` (string, 可选) — 菜单图标
  - `appId` (integer, 可选) — 应用id
  - `meta` (object, 可选)
  - `originId` (string, 可选) — 应用id
  - `title` (string, 可选) — 应用名称
  - `originId` (string, 可选) — 菜单来源id
  - `children` (object [], 可选) — 子菜单
  - `logoPath` (string, 可选) — logo路径
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_post_auth_system_notice
- 摘要：新增通知公告
- `POST /auth/system/notice` · 风险：write · 鉴权：required
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
  - `noticeId` (integer, 可选) — 公告ID
  - `noticeTitle` (string, 可选) — 公告标题
  - `noticeType` (string, 可选) — 公告类型（1通知 2公告）
  - `noticeContent` (string, 可选) — 公告内容
  - `status` (string, 可选) — 公告状态（0正常 1关闭）
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_post_auth_system_post
- 摘要：新增岗位
- `POST /auth/system/post` · 风险：write · 鉴权：required
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
  - `postId` (integer, 可选) — 岗位序号
  - `postCode` (string, 可选) — 岗位编码
  - `postName` (string, 可选) — 岗位名称
  - `postSort` (integer, 可选) — 岗位排序
  - `status` (string, 可选) — 状态（0正常 1停用）
  - `flag` (boolean, 可选) — 用户是否存在此岗位标识 默认不存在
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_post_auth_system_post_export
- 摘要：导出岗位数据
- `POST /auth/system/post/export` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)

### admin_post_auth_system_role
- 摘要：新增角色
- `POST /auth/system/role` · 风险：write · 鉴权：required
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
  - `roleId` (integer, 可选) — 角色ID
  - `roleName` (string, 可选) — 角色名称
  - `roleKey` (string, 可选) — 角色权限
  - `roleSort` (integer, 可选) — 角色排序
  - `dataScope` (string, 可选) — 数据范围（1：所有数据权限；2：自定义数据权限；3：本部门数据权限；4：本部门及以下数据权限；5：仅本人数据权限）
  - `menuCheckStrictly` (boolean, 可选) — 菜单树选择项是否关联显示（ 0：父子不互相关联显示 1：父子互相关联显示）
  - `deptCheckStrictly` (boolean, 可选) — 部门树选择项是否关联显示（0：父子不互相关联显示 1：父子互相关联显示 ）
  - `status` (string, 可选) — 角色状态（0正常 1停用）
  - `delFlag` (string, 可选) — 删除标志（0代表存在 2代表删除）
  - `flag` (boolean, 可选) — 用户是否存在此角色标识 默认不存在
  - `menuIds` (integer [], 可选) — 菜单组
  - `deptIds` (integer [], 可选) — 部门组（数据权限）
  - `permissions` (string [], 可选) — 角色菜单权限
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_post_auth_system_role_export
- 摘要：导出角色数据
- `POST /auth/system/role/export` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)

### admin_post_auth_system_route
- 摘要：新增路由信息
- `POST /auth/system/route` · 风险：write · 鉴权：required
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
  - `id` (integer, 可选)
  - `after` (string, 可选) — 匹配时间
  - `cookie` (string, 可选) — 匹配 cookie， 多个用英文逗号隔开
  - `header` (string, 可选) — 匹配 header
  - `host` (string, 可选) — 匹配主机名，多个用英文逗号隔开
  - `method` (string, 可选) — 匹配请求方式，多个用英文逗号隔开
  - `query` (string, 可选) — 匹配 query
  - `remoteAddr` (string, 可选) — 匹配IP地址和子网掩码
  - `weight` (string, 可选) — 匹配权重
  - `path` (string, 可选) — 匹配路径
  - `uri` (string, 可选) — 转发地址
  - `appId` (integer, 可选) — 应用id
  - `order` (integer, 可选)
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_post_auth_system_route_export
- 摘要：导出路由信息列表
- `POST /auth/system/route/export` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)

### admin_post_auth_system_user
- 摘要：新增用户
- `POST /auth/system/user` · 风险：write · 鉴权：required
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
  - `userId` (integer, 可选) — 用户ID
  - `deptId` (integer, 可选) — 部门ID
  - `userName` (string, 可选) — 用户账号
  - `nickName` (string, 可选) — 用户昵称
  - `email` (string, 可选) — 用户邮箱
  - `phonenumber` (string, 可选) — 手机号码
  - `sex` (string, 可选) — 用户性别
  - `avatar` (string, 可选) — 用户头像
  - `password` (string, 可选) — 密码
  - `status` (string, 可选) — 帐号状态（0正常 1停用）
  - `delFlag` (string, 可选) — 删除标志（0代表存在 2代表删除）
  - `loginIp` (string, 可选) — 最后登录IP
  - `loginDate` (string, 可选) — 最后登录时间
  - `dept` (object, 可选) — 部门对象
  - `createBy` (string, 可选) — 创建者
  - `createTime` (string, 可选) — 创建时间
  - `updateBy` (string, 可选) — 更新者
  - `updateTime` (string, 可选) — 更新时间
  - `remark` (string, 可选) — 备注
  - `params` (object, 可选) — 请求参数
  - `key` (object, 可选)
  - `deptId` (integer, 可选) — 部门ID
  - `parentId` (integer, 可选) — 父部门ID
  - `ancestors` (string, 可选) — 祖级列表
  - `deptName` (string, 可选) — 部门名称
  - `orderNum` (integer, 可选) — 显示顺序
  - `leader` (string, 可选) — 负责人
  - `phone` (string, 可选) — 联系电话
  - `email` (string, 可选) — 邮箱
  - `status` (string, 可选) — 部门状态:0正常,1停用
  - `delFlag` (string, 可选) — 删除标志（0代表存在 2代表删除）
  - `parentName` (string, 可选) — 父部门名称
  - `children` (object [], 可选) — 子部门
  - `createBy` (string, 可选) — 创建者
  - `createTime` (string, 可选) — 创建时间
  - `updateBy` (string, 可选) — 更新者
  - `updateTime` (string, 可选) — 更新时间
  - `remark` (string, 可选) — 备注
  - `params` (object, 可选) — 请求参数
  - `key` (object, 可选)
  - `deptId` (integer, 可选) — 部门ID
  - `parentId` (integer, 可选) — 父部门ID
  - `ancestors` (string, 可选) — 祖级列表
  - `deptName` (string, 可选) — 部门名称
  - `orderNum` (integer, 可选) — 显示顺序
  - `leader` (string, 可选) — 负责人
  - `phone` (string, 可选) — 联系电话
  - `email` (string, 可选) — 邮箱
  - `status` (string, 可选) — 部门状态:0正常,1停用
  - `delFlag` (string, 可选) — 删除标志（0代表存在 2代表删除）
  - `parentName` (string, 可选) — 父部门名称
  - `children` (object [], 可选) — 子部门
  - `roles` (object [], 可选) — 角色对象
  - `createBy` (string, 可选) — 创建者
  - `createTime` (string, 可选) — 创建时间
  - `updateBy` (string, 可选) — 更新者
  - `updateTime` (string, 可选) — 更新时间
  - `remark` (string, 可选) — 备注
  - `params` (object, 可选) — 请求参数
  - `key` (object, 可选)
  - `roleId` (integer, 可选) — 角色ID
  - `roleName` (string, 可选) — 角色名称
  - `roleKey` (string, 可选) — 角色权限
  - `roleSort` (integer, 可选) — 角色排序
  - `dataScope` (string, 可选) — 数据范围（1：所有数据权限；2：自定义数据权限；3：本部门数据权限；4：本部门及以下数据权限；5：仅本人数据权限）
  - `menuCheckStrictly` (boolean, 可选) — 菜单树选择项是否关联显示（ 0：父子不互相关联显示 1：父子互相关联显示）
  - `deptCheckStrictly` (boolean, 可选) — 部门树选择项是否关联显示（0：父子不互相关联显示 1：父子互相关联显示 ）
  - `status` (string, 可选) — 角色状态（0正常 1停用）
  - `delFlag` (string, 可选) — 删除标志（0代表存在 2代表删除）
  - `flag` (boolean, 可选) — 用户是否存在此角色标识 默认不存在
  - `menuIds` (integer [], 可选) — 菜单组
  - `deptIds` (integer [], 可选) — 部门组（数据权限）
  - `permissions` (string [], 可选) — 角色菜单权限
  - `roleIds` (integer [], 可选) — 角色组
  - `postIds` (integer [], 可选) — 岗位组
  - `roleId` (integer, 可选) — 角色ID
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_post_auth_system_user_export
- 摘要：导出用户数据
- `POST /auth/system/user/export` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)

### admin_post_auth_system_user_importdata
- 摘要：导入用户数据
- `POST /auth/system/user/importData` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_post_auth_system_user_importtemplate
- 摘要：下载用户导入模板
- `POST /auth/system/user/importTemplate` · 风险：read · 鉴权：required

### admin_post_auth_system_user_mix_list
- 摘要：分页查询用户列表
- `POST /auth/system/user/mix_list` · 风险：read · 鉴权：required
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
  - `userIds` (string [], 可选)
  - `keyword` (string, 可选)
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_post_auth_system_user_profile_avatar
- 摘要：头像上传
- `POST /auth/system/user/profile/avatar` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`, `imgUrl`

### admin_post_auth_test_user_save
- 摘要：新增用户
- `POST /auth/test/user/save` · 风险：read · 鉴权：required
- 响应字段：`code`, `msg`, `data`

### admin_put_auth_system_app
- 摘要：修改应用信息
- `PUT /auth/system/app` · 风险：write · 鉴权：required
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
  - `appId` (integer, 可选) — 应用ID
  - `appName` (string, 可选) — 应用名称
  - `appSort` (integer, 可选) — 显示顺序
  - `status` (string, 可选) — 状态（0正常 1停用）
  - `appKey` (string, 可选) — app key
  - `appSecret` (string, 可选) — app secret
  - `trustedIp` (string, 可选) — trustedIp 地址
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_put_auth_system_config
- 摘要：修改参数配置
- `PUT /auth/system/config` · 风险：write · 鉴权：required
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
  - `configId` (integer, 可选) — 参数主键
  - `configName` (string, 可选) — 参数名称
  - `configKey` (string, 可选) — 参数键名
  - `configValue` (string, 可选) — 参数键值
  - `configType` (string, 可选) — 系统内置（Y是 N否）
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_put_auth_system_dept
- 摘要：修改部门
- `PUT /auth/system/dept` · 风险：write · 鉴权：required
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
  - `deptId` (integer, 可选) — 部门ID
  - `parentId` (integer, 可选) — 父部门ID
  - `ancestors` (string, 可选) — 祖级列表
  - `deptName` (string, 可选) — 部门名称
  - `orderNum` (integer, 可选) — 显示顺序
  - `leader` (string, 可选) — 负责人
  - `phone` (string, 可选) — 联系电话
  - `email` (string, 可选) — 邮箱
  - `status` (string, 可选) — 部门状态:0正常,1停用
  - `delFlag` (string, 可选) — 删除标志（0代表存在 2代表删除）
  - `parentName` (string, 可选) — 父部门名称
  - `children` (object [], 可选) — 子部门
  - `createBy` (string, 可选) — 创建者
  - `createTime` (string, 可选) — 创建时间
  - `updateBy` (string, 可选) — 更新者
  - `updateTime` (string, 可选) — 更新时间
  - `remark` (string, 可选) — 备注
  - `params` (object, 可选) — 请求参数
  - `key` (object, 可选)
  - `deptId` (integer, 可选) — 部门ID
  - `parentId` (integer, 可选) — 父部门ID
  - `ancestors` (string, 可选) — 祖级列表
  - `deptName` (string, 可选) — 部门名称
  - `orderNum` (integer, 可选) — 显示顺序
  - `leader` (string, 可选) — 负责人
  - `phone` (string, 可选) — 联系电话
  - `email` (string, 可选) — 邮箱
  - `status` (string, 可选) — 部门状态:0正常,1停用
  - `delFlag` (string, 可选) — 删除标志（0代表存在 2代表删除）
  - `parentName` (string, 可选) — 父部门名称
  - `children` (object [], 可选) — 子部门
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_put_auth_system_dict_data
- 摘要：修改保存字典类型
- `PUT /auth/system/dict/data` · 风险：write · 鉴权：required
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
  - `dictCode` (integer, 可选) — 字典编码
  - `dictSort` (integer, 可选) — 字典排序
  - `dictLabel` (string, 可选) — 字典标签
  - `dictValue` (string, 可选) — 字典键值
  - `dictType` (string, 可选) — 字典类型
  - `cssClass` (string, 可选) — 样式属性（其他样式扩展）
  - `listClass` (string, 可选) — 表格字典样式
  - `isDefault` (string, 可选) — 是否默认（Y是 N否）
  - `status` (string, 可选) — 状态（0正常 1停用）
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_put_auth_system_dict_type
- 摘要：修改字典类型
- `PUT /auth/system/dict/type` · 风险：write · 鉴权：required
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
  - `dictId` (integer, 可选) — 字典主键
  - `dictName` (string, 可选) — 字典名称
  - `dictType` (string, 可选) — 字典类型
  - `status` (string, 可选) — 状态（0正常 1停用）
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_put_auth_system_menu
- 摘要：修改菜单
- `PUT /auth/system/menu` · 风险：write · 鉴权：required
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
  - `menuId` (integer, 可选) — 菜单ID
  - `menuName` (string, 可选) — 菜单名称
  - `menuNameZhTw` (string, 可选) — 菜单名称中文繁体
  - `menuNameEnUs` (string, 可选) — 菜单名称英文
  - `menuNameViVn` (string, 可选) — 菜单名称越南
  - `menuNameThTh` (string, 可选) — 菜单名称泰语
  - `parentName` (string, 可选) — 父菜单名称
  - `parentId` (integer, 可选) — 父菜单ID
  - `orderNum` (integer, 可选) — 显示顺序
  - `path` (string, 可选) — 路由地址
  - `component` (string, 可选) — 组件路径
  - `query` (string, 可选) — 路由参数
  - `isFrame` (string, 可选) — 是否为外链（0是 1否）
  - `isCache` (string, 可选) — 是否缓存（0缓存 1不缓存）
  - `menuType` (string, 可选) — 类型（M目录 C菜单 F按钮）
  - `visible` (string, 可选) — 显示状态（0显示 1隐藏）
  - `status` (string, 可选) — 菜单状态（0正常 1停用）
  - `perms` (string, 可选) — 权限字符串
  - `icon` (string, 可选) — 菜单图标
  - `appId` (integer, 可选) — 应用id
  - `meta` (object, 可选)
  - `originId` (string, 可选) — 应用id
  - `title` (string, 可选) — 应用名称
  - `originId` (string, 可选) — 菜单来源id
  - `children` (object [], 可选) — 子菜单
  - `createBy` (string, 可选) — 创建者
  - `createTime` (string, 可选) — 创建时间
  - `updateBy` (string, 可选) — 更新者
  - `updateTime` (string, 可选) — 更新时间
  - `remark` (string, 可选) — 备注
  - `params` (object, 可选) — 请求参数
  - `key` (object, 可选)
  - `menuId` (integer, 可选) — 菜单ID
  - `menuName` (string, 可选) — 菜单名称
  - `menuNameZhTw` (string, 可选) — 菜单名称中文繁体
  - `menuNameEnUs` (string, 可选) — 菜单名称英文
  - `menuNameViVn` (string, 可选) — 菜单名称越南
  - `menuNameThTh` (string, 可选) — 菜单名称泰语
  - `parentName` (string, 可选) — 父菜单名称
  - `parentId` (integer, 可选) — 父菜单ID
  - `orderNum` (integer, 可选) — 显示顺序
  - `path` (string, 可选) — 路由地址
  - `component` (string, 可选) — 组件路径
  - `query` (string, 可选) — 路由参数
  - `isFrame` (string, 可选) — 是否为外链（0是 1否）
  - `isCache` (string, 可选) — 是否缓存（0缓存 1不缓存）
  - `menuType` (string, 可选) — 类型（M目录 C菜单 F按钮）
  - `visible` (string, 可选) — 显示状态（0显示 1隐藏）
  - `status` (string, 可选) — 菜单状态（0正常 1停用）
  - `perms` (string, 可选) — 权限字符串
  - `icon` (string, 可选) — 菜单图标
  - `appId` (integer, 可选) — 应用id
  - `meta` (object, 可选)
  - `originId` (string, 可选) — 应用id
  - `title` (string, 可选) — 应用名称
  - `originId` (string, 可选) — 菜单来源id
  - `children` (object [], 可选) — 子菜单
  - `logoPath` (string, 可选) — logo路径
  - `logoPath` (string, 可选) — logo路径
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_put_auth_system_menu_update
- 摘要：根据菜单来源 id 修改菜单
- `PUT /auth/system/menu/update` · 风险：write · 鉴权：required
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
  - `menuId` (integer, 可选) — 菜单ID
  - `menuName` (string, 可选) — 菜单名称
  - `menuNameZhTw` (string, 可选) — 菜单名称中文繁体
  - `menuNameEnUs` (string, 可选) — 菜单名称英文
  - `menuNameViVn` (string, 可选) — 菜单名称越南
  - `menuNameThTh` (string, 可选) — 菜单名称泰语
  - `parentName` (string, 可选) — 父菜单名称
  - `parentId` (integer, 可选) — 父菜单ID
  - `orderNum` (integer, 可选) — 显示顺序
  - `path` (string, 可选) — 路由地址
  - `component` (string, 可选) — 组件路径
  - `query` (string, 可选) — 路由参数
  - `isFrame` (string, 可选) — 是否为外链（0是 1否）
  - `isCache` (string, 可选) — 是否缓存（0缓存 1不缓存）
  - `menuType` (string, 可选) — 类型（M目录 C菜单 F按钮）
  - `visible` (string, 可选) — 显示状态（0显示 1隐藏）
  - `status` (string, 可选) — 菜单状态（0正常 1停用）
  - `perms` (string, 可选) — 权限字符串
  - `icon` (string, 可选) — 菜单图标
  - `appId` (integer, 可选) — 应用id
  - `meta` (object, 可选)
  - `originId` (string, 可选) — 应用id
  - `title` (string, 可选) — 应用名称
  - `originId` (string, 可选) — 菜单来源id
  - `children` (object [], 可选) — 子菜单
  - `createBy` (string, 可选) — 创建者
  - `createTime` (string, 可选) — 创建时间
  - `updateBy` (string, 可选) — 更新者
  - `updateTime` (string, 可选) — 更新时间
  - `remark` (string, 可选) — 备注
  - `params` (object, 可选) — 请求参数
  - `key` (object, 可选)
  - `menuId` (integer, 可选) — 菜单ID
  - `menuName` (string, 可选) — 菜单名称
  - `menuNameZhTw` (string, 可选) — 菜单名称中文繁体
  - `menuNameEnUs` (string, 可选) — 菜单名称英文
  - `menuNameViVn` (string, 可选) — 菜单名称越南
  - `menuNameThTh` (string, 可选) — 菜单名称泰语
  - `parentName` (string, 可选) — 父菜单名称
  - `parentId` (integer, 可选) — 父菜单ID
  - `orderNum` (integer, 可选) — 显示顺序
  - `path` (string, 可选) — 路由地址
  - `component` (string, 可选) — 组件路径
  - `query` (string, 可选) — 路由参数
  - `isFrame` (string, 可选) — 是否为外链（0是 1否）
  - `isCache` (string, 可选) — 是否缓存（0缓存 1不缓存）
  - `menuType` (string, 可选) — 类型（M目录 C菜单 F按钮）
  - `visible` (string, 可选) — 显示状态（0显示 1隐藏）
  - `status` (string, 可选) — 菜单状态（0正常 1停用）
  - `perms` (string, 可选) — 权限字符串
  - `icon` (string, 可选) — 菜单图标
  - `appId` (integer, 可选) — 应用id
  - `meta` (object, 可选)
  - `originId` (string, 可选) — 应用id
  - `title` (string, 可选) — 应用名称
  - `originId` (string, 可选) — 菜单来源id
  - `children` (object [], 可选) — 子菜单
  - `logoPath` (string, 可选) — logo路径
  - `logoPath` (string, 可选) — logo路径
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_put_auth_system_notice
- 摘要：修改通知公告
- `PUT /auth/system/notice` · 风险：write · 鉴权：required
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
  - `noticeId` (integer, 可选) — 公告ID
  - `noticeTitle` (string, 可选) — 公告标题
  - `noticeType` (string, 可选) — 公告类型（1通知 2公告）
  - `noticeContent` (string, 可选) — 公告内容
  - `status` (string, 可选) — 公告状态（0正常 1关闭）
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_put_auth_system_post
- 摘要：修改岗位
- `PUT /auth/system/post` · 风险：write · 鉴权：required
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
  - `postId` (integer, 可选) — 岗位序号
  - `postCode` (string, 可选) — 岗位编码
  - `postName` (string, 可选) — 岗位名称
  - `postSort` (integer, 可选) — 岗位排序
  - `status` (string, 可选) — 状态（0正常 1停用）
  - `flag` (boolean, 可选) — 用户是否存在此岗位标识 默认不存在
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_put_auth_system_role
- 摘要：修改保存角色
- `PUT /auth/system/role` · 风险：write · 鉴权：required
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
  - `roleId` (integer, 可选) — 角色ID
  - `roleName` (string, 可选) — 角色名称
  - `roleKey` (string, 可选) — 角色权限
  - `roleSort` (integer, 可选) — 角色排序
  - `dataScope` (string, 可选) — 数据范围（1：所有数据权限；2：自定义数据权限；3：本部门数据权限；4：本部门及以下数据权限；5：仅本人数据权限）
  - `menuCheckStrictly` (boolean, 可选) — 菜单树选择项是否关联显示（ 0：父子不互相关联显示 1：父子互相关联显示）
  - `deptCheckStrictly` (boolean, 可选) — 部门树选择项是否关联显示（0：父子不互相关联显示 1：父子互相关联显示 ）
  - `status` (string, 可选) — 角色状态（0正常 1停用）
  - `delFlag` (string, 可选) — 删除标志（0代表存在 2代表删除）
  - `flag` (boolean, 可选) — 用户是否存在此角色标识 默认不存在
  - `menuIds` (integer [], 可选) — 菜单组
  - `deptIds` (integer [], 可选) — 部门组（数据权限）
  - `permissions` (string [], 可选) — 角色菜单权限
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_put_auth_system_role_authuser_cancel
- 摘要：取消授权用户
- `PUT /auth/system/role/authUser/cancel` · 风险：write · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `userId` (integer, 可选) — 用户ID
  - `roleId` (integer, 可选) — 角色ID
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_put_auth_system_role_authuser_cancelall
- 摘要：批量取消授权用户
- `PUT /auth/system/role/authUser/cancelAll` · 风险：write · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_put_auth_system_role_authuser_selectall
- 摘要：批量选择用户授权
- `PUT /auth/system/role/authUser/selectAll` · 风险：write · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_put_auth_system_role_changestatus
- 摘要：状态修改
- `PUT /auth/system/role/changeStatus` · 风险：write · 鉴权：required
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
  - `roleId` (integer, 可选) — 角色ID
  - `roleName` (string, 可选) — 角色名称
  - `roleKey` (string, 可选) — 角色权限
  - `roleSort` (integer, 可选) — 角色排序
  - `dataScope` (string, 可选) — 数据范围（1：所有数据权限；2：自定义数据权限；3：本部门数据权限；4：本部门及以下数据权限；5：仅本人数据权限）
  - `menuCheckStrictly` (boolean, 可选) — 菜单树选择项是否关联显示（ 0：父子不互相关联显示 1：父子互相关联显示）
  - `deptCheckStrictly` (boolean, 可选) — 部门树选择项是否关联显示（0：父子不互相关联显示 1：父子互相关联显示 ）
  - `status` (string, 可选) — 角色状态（0正常 1停用）
  - `delFlag` (string, 可选) — 删除标志（0代表存在 2代表删除）
  - `flag` (boolean, 可选) — 用户是否存在此角色标识 默认不存在
  - `menuIds` (integer [], 可选) — 菜单组
  - `deptIds` (integer [], 可选) — 部门组（数据权限）
  - `permissions` (string [], 可选) — 角色菜单权限
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_put_auth_system_role_datascope
- 摘要：修改保存数据权限
- `PUT /auth/system/role/dataScope` · 风险：write · 鉴权：required
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
  - `roleId` (integer, 可选) — 角色ID
  - `roleName` (string, 可选) — 角色名称
  - `roleKey` (string, 可选) — 角色权限
  - `roleSort` (integer, 可选) — 角色排序
  - `dataScope` (string, 可选) — 数据范围（1：所有数据权限；2：自定义数据权限；3：本部门数据权限；4：本部门及以下数据权限；5：仅本人数据权限）
  - `menuCheckStrictly` (boolean, 可选) — 菜单树选择项是否关联显示（ 0：父子不互相关联显示 1：父子互相关联显示）
  - `deptCheckStrictly` (boolean, 可选) — 部门树选择项是否关联显示（0：父子不互相关联显示 1：父子互相关联显示 ）
  - `status` (string, 可选) — 角色状态（0正常 1停用）
  - `delFlag` (string, 可选) — 删除标志（0代表存在 2代表删除）
  - `flag` (boolean, 可选) — 用户是否存在此角色标识 默认不存在
  - `menuIds` (integer [], 可选) — 菜单组
  - `deptIds` (integer [], 可选) — 部门组（数据权限）
  - `permissions` (string [], 可选) — 角色菜单权限
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_put_auth_system_route
- 摘要：修改路由信息
- `PUT /auth/system/route` · 风险：write · 鉴权：required
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
  - `id` (integer, 可选)
  - `after` (string, 可选) — 匹配时间
  - `cookie` (string, 可选) — 匹配 cookie， 多个用英文逗号隔开
  - `header` (string, 可选) — 匹配 header
  - `host` (string, 可选) — 匹配主机名，多个用英文逗号隔开
  - `method` (string, 可选) — 匹配请求方式，多个用英文逗号隔开
  - `query` (string, 可选) — 匹配 query
  - `remoteAddr` (string, 可选) — 匹配IP地址和子网掩码
  - `weight` (string, 可选) — 匹配权重
  - `path` (string, 可选) — 匹配路径
  - `uri` (string, 可选) — 转发地址
  - `appId` (integer, 可选) — 应用id
  - `order` (integer, 可选)
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_put_auth_system_user
- 摘要：修改用户
- `PUT /auth/system/user` · 风险：write · 鉴权：required
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
  - `userId` (integer, 可选) — 用户ID
  - `deptId` (integer, 可选) — 部门ID
  - `userName` (string, 可选) — 用户账号
  - `nickName` (string, 可选) — 用户昵称
  - `email` (string, 可选) — 用户邮箱
  - `phonenumber` (string, 可选) — 手机号码
  - `sex` (string, 可选) — 用户性别
  - `avatar` (string, 可选) — 用户头像
  - `password` (string, 可选) — 密码
  - `status` (string, 可选) — 帐号状态（0正常 1停用）
  - `delFlag` (string, 可选) — 删除标志（0代表存在 2代表删除）
  - `loginIp` (string, 可选) — 最后登录IP
  - `loginDate` (string, 可选) — 最后登录时间
  - `dept` (object, 可选) — 部门对象
  - `createBy` (string, 可选) — 创建者
  - `createTime` (string, 可选) — 创建时间
  - `updateBy` (string, 可选) — 更新者
  - `updateTime` (string, 可选) — 更新时间
  - `remark` (string, 可选) — 备注
  - `params` (object, 可选) — 请求参数
  - `key` (object, 可选)
  - `deptId` (integer, 可选) — 部门ID
  - `parentId` (integer, 可选) — 父部门ID
  - `ancestors` (string, 可选) — 祖级列表
  - `deptName` (string, 可选) — 部门名称
  - `orderNum` (integer, 可选) — 显示顺序
  - `leader` (string, 可选) — 负责人
  - `phone` (string, 可选) — 联系电话
  - `email` (string, 可选) — 邮箱
  - `status` (string, 可选) — 部门状态:0正常,1停用
  - `delFlag` (string, 可选) — 删除标志（0代表存在 2代表删除）
  - `parentName` (string, 可选) — 父部门名称
  - `children` (object [], 可选) — 子部门
  - `createBy` (string, 可选) — 创建者
  - `createTime` (string, 可选) — 创建时间
  - `updateBy` (string, 可选) — 更新者
  - `updateTime` (string, 可选) — 更新时间
  - `remark` (string, 可选) — 备注
  - `params` (object, 可选) — 请求参数
  - `key` (object, 可选)
  - `deptId` (integer, 可选) — 部门ID
  - `parentId` (integer, 可选) — 父部门ID
  - `ancestors` (string, 可选) — 祖级列表
  - `deptName` (string, 可选) — 部门名称
  - `orderNum` (integer, 可选) — 显示顺序
  - `leader` (string, 可选) — 负责人
  - `phone` (string, 可选) — 联系电话
  - `email` (string, 可选) — 邮箱
  - `status` (string, 可选) — 部门状态:0正常,1停用
  - `delFlag` (string, 可选) — 删除标志（0代表存在 2代表删除）
  - `parentName` (string, 可选) — 父部门名称
  - `children` (object [], 可选) — 子部门
  - `roles` (object [], 可选) — 角色对象
  - `createBy` (string, 可选) — 创建者
  - `createTime` (string, 可选) — 创建时间
  - `updateBy` (string, 可选) — 更新者
  - `updateTime` (string, 可选) — 更新时间
  - `remark` (string, 可选) — 备注
  - `params` (object, 可选) — 请求参数
  - `key` (object, 可选)
  - `roleId` (integer, 可选) — 角色ID
  - `roleName` (string, 可选) — 角色名称
  - `roleKey` (string, 可选) — 角色权限
  - `roleSort` (integer, 可选) — 角色排序
  - `dataScope` (string, 可选) — 数据范围（1：所有数据权限；2：自定义数据权限；3：本部门数据权限；4：本部门及以下数据权限；5：仅本人数据权限）
  - `menuCheckStrictly` (boolean, 可选) — 菜单树选择项是否关联显示（ 0：父子不互相关联显示 1：父子互相关联显示）
  - `deptCheckStrictly` (boolean, 可选) — 部门树选择项是否关联显示（0：父子不互相关联显示 1：父子互相关联显示 ）
  - `status` (string, 可选) — 角色状态（0正常 1停用）
  - `delFlag` (string, 可选) — 删除标志（0代表存在 2代表删除）
  - `flag` (boolean, 可选) — 用户是否存在此角色标识 默认不存在
  - `menuIds` (integer [], 可选) — 菜单组
  - `deptIds` (integer [], 可选) — 部门组（数据权限）
  - `permissions` (string [], 可选) — 角色菜单权限
  - `roleIds` (integer [], 可选) — 角色组
  - `postIds` (integer [], 可选) — 岗位组
  - `roleId` (integer, 可选) — 角色ID
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_put_auth_system_user_authrole
- 摘要：用户授权角色
- `PUT /auth/system/user/authRole` · 风险：write · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_put_auth_system_user_changestatus
- 摘要：状态修改
- `PUT /auth/system/user/changeStatus` · 风险：write · 鉴权：required
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
  - `userId` (integer, 可选) — 用户ID
  - `deptId` (integer, 可选) — 部门ID
  - `userName` (string, 可选) — 用户账号
  - `nickName` (string, 可选) — 用户昵称
  - `email` (string, 可选) — 用户邮箱
  - `phonenumber` (string, 可选) — 手机号码
  - `sex` (string, 可选) — 用户性别
  - `avatar` (string, 可选) — 用户头像
  - `password` (string, 可选) — 密码
  - `status` (string, 可选) — 帐号状态（0正常 1停用）
  - `delFlag` (string, 可选) — 删除标志（0代表存在 2代表删除）
  - `loginIp` (string, 可选) — 最后登录IP
  - `loginDate` (string, 可选) — 最后登录时间
  - `dept` (object, 可选) — 部门对象
  - `createBy` (string, 可选) — 创建者
  - `createTime` (string, 可选) — 创建时间
  - `updateBy` (string, 可选) — 更新者
  - `updateTime` (string, 可选) — 更新时间
  - `remark` (string, 可选) — 备注
  - `params` (object, 可选) — 请求参数
  - `key` (object, 可选)
  - `deptId` (integer, 可选) — 部门ID
  - `parentId` (integer, 可选) — 父部门ID
  - `ancestors` (string, 可选) — 祖级列表
  - `deptName` (string, 可选) — 部门名称
  - `orderNum` (integer, 可选) — 显示顺序
  - `leader` (string, 可选) — 负责人
  - `phone` (string, 可选) — 联系电话
  - `email` (string, 可选) — 邮箱
  - `status` (string, 可选) — 部门状态:0正常,1停用
  - `delFlag` (string, 可选) — 删除标志（0代表存在 2代表删除）
  - `parentName` (string, 可选) — 父部门名称
  - `children` (object [], 可选) — 子部门
  - `createBy` (string, 可选) — 创建者
  - `createTime` (string, 可选) — 创建时间
  - `updateBy` (string, 可选) — 更新者
  - `updateTime` (string, 可选) — 更新时间
  - `remark` (string, 可选) — 备注
  - `params` (object, 可选) — 请求参数
  - `key` (object, 可选)
  - `deptId` (integer, 可选) — 部门ID
  - `parentId` (integer, 可选) — 父部门ID
  - `ancestors` (string, 可选) — 祖级列表
  - `deptName` (string, 可选) — 部门名称
  - `orderNum` (integer, 可选) — 显示顺序
  - `leader` (string, 可选) — 负责人
  - `phone` (string, 可选) — 联系电话
  - `email` (string, 可选) — 邮箱
  - `status` (string, 可选) — 部门状态:0正常,1停用
  - `delFlag` (string, 可选) — 删除标志（0代表存在 2代表删除）
  - `parentName` (string, 可选) — 父部门名称
  - `children` (object [], 可选) — 子部门
  - `roles` (object [], 可选) — 角色对象
  - `createBy` (string, 可选) — 创建者
  - `createTime` (string, 可选) — 创建时间
  - `updateBy` (string, 可选) — 更新者
  - `updateTime` (string, 可选) — 更新时间
  - `remark` (string, 可选) — 备注
  - `params` (object, 可选) — 请求参数
  - `key` (object, 可选)
  - `roleId` (integer, 可选) — 角色ID
  - `roleName` (string, 可选) — 角色名称
  - `roleKey` (string, 可选) — 角色权限
  - `roleSort` (integer, 可选) — 角色排序
  - `dataScope` (string, 可选) — 数据范围（1：所有数据权限；2：自定义数据权限；3：本部门数据权限；4：本部门及以下数据权限；5：仅本人数据权限）
  - `menuCheckStrictly` (boolean, 可选) — 菜单树选择项是否关联显示（ 0：父子不互相关联显示 1：父子互相关联显示）
  - `deptCheckStrictly` (boolean, 可选) — 部门树选择项是否关联显示（0：父子不互相关联显示 1：父子互相关联显示 ）
  - `status` (string, 可选) — 角色状态（0正常 1停用）
  - `delFlag` (string, 可选) — 删除标志（0代表存在 2代表删除）
  - `flag` (boolean, 可选) — 用户是否存在此角色标识 默认不存在
  - `menuIds` (integer [], 可选) — 菜单组
  - `deptIds` (integer [], 可选) — 部门组（数据权限）
  - `permissions` (string [], 可选) — 角色菜单权限
  - `roleIds` (integer [], 可选) — 角色组
  - `postIds` (integer [], 可选) — 岗位组
  - `roleId` (integer, 可选) — 角色ID
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_put_auth_system_user_profile
- 摘要：修改用户个人信息
- `PUT /auth/system/user/profile` · 风险：write · 鉴权：required
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
  - `userId` (integer, 可选) — 用户ID
  - `deptId` (integer, 可选) — 部门ID
  - `userName` (string, 可选) — 用户账号
  - `nickName` (string, 可选) — 用户昵称
  - `email` (string, 可选) — 用户邮箱
  - `phonenumber` (string, 可选) — 手机号码
  - `sex` (string, 可选) — 用户性别
  - `avatar` (string, 可选) — 用户头像
  - `password` (string, 可选) — 密码
  - `status` (string, 可选) — 帐号状态（0正常 1停用）
  - `delFlag` (string, 可选) — 删除标志（0代表存在 2代表删除）
  - `loginIp` (string, 可选) — 最后登录IP
  - `loginDate` (string, 可选) — 最后登录时间
  - `dept` (object, 可选) — 部门对象
  - `createBy` (string, 可选) — 创建者
  - `createTime` (string, 可选) — 创建时间
  - `updateBy` (string, 可选) — 更新者
  - `updateTime` (string, 可选) — 更新时间
  - `remark` (string, 可选) — 备注
  - `params` (object, 可选) — 请求参数
  - `key` (object, 可选)
  - `deptId` (integer, 可选) — 部门ID
  - `parentId` (integer, 可选) — 父部门ID
  - `ancestors` (string, 可选) — 祖级列表
  - `deptName` (string, 可选) — 部门名称
  - `orderNum` (integer, 可选) — 显示顺序
  - `leader` (string, 可选) — 负责人
  - `phone` (string, 可选) — 联系电话
  - `email` (string, 可选) — 邮箱
  - `status` (string, 可选) — 部门状态:0正常,1停用
  - `delFlag` (string, 可选) — 删除标志（0代表存在 2代表删除）
  - `parentName` (string, 可选) — 父部门名称
  - `children` (object [], 可选) — 子部门
  - `createBy` (string, 可选) — 创建者
  - `createTime` (string, 可选) — 创建时间
  - `updateBy` (string, 可选) — 更新者
  - `updateTime` (string, 可选) — 更新时间
  - `remark` (string, 可选) — 备注
  - `params` (object, 可选) — 请求参数
  - `key` (object, 可选)
  - `deptId` (integer, 可选) — 部门ID
  - `parentId` (integer, 可选) — 父部门ID
  - `ancestors` (string, 可选) — 祖级列表
  - `deptName` (string, 可选) — 部门名称
  - `orderNum` (integer, 可选) — 显示顺序
  - `leader` (string, 可选) — 负责人
  - `phone` (string, 可选) — 联系电话
  - `email` (string, 可选) — 邮箱
  - `status` (string, 可选) — 部门状态:0正常,1停用
  - `delFlag` (string, 可选) — 删除标志（0代表存在 2代表删除）
  - `parentName` (string, 可选) — 父部门名称
  - `children` (object [], 可选) — 子部门
  - `roles` (object [], 可选) — 角色对象
  - `createBy` (string, 可选) — 创建者
  - `createTime` (string, 可选) — 创建时间
  - `updateBy` (string, 可选) — 更新者
  - `updateTime` (string, 可选) — 更新时间
  - `remark` (string, 可选) — 备注
  - `params` (object, 可选) — 请求参数
  - `key` (object, 可选)
  - `roleId` (integer, 可选) — 角色ID
  - `roleName` (string, 可选) — 角色名称
  - `roleKey` (string, 可选) — 角色权限
  - `roleSort` (integer, 可选) — 角色排序
  - `dataScope` (string, 可选) — 数据范围（1：所有数据权限；2：自定义数据权限；3：本部门数据权限；4：本部门及以下数据权限；5：仅本人数据权限）
  - `menuCheckStrictly` (boolean, 可选) — 菜单树选择项是否关联显示（ 0：父子不互相关联显示 1：父子互相关联显示）
  - `deptCheckStrictly` (boolean, 可选) — 部门树选择项是否关联显示（0：父子不互相关联显示 1：父子互相关联显示 ）
  - `status` (string, 可选) — 角色状态（0正常 1停用）
  - `delFlag` (string, 可选) — 删除标志（0代表存在 2代表删除）
  - `flag` (boolean, 可选) — 用户是否存在此角色标识 默认不存在
  - `menuIds` (integer [], 可选) — 菜单组
  - `deptIds` (integer [], 可选) — 部门组（数据权限）
  - `permissions` (string [], 可选) — 角色菜单权限
  - `roleIds` (integer [], 可选) — 角色组
  - `postIds` (integer [], 可选) — 岗位组
  - `roleId` (integer, 可选) — 角色ID
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_put_auth_system_user_profile_updatepwd
- 摘要：重置密码
- `PUT /auth/system/user/profile/updatePwd` · 风险：write · 鉴权：required
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_put_auth_system_user_resetpwd
- 摘要：重置密码
- `PUT /auth/system/user/resetPwd` · 风险：write · 鉴权：required
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
  - `userId` (integer, 可选) — 用户ID
  - `deptId` (integer, 可选) — 部门ID
  - `userName` (string, 可选) — 用户账号
  - `nickName` (string, 可选) — 用户昵称
  - `email` (string, 可选) — 用户邮箱
  - `phonenumber` (string, 可选) — 手机号码
  - `sex` (string, 可选) — 用户性别
  - `avatar` (string, 可选) — 用户头像
  - `password` (string, 可选) — 密码
  - `status` (string, 可选) — 帐号状态（0正常 1停用）
  - `delFlag` (string, 可选) — 删除标志（0代表存在 2代表删除）
  - `loginIp` (string, 可选) — 最后登录IP
  - `loginDate` (string, 可选) — 最后登录时间
  - `dept` (object, 可选) — 部门对象
  - `createBy` (string, 可选) — 创建者
  - `createTime` (string, 可选) — 创建时间
  - `updateBy` (string, 可选) — 更新者
  - `updateTime` (string, 可选) — 更新时间
  - `remark` (string, 可选) — 备注
  - `params` (object, 可选) — 请求参数
  - `key` (object, 可选)
  - `deptId` (integer, 可选) — 部门ID
  - `parentId` (integer, 可选) — 父部门ID
  - `ancestors` (string, 可选) — 祖级列表
  - `deptName` (string, 可选) — 部门名称
  - `orderNum` (integer, 可选) — 显示顺序
  - `leader` (string, 可选) — 负责人
  - `phone` (string, 可选) — 联系电话
  - `email` (string, 可选) — 邮箱
  - `status` (string, 可选) — 部门状态:0正常,1停用
  - `delFlag` (string, 可选) — 删除标志（0代表存在 2代表删除）
  - `parentName` (string, 可选) — 父部门名称
  - `children` (object [], 可选) — 子部门
  - `createBy` (string, 可选) — 创建者
  - `createTime` (string, 可选) — 创建时间
  - `updateBy` (string, 可选) — 更新者
  - `updateTime` (string, 可选) — 更新时间
  - `remark` (string, 可选) — 备注
  - `params` (object, 可选) — 请求参数
  - `key` (object, 可选)
  - `deptId` (integer, 可选) — 部门ID
  - `parentId` (integer, 可选) — 父部门ID
  - `ancestors` (string, 可选) — 祖级列表
  - `deptName` (string, 可选) — 部门名称
  - `orderNum` (integer, 可选) — 显示顺序
  - `leader` (string, 可选) — 负责人
  - `phone` (string, 可选) — 联系电话
  - `email` (string, 可选) — 邮箱
  - `status` (string, 可选) — 部门状态:0正常,1停用
  - `delFlag` (string, 可选) — 删除标志（0代表存在 2代表删除）
  - `parentName` (string, 可选) — 父部门名称
  - `children` (object [], 可选) — 子部门
  - `roles` (object [], 可选) — 角色对象
  - `createBy` (string, 可选) — 创建者
  - `createTime` (string, 可选) — 创建时间
  - `updateBy` (string, 可选) — 更新者
  - `updateTime` (string, 可选) — 更新时间
  - `remark` (string, 可选) — 备注
  - `params` (object, 可选) — 请求参数
  - `key` (object, 可选)
  - `roleId` (integer, 可选) — 角色ID
  - `roleName` (string, 可选) — 角色名称
  - `roleKey` (string, 可选) — 角色权限
  - `roleSort` (integer, 可选) — 角色排序
  - `dataScope` (string, 可选) — 数据范围（1：所有数据权限；2：自定义数据权限；3：本部门数据权限；4：本部门及以下数据权限；5：仅本人数据权限）
  - `menuCheckStrictly` (boolean, 可选) — 菜单树选择项是否关联显示（ 0：父子不互相关联显示 1：父子互相关联显示）
  - `deptCheckStrictly` (boolean, 可选) — 部门树选择项是否关联显示（0：父子不互相关联显示 1：父子互相关联显示 ）
  - `status` (string, 可选) — 角色状态（0正常 1停用）
  - `delFlag` (string, 可选) — 删除标志（0代表存在 2代表删除）
  - `flag` (boolean, 可选) — 用户是否存在此角色标识 默认不存在
  - `menuIds` (integer [], 可选) — 菜单组
  - `deptIds` (integer [], 可选) — 部门组（数据权限）
  - `permissions` (string [], 可选) — 角色菜单权限
  - `roleIds` (integer [], 可选) — 角色组
  - `postIds` (integer [], 可选) — 岗位组
  - `roleId` (integer, 可选) — 角色ID
- 响应字段：`code`, `msg`, `data`, `licenseState`, `licenseExpireDate`

### admin_put_auth_test_user_update
- 摘要：更新用户
- `PUT /auth/test/user/update` · 风险：read · 鉴权：required
- Header：
  - `Content-Type` (?, 必填)
- Body：
  - `userId` (integer, 可选)
  - `username` (string, 可选)
  - `password` (string, 可选)
  - `mobile` (string, 可选)
- 响应字段：`code`, `msg`, `data`

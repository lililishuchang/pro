{
    "code": 0,
    "msg": "",
    "data": [
        {
    "title": "主页",
    "icon": "layui-icon-home",
    "list": [{
        "title": "控制台",
        "jump": "/"
    }, {
        "name": "homepage1",
        "title": "主页一",
        "jump": "home/homepage1"
    }, {
        "name": "homepage2",
        "title": "主页二",
        "jump": "home/homepage2"
    }]
},




    {
    "name": "user",
    "title": "用户",
    "icon": "layui-icon-user",
    "list": [{
        "name": "user",
        "title": "网站用户",
        "jump": "user/user/list"
    }, {
        "name": "administrators-list",
        "title": "后台管理员",
        "jump": "user/administrators/list"
    }, {
        "name": "administrators-rule",
        "title": "角色管理",
        "jump": "user/administrators/role"
    }]
},
    {
    "name": "set",
    "title": "设置",
    "icon": "layui-icon-set",
    "list": [{
        "name": "system",
        "title": "系统设置",
        "spread": true,
        "list": [{
            "name": "website",
            "title": "网站设置"
        }, {
            "name": "email",
            "title": "邮件服务"
        }]
    }, {
        "name": "user",
        "title": "我的设置",
        "spread": true,
        "list": [{
            "name": "info",
            "title": "基本资料"
        }, {
            "name": "password",
            "title": "修改密码"
        }]
    }]
},
    {
    "name": "get",
    "title": "授权",
    "icon": "layui-icon-auz",
    "jump": "system/get"
}
]
}
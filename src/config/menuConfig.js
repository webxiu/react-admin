const menuList = [
    {
        title: '首页',
        key: '/admin/home'
    },
    {
        title: 'UI',
        key: '/admin/ui',
        children: [
            {
                title: '按钮',
                key: '/admin/ui/buttom'
            },
            {
                title: '弹窗',
                key: '/admin/ui/modal'
            },
            {
                title: 'Loading',
                key: '/admin/ui/loading'
            },
        ]
    },
    {
        title: '系统设置',
        key: '/admin/setting',
        children: [
            {
                title: '表单',
                key: '/admin/setting/form'
            },
            {
                title: '面板',
                key: '/admin/setting/card'
            },
            {
                title: 'table',
                key: '/admin/setting/table'
            },
        ]
    },
    {
        title: '黑客帝国',
        key: '/admin/hacker'
    },
    {
        title: '权限设置',
        key: '/admin/permission'
    },
    {
        title: '订单列表',
        key: '/admin/order'
    },
    {
        title: '文章列表',
        key: '/admin/article'
    },
    {
        title: '消息列表',
        key: '/admin/notice'
    },

]

export default menuList
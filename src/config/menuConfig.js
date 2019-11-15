const menuList = [
    {
        title: '首页',
        key: '/admin/home',
        icon: 'desktop'
    },
    {
        title: 'UI',
        key: '/admin/ui',
        icon: 'pie-chart',
        children: [
            {
                title: '按钮',
                key: '/admin/ui/button',
                icon: 'appstore'
            },
            {
                title: '轮播',
                key: '/admin/ui/banner',
                icon: 'desktop'
            },
            {
                title: 'Loading',
                key: '/admin/ui/loading',
                icon: 'appstore'
            },
        ]
    },
    {
        title: '系统设置',
        key: '/admin/setting',
        icon: 'mail',
        children: [
            {
                title: '表单',
                key: '/admin/setting/form',
                icon: 'mail'
            },
            {
                title: '面板',
                key: '/admin/setting/card',
                icon: 'desktop'
            },
           
        ]
    },
    {
        title: '黑客帝国',
        key: '/admin/hacker',
        icon: 'mail'
    },
    {
        title: '表格数据',
        key: '/admin/table',
        icon: 'mail'
    },
    {
        title: '权限设置',
        key: '/admin/permission',
        icon: 'inbox'
    },
    {
        title: '消息列表',
        key: '/admin/notice',
        icon: 'desktop'
    },

]

export default menuList
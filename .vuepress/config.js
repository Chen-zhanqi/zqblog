module.exports = {
    "title": "经过的博客",
    "description": "",
    "dest": "public",
    "head": [
        [
            "link",
            {
                "rel": "icon",
                "href": "/favicon.ico"
            },
        ],
        // [
        //     "link",
        //     {
        //         "rel": "stylesheet",
        //         "media": "screen",
        //         "href": "/css/lizi.css"
        //     },
        // ],
        [
            "meta",
            {
                "name": "viewport",
                "content": "width=device-width,initial-scale=1,user-scalable=no"
            }
        ],
        // 引入jquery
        ["script", {
            "language": "javascript",
            "type": "text/javascript",
            "src": "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"
        }],
        // 引入鼠标点击脚本
        ["script", {
            "language": "javascript",
            "type": "text/javascript",
            "src": "/js/MouseClickEffect.js"
        }
        ],
    ],
    "theme": "reco",
    "themeConfig": {
        "nav": [
            {
                "text": "首页",
                "link": "/",
                "icon": "reco-home"
            },
            {
                "text": "时间轴",
                "link": "/timeline/",
                "icon": "reco-date"
            },
            {
                "text": "文档",
                "icon": "reco-message",
                "items": [
                    {
                        "text": "记录",
                        "link": "/docs/theme-reco/"
                    }
                ]
            },
            // {
            //     "text": "我的",
            //     "icon": "reco-message",
            //     "items": [
            //         {
            //             "text": "GitHub",
            //             "link": "https://github.com/recoluan",
            //             "icon": "reco-github"
            //         }
            //     ]
            // }
        ],
        "sidebar": {
            "/docs/theme-reco/": [
                "",
                "关于"
            ]
        },
        "type": "blog",
        "blogConfig": {
            "category": {
                "location": 2,
                "text": "分类"
            },
            "tag": {
                "location": 3,
                "text": "标签"
            }
        },
        "friendLink": [
            {
                "title": "极客小祥",
                "desc": "永远相信美好的事情即将发生",
                //"email": "",
                "logo": "https://jtxyh.top/logo.png",
                "link": "https://jtxyh.top/"
            },
            {
                "title": "Devin_Chen",
                "desc": "前端工作者，愿我们共同进步。。。",
                // "email": "",
                // "logo": "https://jtxyh.top/logo.png",
                "link": "https://blog.csdn.net/lily__an"
            },
            // {
            //     "title": "vuepress-theme-reco",
            //     "desc": "A simle and beautiful vuepress Blog & Doc theme.",
            //     "avatar": "icon_vuepress_reco.png",
            //     "link": "https://vuepress-theme-reco.recoluan.com",
            // }
        ],
        "logo": "/logo.png",
        "search": true,
        "searchMaxSuggestions": 10,
        "lastUpdated": "Last Updated",
        "author": "ZQ",
        "authorAvatar": "/avatar.png",
        "record": "豫ICP备2021019462号",
        "startYear": "2018"
    },
    "markdown": {
        "lineNumbers": true
    },
    plugins: [
        ["vuepress-plugin-nuggets-style-copy", {
            copyText: "复制代码",
            tip: {
                content: "复制成功!"
            }
        }],

    ]
}

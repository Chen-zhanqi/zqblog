(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{527:function(s,a,t){"use strict";t.r(a);var n=t(4),r=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",[s._v("selenium配置")])]),s._v(" "),t("blockquote",[t("p",[s._v("每次当selenium启动chrome浏览器的时候，chrome浏览器很干净，没有插件、没有收藏、没有历史记录，这是因为selenium在启动chrome时为了保证最快的运行效率，启动了一个裸浏览器，这就是为什么需要配置参数的原因，但是有些时候我们需要的不仅是一个裸浏览器。")])]),s._v(" "),t("p",[s._v("selenium启动配置参数接收是ChromeOptions类，创建方式如下：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" selenium "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" webdriver\noption "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" webdriver"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ChromeOptions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("创建了ChromeOptions类之后就是添加参数，添加参数有几个特定的方法，分别对应添加不同类型的配置项目。")]),s._v(" "),t("p",[s._v("设置 chrome 二进制文件位置 (binary_location)")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" selenium "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" webdriver\noption "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" webdriver"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ChromeOptions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加启动参数")]),s._v("\noption"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_argument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加扩展应用 ")]),s._v("\noption"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_extension"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\noption"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_encoded_extension"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加实验性质的设置参数 ")]),s._v("\noption"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_experimental_option"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置调试器地址")]),s._v("\noption"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("debugger_address"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("h2",{attrs:{id:"常用配置参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用配置参数"}},[s._v("#")]),s._v(" 常用配置参数")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" selenium "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" webdriver\noption "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" webdriver"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ChromeOptions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加UA")]),s._v("\noptions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_argument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'user-agent=\"MQQBrowser/26 Mozilla/5.0 (Linux; U; Android 2.3.7; zh-cn; MB200 Build/GRJ22; CyanogenMod-7) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1\"'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定浏览器分辨率")]),s._v("\noptions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_argument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'window-size=1920x3000'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 谷歌文档提到需要加上这个属性来规避bug")]),s._v("\nchrome_options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_argument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--disable-gpu'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 隐藏滚动条, 应对一些特殊页面")]),s._v("\noptions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_argument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--hide-scrollbars'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不加载图片, 提升速度")]),s._v("\noptions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_argument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'blink-settings=imagesEnabled=false'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 浏览器不提供可视化页面. linux下如果系统不支持可视化不加这条会启动失败")]),s._v("\noptions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_argument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--headless'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以最高权限运行")]),s._v("\noptions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_argument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--no-sandbox'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 手动指定使用的浏览器位置")]),s._v("\noptions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("binary_location "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('r"C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"')]),s._v(" \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#添加crx插件")]),s._v("\noption"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_extension"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'d:\\crx\\AdBlock_v2.17.crx'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁用JavaScript")]),s._v("\noption"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_argument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--disable-javascript"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置开发者模式启动，该模式下webdriver属性为正常值")]),s._v("\noptions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_experimental_option"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'excludeSwitches'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'enable-automation'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁用浏览器弹窗")]),s._v("\nprefs "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  \n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'profile.default_content_setting_values'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  \n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'notifications'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("  \n     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  \noptions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_experimental_option"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'prefs'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("prefs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\ndriver"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("webdriver"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Chrome"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("chrome_options"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("chrome_options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br")])]),t("h2",{attrs:{id:"浏览器地址栏参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器地址栏参数"}},[s._v("#")]),s._v(" 浏览器地址栏参数")]),s._v(" "),t("p",[s._v("在浏览器地址栏输入下列命令得到相应的信息")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("about"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("version "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" 显示当前版本\n\n　　about"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("memory "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" 显示本机浏览器内存使用状况\n\n　　about"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("plugins "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" 显示已安装插件\n\n　　about"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("histograms "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" 显示历史记录\n\n　　about"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("dns "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" 显示DNS状态\n\n　　about"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("cache "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" 显示缓存页面\n\n　　about"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("gpu "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("是否有硬件加速\n\n　　chrome"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v("extensions"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" 查看已经安装的扩展\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("h2",{attrs:{id:"其他配置项目参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他配置项目参数"}},[s._v("#")]),s._v(" 其他配置项目参数")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("–user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("dir")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("”"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("PATH"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("” \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定用户文件夹User Data路径，可以把书签这样的用户数据保存在系统分区以外的分区")]),s._v("\n\n　　–disk"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cache"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("dir")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("”"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("PATH"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("“ \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定缓存Cache路径")]),s._v("\n\n　　–disk"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cache"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("size"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定Cache大小，单位Byte")]),s._v("\n\n　　–first run \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重置到初始状态，第一次运行")]),s._v("\n\n　　–incognito \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 隐身模式启动")]),s._v("\n\n　　–disable"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("javascript \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁用Javascript")]),s._v("\n\n　　"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("omnibox"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("popup"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("count"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"num"')]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将地址栏弹出的提示菜单数量改为num个")]),s._v("\n\n　　"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("agent"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxxxxxxx"')]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改HTTP请求头部的Agent字符串，可以通过about:version页面查看修改效果")]),s._v("\n\n　　"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("disable"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("plugins \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁止加载所有插件，可以增加速度。可以通过about:plugins页面查看效果")]),s._v("\n\n　　"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("disable"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("javascript \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁用JavaScript，如果觉得速度慢在加上这个")]),s._v("\n\n　　"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("disable"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("java \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁用java")]),s._v("\n\n　　"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("start"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("maximized \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动就最大化")]),s._v("\n\n　　"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("no"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("sandbox \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 取消沙盒模式")]),s._v("\n\n　　"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("single"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("process \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 单进程运行")]),s._v("\n\n　　"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("process"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("per"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("tab \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 每个标签使用单独进程")]),s._v("\n\n　　"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("process"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("per"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("site \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 每个站点使用单独进程")]),s._v("\n\n　　"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("process"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("plugins \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 插件不启用单独进程")]),s._v("\n\n　　"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("disable"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("popup"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("blocking \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁用弹出拦截")]),s._v("\n\n　　"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("disable"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("plugins \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁用插件")]),s._v("\n\n　　"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("disable"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("images \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁用图像")]),s._v("\n\n　　"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("incognito \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动进入隐身模式")]),s._v("\n\n　　"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("enable"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("udd"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("profiles \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启用账户切换菜单")]),s._v("\n\n　　"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("proxy"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("pac"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("url \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用pac代理 [via 1/2]")]),s._v("\n\n　　"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("lang"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("zh"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("CN \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置语言为简体中文")]),s._v("\n\n　　"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("disk"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cache"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("dir")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自定义缓存目录")]),s._v("\n\n　　"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("disk"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cache"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("size \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自定义缓存最大值（单位byte）")]),s._v("\n\n　　"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("media"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cache"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("size \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自定义多媒体缓存最大值（单位byte）")]),s._v("\n\n　　"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("bookmark"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("menu \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在工具 栏增加一个书签按钮")]),s._v("\n\n　　"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("enable"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("sync \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启用书签同步")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br"),t("span",{staticClass:"line-number"},[s._v("71")]),t("br"),t("span",{staticClass:"line-number"},[s._v("72")]),t("br"),t("span",{staticClass:"line-number"},[s._v("73")]),t("br"),t("span",{staticClass:"line-number"},[s._v("74")]),t("br"),t("span",{staticClass:"line-number"},[s._v("75")]),t("br"),t("span",{staticClass:"line-number"},[s._v("76")]),t("br"),t("span",{staticClass:"line-number"},[s._v("77")]),t("br"),t("span",{staticClass:"line-number"},[s._v("78")]),t("br"),t("span",{staticClass:"line-number"},[s._v("79")]),t("br"),t("span",{staticClass:"line-number"},[s._v("80")]),t("br"),t("span",{staticClass:"line-number"},[s._v("81")]),t("br"),t("span",{staticClass:"line-number"},[s._v("82")]),t("br"),t("span",{staticClass:"line-number"},[s._v("83")]),t("br"),t("span",{staticClass:"line-number"},[s._v("84")]),t("br"),t("span",{staticClass:"line-number"},[s._v("85")]),t("br"),t("span",{staticClass:"line-number"},[s._v("86")]),t("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);
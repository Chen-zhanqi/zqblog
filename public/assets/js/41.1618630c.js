(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{533:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"tornado简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tornado简介"}},[t._v("#")]),t._v(" Tornado简介")]),t._v(" "),a("p",[t._v("Tornado-基于Python的web服务端框架， 与现有主流的web服务端（以及大多数Python框架）有着明显的区别： 是非阻塞式，速度相当快。得利于其非阻塞式的方式，Tornado每秒可以处理数以千计的连接，因此是实时web服务的一个理想框架。")]),t._v(" "),a("h2",{attrs:{id:"tornado安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tornado安装"}},[t._v("#")]),t._v(" Tornado安装")]),t._v(" "),a("p",[a("code",[t._v("pip install tornado")])]),t._v(" "),a("h2",{attrs:{id:"tornado-web程序流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tornado-web程序流程"}},[t._v("#")]),t._v(" Tornado web程序流程")]),t._v(" "),a("ol",[a("li",[t._v("创建web应用实例对象，第一个初始化参数为路由映射列表")]),t._v(" "),a("li",[t._v("定义实现路由映射列表的handler类")]),t._v(" "),a("li",[t._v("创建实例，监听服务器端口")]),t._v(" "),a("li",[t._v("启动。执行IOLoop类的start()方法")])]),t._v(" "),a("h2",{attrs:{id:"处理http请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#处理http请求"}},[t._v("#")]),t._v(" 处理HTTP请求")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("RequestHandler.get(args,kwargs)      #处理get请求\nRequestHandler.post(*args, kwargs)   #处理post请求\nRequestHandler.put(args, kwargs)     #处理put请求\nRequestHandler.delete(*args, kwargs) #处理delete请求\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h2",{attrs:{id:"hello-world"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hello-world"}},[t._v("#")]),t._v(" Hello world")]),t._v(" "),a("div",{staticClass:"language-py line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" tornado"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ioloop\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" tornado"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("web\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 定义实现路由映射列表的handler类")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MainHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tornado"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RequestHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello world"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tornado"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Application"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        handlers "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("r'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" MainHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建web应用实例对象，第一个初始化参数为路由映射列表")]),t._v("\n        tornado"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Application"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__init__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handlers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"__main__"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Application"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建实例，监听服务器端口")]),t._v("\n    app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("listen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Tornado Started in port 8000，http://127.0.0.1:8000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启动。执行IOLoop类的start()方法")]),t._v("\n    tornado"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ioloop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IOLoop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br")])]),a("p",[t._v("Hello world创建了一个socket服务并监听8000端口，当接收到请求时根据路由规则来找到相应的类处理该请求，并根据请求方式指定相应类中的指定方法处理。 所以当我们在浏览器键入127.0.0.1:8000，服务端会给浏览器返回Hello world。")])])}),[],!1,null,null,null);s.default=e.exports}}]);
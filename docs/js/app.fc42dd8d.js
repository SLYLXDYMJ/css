(function(s){function t(t){for(var e,l,v=t[0],_=t[1],p=t[2],i=0,o=[];i<v.length;i++)l=v[i],r[l]&&o.push(r[l][0]),r[l]=0;for(e in _)Object.prototype.hasOwnProperty.call(_,e)&&(s[e]=_[e]);c&&c(t);while(o.length)o.shift()();return n.push.apply(n,p||[]),a()}function a(){for(var s,t=0;t<n.length;t++){for(var a=n[t],e=!0,v=1;v<a.length;v++){var _=a[v];0!==r[_]&&(e=!1)}e&&(n.splice(t--,1),s=l(l.s=a[0]))}return s}var e={},r={app:0},n=[];function l(t){if(e[t])return e[t].exports;var a=e[t]={i:t,l:!1,exports:{}};return s[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=s,l.c=e,l.d=function(s,t,a){l.o(s,t)||Object.defineProperty(s,t,{enumerable:!0,get:a})},l.r=function(s){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},l.t=function(s,t){if(1&t&&(s=l(s)),8&t)return s;if(4&t&&"object"===typeof s&&s&&s.__esModule)return s;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:s}),2&t&&"string"!=typeof s)for(var e in s)l.d(a,e,function(t){return s[t]}.bind(null,e));return a},l.n=function(s){var t=s&&s.__esModule?function(){return s["default"]}:function(){return s};return l.d(t,"a",t),t},l.o=function(s,t){return Object.prototype.hasOwnProperty.call(s,t)},l.p="";var v=window["webpackJsonp"]=window["webpackJsonp"]||[],_=v.push.bind(v);v.push=t,v=v.slice();for(var p=0;p<v.length;p++)t(v[p]);var c=_;n.push(["e35a","chunk-vendors"]),a()})({"10d2":function(s,t,a){"use strict";var e=a("b83b"),r=a.n(e);r.a},"12a3":function(s,t,a){},"269f":function(s,t,a){"use strict";var e=a("2ace"),r=a.n(e);r.a},"2ace":function(s,t,a){},"351c":function(s,t,a){"use strict";var e=a("5d2b"),r=a.n(e);r.a},"5d2b":function(s,t,a){},"61b9":function(s,t,a){},7574:function(s,t,a){},"7f29":function(s,t,a){"use strict";var e=a("61b9"),r=a.n(e);r.a},b83b:function(s,t,a){},d54a:function(s,t,a){"use strict";var e=a("defe"),r=a.n(e);r.a},dea8:function(s,t,a){"use strict";var e=a("7574"),r=a.n(e);r.a},defe:function(s,t,a){},e35a:function(s,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var e=a("2b0e"),r=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("main",{attrs:{id:"app"}},[a("header",{staticClass:"header"},[a("div",{staticClass:"container"},[a("nav",{staticClass:"nav flex align-items-center justify-content-center"},s._l(s.navArr,function(t){return a("router-link",{key:t,staticClass:"nav-item",attrs:{to:{name:t}}},[s._v("\n          "+s._s(t)+"\n        ")])}),1)])]),a("section",{staticClass:"body"},[a("div",{staticClass:"container"},[a("div",{staticClass:"content"},[a("router-view")],1)])])])},n=[],l={data:function(){return{navArr:["page-index","page-reset","page-utils","page-layout","page-component"]}}},v=l,_=(a("10d2"),a("2877")),p=Object(_["a"])(v,r,n,!1,null,"447dae45",null);p.options.__file="App.vue";var c=p.exports,i=(a("7f7f"),a("8c4f")),o=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"chunk"},[a("readme",{staticClass:"markdown-body"})],1)},d=[],h=function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},m=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("jason-css")]),a("blockquote",[a("p",[s._v("css 库，分为 定宽、响应式、小程序 三种模式库")])]),a("h2",[s._v("文档")]),a("blockquote",[a("p",[a("a",{attrs:{href:"https://q-jason.github.io/jason-css/"}},[s._v("docs")])])]),a("h2",[s._v("install")]),a("ol",[a("li",[s._v("引入打包好的 css，wxss 文件")]),a("li",[s._v("模块化打包（推荐，定制性强）")])]),a("h3",[s._v("link 标签")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("link")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rel")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"stylesheet"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("href")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"dist/normal.css"')]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- or --\x3e")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("link")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rel")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"stylesheet"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("href")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"dist/responsive.css"')]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("小程序")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-scss"}},[a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// app.wxss")]),s._v('\n@import "./dist/mini-program'),a("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".wxss")]),s._v('";\n')])]),a("h3",[s._v("模块化打包")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[s._v("npm i --save jason-css\n")])]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 定宽")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'jason-css/src/normal.scss'")]),s._v(";\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 响应式")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'jason-css/src/responsive.scss'")]),s._v(";\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 小程序")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'jason-css/src/mini-program.scss'")]),s._v(";\n")])]),a("h2",[s._v("定制")]),a("blockquote",[a("p",[s._v("link 标签引入的方法只能通过修改 src/lib/variable.scss 后重新打包")])]),a("ol",[a("li",[s._v("新建三个 scss 文件 (jason-css.scss utils.scss variable.scss)")]),a("li",[s._v("在 variable.scss 中重写变量")]),a("li",[s._v("在 jason-css.scss 和 utils.scss 中引入 variable.scss")]),a("li",[s._v("jason-css.scss 中 引入 node_modules/jason-css/src/(normal|responsive|mini-program).scss")]),a("li",[s._v("utils.scss 中引入 node_modules/jason-css/src/lib/utils.scss")]),a("li",[s._v("全局引入 jason-css.scss")]),a("li",[s._v("需要使用 scss 工具库的地方引入 utils.scss")])]),a("h3",[s._v("可复写的变量以及默认值")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-scss"}},[a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 栅格列数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-variable"}},[s._v("$col-num")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("12")]),s._v(" !default;\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 是否使用 flex")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-variable"}},[s._v("$use-flex")]),s._v(": true !default;\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// normal 模式 contianer 的宽度")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-variable"}},[s._v("$container-normal-max-width")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1260px")]),s._v(" !default;\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// container 左右槽宽")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-variable"}},[s._v("$container-gutter")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30px")]),s._v(" !default;\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// space 最大的级别")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-variable"}},[s._v("$space-max-level")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20")]),s._v(" !default;\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 级别间的跨度")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-variable"}},[s._v("$space-level-span")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5px")]),s._v(" !default;\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// space 响应式最低档缩小比例")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-variable"}},[s._v("$space-min-ratio")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.3")]),s._v(" !default;\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// space 最小值")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-variable"}},[s._v("$space-min-val")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5px")]),s._v(" !default;\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 响应式断点，从小到大写")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-variable"}},[s._v("$responsive-breakpoint")]),s._v(": (\n  // 手机\n  xs: (min-width: "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0px")]),s._v(", container-max-width: "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100%")]),s._v("),\n  // 平板\n  sm: (min-width: "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("768px")]),s._v(", container-max-width: "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("720px")]),s._v("),\n  // 小屏电脑\n  md: (min-width: "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("992px")]),s._v(", container-max-width: "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("960px")]),s._v("),\n  // 大屏电脑\n  lg: (min-width: "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1280px")]),s._v(", container-max-width: "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1260px")]),s._v(")\n) !default;\n\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// -----------------------------------------------------------------")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// fs 最大的级别")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-variable"}},[s._v("$fs-max-level")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40")]),s._v(" !default;\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 级别间的跨度")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-variable"}},[s._v("$fs-level-span")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2px")]),s._v(" !default;\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// fs 响应式最低档缩小比例")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-variable"}},[s._v("$fs-min-ratio")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.2")]),s._v(" !default;\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// fs 最小值")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-variable"}},[s._v("$fs-min-val")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("8px")]),s._v(" !default;\n\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// ---------------------------------------------------------")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// line-height 最大的级别")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-variable"}},[s._v("$lh-max-level")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(" !default;\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 级别间的跨度")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-variable"}},[s._v("$lh-level-span")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.1")]),s._v(" !default;\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// line-height 响应式最低档缩小比例")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-variable"}},[s._v("$lh-min-ratio")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.7")]),s._v(" !default;\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// line-height 最小值")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-variable"}},[s._v("$lh-min-val")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1.15")]),s._v(" !default;\n\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// ------------------------------------------------------------")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// margin 最大的级别")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-variable"}},[s._v("$margin-max-level")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20")]),s._v(" !default;\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 级别间的跨度")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-variable"}},[s._v("$margin-level-span")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5px")]),s._v(" !default;\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// margin 响应式最低档缩小比例")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-variable"}},[s._v("$margin-min-ratio")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.3")]),s._v(" !default;\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// margin 最小值")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-variable"}},[s._v("$margin-min-val")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5px")]),s._v(" !default;\n\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// ------------------------------------------------")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// padding 最大的级别")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-variable"}},[s._v("$padding-max-level")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20")]),s._v(" !default;\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 级别间的跨度")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-variable"}},[s._v("$padding-level-span")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5px")]),s._v(" !default;\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// padding 响应式最低档缩小比例")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-variable"}},[s._v("$padding-min-ratio")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.3")]),s._v(" !default;\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// padding 最小值")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-variable"}},[s._v("$padding-min-val")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5px")]),s._v(" !default;\n\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// --------------------------------------------------")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 汉堡包按钮每一条线的宽度")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-variable"}},[s._v("$hamburger-layer-width")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40px")]),s._v(";\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 汉堡包按钮每一条线的高度")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-variable"}},[s._v("$hamburger-layer-height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4px")]),s._v(";\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 汉堡包按钮每一条线的高度间隔")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-variable"}},[s._v("$hamburger-layer-spacing")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("6px")]),s._v(";\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 汉堡包按钮线的颜色")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-variable"}},[s._v("$hamburger-layer-color")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("#000")]),s._v(";\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 汉堡包按钮线的圆角效果")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-variable"}},[s._v("$hamburger-layer-border-radius")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4px")]),s._v(";\n")])])])}],u={},b=Object(_["a"])(u,h,m,!1,null,null,null);b.options.__file="README.md";var j=b.exports,f={name:"page-index",components:{Readme:j}},g=f,x=(a("7f29"),Object(_["a"])(g,o,d,!1,null,"4b1e4f84",null));x.options.__file="index.vue";var k=x.exports,w=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("readme",{staticClass:"markdown-body"})},$=[],y=function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},E=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("reset")]),a("blockquote",[a("p",[s._v("基于 normalize v8.0.1，在此基础上增加了部分自定义样式")])]),a("h2",[s._v("小程序 reset")]),a("blockquote",[a("p",[s._v("引入 mini-program.scss 即可，主要全局改变了 box-sizing: border-box")])])])}],q={},O=Object(_["a"])(q,y,E,!1,null,null,null);O.options.__file="README.md";var C=O.exports,R={name:"page-reset",components:{Readme:C}},M=R,A=(a("351c"),Object(_["a"])(M,w,$,!1,null,"ffbc50e2",null));A.options.__file="reset.vue";var z=A.exports,P=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("readme",{staticClass:"markdown-body"})},D=[],S=function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},T=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("utils")]),a("blockquote",[a("p",[s._v("scss 工具库")])]),a("h2",[s._v("function")]),a("table",[a("thead",[a("tr",[a("th",[s._v("name")]),a("th",[s._v("params")]),a("th",[s._v("description")])])]),a("tbody",[a("tr",[a("td",[s._v("strip-unit")]),a("td",[s._v("$val")]),a("td",[s._v("去掉数值单位")])]),a("tr",[a("td",[s._v("vw")]),a("td",[s._v("$val, $width")]),a("td",[s._v("将 px 值 按照 width 转换成 vw 单位，默认 width 为 1920")])]),a("tr",[a("td",[s._v("reverse")]),a("td",[s._v("$list")]),a("td",[s._v("将 list 翻转")])]),a("tr",[a("td",[s._v("rpx")]),a("td",[s._v("$val")]),a("td",[s._v("解决微信小程序报错编辑器问题，rpx(10px) -> 10rpx")])])])]),a("h2",[s._v("mixins")]),a("table",[a("thead",[a("tr",[a("th",[s._v("name")]),a("th",[s._v("params")]),a("th",[s._v("description")])])]),a("tbody",[a("tr",[a("td",[s._v("clearfix")]),a("td",[s._v("$val")]),a("td",[s._v("清除浮动影响")])]),a("tr",[a("td",[s._v("bg-cover")]),a("td",[s._v("$x, $y")]),a("td",[s._v("背景 cover 处理")])]),a("tr",[a("td",[s._v("ellipsis")]),a("td",[s._v("-")]),a("td",[s._v("文字一行显示，溢出隐藏")])]),a("tr",[a("td",[s._v("cover")]),a("td",[s._v("$z-index, $position")]),a("td",[s._v("覆盖")])]),a("tr",[a("td",[s._v("res")]),a("td",[s._v("$attr, $base-value, $breakpoints")]),a("td",[s._v("响应式属性")])])])]),a("h3",[s._v("res example")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-scss"}},[s._v("@include res("),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("color")]),s._v(", red, (\n  md: green,\n  sm: pink,\n  xs: black,\n))\n")])])])}],J={},B=Object(_["a"])(J,S,T,!1,null,null,null);B.options.__file="README.md";var F=B.exports,G={name:"page-utils",components:{Readme:F}},H=G,I=(a("dea8"),Object(_["a"])(H,P,D,!1,null,"2c68d534",null));I.options.__file="utils.vue";var K=I.exports,L=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("readme",{staticClass:"markdown-body"})},N=[],Q=function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},U=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("layout")]),a("blockquote",[a("p",[s._v("布局工具库，等级(level)相关的类响应时，会自动缩放")])]),a("h2",[s._v("栅格布局")]),a("blockquote",[a("p",[s._v("参考了 bootstrap，分为 flex 和 float 两种实现方式 ($use-flex)")])]),a("table",[a("thead",[a("tr",[a("th",[s._v("class")]),a("th",[s._v("description")])])]),a("tbody",[a("tr",[a("td",[s._v("container")]),a("td",[s._v("定宽容器")])]),a("tr",[a("td",[s._v("container-fluid")]),a("td",[s._v("宽度 100% 的容器")])]),a("tr",[a("td",[s._v("row")]),a("td",[s._v("行，若为 flex 模式，则可用 flex 工具类")])]),a("tr",[a("td",[s._v("row.space-{level}")]),a("td",[s._v("行中列间距")])]),a("tr",[a("td",[s._v("col-{num}")]),a("td",[s._v("定宽库 列")])]),a("tr",[a("td",[s._v("col-{breakpoint}-{num")]),a("td",[s._v("auto}")])]),a("tr",[a("td",[s._v("col")]),a("td",[s._v("flex 模式专有，flex-grow: 1")])])])]),a("h2",[s._v("默认断点")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-scss"}},[a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 响应式断点，从小到大写")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-variable"}},[s._v("$responsive-breakpoint")]),s._v(": (\n  // 手机\n  xs: (min-width: "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0px")]),s._v(", container-max-width: "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100%")]),s._v("),\n  // 平板\n  sm: (min-width: "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("768px")]),s._v(", container-max-width: "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("720px")]),s._v("),\n  // 小屏电脑\n  md: (min-width: "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("992px")]),s._v(", container-max-width: "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("960px")]),s._v("),\n  // 大屏电脑\n  lg: (min-width: "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1280px")]),s._v(", container-max-width: "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1260px")]),s._v(")\n) !default;\n")])]),a("h2",[s._v("text 工具类")]),a("blockquote",[a("p",[s._v("断点可去掉")])]),a("table",[a("thead",[a("tr",[a("th",[s._v("class")]),a("th",[s._v("description")])])]),a("tbody",[a("tr",[a("td",[s._v("text-align-${name}-left")]),a("td",[s._v("text-align: left")])]),a("tr",[a("td",[s._v("text-align-${name}-center")]),a("td",[s._v("text-align: center")])]),a("tr",[a("td",[s._v("text-align-${name}-right")]),a("td",[s._v("text-align: right")])]),a("tr",[a("td",[s._v("text-nowrap")]),a("td",[s._v("使行内元素不换行")])])])]),a("h2",[s._v("flex 布局")]),a("blockquote",[a("p",[s._v("若 $use-flex 为 false 则不可用")])]),a("table",[a("thead",[a("tr",[a("th",[s._v("class")]),a("th",[s._v("description")])])]),a("tbody",[a("tr",[a("td",[s._v("flex")]),a("td",[s._v("display: flex")])]),a("tr",[a("td",[s._v("inline-flex")]),a("td",[s._v("display: inline-flex")])])])]),a("h3",[s._v("flex 工具类")]),a("blockquote",[a("p",[s._v("断点均可去掉")])]),a("table",[a("thead",[a("tr",[a("th",[s._v("class")]),a("th",[s._v("description")])])]),a("tbody",[a("tr",[a("td",[s._v("flex-{breakpoint}-row")]),a("td",[s._v("flex-direction: row")])]),a("tr",[a("td",[s._v("flex-{breakpoint}-row-reverse")]),a("td",[s._v("flex-direction: row-reverse")])]),a("tr",[a("td",[s._v("flex-{breakpoint}-column")]),a("td",[s._v("flex-direction: column")])]),a("tr",[a("td",[s._v("flex-{breakpoint}-column-reverse")]),a("td",[s._v("flex-direction: column-reverse")])]),a("tr",[a("td",[s._v("flex-{breakpoint}-nowrap")]),a("td",[s._v("flex-wrap: nowrap")])]),a("tr",[a("td",[s._v("flex-{breakpoint}-wrap")]),a("td",[s._v("flex-wrap: wrap")])]),a("tr",[a("td",[s._v("flex-{breakpoint}-wrap-reverse")]),a("td",[s._v("flex-wrap: wrap-reverse")])]),a("tr",[a("td",[s._v("justify-content-{breakpoint}-start")]),a("td",[s._v("justify-content: flex-start")])]),a("tr",[a("td",[s._v("justify-content-{breakpoint}-end")]),a("td",[s._v("justify-content: flex-end")])]),a("tr",[a("td",[s._v("justify-content-{breakpoint}-center")]),a("td",[s._v("justify-content: center")])]),a("tr",[a("td",[s._v("justify-content-{breakpoint}-between")]),a("td",[s._v("justify-content: space-between")])]),a("tr",[a("td",[s._v("justify-content-{breakpoint}-around")]),a("td",[s._v("justify-content: space-around")])]),a("tr",[a("td",[s._v("align-items-{breakpoint}-start")]),a("td",[s._v("align-items: flex-start")])]),a("tr",[a("td",[s._v("align-items-{breakpoint}-end")]),a("td",[s._v("align-items: flex-end")])]),a("tr",[a("td",[s._v("align-items-{breakpoint}-center")]),a("td",[s._v("align-items: center")])]),a("tr",[a("td",[s._v("align-items-{breakpoint}-baseline")]),a("td",[s._v("align-items: baseline")])]),a("tr",[a("td",[s._v("align-items-{breakpoint}-stretch")]),a("td",[s._v("align-items: stretch")])]),a("tr",[a("td",[s._v("align-content-{breakpoint}-start")]),a("td",[s._v("align-content: flex-start")])]),a("tr",[a("td",[s._v("align-content-{breakpoint}-end")]),a("td",[s._v("align-content: flex-end")])]),a("tr",[a("td",[s._v("align-content-{breakpoint}-center")]),a("td",[s._v("align-content: center")])]),a("tr",[a("td",[s._v("align-content-{breakpoint}-between")]),a("td",[s._v("align-content: space-between")])]),a("tr",[a("td",[s._v("align-content-{breakpoint}-around")]),a("td",[s._v("align-content: space-around")])]),a("tr",[a("td",[s._v("align-content-{breakpoint}-stretch")]),a("td",[s._v("align-content: stretch")])]),a("tr",[a("td",[s._v("align-self-{breakpoint}-start")]),a("td",[s._v("align-self: start")])]),a("tr",[a("td",[s._v("align-self-{breakpoint}-end")]),a("td",[s._v("align-self: end")])]),a("tr",[a("td",[s._v("align-self-{breakpoint}-center")]),a("td",[s._v("align-self: center")])]),a("tr",[a("td",[s._v("align-self-{breakpoint}-baseline")]),a("td",[s._v("align-self: baseline")])]),a("tr",[a("td",[s._v("align-self-{breakpoint}-stretch")]),a("td",[s._v("align-self: stretch")])]),a("tr",[a("td",[s._v("order-{breakpoint}-{num}")]),a("td",[s._v("order: n")])])])]),a("h2",[s._v("内外间距")]),a("blockquote",[a("p",[s._v("margin 和 padding 的封装 "),a("br"),s._v("\n等级默认为 5px 递增")])]),a("table",[a("thead",[a("tr",[a("th",[s._v("class")]),a("th",[s._v("description")])])]),a("tbody",[a("tr",[a("td",[s._v("m{dir}-{level}")]),a("td",[s._v("定宽库 margin 命名规则")])]),a("tr",[a("td",[s._v("m{dir}-{breakpoint}-{level}")]),a("td",[s._v("响应式库 margin 命名规则")])]),a("tr",[a("td",[s._v("p{dir}-{level}")]),a("td",[s._v("定宽度 padding 命名规则")])]),a("tr",[a("td",[s._v("p{dir}-{breakpoint}-{level}")]),a("td",[s._v("响应式库 padding 命名规则")])])])]),a("h3",[s._v("dir说明")]),a("table",[a("thead",[a("tr",[a("th",[s._v("dir")]),a("th",[s._v("description")])])]),a("tbody",[a("tr",[a("td",[s._v("t")]),a("td",[s._v("上")])]),a("tr",[a("td",[s._v("r")]),a("td",[s._v("右")])]),a("tr",[a("td",[s._v("b")]),a("td",[s._v("下")])]),a("tr",[a("td",[s._v("l")]),a("td",[s._v("左")])]),a("tr",[a("td",[s._v("x")]),a("td",[s._v("左右")])]),a("tr",[a("td",[s._v("y")]),a("td",[s._v("上下")])])])]),a("h2",[s._v("字体大小")]),a("blockquote",[a("p",[s._v("font-size 的封装 "),a("br"),s._v("\n默认第一级为 12px，等级已 2px 的跨度递增")])]),a("table",[a("thead",[a("tr",[a("th",[s._v("class")]),a("th",[s._v("description")])])]),a("tbody",[a("tr",[a("td",[s._v("fs-{level}")]),a("td",[s._v("定宽库 font-size 命名规则")])]),a("tr",[a("td",[s._v("fs-{breakpoint}-{level}")]),a("td",[s._v("响应式库 font-size 命名规则")])])])]),a("h2",[s._v("行高")]),a("blockquote",[a("p",[s._v("line-height 的封装 "),a("br"),s._v("\n默认第一级为 1.15，等级已 0.1 的跨度递增")])]),a("table",[a("thead",[a("tr",[a("th",[s._v("class")]),a("th",[s._v("description")])])]),a("tbody",[a("tr",[a("td",[s._v("lh-{level}")]),a("td",[s._v("定宽库 line-height 命名规则")])]),a("tr",[a("td",[s._v("lh-{breakpoint}-{level}")]),a("td",[s._v("响应式库 line-height 命名规则")])])])])])}],V={},W=Object(_["a"])(V,Q,U,!1,null,null,null);W.options.__file="README.md";var X=W.exports,Y={name:"page-layout",components:{Readme:X}},Z=Y,ss=(a("d54a"),Object(_["a"])(Z,L,N,!1,null,"7003b4b8",null));ss.options.__file="layout.vue";var ts=ss.exports,as=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("readme",{staticClass:"markdown-body"})],1)},es=[],rs=function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},ns=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("component")]),a("blockquote",[a("p",[s._v("常用的 css 效果组件")])]),a("h2",[s._v("background")]),a("blockquote",[a("p",[s._v("背景图组件")])]),a("table",[a("thead",[a("tr",[a("th",[s._v("class")]),a("th",[s._v("description")])])]),a("tbody",[a("tr",[a("td",[s._v("bg-100")]),a("td",[s._v("背景失真填充")])]),a("tr",[a("td",[s._v("bg-cover")]),a("td",[s._v("背景保证宽高比填充，溢出则默认显示中心区域")])]),a("tr",[a("td",[s._v("bg-cover.top")]),a("td",[s._v("background-position-x: top")])]),a("tr",[a("td",[s._v("bg-cover.right")]),a("td",[s._v("background-position-x: right")])]),a("tr",[a("td",[s._v("bg-cover.bottom")]),a("td",[s._v("background-position-x: bottom")])]),a("tr",[a("td",[s._v("bg-cover.left")]),a("td",[s._v("background-position-x: left")])])])]),a("h2",[s._v("img")]),a("blockquote",[a("p",[s._v("图片组件")])]),a("table",[a("thead",[a("tr",[a("th",[s._v("class")]),a("th",[s._v("description")])])]),a("tbody",[a("tr",[a("td",[s._v("img-responsive")]),a("td",[s._v("使图片最大宽度不超过父元素，并水平居中显示")])]),a("tr",[a("td",[s._v("img-full")]),a("td",[s._v("填充父元素，高度等比例缩放")])])])]),a("h2",[s._v("scrollx")]),a("blockquote",[a("p",[s._v("横向滚动组件")])]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("section")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"scrollx"')]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("section")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"scrollx-wrapper"')]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("article")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"scrollx-item"')]),s._v(">")]),s._v("..."),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("article")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("article")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"scrollx-item"')]),s._v(">")]),s._v("..."),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("article")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("article")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"scrollx-item"')]),s._v(">")]),s._v("..."),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("article")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("article")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"scrollx-item"')]),s._v(">")]),s._v("..."),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("article")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("section")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("section")]),s._v(">")]),s._v("\n")])]),a("h2",[s._v("table")]),a("blockquote",[a("p",[s._v("响应式表格（溢出横向滚动）")])]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[s._v("  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("section")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"table-responsive"')]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("table")]),s._v(">")]),s._v("..."),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("table")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("section")]),s._v(">")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 禁止自动换行 --\x3e")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("section")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"table-responsive nowrap"')]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("table")]),s._v(">")]),s._v("..."),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("table")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("section")]),s._v(">")]),s._v("\n")])]),a("h2",[s._v("hamburger")]),a("blockquote",[a("p",[s._v("汉堡包按钮")])]),a("table",[a("thead",[a("tr",[a("th",[s._v("class")]),a("th",[s._v("description")])])]),a("tbody",[a("tr",[a("td",[s._v("hamburger")]),a("td",[s._v("汉堡包按钮基本属性")])]),a("tr",[a("td",[s._v("hamburger-{1~13}")]),a("td",[s._v("汉堡包按钮指定效果")])]),a("tr",[a("td",[s._v("hamburger.active")]),a("td",[s._v("激活样式")])])])])])}],ls={},vs=Object(_["a"])(ls,rs,ns,!1,null,null,null);vs.options.__file="README.md";var _s=vs.exports,ps={name:"page-component",components:{Readme:_s}},cs=ps,is=(a("269f"),Object(_["a"])(cs,as,es,!1,null,"0ca0b1fb",null));is.options.__file="component.vue";var os=is.exports;e["a"].use(i["a"]);var ds=new i["a"]({routes:[{path:"/index",name:k.name,component:k},{path:"/reset",name:z.name,component:z},{path:"/utils",name:K.name,component:K},{path:"/layout",name:ts.name,component:ts},{path:"/component",name:os.name,component:os},{path:"*",redirect:{name:k.name}}]});a("12a3"),a("e4cb");e["a"].config.productionTip=!1,new e["a"]({router:ds,render:function(s){return s(c)}}).$mount("#app")}});
//# sourceMappingURL=app.fc42dd8d.js.map
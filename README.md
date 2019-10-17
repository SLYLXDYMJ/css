# jason-css
> 项目 css 基础库，scss 实现 <br/>
> 附带 scss 工具库

## 文档，文档中的命名介绍
> [https://q-jason.github.io/css](https://q-jason.github.io/css)

name           | example                  | description
-------------- | ------------------------ | ---------------------------------------------
breakpoint     | .col-${ breakpoint }-6   | 响应式断点名称，默认的为 xs、sm、md、lg，可通过 scss 变量修改
weight         | .col-${ weight }         | 权重，主要用于栅格中，语义为占的比重大小
level          | .fs-${ level }           | 等级，该系列类不建议在项目中使用，影响维护性，适合于你不知道如何命名你的元素的场景！
range          | .flex-row-sm-${ range }  | 区间，主要用于响应式区间选择，值为 up，down，only，启发与 vuetify
dir            | .m${dir}-5               | 方向，主要用于 margin padding level 类，值为 t、r、b、l、x、y，分别为 上、右、下、左、左右、上下


## 三套库介绍
> 内置了三套 css 库

1. normal - 电脑、手机网站，webApp
2. responsive - 响应式网站
3. mini-program - 小程序

## 安装

```bash
npm i --save jason-css
```

## 使用
> 非模块化引入赋值 dist 目录下相应的文件引入即可 <br/>
> 下面推荐 scss 方式引入，需要预先配置 sass-loader

```scss
// 全局 scss 文件中

// 自定义变量
@import "./custom-variable.scss";

// 引入响应的库
@import "./src/normal/index.scss";
// or
@import "./src/responsive/index.scss";
// or
@import "./src/mini-program/index.scss";
```

```scss
// scss 工具库引入

// 自定义变量
@import "./custom-variable.scss";

// 引入响应的库
@import "./src/normal/util.scss";
// or
@import "./src/responsive/util.scss";
// or
@import "./src/mini-program/util.scss";
```
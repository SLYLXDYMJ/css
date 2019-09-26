# jason-css
> 项目 css 基础库，scss 实现 <br/>
> 附带 scss 工具库

## 文档
> [https://q-jason.github.io/css](https://q-jason.github.io/css)

## 库
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

```scss
// 全局 scss 文件中

// 定制的变量（可无）
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

// 定制的变量（可无）
@import "./custom-variable.scss";

// 引入响应的库
@import "./src/normal/util.scss";
// or
@import "./src/responsive/util.scss";
// or
@import "./src/mini-program/util.scss";
```
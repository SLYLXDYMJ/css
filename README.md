# jason-css
> css 库，分为 定宽、响应式、小程序 三种模式库

> 并附带 scss 工具库

## 文档
> [https://q-jason.github.io/jason-css/](https://q-jason.github.io/jason-css/)

## 使用
> link 引入的方式若想定制，只能下载本项目然后修改 /src/lib/variable.scss 后重新打包
```html
<link rel="stylesheet" href="dist/normal.css">
<!-- or -->
<link rel="stylesheet" href="dist/responsive.css">
```

```scss
// app.wxss
@import "./dist/mini-program.wxss";
```

## 模块化引入（推荐，可定制性强）
> 需要配置 sass 环境

```bash
npm i --save jason-css
```

```scss
// global.scss

// 自定义的变量
@import "./current-variable.scss";
// and
@import "~jason-css/src/normal.scss";
// or
@import "~jason-css/src/responsive.scss";
// or
@import "~jason-css/src/mini-program.scss";
```

```scss
// 工具库的使用
// page.scss

@import "~jason/css/src/utils/normal.scss";
// or
@import "~jason/css/src/utils/responsive.scss";
// or
@import "~jason/css/src/utils/mini-program.scss";
```

### 可复写的变量以及默认值
```scss
// 是否使用 flex
$use-flex: true !default;

// 栅格列数
$col-num: 12 !default;

// normal 模式 contianer 的宽度
$container-normal-max-width: 1260px !default;

// container 左右槽宽
$container-gutter: 30px !default;

// 响应式断点，从小到大写
$responsive-breakpoint: (
  // 手机
  xs: (min-width: 0px, container-max-width: 100%),
  // 平板
  sm: (min-width: 768px, container-max-width: 720px),
  // 小屏
  md: (min-width: 992px, container-max-width: 960px),
  // 大屏
  lg: (min-width: 1280px, container-max-width: 1230px)
) !default;

// -----------------------------------------------------------------

// .row.space 最大的级别
$space-max-level: 20 !default;
// .row.span 级别间的跨度
$space-level-span: 5px !default;
// .row.space 响应式最低档缩小比例
$space-min-ratio: 0.5 !default;
// .row.space 最小值
$space-min-val: 5px !default;

// -----------------------------------------------------------------

// fs 最大的级别
$fs-max-level: 40 !default;
// 级别间的跨度
$fs-level-span: 2px !default;
// fs 响应式最低档缩小比例
$fs-min-ratio: 0.6 !default;
// fs 最小值
$fs-min-val: 12px !default;

// ---------------------------------------------------------

// line-height 最大的级别
$lh-max-level: 10 !default;
// 级别间的跨度
$lh-level-span: 0.1 !default;
// line-height 响应式最低档缩小比例
$lh-min-ratio: 0.94 !default;
// line-height 最小值
$lh-min-val: 1.0 !default;

// ------------------------------------------------------------

// margin 最大的级别
$margin-max-level: 20 !default;
// 级别间的跨度
$margin-level-span: 5px !default;
// margin 响应式最低档缩小比例
$margin-min-ratio: 0.5 !default;
// margin 最小值
$margin-min-val: 5px !default;

// ------------------------------------------------

// padding 最大的级别
$padding-max-level: 20 !default;
// 级别间的跨度
$padding-level-span: 5px !default;
// padding 响应式最低档缩小比例
$padding-min-ratio: 0.5 !default;
// padding 最小值
$padding-min-val: 5px !default;

// --------------------------------------------------

// 汉堡包按钮每一条线的宽度
$hamburger-layer-width: 40px !default;
// 汉堡包按钮每一条线的高度
$hamburger-layer-height: 4px !default;
// 汉堡包按钮每一条线的高度间隔
$hamburger-layer-spacing: 6px !default;
// 汉堡包按钮线的颜色
$hamburger-layer-color: #000 !default;
// 汉堡包按钮线的圆角效果
$hamburger-layer-border-radius: 4px !default;
```
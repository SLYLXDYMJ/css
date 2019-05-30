# jason-css
> css 库，分为 定宽、响应式、小程序 三种模式库

## 文档
> [docs](https://q-jason.github.io/jason-css/)

## install

1. 引入打包好的 css，wxss 文件
2. 模块化打包（推荐，定制性强）

### link 标签
```html
<link rel="stylesheet" href="dist/normal.css">
<!-- or -->
<link rel="stylesheet" href="dist/responsive.css">
```

### 小程序
```scss
// app.wxss
@import "./dist/mini-program.wxss";
```

### 模块化打包
```bash
npm i --save jason-css
```

```javascript
// 定宽
import 'jason-css/src/normal.scss';
// 响应式
import 'jason-css/src/responsive.scss';
// 小程序
import 'jason-css/src/mini-program.scss';
```

## 定制
> link 标签引入的方法只能通过修改 src/lib/variable.scss 后重新打包

1. 新建三个 scss 文件 (jason-css.scss utils.scss variable.scss)
2. 在 variable.scss 中重写变量
3. 在 jason-css.scss 和 utils.scss 中引入 variable.scss
4. jason-css.scss 中 引入 node_modules/jason-css/src/(normal|responsive|mini-program).scss
5. utils.scss 中引入 node_modules/jason-css/src/lib/utils.scss
6. 全局引入 jason-css.scss
7. 需要使用 scss 工具库的地方引入 utils.scss

### 可复写的变量以及默认值
```scss
// 栅格列数
$col-num: 12 !default;
// 是否使用 flex
$use-flex: true !default;
// normal 模式 contianer 的宽度
$container-normal-max-width: 1260px !default;
// container 左右槽宽
$container-gutter: 30px !default;
// space 最大的级别
$space-max-level: 20 !default;
// 级别间的跨度
$space-level-span: 5px !default;
// space 响应式最低档缩小比例
$space-min-ratio: 0.5 !default;
// space 最小值
$space-min-val: 5px !default;
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
$lh-min-val: 1.15 !default;

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
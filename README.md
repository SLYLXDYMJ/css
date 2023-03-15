# jason-css
> 基于 scss 的 css 基础库

## 文档
> [https://slylxdymj.github.io/css/](https://slylxdymj.github.io/css/)

## 不同项目选择不同的 css 基础库
> 内部实现了三套适应于不同项目的库

- normal，适合于常规项目
- responsive，适合于响应式项目
- mini-program，小程序项目

## 如何使用
> 非工程化只需要引入 dist 下对应文件即可 <br/>

```bash
npm i --save jason-css
```

```scss
// 全局 scss 文件中 global.scss

// 自定义变量
@import "./custom-variable.scss";

// 根据需要引用基础库，三选一
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

// 根据需要引用工具库，三选一
@import "./src/normal/util.scss";
// or
@import "./src/responsive/util.scss";
// or
@import "./src/mini-program/util.scss";
```

## 文档类名中的变量解析

### ${ breakpoint } 
> 响应式断点，用于表示断点的名称

```html
<!-- 其中的 lg md sm xs 为 ${ breakpoint }  -->
<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12"></div>
```

### ${ weight }
> 权重，主要用于 grid(栅格) 中，语义为占的比重大小

```html
<!-- 其中的 3, 4, 6, 12 为 ${ weight }  -->
<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12"></div>
```

### ${ level }
> 等级，响应式库中在各个断点会按照一定规则自动缩放

```html
<!-- 下面类名中的数字即为 ${ level } -->
<div class="fs-4 lh-8 mt-5 mb-5 pt-5 pb-5"></div>
```

注意：等级类系列不建议在项目中大量使用，适合于你不知道如何命名你的元素的场景！

### ${ range }
> 响应式范围，up、down、only 三种 <br/>
> 用于响应式屏幕范围的选择

```html
<!-- md 断点之上隐藏 -->
<div class="hidden-md-up"></div>
<!-- md 断点之下隐藏 -->
<div class="hidden-md-down"></div>
<!-- 只有 md 断点隐藏 -->
<div class="hidden-md-only"></div>
```

### ${ dir }
> 方向，用于 margin 和 padding 工具类确定方向 <br/>
> t、r、b、l、x、y，分别为 上、右、下、左、左右、上下

```html
<div class="m-4 p-4"></div>
<div class="mt-4 pt-4"></div>
<div class="mr-4 pr-4"></div>
<div class="mb-4 pb-4"></div>
<div class="ml-4 pl-4"></div>
```

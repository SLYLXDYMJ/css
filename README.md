# jason-css-cli
> css 库

## 注意
1. 此库不包含 css reset，看这里 -> [jason-reset](https://github.com/q-jason/jason-reset)

## 特点
1. 响应式、定宽，根据 variable.scss -> $is-responsive 变量切换
2. 响应式（栅格）行中列间距
4. 可随时增删改响应式断点

## 响应式库 和 定宽度的区别
> 用法基本一样，只有栅格系统有所不同（响应式库在定宽度的基础上增加了屏幕标识）

## addones
> 可在 variable.scss 中编辑包含哪些组件，默认全部包含
1. grid - 栅格系统
2. layout - 布局工具类
2. button - 特效按钮
3. hamburger - 13款特效汉堡包按钮
4. utils - 常用的 class 类封装

## 栅格
> 参考了 bootstrap 在其基础上增加了 可变的 行中列间距 <br/>
> 默认使用 flex 实现栅格，可根据 varaible.scss -> flex: false 改为 float 实现栅格 <br/>
> [demo](https://q-jason.github.io/jason-css-lib/grid.html) <br/>

```html
  <div class="container">
    <div class="row col-align-center col-lg-space-20 col-md-space-15 col-sm-space-10">
      <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
        <div class="content"></div>
      </div>
      <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
        <div class="content"></div>
      </div>
      <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
        <div class="content"></div>
      </div>
      <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
        <div class="content"></div>
      </div>
      <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
        <div class="content"></div>
      </div>
      <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
        <div class="content"></div>
      </div>
    </div>
  </div>
```

### 列对其工具类
> 注意：只有 使用 flex 实现栅格才能使用 <br/>
> 注意：此类是写在 .row 元素上的 <br/>
```css
.col-align-full {
  align-items: stretch;
}
.col-align-top {
  align-items: flex-start;
}
.col-align-center {
  align-items: center;
}
.col-align-bottom {
  align-items: flex-end;
}
.col-align-baseline {
  align-items: baseline;
}
```

### 注意：
1. 栅格布局建议严格按照 container > row > col > div.content 的结构布局

## 汉堡包按钮
> 一共 13 种效果 <br/>
> [demo](https://q-jason.github.io/jason-css-lib/hamburger.html)

``` html
  <!-- hamburger 定义基础样式 -->
  <!-- hamburger-num 选择哪一种效果 -->
  <!-- 激活类为 .active -->
  <a class="hamburger hamburger-7" href="#">
    <div></div>
  </a>
```

## 布局工具类
> 不建议使用，会额外增加大量的 css代码体积，并导致 html 与 css 耦合。<br/>

### 存在意义：
1. 快速开发
2. 大量的并且极度不统一的样式时的前端解决方案

#### 使用
```html

<!-- sm 屏 margin：10 -->
<div class="m-sm-10"></div>

<!-- sm 屏 margin-top：10 -->
<div class="mt-sm-10"></div>

<!-- sm 屏 margin-right：10 -->
<div class="mr-sm-10"></div>

<!-- sm 屏 margin-bottom：10 -->
<div class="mb-sm-10"></div>

<!-- sm 屏 margin-left：10 -->
<div class="ml-sm-10"></div>

<!-- md 屏 padding：10 -->
<div class="p-sm-10"></div>

<!-- md 屏 padding-top：10 -->
<div class="pt-sm-10"></div>

<!-- md 屏 padding-right：10 -->
<div class="pr-sm-10"></div>

<!-- md 屏 padding-bottom：10 -->
<div class="pb-sm-10"></div>

<!-- md 屏 padding-left：10 -->
<div class="pl-sm-10"></div>

<!-- xs 屏 font-size：12px -->
<div class="fs-xs-12"></div>

<!-- lg 屏 line-height：1.6 -->
<div class="lh-lg-16"></div>

```

## 特效按钮
> [demo](https://q-jason.github.io/jason-css-lib/button.html)

```html
  <!-- .btn 会将任意按钮(input, a, button)还原成无样式 -->
  <!-- .btn-animte 是特效按钮的基础 class -->
  <!-- .btn-anime-middle 为过渡的时长，可选址为 short, middle(默认值), long -->
  <!-- .btn-slide-left 为 效果 -->
  <a class="btn btn-anime btn-anime-middle btn-slide-left" href="#" data-text="go">
    <span>go</span>
  </a>
```

### 效果类名

|class名         |效果说明 |
|----------------|--------|
|btn-slide-top   |滑动 - 上|
|btn-slide-right |滑动 - 右|
|btn-slide-bottom|滑动 - 下|
|btn-slide-left  |滑动 - 左|

## 工具类
```html
  // 清除浮动影响
  // 防止margin溢出
  *.clearfix
  // 宽度 100%
  *.width-100
  // 高度 100%
  *.height-100
  // 一行显示溢出隐藏
  *.ellipsis
  // 响应式图片
  img.img-responsive
  // 背景处理
  *.bg-cover
  // 强制隐藏
  *.hide
```

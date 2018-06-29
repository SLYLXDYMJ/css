# jason-css-cli
> css 库

-------------------------------------------------------------------------------

## 特点
1. 响应式、定宽（根据 variable.scss -> $is-responsive 变量切换）
2. 响应式（栅格）行中列间距
3. addones 可随时插拔
4. 可随时增删改响应式断点

-------------------------------------------------------------------------------

## 响应式库 和 定宽度的区别
> 用法基本一样，只有栅格系统有所不同（响应式库在定宽度的基础上增加了屏幕标识）

-------------------------------------------------------------------------------

## addones
> 可在 variable.scss 中编辑包含哪些组件，默认全部包含
1. grid - 栅格系统
2. button - 特效按钮
3. hamburger - 13款特效汉堡包按钮
4. utils - 常用的 class 类封装

-------------------------------------------------------------------------------

## 栅格
> 参考了 bootstrap 在其基础上增加了 可变的 行中列间距 <br/>
> [demo](https://q-jason.github.io/jason-css-lib/grid.html)

```html
  <div class="container">
    <div class="row col-lg-space-20 col-md-space-15 col-sm-space-10">
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

### 注意：
栅格布局建议按照 container > row > col > div.content 的结构布局

-------------------------------------------------------------------------------

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

-------------------------------------------------------------------------------

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
|class名|
|-------|
|btn-slide-top|
|btn-slide-right|
|btn-slide-bottom|
|btn-slide-left|
-------------------------------------------------------------------------------

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

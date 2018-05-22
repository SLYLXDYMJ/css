# jason
> 前端切图库 —— 分为定宽和响应式，需要手动选择其css

## 定宽库 和 响应式库的区别
> 基本没有区别，只是响应式库加了屏幕的断点 <br>

## flex
> 优先使用flex版本做栅格 <br/>
> 如果想使用 float 的栅格 <br/>
> 在 src/scss/variables.scss 中更改 <br/>
> 注意：如果用float做栅格则没有 .row 的对齐方式类

```scss
// 是否开启弹性盒子布局
$flex: true;
```

## reset 说明
> 此库不包括全部（含有部分）reset <br>
> 推荐[jason-reset](https://github.com/q-jason/jason-reset)

## 部分 reset
```scss
// html 默认 10px 好设置 rem
html {
  font-size: 10px;
}
// 设置网页默认字体
body {
  font-size: 16px;
  font-family: "Microsoft Yahei", sans-serif;
}
// 设置 按钮默认有过度效果
a, button {
  transition: all .2s ease;
}
```

## 栅格布局系统
> 参考 bootstrap <br>
> 用法基本一致，新增了可变的行中列间距的概念 <br>
> 注：推荐的布局嵌套 容器 > 行 > 列 > div > 标题 + 内容 <br>
> ↓↓↓

```html
<!-- 容器 -->
<div class="container">
  <!-- 行 -->
  <div class="row row-lg-50 row-md-30 row-sm-15 row-xs-10">
    <!-- 列 -->
    <div class="col-xs-6">
      <div>
        <!-- 标题 -->
        <h2></h2>
        <!-- 内容 -->
        <p></p>
      </div>
    </div>
  </div>
</div>
```

## 对齐方式类

```html
<div class="container">
  <!-- 默认 -->
  <div class="row row-align-full"></div>

  <!-- 顶部对其（align-item: flex-start） -->
  <div class="row row-align-top"></div>

  <!-- 居中对其（align-item: flex-center） -->
  <div class="row row-align-center"></div>
  
  <!-- 底部对其（align-item: flex-end） -->
  <div class="row row-align-bottom"></div>
</div>
```

## 布局工具类

```html
<div class="container">
  <div class="row row-lg-50 row-md-30 row-sm-15 row-xs-10">
    <div class="col-xs-6">
      <div class="mt-lg-50 mt-md-30 mt-sm-15 mt-xs-10">abc</div>
    </div>
    <div class="col-xs-6">
      <div class="mt-lg-50 mt-md-30 mt-sm-15 mt-xs-10">abc</div>
    </div>
  </div>
</div>
```

>+ m代表margin
>+ p代表padding
>+ fs代表font-size
>+ lh代表line-height
>+ t , b , l , f , tb , lr 代表方向
>+ 数值 均为 px 单位
>+ 注意 如果 没有 方向（p-xs-20）则代表四个方向（padding: 20px）
>+ 注意 lh 特殊，值的语义不为 px 代表的是 1.0 - 2.0 = 10 - 20;
>+ lh-sm-18(line-height: 1.8) lh-xs-15(line-height: 1.5);

## 工具类 以及 实现方式
### 浮动相关
```scss
// 左浮动
.float-left {
  float: left;
}

// 右浮动
.float-right {
  float: right;
}

// 清除浮动影响
// 防止margin溢出
.clearfix {
  &:before, &:after {
    content: "";
    display: table;
  }
  &:after {
    clear: both;
  }
}
```
### 宽度和高度最大化
```css
// 宽度撑满父容器
.width-full {
  width: 100%;
}

// 高度撑满父容器
.height-full {
  height: 100%;
}
```

### 文字属性相关
```css
// 居左
.text-left {
  text-align: left;
}

// 居中
.text-center {
  text-align: center;
}

// 居右
.text-right {
  text-align: right;
}

// 加粗
.text-bold {
  font-weight:bold;
}

// 一行显示溢出隐藏
.text-nowrap {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

// 英文大写
.text-uppercase {
  text-transform: uppercase;
}
```

### 响应式图片
```css
.img-responsive {
  display: block;
  max-width: 100%;
  margin-left:auto;
  margin-right:auto;
}
```

### 横向列表
```scss
// 横向列表 float 实现方式
ul.list-float,
ol.list-float {
  @extend .clearfix;
  li {float: left}
}

// 横向列表 inline-block 实现方式
ul.list-inline-block,
ol.list-inline-block {
  li {display: inline-block}
}

// 横向列表 flex 实现方式（如果开启了弹性布局）
ul.list-flex,
ol.list-flex {
  display: flex;
}
```

### 响应式背景
```css
.bg-cover {
  background-size:cover;
  background-position:center;
}
```

### 强制隐藏元素
```css
.hide{
  display: none !important;
}
```

### 响应式隐藏元素
```css
@media (max-width: 767px) {
  .hide-xs {
    display: none;
  }
}
@media (max-width: 991px) {
  .hide-sm {
    display: none;
  }
}
@media (max-width: 1199px) {
  .hide-md {
    display: none;
  }
}
```

### 特效按钮
> 详细 看 example -> btn.html
```html
<a class="btn btn-anime btn-anime-short btn-slide-top" data-text="slide-top">
  <span>slide-top</span>
</a>
```

### 汉堡包按钮
> 详细 看 example -> hamburger.html
```html
<div class="hamburger hamburger-1">
  <div></div>
</div>
```

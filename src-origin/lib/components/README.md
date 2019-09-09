# component
> 常用的 css 效果组件

## background
> 背景图组件

 class           | description
 --------------- | ----------------------------------------------
 bg-100          | 背景失真填充
 bg-cover        | 背景保证宽高比填充，溢出则默认显示中心区域
 
```html
<div class="bg-cover"></div>
<div class="bg-100"></div>
```

## img
> 图片组件

 class           | description
 --------------- | ----------------------------------------------
 img-responsive  | 使图片最大宽度不超过父元素
 img-full        | 宽度等于父元素，高度等比例缩放

```html
<img class="img-responsive" src="xxx.jpg" alt="">
<img class="img-full" src="xxx.jpg" alt="">

<!-- margin: 0 auto -->
<img class="img-responsive mx-auto" src="xxx.jpg" alt="">
```

## scrollx
> 横向滚动组件

```html
<section class="scrollx">
  <section class="scrollx-wrapper">
    <article class="scrollx-item">...</article>
    <article class="scrollx-item">...</article>
    <article class="scrollx-item">...</article>
    <article class="scrollx-item">...</article>
  </section>
</section>
```

## table
> 响应式表格（不换行，溢出横向滚动）

```html
  <section class="table-responsive">
    <table>...</table>
  </section>
```

## hamburger
> 汉堡包按钮

 class            | description
 ---------------- | ----------------------------------------------
 hamburger        | 汉堡包按钮基本属性
 hamburger-{1~13} | 汉堡包按钮指定效果
 hamburger.active | 激活样式

```html
<div class="hamburger hamburger-8">
  <div></div>
</div>

<div class="hamburger hamburger-8 active">
  <div></div>
</div>
```
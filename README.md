# jason
前端切图库 —— 分为定宽和响应式，需要手动选择其css

## 定宽库 和 响应式库的区别
基本没有区别 =。= 只是定宽库要将 代表 屏幕的标示去掉 比如 row-10 mt-20

## reset 说明
游览器默认样式统统删除！

## 栅格布局系统
> 参考 bootstrap 。基本与bootstrap的栅格系统一致 <br>
> 新增了行中列间距的概念 <br>
> 数值 为 px 单位 <br>
> 注意：在需要栅格布局的时候，需严格按照 .container/.container-fluid > .row > .col 的栅格模式去布局
### 例子
```html
  <div class="container">
    <div class="row row-lg-50 row-md-30 row-sm-15 row-xs-10">
      <div class="col-xs-6"></div>
      <div class="col-xs-6"></div>
    </div>
  </div>
```
### 实现方式
```css
.row-xs-10 {
  margin-left: -5px;
  margin-right: -5px;
}
.row-xs-0 > div {
  padding-left: 5px;
  padding-right: 5px;
}
@media screen and (min-width: 768px) {
  .row-sm-15 {
    margin-left: -7.5px;
    margin-right: -7.5px;
  }
  .row-sm-15 > div {
    padding-left: 7.5px;
    padding-right: 7.5px;
  }
}
@media screen and (min-width: 992px) {
  .row-md-30 {
    margin-left: -15px;
    margin-right: -15px;
  }
  .row-md-30 > div {
    padding-left: 15px;
    padding-right: 15px;
  }
}
@media screen and (min-width: 1280px) {
  .row-lg-50 {
    margin-left: -25px;
    margin-right: -25px;
  }
  .row-lg-50 > div {
    padding-left: 25px;
    padding-right: 25px;
  }
}
```

## 布局工具类
### 例子
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

### 实现方式
```css
.mt-xs-10 {
  margin-top:10px;
}
@media screen and (min-width: 768px) {
  .mt-sm-15 {
    margin-top:15px;
  }
}
@media screen and (min-width: 992px) {
  .mt-md-30 {
    margin-top:30px;
  }
}
@media screen and (min-width: 1280px) {
  .mt-lg-50 {
    margin-top:50px;
  }
}
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

## 工具类
### 浮动相关
#### 左浮动
```css
.float-left {
  float: left;
}
```
#### 右浮动
```css
.float-left {
  float: right;
}
```
#### 清除浮动影响
```css
.clearfix:before,.clearfix:after{
  content:"";
  display: table;
}
.clearfix:after{
  clear: both;
}
```

### 文字属性相关
+ 居中： .text-center
+ 居左： .text-left
+ 居右： .text-right
+ 加粗： .text-bold
+ 大写： .text-uppercase
+ 一行显示溢出隐藏： .text-nowrap

### 宽高填充
+ 宽度 100% .width-full
+ 高度 100% .width-full

### 图片相关
+ 响应式图片: .img-responsive

### display相关
+ 块元素: .block
+ 行内块元素： .inline-block
+ 行内元素： .inline

### vertical-align相关
+ .vertical-baseline
+ .vertical-top
+ .vertical-middle
+ .vertical-bottom
+ .vertical-text-top
+ .vertical-text-bottom
+ .vertical-sub
+ .vertical-super

### 列表相关(ul,ol)
+ 横向列表浮动实现： .list-float
+ 横向行内块元素实现： .list-inline-block

### 垂直居中相关
+ 伪元素方式：.verc-content
+ transform方式： .verc-transform
+ margin方式： .verc-margin
+ 模拟表格方式： .verc-table>.verc-tr(可省略)>.verc-td

### 背景相关
+ 覆盖元素并显示中心： .bg-cover

### 层叠性相关
+ relative： .relative
+ static： .static
+ z-index设置： .z-index-(0~10)

### 白色/黑色遮罩相关
+ 白色遮罩： .shadow-white-(1~9)
+ 黑色遮罩： .shadow-black-(1~9)

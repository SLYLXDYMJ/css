# jason
前端切图库 —— 分为定宽和响应式，需要手动选择其css

## 定宽库 和 响应式库的区别
基本没有区别 =。= 只是定宽库要将 代表 屏幕的标示去掉 比如 row-10 mt-20

## reset 说明
> 宗旨：游览器默认样式统统删除，全游览器统一！ <br>
> 参考了 Normalize.css <br>


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
.float-right {
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
#### 居中
```css
.text-center{
  text-align: center;
}
```
#### 居左
```css
.text-left{
  text-align: left;
}
```
#### 居右
```css
.text-right{
  text-align: right;
}
```
#### 加粗
```css
.text-bold{
  font-weight: bold;
}
```
#### 加粗
```css
.text-uppercase{
  text-transform: uppercase;
}
```
#### 加粗
```css
.text-nowrap {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
```

### 宽高填充
#### 宽度 100%
```css
.width-full {
  width: 100%;
}
```
#### 高度 100%
```css
.height-full {
  height: 100%;
}
```

### 图片相关
#### 响应式图片
```css
.img-responsive {
  display: block;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}
```

### 按钮相关
#### 去除按钮样式
```css
.btn {
  display: inline-block;
  text-align: center;
  cursor: pointer;
  vertical-align: middle;
  background-color: transparent;
  border: none;
  padding: 0;
  position: relative;
  overflow: hidden;
}
```

### display相关
#### 块级元素
```css
.block {
  display: block;
}
```
#### 行内块元素
```css
.inline-block {
  display: inline-block;
  vertical-align: middle;
}
```
#### 行内元素
```css
.inline {
  display: inline;
  vertical-align: middle;
}
```

### vertical-align属性相关
```css
.vertical-baseline {
  vertical-align: baseline;
}

.vertical-top {
  vertical-align: top;
}

.vertical-middle {
  vertical-align: middle;
}

.vertical-bottom {
  vertical-align: bottom;
}

.vertical-text-bottom {
  vertical-align: text-bottom;
}

.vertical-text-top {
  vertical-align: text-top;
}

.vertical-sub {
  vertical-align: sub;
}

.vertical-super {
  vertical-align: super;
}
```

### 横向列表相关(ul,ol)
#### 浮动方式实现
```css
ul.list-float > li, ol.list-float > li {
  float: left;
}

ul.list-float a, ol.list-float a {
  display: block;
}
```
#### 行内块元素实现
```css
ul.list-inline-block > li, ol.list-inline-block > li {
  display: inline-block;
  vertical-align: middle;
}

ul.list-inline-block a, ol.list-inline-block a {
  display: block;
}
```

### 垂直居中相关
#### 伪元素方式实现
> 给父元素设置 .verc-content 且 只能有一个子元素
```css
.verc-content {
  /* 字体大小设置为 0 ，前后伪元素就不会和实际元素有边距 */
  font-size: 0;
}
.verc-content::before, .verc-content::after, .verc-content > * {
  display: inline-block;
  vertical-align: middle;
}
.verc-content::before, .verc-content::after {
  content: "";
  height: 100%;
}
.verc-content > * {
  font-size: 14px;
}
```
#### transform方式实现
> 父元素要设置定位
```css
.verc-transform {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
}
```
#### margin方式实现
> 父元素要设置定位
```css
.verc-margin {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
```
#### 模拟 table 方式实现
> .verc-table>.verc-tr(可省略)>.verc-td
```css
.verc-table {
  display: table;
  height: 100%;
  width: 100%;
}

.verc-tr {
  display: table-row;
}

.verc-td {
  display: table-cell;
  vertical-align: middle;
}
```

### 背景相关
```css
.bg-cover {
  background-size: cover;
  background-position: center;
}
```

### 定位相关
#### 相对定位
```css
.relative {
  position: relative;
}
```
#### 无定位
```css
.static {
  position: static !important;
}
```

###层叠性
```css
.z-index-1 {
  z-index: 1;
}
.z-index-2 {
  z-index: 2;
}
.z-index-3 {
  z-index: 3;
}
.z-index-4 {
  z-index: 4;
}
.z-index-5 {
  z-index: 5;
}
.z-index-6 {
  z-index: 6;
}
.z-index-7 {
  z-index: 7;
}
.z-index-8 {
  z-index: 8;
}
.z-index-9 {
  z-index: 9;
}
```

### 遮罩
> 黑色遮罩 和 白色遮罩 全部都有 .cover 的属性
#### 遮罩元素
```css
.cover{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
```
#### 黑色遮罩
```css
.shadow-black-1 {
  background-color: rgba(0, 0, 0, 0.1);
}
.shadow-black-2 {
  background-color: rgba(0, 0, 0, 0.2);
}
.shadow-black-3 {
  background-color: rgba(0, 0, 0, 0.3);
}
.shadow-black-4 {
  background-color: rgba(0, 0, 0, 0.4);
}
.shadow-black-5 {
  background-color: rgba(0, 0, 0, 0.5);
}
.shadow-black-6 {
  background-color: rgba(0, 0, 0, 0.6);
}
.shadow-black-7 {
  background-color: rgba(0, 0, 0, 0.7);
}
.shadow-black-8 {
  background-color: rgba(0, 0, 0, 0.8);
}
.shadow-black-9 {
  background-color: rgba(0, 0, 0, 0.9);
}
```
#### 白色遮罩
```css
.shadow-white-1 {
  background-color: rgba(255, 255, 255, 0.1);
}
.shadow-white-2 {
  background-color: rgba(255, 255, 255, 0.2);
}
.shadow-white-3 {
  background-color: rgba(255, 255, 255, 0.3);
}
.shadow-white-4 {
  background-color: rgba(255, 255, 255, 0.4);
}
.shadow-white-5 {
  background-color: rgba(255, 255, 255, 0.5);
}
.shadow-white-6 {
  background-color: rgba(255, 255, 255, 0.6);
}
.shadow-white-7 {
  background-color: rgba(255, 255, 255, 0.7);
}
.shadow-white-8 {
  background-color: rgba(255, 255, 255, 0.8);
}
.shadow-white-9 {
  background-color: rgba(255, 255, 255, 0.9); 
}
```

### 强制隐藏
```css
.hide {
  display: none !important;
}
```

## 小组件
### 特效按钮
> 详细 看 doc -> demo -> demo.btn.html
```html
<a class="btn btn-anime btn-anime-short btn-slide-top" data-text="slide-top">
  <span>slide-top</span>
</a>
```

### 汉堡包按钮
> 详细 看 doc -> demo -> demo.hamburger.html
```html
<div class="hamburger hamburger-1">
  <div></div>
</div>
```

## window.jason 对象
### API
#### window.jason.nonIe(Array)
> IE升级提示 ，把不支持的版本号填到数组中，目前只支持 6 - 10 <br>
``` javascript
window.jason.nonIe([6,7,8,9,10]);
```

#### window.jason.win
> 封装着游览器的各项信息
```javascript
// 游览器可用区域，包括滚动条的宽度
innerWidth
// 游览器可用区域，包括滚动条的宽度
innerHeight
// 不包括滚动条的页面视口宽度
contentWidth
// 不包括滚动条的页面视口高度
contentHeight
// 滚动条/页面 的总高度
scrollHeight
// 当前视口顶部距离页面顶部的距离
scrollPositionTop
// 当前视口底部距离页面顶部的距离
scrollPositionBottom
// 判断是否是 电脑 用户
isPc
// 判断是否是 移动设备
isMobile
// 判断是否是手机用户
isPhone
// 判断是否是ipad用户
isPad
// 判断是否是微信用户
isWeChat
// Css 前缀
cssPrefix
// 刷新数据 
update
```
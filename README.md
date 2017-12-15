# jason
前端切图库 —— 分为定宽和响应式，需要手动选择其css

## reset 说明
+ 游览器默认样式统统删除！

## 栅格布局系统
> 参考 bootstrap 。基本与bootstrap的栅格系统一致 <br>
> 新增了行中列间距的概念 <br>
> num 为 0 - 100 默认是 5 的倍数
```html
  <div class="container">
    <div class="row row-lg-50 row-md-30 row-sm-15 row-xs-10">
      <div class="col-xs-6"></div>
      <div class="col-xs-6"></div>
    </div>
  </div>
```
+ 响应列间距： .row-(xs/sm/md/lg)-(num)

## 布局工具类
> m代表margin，p代表padding，fs代表font-size，lh代表line-height <br>
> t,b,l,f,tb,lr 代表上，下，左，右，上下，左右 <br>
> num 为 0 - 100 <br>
> lh 的 num 为 10-20 代表 1.0 - 2.0

### 定宽库
+ .m,.mtb,.mlr,.mt,.mr,.mb,.ml （.mtb-5）
+ .p,.ptb,.plr,.pt,.pr,.pb,.pl （.ptb-5）
+ .fs （.fs-18）
+ .lh （.lh-15）

### 响应式库
+ .m,.mtb,.mlr,.mt,.mr,.mb,.ml （.mtb-sm-5）
+ .p,.ptb,.plr,.pt,.pr,.pb,.pl （.ptb-sm-5）
+ .fs （.fs-sm-18）
+ .lh （.lh-xs-15）

## 工具类说明
### 浮动相关
+ 左浮动： .float-left
+ 右浮动： .float-right
+ 清除浮动： .clearfix

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

# jason
前端切图库 —— 分为定宽和响应式，需要手动选择其css

## 切图使用方法
+ 复制dist下的shelf文件下到工程目录
+ 选择css库（shelf/plugins/jason/*.css）
+ 根据（shelf/README.md）愉快的切图

## reset 说明
+ 游览器默认样式统统删除！

## 栅格说明（参考bootstrap，新增了可变的列间距）
+ 定宽列间距： .row-(0~100)
+ 响应列间距： .row-(xs/sm/md/lg)-(0~100)

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

### 图片相关
+ 响应式图片: .img-responsive

### display相关
+ 块元素: .block
+ 行内块元素： .inline-block
+ 行内元素： .inline

### 列表相关(ul,ol)
+ 横向列表浮动实现： .list-float
+ 横向行内块元素实现： .list-inline-block

### 垂直居中相关
+ transform方式： .vertical-transform
+ margin方式： .vertical-margin
+ 模拟表格方式： .vertical-table>.vertical-tr(可省略)>.vertical-td

### 背景相关
+ 覆盖元素并显示中心： .bg-cover

### 层叠性相关
+ relative： .relative
+ static： .static
+ z-index设置： .z-index-(0~10)

### 白色/黑色遮罩相关
+ 白色遮罩： .shadow-white-(1~9)
+ 黑色遮罩： .shadow-black-(1~9)

### 隐藏和显示相关
+ 永久隐藏： .hide
+ lg屏幕显示其他屏幕隐藏： .hide-md
+ md屏幕显示其他屏幕隐藏： .hide-sm
+ xs屏幕显示其他屏幕隐藏： .hide-xs
+ lg屏幕隐藏其他屏幕显示： .show-md
+ lg、md屏幕隐藏其他屏幕显示：  .show-sm
+ lg、md、xs屏幕隐藏小屏幕显示：  .show-xs





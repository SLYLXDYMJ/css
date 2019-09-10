## 布局 - 栅格布局系统

### 简单介绍
> 在网页中尽量已 .contaienr > .row > .col > .any 的结构布局

```html
<div class="container">
  <div class="row">
    <div class="col-6">
     <a class="any">
       ...
     </a>
    </div>
  </div>
</div>
```
### container
> 统一网站定宽的元素，应该尽量保证父级位置，左右两侧有槽宽 padding（防止内容太靠页面左右）

 class           | description
 --------------- | --------------------------------
 .container       | 定宽元素，使用 scss 变量定制（往下看）
 .container-fluid | 定宽 100% 元素，使用 scss 变量定制（往下看）
 
#### 相关变量

 var                             | default | description
 ------------------------------- | ------- | --------------------------------
 $layout-container-gutter        | 15px    | 
 $layout-container-normal-width  | 1230px  | normal 库 .container 宽度
 $layout-responsive-breakpoint   | -       | responsive 库 .container 宽度
 
 
 
### row
> 行元素

 class              | description
 ------------------ | --------------------------------
 .row                | 行元素
 .row.equal-height   | 使列元素以及列的第一个子元素等高，$layout-use-flex = true 时才有效
 .row.space-${level} | 列间距
 
#### 相关变量

 var                                 | default | description
 ----------------------------------- | ------- | --------------------------------
 $layout-grid-space-max-level        | 20      | 列间距最大级别
 $layout-grid-space-span             | 5px     | 列间距级别间的跨度
 $layout-grid-space-min-ratio        | -       | 列间距自动缩放的最小缩放比例
 $layout-grid-space-min              | 5px     | 列间距自动缩放时的最小值
 
 
 
### col
> 列元素

 class                                        | description
 -------------------------------------------- | --------------------------------
 .col-${ weight }                              | normal 库命名规则
 .col-${ breakpoint-name }-${ weight }         | responsive 库命名规则
 .col-${ breakpoint-name }-pull-${ weight }   | 右移动，responsive 库专有
 .col-${ breakpoint-name }-push-${ weight }   | 左移动，responsive 库专有
 .col-${ breakpoint-name }-offset-${ weight } | 左偏移，responsive 库专有
 
#### 相关变量

 var                         | default | description
 --------------------------- | ------- | --------------------------------
 $layout-grid-col-num        | 12      | 一行中的列数
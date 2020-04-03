## 布局 - 栅格布局系统

```html
<!-- 推荐的栅格结构 -->
<div class="parent">
  <div class="container">
    <div class="row">
      <div class="col-6">
       <div class="any">
         ...
       </div>
      </div>
    </div>
  </div>
</div>
```

### container
> 容器类

 class            | description
 ---------------  | --------------------------------
 .container       | 宽度固定
 .container-fluid | 宽度 100% 填充父元素

#### 相关变量

 var                             | default | description
 ------------------------------- | ------- | --------------------------------
 $layout-container-gutter        | 15px    | 容器类的左右槽宽（左右padding）
 $layout-container-normal-width  | 1230px  | normal 库 .container 宽度
 $layout-responsive-breakpoint   | 看下方   | responsive 库断点 和各 .container 宽度的定义

```scss
// 响应式断点，需要从小到大写
$layout-responsive-breakpoint: (
  // 手机
  xs: (min-width: 0px, container-width: 100%),
  // 平板
  sm: (min-width: 768px, container-width: 720px),
  // 小屏
  md: (min-width: 992px, container-width: 960px),
  // 大屏
  lg: (min-width: 1280px, container-width: 1230px)
) !default;
```
 
 
### row
> 行

 class                   | description
 ----------------------- | --------------------------------
 .row                    | 行元素
 .row.equal-height       | 使同列元素等高, $layout-use-flex = true 时才有效
 .row.space-y-${ level } | 上下列间距
 .row.space-x-${ level } | 左右列间距
 .row.space-${ level }   | 上下左右列间距
 
#### 相关变量

 var                                 | default | description
 ----------------------------------- | ------- | --------------------------------
 $layout-grid-space-max-level        | 20      | 列间距最大级别
 $layout-grid-space-span             | 5px     | 列间距级别间的跨度
 $layout-grid-space-min-ratio        | -       | 列间距自动缩放的最小缩放比例
 $layout-grid-space-min              | 5px     | 列间距自动缩放时的最小值
 
 
### col
> 列

 class                                        | description
 -------------------------------------------- | --------------------------------
 .col-${ weight }                             | normal、小程序专有，列定义
 ------                                       | ------
 .col-${ breakpoint-name }-${ weight }        | responsive 库专有，列定义
 .col-${ breakpoint-name }-pull-${ weight }   | responsive 库专有，右移动
 .col-${ breakpoint-name }-push-${ weight }   | responsive 库专有，左移动
 .col-${ breakpoint-name }-offset-${ weight } | responsive 库专有，左偏移
 
#### 相关变量

 var                         | default | description
 --------------------------- | ------- | --------------------------------
 $layout-grid-col-num        | 12      | 一行中的列数
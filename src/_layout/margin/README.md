## 布局 - 外边距

 class                 | description
 --------------------- | -------------------------------------------
 .m${ dir }-${ level } | 设置外边距
 .mx-auto              | margin: 0 auto
 
```html
  <!-- 默认值： -->
  <!-- m-1 = margin: 5px -->
  <!-- m-2 = margin: 10px -->
  <!-- m-3 = margin: 15px -->
  <!-- ... -->
  <!-- m-20 = margin: 100px -->
  <div>
    <!-- margin -->
    <h6 class="m-1"></h6>
    
    <!-- margin-top -->
    <h5 class="mt-2"></h5>
    
    <!-- margin-right -->
    <h4 class="mr-3"></h4>
    
    <!-- margin-bottom -->
    <h4 class="mb-4"></h4>
    
    <!-- margin-left -->
    <h4 class="ml-5"></h4>
  </div>
```
 
#### 相关变量

 var                             | default | description
 ------------------------------- | ------- | --------------------------------
 $layout-margin-max-level        | 20      | 外边距最大级别
 $layout-margin-span             | 5px     | 外边距级别间的跨度
 $layout-margin-min-ratio        | 0.5     | 外边距自动缩放的最小缩放比例
 $layout-margin-min              | 5px     | 外边距自动缩放时的最小值
 
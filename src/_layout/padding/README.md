## 布局 - 内边距

 class                 | description
 --------------------- | ----------------------
 .p${ dir }-${ level } | 设置外边距

```html
  <!-- 默认值： -->
  <!-- p-1 = padding: 5px -->
  <!-- p-2 = padding: 10px -->
  <!-- p-3 = padding: 15px -->
  <!-- ... -->
  <!-- p-20 = padding: 100px -->
  <div>
    <!-- padding -->
    <h6 class="p-1"></h6>
    
    <!-- padding-top -->
    <h5 class="pt-2"></h5>
    
    <!-- padding-right -->
    <h4 class="pr-3"></h4>
    
    <!-- padding-bottom -->
    <h4 class="pb-4"></h4>
    
    <!-- padding-left -->
    <h4 class="pl-5"></h4>
  </div>
```
 
#### 相关变量

 var                             | default | description
 ------------------------------- | ------- | --------------------------------
 $layout-padding-max-level       | 20      | 外边距最大级别
 $layout-padding-span            | 5px     | 外边距级别间的跨度
 $layout-padding-min-ratio       | 0.5     | 外边距自动缩放的最小缩放比例
 $layout-padding-min             | 5px     | 外边距自动缩放时的最小值
 
## 布局 - 字号大小

 class          | description
 -------------- | --------------------------------------------------
 .fs-${ level } | 设置字体大小
 
```html
  <!-- 默认值： -->
  <!-- fs-1 = 12px -->
  <!-- fs-2 = 14px -->
  <!-- fs-3 = 16px -->
  <!-- ... -->
  <!-- fs-20 = 50px -->
  <div>
    <h6 class="fs-1"></h6>
    <h5 class="fs-2"></h5>
    <h4 class="fs-3"></h4>
  </div>
```
 
#### 相关变量

 var                         | default | description
 --------------------------  | ------- | --------------------------------
 $layout-fs-max-level        | 20      | 字号大小最大级别
 $layout-fs-span             | 2px     | 字号大小级别间的跨度
 $layout-fs-min-ratio        | 0.7     | 字号大小自动缩放的最小缩放比例
 $layout-fs-min              | 14px    | 字号大小自动缩放时的最小值
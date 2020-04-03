## 布局 - 行高

 class          | description
 -------------- | -------------------------------------------
 .lh-${ level } | 设置行高，responsive 时会自动按照比例缩放
 
```html
  <!-- 默认值： -->
  <!-- lh-1 = 1.1 -->
  <!-- lh-2 = 1.2 -->
  <!-- lh-3 = 1.3 -->
  <!-- ... -->
  <!-- lh-10 = 2.0 -->
  <div>
    <h6 class="lh-1"></h6>
    <h5 class="lh-2"></h5>
    <h4 class="lh-3"></h4>
  </div>
```
 
#### 相关变量

 var                         | default | description
 --------------------------  | ------- | --------------------------------
 $layout-lh-max-level        | 10      | 行高最大级别
 $layout-lh-span             | 0.1     | 行高级别间的跨度
 $layout-lh-min-ratio        | 0.85    | 行高自动缩放的最小缩放比例
 $layout-lh-min              | 1       | 行高自动缩放时的最小值
 
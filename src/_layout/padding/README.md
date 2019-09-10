## 布局 - 内边距
> 不建议使用，影响维护性 <br/>
> 如果你的项目中有大量不知道如何命名 class 的元素，那么就使用它吧！

### p
> 默认 p-1 => 5px, p-2 => 10px ...

 class                | description
 -------------------- | -------------------------------------------
 p${ dir }-${ level } | 设置外边距，responsive 时会自动按照比例缩放
 
#### 相关变量

 var                             | default | description
 ------------------------------- | ------- | --------------------------------
 $layout-padding-max-level       | 20      | 外边距最大级别
 $layout-padding-span            | 5px     | 外边距级别间的跨度
 $layout-padding-min-ratio       | 0.5     | 外边距自动缩放的最小缩放比例
 $layout-padding-min             | 5px     | 外边距自动缩放时的最小值
 
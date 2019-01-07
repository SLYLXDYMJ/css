# utils
> scss 工具库

## function

 name       | params       | description
 ---------- | ------------ | --------------------------------------
 strip-unit | $val         | 去掉数值单位
 vw         | $val, $width | 将 px 值 按照 width 转换成 vw 单位
 reverse    | $list        | 将 list 翻转

## mixins

 name       | params                           | description
 ---------- | -------------------------------- | --------------------------------------
 clearfix   | $val                             | 清除浮动影响
 bg-cover   | $x, $y                           | 背景 cover 处理
 ellipsis   | -                                | 文字一行显示，溢出隐藏
 cover      | $z-index, $position              | 覆盖
 res        | $attr, $base-value, $breakpoints | 响应式属性

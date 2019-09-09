## scss 工具库 - mixin

### 介绍

 name     | params                                   | description
 -------- | ---------------------------------------- | -----------------------------------
 cover    | $z-index: null, $position: absolute      | 覆盖相对定位父元素的子元素
 bg-cover | $position-x: center, $position-y: center | 背景处理，cover 显示，默认居中位置
 px1      | $dir: x, $origin: center center          | 用于移动端 1px 解决方案
 res      | $attr, $base-value, $options: null       | 响应式库专属，响应式属性值设置，具体下面例子

### res 例子
> 有两种使用形式

2. $options 为响应列表（所有属性均可）
3. $options 为最小缩放比例（属性值为 number 类型的属性才可使用）

```scss
// 断点列表
@include res(color, red, (
  md: green,
  sm: pink,
  xs: black,
));
@include res(display, null, (
  xs: none !important
));

// 指定最小缩放比例
// 会根据断点数量，按照比例进行缩放
@include res(height, 100px, 0.2);
@include res(width, 100px, 0.2);
// => 最大屏: 100px * 1.0 = 100px
// => 最小屏: 100px * 0.2 =  20px

@include res(font-size, 50px, 0.5);
// => 最大屏: 50px * 1.0 = 50px
// => 最小屏: 50px * 0.5 = 25px

@include res(line-height, 1.5, 0.8);
// => 最大屏: 1.5 * 1.0 = 1.5
// => 最小屏: 1.5 * 0.8 = 1.2

@include res(margin, 50px, 0.5);
@include res(padding, 50px, 0.5);
// => 最大屏: 50px * 1.0 = 50px
// => 最小屏: 50px * 0.5 = 25px
```
 
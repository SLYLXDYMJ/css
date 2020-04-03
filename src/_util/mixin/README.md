## scss 工具库 - mixin

 name     | params                                   | description
 -------- | ---------------------------------------- | -----------------------------------
 cover    | $z-index: null, $pos: absolute           | 覆盖相对定位父元素
 bg-cover | $pos-x: center, $pos-y: center           | 背景 cover 显示，默认居中位置
 px1      | $direction: x, $position                 | 用于移动端 1px 解决方案
 res      | $attr, $base-value, $options             | 根据预设好的断点设置响应值

## px1 例子
```scss
// 上边框
@include px1('x', 'top');
// 下边框
@include px1('x', 'bottom');
// 左边框
@include px1('y', 'left');
// 右边框
@include px1('y', 'right');
```

## res 例子
> 有两种使用形式

- $options 为响应列表（所有属性均可）
- $options 为最小缩放比例（属性值为 number 类型的属性才可使用）

注意：<br/>
响应式断点设置 $layout-responsive-breakpoint 变量 <br/>
具体去看 layout -> grid 篇

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
 
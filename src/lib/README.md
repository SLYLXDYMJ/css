# utils
> scss 工具库

## function

 name       | params       | description
 ---------- | ------------ | --------------------------------------
 strip-unit | $val         | 去掉数值单位
 vw         | $val, $width | 将 px 值 按照 width 转换成 vw 单位，默认 width 为 1920
 reverse    | $list        | 将 list 翻转
 rpx        | $val         | 解决微信小程序报错编辑器问题，rpx(10px) -> 10rpx

## mixins

 name       | params                           | description
 ---------- | -------------------------------- | --------------------------------------
 clearfix   | $val                             | 清除浮动影响
 bg-cover   | $x, $y                           | 背景 cover 处理
 ellipsis   | -                                | 文字一行显示，溢出隐藏
 cover      | $z-index, $position              | 覆盖
 res        | $attr, $base-value, $breakpoints | 响应式属性
 one-pix    | $dir, $origin                    | 实现移动端 1px 线

### res example
```scss
@include res(font-size, 50px);
@include res(line-height, 50px);
@include res(margin, 50px);
@include res(margin-top, 50px);
@include res(margin-right, 50px);
@include res(margin-bottom, 50px);
@include res(margin-left, 50px);
@include res(padding, 50px);
@include res(padding-top, 50px);
@include res(padding-right, 50px);
@include res(padding-bottom, 50px);
@include res(padding-left, 50px);

// or

@include res(color, red, (
  md: green,
  sm: pink,
  xs: black,
));
```
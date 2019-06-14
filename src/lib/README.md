# utils
> scss 工具库

## function

 name       | params             | description
 ---------- | ------------------ | --------------------------------------
 strip-unit | $val               | 返回去掉单位的数值
 vw         | $val, $width: 1920 | 将 px 值 按照 $width 转换成 vw 单位
 reverse    | $list              | 将 scss 变量 list 翻转
 rpx        | $val               | 解决微信小程序报错编辑器问题，rpx(10px) -> 10rpx

## mixins

 name       | params                              | description
 ---------- | ----------------------------------- | --------------------------------------
 clearfix   | -                                   | 清除浮动影响
 bg-cover   | $x: center, $y: center              | 常用的背景 cover 处理
 ellipsis   | -                                   | 文字一行显示，溢出隐藏，显示...
 cover      | $z-index: null, $position: absolute | 使元素覆盖整个父元素
 res        | $attr, $base-value, $options:null   | 响应式属性，下面有例子
 one-px     | $dir: 'x', $origin: center center   | 实现移动端 1px 线, transform 方案

### res example
> $options 有三种形式 \[空（不填）、断点列表、自动缩放最小比例（数值）\]
```scss
// 不填写 $options 会按照对应属性默认的最小缩放比例进行缩放
// $[attr]-min-ratio

// 自动缩放（只有以下属性才能自动缩放）
@include res(font-size, 50px);
@include res(line-height, 1.5);
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

// 断点列表
@include res(color, red, (
  md: green,
  sm: pink,
  xs: black,
));

// 指定最小缩放比例
@include res(font-size, 50px, 0.5);
@include res(line-height, 1.5, 0.8);
@include res(margin, 50px, 0.5);
@include res(margin-top, 50px, 0.5);
@include res(margin-right, 50px, 0.5);
@include res(margin-bottom, 50px, 0.5);
@include res(margin-left, 50px, 0.5);
@include res(padding, 50px, 0.5);
@include res(padding-top, 50px, 0.5);
@include res(padding-right, 50px, 0.5);
@include res(padding-bottom, 50px, 0.5);
@include res(padding-left, 50px, 0.5);
```
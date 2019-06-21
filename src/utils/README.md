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
 cover      | $z-index: null, $position: absolute | 使元素覆盖整个相对定位父元素
 res        | $attr, $base-value, $options:null   | 响应式属性，下面有例子
 one-px     | $dir: 'x', $origin: center center   | 实现移动端 1px 线, transform 方案
 color      | $name, $color                       | 创造主题色辅助类，下面有例子
 
### mixin res example
> 有三种使用形式

1. 不填写 $options（只有布局属性才可以使用）
2. $options 为响应列表（所有属性均可）
3. $options 为最小缩放比例（属性值为 number 类型的属性才可使用）

```scss
// 不填写 $options
// 会按照对应属性默认的最小缩放比例进行缩放
// 最小缩放比例为 scss 变量 $[attr]-min-ratio 指定
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
@include res(display, null, (
  xs: none !important
));

// 指定最小缩放比例
@include res(width, 100px, 0.2);
@include res(height, 100px, 0.2);
@include res(font-size, 50px, 0.5);
@include res(line-height, 1.5, 0.8);
@include res(margin, 50px, 0.5);
@include res(padding, 50px, 0.5);
```

### mixin color example
> 根据 名字 + 颜色 生成以下辅助工具类

+ color
+ background-color
+ border-color
+ border-top-color
+ border-right-color
+ border-bottom-color
+ border-left-color

```scss
@include color('brown', #C9A56F);
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
.color-brown {
  color: #c9a56f
}
.background-brown {
  background-color: #c9a56f
}
.border-brown {
  border-color: #c9a56f
}
.border-top-brown {
  border-top-color: #c9a56f
}
.border-right-brown {
  border-right-color: #c9a56f
}
.border-bottom-brown {
  border-bottom-color: #c9a56f
}
.border-left-brown {
  border-left-color: #c9a56f
}
```

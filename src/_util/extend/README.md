## scss 工具库 - 继承

 name       | description
 ---------- | --------------------------------------
 clearfix   | 清除浮动影响，占用 :after
 ellipsis   | 使文字一行显示，溢出 ... 显示
 hidden     | 响应式隐藏，responsive 专有

### hidden
> 名称和 layout-hidden 一致

```scss
.any {
  @extend %hidden-md-up;
  @extend %hidden-md-down;
  @extend %hidden-md-only;
}
```
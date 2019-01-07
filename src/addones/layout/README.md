# layout
> 布局工具库，等级相关的类响应时，会自动缩放

## 栅格布局
> 参考了 bootstrap


## flex 布局
> 若 $use-flex 为 false 则不可用

## 内外间距
> margin 和 padding 的封装 <br/>
> 等级默认为 5px 递增

 class                | description
 -------------------- | -------------------------------------
 m{方向}-{级别}        | 定宽库 margin 命名规则
 m{方向}-{断点}-{级别} | 响应式库 margin 命名规则
 p{方向}-{级别}        | 定宽度 padding 命名规则
 p{方向}-{断点}-{级别} | 响应式库 padding 命名规则

### 方向说明

 dir | description
 --- | -----------
 t   | 上
 r   | 右
 b   | 下
 l   | 左
 x   | 左右
 y   | 上下

## 字体大小
> font-size 的封装 <br/>
> 默认第一级为 8px，等级已 2px 的跨度递增

 class            | description
 -----------------| -------------------------------------
 fs-{级别}        | 定宽库 font-size 命名规则
 fs-{断点}-{级别}  | 响应式库 font-size 命名规则

## 行高
> line-height 的封装 <br/>
> 默认第一级为 1.15，等级已 0.1 的跨度递增

 class            | description
 -----------------| -------------------------------------
 lh-{级别}        | 定宽库 line-height 命名规则
 lh-{断点}-{级别}  | 响应式库 line-height 命名规则
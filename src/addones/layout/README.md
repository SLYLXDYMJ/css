# layout
> 布局工具库，等级(level)相关的类响应时，会自动缩放

## 栅格布局
> 参考了 bootstrap，分为 flex 和 float 两种实现方式 ($use-flex)

 class                       | description
 ----------------------      | ---------------------
 container                   | 定宽容器
 container-fluid             | 宽度 100% 的容器
 row                         | 行，若为 flex 模式，则可用 flex 工具类
 row.space-{level}           | 行中列间距
 col-{num}                   | 定宽库 列
 col-{breakpoint}-{num|auto} | 响应库 列
 col                         | flex 模式专有，flex-grow: 1

## 默认断点
```scss
// 响应式断点，从小到大写
$responsive-breakpoint: (
  // 手机
  xs: (min-width: 0px, container-max-width: 100%),
  // 平板
  sm: (min-width: 768px, container-max-width: 720px),
  // 小屏电脑
  md: (min-width: 992px, container-max-width: 960px),
  // 大屏电脑
  lg: (min-width: 1280px, container-max-width: 1260px)
) !default;
```

## text 工具类
> 断点可去掉

 class                       | description
 ----------------------      | ---------------------
 text-align-${name}-left     | text-align: left
 text-align-${name}-center   | text-align: center
 text-align-${name}-right    | text-align: right
 text-nowrap                 | 使行内元素不换行

## flex 布局
> 若 $use-flex 为 false 则不可用

 class                       | description
 ----------------------      | ---------------------
 flex                        | display: flex
 inline-flex                 | display: inline-flex

### flex 工具类
> 断点均可去掉

 class                                | description
 -----------------------------------  | ---------------------
 flex-space                           | flex-group: 1
 flex-{breakpoint}-row                | flex-direction: row
 flex-{breakpoint}-row-reverse        | flex-direction: row-reverse
 flex-{breakpoint}-column             | flex-direction: column
 flex-{breakpoint}-column-reverse     | flex-direction: column-reverse
 flex-{breakpoint}-nowrap             | flex-wrap: nowrap
 flex-{breakpoint}-wrap               | flex-wrap: wrap
 flex-{breakpoint}-wrap-reverse       | flex-wrap: wrap-reverse
 justify-content-{breakpoint}-start   | justify-content: flex-start
 justify-content-{breakpoint}-end     | justify-content: flex-end
 justify-content-{breakpoint}-center  | justify-content: center
 justify-content-{breakpoint}-between | justify-content: space-between
 justify-content-{breakpoint}-around  | justify-content: space-around
 align-items-{breakpoint}-start       | align-items: flex-start
 align-items-{breakpoint}-end         | align-items: flex-end
 align-items-{breakpoint}-center      | align-items: center
 align-items-{breakpoint}-baseline    | align-items: baseline
 align-items-{breakpoint}-stretch     | align-items: stretch
 align-content-{breakpoint}-start     | align-content: flex-start
 align-content-{breakpoint}-end       | align-content: flex-end
 align-content-{breakpoint}-center    | align-content: center
 align-content-{breakpoint}-between   | align-content: space-between
 align-content-{breakpoint}-around    | align-content: space-around
 align-content-{breakpoint}-stretch   | align-content: stretch
 align-self-{breakpoint}-start        | align-self: start
 align-self-{breakpoint}-end          | align-self: end
 align-self-{breakpoint}-center       | align-self: center
 align-self-{breakpoint}-baseline     | align-self: baseline
 align-self-{breakpoint}-stretch      | align-self: stretch
 order-{breakpoint}-{num}             | order: n

## 内外间距
> margin 和 padding 的封装 <br/>
> 等级默认为 5px 递增

 class                        | description
 ---------------------------- | -------------------------------------
 m{dir}-{level}               | 定宽库 margin 命名规则
 m{dir}-{breakpoint}-{level}  | 响应式库 margin 命名规则
 p{dir}-{level}               | 定宽度 padding 命名规则
 p{dir}-{breakpoint}-{level}  | 响应式库 padding 命名规则

### dir说明

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
> 默认第一级为 12px，等级已 2px 的跨度递增

 class                   | description
 ----------------------- | -------------------------------------
 fs-{level}              | 定宽库 font-size 命名规则
 fs-{breakpoint}-{level} | 响应式库 font-size 命名规则

## 行高
> line-height 的封装 <br/>
> 默认第一级为 1.15，等级已 0.1 的跨度递增

 class                   | description
 ----------------------- | -------------------------------------
 lh-{level}              | 定宽库 line-height 命名规则
 lh-{breakpoint}-{level} | 响应式库 line-height 命名规则
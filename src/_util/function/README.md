## scss 工具库 - 函数

### 介绍

 name       | params      | description
 ---------- | ----------- | --------------------------------------
 strip-unit | $value      | 返回去掉单位后的数值
 vw         | $px         | 将数值按照设计图宽度转为 vw 单位，设计图宽度为变量指定，用于移动端开发、等比例缩放的场景
 reverse    | $list       | 翻转列表
 rpx        | $value      | 小程序使用...防止编译器报错，rpx(50) => 50rpx
 
### 可改变量

 name              | default | description
 ----------------- | ------- | ---------------------------
$util-vw-width     | 1920px  | vw function 设计图宽度
 

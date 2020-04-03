## scss 工具库 - 函数

### 介绍

 name       | params      | description
 ---------- | ----------- | --------------------------------------
 strip-unit | $value      | 返回去掉单位后的数值
 vw         | $px         | 将 px 按照 $util-vw-width 转为 vw 单位
 reverse    | $list       | 翻转 scss 列表
 rpx        | $value      | 小程序使用，防止编译器报错，rpx(50) => 50rpx
 
### 可改变量

 name              | default | description
 ----------------- | ------- | ---------------------------
 $util-vw-width    | 1920px  | 设计图宽度
 

## 组件 - 横向滚动（支持小程序）
> 常用于导航等区域

![效果](./scroll-x.gif)

### 用法

```html
<!-- web -->
<div class="scroll-x">
  <div class="scroll-x-wrapper">
    <div class="scroll-x-item">
      <!-- for -->
      <a class="item" href="#">
        ...any
      </a>
    </div>
  </div>
</div>

<!-- 小程序 -->
<scroll-view class="scroll-x" scroll-x>
  <view class="scroll-x-wrapper">
    <view class="scroll-x-item">
      <!-- for -->
      <view class="item">
        ...any
      </view>
    </view>
  </view>
</scroll-view>
```
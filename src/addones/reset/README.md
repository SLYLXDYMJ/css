# reset
> 基于 normalize v8.0.1，在此基础上增加了部分自定义样式

## 响应式库 reset
> 不允许 x 轴滚动

```scss
html, body {
  overflow-x: hidden !important;
}
```

## 小程序 reset
> 不依赖 normalize
1. 统一了行高1.15
2. 全局改变了 box-sizing: border-box

```scss
page {
  line-height: 1.15;
}

view, scroll-view, swiper, swiper-item, movable-area, movable-view, cover-view, cover-image, icon, text, rich-text, progress, button, checkbox-group, checkbox, form, input, label, picker, picker-view, radio-group, radio, slider, switch, textarea, navigator, functional-page-navigator, image, video, camera, live-player, live-pusher, map, canvas, open-data, web-view, ad {
  box-sizing: border-box;
  line-height: inherit;
}
```
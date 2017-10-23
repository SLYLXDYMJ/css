(function($){

  'use strict';

  // 记录body
  let $body=$('body');

  // 扩展jQuery
  $.extend({
    $win: {
      //不包括滚动条的页面宽度
      innerWidth: null,
      // 不包括滚动条的页面高度
      innerHeight: null,
      // 包括滚动条的页面宽度
      outWidth: null,
      // 包括滚动条的页面高度
      outHeight: null,
      // 滚动条的宽度
      scrollWidth: null,
      // 页面/滚动条的总高度
      bodyHeight: null,
      // 当前视口顶部距离页面顶部的距离
      scrollPositionTop: null,
      // 当前视口底部距离页面顶部的距离
      scrollPositionBottom: null,
      // 判断是否是手机用户
      isPhone: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
      // 强制更新视图
      update: function(){
        //视口顶部，距离页面顶部的距离
        this.scrollPositionTop = Math.max($body.scrollTop(),document.documentElement.scrollTop);
        // 视口底部，距离页面顶部的距离
        this.scrollPositionBottom = Math.max($body.scrollTop(),document.documentElement.scrollTop) + document.documentElement.clientHeight;
        //视口的宽度 排除滚动条 加上滚动条的 直接用innerWidth
        this.innerWidth=document.documentElement.clientWidth;
        //视口的高度，除去滚动条的
        this.innerHeight=document.documentElement.clientHeight;
        // 页面的总高度
        this.bodyHeight=parseFloat($body.outerHeight()) + parseFloat($body.css('marginTop')) + parseFloat($body.css('marginBottom'));
        //注意：
        //IE 6 7 8 没有innerWidth和innerHeight
        //IE9已经全都支持了
        //如果是IE 6 7 8那么会报错，影响JS的运行
        try{
          //游览器包括滚动条的宽度
          this.outWidth=innerWidth;
          //游览器包括滚动条的高度
          this.outHeight=innerHeight;
          //Y轴滚动条的宽度
          this.scrollWidth=innerWidth-$(window).width();
        }
        catch(err){
          // 弹出警告
          console.log("您可能在用低版本IE访问本页面，$win的部分属性将受到影响不能正常读取");
        }
      }
    }
  });

  $(window).resize(function(){
    $.$win.update();
  });
  $(window).scroll(function(){
    $.$win.update();
  });

  $.$win.update();

}(window.jQuery));
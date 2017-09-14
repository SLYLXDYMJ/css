/**
 * Created by Administrator on 2017/7/9.
 */

(function($,window){

  "use strict";
  
  var old=window.$win&&window.$win;

  var $win={
    //不包括滚动条的页面宽度
    innerWidth:null,
    // 不包括滚动条的页面高度
    innerHeight:null,
    // 包括滚动条的页面宽度
    outWidth:null,
    // 包括滚动条的页面高度
    outHeight:null,
    // 是否是电脑屏幕
    isPc:null,
    // 是否是平板屏幕
    isPad:null,
    // 是否是手机屏幕
    isPhone:null,
    // 滚动条的宽度
    scrollWidth:null,
    // 页面/滚动条的总高度
    bodyHeight:null,
    // 滚动条的当前位置
    scrollPosition:{
      // 当前视口顶部距离页面顶部的距离
      top:null,
      // 当前视口底部距离页面顶部的距离
      bottom:null
    },
    // 刷新
    update:function(){
      resize();
      scroll();
    }
  };

  var resize=(function resize(){
    //视口的宽度 排除滚动条 加上滚动条的 直接用innerWidth
    $win.innerWidth=document.documentElement.clientWidth;
    //视口的高度，除去滚动条的
    $win.innerHeight=document.documentElement.clientHeight;
    // 页面的总高度
    $win.bodyHeight=parseFloat($('body').outerHeight()) + parseFloat($('body').css('marginTop')) + parseFloat($('body').css('marginBottom'));
    //注意：
    //IE 6 7 8 没有innerWidth和innerHeight
    //IE9已经全都支持了
    //如果是IE 6 7 8那么会报错，影响JS的运行
    try{
      //游览器包括滚动条的宽度
      $win.outWidth=innerWidth;
      //游览器包括滚动条的高度
      $win.outHeight=innerHeight;
      //Y轴滚动条的宽度
      $win.scrollWidth=innerWidth-$(window).width();
      //是否是电脑屏幕
      $win.isPc=innerWidth>=992?true:false;
      //是否是平板屏幕
      $win.isPad=(innerWidth>=768&&innerWidth<992)?true:false;
      //是否是手机
      $win.isPhone=innerWidth<768?true:false;
    }catch(err){
      // 弹出警告
      console.log("您可能在用低版本IE访问本页面，$win的部分属性将受到影响不能正常读取");
    }
    return resize;
  })();
  var scroll=(function scroll(){
    //视口顶部，距离页面顶部的距离
    $win.scrollPosition.top=
      Math.max($('body').scrollTop(),document.documentElement.scrollTop);
    // 视口底部，距离页面顶部的距离
    $win.scrollPosition.bottom=$win.scrollPosition.top+$win.innerHeight;

    return scroll;

  })();

  $(window).on('resize',resize);
  $(window).on('scroll',scroll);

  window.$win=$win;

  // 如果冲突
  if(old){
    $win.old=old;
  }

}(window.jQuery,window));

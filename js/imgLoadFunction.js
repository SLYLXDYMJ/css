/**
 * Created by Administrator on 2017/7/9.
 */


// 实现思路
// 启动定时器每5毫秒（定时器最快执行速度）遍历一次所有图片
// 判断图片是否加载完成，用 img.complete ，如果都为true则代表全都加载完成了
// 最后，执行回调函数

(function($){

  "use strict";

  var old=null;
  // 判断命名是否冲突
  if($.fn.imgLoadEnd){
    old=$.fn.imgLoadEnd;
  }

  // 依附jquery
  $.fn.imgLoadEnd=function(callbacks){

    var $img=this;

    var timer=setInterval(function(){
      for(var i=0;i<$img.length;i++){
        if(!$img[i].complete){
          return;
        }
      }
      clearInterval(timer);
      timer = null;
      callbacks();
    },5);

    return this;

  };

  if(old){
    $.fn.imgLoadEnd.old=old;
    old=null;
    $.fn.imgLoadEnd.noConflict=function(){
      $.fn.imgLoadEnd=$.fn.imgLoadEnd.old;
      return this;
    };
  }

}(window.jQuery));
/**
 * Created by Administrator on 2017/7/9.
 */

(function($){

  "use strict";

  // 定义构造函数
  var ClickScroll=function(elem){
    $(elem).on('click',this.scroll);
  };

  ClickScroll.selector='[data-plugin="clickScroll"]';

  ClickScroll.prototype.scroll=function(){
    var $this=$(this);
    var position=$this.data('position');
    var time=$this.data('time')||0;
    var top=null;
    if(parseFloat(position)){
      top=parseFloat(position);
    }else if(position.toLowerCase()==='top'){
      top=0;
    }else if(position.toLowerCase()==='bottom'){
      top=window.$win.bodyHeight;
    }else{
      top=$(position).offset().top;
    }
    $('html,body').animate({
      scrollTop:top
    },time);
  };

  // 依附jquery
  var plugin=function(){
    return this.each(function(i,elem){
      var $this=$(this);
      var data=$this.data('jason.clickScroll');
      if(!data){
        $this.data('jason.modal',(data=new ClickScroll(this)));
      }
    });
  };

  // 判断是否命名冲突
  var old=$.fn.clickScroll;

  $.fn.clickScroll=plugin;

  if(old){
    $.fn.clickScroll.old=old;
    $.fn.clickScroll.noConflict=function(){
      $.fn.clickScroll=$.fn.clickScroll.old;
      return this;
    };
  }

  // 智能初始化
  $(function(){
    var $clickScroll=$(ClickScroll.selector);
    plugin.call($clickScroll);
  });

}(window.jQuery));
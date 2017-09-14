/**
 * Created by Administrator on 2017/7/9.
 */


// 实现思路
// 创建rect对象，把比例都写在对象中
// 屏幕尺寸改变时，遍历所有匹配选择器的元素，设置他们的高度
// 设置高度： 默认比例为1:1
//   首先判断屏幕，根据不同的屏幕去设置不同比例的高度，重复赋值处理

(function($){

  "use strict";

  // 定义构造函数
  var Rect=function($elem){
    this.$elem=$elem;
    this.xsScale=$elem.data('scale-xs')||1;
    this.smScale=$elem.data('scale-sm')||this.xsScale;
    this.mdScale=$elem.data('scale-md')||this.smScale;
    if(!this.xsScale||!this.smScale||!this.mdScale){
      throw new Error('jason rect插件，需要正确的比例值');
    }
    this.setHeight();
  };

  Rect.selector='[data-plugin="rect"]';

  Rect.prototype.setHeight=function(){
    var $elem=this.$elem;
    var scale=null;
    var width=parseFloat($elem.css('width'));
    var height=parseFloat($elem.css('height'));
    var newHeight=null;

    if(window.$win.isPc){
      scale=this.mdScale;
    }else if(window.$win.isPad){
      scale=this.smScale;
    }else{
      scale=this.xsScale;
    }

    // 重复操作处理
    if(height!=width*scale){
      newHeight=width*scale;
      $elem.css('height',newHeight);
    }

  };

  // 绑定事件
  $(window).resize(function(){
    var $rects=$(Rect.selector);

    $rects.each(function(i,elem){
      $(elem).data('jason.rect').setHeight();
    });

  });

  // 命名冲突处理
  var old=$.fn.rect;

  // 定义插件
  var plugin=function(){
    return this.each(function(i,elem){
      var $elem=$(elem);
      var data=$elem.data('jason.rect');
      if(!data){
        $elem.data('jason.rect',(data=new Rect($elem)));
      }else{
        data.setHeight();
      }
    });
  };

  $.fn.rect=plugin;

  if(old){
    $.fn.rect.old=old;
    $.fn.rect.noConflict=function(){
      $.fn.rect=$.fn.rect.old;
      return this;
    };
  }

  // 智能初始化
  $(function(){
    var $rect=$(Rect.selector);
    plugin.call($rect);
  });

}(window.jQuery));
/**
 * Created by Administrator on 2017/7/9.
 */

// 思路
// 对象属性
// time:在手机下导航栏整体过度的时间，用来控制visibility
// screenStandards:屏幕标准，已这个数值来确认是大屏幕，还是小屏幕
// $nav:导航栏
// $navList:导航栏列表
// $navToggle：导航栏开关

// 对象创建时
// 根据屏幕标准，给$navToggle添加不同的class 用来显示$navToggle

(function(){

  "use strict";

  // 构造函数
  function Nav(params) {

    // 参数合并
    $.extend(this,params);
    // 控制visibility的定时器标示
    this.closeTimer=null;

    // 判断是否激活小屏状态，计算高度，并且绑定事件
    this.screenToggle();
    $(window).resize($.proxy(this.screenToggle,this));

    // 判断点击在哪个元素上，如果是点击在他处，关闭导航
    $(window).click($.proxy(this.clickOther,this));

    // 给开关绑定事件
    this.$navToggle.on('click',$.proxy(this.navToggle,this));
  }

  Nav.selector='[data-plugin="nav"]';

  // 控制大屏幕和 小屏幕的状态切换
  Nav.prototype.screenToggle=function(){
    if(window.$win.innerWidth>this.screenStandards){
      clearTimeout(this.closeTimer);
      this.closeTimer=null;
      this.$nav.attr('style','').removeClass('active');
      this.$navList.stop(false,true).attr('style','');
      this.$navToggle.removeClass('active');
    }else{
      var height=window.$win.innerHeight-parseFloat($('header,.header').css('height'));
      this.$nav.css('height',height);
    }
  };

  // 点击导航栏
  Nav.prototype.navToggle=function(){
    if(this.$nav.hasClass('active')){
      this.close();
    }else{
      this.open();
    }
  };

  // 开
  Nav.prototype.open=function(){
    clearTimeout(this.closeTimer);
    this.closeTimer=null;
    this.$nav.css('visibility','visible').addClass('active');
    this.$navToggle.addClass('active');
    this.$navList.stop().slideDown(this.time);
  };

  // 关
  Nav.prototype.close=function(){
    var my=this;
    this.$nav.removeClass('active');
    this.$navToggle.removeClass('active');
    this.$navList.stop().slideUp(this.time);
    this.closeTimer=setTimeout(function(){
      my.$nav.css('visibility','hidden');
    },this.time);
  };

  // 点击在别的地方的话，关闭导航
  Nav.prototype.clickOther=function(e){
    // 在小屏幕，并且点击在了nav上
    if($win.innerWidth<=this.screenStandards&&e.target===this.$nav.get(0)){
      this.close();
    }
  };

  // 命名冲突处理
  var old=$.fn.nav;

  // 定义插件
  var plugin=function(){
    return this.each(function(i,elem){
      var $elem=$(elem);
      var data=$elem.data('jason.nav');
      // 初始化
      if(!data){
        var params={
          $nav:$elem,
          $navList:$elem.children('ul,ol'),
          $navToggle:$('.hamburger'),
          screenStandards:$elem.data('screenStandards')||991,
          time:parseFloat($elem.css('transitionDuration'))*1000||0
        };
        $elem.data('jason.nav',new Nav(params));
      }
    });
  };

  $.fn.nav=plugin;

  if(old){
    $.fn.nav.old=old;
    $.fn.nav.noConflict=function(){
      $.fn.nav=$.fn.nav.old;
      return this;
    };
  }

  // 智能初始化
  $(function(){
    var $nav=$(Nav.selector);
    plugin.call($nav);
  });

}());
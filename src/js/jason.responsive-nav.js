(function ($) {

  // 打开导航的名字
  let openClass='responsive-nav-open';

  $.fn.responsiveNav=function(){

    this.each(function(i,nav){
      let $nav          = $(nav),
          $navList      = $nav.children('ul'),
          api           = $nav.data('jason.responsive-nav');

      if(!api){
        $nav.data('jason.responsive-nav',new Nav($nav, $navList));
      }

    });

  };

  class Nav{

    constructor($nav,$navList){
      let my=this;

      // 导航栏元素
      my.$nav = $nav;
      // 导航栏列表元素
      my.$navList = $navList;
      // 隐藏元素的定时器标志
      my.timer = null;
      // 事件的定时器标志 （开启之后 和 关闭之后共用）
      my.eventTimer = null;
      // 导航栏的的状态
      my.isOpen = false;

      // 事件函数
      my.openBefore=null;
      my.openAfter=null;
      my.closeBefore=null;
      my.closeAfter=null;

      // 用来确认 开关
      let navId=my.$nav.attr('id')||'jason-responsive-nav';
      $(document).on('click',`[href="#${navId}"]`,function(){
        if(my.isOpen){
          my.close();
        }else{
          my.open();
        }
      });

    }

    open(){

      // 取消定时器
      clearTimer([this.eventTimer,this.timer]);

      // 触发事件
      if(this.openBefore)
        this.openBefore(this);

      // 状态切换
      this.isOpen = true;

      // 设置 元素 显示
      this.$nav.show();

      // display 和 transition
      this.$nav.css('display');

      // 加class
      this.$nav.addClass(openClass);

      // 触发事件
      if(this.openAfter){
        // 每次都重新获取过度时间，因为是响应式，用户有可能从大屏幕切换到小屏幕
        let tTime=getTTime(this.$nav);
        this.eventTimer=setTimeout(()=>{
          this.openAfter(this);
        },tTime);
      }

    }

    close(){

      // 结束掉定时器
      clearTimer(this.eventTimer);

      // 每次都重新获取过度时间，因为是响应式，用户有可能从大屏幕切换到小屏幕
      let tTime=getTTime(this.$nav);

      // 触发事件
      if(this.closeBefore)
        this.closeBefore(this);

      // 状态切换
      this.isOpen = false;

      // 移除 class
      this.$nav.removeClass(openClass);

      // 动画结束后，隐藏元素
      this.timer=setTimeout(()=>{
        this.$nav.hide();
      },tTime);

      // 触发事件
      if(this.closeAfter){
        this.eventTimer=setTimeout(()=>{
          this.closeAfter();
        },tTime);
      }

    }

    on(event,callback){
      switch (event){
        case 'open:before':{
          this.openBefore = callback;
          break;
        }
        case 'open:after':{
          this.openAfter = callback;
          break;
        }
        case 'close:before':{
          this.closeBefore = callback;
          break;
        }
        case 'close:after':{
          this.closeAfter = callback;
          break;
        }
      }
    }

  }

  // 获取过度时长
  // 每次都重新获取过度时间，因为是响应式，用户有可能从大屏幕切换到小屏幕，导致计算错误
  function getTTime($elem){
    return parseFloat($elem.css('transitionDuration'))*1000||0;
  }

  // 清除定时器
  function clearTimer(timer){
    // 数组
    if(Object.prototype.toString.call(timer)==='[object Array]'){
      timer.forEach(function(t,i){
        clearTimeout(t);
        t=null;
      });
    }
    else{
      clearTimeout(timer);
      timer=null;
    }
  }

}(window.jQuery));
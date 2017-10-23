if(window.jQuery===undefined){
  throw new Error('请先导入jquery');
}
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
(function($){

  'use strict';
  
  let canIe=$('html').data('jason');
  let nonsupport=false;
  
  switch (canIe){
    case 'ie678':{
      if(	document.all && !document.addEventListener ){
        nonsupport=true;
      }
      break;
    }
    case 'ie6789':{
      if( document.all && !window.atob ){
        nonsupport=true;
      }
      break;
    }
  }

  if(nonsupport){
    $('body').html('<div class="ie678"><div><h2>您的游览器不支持游览该网页</h2> <h3>请升级</h3> <a class="btn" href="http://se.360.cn/">点击升级</a></div></div>');
  }

}(window.jQuery));


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
(function($){

  'use strict';

  // 用于记录下拉菜单对象
  let selectObjArray=[];

  // 如果点击它处，则关闭所有的下拉菜单
  $(document).on('click.jason.select.document',e=>{

    let $target=$(e.target);

    if(!$target.closest('.select').length){
      selectObjArray.forEach(function(selectObj){
        selectObj.close();
      });
    }

  });

  // 依附jquery
  $.fn.select=function(){

    // 开启或者关闭事件
    let event=arguments[0];
    let duration=null;

    // 如果是数字
    if(!isNaN(event)){
      duration=arguments[0];
      event = null;
    }

    return this.each(function(i,select){
      let $select=$(select);
      let selectObj=$select.data('jason.select');

      // 如果对象不存在，则是没有初始化
      if(!selectObj){
        let $label=$select.children('label');
        let $list=$select.children('ul,ol');
        let $item=$list.find('a');
        let $data=$select.children('select,input');
        let dataType=(function(){
          if($data[0].nodeName==='INPUT'){
            return 'INPUT';
          }else if($data[0].nodeName==='SELECT'){
            return 'SELECT';
          }
        }());
        let time=duration||parseFloat($select.data('time'))||200;
        $select.data('jason.select',new Select({
          $select:$select,
          $label:$label,
          $list:$list,
          $item:$item,
          $data:$data,
          dataType:dataType,
          time:time
        }));
      }

      // 如果事件存在
      if(event){
        // 重新赋值
        selectObj=$select.data('jason.select');

        selectObj[event]();
      }

    });

  };

  // 构造函数
  class Select{

    constructor(params){
      $.extend(true,this,params);

      // 收缩
      this.$select.on('click.jason.select',e=>{
        e.preventDefault();
        this.$select.toggleClass('select-open');
        this.$list.stop().slideToggle(this.time);
      });
      // 选中内容替换
      this.$list.on('click.jason.select.list','a',e=>{
        e.preventDefault();
        let $target=$(e.target);
        let dataValue;

        // 网页内容替换
        this.$label.html($target.html());

        // 表单内容替换
        switch (this.dataType){
          case 'INPUT':{
            dataValue=$target.data('value');
            break;
          }
          case 'SELECT':{
            let i=this.$item.index($target);
            dataValue=this.$data.children('option').eq(i).val();
            break;
          }
        }
        this.$data.val(dataValue);

      });

      // 记录 对象
      selectObjArray.push(this);
    }

    // 展开
    open() {
      this.$select.addClass('select-open');
      this.$list.stop().slideDown(this.time);
    }

    // 关闭
    close() {
      this.$select.removeClass('select-open');
      this.$list.stop().slideUp(this.time);
    }

  }

  // 智能初始化
  let selector='[data-jason="select"]';
  $(function(){
    $(selector).select();
  });

}(window.jQuery));
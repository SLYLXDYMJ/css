(function(window){

  // 判断是否支持 innerWidth 、 innerHeight 、 addEventListener。
  // 其实就是判断游览器是否大于IE8
  let low = window.addEventListener ? false : true;

  // 定义对象
  let win = {
    // 游览器可用区域，包括滚动条的宽度
    innerWidth:           null,
    // 游览器可用区域，包括滚动条的宽度
    innerHeight:          null,
    // 不包括滚动条的页面视口宽度
    contentWidth:         null,
    // 不包括滚动条的页面视口高度
    contentHeight:        null,
    // 滚动条/页面 的总高度
    scrollHeight:         null,
    // 当前视口顶部距离页面顶部的距离
    scrollPositionTop:    null,
    // 当前视口底部距离页面顶部的距离
    scrollPositionBottom: null,
    // 判断是否是 电脑 用户
    isPc:                 false,
    // 判断是否是 移动设备
    isMobile:             false,
    // 判断是否是手机用户
    isPhone:              false,
    // 判断是否是ipad用户
    isPad:                false,
    // 判断是否是微信用户
    isWeChat:             false,
    // Css 前缀
    cssPrefix:            false,
    // 刷新数据 
    update: function(){
      if(!low){
        // 游览器可用区域，包括滚动条的宽度
        this.innerWidth         = innerWidth;
        // 游览器可用区域，包括滚动条的宽度
        this.innerHeight        = innerHeight;
      }
      // 不包括滚动条的页面视口宽度
      this.contentWidth         = document.documentElement.clientWidth;
      // 不包括滚动条的页面视口高度
      this.contentHeight        = document.documentElement.clientHeight;
      // 页面/滚动条的总高度
      this.scrollHeight         = document.documentElement.scrollHeight;
      // 当前视口顶部距离页面顶部的距离
      this.scrollPositionTop    = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
      // 当前视口底部距离页面顶部的距离
      this.scrollPositionBottom = document.body.scrollTop + document.documentElement.clientHeight;
    }
  };

  // 定义事件
  if(low){

    // 删除不兼容属性，提示警告
    delete win.innerWidth;
    delete win.innerHeight;
    console.warn('您使用的低版本游览器，win对象部分功能将被禁止');
    
    window.attachEvent('onresize',function(){
      win.update();
    });
    window.attachEvent('onscroll',function(){
      win.update();
    });
  }
  else{
    window.addEventListener('resize',function(){
      win.update();
    },false);
    window.addEventListener('scroll',function(){
      win.update();
    },false);
  }

  // 判断是否是移动设备
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    win.isMobile = true;
    // 判断是平板还是手机
    if(window.screen.availWidth<768){
      win.isPhone = true;
    }
    else{
      win.isPad   = true;
    }
  }
  else{
    win.isPc = true;
  }

  // 判断是否是微信用户
  if(navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == "micromessenger"){
    win.isWeChat = true;
  }

  // 判断Css 前缀是什么
  win.cssPrefix = function() {
    let div = document.createElement('div');
    div.style.cssText = '-webkit-transition:all .1s; -moz-transition:all .1s; -o-transition:all .1s; -ms-transition:all .1s; transition:all .1s;';
    let style = div.style;
    if (style.webkitTransition) {
      return '-webkit-';
    }
    if (style.MozTransition) {
      return '-moz-';
    }
    if (style.oTransition) {
      return '-o-';
    }
    if (style.msTransition) {
      return '-ms-';
    }
    return '';
  }();

  // 刷新一次数据
  win.update();

  // 暴漏
  window.jason.win = win;
  
}(window));
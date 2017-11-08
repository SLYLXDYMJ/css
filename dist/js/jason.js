'use strict';

window.jason = {
  nonIe: null,
  win: null
};
(function (window) {

  window.jason.nonIe = function nonIe(versionsArr) {
    // 用来记录是否支持
    var support = true;
    // body dom元素
    var body = document.body;
    // 代码片段
    var html = '<div class="ie678">\n                      <div>\n                        <h2>\u60A8\u7684\u6E38\u89C8\u5668\u4E0D\u652F\u6301\u6E38\u89C8\u8BE5\u7F51\u9875</h2>\n                        <h3>\u8BF7\u5347\u7EA7</h3>\n                        <a class="btn" href="http://se.360.cn/">\u70B9\u51FB\u5347\u7EA7</a>\n                      </div>\n                    </div>';

    // 循环版本判断是否支持
    for (var i = 0; i < versionsArr.length; i++) {
      if (!whetherSupport(versionsArr[i])) {
        support = false;
        break;
      }
    }

    // 判断是否支持，如果不支持，则提示升级游览器
    if (!support) {
      body.innerHTML = html;
    }
  };

  // 判断是否支持的函数 返回 true 为 支持 false 为不支持
  function whetherSupport(version) {
    version = parseFloat(version);

    // 判断如果不是数字
    if (!version || version > 10 || version < 6) {
      throw new Error('jason.nonIe仅支持判断IE6~10，请输入正确的版本号');
    }

    switch (version) {
      case 6:
        {
          if (document.all && document.compatMode && !window.XMLHttpRequest) {
            return false;
          }
          break;
        }
      case 7:
        {
          if (document.all && window.XMLHttpRequest && !document.querySelector) {
            return false;
          }
          break;
        }
      case 8:
        {
          if (document.all && document.querySelector && !document.addEventListener) {
            return false;
          }
          break;
        }
      case 9:
        {
          if (document.all && document.addEventListener && !window.atob) {
            return false;
          }
          break;
        }
      case 10:
        {
          if (document.all && document.addEventListener && window.atob) {
            return false;
          }
          break;
        }
    }

    return true;
  }
})(window);
(function (window) {

  // 判断是否支持 innerWidth 、 innerHeight 、 addEventListener。
  // 其实就是判断游览器是否大于IE8
  var low = window.addEventListener ? false : true;

  // 定义对象
  var win = {
    // 游览器可用区域，包括滚动条的宽度
    innerWidth: null,
    // 游览器可用区域，包括滚动条的宽度
    innerHeight: null,
    // 不包括滚动条的页面视口宽度
    contentWidth: null,
    // 不包括滚动条的页面视口高度
    contentHeight: null,
    // 滚动条/页面 的总高度
    scrollHeight: null,
    // 当前视口顶部距离页面顶部的距离
    scrollPositionTop: null,
    // 当前视口底部距离页面顶部的距离
    scrollPositionBottom: null,
    // 判断是否是 电脑 用户
    isPc: false,
    // 判断是否是手机用户
    isPhone: false,
    // 判断是否是ipad用户
    isPad: false,
    // 判断是否是微信用户
    isWeChat: false,
    // Css 前缀
    cssPrefix: false,
    // 刷新数据 
    update: function update() {
      if (!low) {
        // 游览器可用区域，包括滚动条的宽度
        this.innerWidth = innerWidth;
        // 游览器可用区域，包括滚动条的宽度
        this.innerHeight = innerHeight;
      }
      // 不包括滚动条的页面视口宽度
      this.contentWidth = document.documentElement.clientWidth;
      // 不包括滚动条的页面视口高度
      this.contentHeight = document.documentElement.clientHeight;
      // 页面/滚动条的总高度
      this.scrollHeight = document.documentElement.scrollHeight;
      // 当前视口顶部距离页面顶部的距离
      this.scrollPositionTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
      // 当前视口底部距离页面顶部的距离
      this.scrollPositionBottom = document.body.scrollTop + document.documentElement.clientHeight;
    }
  };

  // 定义事件
  if (low) {

    // 删除不兼容属性，提示警告
    delete win.innerWidth;
    delete win.innerHeight;
    console.warn('您使用的低版本游览器，win对象部分功能将被禁止');

    window.attachEvent('onresize', function () {
      win.update();
    });
    window.attachEvent('onscroll', function () {
      win.update();
    });
  } else {
    window.addEventListener('resize', function () {
      win.update();
    }, false);
    window.addEventListener('scroll', function () {
      win.update();
    }, false);
  }

  // 判断是否是移动设备
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // 判断是平板还是手机
    if (window.screen.availWidth < 768) {
      win.isPhone = true;
    } else {
      win.isPad = true;
    }
  } else {
    win.isPc = true;
  }

  // 判断是否是微信用户
  if (navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == "micromessenger") {
    win.isWeChat = true;
  }

  // 判断Css 前缀是什么
  win.cssPrefix = function () {
    var div = document.createElement('div');
    div.style.cssText = '-webkit-transition:all .1s; -moz-transition:all .1s; -o-transition:all .1s; -ms-transition:all .1s; transition:all .1s;';
    var style = div.style;
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
})(window);
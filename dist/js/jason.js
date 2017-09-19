'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

if (window.jQuery === undefined) {
  throw new Error('请先导入jquery');
}
(function ($) {

  'use strict';

  // 记录body

  var $body = $('body');

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
      update: function update() {
        //视口顶部，距离页面顶部的距离
        this.scrollPositionTop = Math.max($body.scrollTop(), document.documentElement.scrollTop);
        // 视口底部，距离页面顶部的距离
        this.scrollPositionBottom = Math.max($body.scrollTop(), document.documentElement.scrollTop) + document.documentElement.clientHeight;

        //视口的宽度 排除滚动条 加上滚动条的 直接用innerWidth
        this.innerWidth = document.documentElement.clientWidth;
        //视口的高度，除去滚动条的
        this.innerHeight = document.documentElement.clientHeight;
        // 页面的总高度
        this.bodyHeight = parseFloat($body.outerHeight()) + parseFloat($body.css('marginTop')) + parseFloat($body.css('marginBottom'));
        //注意：
        //IE 6 7 8 没有innerWidth和innerHeight
        //IE9已经全都支持了
        //如果是IE 6 7 8那么会报错，影响JS的运行
        try {
          //游览器包括滚动条的宽度
          this.outWidth = innerWidth;
          //游览器包括滚动条的高度
          this.outHeight = innerHeight;
          //Y轴滚动条的宽度
          this.scrollWidth = innerWidth - $(window).width();
        } catch (err) {
          // 弹出警告
          console.log("您可能在用低版本IE访问本页面，$win的部分属性将受到影响不能正常读取");
        }
      }
    }
  });

  $.$win.update();
  $(window).resize(function () {
    $.$win.update();
  });
  $(window).scroll(function () {
    $.$win.update();
  });
})(window.jQuery);
(function ($) {

  'use strict';

  var canIe = $('html').data('jason');
  var nonsupport = false;

  switch (canIe) {
    case 'ie678':
      {
        if (document.all && !document.addEventListener) {
          nonsupport = true;
        }
        break;
      }
    case 'ie6789':
      {
        if (document.all && !window.atob) {
          nonsupport = true;
        }
        break;
      }
  }

  if (nonsupport) {
    $('body').html('<div class="ie678"><div><h2>您的游览器不支持游览该网页</h2> <h3>请升级</h3> <a class="btn" href="http://se.360.cn/">点击升级</a></div></div>');
  }
})(window.jQuery);

(function ($) {

  // 打开导航的名字
  var openClass = 'responsive-nav-open';

  $.fn.responsiveNav = function () {

    this.each(function (i, nav) {
      var $nav = $(nav),
          $navList = $nav.children('ul'),
          api = $nav.data('jason.responsive-nav');

      if (!api) {
        $nav.data('jason.responsive-nav', new Nav($nav, $navList));
      }
    });
  };

  var Nav = function () {
    function Nav($nav, $navList) {
      _classCallCheck(this, Nav);

      var my = this;

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
      my.openBefore = null;
      my.openAfter = null;
      my.closeBefore = null;
      my.closeAfter = null;

      // 用来确认 开关
      var navId = my.$nav.attr('id') || 'jason-responsive-nav';
      $(document).on('click', '[href="#' + navId + '"]', function () {
        if (my.isOpen) {
          my.close();
        } else {
          my.open();
        }
      });
    }

    _createClass(Nav, [{
      key: 'open',
      value: function open() {
        var _this = this;

        // 取消定时器
        clearTimer([this.eventTimer, this.timer]);

        // 触发事件
        if (this.openBefore) this.openBefore(this);

        // 状态切换
        this.isOpen = true;

        // 设置 元素 显示
        this.$nav.show();

        // display 和 transition
        this.$nav.css('display');

        // 加class
        this.$nav.addClass(openClass);

        // 触发事件
        if (this.openAfter) {
          // 每次都重新获取过度时间，因为是响应式，用户有可能从大屏幕切换到小屏幕
          var tTime = getTTime(this.$nav);
          this.eventTimer = setTimeout(function () {
            _this.openAfter(_this);
          }, tTime);
        }
      }
    }, {
      key: 'close',
      value: function close() {
        var _this2 = this;

        // 结束掉定时器
        clearTimer(this.eventTimer);

        // 每次都重新获取过度时间，因为是响应式，用户有可能从大屏幕切换到小屏幕
        var tTime = getTTime(this.$nav);

        // 触发事件
        if (this.closeBefore) this.closeBefore(this);

        // 状态切换
        this.isOpen = false;

        // 移除 class
        this.$nav.removeClass(openClass);

        // 动画结束后，隐藏元素
        this.timer = setTimeout(function () {
          _this2.$nav.hide();
        }, tTime);

        // 触发事件
        if (this.closeAfter) {
          this.eventTimer = setTimeout(function () {
            _this2.closeAfter();
          }, tTime);
        }
      }
    }, {
      key: 'on',
      value: function on(event, callback) {
        switch (event) {
          case 'open:before':
            {
              this.openBefore = callback;
              break;
            }
          case 'open:after':
            {
              this.openAfter = callback;
              break;
            }
          case 'close:before':
            {
              this.closeBefore = callback;
              break;
            }
          case 'close:after':
            {
              this.closeAfter = callback;
              break;
            }
        }
      }
    }]);

    return Nav;
  }();

  // 获取过度时长
  // 每次都重新获取过度时间，因为是响应式，用户有可能从大屏幕切换到小屏幕，导致计算错误


  function getTTime($elem) {
    return parseFloat($elem.css('transitionDuration')) * 1000 || 0;
  }

  // 清除定时器
  function clearTimer(timer) {
    // 数组
    if (Object.prototype.toString.call(timer) === '[object Array]') {
      timer.forEach(function (t, i) {
        clearTimeout(t);
        t = null;
      });
    } else {
      clearTimeout(timer);
      timer = null;
    }
  }
})(window.jQuery);
(function ($) {

  'use strict';

  // 用于记录下拉菜单对象

  var selectObjArray = [];

  // 如果点击它处，则关闭所有的下拉菜单
  $(document).on('click.jason.select.document', function (e) {

    var $target = $(e.target);

    if (!$target.closest('.select').length) {
      selectObjArray.forEach(function (selectObj) {
        selectObj.close();
      });
    }
  });

  // 依附jquery
  $.fn.select = function () {

    // 开启或者关闭事件
    var event = arguments[0];
    var transitionTime = null;

    // 如果是数字
    if (!isNaN(event)) {
      transitionTime = arguments[0];
      event = null;
    }

    return this.each(function (i, select) {
      var $select = $(select);
      var selectObj = $select.data('jason.select');

      // 如果对象不存在，则是没有初始化
      if (!selectObj) {
        var $label = $select.children('label');
        var $list = $select.children('ul,ol');
        var $item = $list.find('a');
        var $data = $select.children('select,input');
        var dataType = function () {
          if ($data[0].nodeName === 'INPUT') {
            return 'INPUT';
          } else if ($data[0].nodeName === 'SELECT') {
            return 'SELECT';
          }
        }();
        var time = transitionTime || parseFloat($select.data('time')) || 200;
        $select.data('jason.select', new Select({
          $select: $select,
          $label: $label,
          $list: $list,
          $item: $item,
          $data: $data,
          dataType: dataType,
          time: time
        }));
      }

      // 如果事件存在
      if (event) {
        // 重新赋值
        selectObj = $select.data('jason.select');

        selectObj[event]();
      }
    });
  };

  // 构造函数

  var Select = function () {
    function Select(params) {
      var _this3 = this;

      _classCallCheck(this, Select);

      $.extend(true, this, params);

      // 收缩
      this.$select.on('click.jason.select', function (e) {
        e.preventDefault();
        _this3.$select.toggleClass('select-open');
        _this3.$list.stop().slideToggle(_this3.time);
      });
      // 选中内容替换
      this.$list.on('click.jason.select.list', 'a', function (e) {
        e.preventDefault();
        var $target = $(e.target);
        var dataValue = void 0;

        // 网页内容替换
        _this3.$label.html($target.html());

        // 表单内容替换
        switch (_this3.dataType) {
          case 'INPUT':
            {
              dataValue = $target.data('value');
              break;
            }
          case 'SELECT':
            {
              var i = _this3.$item.index($target);
              dataValue = _this3.$data.children('option').eq(i).val();
              break;
            }
        }
        _this3.$data.val(dataValue);
      });

      // 记录 对象
      selectObjArray.push(this);
    }

    // 展开


    _createClass(Select, [{
      key: 'open',
      value: function open() {
        this.$select.addClass('select-open');
        this.$list.stop().slideDown(this.time);
      }

      // 关闭

    }, {
      key: 'close',
      value: function close() {
        this.$select.removeClass('select-open');
        this.$list.stop().slideUp(this.time);
      }
    }]);

    return Select;
  }();

  // 智能初始化


  var selector = '[data-jason="select"]';
  $(function () {
    $(selector).select();
  });
})(window.jQuery);
(function () {

  'use strict';

  // 依附jquery

  $.fn.tab = function (options) {

    var defaults = {
      // 切换的小组成员
      groupSelector: null,
      // 触发事件
      event: 'click',
      // 触发事件后是否等待一会
      wait: false,
      // 是否自动切换
      autoplay: false,
      // 无操作的时，是否归为
      isReturn: false,
      // 初始激活第几个元素
      first: 1,
      // 回调函数
      before: null,
      after: null
    };

    return this.each(function (i, tab) {
      var $tab = $(tab);
      var data = $tab.data('jason.tab');

      if (!data) {
        var params = $.extend(true, defaults, options, {
          $wrapper: $tab,
          $tabs: $tab.find('a'),
          $groupElem: $(options.groupSelector)
        });
        $tab.data('jason.tab', new Tab(params));
      }

      data = $tab.data('jason.tab');

      // 如果是移动至
      if (!isNaN(options)) {
        data.hoverTo(options - 1);
      }
    });
  };

  // 构造函数

  var Tab = function () {
    function Tab(params) {
      _classCallCheck(this, Tab);

      var my = this;

      $.extend(my, params);
      // 等待激活的定时器标志
      my.waitActiveTimer = null;
      // 等待回归的定时器标志
      my.waitBackTimer = null;
      // 等待轮播的定时器标志
      my.waitAutoTimer = null;
      // 轮播的定时器标志
      my.autoplayTimer = null;

      // 归为 和 轮播 功能 同时只能有一个
      if (my.goBack) {
        if (my.autoplay) {
          throw new Error('归为和自动轮播冲突。请重新构建你的逻辑');
        }
      }

      // 用于记录相同组对应位置的元素，这样加class方便
      my.tabGroup = [];

      var _loop = function _loop(i) {
        var jqArr = $();

        jqArr.push(my.$tabs.get(i));
        my.$groupElem.each(function (j, elem) {
          jqArr.push($(elem).children().get(i));
        });

        my.tabGroup[i] = jqArr;
      };

      for (var i = 0; i < my.$tabs.length; i++) {
        _loop(i);
      }

      // 初始默认元素
      if (my.first) {
        my.hoverTo(my.first - 1);
      }

      // 轮播
      if (my.autoplay) {
        autoPlay(my);
      }

      // 事件绑定
      my.$wrapper.on(my.event, 'a', function (e) {
        e.preventDefault();
        clearTimeout(my.waitActiveTimer);
        clearTimeout(my.waitBackTimer);
        clearTimeout(my.waitAutoTimer);
        clearInterval(my.autoplayTimer);
        my.waitActiveTimer = null;
        my.waitBackTimer = null;
        my.waitAutoTimer = null;
        my.autoplayTimer = null;

        var i = my.$tabs.index($(this));

        // 用于 计算 触发延迟时间 和 归为时间
        var goBackTime = my.goBack;

        // 如果设定了触发延迟
        if (my.wait) {
          goBackTime += my.wait;
          my.waitActiveTimer = setTimeout(function () {
            my.hoverTo(i);
          }, my.wait);
        }

        // 否则直接切换
        else {
            my.hoverTo(i);
          }

        // 如果设置了归为
        if (my.goBack) {
          my.waitBackTimer = setTimeout(function () {
            my.hoverTo(my.first - 1);
          }, goBackTime);
        }

        // 如果设置了轮播
        if (my.autoplay) {
          if (my.wait) {
            my.waitAutoTimer = setTimeout(function () {
              autoPlay(my);
            }, my.wait);
          } else {
            autoPlay(my);
          }
        }
      });
    }

    // 切换至某一个
    // 注意：这里的参数 i 是下标


    _createClass(Tab, [{
      key: 'hoverTo',
      value: function hoverTo(i) {
        // 判断是否是重复触发
        if (this.tabGroup[i].hasClass('active')) {
          return false;
        } else {
          this.tabGroup.forEach(function (group, i2) {
            group.removeClass('active');
          });
          this.before(this.now);
          this.tabGroup[i].addClass('active');
          this.after(i + 1);
          this.now = i + 1;
        }
      }
    }]);

    return Tab;
  }();

  // 轮播定时器启动


  function autoPlay(my) {
    my.autoplayTimer = setInterval(function () {
      var i = null;
      // 判断 是否是最后一个，如果是那么从第一个开始
      if (my.now === my.$tabs.length) {
        i = 0;
      } else {
        i = my.now;
      }
      my.hoverTo(i);
    }, my.autoplay);
  }
})();
(function () {

  'use strict';

  $.extend({
    jason: {

      // 随机一个指定范围的数字
      random: function random(max, min, length) {
        var rNum = Math.random() * (max - min) + min;
        rNum = parseFloat(rNum.toFixed(length));
        return rNum;
      },

      // 打乱一个数组
      arrMess: function arrMess(arr) {
        var messArr = arr.slice(0);
        for (var j, x, i = messArr.length; i; j = parseInt(Math.random() * i), x = messArr[--i], messArr[i] = messArr[j], messArr[j] = x) {}
        return messArr;
      },

      // 图片加载完成后执行的函数
      imgLoadEnd: function imgLoadEnd(imgSelector, callback) {
        // 实现思路
        // 判断图片是否加载完成，用 img.complete ，如果都为true则代表全都加载完成了
        // 最后，执行回调函数

        var $imgs = $(imgSelector);

        var timer = setInterval(function () {
          for (var i = 0; i < $imgs.length; i++) {
            if (!$imgs[i].complete) {
              return;
            }
          }
          clearInterval(timer);
          timer = null;
          callback();
        });
      },

      // 判断是否是一个数组
      isArray: function isArray(arr) {
        return Object.prototype.toString.call(arr) === '[object Array]';
      }

    }
  });
})();
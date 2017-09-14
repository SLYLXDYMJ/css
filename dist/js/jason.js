/**
 * Created by Administrator on 2017/7/9.
 */

if(!window.jQuery){
  throw new Error('jason依赖jQuery，请导入 jquery-1.11.3 及以上版本');
}
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
/**
 * Created by Administrator on 2017/7/9.
 */

(function($){

  "use strict";

  var Dropdown=function($elem,time,group,type){
    this.$elem=$elem;
    this.$text=$elem.children('span');
    this.$list=$elem.children('ul,ol');
    this.time=time;
    this.$dataElem=$elem.children('input,select');
    this.group=group||null;
    this.type=type||null;
    $elem.on('click',this.toggle);
    if(type==='select'){
      this.$list.on('click','a',$.proxy(this.bindData,this));
    }
  };

  Dropdown.selector='[data-plugin="dropdown"]';

  Dropdown.prototype.toggle=function(){
    var data=$(this).data('jason.dropdown');
    if(data.group){
      data.sameGroupUp(data.$elem,data.group);
    }
    data.$elem.toggleClass('active');
    data.$list.stop().slideToggle(data.time);
  };

  Dropdown.prototype.sameGroupUp=function($notElem,group){
    var $dropdown=$(Dropdown.selector).not($notElem);
    $dropdown.each(function(i,elem){
      var data=$(elem).data('jason.dropdown');
      if(data.group===group){
        data.$elem.removeClass('active');
        data.$list.stop().slideUp(data.time);
      }
    });
  };

  Dropdown.prototype.bindData=function(e){
    e.preventDefault();
    var $aElem=$(e.target);
    // 存放数据
    var value=null;
    // 判断是input还是select标签
    var nodeName=this.$dataElem.get(0).nodeName;
    if(nodeName==='INPUT'){
      value=$aElem.data('value');
    }else if(nodeName==='SELECT'){
      value=this.$dataElem.children('option').eq(this.$list.find('a').index($aElem)).val();
    }
    this.$text.html($aElem.html());
    this.$dataElem.val(value);
  };

  $(document).on('click',function(e){
    var $target=$(e.target);
    if($target.closest(Dropdown.selector).length===0){
      var $dropdown=$(Dropdown.selector);
      $dropdown.each(function(i,elem){
        var data=$(elem).data('jason.dropdown');
        data.$elem.removeClass('active');
        data.$list.stop().slideUp(data.time);
      });
    }
  });

  // 命名冲突处理
  var old=$.fn.dropdown;

  // 定义插件
  var plugin=function(){
    return this.each(function(i,elem){
      var $elem=$(elem);
      var data=$elem.data('jason.dropdown');
      var time=$elem.data('time')||0;
      var group=$elem.data('group');
      var type=$elem.data('type');
      if(!data){
        $elem.data('jason.dropdown',(data=new Dropdown($elem,time,group,type)));
      }
    });
  };

  $.fn.tab=plugin;

  if(old){
    $.fn.dropdown.old=old;
    $.fn.dropdown.noConflict=function(){
      $.fn.dropdown=$.fn.dropdown.old;
      return this;
    };
  }

  // 智能初始化
  $(function(){
    var $dropdown=$(Dropdown.selector);
    plugin.call($dropdown);
  });

}(window.jQuery));

/**
 * Created by Administrator on 2017/7/9.
 */

// 实现思路
// IE 6,7,8 把 -[1,] 解析成NaN，而其他游览器解析成 -1
// 判断是否为NaN即可

(function($){

  "use strict";

  if($('html').attr('data-ie678')==="false"&&isNaN(-[1,])){
    var html='<div class="ie678"><div><h2>您的游览器不支持游览该网页</h2> <h3>请升级</h3> <a class="btn" href="http://se.360.cn/">点击升级</a></div></div>';
    $('body').html(html);
  }

}(window.jQuery));
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
/**
 * Created by Administrator on 2017/7/9.
 */

// 实现思路
// 创建一个构造函数，用于，给sameheight分组
// 创建一个新数组，遍历所有的SameHeight，把其高度设置为auto
// 获取其group值，如果数组[group]不存在则建立二维数组，如果存在则把元素压入数组中
// 遍历数组，获取相同数组中最高的那个元素获取高度，给同数组中的元素赋值

(function($){

  "use strict";

  function SameHeight(elem){
    this.$elem=$(elem);
    this.group=this.$elem.data('group');
  }

  SameHeight.selector='[data-plugin="sameHeight"]';

  // 分组
  function grouping(){
    var arr=[];
    var $elems=$(SameHeight.selector);

    // 分组，并且把height归auto
    $elems.css('height','auto').each(function(i,elem){
      // var obj=$(elem).data('jason.sameHeight');
      var $elem=$(elem);

      // 如果组名为数字，那么arr会变成索引数组，数组中间会有undefined
      // 把每个组名前面拼上相同的字符串就可以解决
      var hash='group'+$elem.data('group');

      if(!arr[hash]){
        arr[hash]=[];
      }
      arr[hash].push($elem);

    });

    // 计算最大高度 并赋值
    for(var key in arr){
      var maxHeight=null;
      for(var i=0;i<arr[key].length;i++){
        maxHeight=parseFloat(arr[key][i].css('height'))>maxHeight?parseFloat(arr[key][i].css('height')):maxHeight;
      }
      for(var j=0;j<arr[key].length;j++){
        arr[key][j].css('height',maxHeight);
      }
    }
  }

  $(window).resize(grouping);

  // 命名冲突处理
  var old=$.fn.sameHeight;

  // 定义插件
  var plugin=function(){
    if(this.length===0){
      grouping();
      return ;
    }
    return this.each(function(i,elem){
      var $elem=$(elem);
      var data=$elem.data('jason.sameHeight');
      if(!data){
        $elem.data('jason.sameHeight',(data=new SameHeight($elem)));
      }
    });
  };

  $.fn.sameHeight=plugin;

  if(old){
    $.fn.sameHeight.old=old;
    $.fn.sameHeight.noConflict=function(){
      $.fn.sameHeight=$.fn.sameHeight.old;
      return this;
    };
  }

  // 智能初始化
  $(function(){
    var $sameHeight=$(SameHeight.selector);
    plugin.call($sameHeight);
    grouping();
  });

}(window.jQuery));
/**
 * Created by Administrator on 2017/7/9.
 */

// 实现思路
// tab插件的a触发后，找到tab插件，并取出组名
// 找到全部相同组的，在对应位置全都加上.active

(function(){

  "use strict";

  // 创建构造函数以及其原型
  var Tab=function($elem,group,event){
    this.group=group;
    $elem.on(event,'a',this.switchover);
  };

  Tab.selector='[data-plugin="tab"]';

  Tab.prototype.switchover=function(e){
    e.preventDefault();
    var $this=$(this);
    if($this.hasClass('active')){return;}
    var $tabElem=$this.closest(Tab.selector);
    var group=$tabElem.data('jason.tab').group;
    var i=$tabElem.find('a').index($this);
    var $otherElem=$('[data-group='+group+']').not($tabElem);

    $tabElem.find('a').removeClass('active').eq(i).addClass('active');
    $otherElem.each(function(j,elem){
      $(elem).children().removeClass('active').eq(i).addClass('active');
    });
  };

  // 命名冲突处理
  var old=$.fn.tab;

  // 定义插件
  var plugin=function(){
    return this.each(function(i,elem){
      var $elem=$(elem);
      var group=$elem.data('group');
      var event=$elem.data('event')||'click';
      var data=$elem.data('jason.tab');
      if(!data){
        $elem.data('jason.tab',(data=new Tab($elem,group,event)));
      }
    });
  };

  $.fn.tab=plugin;

  if(old){
    $.fn.tab.old=old;
    $.fn.tab.noConflict=function(){
      $.fn.tab=$.fn.tab.old;
      return this;
    };
  }

  // 智能初始化
  $(function(){
    var $tabs=$(Tab.selector);
    plugin.call($tabs);
  });

}());
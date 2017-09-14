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

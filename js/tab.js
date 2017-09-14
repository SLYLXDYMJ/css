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
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
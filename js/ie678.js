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
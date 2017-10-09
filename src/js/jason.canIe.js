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


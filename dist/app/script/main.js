(function($){

  let myApp = {};

  // 共同执行的js代码
  myApp.com = function(){
    
  };

  


  // 启动应用
  $(function(){
    var app=$('html').data('app');
    var appArr=(function(){
      if(app===undefined){
        return null;
      }
      else if($.trim(app).length===0){
        return null;
      }
      else{
        return $.trim(app).split(' ');
      }
    }());
    myApp.com();
    if(appArr){
      appArr.forEach(function(value){
        if(myApp[value]){
          myApp[value]();
        }
      });
    }
  });

}(window.jQuery));
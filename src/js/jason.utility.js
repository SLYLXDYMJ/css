(function(){

  'use strict';

  $.extend({
    jason:{
      
      // 随机一个指定范围的数字
      random : function(max,min,length){
        let rNum=Math.random()*(max - min) + min;
        rNum=parseFloat(rNum.toFixed(length));
        return rNum;
      },

      // 打乱一个数组
      arrMess : function(arr){
        let messArr=arr.slice(0);
        for(let j, x, i = messArr.length; i; j = parseInt(Math.random() * i), x = messArr[--i], messArr[i] = messArr[j], messArr[j] = x);
        return messArr;
      },

      // 图片加载完成后执行的函数
      imgLoadEnd : function(imgSelector,callback){
        // 实现思路
        // 判断图片是否加载完成，用 img.complete ，如果都为true则代表全都加载完成了
        // 最后，执行回调函数

        let $imgs=$(imgSelector);

        let timer=setInterval(function(){
          for(let i=0;i<$imgs.length;i++){
            if(!$imgs[i].complete){
              return;
            }
          }
          clearInterval(timer);
          timer = null;
          callback();
        });

      },

      // 判断是否是一个数组
      isArray : function (arr){
        return Object.prototype.toString.call(arr)==='[object Array]'
      }

    }
  });


}());
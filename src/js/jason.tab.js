(function(){

  'use strict';

  // 依附jquery
  $.fn.tab=function(options){

    let defaults={
      // 切换的小组成员
      groupSelector:null,
      // 触发事件
      event:'click',
      // 触发事件后是否等待一会
      wait:false,
      // 是否自动切换
      autoplay:false,
      // 无操作的时，是否归为
      isReturn:false,
      // 初始激活第几个元素
      first:1,
      // 回调函数
      before:null,
      after:null,
    };

    return this.each(function(i,tab){
      let $tab=$(tab);
      let data=$tab.data('jason.tab');

      if(!data){
        let params=$.extend(true,defaults,options,{
          $wrapper:$tab,
          $tabs:$tab.find('a'),
          $groupElem:$(options.groupSelector)
        });
        $tab.data('jason.tab',new Tab(params));
      }

      data=$tab.data('jason.tab');

      // 如果是移动至
      if(!isNaN(options)){
        data.hoverTo(options-1);
      }

    });

  };

  // 构造函数
  class Tab{

    constructor(params){
      let my=this;

      $.extend(my,params);
      // 等待激活的定时器标志
      my.waitActiveTimer=null;
      // 等待回归的定时器标志
      my.waitBackTimer=null;
      // 等待轮播的定时器标志
      my.waitAutoTimer=null;
      // 轮播的定时器标志
      my.autoplayTimer=null;

      // 归为 和 轮播 功能 同时只能有一个
      if(my.goBack){
        if(my.autoplay){
          throw new Error ('归为和自动轮播冲突。请重新构建你的逻辑');
        }
      }

      // 用于记录相同组对应位置的元素，这样加class方便
      my.tabGroup=[];
      for(let i=0;i<my.$tabs.length;i++){
        let jqArr=$();

        jqArr.push(my.$tabs.get(i));
        my.$groupElem.each(function(j,elem){
          jqArr.push($(elem).children().get(i));
        });

        my.tabGroup[i]=jqArr;
      }

      // 初始默认元素
      if(my.first){
        my.hoverTo(my.first-1);
      }

      // 轮播
      if(my.autoplay){
        autoPlay(my);
      }

      // 事件绑定
      my.$wrapper.on(my.event,'a',function(e){
        e.preventDefault();
        clearTimeout(my.waitActiveTimer);
        clearTimeout(my.waitBackTimer);
        clearTimeout(my.waitAutoTimer);
        clearInterval(my.autoplayTimer);
        my.waitActiveTimer=null;
        my.waitBackTimer=null;
        my.waitAutoTimer=null;
        my.autoplayTimer=null;

        let i = my.$tabs.index($(this));

        // 用于 计算 触发延迟时间 和 归为时间
        let goBackTime=my.goBack;

        // 如果设定了触发延迟
        if(my.wait){
          goBackTime+=my.wait;
          my.waitActiveTimer=setTimeout(function(){
            my.hoverTo(i);
          },my.wait)
        }

        // 否则直接切换
        else{
          my.hoverTo(i);
        }

        // 如果设置了归为
        if(my.goBack){
          my.waitBackTimer=setTimeout(()=>{
            my.hoverTo(my.first-1);
          },goBackTime);
        }

        // 如果设置了轮播
        if(my.autoplay){
          if(my.wait){
            my.waitAutoTimer=setTimeout(()=>{
              autoPlay(my);
            },my.wait);
          }
          else{
            autoPlay(my);
          }
        }

      });

    }

    // 切换至某一个
    // 注意：这里的参数 i 是下标
    hoverTo(i){
      // 判断是否是重复触发
      if(this.tabGroup[i].hasClass('active')){
        return false;
      }
      else{
        this.tabGroup.forEach(function(group,i2){
          group.removeClass('active');
        });
        this.before(this.now);
        this.tabGroup[i].addClass('active');
        this.after(i+1);
        this.now=i+1;
      }
    }

  }

  // 轮播定时器启动
  function autoPlay(my){
    my.autoplayTimer=setInterval(()=>{
      let i=null;
      // 判断 是否是最后一个，如果是那么从第一个开始
      if(my.now===my.$tabs.length){
        i=0;
      }
      else{
        i=my.now;
      }
      my.hoverTo(i);
    },my.autoplay)
  }

}());
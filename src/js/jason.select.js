(function($){

  'use strict';

  // 用于记录下拉菜单对象
  let selectObjArray=[];

  // 如果点击它处，则关闭所有的下拉菜单
  $(document).on('click.jason.select.document',e=>{

    let $target=$(e.target);

    if(!$target.closest('.select').length){
      selectObjArray.forEach(function(selectObj){
        selectObj.close();
      });
    }

  });

  // 依附jquery
  $.fn.select=function(){

    // 开启或者关闭事件
    let event=arguments[0];
    let transitionTime=null;

    // 如果是数字
    if(!isNaN(event)){
      transitionTime=arguments[0];
      event = null;
    }

    return this.each(function(i,select){
      let $select=$(select);
      let selectObj=$select.data('jason.select');

      // 如果对象不存在，则是没有初始化
      if(!selectObj){
        let $label=$select.children('label');
        let $list=$select.children('ul,ol');
        let $item=$list.find('a');
        let $data=$select.children('select,input');
        let dataType=(function(){
          if($data[0].nodeName==='INPUT'){
            return 'INPUT';
          }else if($data[0].nodeName==='SELECT'){
            return 'SELECT';
          }
        }());
        let time=transitionTime||parseFloat($select.data('time'))||200;
        $select.data('jason.select',new Select({
          $select:$select,
          $label:$label,
          $list:$list,
          $item:$item,
          $data:$data,
          dataType:dataType,
          time:time
        }));
      }

      // 如果事件存在
      if(event){
        // 重新赋值
        selectObj=$select.data('jason.select');

        selectObj[event]();
      }

    });

  };

  // 构造函数
  class Select{
    constructor(params){
      $.extend(true,this,params);

      // 收缩
      this.$select.on('click.jason.select',e=>{
        e.preventDefault();
        this.$select.toggleClass('select-open');
        this.$list.stop().slideToggle(this.time);
      });
      // 选中内容替换
      this.$list.on('click.jason.select.list','a',e=>{
        e.preventDefault();
        let $target=$(e.target);
        let dataValue;

        // 网页内容替换
        this.$label.html($target.html());

        // 表单内容替换
        switch (this.dataType){
          case 'INPUT':{
            dataValue=$target.data('value');
            break;
          }
          case 'SELECT':{
            let i=this.$item.index($target);
            dataValue=this.$data.children('option').eq(i).val();
            break;
          }
        }
        this.$data.val(dataValue);

      });

      // 记录 对象
      selectObjArray.push(this);
    }

    // 展开
    open() {
      this.$select.addClass('select-open');
      this.$list.stop().slideDown(this.time);
    }

    // 关闭
    close() {
      this.$select.removeClass('select-open');
      this.$list.stop().slideUp(this.time);
    }

  }

  // 智能初始化
  let selector='[data-jason="select"]';
  $(function(){
    $(selector).select();
  });

}(window.jQuery));
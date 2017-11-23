(function(){
  
  // 创建 jason 对象
  let jason = {
    nonIe : null,
    win   : null,
    origin: null,
  }

  // 判断是否命名冲突
  if(window.jason){
    jason.origin = window.jason;
  }

  // 暴漏对象
  window.jason = jason;
  
}());
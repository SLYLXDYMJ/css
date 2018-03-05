// 判断是否支持的函数 返回结果
let whetherSupport = function (version) {
  version = parseFloat(version);
  // 判断如果不是数字
  if (!version || version > 10 || version < 6) {
    throw new Error('jason.nonIe仅支持判断IE6~10，请输入正确的版本号');
  }
  // 根据版本号进行判断
  switch (version) {
    case 6: {
      if (document.all && document.compatMode && !window.XMLHttpRequest) {
        return false;
      }
      break;
    }
    case 7: {
      if (document.all && window.XMLHttpRequest && !document.querySelector) {
        return false;
      }
      break;
    }
    case 8: {
      if (document.all && document.querySelector && !document.addEventListener) {
        return false;
      }
      break;
    }
    case 9: {
      if (document.all && document.addEventListener && !window.atob) {
        return false;
      }
      break;
    }
    case 10: {
      if (document.all && document.addEventListener && window.atob) {
        return false;
      }
      break;
    }
  }
  return true;
};

export default function (versionsArr) {
  // 用来记录是否支持
  let support = true;
  // body dom元素
  let body = document.body;
  // 代码片段
  let html = `<div class="ie678">
                <div>
                  <h2>您的游览器不支持游览该网页</h2>
                  <h3>请升级</h3>
                  <a class="btn" href="http://se.360.cn/">点击升级</a>
                </div>
              </div>`;
  // 循环版本判断是否支持
  for (let i = 0; i < versionsArr.length; i++) {
    if (!whetherSupport(versionsArr[i])) {
      support = false;
      break;
    }
  }
  // 判断是否支持，如果不支持，则提示升级游览器
  if (!support) {
    body.innerHTML = html;
  }
};

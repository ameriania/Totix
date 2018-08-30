export default function() {
  function dispatchVar() {
    var arr = [];

    for (var i = 0; i < arr.length; i++) {
      /** 加一个块级作用域 */
      arr[i] = (function(i) {
        /** 利用闭包去保持这个块级的活动对象,起到可以var 变量不泄漏 */
        return function() {
          console.log(i);
        };
      })(i);
    }

    return arr;
  }

  console.log(dispatchVar());
}

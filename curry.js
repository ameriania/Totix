/**
 * 函数 curry 化研究
 */
export default function() {
  function add(a, b, c) {
    return a + b + c;
  }

  /** 带预传值的 curry */
  var curry1 = (fn, ...args) => {
    return function(..._args) {
      return fn.apply(null, [...args, ..._args]);
    };
  };

  /** 带参数调用变化的 curry */
  function curry2(fn, length) {
    length = length || fn.length;

    return function(..._args) {
      if (_args.length < length) {
        return curry2(
          curry1.apply(this, [fn, ..._args]),
          length - _args.length
        );
      } else {
        return fn.apply(this, _args);
      }
    };
  }

  var sum = curry2(add);

  console.log(sum(2, 2)(2));

  setTimeout(function fn() {
    setTimeout(fn, 100);
  }, 100);

  /** 防抖函数 */
  function debounce(fn, inter) {
    clearTimeout(fn.tid);
    fn.tid = setTimeout(function() {
      fn.call(null);
    }, 100);
  }

  /** 节流函数 */
  let throttle = (fn, delay) => {
    let startT = 0;
    return function(...args) {
      let curT = new Date();
      if (curT - startT >= delay) {
        fn.apply(this, args);
        startT = curT;
      }
    };
  };

  var a = document.querySelectorAll(".demo");

  console.log(a);
}

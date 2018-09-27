/**
 * Author:Toti
 * Mail:mr.totihuang@gmail.com
 */

/** 带预传值的 curry */
export function curry1(fn, ...args) {
  return function (..._args) {
    return fn.apply(null, [...args, ..._args]);
  };
};

/** 带参数调用变化的 curry */
export function curry2(fn, length) {
  length = length || fn.length;

  return function (..._args) {
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

/** 防抖函数 */
export function debounce(fn, inter) {
  clearTimeout(fn.tid);
  fn.tid = setTimeout(function () {
    fn.call(null);
  }, 100);
}

/** 节流函数 */
export function throttle(fn, delay) {
  let startT = 0;
  return function (...args) {
    let curT = new Date();
    if (curT - startT >= delay) {
      fn.apply(this, args);
      startT = curT;
    }
  };
};




/**
 * Author:Toti
 * Mail:mr.totihuang@gmail.com
 */

/**
  * 编写函数 getNumberStr(1,false,'2','b',3,4,'a')=>'1,2,3'
  */
export function getNumberStr(...args) {
  let arr = [];
  for (const item of args) {
    if (Number(item) <= 3 && Number(item) > 0) {
      arr.push(String(item));
    }
  }
  console.log(arr.join(","));
}

/**
 * 写一个字符串转换成驼峰的方法？
 * 例子:border-bottom-color -> borderBottomColor
 */
export function toCamel(str) {
  return str.split("-").reduce((prev, cur) => {
    return prev + cur.charAt(0).toUpperCase() + cur.substring(1);
  });
};

/**
 * 查找字符串中出现最多的字符和个数？
 * abbcccddddd -> 字符最多的是d，出现了5次
 * @param {string} str 
 */
export function countLetter(str) {
  return str.split("").reduce((all, name) => {
    all[name] ? all[name]++ : (all[name] = 1);
    return all;
  }, {});
};

/**
 * 如何给字符串加千分符？
 * 42342342342 -> 42,342,342,342
 */
export function toMoney(str) {
  let arr1 = [];
  arr1 = str.split("").reverse();
  let arr2 = [];

  for (var i = 0; i < arr1.length; i += 3) {
    arr2.push(arr1[i + 2] + arr1[i + 1] + arr1[i]);
  }
  return arr2
    .reverse()
    .join(",")
    .replace("undefined", "");
};

/** 增加去除字符串前后空格 */
export function trim(str) {
  return str.trim();
}

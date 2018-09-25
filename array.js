
/**
 * Author:Toti
 * Mail:mr.totihuang@gmail.com
 */


/**
 * 去重函数
 * @param {array} arr 
 */
export function dedup(arr) {
  /** 手写去重es6 */
  return Array.from(new Set(arr));
}

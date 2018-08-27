export default function() {
  /** 手写去重es6 */
  function filter(arr) {
    return Array.from(new Set(arr));
  }
}

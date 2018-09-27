/**
 * Author:Toti
 * Mail:mr.totihuang@gmail.com
 */

/**
 * 拖动函数
 * @param {evt} evt 
 */
export function dragger(evt) {
  var dragging = null;

  var target = evt.target;

  switch (evt.type) {
    case "mousedown":
      if (target.className.indexOf("draggable") > -1) {
        dragging = target;
      }
      break;
    case "mousemove":
      dragging.style.left = evt.clientX + "px";
      dragging.style.top = evt.clientY + "px";
      break;
    case "mouseup":
      dragging = null;
      break;
    default:
      break;
  }
}

/**
 * 数组分块模式
 * @param {array} array 
 * @param {function} process 
 * @param {object} context 
 */
export function chunk(array, process, context) {
  setTimeout(function fn() {
    var item = array.shift();

    process(item);
    if (array.length > 0) {
      setTimeout(fn, 100);
    }
  }, 100);
}

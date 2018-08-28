export default function() {
  /** 拖动事件 */
  function dragger(evt) {
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

  document.addEventListener("mousedown", dragger, false);
  document.addEventListener("mousemove", dragger, false);
  document.addEventListener("mouseup", dragger, false);

  function chunk(array, process, context) {
    setTimeout(function fn() {
      var item = array.shift();

      process(item);
      if (array.length > 0) {
        setTimeout(fn, 100);
      }
    }, 100);
  }

  function throttle(fn, inter) {
    clearTimeout(fn.tid);
    fn.tid = setTimeout(() => {
      fn.call(this);
    }, inter);
  }

  function test() {
    var http = require("http");
    http
      .createServer(function(req, res) {
        res.writeHeader(200, {
          "content-type": "text/html;charset=utf-8"
        });

        res.write("");

        res.end();
      })
      .listen(8888);
  }

  function addNum(a, b) {
    if (a.length < b.length) {
      [a, b] = [b, a];
    }

    let [arr1, arr2] = [[...a].reverse(), [...b].reverse()];

    let num;

    for (let i = 0; i < arr1.length; i++) {
      if (arr2[i]) {
        arr1[i] = parseInt(arr1[i]) + parseInt(arr2[i]) + num;
      } else {
        arr1[i] = parseInt(arr1[i]) + num;
      }

      if (arr1[i] >= 10) {
        [arr1[i], num] = [arr1[i] % 10, 1];
      } else {
        num = 0;
      }
    }

    if (num === 1) {
      arr1[arr1.length] = num;
    }

    return arr1.reverse().join("");
  }
}

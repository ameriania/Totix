/**
 * Author:Toti
 * Mail:mr.totihuang@gmail.com
 */

/**
 * 自定义事件函数
 */
export function AttachEvent() {
  /** handlers 对象 */
  this.handlers = {};
}

AttachEvent.prototype = {
  constructor: EventTarget,
  /** 增加添加方法
   * @param {type} 类型
   * @param {handler} 函数
   */
  addHandler: function (type, handler) {
    /** 如果这个类型是第一次添加,建一个数组 */
    if (typeof this.handlers[type] == "undefined") {
      this.handlers[type] = [];
    }

    /** 把事件,存入类型的数组里面 */
    this.handlers[type].push(handler);
  },

  fire: function (event) {
    /** 如果不存在事件对象,把当前作用域放进去 */
    if (!event.target) {
      event.target = this;
    }

    /**　判断这个类型的绑定事件是否为空，不为空继续 */
    if (this.handlers[event.type] instanceof Array) {
      var handlers = this.handlers[event.type];
      /** 依次执行这个类型下的所有绑定的事件 */
      for (var i = 0; i < handlers.length; i++) {
        handlers[i](event);
      }
    }
  },

  removeHandler: function (type, handler) {
    /** 检查不为空,继续 */
    if (this.handlers[type] instanceof Array) {
      var handlers = this.handlers[type];

      /** 判断是哪个事件 */
      for (var i = 0; i < handlers.length; i++) {
        if (handlers[i] === handler) break;
      }

      /** 把事件除去 */
      handlers.splice(i, 1);
    }
  }
};


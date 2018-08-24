export default function() {
  const range = function*(from, to) {
    for (let i = from; i < to; i++) {
      console.log("range\t", i);
      yield i;
    }
  };

  const map = function*(flow, transform) {
    for (const data of flow) {
      console.log("map\t", data);
      yield transform(data);
    }
  };

  const filter = function*(flow, condition) {
    for (const data of flow) {
      console.log("filter\t", data);
      if (condition(data)) {
        yield data;
      }
    }
  };

  const stop = function*(flow, condition) {
    for (const data of flow) {
      yield data;
      if (condition(data)) {
        break;
      }
    }
  };

  const take = function(flow, number) {
    let count = 0;
    const _filter = function(data) {
      count++;
      return count >= number;
    };
    return stop(flow, _filter);
  };

  class _Lazy {
    constructor() {
      this.iterator = null;
    }

    range(...args) {
      this.iterator = range(...args);
      return this;
    }

    map(...args) {
      this.iterator = map(this.iterator, ...args);
      return this;
    }

    filter(...args) {
      this.iterator = filter(this.iterator, ...args);
      return this;
    }

    take(...args) {
      this.iterator = take(this.iterator, ...args);
      return this;
    }

    [Symbol.iterator]() {
      return this.iterator;
    }
  }

  function lazy() {
    return new _Lazy();
  }

  const nums = lazy()
    .range(0, 10)
    .map(n => n * 10);
  // .filter(n => n % 3 === 0)
  // .take(2);

  for (let n of nums) {
    console.log("num:\t", n, "\n");
  }

  /**
   * 编写函数 getNumberStr(1,false,'2','b',3,4,'a')=>'1,2,3'
   */
  function getNumberStr(...args) {
    let arr = [];
    for (const item of args) {
      if (Number(item) <= 3 && Number(item) > 0) {
        arr.push(String(item));
      }
    }
    console.log(arr.join(","));
  }
  getNumberStr(1, false, "2", "b", 3, 4, "a");
}

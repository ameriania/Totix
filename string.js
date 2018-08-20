export default function() {
  /**
   * 写一个字符串转换成驼峰的方法？
   * 例子:border-bottom-color -> borderBottomColor
   */
  let toCamel = str => {
    return str.split("-").reduce((prev, cur) => {
      return prev + cur.charAt(0).toUpperCase() + cur.substring(1);
    });
  };

  var camel = toCamel("border-bottom-color");
  console.log(camel);

  /**
   * 查找字符串中出现最多的字符和个数？
   * abbcccddddd -> 字符最多的是d，出现了5次
   */
  let countLetter = str => {
    return str.split("").reduce((all, name) => {
      all[name] ? all[name]++ : (all[name] = 1);
      return all;
    }, {});
  };

  let obj = countLetter("safksaflsajfsdjlfjsdlfjsd");
  let char,
    num = 0;

  for (let item in obj) {
    if (num < obj[item]) {
      num = obj[item];
      char = item;
    }
  }
  console.log(char, num);

  /**
   * 如何给字符串加千分符？
   * 42342342342 -> 42,342,342,342
   */
  let toMoney = str => {
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

  let money = toMoney("42342342342");
  console.log(money);
}

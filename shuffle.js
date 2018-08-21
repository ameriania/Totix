// 洗牌算法，传入一个数组，随机乱序排列,不污染原数组
export default function() {
  let shuffle = arr => {
    var newArr = arr.slice(0);
    for (var i = newArr.length - 1; i >= 0; i--) {
      // 随机范围[0,1)
      var randomIndex = Math.floor(Math.random() * (i + 1));
      console.log(randomIndex);
      var itemAtIndex = newArr[randomIndex];
      newArr[randomIndex] = newArr[i];
      newArr[i] = itemAtIndex;
    }

    return newArr;
  };

  console.log(shuffle([0, 1, 2, 3, 4, 5]));
}

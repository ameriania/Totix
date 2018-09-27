
/**
 * 大数相加
 * @param {string} a 
 * @param {string} b 
 */
export function addBigNum(a, b) {
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
/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    // x + 1 숫자가 몇개 있는지 확인 하는 문제

    const dic = new Map()
    for(const num of arr){
        dic.set(num,num)
    }

    let ans = 0
    for(const num of arr){
        if(dic.has(num + 1)) ans++
    }

    return ans
};
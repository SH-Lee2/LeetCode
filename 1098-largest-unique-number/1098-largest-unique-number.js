/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function(nums) {
    // nums 배열에서 딱 한개만 있는 숫자 중 가장 큰 숫자 리턴
    const dic = new Map()

    for(const num of nums){
        dic.set(num, (dic.get(num)||0)+1)
    }

    let ans = 0 

    for(const [key,value] of dic.entries()){
        if(value === 1) ans = Math.max(ans,key)
    }

    return ans === 0 ? -1 : ans
};
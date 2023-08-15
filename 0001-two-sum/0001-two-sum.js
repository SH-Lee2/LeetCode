/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const dic = new Map()

    for(let i=0; i<nums.length; i++){
        const num = nums[i]
        const complement = target - num

        // 7 2 -2 -6 
        // 만약 complement와 동일한 key를 가지고 있다면 조건에 일치 
        if(dic.has(complement)){
            return [dic.get(complement), i]
        }

        dic.set(num, i)
    }

    return [-1,-1]
};
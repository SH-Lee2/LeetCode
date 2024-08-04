/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let sum=0, minSize=nums.length, len=nums.length, left=0

    for(let right=0; right<len; right++){
        sum += nums[right]

        while(sum >= target){
            minSize = Math.min(minSize, right - left + 1)
            sum -= nums[left++]
        }
    }

    return left === 0 ? 0 : minSize
};
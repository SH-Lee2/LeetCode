/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
   const sum = nums.reduce((arr,cur) => arr+cur, 0)
   const total = sum - x 
    if(total === 0) return nums.length
    if(total < 0) return -1 
    
    let start = 0 , runningSum = 0 , maxLen = -Infinity
    
    for(let i=0; i<nums.length; i++){
        runningSum += nums[i]
        while(runningSum > total) runningSum -= nums[start++]
        if(runningSum === total) maxLen = Math.max(maxLen, i - start+1)
    }
    return maxLen === -Infinity ? -1 : nums.length - maxLen
};

 
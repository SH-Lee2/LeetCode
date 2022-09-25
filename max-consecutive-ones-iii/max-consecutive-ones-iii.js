/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0
    let right=0
    for(; right<nums.length; right++){
        k -= 1 - nums[right]
        if(k<0) k +=1 - nums[left++]
    }
    return right - left
    
};
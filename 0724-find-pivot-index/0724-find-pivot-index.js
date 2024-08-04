/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let ans = -1 // init pivot index
    let right = 0 , left = 0  

    for(let i=1;i<nums.length; i++) right += nums[i]

    for(let i=0; i<nums.length-1; i++){
        if(left === right) return i
        left += nums[i]
        right -= nums[i+1]
    }

    return ans
};
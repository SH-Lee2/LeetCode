/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let idx = 0 
    for(let i=0; i<nums.length; i++){
        if(nums[i] === 0){
            [nums[i],nums[idx]] = [nums[idx],nums[i]]
            idx++
        }
    }
    
    for(let i=0; i<nums.length; i++){
        if(nums[i] === 1){
            [nums[i],nums[idx]] = [nums[idx],nums[i]]
            idx++
        }
    }
};
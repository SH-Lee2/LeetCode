/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if(nums.length === 0) return [-1,-1]
    let left = -1, right = -1
    
    for(let i=0; i<nums.length; i++){
        if(nums[i] === target){
            left = i
            break
        }
    }
    
     for(let i=nums.length-1; i>=left; i--){
        if(nums[i] === target){
            right = i
            break
        }
    }
    
    return [left, right]
    
    
};
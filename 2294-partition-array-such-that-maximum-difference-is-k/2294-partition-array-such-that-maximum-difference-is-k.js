/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function(nums, k) {
    nums.sort((a,b)=>b-a)
    let maxNum =  nums[0]
    let count = 1 
    for(let i=1; i<nums.length; i++){
        if(maxNum - nums[i] > k){
            count++
            maxNum  = nums[i]
        }
    }
    return count
};
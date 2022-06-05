/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function(nums, k) {
    nums.sort((a,b)=>b-a)
    let cal = nums[0]
    let maxNum = minNum = nums[0]
    
    let count = 1 
    for(let i=1; i<nums.length; i++){
        // if(Math.max(...tmp) - Math.min(...tmp) > k) {
        //     count++
        //     tmp = [nums[i]]
        // }
        if(maxNum < nums[i]){
            maxNum = nums[i]
        }
        if(minNum > nums[i]){
            minNum = nums[i]
        }
        if(maxNum - minNum > k){
            count++
            maxNum = minNum = nums[i]
        }
    }
    return count
};
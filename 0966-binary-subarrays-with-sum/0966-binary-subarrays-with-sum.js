/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
   let totalSubarray = 0;

    for(let i=0; i<nums.length; i++){
        let sum = 0;
        for(let j=i; j < nums.length; j++){
            sum += nums[j]
            if(sum === goal) totalSubarray++
            if(sum > goal) break
        }
    }

    return totalSubarray
};
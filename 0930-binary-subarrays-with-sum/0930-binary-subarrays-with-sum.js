/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
     let ans = 0 
     const len = nums.length
     for(let i=0; i<len; i++){
         let sum = 0
         for(let j=i; j<len; j++){
             sum+= nums[j]
             if(sum === goal) ans++
             if(sum > goal) break
         }
     }
    
    return ans
};
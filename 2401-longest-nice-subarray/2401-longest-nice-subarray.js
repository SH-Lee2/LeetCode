/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function(nums) {
    let max = 1
    for(let i=0; i<nums.length; i++){
        let cur = nums[i]
        for(let j=i+1; j<nums.length && (cur & nums[j]) === 0; j++){
            cur |= nums[j]
           
        max = Math.max(max, j-i + 1)
        }
    }
    return max
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length===1) return nums[0]
    
    const len = nums.length
    const dp = new Array(len).fill(0)
    
    dp[0] = nums[0]
    dp[1] = Math.max(dp[0],nums[1])
    
    for(let i=2; i<len; i++){
        dp[i] = Math.max(dp[i-1], nums[i] + dp[i-2])
    }
    
    return dp[len-1]
};
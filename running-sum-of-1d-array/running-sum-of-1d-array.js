/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    // prefix sum 
    // 이전값들을 계속 더해준다.
    
    const sum = [] 
    
    for(let i=0; i<nums.length; i++){
        if(i===0) sum.push(nums[i])
        else sum.push(nums[i] + sum[i-1])
    }
    
    return sum
};
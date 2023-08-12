/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    const prefix = [nums[0]]
    
    // prefix 구하기 
    for(let i=1; i<nums.length; i++){
        prefix.push(nums[i] + prefix[i-1])
    }
    
    let ans = 0 
    for(let i=0; i<nums.length-1; i++){
        const left = prefix[i]
        const right = prefix[nums.length - 1] - left
        if(left >= right) ans++
    }
    
    return ans
};  
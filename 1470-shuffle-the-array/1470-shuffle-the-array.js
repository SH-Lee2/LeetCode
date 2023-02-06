/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let left = 0 
    let right = n
    
    const ans = []
    
    for(let i=left; i<n;i++){
        ans.push(nums[left++])
        ans.push(nums[right++])
    }
    
    return ans
};
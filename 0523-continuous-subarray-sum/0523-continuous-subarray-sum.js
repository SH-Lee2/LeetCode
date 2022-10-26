/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    let len = nums.length
    if(len < 2) return false 
    
    let sum = 0 
    const map = new Map()
    map.set(sum, 0)
    
    for(let i=0; i<len; i++){
        sum += nums[i]
        const res = sum % k 
        
        if(!map.has(res)) map.set(res, i+1)
        
        if(map.has(res) && map.get(res) < i) return true
    }
    
    return false 
};
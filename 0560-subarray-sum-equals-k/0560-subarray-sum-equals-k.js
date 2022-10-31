/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const map = new Map()
    
    map.set(0,1) 
    let curr = 0 
    let ans = 0
    
    for(const num of nums){
        curr += num
        ans += (map.get(curr-k) || 0)
        map.set(curr, (map.get(curr)|| 0) + 1)
    }
    
    return ans
};
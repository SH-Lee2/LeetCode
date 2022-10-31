/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let ans = 0 
    let curr = 0 
    
    const map = new Map()
    map.set(0,1)
    
    for(const num of nums){
        curr += num % 2 // 홀수만 더하기
        ans += (map.get(curr-k)||0)
        map.set(curr, (map.get(curr)|| 0)+1)
    }
    
    return ans
};
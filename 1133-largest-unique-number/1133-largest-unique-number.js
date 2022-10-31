/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function(nums) {
    const map = new Map()
    
    for(const num of nums) map.set(num, (map.get(num) || 0)+1)
    
    let res = -1
    
    for(const [key, value] of map){
        if(value === 1) res = Math.max(res, key)
    }
    
    return res
};
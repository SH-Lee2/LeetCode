/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    const map = new Map()
    nums.forEach(num => map.set(num, (map.get(num)||0)+1))
    
    let ans = 0
    for(const [key, value] of map){
        if(value === 1) ans+= key
    }
    return ans
};
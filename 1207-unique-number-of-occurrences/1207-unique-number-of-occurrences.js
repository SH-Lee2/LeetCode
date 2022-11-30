/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = new Map()
    
    arr.forEach(num=>map.set(num, (map.get(num)||0)+1))
    
    const values = new Set(map.values())
    
    return map.size === values.size
};
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = new Map()
    arr.forEach(num => map.set(num, (map.get(num)||0)+1))
    
    const values = [...map.values()]
    return new Set(values).size === values.length
};
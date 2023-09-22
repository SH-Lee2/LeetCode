/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = new Map()
    

    arr.forEach(num => {
        if(map.has(num)) map.set(num, (map.get(num)+1))
        else map.set(num, 1)
    })

    const keys = [...map.values()]
    return keys.length === new Set(keys).size
};
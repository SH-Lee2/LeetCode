/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    const map = new Map()
    let count = 0
   
    nums.forEach(num => {
        if(map.has(num)) {
            count += map.get(num)
            map.set(num, map.get(num)+1)
        }
        else map.set(num,1)
    })

    return count
};
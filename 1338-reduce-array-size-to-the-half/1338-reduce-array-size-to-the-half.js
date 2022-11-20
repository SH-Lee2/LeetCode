/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    const map = new Map()
    let len = arr.length
    const half = len / 2 
    arr.forEach(num => map.set(num, (map.get(num) || 0) + 1))
    
    let ans = 0
    const values = []
    for(const value of map.values()) values.push(value)
    values.sort((a,b)=>b-a)
    
    for(const value of values){
        len -= value 
        ans++
        if(len <= half) return ans
    }
};
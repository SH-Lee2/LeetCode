/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let ans = -1
    const map = new Map()
    
    arr.forEach(num => map.set(num, (map.get(num)||0)+1))
    
    for(let i=0; i<arr.length; i++){
        if(map.get(i+1) === i+1) ans = Math.max(ans, i+1)
    }
    
    return ans
};
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const map = new Map()

    arr.forEach(num=>{
        if(map.has(num)) map.set(num, (map.get(num) + 1 ))
        else map.set(num, 1)
    })

    let luckyNumber = []
    console.log(map)
    for(const [key, value] of map){
        if(key === value) luckyNumber.push(key)
    }

    return luckyNumber.length > 0 ? Math.max(...luckyNumber) : -1
};
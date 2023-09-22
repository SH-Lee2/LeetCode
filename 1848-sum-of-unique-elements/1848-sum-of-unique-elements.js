/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    const map = new Map()
    let total = nums.reduce((a,b)=>a+b,0)

    nums.forEach((num)=>{
        if(map.has(num)) map.set(num, map.get(num)+1)
        else map.set(num, 1)
    })

    for(const [key,value] of map){
        if(value > 1) total -= key*value
    }

    return total
};
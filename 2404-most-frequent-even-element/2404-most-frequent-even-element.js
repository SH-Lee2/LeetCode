/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    nums.sort((a,b)=>a-b)
    const map = new Map()
    for(const num of nums){
        if(num % 2 === 0) {
            if(map.has(num)){
                map.set(num, map.get(num)+1)
            }else{
                map.set(num, 1)
            }
        }
    }
    if(map.size === 0) return -1
    
    let result = [0,0]
    
    for(const [key,value] of map){
        if(value > result[1]) result = [key, value]
    }
    return result[0]
};


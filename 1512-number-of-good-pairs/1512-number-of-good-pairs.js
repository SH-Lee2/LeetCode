/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    const map = new Map()
    
    nums.forEach(num => {
        if(!map.has(num)) map.set(num,[])
        map.get(num).push(num)
    })
    
    let ans = 0
    
    for(const values of map.values()){
        if(values.length < 2) continue
        for(let i=0; i<values.length; i++){
            for(let j=i+1; j<values.length; j++){
                ans++
            }
        }
    }
    
    return ans
};
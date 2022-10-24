/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    let answer = 0
    const table = new Set()
    
    for(const value of arr){
        table.add(value)
    }
    
    for(const value of arr){
        const condition1 = table.has(value)
        const condition2 = table.has(value + 1)
        
        if(condition1 && condition2) answer++
    }
    
    return answer
};
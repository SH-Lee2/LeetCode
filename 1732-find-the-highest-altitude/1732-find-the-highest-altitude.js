/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let max = 0 //시작 고도 0
    let sum = 0 

    for(const g of gain) {
        sum += g

        max = Math.max(max, sum)
    }
    
    return max
};
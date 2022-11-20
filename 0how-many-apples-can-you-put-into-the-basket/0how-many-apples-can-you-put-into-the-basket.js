/**
 * @param {number[]} weight
 * @return {number}
 */
var maxNumberOfApples = function(weight) {
    let max = 5000 
    
    weight.sort((a,b)=> a-b)
    
    let count = 0
    for(;count<weight.length; count++){
        max -= weight[count]
        if(max >= 0) continue
        else return count
    }
    
    return count
};
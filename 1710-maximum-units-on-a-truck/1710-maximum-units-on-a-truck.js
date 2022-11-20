/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a,b)=> b[1]-a[1])
    let ans = 0
    
    for(const [count, amount] of boxTypes){
        truckSize -= count 
        if(truckSize >= 0) {
            ans += count * amount
        }
        else{
            ans += (count + truckSize) * amount
            return ans
        }
    }
    
    return ans
};
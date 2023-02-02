/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    costs.sort((a,b)=>a-b)
    let ans = 0
    
    if(costs[0] > coins) return 0 
    
    for(const cost of costs){
        coins -= cost 
        if(coins >= 0) ans++
        else return ans
    }
    
    return ans
};
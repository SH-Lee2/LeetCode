/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = 99999
    let maxProfit = 0
    for(const price of prices){
        min = Math.min(min, price)
        maxProfit = Math.max(maxProfit, price - min)
    }
    return maxProfit
};
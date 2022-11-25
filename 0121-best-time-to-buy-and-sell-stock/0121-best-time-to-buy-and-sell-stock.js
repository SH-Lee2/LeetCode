/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = Number.MAX_SAFE_INTEGER
    let maxProfit = 0
    for(const price of prices){
        min = Math.min(min, price)
        maxProfit = Math.max(maxProfit, price - min)
    }
    return maxProfit
};
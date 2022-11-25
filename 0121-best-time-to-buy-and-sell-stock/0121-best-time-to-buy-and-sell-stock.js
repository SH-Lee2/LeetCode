/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   let left = 0;
  let right = 0;
  let max_profit = 0;
  while(right < prices.length) {
    if(prices[left] < prices[right]) {
      let current_profit = prices[right] - prices[left];
      max_profit = max_profit > current_profit ? max_profit : current_profit;
    } else {
      left = right;
    }
    right++;
  }
  return max_profit; 
};
/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function(cards) {
    let dic = new Map();
    for (let i = 0; i < cards.length; i++) {
        if (!dic.has(cards[i])) {
            dic.set(cards[i], []);
        }
        dic.get(cards[i]).push(i);
    }
    
    let ans = Infinity;
    for (const [key, arr] of dic) {
        for (let i = 0; i < arr.length - 1; i++) {
            ans = Math.min(ans, arr[i + 1] - arr[i] + 1);
        }
    }
    
    return ans == Infinity ? -1 : ans;
};
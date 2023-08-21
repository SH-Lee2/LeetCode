/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const dic = new Map()
    
    for(const stone of stones){
        dic.set(stone, (dic.get(stone)||0)+1)
    }

    let ans = 0

    for(const jewel of jewels){
        ans += dic.get(jewel) || 0
    }

    return ans
};
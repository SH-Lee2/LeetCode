/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
  const len = s.length

  let maxLen = 0, start = 0, currCost = 0

  for(i=0; i<len; i++){
    currCost += Math.abs(s.charCodeAt(i) - t.charCodeAt(i))

    while(currCost > maxCost){
        currCost -= Math.abs(s.charCodeAt(start)-t.charCodeAt(start))
        start++
    }

    maxLen = Math.max(maxLen, i - start + 1)
  }

  return maxLen
};

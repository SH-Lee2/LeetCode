/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const map = new Map()
    let left = 0 
    let ans = 0 
    
    for(let i=0; i<s.length; i++){
        if(map.has(s[i])){
            left = Math.max(map.get(s[i]), left)
        }
        ans = Math.max(ans, i + 1 - left)
        map.set(s[i], i+1)
    }
    
    return ans
};
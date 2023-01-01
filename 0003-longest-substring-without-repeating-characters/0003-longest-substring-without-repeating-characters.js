/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const map = new Map()
    let ans = 0 //aab
    let left = 0

    for(let i=1; i<=s.length; i++){
        const char = s[i-1]
        if(map.has(char)){
            left = Math.max(map.get(char), left)
        }
        ans = Math.max(ans, i - left) //0
        map.set(char, i)
    }
    
    return ans
};
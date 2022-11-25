/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0 
    let ans = 0
    const map = new Map()
    let i = 0 
    for(; i<s.length; i++){
        const char = s[i]

        if(map.has(char)){
            const prePos = map.get(char)
            left = Math.max(left, prePos)
        }
        ans = Math.max(ans, i+1 - left)
        map.set(char,i+1)
    }
    return ans
};
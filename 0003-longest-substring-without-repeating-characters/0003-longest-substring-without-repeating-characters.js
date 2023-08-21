/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const dic = new Map() 
    let ans = 0, left = 0

    for(let i=0; i<s.length; i++){
        const char = s[i] 

        if(dic.has(char)){
            left = Math.max(dic.get(char), left)
        }
        ans = Math.max(ans, i - left  + 1)
        dic.set(char, i+1)
    }

    return ans
};
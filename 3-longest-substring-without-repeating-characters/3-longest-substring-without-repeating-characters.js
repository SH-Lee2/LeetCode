/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let position = 0;
    let maxLength = 0;
    const charMap = new Map();
    
    
    for (let i = 0; i < s.length; i++) {
        if (!charMap.has(s[i])) {
           position += 1
        } else {
            position = Math.min(i - charMap.get(s[i]), position + 1)

        }
                                
        maxLength = Math.max(maxLength, position)
        charMap.set(s[i], i)
    }
        
    return maxLength
};
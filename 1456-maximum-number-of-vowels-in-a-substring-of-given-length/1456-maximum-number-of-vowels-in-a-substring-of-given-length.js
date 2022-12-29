/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let left = 0, ans = 0, curr = 0;
    const vowel = new Set(['a', 'e', 'i', 'o', 'u'])
    
    for (let right = 0; right < s.length; right++) {
        if(vowel.has(s[right])) curr++
        while (right + 1 - left > k) {
            if(vowel.has(s[left])) curr--
            left++;
        }
        ans = Math.max(ans, curr)
    }

    return ans;
};
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let curr = 0

    // 모음 
    const vowels = new Set(['a', 'e','i','o','u'])
    

    for(let i=0; i<k; i++){
        if(vowels.has(s[i])) curr++
    }

    let ans = curr 

    for(let right=k; right<s.length; right++){
        if(vowels.has(s[right])) curr++
        if(vowels.has(s[right - k])) curr--

        ans = Math.max(ans, curr)
    }

    return ans
};
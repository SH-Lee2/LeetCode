/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const vowels = new Set(['a','e','i','o','u'])
    s = s.toLowerCase()
    
    let left = 0 
    let right = s.length-1
    
    let leftVowels = 0 
    let rightVowels = 0
    while(left<=right){
        if(vowels.has(s[left])) leftVowels++
        if(vowels.has(s[right])) rightVowels++
        left++
        right--
    }
    
    return leftVowels === rightVowels
};
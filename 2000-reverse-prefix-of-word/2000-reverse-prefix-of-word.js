/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let left = 0, right = word.indexOf(ch)
    if(right === -1) return word
    
    word = word.split('')
    while(left < right){
        [word[left],word[right]] = [word[right],word[left]]
        left++
        right--
    }
    
    return word.join('')
};
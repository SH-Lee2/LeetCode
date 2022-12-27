/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').map(word => {
        word = word.split('')
        let left = 0 
        let right = word.length-1
        while(left <right){
            [word[left],word[right]] = [word[right],word[left]]
            left++
            right--
        }
        return word.join('')
    }).join(' ')
        
};
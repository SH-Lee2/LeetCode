/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let left = 0, right = findEndIndex(word, ch)

    if(findEndIndex === -1) return word

    word = word.split('')
    while(left <= right){
        [word[left], word[right]] = [word[right],word[left]]

        left++
        right--
    }

    return word.join('')
};  

function findEndIndex (word, ch) {
    let end = -1

    for(let i=0; i<word.length; i++){
        if(word[i] === ch) return i
    }

    return end
}
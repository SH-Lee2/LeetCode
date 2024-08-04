/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    const existIdx = word.indexOf(ch)

    if(existIdx === -1) return word

    let left=0, right = existIdx 
    const wordArray = word.split("")
    while(left<right){
        [wordArray[left],wordArray[right]] = [wordArray[right],wordArray[left]]
        left++
        right--
    }

    return wordArray.join('')
}
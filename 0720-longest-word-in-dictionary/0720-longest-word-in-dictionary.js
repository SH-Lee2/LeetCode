/**
 * @param {string[]} words
 * @return {string}
 */

var longestWord = function(words) {
    words.sort()
    
    const wordList = new Set(words)
    let res = ''
    
    for(const word of words){
        let key = '' 
        let isValid = true
        
        for(const char of word){
            key += char
            if(!wordList.has(key)){
                isValid = false 
                break
            }
        }
        
        if(isValid && key.length > res.length) res = key 
    }
    
    return res
};
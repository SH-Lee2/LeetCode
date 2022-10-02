/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const set = new Set()
    
    for(const word of sentence){
        set.add(word)
    }
    
    return set.size === 26
};
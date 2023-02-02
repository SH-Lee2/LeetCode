/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    const dic = new Map([["",-1]])
    
    for(let i=0; i<order.length; i++){
        dic.set(order[i], i+1)
    }
    
    for(let i=1; i<words.length; i++){
        const a = words[i-1], b = words[i] 
        for(let j=0; j<a.length; j++){
            const aChar = a.charAt(j), bChar = b.charAt(j)
            if(dic.get(aChar) < dic.get(bChar)) break
            if(dic.get(aChar) > dic.get(bChar)) return false
        }
    }
        
    return true
};

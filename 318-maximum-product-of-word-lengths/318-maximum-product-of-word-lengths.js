/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    let count = 0
    for(let i=0; i<words.length; i++){
        const a = words[i]
        for(let j=words.length-1; j>i; j--){
            // if(i===j) continue
            const b = words[j]
            if(checkUnique(a,b)){
                count = Math.max(count, a.length * b.length)
            }
        }
    }
    return count 
};

function checkUnique (a,b){
    for(const char of a){
        if(b.includes(char)) return false
    }
    return true
}

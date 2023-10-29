/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [] 
    const matching = {
        "(": ")",
        "[": "]",
        "{": "}"
    }

    for(const char of s){
        // open tag
        if(char in matching){
            stack.push(char)
        }else{
            if(stack.length === 0) return false
            const preOpening = stack.pop()
            
            if(char !== matching[preOpening]) return false
        }
    }

    return !stack.length
};
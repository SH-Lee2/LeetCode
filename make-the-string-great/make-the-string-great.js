/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    const stack = [] 
    
    for(let i=0; i<s.length; i++){
        const curWord = s[i] === s[i].toUpperCase() ? s[i].toLowerCase() : s[i].toUpperCase()
        if(stack[stack.length-1] === curWord) {
            stack.pop()
        }
        else stack.push(s[i])
    }
    
    return stack.join('')
};
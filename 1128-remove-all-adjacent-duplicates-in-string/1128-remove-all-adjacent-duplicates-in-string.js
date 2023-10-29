/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const stack = [] 

    for(const c of s){
        if(stack.length === 0){
            stack.push(c)
            continue
        }

        const preChar = stack[stack.length-1]

        if(preChar === c){
            stack.pop()
        }else{
            stack.push(c)
        }
    }

    return stack.join('')
};
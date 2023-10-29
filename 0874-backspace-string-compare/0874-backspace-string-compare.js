/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const build = (s) => {
        const stack = [] 
        
        for(const c of s){
            if(c==='#') stack.pop()
            else stack.push(c)
        }
        console.log(stack)
        return stack.join('')
    }

    return build(s) === build(t)
};
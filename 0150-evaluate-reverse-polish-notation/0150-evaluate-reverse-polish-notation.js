/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [] 
    for(const token of tokens) {
        if(isNaN(token)){
            const right = +stack.pop()
            const left = +stack.pop()
            switch(token){
                case "+" : 
                    stack.push(left + right)
                    break;
                case "-" :
                    stack.push(left - right)
                    break;
                case "*":
                    stack.push(left * right)
                    break;
                default:
                    stack.push(parseInt(left / right))
                    break;
            }
        }
        else{
            stack.push(token)
        }
    }
    
    return stack.pop()
};
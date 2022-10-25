/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    const stack = [] 
    const len = pushed.length
    
    let right = 0 
    
    for(const value of pushed){
        stack.push(value)
        while(stack && right < len && stack[stack.length-1] === popped[right]){
            stack.pop()
            right++
        }
    }
    
    return right === len
};
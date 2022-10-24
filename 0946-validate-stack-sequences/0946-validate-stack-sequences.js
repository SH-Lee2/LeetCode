/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    const stack = [] 
    const len = pushed.length
    
    let idx = 0 
    
    for(const val of pushed){
        stack.push(val)
        while(stack && idx < len && stack[stack.length-1] === popped[idx]){
            stack.pop()
            idx++
        }
    }
    
    return idx === len    
};
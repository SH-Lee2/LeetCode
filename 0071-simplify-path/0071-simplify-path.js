/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const stack = [] 
    
    for(const portion of path.split('/')){
        if(portion === '.' || portion === '') continue
        if(portion === '..') stack.pop()
        else stack.push(portion)
    }
    
    return '/' + stack.join('/')
};
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
   const stack = [] 
   
   for(const portion of path.split('/')){
       if(portion === ".." && stack){
            stack.pop()
       }
       else if(portion === "." || portion === '') {
           continue
       }
       else stack.push(portion)
   }

    return '/' + stack.join('/')
};
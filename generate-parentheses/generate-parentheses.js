/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const backtrack = (l,r,str) => {
        if(str.length=== n * 2){
            ans.push(str)
            return
        }
        if (l < n) backtrack(l + 1, r, str + '(');
        if (r < l) backtrack(l, r + 1, str + ')');
    }
    
    const ans = [] 
    backtrack(0,0,'')
    
    return ans
};
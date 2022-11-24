/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function(n, k) {
    const backtrack = (path) => {
        if(path.length > 1 && Math.abs(path[path.length-1] - path[path.length-2]) !== k) return 
        if(path.length === n ){
            ans.push(+path.join(''))
            return
        }
        for(let i=0; i<=9; i++){
            if(i===0 && path.length === 0) continue
            path.push(i)
            backtrack(path)
            path.pop()
        }
    }
    
    const ans = [] 
    backtrack([])
    
    return ans
};
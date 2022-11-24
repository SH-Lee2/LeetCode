/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function(n, k) {
    const backtrack = (curr) => {
        if(curr.length > 1 && Math.abs(curr[curr.length-1] - curr[curr.length-2]) !== k) return 
        if(curr.length === n ){
            ans.push(+curr.join(''))
            return
        }
        for(let i=0; i<=9; i++){
            if(i===0 && curr.length === 0) continue
            curr.push(i)
            backtrack(curr)
            curr.pop()
        }
    }
    
    const ans = [] 
    backtrack([])
    
    return ans
};
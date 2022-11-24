/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function(n, k) {
    const backtrack = (curr) => {
        if(curr.length === n){
            ans.push(+curr.join(''))
            return
        }
        for(let i=0; i<=9; i++){
            if(Math.abs(curr[curr.length-1] - i) === k){
                curr.push(i)
                backtrack(curr)
                curr.pop()
            }
        }
    }
    
    const ans = [] 
    for(let i=1; i<=9; i++){
        backtrack([i])
    }
    
    return ans
};
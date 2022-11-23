/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const backtrack = (curr,i) => {
        if(curr.length === k){
            ans.push([...curr])
            return
        }
        for(let j=i; j<=n; j++){
                curr.push(j)
                backtrack(curr,j+1)
                curr.pop()
        }
        
    }
    
    const ans = [] 
    backtrack([],1)
    
    return ans
};
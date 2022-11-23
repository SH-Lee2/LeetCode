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
            if(!curr.includes(j)){
                curr.push(j)
                backtrack(curr,j)
                curr.pop()
            }
        }
        
    }
    
    const ans = [] 
    backtrack([],1)
    
    return ans
};
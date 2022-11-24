/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const backtrack = (path, sum, start) => {
        if(sum === n && path.length < k) return 
        if(sum === n && path.length === k){
            ans.push([...path])
            return
        }
        for(let i=start; i<=9; i++){
            if(sum + i > n) continue
            path.push(i)
            backtrack(path, sum+i, i+1)
            path.pop()
        }
    }
    
    const ans = [] 
    backtrack([],0,1)
    
    return ans
};
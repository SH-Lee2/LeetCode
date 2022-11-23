/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const backtrack = (curr,total,start) => {
        if(total === target){
            ans.push([...curr])
            return
        }
        for(let i=start; i<candidates.length; i++){
            const candidate = candidates[i]
            if(total + candidate > target) continue
            curr.push(candidate)
            backtrack(curr, total + candidate, i)
            curr.pop()
        }
        
    }
    
    const ans = [] 
    backtrack([],0,0)
    
    return ans 
};
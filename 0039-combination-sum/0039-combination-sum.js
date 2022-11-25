/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const backtrack = (curr,total,start) => {
     if(total === target){
         ans.push([...curr])
     }
        for(let i=start; i<candidates.length; i++){
            if(total+candidates[i] > target) continue
            curr.push(candidates[i])
            backtrack(curr,total+candidates[i],i)
            curr.pop()
        }
    }
    
    const ans = [] 
    backtrack([],0,0)
    
    return ans 
};
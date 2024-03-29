/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const ans = []
    
    const backtrack = (curr) => {
        if(curr.length === nums.length){
            ans.push([...curr])
            return
        }
        
        for(const num of nums){
            if(!curr.includes(num)){
                curr.push(num)
                backtrack(curr)
                curr.pop()
            }
        }
    }
    
    backtrack([])
    return ans
};
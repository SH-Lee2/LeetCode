/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    const ans = [] 
    nums.sort((a,b)=>a-b)
    for(let i=1; i<nums.length; i++){
        nums[i] += nums[i-1]
    }
    
    const bs = (target) => {
        let left = 0, right = nums.length - 1
        
        while(left <= right) {
            const mid = Math.floor((left+right)/2)
            
            if(nums[mid] === target) return mid + 1
            if(nums[mid] < target) left = mid + 1
            else right = mid - 1
        }
        
        return left
    }
    
    for(const target of queries){
        ans.push(bs(target))
    }
    return ans
};
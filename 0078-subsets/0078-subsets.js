/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
       let backtrack = (curr, i) => {
        if (i > nums.length) {
            return;
        }
        
        ans.push([...curr]);
        for (let j = i; j < nums.length; j++) {
            curr.push(nums[j]);
            backtrack(curr, j + 1);
            curr.pop();
        }
    }
    
    let ans = [];
    backtrack([], 0);
    return ans;
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

 /** 배열 nums에서 연속되는 1의 최대 개수 구하는 문제, k는 0을 1로 뒤집을 수 있는 횟수*/
var longestOnes = function(nums, k) {
    let start=0, sum=0, ans=0

    for(let end=0; end<nums.length; end++){
        if(nums[end] === 0) sum++
        
        while(sum > k){
            if(nums[start] === 0) sum -= 1
           
            start++
        }

         ans = Math.max(ans, end-start+1)
    }
    
    return ans
};
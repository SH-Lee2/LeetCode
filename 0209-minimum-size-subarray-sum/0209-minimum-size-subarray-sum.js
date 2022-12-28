/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0, ans = 0, sum = 0;

    for (let right = 0; right < nums.length; right++) {
        sum+= nums[right]
        while (sum >= target) {
            if(ans === 0){
                ans = right+1 - left
            }else{
                ans = Math.min(ans, right+1-left)
            }
            sum -= nums[left++]
        }
    }

    return ans;
};
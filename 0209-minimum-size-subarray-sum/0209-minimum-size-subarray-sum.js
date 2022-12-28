/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0, ans = Infinity, sum = 0;

    for (let right = 0; right < nums.length; right++) {
        sum+= nums[right]
        while (sum >= target) {
            ans = Math.min(ans, right+1-left)
            sum -= nums[left++]
        }
    }

    return ans === Infinity ? 0 : ans;
};
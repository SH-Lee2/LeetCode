/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0, ans = Infinity, curr = 0

    for(let right=0; right<nums.length; right++){
        curr += nums[right]

        while(curr >= target){
            ans = Math.min (ans, right-left+1)
            curr -= nums[left++]
        }
    }

    return ans === Infinity ? 0 : ans
};
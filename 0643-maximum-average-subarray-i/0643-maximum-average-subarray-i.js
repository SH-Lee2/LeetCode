/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let start = 0, sum = 0, res = Number.MIN_SAFE_INTEGER

    for(let end = 0; end<nums.length; end++){
        sum += nums[end]

        if(end >= k-1){
            res = Math.max(res, sum/k)

            sum -= nums[start++]
        }
    }

    return res
};
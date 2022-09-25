/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let res = 0;
    for (let i = 0, j = 0; i < nums.length; i++) {
        if (nums[i] != 0)
            j = i + 1;
         res += i - j + 1;
    }
    return res;
};
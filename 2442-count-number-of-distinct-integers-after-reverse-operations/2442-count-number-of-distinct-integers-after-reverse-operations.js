/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function(nums) {
    nums = nums.concat(nums.map(num=> +num.toString().split('').reverse().join('')))
    return new Set(nums).size
};
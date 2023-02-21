/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let left = 0, right = nums.length - 1;
    while (left < right) {
        let mid = (left + right) >> 1
        if (mid % 2 === 1) mid--; // 중간 지점을 항상 짝수 인덱스로 만듦
        if (nums[mid] === nums[mid + 1]) left = mid + 2; 
        else right = mid-1;
    }
    return nums[left];
};
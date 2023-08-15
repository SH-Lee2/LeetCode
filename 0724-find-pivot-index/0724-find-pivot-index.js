/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    // total 값을 구한다.
    let total = nums.reduce((a,b)=> a+b,0), leftSum = 0 

    // 왼쪽부터 값을 차례대로 제거하고 왼쪽 값을 더한 값과 total 값을 비교한다.
    for(let left=0; left<nums.length; left++){
        if(leftSum === total - leftSum - nums[left]) return left
        leftSum += nums[left]
    }

    return -1
};
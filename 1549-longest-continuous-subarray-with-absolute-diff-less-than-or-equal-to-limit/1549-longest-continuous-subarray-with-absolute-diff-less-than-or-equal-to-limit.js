/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    
    let sizeResult = 0;

    let queueMin = [];
    let queueMax = [];

    for (let left = 0, right = 0; right < nums.length; right++) {

        while (queueMin.length && nums[right] < nums[queueMin[queueMin.length - 1]]) {
            queueMin.pop();
        }
        queueMin.push(right);

        while (queueMax.length && nums[right] > nums[queueMax[queueMax.length - 1]]) {
            queueMax.pop();
        }
        queueMax.push(right);

        if (nums[queueMax[0]] - nums[queueMin[0]] > limit) {
            
            if (queueMin[0] == left) {
                queueMin.shift()
            }

            if (queueMax[0] == left) {
                queueMax.shift()
            }

            left++;
        }

        sizeResult = Math.max(sizeResult, right - left + 1);
    }

    return sizeResult;
};
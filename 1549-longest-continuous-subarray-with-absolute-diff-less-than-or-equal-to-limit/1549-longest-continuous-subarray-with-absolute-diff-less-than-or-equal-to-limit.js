/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    const increaseArr = []
    const decreaseArr = []
    let ans = 0, left = 0 

    for(let right=0; right<nums.length; right++){
        while(increaseArr.length && increaseArr.at(-1) > nums[right]){
            increaseArr.pop()
        }

        while(decreaseArr.length && decreaseArr.at(-1) < nums[right]){
            decreaseArr.pop()
        }

        increaseArr.push(nums[right])
        decreaseArr.push(nums[right])

        while((decreaseArr[0] - increaseArr[0]) > limit){
            if(nums[left] === decreaseArr[0]) decreaseArr.shift()
            if(nums[left] === increaseArr[0]) increaseArr.shift()

            left++
        }

        ans = Math.max(ans, right-left+1)
    }

    return ans
};
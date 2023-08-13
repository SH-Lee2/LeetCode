/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if(nums.length === 1) return nums

    let start = 0, next = 1

    while(next <= nums.length -1){
        // 시작 인덱스의 값이 0이 아닌 경우
        if(nums[start] !== 0){
            start++
            next++
        }else{
            // 시작 인덱스 값이 0이고 다음 인덱스 값이 0이 아닌경우 => 조건에 맞는 경우
            if(nums[next] !== 0){
                [nums[start],nums[next]] = [nums[next], nums[start]]
                start++
            }
            next++
        }

    }
};
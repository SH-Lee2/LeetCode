/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    //  pivotIndex = 왼쪽에 있는 모든 합과 오른쪽에 있는 모든합의 값이 같은것 
    const totalSum = nums.reduce((a,b)=>a+b, 0)
    let prefix = 0 
    for(let i=0; i<nums.length; i++){
        if(prefix === (totalSum - prefix - nums[i])) return i
        prefix += nums[i]
    }
    return -1
};
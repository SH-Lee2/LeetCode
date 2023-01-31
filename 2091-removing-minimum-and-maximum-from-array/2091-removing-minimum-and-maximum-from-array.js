/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function(nums) {
    if(nums.length===1) return 1
    
    const maximumIdx = findMaximumIdx(nums)
    const minimumIdx = findMinimumIdx(nums)
    
    const left = Math.min(maximumIdx, minimumIdx)
    const right = Math.max(maximumIdx, minimumIdx)
    
    // case 1 : 앞에서 부터 삭제
    const case1 = right + 1
    
    // case 2 : 뒤에서 부터 삭제
    const case2 = nums.length - left
    
    // case 3 : 앞 뒤에서 부터 삭제  
    const case3 = (left + 1) + (nums.length - right)
    
    return Math.min(case1, case2, case3)
};

function findMaximumIdx(nums) {
    return nums.indexOf(Math.max(...nums))
}

function findMinimumIdx(nums) {
    return nums.indexOf(Math.min(...nums))
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function(nums) {
    if(nums.length===1) return 1
    
    const [minIdx, maxIdx] = findMinIdxAndMaxId(nums)
    
    const len = nums.length
    const left = Math.min(minIdx, maxIdx)
    const right = Math.max(minIdx, maxIdx)
    
    // case 1 : 앞에서 부터 삭제 right + 1
    // case 2 : 뒤에서 부터 삭제 len - left
    // case 3 : 앞 뒤에서 부터 삭제  (left + 1) + (len - right)
    return Math.min(right + 1, len - left, left + 1 + len - right)
};

function findMinIdxAndMaxId(nums) {
    let minIdx = 0, maxIdx = 0 
    
    for(let i=0; i<nums.length;i++){
        if(nums[i] < nums[minIdx]) minIdx = i
        if(nums[i] > nums[maxIdx]) maxIdx = i
    }
    
    return [minIdx, maxIdx]
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverageDifference = function(nums) {
//     let left = nums[0]
//     let leftIdx = 1
//     let right = 0
//     let rightIdx = nums.length - 1
//     for(let i=1; i<nums.length; i++) right += nums[i]
//     let min = Math.abs(Math.floor(left/ leftIdx) - Math.floor(right/rightIdx)) 
//     let minIdx = 0
//     for(let i=1; i<nums.length; i++){
//         left = (left + nums[i] )
//         right = (right - nums[i])
//         const abs = Math.abs(Math.floor(left / ++leftIdx) - Math.floor(right / --rightIdx))
//         if(min >abs) {
//             min = abs
//             minIdx = i
//         }    
//     }
    
//     return minIdx
    const MAX = Number.MAX_SAFE_INTEGER;
    const n = nums.length;
    
    let totSum = nums.reduce((acc, num) => acc + num, 0);
    
    let leftSum = 0;
    
    let minIdx = -1;
    let minDiff = MAX;
    
    for (let i = 0; i < n; ++i) {
        const currNum = nums[i];
        
        leftSum += currNum;
        totSum -= currNum;
        
        const leftSize = i + 1;
        const rightSize = n - i - 1;
        
        const leftAvg = Math.floor(leftSum / leftSize);
        const rightAvg = rightSize === 0 ? 0 : Math.floor(totSum / rightSize);
        
        const absDiff = Math.abs(leftAvg - rightAvg);
        
        if (absDiff < minDiff) {
            minIdx = i;
            minDiff = absDiff;
        }
    }
    
    return minIdx;
};
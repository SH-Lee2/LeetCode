/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverageDifference = function(nums) {
    const MAX = Number.MAX_SAFE_INTEGER;
    let len = nums.length
    
    let totalSum = nums.reduce((acc, num)=> acc + num, 0)
    let leftSum = 0 
    
    let min = MAX
    let minIdx = -1
    
    for(let i=0; i<len; i++){
        const currentNum = nums[i] 
        
        leftSum += currentNum
        totalSum -= currentNum
        
        const leftSize = i + 1
        const rightSize = len - i - 1
        
        const leftAvg = Math.floor(leftSum / leftSize)
        const rightAvg = rightSize === 0 ? 0 : Math.floor(totalSum / rightSize)
        
        const abs = Math.abs(leftAvg - rightAvg) 
        
        if(min > abs) {
            min = abs 
            minIdx = i
        }
    }
    
    return minIdx
    
    
//     const MAX = Number.MAX_SAFE_INTEGER;
//     const n = nums.length;
    
//     let totSum = nums.reduce((acc, num) => acc + num, 0);
    
//     let leftSum = 0;
    
//     let minIdx = -1;
//     let minDiff = MAX;
    
//     for (let i = 0; i < n; ++i) {
//         const currNum = nums[i];
        
//         leftSum += currNum;
//         totSum -= currNum;
        
//         const leftSize = i + 1;
//         const rightSize = n - i - 1;
        
//         const leftAvg = Math.floor(leftSum / leftSize);
//         const rightAvg = rightSize === 0 ? 0 : Math.floor(totSum / rightSize);
        
//         const absDiff = Math.abs(leftAvg - rightAvg);
        
//         if (absDiff < minDiff) {
//             minIdx = i;
//             minDiff = absDiff;
//         }
//     }
    
//     return minIdx;
};
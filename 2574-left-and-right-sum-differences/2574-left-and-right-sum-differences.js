/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function(nums) {
    if(nums.length === 1) return [0]
    
    const left = [0]
    const right = [0]
    
    for(let i=0; i< nums.length-1; i++){
        left.push(left.at(-1)+nums[i])
    }
    for(let i=nums.length-1; i>0; i--){
        right.push(right.at(-1)+nums[i])
    }
    
    const len = left.length-1
    for(let i=0; i<left.length; i++){
        left[i] = Math.abs(left[i] - right[len - i])
    }
    
    return left
};
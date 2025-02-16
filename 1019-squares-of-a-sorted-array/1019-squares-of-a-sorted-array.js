
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const result = Array.from(({length: nums.length}), ()=> 0)
    
    let start = 0, end = nums.length-1
    
    for(let i = nums.length - 1; i >= 0; i--){
       let square

       if(Math.abs(nums[start]) < Math.abs(nums[end])){
            square = nums[end]
            end--
       }else{
            square = nums[start]
            start++
       }
            result[i] = square * square
    }
    
    return result    
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const result = Array.from({length:nums.length},()=> 0)
    
    let left = 0, right = nums.length-1
    
    for(let i=result.length-1; i>=0; i--){
        let tmp = 0 
        
        if(Math.abs(nums[left]) < Math.abs(nums[right])){
            tmp = nums[right--]
        }else{
            tmp = nums[left++]
        }
        

        result[i] = tmp * tmp
    }
    
    return result
    
};
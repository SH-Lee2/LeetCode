/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  let leftTotal = 0 
  let rightTotal = nums.reduce((a,b)=>a+b,0) - nums[0] 
  if(leftTotal === rightTotal) return 0
  for(let i=1; i<nums.length; i++){
        leftTotal += nums[i-1]
        rightTotal -= nums[i]
        if(leftTotal === rightTotal) return i
  }
    return -1 
};
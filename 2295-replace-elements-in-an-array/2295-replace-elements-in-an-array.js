/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
var arrayChange = function(nums, operations) {
    const list = {}
    for(let i=0; i<nums.length;i++){
        list[nums[i]] = i
    }
   for(let i=0; i<operations.length; i++){
       const idx = list[operations[i][0]] === undefined ?   -1 : list[operations[i][0]]
       if(idx >= 0 ){
           nums[idx] = operations[i][1]
           delete list[operations[i][0]]
           list[operations[i][1]] = idx
       }
   }
   
    return nums
};

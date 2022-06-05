/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
var arrayChange = function(nums, operations) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        map.set(nums[i], i);
    }
    
    let i = 0;
    while(i < operations.length){
        nums[map.get(operations[i][0])]  = operations[i][1]
        map.set(operations[i][1], map.get(operations[i][0]))
        i++;
    }
    
    return nums
};
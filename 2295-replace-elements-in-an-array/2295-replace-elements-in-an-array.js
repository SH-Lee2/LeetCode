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
       // const idx = list[operations[i][0]] === undefined ?   -1 : list[operations[i][0]]
       // if(idx >= 0 ){
           nums[list[operations[i][0]]] = operations[i][1]
           // delete list[operations[i][0]]
           list[operations[i][1]] = list[operations[i][0]]
       // } 
   }
    return nums
};

// /**
//  * @param {number[]} nums
//  * @param {number[][]} operations
//  * @return {number[]}
//  */
// var arrayChange = function(nums, operations) {
//     let map = new Map();
//     for(let i = 0; i < nums.length; i++){
//         map.set(nums[i], i);
//     }
    
//     let i = 0;
//     while(i < operations.length){
//         nums[map.get(operations[i][0])]  = operations[i][1]
//         map.set(operations[i][1], map.get(operations[i][0]))
//         i++;
//     }
    
//     return nums
// };
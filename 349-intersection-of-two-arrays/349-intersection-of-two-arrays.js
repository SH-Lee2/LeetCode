/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const set = new Set()
    const result = []
    
    for(const num1 of nums1){
        set.add(num1)
    }
    
    const setNums2 = new Set(nums2)
    for(const num2 of setNums2){
        if(set.has(num2)) result.push(num2)
    }
    
    return result
};
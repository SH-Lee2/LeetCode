/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const stack = [] 
    const map = new Map()
    
    for(let i=0; i<nums2.length; i++){
        while(stack && nums2[stack[stack.length-1]] < nums2[i]){
            map.set(nums2[stack.pop()], nums2[i])
        }
        
        stack.push(i)
    }
    
    for(let i=0; i<stack.length; i++){
        map.set(nums2[stack[i]], -1)
    }
    
    return nums1.map(v => map.get(v))
};
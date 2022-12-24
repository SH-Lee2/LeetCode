/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    const res = new Map()
    const len = nums1.length 

    for(let i=0; i<len; i++){
        for(let j=0; j<len; j++){
           const key = nums1[i] + nums2[j];
           res.set(key, (res.get(key)||0)+1); 
        }
    }
    
    let total = 0;
    
    for(let i=0; i<len; i++){
        for(let j=0; j<len; j++){
            total += res.get(-1 * (nums3[i]+nums4[j]))|| 0                  
        }
    }
    
    
    return total;
};
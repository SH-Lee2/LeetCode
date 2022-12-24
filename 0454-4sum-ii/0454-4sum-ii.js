/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    const sumTwoList = function(x,y){
        const len = x.length 
        const res = new Map()
        
        for(let i=0; i<len; i++){
            for(let j=0; j<len; j++){
               const key = x[i] + y[j];
               res.set(key, (res.get(key)||0)+1); 
            }
        }
        
        return res
    }
    
    const sum1 = sumTwoList(nums1,nums2); // i + j
    const sum2 = sumTwoList(nums3,nums4); // k + l
    let total = 0;
    
    sum1.forEach((value,key) =>{
        let offset = 0 - key;
        if(sum2.has(offset)){
            total += (sum2.get(offset) * sum1.get(key));
        }
    })
    return total;
};
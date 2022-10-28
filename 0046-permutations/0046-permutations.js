/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const checkNums = Array.from({length:nums.length},()=>false) 
    const ans = [] 
    const tmp=[]
    
    const helper = (len) => {
        if(len === nums.length) {
            ans.push(tmp.slice())
        }else{
            for(let i=0; i<nums.length; i++){
                if(!checkNums[i]){
                    tmp[len] = nums[i]
                    checkNums[i] = true 
                    helper(len+1)
                    checkNums[i] = false
                }
                
            }
        }
    }
    helper(0)
    return ans
};

permute([1,2,3])
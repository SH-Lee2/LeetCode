/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const ans = [] 
    if(nums.length < 3 ) return ans 
    
    nums.sort((a,b)=> a-b)
    
    for(let i=0; i< nums.length-2; i++){
        if(nums[i] > 0) continue
        
        if(i>0 && nums[i] === nums[i-1]) continue
        
        let j = i+1
        let k = nums.length-1
        
        while(j<k){
            const sum = nums[i] + nums[j] + nums[k]
            if(sum === 0){
                ans.push([nums[i],nums[j],nums[k]])
                
                    //중복 방지
                while(nums[j] === nums[j+1]) j++
                while(nums[k] === nums[k-1]) k--

                j++
                k-- 
            } 
            else if (sum < 0) j++
            else k--
        }
    }
    
    return ans
};
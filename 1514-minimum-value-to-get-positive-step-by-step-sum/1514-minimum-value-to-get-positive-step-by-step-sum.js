/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    const prefix = [nums[0]]

    let startValue = 1
    
    while(true){
        let currValue = startValue, flag = true 
        for(let i=0; i<nums.length; i++){
            currValue += nums[i]
            
            if(currValue < 1) { 
                startValue++
                flag = false
                break
            }
        }
        if(flag) return startValue
    }
};

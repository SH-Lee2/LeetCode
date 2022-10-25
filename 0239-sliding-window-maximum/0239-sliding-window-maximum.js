/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const queue = [] 
    const answer = []
    
    for(let i=0; i<nums.length; i++){
        while(queue && nums[queue[queue.length-1]] < nums[i]){
            queue.pop()
        }
        
        queue.push(i)
        
       if (queue[0] + k == i) {
             queue.shift();
        }
        
        if(i >= k - 1) {
            answer.push(nums[queue[0]])
        }
    }
    
    
    return answer
};
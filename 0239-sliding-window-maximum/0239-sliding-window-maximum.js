/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// monotonic
var maxSlidingWindow = function(nums, k) {
    const queue = [] 
    const answer = []
    
    for(let i=0; i<nums.length; i++){
        while(queue && nums[queue[queue.length-1]] < nums[i]){
            queue.pop()
        }
        
        queue.push(i)
        
        /**
        * 만약 nums 배열이 [1,3,-1,-3,5,4,3,2] 라면
        * queue에 [5,4,3,2] 가 남는다 이렇게 되면 k(3)을 넘게 되므로 5를 빼준다.
        * 즉 위의 while문 조건에 걸리지 않고 k 이상일때 넘지 않도록 제거해주는 로직이다.
        */
       if (queue[0] + k === i) {
             queue.shift();
        }
        
        // 처음 k개 이후에는 매번 answer에 push
        if(i >= k - 1) {
            answer.push(nums[queue[0]])
        }
    }
    
    
    return answer
};
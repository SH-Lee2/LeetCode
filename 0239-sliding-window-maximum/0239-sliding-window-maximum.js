/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let ans = [];
    let queue = [];

    // k 길이만큼의 window 에서만 최대 값을 찾는게 중요
    // window 내부에서는 내림차순 정렬
    for (let i = 0; i < nums.length; i++) {
        // 현재 값 보다 이전 값들이 작은 경우 제거 dequeue
        while(queue.length && nums[i] > nums[queue.at(-1)]){
            queue.pop()
        }

        // 윈도우 사이즈 계산 때문에 인덱스 추가
        queue.push(i);

        // queue 의 길이가 window 사이즈 초과 인경우 제거
        if(queue[0] + k === i){
            queue.shift()
        }

        if(i >= k - 1){
            ans.push(nums[queue[0]])
        }
    }
    
    return ans;
};
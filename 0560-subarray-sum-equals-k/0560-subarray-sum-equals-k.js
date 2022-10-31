/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const map = new Map()
    
    // 빈배열 []의 하위배열 합은 0
    map.set(0,1) 
    let curr = 0 
    let ans = 0
    
    /**
    * prefix sum을 통해 더한값(curr)의 - k 값이 해시에 저장되어 있는경우
    * nums 하위배열의 합이 k와 일치한다고 본다.
    */
    for(const num of nums){
        curr += num
        ans += (map.get(curr-k) || 0)
        map.set(curr, (map.get(curr)|| 0) + 1)
    }
    
    return ans
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    // nums 하위 배열에서 k개의 홀수 개수를 가지는 하위 배열 개수 찾기
    const counts = new Map()
    counts.set(0,1)
    let ans = 0, curr = 0
    
    for(const num of nums){
        curr += num % 2 // 홀수면 +1
        ans += counts.get(curr-k) || 0
        counts.set(curr, (counts.get(curr)||0) + 1)
    }
    
    return ans
};

//    1  1  2  1  1
// 0  1  2  2  3  4 (prefix odd map key)
// 0 -2 -1 -1  0  1 (홀수 개수 - k)
// => 홀수 개수 -k 가 map의 key에 존재한다면 조건에 부합
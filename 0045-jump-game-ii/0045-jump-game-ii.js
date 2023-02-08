/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    // @@@무조건 nums[n-1] 에 도달하도록 테스트 케이스가 주어진다. 
    let ans = 0 
    let end = 0 
    let far = 0 
    for(let i=0; i<nums.length-1; i++){
        far = Math.max(far, nums[i] + i) // 현재 자기위치에서 갈수 있는 최대 거리
        
        if(i === end){
            ans++
            end = far
        }
    }
    
    return ans
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function(nums) {
    if(nums.length === 1) return nums[0]
    let arr = [] 
    let flag = true
    for(let i=2; i<=nums.length; i+=2){
        const num = flag ? Math.min(...nums.slice(i-2,i)) : Math.max(...nums.slice(i-2,i))
        flag = !flag
        arr.push(num)
    }
    return minMaxGame(arr)
};
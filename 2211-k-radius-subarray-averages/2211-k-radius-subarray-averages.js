/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
    if(k===0) return nums 

    // sliding window + prefix sum ?? 
    const len = nums.length
    const ans = Array.from({length: len},()=>-1), prefix = [0, nums[0]]
    const divisor = k*2+1

    if(divisor > len) return ans

    for(let i=1; i<len; i++){
        prefix.push(nums[i] + prefix[i])
    }

    for(let i=0; i<len; i++){
        if(i < k || i+k > len-1) {
            continue
        }
        
        const avg = Math.floor((prefix[i+k+1] - prefix[i-k])/divisor)
        ans[i] = avg
    }
    return ans
}


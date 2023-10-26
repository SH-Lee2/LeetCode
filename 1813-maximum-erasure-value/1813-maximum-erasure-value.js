/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    const map = new Map()

    let max = 0, left=0, currentValue = 0

    for(let right=0; right<nums.length; right++){
        const key = nums[right]


        while(map.has(key)){
            const preKey = nums[left]
            map.delete(preKey)
            currentValue -= preKey
            left++
        }
        
        currentValue += key
        map.set(key,1)
        max = Math.max(max, currentValue)
    }

    return max
};
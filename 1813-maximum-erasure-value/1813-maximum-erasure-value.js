/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    const map = new Map()

    let max = 0, left=0, currentValue = 0

    for(let right=0; right<nums.length; right++){
        const key = nums[right]

        currentValue += key
        map.set(key,(map.get(key)||0)+1)

        while(map.get(key) > 1){
            const preKey = nums[left]
            map.set(preKey, map.get(preKey)-1)
            currentValue -= preKey
            left++
        }
        
        max = Math.max(max, currentValue)
    }

    return max
};
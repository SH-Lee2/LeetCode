/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const map = new Map()
    const stack = []
    for(let i=0; i<nums2.length; i++){
        while(stack.length && stack.at(-1) < nums2[i]) {
            const prev = stack.pop()
            const crev = nums2[i]
            map.set(prev, crev)
        }
        stack.push(nums2[i])
    }

    // stack 에 남아있는 경우 => 다음 요소에 자신 보다 큰 요소가 없는 경우
    while(stack.length){
        map.set(stack.pop(),-1)
    }

    return nums1.map(num=>map.get(num))
};
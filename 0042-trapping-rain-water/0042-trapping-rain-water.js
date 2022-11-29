/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0, right = height.length -1 
    let leftMax = 0, rightMax =0
    let ans = 0 
    
    while(left <= right){
        leftMax = Math.max(leftMax, height[left])
        rightMax = Math.max(rightMax, height[right])
        
        const leftRain = leftMax - height[left]
        const rightRain = rightMax - height[right]
        
        ans+= leftRain > 0 ? leftRain : 0
        ans+= rightRain > 0 ? rightRain : 0
        
        
        height[left] > height[right] ? right-- : left++
    }
    
    return ans
};
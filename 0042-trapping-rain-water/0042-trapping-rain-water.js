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
        
        ans+= leftMax - height[left] > 0 ? leftMax - height[left] : 0
        ans+= rightMax - height[right] > 0 ? rightMax - height[right] : 0
        
        
        height[left] > height[right] ? right-- : left++
    }
    
    return ans
};
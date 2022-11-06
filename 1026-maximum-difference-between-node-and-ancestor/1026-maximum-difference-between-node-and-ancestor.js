/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function(root) {
//     let ans = 0
    
//     const dfs = (node, max, min) => {
//         if(!node) return 0 
        
//         max = Math.max(node.val, max)
//         min = Math.min(node.val, min)
        
//         ans = Math.max(ans, Math.abs(max-min))
//         dfs(node.left, max, min)
//         dfs(node.right, max, min)
        
//     }
//     dfs(root, 0, 5000)
//     return ans
    
    const dfs = (node, max, min) => {
        if(!node) return max - min 
        max = Math.max(node.val, max)
        min = Math.min(node.val, min)
        
        const left = dfs(node.left, max, min)
        const right = dfs(node.right, max, min)
        
        return Math.max(left, right)
    }
    
    return dfs(root, 0, 5000)
};
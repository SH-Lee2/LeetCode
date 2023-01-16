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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    const dfs = (node, curr) => {
        if(!node) return false
        
        curr += node.val
        
        if(!node.left && !node.right){
            return curr === targetSum
        }
        
        const left = dfs(node.left, curr)
        const right = dfs(node.right, curr)
        
        return left || right
    }
    return dfs(root, 0)
};
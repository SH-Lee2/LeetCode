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
    if(!root) return false 

    const stack = [[root, 0]] 
    
    while(stack.length){
        let [node, curr] = stack.pop()
        
        curr += node.val 
        if(!node.left && !node.right){
            if(curr === targetSum) return true
        }
        
        if(node.right){
            stack.push([node.right,curr])
        }
        
        if(node.left){
            stack.push([node.left,curr])
        }
        
        curr -= node.val
    }
    
    return false
};
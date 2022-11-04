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
var maxDepth = function(root) {
    if(!root) return  0 
    let ans = 0
    const stack = [[root,1]] 
    
    while(stack.length){
        let [node, depth] = stack.pop()
        ans = Math.max(ans, depth)
        
        depth++
        
        if(node.right){
            stack.push([node.right, depth])
        }
        
        if(node.left){
            stack.push([node.left, depth])
        }
    }
    return ans    
};
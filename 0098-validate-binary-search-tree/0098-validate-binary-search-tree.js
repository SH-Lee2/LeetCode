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
 * @return {boolean}
 */
var isValidBST = function(root) {
    const dfs = (node,max, min) => {
      if(!node) return true 

      //조건에 맞지 않은 경우
      if(min >= node.val || node.val >= max) return false 
      
      const left = dfs(node.left, node.val, min) 
      const right = dfs(node.right, max, node.val)

      return left && right // 둘다 BST 조건 만족하는지 
    }
    
    return dfs(root, Infinity, -Infinity)
};
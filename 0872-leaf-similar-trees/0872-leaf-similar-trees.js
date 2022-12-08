/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {

    const dfs = (node,flag) => {
        if(!node) return true
        if(!node.left && !node.right){
            if(!flag){
                if(node.val !== ans.shift()) return false 
            }else{
                ans.push(node.val)
            }
       }
       
        return  dfs(node.left, flag) && dfs(node.right, flag)
    }
    const ans = [] 
  
    return dfs(root1,true) && dfs(root2,false) && !ans.length
};
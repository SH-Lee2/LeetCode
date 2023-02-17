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
var minDiffInBST = function(root) {
    const tmp = []
    
    const dfs = (root) => {
        if(!root) return 
        
        
        dfs(root.left)
        tmp.push(root.val)
        dfs(root.right)
    }
    
    dfs(root)
    let min = Infinity

    for(let i=0; i<tmp.length; i++){
        for(let j=i+1; j<tmp.length; j++){
            min = Math.min(min, tmp[j] - tmp[i])
        }
    }
    
    return min
};
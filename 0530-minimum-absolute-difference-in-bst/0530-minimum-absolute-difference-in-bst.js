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
var getMinimumDifference = function(root) {
   const dfs = (node) => {
        if(!node) return []

        const left = dfs(node.left) // 가장 처음 ( 젤 작은 노드)
        const right = dfs(node.right)

        left.push(node.val)
        left.push(...right)
        return left
    }
    
    const sorted = dfs(root)
    let min = Number.MAX_SAFE_INTEGER
    
    for(let i=0; i<sorted.length-1; i++){
        min = Math.min(min, sorted[i+1] - sorted[i])
    }
    
    return min
};
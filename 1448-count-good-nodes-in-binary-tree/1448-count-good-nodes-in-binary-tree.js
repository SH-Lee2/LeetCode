/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    let dfs = (node, maxSoFar) => {
        if (!node) {
            return 0;
        }
        
    maxSoFar = Math.max(maxSoFar, node.val)
        
        let left = dfs(node.left, maxSoFar);
        let right = dfs(node.right, maxSoFar);
        let ans = left + right;
        if (node.val >= maxSoFar) {
            ans++;
        }
        
        return ans;
    }
    
    return dfs(root, -Infinity);
};
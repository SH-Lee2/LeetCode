/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    let count = 0
    const dfs = (node, max) => {
        if(!node) return 0 
        
        if(node.val >= max){
            count++
            max = node.val
        }
        
        dfs(node.left, max, count)
        dfs(node.right, max, count)
    }
    dfs(root, -Infinity);
    return count
};
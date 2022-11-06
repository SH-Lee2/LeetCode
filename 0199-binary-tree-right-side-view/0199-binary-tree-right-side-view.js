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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(!root) return []

    let ans = [] 
    let queue = [root]
    
    while(queue.length) {
        const currentLength = queue.length
        const nextQueue = [] 
        
        ans.push(queue[queue.length-1].val) // 가장 오른쪽 = 왼쪽부터 저장했을때 배열 가장 마지막
        for(let i=0; i<currentLength; i++){
            const node = queue[i]
            if(node.left) nextQueue.push(node.left)
            if(node.right) nextQueue.push(node.right)
        }
        
        queue = nextQueue 
    }
    
    return ans
};
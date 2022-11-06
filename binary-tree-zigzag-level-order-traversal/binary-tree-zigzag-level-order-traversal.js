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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root) return [] 
    
    let level = 1 
    let queue = [root]
    const ans = [] 
    
    while(queue.length){
        const currentLength = queue.length;
        const nextQueue = []
        
        const tmp = []
        for(let i=0; i<currentLength; i++){
            const node = queue[i]
            
            if(level%2 !== 0) tmp.push(node.val)
            else tmp.unshift(node.val)
            
            if(node.left) nextQueue.push(node.left)
            if(node.right) nextQueue.push(node.right)
        }
        
        level++
        ans.push(tmp)
        queue = nextQueue
    }
    
    return ans
};
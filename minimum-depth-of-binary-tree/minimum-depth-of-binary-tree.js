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
var minDepth = function(root) {
    if(!root) return 0 
    
    const isLeaf = (node) => {
        return node.left === null && node.right === null
    }
    if(isLeaf(root)) return 1
    let queue = [root]
    let depth = 1
    
    while(queue.length){
        const currLength = queue.length
        const nextQueue = [] 
        
        for(let i=0; i<currLength; i++){
            const node = queue[i]
            
            if(isLeaf(node)) return depth
            if(node.left) nextQueue.push(node.left)
            if(node.right) nextQueue.push(node.right)
        }
        
        depth++
        queue = nextQueue
    }

    return depth
};
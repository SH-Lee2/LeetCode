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
var largestValues = function(root) {
    const ans = [] 
    
    if(!root) return [] 
    
    let queue = [root] 
    
    while(queue.length){
        const currentLength = queue.length;
        const nextQueue = [] 
        
        let max = Number.MIN_SAFE_INTEGER
        for(let i=0; i<currentLength; i++){
            const node = queue[i]
            
            max = Math.max(node.val, max)
            if(node.left) nextQueue.push(node.left)
            if(node.right) nextQueue.push(node.right)
        }
        
        ans.push(max)
        queue = nextQueue         
    }
    
    return ans
};
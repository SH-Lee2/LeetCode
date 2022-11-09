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
var deepestLeavesSum = function(root) {
    // depths마다 노드 값을 저장하고 마지막 depths의 합을 반환
    if(!root) return 0
    
    let queue = [root]
    let ans = 0 
    
    while(queue.length){
        const currentLength = queue.length
        const nextQueue = [] 
        
        let sum = 0
        for(let i=0; i<currentLength; i++){
            const node = queue[i]
            
            sum+= node.val
            
            if(node.left) nextQueue.push(node.left)
            if(node.right) nextQueue.push(node.right)
        }
        
        ans = sum
        queue = nextQueue
    }
    
    return ans
};
/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    const seen = new Set([start]) // visited index

    let queue = [[start, arr[start]]]
    const maxLen = arr.length-1
    
    const isValid = (idx) => {
        return idx <= maxLen && idx >= 0
    }
    
    while(queue.length){
        const nextQueue = [] 
        
        for(const [index, value] of queue){
            if(value === 0) return true 
            
//             for(const val of [-value , value]){
//                 const newIdx = val+index
//                 if(isValid(newIdx) && !seen.has(newIdx)){
//                     seen.add(newIdx)
//                     nextQueue.push([newIdx, arr[newIdx]])
//                 }
//             }
            const pre = index - value
            const next = index + value 
            
            if(isValid(pre) && !seen.has(pre)){
                seen.add(pre)
                nextQueue.push([pre, arr[pre]])
            }
            
            if(isValid(next) && !seen.has(next)){
                seen.add(next)
                nextQueue.push([next, arr[next]])
            }
        }
        
        queue = nextQueue
    }
    
    return false
};
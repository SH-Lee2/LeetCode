/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const unlocks = new Array(rooms.length).fill(false)
    if(rooms[0].length === 0) return false 
    
    let queue = [0]
    const seen = new Set([0])
    unlocks[0] = true
    
    while(queue.length){
        const nextQueue = [] 
        for(const room of queue){
            for(const key of rooms[room]){
                if(!seen.has(key)){
                    unlocks[key] = true 
                    seen.add(key)
                    nextQueue.push(key)
                }
            }
        }
        
        queue = nextQueue 
    }
    
    console.log(unlocks)
    return unlocks.every(lock => lock === true)
};
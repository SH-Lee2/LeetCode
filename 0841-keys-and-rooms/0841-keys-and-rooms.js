/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    if(rooms[0].length === 0) return false 
    
    let queue = [0]
    const seen = new Set([0])
    
    while(queue.length){
        const nextQueue = [] 
        for(const room of queue){
            for(const key of rooms[room]){
                if(!seen.has(key)){
                    seen.add(key)
                    nextQueue.push(key)
                }
            }
        }
        
        queue = nextQueue 
    }
    
    return seen.size === rooms.length
};
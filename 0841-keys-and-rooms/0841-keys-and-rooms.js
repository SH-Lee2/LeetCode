/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
// BFS 
//     if(rooms[0].length === 0) return false 
    
//     let queue = [0]
//     const seen = new Set([0])
    
//     while(queue.length){
//         const nextQueue = [] 
//         for(const room of queue){
//             for(const key of rooms[room]){
//                 if(!seen.has(key)){
//                     seen.add(key)
//                     nextQueue.push(key)
//                 }
//             }
//         }
        
//         queue = nextQueue 
//     }
    
//     return seen.size === rooms.length]
    
// DFS
    const seen = new Set([0])
    if(rooms[0].length === 0) return false 
    
    const dfs = (room) => {
        for(const key of rooms[room]){
            if(!seen.has(key)){
                seen.add(key)
                dfs(key)
            }
        }
    }
    dfs(0)
    
    return seen.size === rooms.length
};
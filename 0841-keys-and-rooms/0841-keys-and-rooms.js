/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const dfs=(node)=> {
        for(const room of rooms[node]){
            if(!seen.has(room)){
                seen.add(room)
                dfs(room)
            }
        }
        
    }
    
    const seen = new Set([0])
    dfs(0)
    return seen.size === rooms.length
};
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    if(grid[0][0] === 1) return -1
    
    const len = grid.length
    const directions = [[-1,0],[-1,1], [0,1], [1,1], [1,0], [1,-1],[0,-1],[-1,-1]]
    const seen = Array.from(Array(len), ()=>Array(len).fill(false))
    seen[0][0] = true
    let queue = [[0,0]]
    let steps = 0
    
    const gridIsValid = (x,y) => {
        return x >= 0 && x < len && y >= 0 && y < len && grid[x][y] === 0
    }
    
    while(queue.length){
        const nextQueue = [] 
        steps++
        
        for(const [x,y] of queue){
            if(x === len-1 && y === len-1) return steps
            
            for(const [dx,dy] of directions){
                const nx = x+dx, ny = y+dy
                
                if(gridIsValid(nx,ny) && seen[nx][ny] === false){
                    seen[nx][ny] = true
                    nextQueue.push([nx,ny])
                    
                }
            }
        }
        
        queue = nextQueue
    }
    
    return -1 
};
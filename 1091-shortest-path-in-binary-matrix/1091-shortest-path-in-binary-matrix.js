/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    // 초기 스타트 지점이 1이라면 -1 리턴
    if(grid[0][0]) return -1
    
    const n = grid.length,
          directions=[[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1]]
    
    const gridIsValid = (x,y) => {
        return x>=0 && x<n && y>=0 && y<n && grid[x][y] === 0
    }
    
    let queue = [[0,0]] 
    grid[0][0] = 1
    
    let step = 0
    while(queue.length){
        const nextQueue = []
        step++
        
        for(const [x,y] of queue){
            
            if(x === n-1 && y === n-1) return step

            for(const [dx,dy] of directions){
                const nx=x+dx, ny=y+dy
                
                if(gridIsValid(nx,ny)){
                    nextQueue.push([nx,ny])
                    grid[nx][ny] = 1

                }
                
            }
        }
        
        queue=nextQueue
    }
    
    return -1
};
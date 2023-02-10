/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
    const m = grid.length, n = grid[0].length
    const directions = [[-1,0],[0,1],[1,0],[0,-1]]
    
    const gridIsValid = (x,y) => {
        return x >= 0 && x < m && y >= 0 && y < n && grid[x][y] === 0
    }
    
    let queue = [] 
    
    // 땅의 위치를 찾아서 queue에 push
    for(let row=0; row<m; row++){
        for(let col=0; col<n; col++){
            if(grid[row][col] === 1) {
                queue.push([row,col,0])
            }
        }
    }
    
    let maxDistance = -1
    
    while(queue.length){
        const nextQueue = []
        for(const [x,y,distance] of queue){
            maxDistance = Math.max(maxDistance, distance)
            for(const [dx,dy] of directions){
                const nx = x + dx, ny = y + dy

                if(gridIsValid(nx,ny)){
                    grid[nx][ny] = 1
                    nextQueue.push([nx,ny,distance+1])
                }
            }
        }
        queue = nextQueue
    }
    
    return maxDistance === 0 ? -1 : maxDistance
};
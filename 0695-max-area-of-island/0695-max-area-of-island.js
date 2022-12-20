/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const n = grid.length 
    const m = grid[0].length 
    const direction = [[-1,0],[0,1],[1,0],[0,-1]]
    let maximumArea = 0 
    
    const isValid = (x,y) => { 
        return x >= 0 && x < n && y >= 0 && y < m && grid[x][y] === 1
    }   
    
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            // find island 
            if(grid[i][j] === 1){
                // const areaSize = bfs(grid,i,j,direction,isValid)
                const areaSize = dfs(grid,i,j,n,m)
                maximumArea = Math.max(maximumArea, areaSize)
            }
        }
    }
    
    return maximumArea
};



// const bfs = (grid, x, y, direction, isValid) => {
//     let queue = [[x,y]]
//     grid[x][y] = 0
//     let areaSize = 1 
    
    
//     while(queue.length){
//         const nextQueue = [] 
//         for(const [x,y] of queue){
//             for(const [dx,dy] of direction){
//                 const nx = dx + x
//                 const ny = dy + y 
//                 if(isValid(nx,ny)){
//                     areaSize++ 
//                     grid[nx][ny] = 0
//                     nextQueue.push([nx,ny])
//                 }
//             }
//         }
//         queue = nextQueue
//     }
    
//     return areaSize
// }


const dfs = (grid, x, y, n, m) => {
    if(x < 0 || x >= n || y < 0 || y >= m || grid[x][y] ===0) return 0
    
    grid[x][y] = 0
    
    return dfs(grid,x-1,y,n,m) + dfs(grid,x,y+1,n,m) + dfs(grid,x+1,y,n,m) + dfs(grid,x,y-1,n,m) + 1
    
    return areaSize
}
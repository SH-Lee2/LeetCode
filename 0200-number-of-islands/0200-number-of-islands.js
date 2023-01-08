/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    // const isValid = (x,y) => {
    //     return x>=0 && y>=0 && x<grid.length && y< grid[0].length && grid[x][y]==="1"
    // }
    // function DFS(x,y){
    //     if(isValid(x,y)){
    //         grid[x][y] = 0
    //         return DFS(x-1,y) ||  DFS(x,y+1) || DFS(x+1,y) || DFS(x,y-1)
    //     }
    // }
    // let count = 0 
    // for(let i=0; i<grid.length; i++){
    //     for(let j=0; j<grid[0].length; j++){
    //         if(grid[i][j] === "1"){
    //             count++
    //             DFS(i,j)
    //         }
    //     }
    // }
    // return count
    
    let count = 0 
    
    const isValid = (x,y) => {
        return x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] === '0' 
    }
    const directions = [[-1,0],[0,1],[1,0],[0,-1]]
    
    const BFS = (i,j) => {
        let queue = [[i,j]]

        while(queue.length){
            const nextQueue = []

            for(const [x,y] of queue){
                if(isValid(x,y)) continue
                grid[x][y] = '0'
                for(const [dx, dy] of directions){
                    const nx = x + dx
                    const ny = y + dy
                    nextQueue.push([nx,ny])
                }
            }

            queue = nextQueue
        }
    }
    
    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[0].length; j++){
            if(grid[i][j] === "1"){
                count++
                BFS(i,j)
            }
        }
    }
    return count
};
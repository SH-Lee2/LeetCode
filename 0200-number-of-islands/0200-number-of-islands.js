/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const isValid = (x,y) => {
        return x>=0 && y>=0 && x<grid.length && y< grid[0].length && grid[x][y]==="1"
    }
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

    const directions = [[-1,0],[0,1],[1,0],[0,-1]]
    
    const BFS = (i,j) => {
        let queue = [[i,j]]

        while(queue.length){
            const nextQueue = []

            for(const [x,y] of queue){
                for(const [dx, dy] of directions){
                    const nx = x + dx
                    const ny = y + dy
                    if(isValid(nx,ny)){
                        nextQueue.push([nx,ny])
                        grid[nx][ny] = '0'
                    }
                }
            }

            queue = nextQueue
        }
    }
    
    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[0].length; j++){
            if(grid[i][j] === "1"){
                count++
                grid[i][j] = '0'
                BFS(i,j)
            }
        }
    }
    return count
};
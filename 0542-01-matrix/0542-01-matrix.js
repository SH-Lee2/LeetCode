/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    let queue = []
    const m=mat.length, n=mat[0].length
    const directions = [[-1,0],[0,1],[1,0],[0,-1]]
    const visited = Array.from({length:m},()=>Array(n).fill(false))
    
    const gridIsValid = (x,y) => {
        return x>=0 && x<m && y>=0 && y<n && mat[x][y] === 1
    }
    
    for(let row=0; row<m; row++){
        for(let col=0; col<n; col++){
            if(mat[row][col] === 0){
                queue.push([row,col,0])
                visited[row][col] = true
            }
        }
    }
    
    while(queue.length){
        const nextQueue = [] 
        
        for(const [x,y,distance] of queue){
            for(const [dx,dy] of directions){
                const nx=x+dx, ny=y+dy
                
                if(gridIsValid(nx,ny) && !visited[nx][ny]){
                    mat[nx][ny] = distance+1
                    visited[nx][ny] = true
                    nextQueue.push([nx,ny,distance+1])
                }
            }
        }
        
        queue = nextQueue
    }
    
    return mat
}
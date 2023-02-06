/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const gridIsValid = (x,y) => {
        return x >= 0 && x < m && y >= 0 && y < n && mat[x][y] === 1
    }

    const m = mat.length, n = mat[0].length
    let queue = [] 
    let seen = Array.from({length:m}, () => Array(n).fill(false))
    
    for(let row=0; row<m; row++){
        for(let col=0; col<n; col++){
            if(mat[row][col] === 0){
                queue.push([row,col])
                seen[row][col] = true
            }
        }
    }   
    
    const directions = [[-1,0],[0,1],[1,0],[0,-1]]  
    let steps = 0
    
    while(queue.length){
        const nextQueue = []
        steps++
        
        for(const [row,col] of queue){
            for(const [dx,dy] of directions){
                const nextRow = row + dx, nextCol = col + dy
                if(gridIsValid(nextRow,nextCol) && !seen[nextRow][nextCol]){
                    seen[nextRow][nextCol] = true
                    nextQueue.push([nextRow,nextCol])
                    mat[nextRow][nextCol] = steps
                }
            }
        }
        
        queue = nextQueue
    }
    
    return mat
}
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const direction = [[-1,0],[0,1],[1,0],[0,-1]]
    const n = image.length
    const m = image[0].length
    const defaultColor = image[sr][sc]
    if(defaultColor === color) return image
    
    const isValid = (x,y) => {
        return x >= 0 && x < n && y >= 0 && y < m && image[x][y] === defaultColor
    }
    
    let queue = [[sr,sc]]
    image[sr][sc] = color
    
    while(queue.length){
        const nextQueue = [] 
        for(const [x,y] of queue){
            for(const [dx,dy] of direction){
                const nx = dx + x
                const ny = dy + y
                
                if(isValid(nx,ny)){
                    image[nx][ny] = color 
                    nextQueue.push([nx,ny])
                }
            }
        }
        
        queue = nextQueue
    }
    
    return image
};
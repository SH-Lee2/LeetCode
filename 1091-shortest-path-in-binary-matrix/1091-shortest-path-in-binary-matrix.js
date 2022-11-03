/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    // 이동 방향 위 아래 오른쪽 왼쪽 대각선
    const directions = [[0, 1], [1, 0], [1, 1], [-1, -1], [-1, 1], [1, -1], [0, -1], [-1, 0]];

    const len = grid.length
    
    if (grid[0][0] == 1) {
        return -1;
    }
    
    let queue = [[0,0,1]]
    grid[0][0] = -1
    
    const isValid = (x,y) => {
        return x >= 0 && x < len && y >= 0 && y < len && grid[x][y] === 0
    }
    
    const isEnd = (x,y) => {
        return x === len-1 && y === len-1    
    }
    
    while(queue.length){
        const currentLength = queue.length
        const nextQueue = []
        for(let i=0; i<currentLength; i++){
            let [x, y, distance] = queue[i]
            if(isEnd(x,y)) return distance
            distance++

            for(const [dx, dy] of directions){
                const nx = x + dx
                const ny = y + dy
                if(isValid(nx,ny)){
                    grid[nx][ny] = -1
                    nextQueue.push([nx,ny,distance])
                }
            }
        }
        queue = nextQueue
    }
    
    return -1
};
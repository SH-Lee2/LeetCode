/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(grid, k) {
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const rows = grid.length
    const cols = grid[0].length
    
    const isEscape = (x,y) => {
        return x === rows-1 && y === cols-1
    }
    
    const isValid = (x,y) => {
        return x >= 0 && x < rows && y >= 0 && y < cols
    }
    
    // k와 방문한곳을 체크하는 배열 초기화
    const visited = Array.from(Array(rows), ()=>Array(cols).fill(-1))
    
    let queue = [[0,0,k]]
    
    let step = 0
    while(queue.length){
        const currentLength = queue.length
        const nextQueue = []
        for(let i=0; i<currentLength; i++){
            let [x,y,remain] = queue[i]
            if(isEscape(x,y)) return step
            
            if(grid[x][y] === 1){
                if(remain === 0){
                    continue
                }else{
                    remain--
                }
            }
            
            if(visited[x][y] >= remain) continue
            
            visited[x][y] = remain
            
            for(const [dx,dy] of directions){
                const nx = x + dx, ny = y + dy
                if(isValid(nx,ny)){
                    nextQueue.push([nx,ny, remain])
                }
            }
        }
        step++
        queue = nextQueue
    }

    return -1
};
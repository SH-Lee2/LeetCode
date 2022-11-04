/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestDistance = function(grid) {
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    
    const rows = grid.length
    const cols = grid[0].length
    
    const tmp = Array.from(Array(rows),()=> Array(cols).fill(0))
    let emptyLandValue = 0
    
    const isValid = (x,y) => {
        return x < rows && x >= 0 && y < cols && y >= 0 && grid[x][y] === emptyLandValue
    }
    
    let minDistance = Infinity

    
    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            if(grid[i][j] === 1){
                let queue = [[i, j, 0]]
                minDistance = Infinity // 집을 찾을때마다 재할당해준다. 그리고 마지막에 모든 거리가 합산되거에서 최단 거리를 찾음

                while(queue.length){
                    const currentLength = queue.length
                    const nextQueue = [] 
                    for(let k=0; k<currentLength; k++){
                        let [x,y,distance] = queue[k]
                    
                        distance++
                        for(const [dx,dy] of directions){
                            const nx = x + dx
                            const ny = y + dy
                            if(isValid(nx,ny)){
                                tmp[nx][ny] += distance
                                grid[nx][ny]--
                                nextQueue.push([nx, ny, distance])
                                minDistance = Math.min(minDistance, tmp[nx][ny])
                            }

                        }
                    }
                    queue = nextQueue
                }
                emptyLandValue--
            }
        }
    }
    return minDistance === Infinity ? -1 : minDistance
};
/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    const dx = [-1,0,1,0]
    const dy = [0,1,0,-1]
    
    const queue = [entrance]
    const row = maze.length
    const col = maze[0].length
    
    const tmp = Array.from(Array(row), ()=> Array(col).fill(0))
    const [initX, initY] = entrance
    
    maze[initX][initY] = '+'
    
    let ans = Infinity 
    
    while(queue.length){
        const [x,y] = queue.shift()
        
        for(let i=0; i<4; i++){
            const nx = x + dx[i]
            const ny = y + dy[i]
            if(nx < row && nx >= 0 && ny < col && ny >= 0){
                if(maze[nx][ny] === '+') continue
                
                tmp[nx][ny] = tmp[x][y] + 1
                maze[nx][ny] = "+"
                
                if(tmp[nx][ny] !== 0) {
                    if(nx === 0 || nx === row-1 || ny === 0 || ny === col-1  ){
                        ans = Math.min(ans, tmp[nx][ny])
                    }
                }
                
                queue.push([nx,ny])
            }
        }
    }

    return ans === Infinity ? -1 : ans
};
/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    const dx = [-1,0,1,0]
    const dy = [0,1,0,-1]
    
    const queue = [entrance]
    const rows = maze.length
    const cols = maze[0].length
    
    const tmp = Array.from(Array(rows), ()=> Array(cols).fill(0))
    const [initX, initY] = entrance
    
    maze[initX][initY] = '+'
    
    
    const isValid =(x, y) => {
        return x >= 0 && x < rows && y >= 0 && y < cols && maze[x][y] === '.';
    }
    
    const isExit =(x, y) => {
        return x === 0 || x === rows - 1 || y === 0 || y === cols - 1;
    }
    
    let ans = Infinity 

    
    while(queue.length){
        const [x,y] = queue.shift()
        
        for(let i=0; i<4; i++){
            const nx = x + dx[i]
            const ny = y + dy[i]
            if(isValid(nx,ny)){
                if(maze[nx][ny] === '+') continue
                
                tmp[nx][ny] = tmp[x][y] + 1
                maze[nx][ny] = "+"
                
                if(isExit(nx,ny)){
                    ans = Math.min(ans, tmp[nx][ny])
                }
                
                queue.push([nx,ny])
            }
        }
    }

    return ans === Infinity ? -1 : ans
};
/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    const dx = [-1,0,1,0]
    const dy = [0,1,0,-1]
    
    const [initX, initY] = entrance
    maze[initX][initY] = '+'
    
    const queue = [[initX, initY, 0]]
    const rows = maze.length
    const cols = maze[0].length
    
    // const tmp = Array.from(Array(rows), ()=> Array(cols).fill(0))
    
    
    
    const isValid =(x, y) => {
        return x >= 0 && x < rows && y >= 0 && y < cols && maze[x][y] === '.';
    }
    
    const isExit =(x, y) => {
        return x === 0 || x === rows - 1 || y === 0 || y === cols - 1;
    }
    
    let ans = -1 

    while(queue.length){
        let [x,y, distance] = queue.shift()
        
        for(let i=0; i<4; i++){
            const nx = x + dx[i]
            const ny = y + dy[i]
            if(isValid(nx,ny)){
                if(maze[nx][ny] === '+') continue
                
                maze[nx][ny] = "+"
                
                if(isExit(nx,ny)){
                    return distance + 1 // 탈출 했다는것은 가장 BFS에서는 가장 먼저 탈출한것
                }
                
                queue.push([nx,ny, distance+1])
            }
        }
    }

    return ans
};
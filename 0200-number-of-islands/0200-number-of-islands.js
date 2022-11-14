/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const rows = grid.length
    const cols = grid[0].length
    
    const dfs = (x,y) => {
        if(x>=rows || x < 0 || y>=cols || y < 0 || grid[x][y] !== "1") return 
        
        grid[x][y] = '0'
        
        return dfs(x-1,y) || dfs(x,y+1) || dfs(x+1,y) || dfs(x,y-1)
    }
    
    let islands = 0
    
    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            // 섬 찾음
            if(grid[i][j] === '1'){
                dfs(i,j)
                islands++
            } 
        }
    }

    return islands
};
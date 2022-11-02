/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const row = grid.length
    const col = grid[0].length
    
    const getMaxArea = (x,y) => {
        if(x >= row || y >= col || x < 0 || y < 0 || grid[x][y] === 0) return 0
        
        grid[x][y] = 0
        
        return getMaxArea(x-1, y) + getMaxArea(x, y+1) + getMaxArea(x+1, y) + getMaxArea(x, y-1) +1
    }
    
    let maxArea = 0
    
    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            if(grid[i][j] === 1){
                maxArea = Math.max(maxArea, getMaxArea(i,j))
            }
        }
    }
    
    return maxArea
};
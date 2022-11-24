/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const dx = [-1,0,1,0]
    const dy = [0,1,0,-1]
    
    /** board[x][y] 값이 맞는지 체크 */
    const isValid = (x,y) => {
        return x >= 0 && x < board.length && y >= 0 && y < board[0].length
    }
    const backtrack = (str,x,y,cur,seen) => {
        if(str === word){
            ans = true
            return true
        }
        
        for(let i=0; i<4; i++){
            const nx = x + dx[i]
            const ny = y + dy[i]
            
            if(isValid(nx,ny) && board[nx][ny] === word[cur]){
                if(!seen[nx][ny]){
                    seen[nx][ny] = true
                    if(backtrack(str+board[nx][ny], nx, ny, cur+1,seen)) return true
                    seen[nx][ny] = false
                }
            }
        }
        return false
    }
    
    const start = word[0] 
    
    /** 시작하는 단어와 일치하는 좌표를 찾는다. */
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[0].length; j++){
            let seen = [];
            for (let i = 0; i < board.length; i++) {
                seen.push(new Array(board[0].length).fill(false));
            }
            if(board[i][j] === start && !seen[i][j]){
                seen[i][j] = true
                if(backtrack(board[i][j], i, j,1,seen)) return true
                
            }
        }
    }
    
    return false 
};
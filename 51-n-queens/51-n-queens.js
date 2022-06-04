/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const board = Array.from({length:n},()=>Array(n).fill('.'))
    const col = new Set()
    // 대각선
    const posDiag = new Set()
    // 대각선
    const negDiag = new Set()
    const res = [] 
    
    function backTrack(r){
        if(r === n){
            res.push(board.slice())
            return 
        }
        for(let c=0; c<n; c++){
            if(col.has(c) || posDiag.has(r-c) || negDiag.has(r+c)) continue
            
            col.add(c)
            posDiag.add(r-c)
            negDiag.add(r+c)
            // board[r][c] = "Q"
            board[r][c] = "Q"
            board[r] = board[r].join('')
            backTrack(r+1)
            
            col.delete(c)
            posDiag.delete(r-c)
            negDiag.delete(r+c)
            board[r] = board[r].split('')
            board[r][c] = "."
        }
    }
    backTrack(0)
    return res
};
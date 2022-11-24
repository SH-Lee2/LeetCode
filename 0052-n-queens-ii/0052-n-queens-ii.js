/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    // 퀸 8방향 이동가능 => 같은 열, 행, 대각선에 위치 하면안됨
    const backtrack = (r) => {
        if(r === n){
            count++
            return
        }
        for(let c=0; c<n; c++){
            if(!col.has(c) && !posDiag.has(r-c) && !negDiag.has(r+c)){
                col.add(c)
                posDiag.add(r-c)
                negDiag.add(r+c)
                backtrack(r+1)
                
                col.delete(c)
                posDiag.delete(r-c)
                negDiag.delete(r+c)
            }
        }
    }
       
    let count = 0
    const col = new Set()
    const posDiag = new Set() // r-c
    const negDiag = new Set() // r+c
    
    backtrack(0)
    
    return count
};
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    const col = new Set()
    const posDiag = new Set()
    const negDiag = new Set()
    let count = 0 
    function backTrack(r){
        if(r===n){
            count++
            return
        }
        for(let c=0; c<n; c++){
            if(col.has(c) || posDiag.has(r-c) || negDiag.has(r+c)) continue
            
            col.add(c)
            posDiag.add(r-c)
            negDiag.add(r+c)
            
            backTrack(r+1)
            
            col.delete(c)
            posDiag.delete(r-c)
            negDiag.delete(r+c)
        }
    }
    backTrack(0)
    return count
};
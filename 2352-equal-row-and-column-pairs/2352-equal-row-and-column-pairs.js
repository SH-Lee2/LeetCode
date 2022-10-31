/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const rows = new Map()
    const cols = new Map()
    const len = grid.length
    
    function getKey (arr) {
        return arr.reduce((a,b)=> a+','+b) // [11,1][1,11] 일경우 대비해서 구분자를 추가해준다.
    }
    
    for(const row of grid){
        const key = getKey(row)
        rows.set(key,(rows.get(key) || 0) +1)
    }
    
    for(let i=0; i<len; i++){
        let tmp = [] 
        
        for(let j=0; j<len; j++){
            tmp.push(grid[j][i])
        }
        
        const key = getKey(tmp)
        cols.set(key, (cols.get(key)||0)+1)
    }
    
    let ans = 0
    
    for(const [key,value] of rows){
        if(cols.has(key)){
            ans += value * cols.get(key)  // 예제처럼 rows가 cols보다 작은경우 
        }
    }
    
    return ans
};
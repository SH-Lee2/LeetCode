/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    // [한번도 패배하지 않은 사람들, 딱 한번만 패매한 사람들]
     const total = new Map()
    
    for(const [winner, loser] of matches){
        total.set(winner, (total.get(winner)||0))
        total.set(loser, (total.get(loser)||0)+1)
    }
    
    const winner = [] , loser = []
    
    // answer[0] = 0, answer[1] = 1 그 외에는 조건에 부합하지 않는다. 
    for(const [key, value] of total){
        if(value === 0) winner.push(key)
        if(value === 1) loser.push(key)
    }
    
    // 오름차순 정렬
    winner.sort((a,b)=>a-b)
    loser.sort((a,b)=>a-b)
    
    return [winner, loser]
};
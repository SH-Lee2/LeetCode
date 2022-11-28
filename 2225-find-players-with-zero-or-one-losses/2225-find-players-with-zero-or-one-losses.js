/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    const total = new Map()
    
    for(const match of matches){
        const [win, lose] = match
        
        total.set(win, (total.get(win)||0))
        total.set(lose, (total.get(lose)||0)+1)
    }
    
    const winner = [] , loser = []
    
    for(const [key, value] of total){
        if(value === 0) winner.push(key)
        if(value === 1) loser.push(key)
    }
    
    winner.sort((a,b)=>a-b)
    loser.sort((a,b)=>a-b)
    
    return [winner, loser]
};
/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    const total = new Map()
    
    for(const [win, lose] of matches){
        total.set(win, (total.get(win)||0))
        total.set(lose, (total.get(lose)||0) + 1)
    }

    const winnerArr = [] ,loserArr = []
    
    for(const [key, value] of total){
        if(total.get(key)===0) winnerArr.push(key)
        if(total.get(key) === 1) loserArr.push(key)
    }
    
    winnerArr.sort((a,b)=> a-b)
    loserArr.sort((a,b)=>a-b)
    
    return [winnerArr, loserArr]
};
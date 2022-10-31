/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    const winner = new Map()
    const loser = new Map()
    
    for(const [win, lose] of matches){
        winner.set(win, (winner.get(win)||0) + 1)
        loser.set(lose, (loser.get(lose)||0) + 1) 
    }

    const winnerArr = [] ,loserArr = []
    
    for(const key of winner.keys()){
        if(!loser.get(key)) winnerArr.push(key)
    }
    
    winnerArr.sort((a,b)=> a-b)
    
    for(const [key, value] of loser){
        if(value === 1) loserArr.push(key)
    }
    
    loserArr.sort((a,b)=>a-b)
    
    return [winnerArr, loserArr]
};
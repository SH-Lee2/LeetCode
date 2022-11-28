/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    const winner = new Map()
    const loser = new Map()
    
    for(const match of matches){
        const [win, lose] = match
        
        winner.set(win,(winner.get(win)||0)+1)
        loser.set(lose,(loser.get(lose)||0)+1)
        
        
        // if(winner.has(win) && loser.has(win)) winner.delete(win)
    }
    
    let left = [] 
    for(const key of winner.keys()){
        if(!loser.has(key)) left.push(key)
    }
    let right = [] 
    for(const [key, value] of loser){
        if(value === 1) right.push(key)
    }
    
    left.sort((a,b)=>a-b)
    right.sort((a,b)=>a-b)
    
    return [left, right]
};
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    const len = piles.length 

    let min = 1, max = Math.max(...piles)
    
    while(min <=max){
        const mid = Math.floor((min+max) /2)
        const totoalTime = piles.reduce((a,b)=> a + Math.ceil(b/mid), 0)
        
        if(totoalTime <= h){
            max = mid - 1
        }else{
            min = mid + 1
        }
    }
    
    return min
};
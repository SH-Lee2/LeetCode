/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function(cards) {
    const map = new Map() 
    
    let min = Infinity
    
    for(let i=0; i<cards.length; i++){
        const card = cards[i]
        
        if(map.has(card)){
            const startIdx = map.get(card)
            map.set(card, i)
            min = Math.min(min, i - startIdx)        
        }
        map.set(card, i)
    }
    
    return min === Infinity ? -1 : min + 1
};
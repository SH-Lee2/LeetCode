/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function(cards) {
    // key의 인덱스 번호를 value로 저장하고 
    // for문을 순회하면서 key값이 있다면 value 와 현재 인덱스 번호 차이를 비교한다.
    const map = new Map() 
    
    let min = Infinity
    
    for(let i=0; i<cards.length; i++){
        const card = cards[i]
        
        if(map.has(card)){
            min = Math.min(min, i - map.get(card))        
        }
        map.set(card, i) // 중복된 key값 대응
    }
    
    return min === Infinity ? -1 : min + 1
};
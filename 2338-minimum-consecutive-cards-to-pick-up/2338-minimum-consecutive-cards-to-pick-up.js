/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function(cards) {
    const dic = new Map()
    let ans = Infinity

    for(let i=0; i<cards.length; i++){
        const card = cards[i]
        
        // dic에 card 정보가 있는 경우
        if(dic.has(card)){
            // card 정보가 있는 경우 value, ans 업데이트 
            const value = dic.get(card)
            ans = Math.min(ans,i - value + 1)
            dic.set(card, i) 
        }
        dic.set(card,i)
    }

    return ans === Infinity ? -1 : ans
};


// map에는 key: 카드 값 , value : 인덱스 
//  0  1  2  3  4  5
//  3  4  2  3  4  7
// -1 -1 -1  4  4 -1   만약 map에 있다면 현재 인덱스 - value + 1
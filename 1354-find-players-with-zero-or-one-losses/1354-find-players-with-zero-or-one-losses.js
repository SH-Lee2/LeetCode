/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    // matches[i] = [winner, loser]
    // 무승부는 존재하지 않는다.

    const players = new Map()

    for(const [winner, loser] of matches){
        if(!players.has(winner)) players.set(winner, 0) // 명단에 없으면 아직 패배한적 없는 선수
        players.set(loser, (players.get(loser)||0)+1)
    }

    let undefeatedPlayers = [], onceDefeatedPlayers  = []

    for(const [name, value] of players.entries()){
        if(value === 0) undefeatedPlayers.push(name)
        if(value === 1) onceDefeatedPlayers.push(name)
    }

    // 각 조건들 오름차순 정렬
    undefeatedPlayers.sort((a,b)=>a-b)
    onceDefeatedPlayers.sort((a,b)=>a-b)

    // return [[한번도 패배한적 없는 선수들], [정확히 한번만 패배한 선수들]] ASC
    return [undefeatedPlayers,onceDefeatedPlayers]
};
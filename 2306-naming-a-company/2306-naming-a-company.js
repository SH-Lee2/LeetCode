/**
 * @param {string[]} ideas
 * @return {number}
 */
var distinctNames = function(ideas) {
    // ideas에서 두개의 고유한 ideaA, ideaB를 찾는다
    // ideaA, ideaB의 첫번째 문자를 각각 교환 -> 각각 ideas에 없어야한다.
    // 이때 생성된 문자열 (공백으로 구분된 문자열)이 ideas에 없으면 회사이름으로 인정
    
    const map = new Map()
    
    for(const idea of ideas) {
        const prefix = idea[0]
        const suffix = idea.slice(1)
        
        if(!map.has(prefix)) map.set(prefix, new Set())
        map.get(prefix).add(suffix)
    }
    
    const keys = [...map.keys()]
    let count = 0 
    
    
    for(let i=0; i<keys.length; i++){
        const frist = map.get(keys[i])
        
        for(let j=i+1; j<keys.length; j++){
            const second = map.get(keys[j])
            let sameCount = 0
            
            for(const suffix of frist){
                if(second.has(suffix)) sameCount++
            }
            
            count += 2 * (frist.size - sameCount) * (second.size - sameCount)
        }
    }
   
    return count
};

// coffee, toffee
// donuts,
// time 

// c : offee
// t : offee, ime
// d : onuts
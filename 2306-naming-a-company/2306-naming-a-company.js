/**
 * @param {string[]} ideas
 * @return {number}
 */
var distinctNames = function(ideas) {
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
                // c : offee, t:offee 중복은 스왑을해도 사용불가능함
                if(second.has(suffix)) sameCount++
            }
            
            count += 2 * (frist.size - sameCount) * (second.size - sameCount)
        }
    }
   
    return count
};

// c : offee
// t : offee, ime
// d : onuts
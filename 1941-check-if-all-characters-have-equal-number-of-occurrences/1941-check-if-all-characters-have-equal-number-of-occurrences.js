/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    const map = new Map()
    
    for(const c of s){
        map.set(c, (map.get(c)|| 0) +1)
    }
    
    const set = new Set()
    for(const value of map.values()){
        set.add(value)
    }
    
    return set.size === 1
};
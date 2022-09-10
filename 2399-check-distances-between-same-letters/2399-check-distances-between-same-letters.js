/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function(s, distance) {
    for(let i=0; i<s.length; i++){
        let count = 0 
        const code = s.charCodeAt(i) - 97
        for(let j=i+1; j<s.length; j++){
            if(s[i] === s[j]) {
                if(distance[code] === count) continue
                else return false
            }else{
                count++
            }
        }
    }
    return true
};
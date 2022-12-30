/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const map = new Map()
    
    s.split('').forEach(char => map.set(char, (map.get(char)||0)+1))
    
    return [...map].sort((a,b)=> b[1] - a[1]).map((item) => item[0].repeat(item[1])).join('')
    
};
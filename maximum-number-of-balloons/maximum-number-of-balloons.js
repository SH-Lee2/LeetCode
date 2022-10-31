/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    const map = {
        'b' : 0,
        'a' : 0,
        'l' : 0,
        'o' : 0,
        'n' : 0
    }        
    
    for(const char of text) {
        if(char in map) map[char] = (map[char] || 0) + 1
    }
    
    
    map['l'] = Math.floor(map['l'] / 2)
    map['o'] = Math.floor(map['o'] / 2)
    
    return Math.min(...Object.values(map))
};
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const map = new Map()
    
    for(const char of magazine.split('')){
        map.set(char, (map.get(char)||0) + 1)
    }
    
    for(const char of ransomNote.split('')){
        if(!map.has(char)) return false
        
        map.set(char, map.get(char)-1)
        
        if(map.get(char) === 0) map.delete(char)
    }
    
    return true
};
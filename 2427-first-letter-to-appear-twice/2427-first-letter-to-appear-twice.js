/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    const dic = new Map()

    for(const char of s){
        if(dic.has(char)) return char

        dic.set(char, char)
    }
};
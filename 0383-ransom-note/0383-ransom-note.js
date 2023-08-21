/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // ransomNote 의 value 가 magazine 의 value에 모두 포함 되는 경우 true : false

    const dic = new Map()

    for(const char of magazine){
        dic.set(char, (dic.get(char)||0)+1)
    }

    for(const char of ransomNote){
        if(!dic.has(char)) return false

        dic.set(char, dic.get(char) - 1)

        if(dic.get(char) === 0) dic.delete(char)
    }

    return true
};
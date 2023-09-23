/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const map = new Map()

    for(let i=0; i<s.length; i++){
        const leftChar = s[i]
        const rightChar = t[i]

        if(!map.has(leftChar)){
            map.set(leftChar, rightChar)
        }else{
            if(map.get(leftChar) !== rightChar) return false 
        }
    }

    return [...new Set(map.values())].length === map.size
};
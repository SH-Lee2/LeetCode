/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const patternValues = getMatch(pattern, '')
    const sValues = getMatch(s, ' ')

    if(patternValues.length !== sValues.length) return false
    
    for(let i=0; i<patternValues.length; i++){
        if(patternValues[i] !== sValues[i]) return false
    }

    return true
};

// 구분자
function getMatch (pattern , splitStr) {
    let initialValue = 1
    const patternMap = new Map()
    const patternValues = []

    pattern.split(splitStr).forEach(char => {
        if(!patternMap.has(char)){
            patternMap.set(char, initialValue++)
        }
        patternValues.push(patternMap.get(char))
    })

    return patternValues
}
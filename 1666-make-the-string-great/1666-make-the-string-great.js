/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let answer = []

    for(const c of s){
        const char = c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()
        if(char === answer[answer.length-1]) answer.pop()
        else answer.push(c)
    }

    return answer.join('')
};
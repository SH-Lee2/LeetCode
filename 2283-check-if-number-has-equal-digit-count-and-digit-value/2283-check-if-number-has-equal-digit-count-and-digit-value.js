/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
    const list = {}
    for(let i=0; i<num.length; i++){
        if(!list[i]) list[i] = 0 
        if(num[i] !== i) list[num[i]] = (list[num[i]] || 0) + 1
        else list[i] = (list[i] || 0) + 1
    }
    for(let i=0; i<num.length; i++){
        if(Number(num[i]) !== list[i]) return false
    }
    return true
};
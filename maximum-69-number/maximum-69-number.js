/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    const tmp = num.toString().split('')
    for(let i=0; i<tmp.length; i++){
        if(tmp[i] === '6') {
            tmp.splice(i,1,'9')
            return +tmp.join('')
        }
    }
    return +tmp.join('')
};
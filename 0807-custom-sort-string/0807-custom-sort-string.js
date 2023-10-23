/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    const dic = new Map()

    // unique
    for(let i=0; i<order.length; i++){
        dic.set(order[i], i)
    }

    for(let i=0; i<s.length; i++){
        if(!dic.has(s[i])) dic.set(s[i], Infinity)
        else dic.set(s[i],dic.get(s[i]))
    }
    
    const splitS = s.split('')
    
    return splitS.sort((a,b)=>dic.get(a)-dic.get(b)).join('')
};
/**
 * @param {number} num
 * @return {boolean}
 */

// 이진 탐색 
var sumOfNumberAndReverse = function(num) {
    if(num === 0) return true
    for(let i=1; i<num; i++){
        if( i + +i.toString().split("").reverse().join("")=== num) return true
    }
    
    return false 
};
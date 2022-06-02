/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let res = Array.from({length:matrix[0].length},()=>[])
    for(const item of matrix){
        for(let i=0;i<item.length;i++){
            res[i].push(item[i])
        }
    }
    return res
};
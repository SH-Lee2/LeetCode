/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const res =[]
    for(let i=0; i<matrix[0].length; i++){
        const tmp = []
        for(let j=0; j<matrix.length; j++){
            tmp.push(matrix[j][i])
        }
        res.push(tmp)
    }
    return res
};
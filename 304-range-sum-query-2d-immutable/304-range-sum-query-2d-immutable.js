/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    if (matrix.length == 0 || matrix[0].length == 0) return;
    this.dp = Array.from(Array(matrix.length + 1),()=>Array(matrix[0].length +1).fill(0))
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[0].length; c++) {
            this.dp[r][c + 1] = this.dp[r][c] + matrix[r][c];
        }
    } 
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
   let sum = 0 
   for(let row = row1; row <= row2; row++){
       sum += this.dp[row][col2+1] - this.dp[row][col1]
   }
    return sum
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
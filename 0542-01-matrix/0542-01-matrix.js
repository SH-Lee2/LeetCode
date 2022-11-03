/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    let valid = (row, col) => {
        return 0 <= row && row < m && 0 <= col && col < n && mat[row][col] == 1;
    }
    
    // if you don't want to modify the input, you can create a copy at the start
    m = mat.length;
    n = mat[0].length;
    let queue = [];
    let seen = [];
    for (let i = 0; i < m; i++) {
        seen.push(new Array(n).fill(false));
    }
    
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (mat[row][col] == 0) {
                queue.push([row, col]);
                seen[row][col] = true;
            }
        }
    }
    
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let steps = 0;
    
    while (queue.length) {
        let currentLength = queue.length;
        let nextQueue = [];
        steps++;
        // 그래프에서 level마다 모든 노드를 확인하는것과 동일
        for (let i = 0; i < currentLength; i++) {
            const [row, col] = queue[i]; // shift보다 성능이 좋다, shift할 경우 배열의 인덱스 번호를 다시 재정렬해줘야함
            for (const [dx, dy] of directions) {
                let nextRow = row + dy, nextCol = col + dx;
                if (valid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
                    seen[nextRow][nextCol] = true;
                    nextQueue.push([nextRow, nextCol]);
                    mat[nextRow][nextCol] = steps;
                }
            }
        }
        
        queue = nextQueue;
    }
    
    return mat;
};
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const isValid = (x, y) => {
        return 0 <= x && x < rows && 0 <= y && y < cols && mat[x][y] == 1;
    }
    
    const rows = mat.length;
    const cols = mat[0].length;
    let queue = [];
    const visited = Array.from(Array(rows),()=>Array(cols).fill(0))
    
    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < cols; y++) {
            if (mat[x][y] == 0) {
                queue.push([x, y]);
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
            // shift보다 성능이 좋다, shift할 경우 배열의 인덱스 번호를 다시 재정렬해줘야함
            const [x, y] = queue[i]; 
            visited[x][y] = true;

            for (const [dx, dy] of directions) {
                let nx = x + dy, ny = y + dx;
                if (isValid(nx, ny) && !visited[nx][ny]) {
                    visited[nx][ny] = true;
                    nextQueue.push([nx, ny]);
                    mat[nx][ny] = steps;
                }
            }
        }
        
        queue = nextQueue;
    }
    
    return mat;
};
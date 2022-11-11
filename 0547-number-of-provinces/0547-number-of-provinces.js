/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let dfs = node => {
        for (const neighbor of graph.get(node)) {
            if (!seen[neighbor]) {
                seen[neighbor] = true;
                dfs(neighbor);
            }
        }
    }
    
    let len = isConnected.length;
    let graph = new Map();
    for (let i = 0; i < len; i++) {
        graph.set(i, []);
    }
    
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (isConnected[i][j]) {
                // 무방향
                graph.get(i).push(j);
                graph.get(j).push(i);
            }
        }
    }
    
    let seen = new Array(len).fill(false);
    let ans = 0;
    
    for (let i = 0; i < len; i++) {
        if (!seen[i]) {
            ans++;
            seen[i] = true;
            dfs(i);
        }
    }
    
    return ans;
};
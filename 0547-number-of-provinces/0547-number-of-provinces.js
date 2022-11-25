/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let graph = new Map();
    
    let len = isConnected.length;
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
    
    let dfs = node => {
        if(seen.has(node)) return 
        seen.add(node)
        for(const neighborhood of graph.get(node)){
            dfs(neighborhood)
        }
    }
    
    
    
    // let seen = new Array(len).fill(false);
    let seen = new Set()
    let ans = 0;
    
    for(let i=0; i<len; i++){
        if(!seen.has(i)){
            dfs(i)
            ans++
        }
    }
    return ans;
};
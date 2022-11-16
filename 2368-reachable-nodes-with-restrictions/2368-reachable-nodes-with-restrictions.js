/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
var reachableNodes = function(n, edges, restricted) {
    const graph = new Map()
    const restrict = new Set(restricted)
    const seen = new Set()
    
    
    for(let i=0; i<n; i++){
        graph.set(i,[])
    }
    
    for(const [v1,v2] of edges){
        graph.get(v1).push(v2)
        graph.get(v2).push(v1)
    }

    let ans = 0
    
    const dfs = (node) => {
        // const edges = graph.get(node)
        // for(let i=0; i<edges.length; i++){
        //     const vertex = edges[i]
        //     if(restrict.has(vertex)) continue  // 접근 불가 
        //     if(!seen.has(vertex)){
        //         ans++
        //         seen.add(vertex)
        //         dfs(vertex)
        //     }
        // }
        if (restrict.has(node) || seen.has(node)) {
            return;
        }
        
        ans++;
        seen.add(node);
        
        for (const vertex of graph.get(node)) {
            dfs(vertex);
        }
    }
    
    dfs(0)
    return ans
};
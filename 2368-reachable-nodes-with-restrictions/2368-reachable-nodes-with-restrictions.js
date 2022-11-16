/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
var reachableNodes = function(n, edges, restricted) {
    const graph = new Map()
    const restrict = new Set()
    const seen = new Set([0])
    
    for(const rt of restricted) restrict.add(rt)
    
    for(let i=0; i<n; i++){
        graph.set(i,[])
    }
    
    for(const [v1,v2] of edges){
        graph.get(v1).push(v2)
        graph.get(v2).push(v1)
    }

    let ans = 1
    
    const dfs = (node) => {
        // if(restrict.has(node)) return  // 접근 불가 

        const edges = graph.get(node)
        
        for(let i=0; i<edges.length; i++){
            const vertex = edges[i]
            if(restrict.has(vertex)) continue  // 접근 불가 
            if(!seen.has(vertex)){
                ans++
                seen.add(vertex)
                dfs(vertex)
            }
        }
    }
    
    dfs(0)
    return ans
};
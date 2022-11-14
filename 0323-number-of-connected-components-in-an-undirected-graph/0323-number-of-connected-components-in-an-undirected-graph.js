/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    const map = new Map()

    for(let i=0; i<n; i++){
      map.set(i,[])
    }
    
    for(const [n1,n2] of edges){
        map.get(n1).push(n2)
        map.get(n2).push(n1)
    }
    
    const dfs = (node) => {
        const nodes = map.get(node)
        for(let i=0; i<nodes.length; i++){
            if(!seen.has(nodes[i])){
                seen.add(nodes[i])
                dfs(nodes[i])
            }
        } 
    }
    
    let graph = 0

    const seen = new Set()
    
    for(let i=0; i<n; i++){
        if(!seen.has(i)) {
            graph++
            dfs(i)
        } 
    }
    
    return graph
};
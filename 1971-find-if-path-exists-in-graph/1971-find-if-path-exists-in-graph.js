/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    const graph = new Map()
    
    const dfs = (edge) => {
        if(edge === destination) return true
        
        const node = graph.get(edge)
        for(let i=0; i<node.length; i++){
            const vertex = node[i]
            if(!seen.has(vertex)){
                seen.add(vertex)
                if(dfs(vertex)) return true
            }
        }
        
        return false
    }
    
    for(let i=0; i<n; i++){
        graph.set(i, [i])
    }
    
    for(const [v1,v2] of edges){
        graph.get(v1).push(v2)
        graph.get(v2).push(v1)
    }
    
    const seen = new Set()
    
    return dfs(source)
    // return seen.has(destination)
};
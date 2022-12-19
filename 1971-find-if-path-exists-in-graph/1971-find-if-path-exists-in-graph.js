/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    const graph = new Map()
    
    edges.forEach(edge=>{
        const [v1, v2] = edge
        if(!graph.has(v1)) graph.set(v1,[])
        if(!graph.has(v2)) graph.set(v2,[])
        graph.get(v1).push(v2)
        graph.get(v2).push(v1)
    })
    
    let queue = [source]
    const seen = new Set()
    
    while(queue.length){
        const nextQueue = [] 
        for(const vertex of queue){
            if(vertex === destination) return true
            seen.add(vertex)
            for(const edge of graph.get(vertex)){
                if(!seen.has(edge)){
                    nextQueue.push(edge)
                }                
            }
        }
        queue = nextQueue
    }
    
    return false
};
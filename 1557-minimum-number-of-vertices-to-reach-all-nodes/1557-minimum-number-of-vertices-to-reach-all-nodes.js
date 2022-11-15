/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    const seen = Array.from({length:n}, ()=> false)
    const ans = []
    
    for(const [from, to] of edges){
        seen[to] = true 
    }
    
    for(let i=0; i<n; i++){
        const vertex = seen[i]
        if(!vertex) ans.push(i)
    }
    
    return ans 
};
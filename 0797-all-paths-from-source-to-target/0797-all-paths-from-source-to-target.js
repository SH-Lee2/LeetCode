/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    
    const backtrack = (curr, node) => {
        if(node === graph.length-1){
            ans.push([...curr])
        }
        for(const vertex of graph[node]){
            curr.push(vertex)
            backtrack(curr,vertex)
            curr.pop()
        }
    }
    let ans = []
    backtrack([0],0)
    
    return ans
};
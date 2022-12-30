/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const graph = new Map()
    paths.forEach(path=> graph.set(path[0],path[1]))
    
    let ans = ''
    for(let i=0; i<paths.length; i++){
        const destination = graph.has(paths[i][1])
        if(!destination) return paths[i][1]
        ans = graph.get(paths[i][0])
    }
    
    return ans
};
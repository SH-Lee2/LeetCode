/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const map = new Map()
    
    for(const [from ,to] of paths){
        // if(!map.has(from)){
        //     map.set(from, [to])
        // }else{
        //     map.get(from).push(to)
        // }
        map.set(from, to)
    }

    let curr = paths[0][0]

    while(map.has(curr)){
        curr = map.get(curr)
    }

    return curr
};
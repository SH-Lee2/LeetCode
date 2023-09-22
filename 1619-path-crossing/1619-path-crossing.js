/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    const directions = path.split("")
    let currentPath = [0,0]
    const map = new Map()
    map.set(currentPath.toString(), false)

    for(const direction of directions){
        currentPath = move(currentPath, direction)
        if(map.has(currentPath.toString())) return true
        else map.set(currentPath.toString())
    }  

    return false
};

function move (currentPath,direction){
    const [x,y] = currentPath
    switch(direction){
        case 'N' : return [x,y-1]
        case 'E' : return [x+1,y]
        case 'S' : return [x, y+1]
        case 'W' : return [x-1,y]
    }
}
/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximumImportance = function(n, roads) {
//     간선이 많은 도시에 더 높은 점수를 준다
    const adjacencyList = {}
    for(const road of roads){
        const [x1,x2] = road
        if(!adjacencyList[x1]) adjacencyList[x1] = []
        if(!adjacencyList[x2]) adjacencyList[x2] = []
        adjacencyList[x1].push(x2)
        adjacencyList[x2].push(x1)
    }
    let arr = [] 
    for(const [key,value] of Object.entries(adjacencyList)){
        arr.push([key,value.length])
    }
    arr.sort((a,b)=>b[1] - a[1])
    const valList = {}
    for(const key of arr){
        valList[key[0]] = n--
    }
    let sum = 0 
    for(const road of roads){
        const [x1,x2] = road
        sum += valList[x1]
        sum += valList[x2]
    }
    return sum
};
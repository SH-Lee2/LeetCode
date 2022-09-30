/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    let max = Number.MIN_SAFE_INTEGER
    
    for(let i=0; i<trips.length; i++){
        const curNum = trips[i][2]
        
        max = max < curNum ? curNum : max 
    }
    
    const arr = Array.from({length:max+1},()=>0)

    for(const [numPassengers, from, to] of trips){
        arr[from] += numPassengers
        arr[to] -= numPassengers
    }
    
    let curPassengers = 0 
    
    for(let i=0; i<arr.length; i++){
        curPassengers += arr[i]
        if(curPassengers > capacity) return false
    }
    
    return true
};
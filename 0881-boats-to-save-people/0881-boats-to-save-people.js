/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a,b)=>a-b) 
    let left = 0 
    let right = people.length -1 
    
    let boat = 0
    while(left <= right){
        const sum = people[left] + people[right]
        
        if(sum <= limit){
            left++
            right--
            boat++
        }
        else{
            right--
            boat++
        }
    }
    
    return boat
};
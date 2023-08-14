/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    const prefix = [0] 
    let ans = 0

    for(let i=0; i<gain.length; i++){
        const curr = prefix[i] + gain[i]
        prefix.push(curr)

        ans = Math.max(ans, curr)
    }

    return ans
};
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let idx = 0
    for(let i=1; i<=arr.at(-1); i++){
        if(i!==arr[idx]) k--
        else idx++
        if(idx === arr.length) {
            idx=i 
            break
        }
        if(k===0) return i
    }
    
    return idx + k
};
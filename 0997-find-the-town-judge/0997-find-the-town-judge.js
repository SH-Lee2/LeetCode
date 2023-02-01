/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    const counts = new Array(n+1).fill(0)
    
    for(const [i,j] of trust){
        counts[i] -= 1
        counts[j] += 1
    }
    
    for(let i=1; i<=n; i++){
        if(counts[i] === n-1) return i 
    }
    
    return -1
};
/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function(rolls, mean, n) {
    const sum = rolls.reduce((a,b)=>a+b,0), len = rolls.length + n

    if((sum + (6 * n)) / len  < mean || (sum + (1 * n)) / len > mean) return []

    // (sum + [?]) /  len === mean 이 되는데 필요한 값
    let k = (len * mean) - sum 

    const res = [] 

    let mod = k%n
    const val = Math.floor(k/n)
    for(let i=0; i<n; i++){
        if(mod){
            res.push(val+1)
            mod--
        }
        else res.push(val)    
    }
    
    return res
};


/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    let n = s.length, i=0, j;
    for(j=0; j<n; j++){
        maxCost -= Math.abs(s[j].charCodeAt() - t[j].charCodeAt());
        if(maxCost < 0){
            maxCost += Math.abs(s[i].charCodeAt() - t[i].charCodeAt());
            i++;
        }
    }
    
    return j-i;
};
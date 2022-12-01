/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const seen = new Set()
    let count = 0 
  
    for(const char of s){
      if(seen.has(char)){
          count += 2 
          seen.delete(char)

      }else seen.add(char)
    }
    
    return count += seen.size > 0 ? 1 : 0 
};
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  const map = new Map(), occSet = new Set()
  arr.forEach(v => map.set(v, (map.get(v)||0)+1))
    
  for(const value of map.values()){
      if(occSet.has(value)) return false 
      
      occSet.add(value)
  }
    
  return true
};
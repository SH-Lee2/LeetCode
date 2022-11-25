/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map()
    
    strs.forEach(str=>{
        const key = str.split('').sort().join('')
        if(!map.has(key)) map.set(key,[])
        map.get(key).push(str)
    })
    
    const ans = [] 
    for(const values of map.values()){
        ans.push(values)
    }
    
    return ans
};
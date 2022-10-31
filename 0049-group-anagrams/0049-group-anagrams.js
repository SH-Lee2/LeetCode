/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    /**
    * 각 문자 str을 정렬한 값을 key 값으로 str들을 저장한다.
    */
    
    const map = new Map()
    
    for(const str of strs){
        const key = str.split('').sort().join('')
        map.has(key) ? map.get(key).push(str) : map.set(key,[str])
    }
    
    const ans = [] 

    for(const value of map.values()){
        ans.push(value)
    }
    
    return ans
};
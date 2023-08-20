/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // 같은 아나그램 문자끼리 그룹화 하여 리턴하는 문제

    const dic = new Map()

    for(let str of strs){
        //각 문자열을 단어 단위로 split 
        const chars = str.split('')
        
        //split한 문자열을 오름차순 정렬하고 그것을 key 값으로 value는 기존 문자열을 저장
        const key = chars.sort((a,b)=>a.localeCompare(b)).join('')
        
        if(dic.has(key)){
            dic.get(key).push(str)
        }else{
            dic.set(key, [str])
        }
    }

    return [...dic.values()]
};
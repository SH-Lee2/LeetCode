/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    /**
    * 가장 적은 개수를 가진 숫자를 먼저 제거해준다.
    * 빈도수를 기록하기 위해 map을 사용하여 각 숫자의 빈도수를 저장한다.
    * 가장 적은 빈도수를 가진 숫자를 제거 후 남은 숫자들의 수를 리턴한다.
    */
    const map = new Map()
    
    for(const val of arr){
        map.has(val) ? map.set(val, map.get(val) + 1) : map.set(val, 1)    
    }
    
    const tmp = [...map]
    tmp.sort((a,b) => a[1] - b[1]) 
    let len = tmp.length 

    for(let i=0; i<tmp.length; i++){
        const [key, value] = tmp[i]
        
        if(k - value >= 0) {
            k-= value
            len-= 1
        }else {
            break
        }
    }
    
    return len
    
};
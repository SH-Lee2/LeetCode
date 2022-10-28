/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    /**
    * 가장 적은 개수를 가진 숫자를 먼저 제거해준다.
    * 빈도수를 기록하기 위해 map을 사용하여 각 숫자의 빈도수를 저장한뒤 배열에 담아준다.
    * 가장 적은 빈도수를 가진 숫자를 제거하기 위해 빈도수를 기준으로 정렬한다.
    * 정렬된 배열을 순회하면서 k개 만큼 숫자를 제거하고 k가 0이라면 break 한다.
    * 남은 길이를 반환해준다.
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
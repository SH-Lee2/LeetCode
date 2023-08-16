/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    const len = nums.length
    // ans,dic 변수 선언 및 초기화
    const ans = [], dic = new Map()

    // nums의 각 배열을 순회하면서 map 객체에 저장
    for(const arr of nums){
        for(const num of arr){
            dic.set(num, (dic.get(num) || 0) + 1)
        
            // map 객체에 저장된  value 값이 len과 같은 경우 ans에 push
            if(dic.get(num) === len) ans.push(num)
        }
    }

    return ans.sort((a,b)=>a-b)
};
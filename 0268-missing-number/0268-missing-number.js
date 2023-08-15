/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // nums를 map 객체에 저장 
    const dic = new Map()
    for(const num of nums){
        dic.set(num,num)
    }
    // 0부터 for문을 순회하면서 map 객체에 해당 인덱스가 있는지 확인
    for(let i=0; i<=nums.length; i++){
        // 없으면 리턴
        if(!dic.has(i)) return i
    }
};
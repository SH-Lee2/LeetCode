/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
    // 숫자 num의 각 자리수의 합이 같은것 끼리의 합이 가장 큰 합 찾는 문제 
    // 49 , 76 => 13 === 13 => 125

    // 각 숫자의 자리수 합을 고유 키로 사용
    const dic = new Map()
    let ans = -1

    for(const num of nums){
        const key = num.toString().split('').reduce((a,b)=> +a + +b,'')
        
        if(!dic.has(key)) dic.set(key, [num])
        else {
            // key가 있는 경우 value 업데이트
            // dic.get(key).push(num)
            const value = dic.get(key)

            if(value[0] < num) {
                ans = Math.max(ans,value.pop() + num)
                value.push(num)
            }else{
                ans = Math.max(ans, value[0] + num)
            }
        }
    }

    return ans 
};
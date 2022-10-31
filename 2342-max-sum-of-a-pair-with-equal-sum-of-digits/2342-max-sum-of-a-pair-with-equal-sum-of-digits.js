/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
    // 각 num의 자리수 값을 더한것을 key값으로 num을 저장한다.    
    const getDigitSum = num => {
        let digitSum = 0;
        while (num > 0) {
            digitSum += num % 10;
            num = Math.floor(num / 10);
        }
        
        return digitSum;
    }
    
    const map = new Map()

    let ans = -1 
    
    for(const num of nums){
        const digitSum = getDigitSum(num)
        
        if(map.has(digitSum)){
            ans = Math.max(ans,num+map.get(digitSum))
        }
        map.set(digitSum, Math.max(map.get(digitSum) || 0, num))
    }
    
    return ans
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
    const dic = new Map()
    let ans = -1

    for(let num of nums){
        let key = 0
        const originNum = num

        while (num > 0) {
            key += num % 10;
            num = Math.floor(num / 10);
        }

        if(!dic.has(key)) dic.set(key, originNum)
        else {
            const value = dic.get(key)

            if(value < originNum) {
                dic.set(key, originNum)
            }

            ans = Math.max(ans, value + originNum)
        }
    }

    return ans 
};
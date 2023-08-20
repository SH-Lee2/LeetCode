/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
    const dic = new Map()
    let ans = -1

    for(const num of nums){
        const key = num.toString().split('').reduce((a,b)=> +a + +b,'')
        
        if(!dic.has(key)) dic.set(key, num)
        else {
            const value = dic.get(key)

            if(value < num) {
                dic.set(key, num)
            }

            ans = Math.max(ans, value + num)
        }
    }

    return ans 
};
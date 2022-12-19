/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
     const aLen = num1.length
    const bLen = num2.length 

    // 일의 자리부터 인덱스 
    let i = aLen - 1
    let j = bLen - 1

    let ans = '' 
    let tmp = 0 // 올림 수 

    while(i >= 0 || j >= 0){
        const aNum = i<0 ? 0 : parseInt(num1[i])
        const bNum = j<0 ? 0 : parseInt(num2[j])

        const sum = aNum + bNum + tmp 
        const resNum = sum % 10 
        tmp = Math.floor(sum/10)

        ans = resNum + ans // 3 + '' => '3' , 5 + '3' => '53'
        i--
        j--
    }

    if(tmp !== 0) ans = tmp + ans 
    return ans
};
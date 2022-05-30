/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let num = dividend / divisor
    
    if(num <= -2147483648  ) return -2147483648
    if(num >= 2147483647) return 2147483647
    return num < 0 ? Math.ceil(num) : Math.floor(num)
};
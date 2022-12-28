/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    s = s.split('')
    let left = 0 
    let right = s.length-1
    while(left<right){
        const leftValid = /[a-zA-Z]/.test(s[left])
        const rightValid = /[a-zA-Z]/.test(s[right])
        if(!leftValid){
            left++
        }else if(!rightValid){
            right--
        }else{
            [s[left], s[right]] = [s[right], s[left]]
            left++
            right--
        }
    }
    
    return s.join('')
};
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.split(' ').map(word=> {
        let left = 0, right = word.length-1
        const charArr = word.split('')

        while(left <=right){
            [charArr[left],charArr[right]] = [charArr[right],charArr[left]]

            left ++ 
            right --
        }

        return charArr.join('')
    })

    return s.join(' ')
};
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length === 0) return []
    
    const len = digits.length
    const stringMap = {
        2 : "abc",
        3 : "def",
        4 : "ghi",
        5 : "jkl",
        6 : "mno",
        7 : "pqrs",
        8 : "tuv",
        9 : "wxyz"
    }
    
    const backtrack = (str, i) => {
        if(str.length === len){
            ans.push(str)
            return
        }
        
        for(const char of stringMap[digits[i]] ){
            backtrack(str+char, i+1)
        }        
    }
    let ans = []
    backtrack('',0)
    
    return ans
};
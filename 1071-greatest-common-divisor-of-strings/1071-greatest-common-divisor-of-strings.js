/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let prefix = ''
    let ans = ''
    
    for(const char of str2){
        prefix += char 
        if(str1.replaceAll(prefix,'') === '' && str2.replaceAll(prefix, '') === ''){
            ans = prefix.length > ans.length ? prefix : ans 
        } 
    }
    
    return ans 
};
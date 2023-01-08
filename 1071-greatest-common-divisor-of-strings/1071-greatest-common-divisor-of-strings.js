/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let prefix = ''
    let ans = ''
    
//     const minStr = str1.length > str2.length ? str2 : str1
//     const maxStr = str1.length > str2.length ? str1 : str2
    
    for(const char of str2){
        prefix += char 
        if(str1.replaceAll(prefix,'') === '' && str2.replaceAll(prefix, '') === ''){
            ans = prefix.length > ans.length ? prefix : ans 
        } 
    }
    
    return ans 
};
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
//     let prefix = ''
//     let ans = ''
    
//     for(const char of str2){
//         prefix += char 
//         if(str1.replaceAll(prefix,'') === '' && str2.replaceAll(prefix, '') === ''){
//             ans = prefix.length > ans.length ? prefix : ans 
//         } 
//     }
    
//     return ans 
    const [smallerString, largerString] = [str1, str2].sort((a,b) => a.length - b.length);
    for (let i = smallerString.length; i > 0; i--) {
        const testString = smallerString.slice(0, i);
        const correctSmaller = !smallerString.split(testString).join('').length;
        const correctLarger = !largerString.split(testString).join('').length;
        if (correctSmaller && correctLarger) return testString;
    }
    return '';
};
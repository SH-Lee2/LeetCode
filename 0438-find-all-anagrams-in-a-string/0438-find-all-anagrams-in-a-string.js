// /**
//  * @param {string} s
//  * @param {string} p
//  * @return {number[]}
//  */
// var findAnagrams = function(s, p) {
//     const tmp = []
    
//     for(let i=0; i<=s.length - p.length; i++){
//         tmp.push(s.slice(i,i+p.length))
//     }
    
//     let start = 0
//     const ans = []
    
//     for(const word of tmp){
//         const map = new Map()
//         for(let i=0; i<word.length; i++){
//             const char = word[i]
//             map.set(char, (map.get(char)||0)+1)
//             map.set(p[i], (map.get(p[i])||0)-1)
//             if(map.get(p[i])===0) map.delete(p[i])
//             if(map.get(char)===0) map.delete(char)

//         }
        
//         if(map.size === 0) ans.push(start)
//         start++
//     }
    
//     return ans
// };


const findAnagrams = (s, p) => {
    const output = [];
    const neededChars = {};

    for (let char of p) {
        if (char in neededChars) {
            neededChars[char]++
        } else neededChars[char] = 1
    }
    
    let left = 0;
    let right = 0; 
    let count = p.length 
    
    // start sliding the window
    while (right < s.length) {

        if (neededChars[s[right]] > 0) count--;

        neededChars[s[right]]--;
        right++;

        if (count === 0) output.push(left);
        
        if (right - left == p.length) {
            
            if (neededChars[s[left]] >= 0) count++;

            neededChars[s[left]]++;
            left++;
        }
    }
    return output;
};
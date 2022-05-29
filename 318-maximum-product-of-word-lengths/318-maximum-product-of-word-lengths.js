/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    let count = 0
    for(let i=0; i<words.length; i++){
        const a = words[i]
        for(let j=0; j<words.length; j++){
            if(i===j) continue
            const b = words[j]
            if(checkUnique(a,b)){
                count = Math.max(count, a.length * b.length)
            }
        }
    }
    return count 
};

function checkUnique (a,b){
    for(const char of a){
        if(b.includes(char)) return false
    }
    return true
}

// const areStringsUnique = (a, b) => {
//   for (let i = 0; i < a.length; i++){
//     if ( b.includes(a[i]) ){
//        return false;
//     }
//   } 
//   return true;
// };

// const maxProduct = function(words) {
//   let max = 0;
//   for (let i = 0; i < words.length - 1; i++) {
//     for (let j = i + 1; j < words.length; j++) {
//       const a = words[i];
//       const b = words[j];
//       let unique = true;

//       // compare wordz
//       if ( areStringsUnique(words[i], words[j]) ) {
//         max = Math.max( max, (words[i].length * words[j].length) )
//       }
      
//     }
//   }

//   return max;
// };  
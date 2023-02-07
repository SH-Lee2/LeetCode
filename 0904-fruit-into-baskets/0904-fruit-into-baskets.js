/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
//     let ans = 0
    
//     for(let left=0; left<fruits.length; left++){
//         let right = left
//         const basket = new Set()
        
//         while(right < fruits.length){
//             if(!basket.has(fruits[right]) && basket.size === 2) break
            
//             basket.add(fruits[right])
//             right++ 
//         }

//         ans = Math.max(ans, right - left)
//     }
//     return ans
    
    const basket = new Map()
    let left = 0, right;
    
    for(right=0; right < fruits.length; right++){
        basket.set(fruits[right], (basket.get(fruits[right])||0)+1)
        
        if(basket.size > 2){
            basket.set(fruits[left], basket.get(fruits[left]) - 1)
            
            if(basket.get(fruits[left]) === 0){
                basket.delete(fruits[left])
            }
            left++
        }
    }
    
    return right - left
};
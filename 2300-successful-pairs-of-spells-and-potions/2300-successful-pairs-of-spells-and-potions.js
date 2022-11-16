/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    potions.sort((a,b)=> a-b)
    const len = potions.length
    const ans = []
    
    for(const spell of spells){
        const target = success / spell
        let left = 0
        let right = len - 1
        
        while(left <= right){
            const mid = Math.floor((left + right) / 2) 
            
            if(potions[mid] < target) {
                left = mid + 1
            }else{
                right = mid - 1
            }
        }

        ans.push(len - left)
    }
    
    return ans
}
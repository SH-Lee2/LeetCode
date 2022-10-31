/**
 * @param {string[]} wordsDict
 */
var WordDistance = function(wordsDict) {
    this.map = new Map() 
    
    for(let i=0; i<wordsDict.length; i++){
        if(!this.map.has(wordsDict[i]))  this.map.set(wordsDict[i],[i])
        else this.map.get(wordsDict[i]).push(i)
    }
};

/** 
 * @param {string} word1 
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function(word1, word2) {
    const loc1 = this.map.get(word1)
    const loc2 = this.map.get(word2)
    
    let left = 0, right = 0
    
    let ans = Infinity
    
    while(left < loc1.length && right < loc2.length){
        ans = Math.min(ans, Math.abs(loc1[left] - loc2[right]))
        
        if(loc1[left] < loc2[right]){
            left++ 
        }else{
            right++
        }
    }
    
    return ans
};

/** 
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(wordsDict)
 * var param_1 = obj.shortest(word1,word2)
 */

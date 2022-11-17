/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList)
    
    if(!wordSet.has(endWord)) return 0
    
    const s = new Set()
    for(const word of wordList) {
        for(let i=0; i<word.length; i++){
            s.add(word[i])
        }
    }
    
    const choices = [...s]
    let queue = [beginWord]
    let step = 0
    const seen = new Set(beginWord)
    
    while(queue.length){
        const nextQueue = []
        for(const word of queue){
            if(word === endWord) return step+1
            
            for(const choice of choices){
                for(let i=0; i<word.length; i++){
                    
                    const newWord = word.substring(0,i) + choice + word.substring(i+1)
                    if(!seen.has(newWord) && wordSet.has(newWord)){
                        seen.add(newWord)
                        nextQueue.push(newWord)
                    }
                }
            }
        }
        queue = nextQueue 
        step++
    }
    
    return 0
};
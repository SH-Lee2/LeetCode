/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
    const choices = ['A' , 'C' , 'G', 'T'] 
    const bankSet = new Set(bank)
    if(!bankSet.has(endGene)) return -1 
    
    if(startGene === endGene) return 0 
    
    let step = 0
    let queue = [startGene] 
    const seen = new Set([startGene])

    while(queue.length){
        const nextQueue = []
        
        for(const gene of queue){
            if(gene === endGene) {
                return step
            }
            
            for(const choice of choices){
                for(let i=0; i< gene.length; i++){
                    const newGene = gene.substring(0,i) + choice + gene.substring(i+1) 
                    if(!seen.has(newGene) && bankSet.has(newGene)){
                        seen.add(newGene)
                        nextQueue.push(newGene)
                    }
                }
            }
        }
        step++
        queue = nextQueue
    }    
    
    return -1
};
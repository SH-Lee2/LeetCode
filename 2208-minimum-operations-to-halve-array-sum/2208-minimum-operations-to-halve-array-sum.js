/**
 * @param {number[]} nums
 * @return {number}
 */
class MaxBinaryHeap {
    constructor() {
        this.values = [] 
    }

    insert(element) {
        this.values.push(element)
        this.bubbleUp()
    }

    bubbleUp(){
        let idx = this.values.length - 1
        const element = this.values[idx]
        while(idx > 0){
            let parentIdx = Math.floor((idx -1)/2)
            let parent = this.values[parentIdx]
            
            if(element <= parent) break
            
            this.values[parentIdx] = element
            this.values[idx] = parent
            idx = parentIdx
            
        }
    }

    extractMax(){
        const max = this.values[0]
        const end = this.values.pop()
        if(this.values.length > 0){
           this.values[0] = end
           this.sinkDown() 
        }
        return max
    }

    sinkDown(){
        let idx = 0;
        const len = this.values.length
        const element = this.values[0]

        while(true){
            const leftChildIdx = 2 * idx + 1
            const rightChildIdx = 2 * idx + 2
            let leftChild, rightChild;
            let swap = null

            if(leftChildIdx < len) {
                leftChild = this.values[leftChildIdx]
                if(leftChild > element){
                    swap = leftChildIdx
                }
            }

            if(rightChildIdx < len){
                rightChild = this.values[rightChildIdx]
                if(
                    (swap === null && rightChild > element)||
                    (swap !== null && leftChild < rightChild)
                  ){
                    swap = rightChildIdx
                  }
            }
            
            if(swap === null) break

            this.values[idx] = this.values[swap]
            this.values[swap] = element
            idx = swap
        }
    }
}


var halveArray = function(nums) {
    let sum = nums.reduce((a,b)=>a+b, 0)
    const half = sum / 2
    const heap = new MaxBinaryHeap()
    
    nums.forEach(num=> heap.insert(num))
    
    let step = 0 
    while(sum > half){
        const max = heap.extractMax()
        const half = max / 2 
        sum -= max - half
        heap.insert(half)
        step++
    }
    
    return step 
};
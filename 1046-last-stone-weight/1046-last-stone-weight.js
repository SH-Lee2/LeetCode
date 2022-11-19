/**
 * @param {number[]} stones
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

let heap = new MaxBinaryHeap()
var lastStoneWeight = function(stones) {
    let heap = new MaxBinaryHeap()
    stones.forEach(stone => heap.insert(stone))
    
    while(heap.values.length > 1){
        const first = heap.extractMax()
        const second = heap.extractMax()
        if(first !== second){
            heap.insert(Math.abs(first - second))
        }
    }
    
    return heap.values
};
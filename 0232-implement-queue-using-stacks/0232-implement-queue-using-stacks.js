
var MyQueue = function() {
    this.arr = [] 
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.arr.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.arr.length === 0) return 
    const nextQueue = []
    let ans = 0
    for(let i=0; i<this.arr.length; i++){
        if(i===0) ans = this.arr[i]
        else nextQueue.push(this.arr[i])
    }
    this.arr = nextQueue 
    return ans
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.arr[0]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.arr.length === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
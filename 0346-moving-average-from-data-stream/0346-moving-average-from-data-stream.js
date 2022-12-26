/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.window = size 
    this.left = 0 
    this.arr = [] 
    this.sum = 0 
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.arr.push(val)
    this.sum += val
    if(this.arr.length > this.window){
        this.sum -= this.arr[this.left++]
    }
    const mod = this.arr.length > this.window ? this.window : this.arr.length
    return this.sum / mod
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
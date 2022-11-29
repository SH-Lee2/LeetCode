
var RandomizedSet = function() {
    this.map = new Set()
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.map.has(val)) return false 
    this.map.add(val)
    return true
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.map.has(val)) {
        this.map.delete(val)
        return true
    }
    return false 
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const size = this.map.size 
    const tmp = [...this.map]
    return tmp[Math.floor(Math.random() * size)]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
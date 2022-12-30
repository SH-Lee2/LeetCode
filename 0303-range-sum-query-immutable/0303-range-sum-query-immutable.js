/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.prefix = [0] 
    for(let i=0; i<nums.length; i++){
        if(i===0){
            this.prefix[0] = nums[i]
            continue
        }
        this.prefix.push(this.prefix.at(-1) + nums[i])
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    if(left === 0) return this.prefix[right]
    return this.prefix[right] - this.prefix[left-1]    
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
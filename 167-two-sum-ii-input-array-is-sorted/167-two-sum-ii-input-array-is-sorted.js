/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
      let left = 0
    let right = numbers.length-1
    while(left<right){
        const val = numbers[left] + numbers[right]
        if(val===target) return [++left,++right]
        if(val > target) {
            right--
        }else{
            left++
        }
    }
};
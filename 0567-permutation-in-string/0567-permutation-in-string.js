/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length) return false 
    
    const map = new Map()
    
    for(const char of s1){
        map.set(char, (map.get(char)||0)+1)
    }
    
    let left = 0, //left pointer/index of the sliding window
		right = 0, //right pointer/index of the sliding window
		requiredLength = s1.length //length of the substring required in s2

	while (right < s2.length) {
		if (map.get(s2[right])> 0) requiredLength--;

        map.set(s2[right], map.get(s2[right]) -1)
		right++ 

		if (requiredLength === 0) return true;

		if (right - left === s1.length) {
			if (map.get(s2[left]) >= 0) requiredLength++;
            map.set(s2[left], map.get(s2[left]) + 1)
			left++
		}
	}

    return false;
};
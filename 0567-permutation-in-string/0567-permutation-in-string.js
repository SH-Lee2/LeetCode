/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length) return false 

    const map = new Map()
    s1.split("").forEach(s=>map.set(s, (map.get(s)||0)+1))

    let left = 0, 
		right = 0, 
		requiredLength = s1.length

		while (right < s2.length) {
		if (map.get(s2[right]) > 0) {
			requiredLength--
		}
		map.set(s2[right], map.get(s2[right])-1)

		right++ 

		if (requiredLength === 0) return true;

		if (right - left === s1.length) {
			if (map.get(s2[left]) >= 0) {
				requiredLength++;
			}
        map.set(s2[left], map.get(s2[left])+1)
        left++
		}
	}
	return false;
};
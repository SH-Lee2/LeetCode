/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length) return false 

    const map = new Map()
    s1.split("").forEach(s=>map.set(s, (map.get(s)||0)+1))

		let requiredLength = s1.length, len = s1.length-1

		for(let i=0; i<s2.length; i++){
			const char = s2[i]
			
			if(map.get(char) > 0){
				requiredLength--
			}

			map.set(char,map.get(char)-1)

			if(i > len){
				const preChar = s2[i-len-1]
				if(map.get(preChar) >=0){
					requiredLength++
				}
				map.set(preChar,map.get(preChar)+1)
			}
			
			// s1이 s2 순열에 포함하는 조건 만족
			if(requiredLength === 0) return true
		}
	return false;
};
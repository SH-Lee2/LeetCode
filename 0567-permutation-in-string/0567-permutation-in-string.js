/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;
    const map = new Map()

    s1.split('').forEach((s)=>map.set(s, (map.get(s)||0)+1))

    for(let i=0; i<=s2.length - s1.length; i++){
         const track = new Map()
         for(let j=0; j<s1.length; j++){
             const trackKey = s2[i+j]

             // 현재 단어가 map에 없는 경우 for문으로 넘어감
             if(!map.has(trackKey)) break;

             // 현재 단어를 track 에 저장 
             track.set(trackKey,(track.get(trackKey)||0)+1)

            // track 값이 더 큰 경우다음 for문으로 넘어감
             if(track.get(trackKey) > map.get(trackKey)) break

             // j의 값이 s1의 길이와 같은 경우 s1의 길이만큼의 순열을 가지고 있기 때문에 true 리턴
             if(j+1 === s1.length) return true
         }
    }

    return false
};
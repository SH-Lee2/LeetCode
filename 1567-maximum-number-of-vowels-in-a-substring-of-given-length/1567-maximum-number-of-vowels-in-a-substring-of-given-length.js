/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let curr = 0

    // 모음 
    const vowels = new Set(['a', 'e','i','o','u'])
    
    // 초기 k 길이의 하위 문자열에서 모음의 개수를 계산
    for(let i=0; i<k; i++){
        if(vowels.has(s[i])) curr++
    }

    let ans = curr 

    // window 를 오른쪽으로 옮기면서 하위 문자열에 포함된 모음의 개수 계산
    for(let right=k; right<s.length; right++){
        if(vowels.has(s[right])) curr++ // 현재 문자열이 모음인 경우 카운팅
        if(vowels.has(s[right - k])) curr-- // 이전 window 사이즈에 포함된 문자가 모음인 경우 카운팅

        ans = Math.max(ans, curr)
    }

    return ans
};
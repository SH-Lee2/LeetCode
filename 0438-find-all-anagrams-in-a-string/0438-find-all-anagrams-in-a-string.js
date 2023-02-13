const findAnagrams = (s, p) => {
    const map = new Map(), len = p.length, ans = []
    
    
    for(const char of p){
       map.set(char, (map.get(char)||0) + 1)
    }
    
    let needCharLength = len
    
    for(let i=0; i<s.length; i++){
        const char = s[i]
        
        if(map.get(char) > 0) {
            needCharLength -= 1
        }
        
        if(map.has(char)) {
            map.set(char, map.get(char) - 1)
        }
        
        // anagram일때 시작 인덱스 푸시
        if(needCharLength === 0) ans.push(i-len+1)

        // window창을 넘었을때 window 창 시작부분 더하기
        if(i-len+1 >=0){
            const prevChar = s[i-len+1]
            
            if(map.get(prevChar) >= 0) needCharLength += 1
            
            if(map.has(prevChar)) {
                map.set(prevChar, map.get(prevChar) + 1)
            }
            
            
        }
    }

    return ans
};
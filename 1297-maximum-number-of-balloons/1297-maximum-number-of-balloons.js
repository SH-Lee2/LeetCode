/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    // text 문자열에서 balloon 문자를 몇개 만들 수 있는지 찾는 문제
    const word = 'balon' // 중복 제거
    const dic = new Map()

    // word 의 각 단어들을 dic에 추가

    for(const char of word){
        dic.set(char, 0)
    }

    //text 순회 하면서 각 단어들의 개수 추가    
    for(const char of text){
        if(dic.has(char)) dic.set(char, (dic.get(char)||0)+1)
    }

    // 최저값 찾기
    let ans = Infinity
    for(const char of word){
        if(char === 'l' || char === 'o'){
            ans = Math.floor(Math.min(ans, dic.get(char)/2))
        }else{
            ans = Math.min(ans, dic.get(char))
        }
    }

    return ans
};
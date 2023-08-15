/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const engCharLength = 26

    // 문장에 있는 단어들을 모두 map 객체에 저장하고 map 객체의 길이와 비교

    const dic = new Map()

    for(const char of sentence){
        dic.set(char,char)
    }

    return dic.size === engCharLength
};
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const stack = []
    const answer = Array.from({length : temperatures.length}, () => 0)

    for(let i=0; i<temperatures.length; i++){
        while(stack.length && temperatures[stack.at(-1)] < temperatures[i]){
            const j = stack.pop()
            answer[j] = i - j
        }

        stack.push(i)
    }

    return answer
};
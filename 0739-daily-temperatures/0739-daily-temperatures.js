/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const stack = [] 
    const answer = Array.from({length: temperatures.length}, () => 0)
    
    for(let curDay=0; curDay<temperatures.length; curDay++){
        while(stack && temperatures[stack[stack.length-1]] < temperatures[curDay]){
            const preDay = stack.pop()
            
            answer[preDay] = curDay - preDay
        }
        
        stack.push(curDay)
    }
    
    return answer 
};
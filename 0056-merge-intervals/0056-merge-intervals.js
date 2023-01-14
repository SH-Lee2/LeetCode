/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const ans = [] 
    intervals.sort((a,b)=>a[0]-b[0])

    for(const [start,end] of intervals){
        if(ans.length && start <= ans.at(-1)[1]){
           ans.at(-1)[1] = Math.max(end, ans.at(-1)[1])
       }else{
            ans.push([start,end])        
        }
    }
    
    return ans
};
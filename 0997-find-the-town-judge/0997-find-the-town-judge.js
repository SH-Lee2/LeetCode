/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    // 방향 그래프 , [1,2] 1는 2를 믿지만 2는 1일 믿지 않는다 즉 2는 판사! 
    
    // 판사 조건1. 아무도 믿지 않는다.
    // 판사 조건2. 모두 자기를 믿는다.
    let ans = -1
    
    const people = new Map()
    const count = new Map()
    
    for(let i=1; i<=n; i++){
        people.set(i,[])
    }
     for(let i=1; i<=n; i++){
        count.set(i,0)
    }
    
    trust.forEach(p=> {
        people.get(p[0]).push(p[1])
        count.set(p[1], (count.get(p[1])||0)+1)
    })
    
    for(const [key, value] of people){
        if(value.length === 0){
            if(count.get(key) ===  n-1) return key
            else return -1
        }
    }
    
    return ans
};
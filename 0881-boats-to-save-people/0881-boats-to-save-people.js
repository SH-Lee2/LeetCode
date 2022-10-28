/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    /**
    * 최대 2명! 한도는 2명의 합 <= limit
    * 투 포인트 알고리즘으로 푼다.
    */
    
    //people 오름차순 정렬
    people.sort((a,b) => a-b)
    // boat 개수를 담는 변수 초기화
    let boatCount = 0
    // left, right 변수 초기화
    let left = 0, right = people.length -1
    // while(left <= right) 순회
    while(left <= right) {
        // people[left] + people[right] > limit 이면 boat+1, right-- 
        if(people[left] + people[right] > limit) {
            right--
        }else{
        // people[left] + people[right] <= limit 이면 boat + 1, left++, right-- 
            left++
            right--
        }
        boatCount++
    }
    return boatCount    
};
/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    // 각 행과 열의 숫자가 동일한 경우 카운팅 , 이때 정렬 순서도 같아야 함 

    const dic = new Map()

    // 각 행 dic에 저장
    for(const row of grid){
        const key = row.join('0')
        dic.set(key, (dic.get(key)||0)+1)
    }

    let ans = 0

    // 각 열 dic에서 찾아서 있다면 ans 에 value 더하기
    for(let col=0; col<grid.length; col++){
        let key = ''
        for(let row=0; row<grid[0].length; row++){
            if(row !== 0) key += '0' + grid[row][col]
            else key += grid[row][col]
        }
        console.log(key)
        ans += dic.get(key) || 0
    }

    return ans
};

// 각 행의 값을 key로 Map에 저장, 중복 되는 key인 경우 value + 1

// 3122 - 1
// 1445 - 1
// 2422 - 1
// 2422 - 2

// Map 에서 각 열의 값을 key로 가지고 있는지 체크 있다면 value 더하기

// 3122 - o 1
// 1444 - x 
// 2422 - o 2
// 2522 - x

// 11 1 
// 1 11
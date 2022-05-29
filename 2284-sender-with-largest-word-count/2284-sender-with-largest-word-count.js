/**
 * @param {string[]} messages
 * @param {string[]} senders
 * @return {string}
 */
var largestWordCount = function(messages, senders) {
    let list = {} 
    senders.map((name,idx)=>{
        const messageLen = messages[idx].split(' ').length
        list[name] = (list[name] || 0) + messageLen
    })
    let arr = [] 
    for(const [key,val] of Object.entries(list)){
        arr.push([key,val])
    }
    arr.sort((a,b)=>b[1] - a[1])
    let res = arr[0]
    for(let i=1; i<arr.length; i++){
        if(arr[i][1] < res[1]) break;
        // 이름 크기 비교
        if(res[0] < arr[i][0]) res = arr[i];
    }
   return res[0];
};
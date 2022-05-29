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
    const maxVal = arr[0][1]
    arr = arr.filter((v)=>v[1] === maxVal)
    arr.sort()
    return arr[arr.length-1][0]
};
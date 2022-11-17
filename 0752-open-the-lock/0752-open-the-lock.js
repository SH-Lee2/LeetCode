/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    const seen = new Set(deadends);

     if (seen.has("0000")) {
        return -1;
    }
    
    const neighbors = node => {
        const ans = [];
        for (let i = 0; i < 4; i++) { // '0000'
            const num = node[i];
            for (const change of [-1, 1]) {
                let x = (+num + change + 10) % 10
                ans.push(node.slice(0, i) + x + node.slice(i + 1));
            }
        }
        return ans;
    }
    
    seen.add("0000");
    let queue = ["0000"];
    
    let steps = 0;
    
    while (queue.length) {
        let currentLength = queue.length;
        let nextQueue = [];
        
        for (const node of queue) {
            if (node == target) {
                return steps;
            }

            for (const neighbor of neighbors(node)) {
                if (!seen.has(neighbor)) { // 왔던데 중복 x, deadends x 
                    seen.add(neighbor);
                    nextQueue.push(neighbor);
                }
            }
        }
        
        steps++;
        queue = nextQueue;
    }
    
    return -1 // target에 도달할수 없을때
};
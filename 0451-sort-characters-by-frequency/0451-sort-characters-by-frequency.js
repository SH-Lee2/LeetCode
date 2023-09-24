/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const frequencyMap = new Map()

    s.split('').forEach(char=>frequencyMap.set(char,(frequencyMap.get(char)||0)+1))

    const sortFrequency = [...frequencyMap.entries()].sort((a,b)=> b[1] - a[1])

    return sortFrequency.map(([char, count])=>char.repeat(count)).join('')
};
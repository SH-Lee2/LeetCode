var hasAllCodes = function(s, k) {
    const n = s.length;
    const kCodes = new Set();
    
    for (let i = 0; i + k <= n; i++) {
        kCodes.add(s.slice(i, i + k));
    }
    
    return kCodes.size === Math.pow(2, k);
};
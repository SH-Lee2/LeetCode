var hasAllCodes = function(s, k) {
    const binaryCodes = new Set();
    
    for (let i = 0; i<= s.length-k; i++) {
        binaryCodes.add(s.slice(i,i+k));
    }
    return binaryCodes.size === Math.pow(2, k);
};
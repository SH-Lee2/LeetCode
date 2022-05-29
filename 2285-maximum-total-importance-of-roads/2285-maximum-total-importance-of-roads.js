var maximumImportance = function(n, roads) {
    const degree = new Array(n).fill(0);
    
    let result = 0;
    
    for(let [i, j] of roads){
        degree[i]++;
        degree[j]++;
    }
	
    degree.sort((a,b)=>a-b);
	

     for (let i = 0; i < n; ++i)
	 
		 /* i+1 with least possible number (i) because it holds least possible rank that (means value of i with 
		 degree[i]) gradually increments as rank goes by - as simple as that */
        result += degree[i] * (i + 1);
		
    return result;
    
};
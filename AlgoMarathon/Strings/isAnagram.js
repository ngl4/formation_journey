var isAnagram = function(s, t) {
    let fMap = new Map(); 
    for (let i = 0; i < s.length; i++) {
        let count = fMap.get(s[i]) || 0; 
        count ++; 
        fMap.set(s[i], count); 
    }
    
    for (let j = 0; j < t.length; j++) {
        let count = fMap.get(t[j]) || 0; 
        if (count > 0) {
            count--; 
            fMap.set(t[j], count); 
        }else {
            if (fMap.has(t[j])) {
                fMap.delete(t[j]); 
            }else {
               count++;
               fMap.set(t[j], count);   
            }
        }
        
    }
    
    for (const char of fMap) {
        console.log(char[1]); 
        if (char[1] > 0) {
            return false; 
        }
    }
    
    return true; 
};
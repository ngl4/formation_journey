/*
 Current Solution: 
 T: O(N)
 S: O(N)

 */
 var isAnagram = function(s, t) {
    let freqMap = new Map(); 
    for (let char of s) {
        let count = freqMap.get(char) || 0; 
        count++;
        freqMap.set(char, count); 
    }
    for (let char of t) {
        let count = freqMap.get(char) || 0; 
        count--; 
        freqMap.set(char, count); 
    }
    for (let value of freqMap) {
        if (value[1] !== 0) {
            return false;
        }
    }
    return true; 
};
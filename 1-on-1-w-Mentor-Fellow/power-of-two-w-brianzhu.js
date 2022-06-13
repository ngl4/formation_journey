var isPowerOfTwo = function(n) {
    //base case
    if (n === 1)  return true;  
    if (n % 2 !== 0 || n === 0) return false; //if n is 6, it will keep dividing until it gets to 3, 3 % 2 === 1, so return false 

    //recursive case 
    return isPowerOfTwo(n/2)         
};

//It is interesting to view how n and how recursive case is working behind the scene through console.logging, (I have also tried to test to see if I do not have 'return' for the recursive case, it basically will only return true at the deepest level, and then return undefined in the other level since no values are returned back to the top): 

var isPowerOfTwo = function(n) {
    //console.log("1: ", n); 
    //base case
    if (n === 1)  return true; 
    if (n % 2 !== 0 || n === 0) return false; 
    //console.log("2: ", n); 

    //recursive case 
    let bool = isPowerOfTwo(n/2)   
    //console.log("3: ", n, bool);  
    return bool; 
};
/*
Given an array and a target count X, return the number of elements that is repeated exactly X times.
Function Signature: 
function numElementsRepeatedX(input, target)

Examples:
[1, 2, 3, 1, 2, 3], 2 => 3
[1, 2, 3, 1, 2, 3], 3 => 0

[1, 3, 3, 5, 5, 5, 5, 5, 3], 3 => 1
1: 1
3: 3
5: 5
numOfRep = 1

if currRep === target + 1
  numRep = numRep - 1


[1, 2, 3, 1, 2, 3], 2 => 3
1: 2
2: 2
3: 2
count === target (2=2)
numOfRepeatedElems = 3

[1, 2, 3, 1, 2, 3], 3 => 0
1: 2
2: 2
3: 2
count !== target
numOfRepeatedElems = 0

assume the array.length > 1
Exactly the same as target


[1, 2, 3, 1, 2, 3], 2 => 3

create the numOfRep variable = 0;
create a map 
iterate through the input array
    set up a count(currRep) variable (to see if the arr[i] existed in the map, OR 0 if not in map) + 1 
    
    store the arr[i] key, and count into the map

    if count === target 
      numOfRep++
    if count === target + 1
      numOfRep--; 
      
reutrn numOfRep; 

Time: O(n)
Space: O(n)
*/

function numElementsRepeatedX(input, target) {
    let numOfRep = 0;
    let numMap = new Map(); 
    for (let i = 0; i < input.length; i++) {
      const count = (numMap.get(input[i]) || 0) + 1; 
      numMap.set(input[i], count); 
      if (count === target) numOfRep++;
      if (count === target + 1) numOfRep--;
    }
  return numOfRep;  
  }
  
  console.log(numElementsRepeatedX([1, 2, 3, 1, 2, 3], 2), 3); 
  console.log(numElementsRepeatedX([1, 2, 3, 1, 2, 3], 3), 0); 
  console.log(numElementsRepeatedX([1, 3, 3, 5, 5, 5, 5, 5, 3], 3), 1); 
  
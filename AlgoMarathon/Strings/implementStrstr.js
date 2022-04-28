/*

Given a string and a target search string, return the index of the first occurrence of the target string in the given string
Function Signature:
function strStr(given: String, target: String) -> Int


▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
✏️ Description
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Q. Given a string, return the index of the first occurrence of a target string. Return -1 if the input string does not contain the target string.

Examples:
• Given a string: "hello", target: "ll" // returns 2
• Given a string: "formation", target: "afor" // returns -1


- does cases matter? assume no, it does not really matter with the cases (let just assume they are all set to lower case)
- empty string -> -1
- does the string takes into the consideration of other characters other than alphabets? assume no, only alphabets


i
h e l l o
  

target: 'll' 



Plain English: 
We need to find the first index of a target string within a given string. 
The target string can be in any length with any string characters. 
By iterating through the given string, we can set the substring 
based on the length of the target string using the slice method. slice(index, length)
Be aware the slice second param length will change depends on every iteration 
Compare the substring with the target string, if they match up, 
return the index value of the given string (where the pointer i is pointing to)
if no match is found at the end of the iteration, return -1 


Pseudocode: 

iterate through the given string 
find the length of the target string (t_length)
slice the given string based on the target string length 
compare the slice value with the target string: 
  if they match, then return i 
  else:
    move to the next index of the given string until it reaches the t_length (first, second, third...) last of the given array 
If no match found, return -1

*/

function findFirstTargetIndex(givenString, targetString) {
    let givenLength = givenString.length; 
    let targetLength = targetString.length
    for (let i = 0; i < givenLength - targetLength + 1; i++) {
      // console.log(i, givenString);
      let tempStr = givenString.toLowerCase(); 
      // console.log(tempStr, targetLength); 
      let subStr = tempStr.slice(i, i + targetLength); //took me longer at this line
      // console.log(subStr);
      if (subStr === targetString) return i; 
    }
    return -1;
  }
  
  console.log(findFirstTargetIndex("hello", "ll"), 2);
  console.log(findFirstTargetIndex("formation", "afor"), -1);


  /*
  Progress note: 

  15 mins: Understanding the problem, doing visualizations, and pseudocoding 

  15 mins: coding up the solution and updating the pseudocode at the same time 

  *20 mins: to write up the plain English approach for this problem*

  Reflection: 
  I tend to realize my pseudocode is not thorough or clear enough to tackle what I need to do. 
  This leads to the problem while I am coding, I will also update the pseudocode simulatneously. 
  I think it is best if I can create a more clear/thorough pseudocode. 
  This can help me to reduce the time while coding up the solution 

  Future Attempts: 
  - Working on the same problem with less time 

  */
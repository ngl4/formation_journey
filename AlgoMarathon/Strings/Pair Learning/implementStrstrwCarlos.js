/* 
Given a string and a target search string, return the index of 
the first occurrence of the targetstring in the given string.
If the target is not in the given, return -1

Examples
"hello", target: "l" => 2
"hello", target: "ello" => 1

hell 
ello

 i
hello    ello
5        4

slice(start index, items)
slice(0, 4) -> hell
slice(1, 5) -> ello

psedocode: 
1. iterate through the given string 
2. find the target string length 
3. create a substring based on the length of the target string (using slice method)
4. compare the substring with the target string: 
    if match, return index 
5. if not match or once the iteration ends (substring.length > target.length), return -1

*/

"kadfkgja hello"
// Time: O(gt) | Space: O(t)

// function strStr(given, target) {
//   for (let i = 0; i <= given.length - target.length; i++) {
//     let substring = given.slice(i, i + target.length); 
//     if (substring === target) return i; 
//   }
//   return -1;
// }

/*
Time: O(gt) | Space: O(1)
i = 1, j = 1
"hello", target: "ello"
  i

 given[i + j] = l
 target[j] = l

 */
 
function strStr(given, target) {
  for (let i = 0; i <= given.length - target.length; i++) {
    for (let j = 0; j <= target.length; j++) {
      if (given[i+j] !== target[j]) break;
      if (j === target.length - 1) return i;
    }
  }
  return -1;
}


console.log(strStr("hello", "l"), 2)
console.log(strStr("hello", "ello"), 1)
console.log(strStr("hello world", " "), 5)
console.log(strStr("  hello world", " "), 0)
console.log(strStr("hello world", "hi"), -1)
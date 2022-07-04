/*
  Q. Given a string, find the longest palindromic substring. You may assume there is only one longest substring.
  
  Examples:
  
  Given a string: "babe" // returns"bab"
  Given a string: "aefez" // returns "efe"
  [execution time limit] 4 seconds (js)
  
  [input] string string
  
  [output] string
  
  longest palindromic substring
  
  
  Input:
  string: ""
  Expected Output:
  ""
  
  Input:
  string: "it's afternoon"
  Expected Output:
  "noon"
  
  Input:
  string: "kb12365456321bb"
  Expected Output:
  "b12365456321b"
*/
  
  
  function longestPalidromicSubstring(str) {
    let res = ""; 
    let resLength = res.length; 
    
    for (let i = 0; i < str.length; i++) {
      let left = i; 
      let right = i;
      // console.log(i, str[left], str[right]); 
      //odd
      while (left >= 0 && right < str.length && str[left] === str[right]) {
        console.log("hey")
        let curr_length = (right - left) + 1; 
        if (curr_length > resLength) {
          resLength = curr_length; 
          res = str.substring(left, right + 1);
          console.log(res); 
        }
        left--; 
        right++; 
      }
      //even
      left = i; 
      right = i + 1;    
      while (left >= 0 && right < str.length && str[left] === str[right]) {
        console.log(left, right); 
        let curr_length = (right - left) + 1; 
        if (curr_length > resLength) {
          resLength = curr_length; 
          res = str.substring(left, right + 1);
        }
        left--; 
        right++; 
      }    
    }
    return res; 
  }
  
  
  
  
  //MY APPROACH - FAILED!! - TRYING TO DO THIS recursively
  // function solution(string) {
  //   let res = ""; 
  //   let maxSubstr = 0; 
  //   let isPalidromic = false; 
  
  //   function helper(left, right) {
      //base case 
  //     if (left > right || isPalidromic === true) {
  //       if (maxSubstr < (right - left)) {
  //         maxSubstr = right - left; 
  //         res = string
  //       }
  //       return;
  //     }
      //isPalidromic check
  //     if (string[left])
  
      //recursive case
  //     helper(left + 1, right); 
  //     helper(left, right - 1); 
  //   }
  
  //   helper(0, string.length - 1);
  
  //   return res; 
  // }
  
  // console.log(longestPalidromicSubstring("babe")); 
  console.log(longestPalidromicSubstring("cbbe")); 
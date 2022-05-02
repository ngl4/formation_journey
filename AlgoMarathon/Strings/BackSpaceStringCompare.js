/*
Algo: Backspace String Compare

Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Example 1:

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
Example 2:

Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".
Example 3:

Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".

*/

//Attempt 1 (failed) - the following is the brute force approach from other submission on Leetcode 

var backspaceCompare = function(s, t) {
    let firstString = '';
    let secondString = '';
    
    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        if(char !== '#') {
            firstString += char;
        } else {
            firstString = firstString.slice(0, -1);
        }
    }
    
    for(let i = 0; i < t.length; i++) {
        const char = t[i];
        if(char !== '#') {
            secondString += char;
        } else {
            secondString = secondString.slice(0, -1);
        }
    }
    
    return firstString === secondString;
};

/*
Progress Notes: 

Time: O(s^2 + t^2) Space: O(1) 
There is an iteration of the entire string (O(n) time) and the nested js ".slice" method is considered a O(n) time complexity 

25mins: I have used the time to try to code out the O(s + t) time and O(1) space approach but with no success. 
Then, I try to see if I can just solve the problem, but I think I am not progressing at all. 

5mins: reviewed through the solution generally and review through one of the submission that I find a little easier to understand
But the time complexity is not good. 

Future attempts: 
- solve the problem with O(s + t) time and O(1) space 
- review the solution in Leetcode to fully understand the pattern  

*/
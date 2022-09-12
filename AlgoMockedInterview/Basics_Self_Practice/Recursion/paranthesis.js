/** ATTEMPT WITHOUT LOOKING 
 * @param {number} n
 * @return {string[]}
 
 (  = open 
 )  = close
 
 n = 1
 "()" = 1 open 1 close 
 
 n = 2
 "(())", "()()" = 2 open 2 close
 
 n = 3
 "((()))","()()()", .... 3 open 3 close
 
 */
var generateParenthesis = function (n) {
  let res = [];
  function backtrack(open, close, stack) {
    if (open === close && open === n) {
      res.push([...stack].join(""));
      return;
    }
    if (open < n) {
      stack.push("(");
      backtrack(open + 1, close, stack);
      stack.pop();
    }
    if (close < open) {
      stack.push(")");
      backtrack(open, close + 1, stack);
      stack.pop();
    }
  }
  backtrack(0, 0, []);
  return res;
};
/*
o:3   c:3
res = ["((()))",]
stack=["((())"]

*/

/** ATTEMPT 
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  //Watched Neetcode for the following solution
  //Add parathesis when open < n
  //Remove parathesis when close < open
  //valid when open === close === n
  let stack = [];
  let res = [];

  function backtrack(open, close) {
    if (open === close && open === n && close === n) {
      res.push(stack.join(""));
      return;
    }

    if (open < n) {
      stack.push("(");
      backtrack(open + 1, close);
      stack.pop();
    }

    if (close < open) {
      stack.push(")");
      backtrack(open, close + 1);
      stack.pop();
    }
  }

  backtrack(0, 0);
  return res;
};

/*

( +1 open 
) -1 close 
1 wellformed pair = 0

edge case: 
)( = not a a pair => cannot begin with negative num
negative num should not exist




1
() = 1

1-1

2
()(), (()) = 2
1-1+1-1.  1+1-1-1

3
((())),()()(),(()()),(())(),()(()) = 5





*/

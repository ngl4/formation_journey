// Dynamic Programming PDF: https://www.byte-by-byte.com/wp-content/uploads/2019/04/Dynamic-Programming-for-Interviews.pdf
//
//
// 1. First solution (NO CACHE)
//   Naive
//   Recursive
// 2. Analyze the first solution
//   See if it works, and see its runtime complexity
// 3. Identify the Subproblems
//   See what you could memoize (cache)
//      Saving the results of work you did before (pure function)
//
//   "Top down" DP solution
// 4. Turn the solution around
//   Bottom-up iterative solution without recursion, using a "DP Matrix"
//
//
// Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.
//
// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.
//
// For example, "ace" is a subsequence of "abcde".
// A common subsequence of two strings is a subsequence that is common to both strings.

// //    ++..+
// t1 = "ababcd"
// //    ++v
// t2 = "abc"
// r = 3
// /*
// "abeeeeeebcd"
// "abbcdeeeeee"
// */
// t1 = "ace"
// t2 = "abc"
// r = 2

// t1 = "abc"
// t2 = "def"
// r = 0

// t1 = "aaa"
// t2 = "abb"
// r = 1

// t1 =""
// t2 = "abb"
// r = 0

/*         v
 str1 = 'azc'
 str2 = 'ab'

i = 0
j = 0

str1[i]==0] == "a"
str2[j]==0] == "a"
match, so count: 1

i++
j++

str1[i]==1] == "z"
str2[j]==1] == "b"

two branches:
  - j++ and not i
  - i++ and not j

  - pick the bigger branch (max)
*/

function lcs(t1, t2) {
  let counts = [0];
  let cache = {};

  function dfs(i, j) {
    const key = `${i}-${j}`;
    if (cache[key] !== undefined) {
      return cache[key];
    }

    counts[0] += 1;
    if (i >= t1.length) return 0;
    if (j >= t2.length) return 0;

    if (t1[i] === t2[j]) {
      cache[key] = 1 + dfs(i + 1, j + 1);
    } else {
      cache[key] = Math.max(dfs(i, j + 1), dfs(i + 1, j));
    }
    return cache[key];
  }
  const ret = dfs(0, 0);
  console.log("this took", counts, "comparisons");
  return ret;
}

console.log(lcs("abc", "abcdefabc"), 3);
console.log(lcs("aaa", "abb"), 1);
console.log(lcs("abc", ""), 0);
console.log(
  lcs("abc", "ajiojwoiefjiowejfioewjfiobwjieofjoiewjfiewjfoicjiweofjoiwef"),
  3
);
console.log(
  lcs(
    "abcjiofjawofiejawoeifjaowef",
    "ajiojwoiefjiowejfioewjfiobwjieofjoiewjfiewjfoicjiweofjoiwef"
  ),
  3
);

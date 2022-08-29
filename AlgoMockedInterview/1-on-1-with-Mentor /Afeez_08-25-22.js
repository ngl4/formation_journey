/*
You are given a nested list of integers nestedList. Each element is either an integer or a list whose elements may also be 
integers or other lists. Implement an iterator to flatten it.

Implement the NestedIterator class:

- NestedIterator(List<NestedInteger> nestedList) Initializes the iterator with the nested list nestedList.
- int next() Returns the next integer in the nested list.
- boolean hasNext() Returns true if there are still some integers in the nested list and false otherwise.

Your code will be tested with the following pseudocode:

initialize iterator with nestedList
res = []
while iterator.hasNext()
    append iterator.next() to the end of res
return res
 
If res matches the expected flattened list, then your code will be judged as correct.

Example 1:

Input: nestedList = [[1,1],2,[1,1]]
Output: [1,1,2,1,1]
Explanation: By calling next repeatedly until hasNext returns false, 
the order of elements returned by next should be: [1,1,2,1,1].

Example 2:

Input: nestedList = [1,[4,[6]]]
Output: [1,4,6]
Explanation: By calling next repeatedly until hasNext returns false,
the order of elements returned by next should be: [1,4,6].


next 

hasNext 

[1, 4, 6]

[1,[4,6]]

 ^

 number vs array

 //item.length 

 Recursion (DFS)

 base case: when it has reached the end of the array 

 recrusive: everytime it is an array,

 dfs(i + 1)

 Array.isArray()


 edge case: object

 */

 let num = 3
 console.log(num.length);
 console.log(Number([1,2])); 

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
     1
[1, [2, 17, 7], 4]
class NestedIterator {
  constructor(nestedList) {
      this._flattenList(nestedList)
  }

  _flattenList(nestedList) {
      let res = []; 

      
      function dfs(nestedList, age) {
        //recursive call when the list item is an array 
        //dfs(nestedList)

        age++; //21


        for (let i = 0; i < nestedList.length; i++) {
          if (!Array.isArray(nestedList[i])) {
            res.push(nestedList[i]); 
          } else {
            dfs(nestedList, age);
          }

        }

        
      }
      dfs(nestedList, 19)
      return res; 
  }

  hasNext() {
      return this._position < this._integers.length;
  }

  next() {
      if (!this.hasNext()) return undefined;
      
      return this._integers[this._position++];
  }
}

let list = new NestedIterator([[1,1],2,[1,1]])


[1, [2, 17, 7], 4]

res = [1,2, 17, 7]

// https://leetcode.com/problems/flatten-nested-list-iterator/
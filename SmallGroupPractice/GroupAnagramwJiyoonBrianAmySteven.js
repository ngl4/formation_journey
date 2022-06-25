/*
Q. Given an array of strings, and a target word, return all of target's anagrams in the order it appeared.

Anagrams are strings formed by rearranging the letters of a different word or phrase. (e.g. LISTEN <-> SILENT, a <-> a)
Example:

Given an array: ["cat", "tac", "tic", "act"], word = "tca"
returns ["cat", "tac", "act"]

Input:
array: []
target: "abc"
Expected Output:
[]

Input:
array:
["cat", 
 "tac", 
 "tic", 
 "act"]
target: "tca"
Expected Output:
["cat", 
 "tac", 
 "act"]

Input:
array: ["a"]
target: "a"
Expected Output:
["a"]

Input:
array:
["ab", 
 "ba"]
target: "ab"
Expected Output:
[
  "ab",
  "ba"
]

1. questions
- case sensitive? - for now, case insensitive
- target empty string? - return empty array
- input array empty? - return empty array
- target can include same letters, maybe think about count of each letter in the target

2. come up with some solution? pseudocode, time/space complexity
- map?
1. sort each word in the array, sort the target word, and then just compare, and if it's a match then put in the output array
  - time: O(m * n log n + tlogt)
    - m = # of words in input, n = length of longest word, t = length of target
  - space: O(1)
  1b improve sorting - using counting sort, nlogn / tlogt can just become n / t respectively
  'WORD' target = 'word'
  - time: O(m * n + t)
  - space after sorting improvement: O(1), using a map, we're bounded to 26 chars O(m) 
  'word' 'word'


2. freq map of the target 
  iterate through each word in the input,
    iterate through each letter in the current word

      target word map:
        {
          w: 1, => 0
          o: 1, => 0
          r: 1, => 0
          d: 1 => 0
        }

        target 'aaa'
        input = ['a']
        output = []

      current word: 'dorw'
      - check if letter in map
        - it is in map
          - decrement freq by 1
        - it is NOT in map
          - exit early
      at the end, check the map and see if sum of all map values is 0

question: how do we preserve the original target map? 


var newMap = new Map(existingMap)

target = 'aa' -> 2
input = ['b'] -> 2


*/

function findAnagrams(words, target) {
    const freqMap = new Map();
    const result = [];
    
    // building the freq map for the target
    for (let i = 0; i < target.length; i++) {
      const count = (freqMap.get(target[i]) || 0) + 1;
      freqMap.set(target[i], count); 
    }
  
    // console.log(freqMap)
  
    // iterating through each word
    wordLoop:
    for (let i = 0; i < words.length; i++) {
      let freqMapCopy = new Map(freqMap);
      let word = words[i]
      // iterating through each letter in CURRENT word
      for(let j = 0; j < word.length; j++) {
        let currLetter = word[j]
        // letter is IN map
        if (freqMapCopy.has(currLetter)) { 
  
          let count = freqMapCopy.get(currLetter);
          freqMapCopy.set(currLetter, count-1);
  
        } else continue wordLoop; // letter is NOT in map, this word can't ever be an anagram. 
      }
      // at the end, check the map and see if sum of all map values is 0
  
      // let sum = 0
      for (let value of freqMapCopy.values()) {
        // sum += value
        if (value !== 0) continue wordLoop
      }
  
      result.push(word)
    }
    
    return result;
  }
  // time: O(m * (n + t)) t = length of target, m = len of input, n = len of word
  // space: O(1) or O(m)
  
  
  
  console.log(findAnagrams(['aaa', 'aa', 'aba', 'ba', 'bba', 'ab'], 'ab')) // ['ba', 'ab']
  console.log(findAnagrams(['cat', 'tac', 'tic', 'act'], 'tca')) // ['cat', 'tac', 'act']
  console.log(findAnagrams([], 'tca')) // []
  console.log(findAnagrams(['aaa', 'aa', 'aba', 'ba', 'bba', 'ab'], '')) // []
  
  
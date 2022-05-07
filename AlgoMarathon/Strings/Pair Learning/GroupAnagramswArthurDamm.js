/*

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]

*/

var groupAnagrams = function(strs) {
    let anagramGroups = {}; 
    for (const word of strs) { //eat, tea
        const sortedWord = word.split('').sort().join(''); //aet //sort can only use to sort an array but not a string
        if (!anagramGroups[sortedWord]){ //if it does not existed, it will return undefined (false), else return a value (true)
            anagramGroups[sortedWord] = []; //aet: [eat]
        }
        anagramGroups[sortedWord].push(word); 
    }
    return Object.values(anagramGroups); 
}; 
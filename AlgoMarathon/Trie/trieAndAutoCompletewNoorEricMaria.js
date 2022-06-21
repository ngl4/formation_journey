  /*
     - implementation of trie 
     - searching a word in trie 
     - insert a word in trie 
     - problems on trie on leetcode 
  */
  
  /*
     hello => tree
     help 
     ego 
  
      root = null 
      children  h, e  
              /      \ 
              e        g
              /         \ 
              l         o* 
              /  \ 
              l   p* 
              / 
              o* 
      root : {
          h: {
            e: 
            {
              l: {
                l: {
                  o: {}
                }
                endofWord
                , 
                {
                  p: {}
                }
              }
            }
          }
       }
    
  */
  
  class Node {
    constructor () {
      this.children = {};
      this.endOfWord = false;
    }
  }
  
  class Trie {
    constructor () {
      this.root = new Node();
    }
    // second 
    /*
    
    char = root
    iterate through word
      if char does not exist as a child of the current node, return false
      curr = curr.children[char]
  
    at end of iteration, return curr.endOfWord
    */
    search(word) {
      let curr = this.root;
      for (const char of word) {
        if (!curr.children[char]) {
          return false;
        }
        curr = curr.children[char];
      }
      return curr.endOfWord;
    }
  
    // first 
    /*
      - curr = this.root;
      - iterate through the word
        - grab the current character 
          - check if currChar in curr.children 
            - if not -> add it to children 
          - curr = curr.children[currChar]
      - curr.endOfWord = true;
    */
    insert (word) {
      let curr = this.root;
  
      for (const char of word) {
        if (!curr.children[char]) {
          curr.children[char] = new Node();
        }
        curr = curr.children[char];
      }
      curr.endOfWord = true;
      return true;
    }
  
    /*
  
    DFS - pre-order traversal (root -> Left -> Right)
    if !hasPrefix(prefix) return null;
    results = []
    curr = this.root;
    - solution (currString = "", currNode) // [hello, hego] (he), e ...
      - base case 
        when we've reached the end of the word (curr.endOfWord === true)
          - results.push(currstring)
          - currstring = ""
          - return results
      - recursive case
        for (let letter in curr.children) {
          let obj = curr.children[letter];
          currString += letter; // "" + h + e + l
          solution(currString, obj); // h, {e...} //he, {l...} //hel, {l...}
        } 
    solution("", curr)
    return results;
  
    solution()      solution()      solution()
    hello                help             hego
  
    */
    hasPrefix (prefix) {
      let curr = this.root;
      for (const char of prefix) {
        if (!curr.children[char]) {
          return false;
        }
        curr = curr.children[char];
      }
      return true;
    }
    /*
    if !hasPrefix(prefix) return null;
    results = []
    curr = this.root;
    - solution (currString = "", currNode) // [hello, hego] (he), e ...
      - base case 
        when we've reached the end of the word (curr.endOfWord === true)
          - results.push(currstring)
          - currstring = ""
          - return results
      - recursive case
        for (let letter in curr.children) {
          let obj = curr.children[letter];
          currString += letter; // "" + h + e + l
          solution(currString, obj); // h, {e...} //he, {l...} //hel, {l...}
        } 
    solution("", curr)
    return results;
    */
  
    fetchWordsStartingWith(prefix) {
      if (!this.hasPrefix(prefix)) return null;
      const results = [];
      let curr = this.root;
      for (let i = 0; i < prefix.length; i++) {
        curr = curr.children[prefix[i]];
      }
      function solution (currString = [prefix], currNode) {
        if (currNode.endOfWord) {
          results.push(currString[0]);
        } 
        for (let letter in currNode.children) { // 
          let obj = currNode.children[letter];
          currString[0] += letter;  // choose the first character  
          solution(currString, obj); // build the string with the chosen character
          currString[0] = currString[0].slice(0, -1); // unchoose the first character
        }
      }
      solution ([prefix], curr);
      return results;
    }
  }
  
  let trie = new Trie();
  trie.insert("hello");
  trie.insert("hells");
  trie.insert("helo");
  trie.insert("hego");
  trie.insert("hola");
  console.log(trie.fetchWordsStartingWith('he')); // ['hello', 'hego']
  // // console.log(JSON.stringify(trie));
  // console.log(trie.search('he'), false);
  // console.log(trie.search('hello'), true);
  // console.log(trie.search('f'), false);
  // console.log(trie.hasPrefix("he"), true);
  // console.log(trie.hasPrefix("f"), false);
  // console.log(trie.contains("hello"));
  // console.log(trie.contains("hego"));
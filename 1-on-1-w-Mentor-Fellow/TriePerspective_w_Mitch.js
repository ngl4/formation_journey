/*
This is a super great session to look at how Mitch visualize the Trie data structure 

It is always great to listen to a different perspective on the problem. It can be hard to see it clearly when doing it by myself

But once I hear others speaking through the problem, it helps me to be able to see things in their perspectives as well as in a second-person perspective 


Build a Trie class. Insert new strings and Search if strings exist.
*/

// const map = new Map();
// map.set('c', new Map());
// console.log({map})
// let children = map.get('c');
// // console.log({children})
// children.set('a', new Map());
// children = children.get('a')
// console.log({map})
// children.set('t', new Map());
// console.log({children})



class Trie {
    constructor() {
      map = new Map();  
    } 
  
    add(word) {
      // for each char we will
        // first you have to check if the chars exist map
          // no:
            // assign the map to chars children
          // yes:
            // we will add char to our to curr map
            // assign the map to curr chars children 
    }
  
    lookup(word) {
      //do something
    }
  }
  
  
  // const trie = new Trie()
  // trie.add("cat")
  // trie.lookup("cat") == true
  // trie.lookup("dog") == false
  // trie.add("dog")
  // trie.lookup("dog") == true
  
  
  /*
  input: cat
  add(cat)
  cat
    ^
   
  lookup(cat)
  cat
    ^
  return true
  
  add(cats)
  cats
     ^
  
  add(tats)
  tats
     ^
  
  add(tap)
  tap
    ^
  
  search(tap)
  tap
     ^
  
  tree: {
  t: {
    a : {
      t: {
        s: {}
      }
      p: {endWord: true}
    }
  }
    c: {
      a: {
        t: {
          s: {endWord: true}
       }
      }
    }
  }
  
  
            c      t 
           /        \
          a          a
         /          /  \ 
        t          p     t
       /                  \  
      s                    s 
  */

# Build a trie class. Add/Insert new strings and Lookup/Search if strings exist.

# class Trie {

#   add(word) {

#   }

#   lookup(word) {

#   }
# }

# const trie = new Trie()
# trie.add("cat")
# trie.lookup("cat") == true
# trie.lookup("dog") == false
# trie.add("dog")
# trie.lookup("dog") == true

# console.log(trie); 

class TrieNode:
    def __init__(self):
        self.children = {}
        self.endOfWord = False


class Trie:

    def __init__(self):
        self.root = TrieNode()

    def add(self, word: str) -> None:
        cur = self.root
        for c in word:
            if c not in cur.children:
                cur.children[c] = TrieNode()
            cur = cur.children[c]
        cur.endOfWord = True


    def lookup(self, word: str) -> bool:
        cur = self.root
        for c in word: 
            if c not in cur.children: 
                return False
            cur = cur.children[c]
        return cur.endOfWord



        '''
        root
        [{c: __, a: ___, b: ___}]
        /
    [{o:__, a:__}]
    /           \
 [{t:__}].    [ {t:__}]
 |.                 \
                    [{s:___}, endOfWord: True]
 [{s:___}, endOfWord: True ]
  |
[{}, endOfWord: True]
        '''
# const trie = new Trie()
# trie.add("cat")
# trie.lookup("cat") == true
# trie.lookup("dog") == false
# trie.add("dog")
# trie.lookup("dog") == true

# console.log(trie); 

t = Trie()
t.add('cat')
print(t.lookup('cat'))
print(t.lookup('dog'))
t.add('dogs')
print(t.lookup('dog'))
print(t.lookup('hello'))
/*

The programming interface for a legacy motor controller accepts commands as binary strings of variable length. The console has a very primitive autocomplete autocorrect feature: given an incomplete command, it will display possible commands that has the incomplete command as a prefix. For example, if '1010' is a possible command and the user enters '10', the interface should return '1010' as a possible autocomplete result.

Implement a data structure that will allow us to efficiently query possible autocomplete results given an incomplete input.

Examples:

Possible commands = ['000', '1110', '01', '001', '110', '11']

Input -> Output
'0' → ['000', '01', '001']
'1' → ['1110', '110', '11']
'00' → ['000', '001']

Trie
                  __
          0                1
        0   1e            1 
      0  1e           1
    end            0
                  end

O(n) - go through all the characters once 
n = the number of total characters 

You only need to build the trie once 


AutoComplete function (prefix) => [found commands]

FIND NODE - node that matches the prefix (iterate through the prefix first)
FIND ALL THE DECISION PATHS - Then, start doing the recursive (going through all the decision paths)

{
  "commands": [
    "000",
    "1110",
    "01",
    "001",
    "110",
    "11"
  ],
  "root": {
    "value": null,
    "isTerminal": false,
    "zero": {
      "value": "0",
      "isTerminal": false,
      "zero": {
        "value": "0",
        "isTerminal": false,
        "zero": {
          "value": "0",
          "isTerminal": true,
          "zero": null,
          "one": null
        },
        "one": {
          "value": "1",
          "isTerminal": true,
          "zero": null,
          "one": null
        }
      },
      "one": {
        "value": "1",
        "isTerminal": true,
        "zero": null,
        "one": null
      }
    },
    "one": {
      "value": "1",
      "isTerminal": false,
      "zero": null,
      "one": {
        "value": "1",
        "isTerminal": true,
        "zero": {
          "value": "0",
          "isTerminal": true,
          "zero": null,
          "one": null
        },
        "one": {
          "value": "1",
          "isTerminal": false,
          "zero": {
            "value": "0",
            "isTerminal": true,
            "zero": null,
            "one": null
          },
          "one": null
        }
      }
    }
  }
}


O(M + N) where M is the length of your prefix and N is the total number of characters in the subtree under the prefix node

*/

class TrieNode {
    constructor(value = null, isTerminal = false, zero = null, one = null) {
      this.value = value;
      this.isTerminal = isTerminal;
      this.zero = zero;
      this.one = one;
    }
  }
  
  class Trie {
    constructor(commands) {
      this.root = new TrieNode();
      this._buildTrie(commands);
    }
  
    _insertCommandIntoTrie(command) {
      let node = this.root;
  
      for (const char of command) {
        if (char === '0') {
          if (!node.zero) node.zero = new TrieNode('0');
          node = node.zero;
        } else if (char === '1') {
          if (!node.one) node.one = new TrieNode('1');
          node = node.one;
        }
      }
      
      node.isTerminal = true;
    }
  
    _buildTrie(commands) {
      for (const command of commands) {
        this._insertCommandIntoTrie(command);
      }
    }
  
    _findNodeMatchingPrefix(prefix) {
      let node = this.root;
      
      for(const char of prefix) {
        if (!node) {
          return null;
        }
  
        if (char === '0') {
          node = node.zero;
        } else if (char === '1') {
          node = node.one; 
        }
      }
  
      if (!node) {
        return null;
      }
  
      return node; 
    }
  
    _findMatchingCommandsToPrefix(prefixNode) {
      const curVal = prefixNode.value;
  
      let leftMatchingCommands = [];
      let rightMatchingCommands = [];
  
      if (prefixNode.zero) {
        leftMatchingCommands = this._findMatchingCommandsToPrefix(prefixNode.zero);
      }
      if (prefixNode.one) {
        rightMatchingCommands = this._findMatchingCommandsToPrefix(prefixNode.one);
      }
  
      const allIncompleteCommands = leftMatchingCommands.concat(rightMatchingCommands).map(incompleteCommand => curVal + incompleteCommand);
      if (prefixNode.isTerminal) {
        allIncompleteCommands.push(curVal);
      }
  
      return allIncompleteCommands;
    }
  
    autocomplete(prefix) {
      const nodeMatchingPrefix = this._findNodeMatchingPrefix(prefix);
      if (!nodeMatchingPrefix) {
        return [];
      } else {
        return this._findMatchingCommandsToPrefix(nodeMatchingPrefix);
      }
    }
  }
  
  // time depends on the prefix 
  //n = number of characters in the subtree 
  
  const trie = new Trie(['000', '1110', '01', '001', '110', '11']);
  console.log(trie.autocomplete('00000'));
  
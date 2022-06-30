'''

Define a subsequence of a string s to be a list of characters from s such that the characters appear in the same order in the list and in s.

For instance, for the string abcd, a, ab, and acd are valid subsequences, whereas db is not, since b comes before d in the original string.

Given an input string, return all subsequences of the string.

Example:

getAllSubsequences("abc") == [
  "a",
  "b",
  "c",
  "ab",
  "ac",
  "bc",
  "abc",
]

- imagine you have a magic function that sovles your problem for the N-1
- what would you do with the output of said magic function to get to the answer for your N input

magicFunction("bc") => 

['b', 'c', 'bc']
['ab', 'ac', 'abc']
concat both together

call self with 1, str.length

the result from that call we want to append each el
to the char we're on and concatenate the two arrays

output size => 2^n

time complexity: 2^N
space complexity: N
where N is the length of the input string

all subsequences []

getAllSubsequences('abc')
    getAllSubsequences('bc')
        getAllSubsequences('c')

        function(n)
            var = function(n-1)
          return var + 1

include a
    include b
        include c       => abc
        exclude c       => ab
    exclude b
        include c       => ac
        exclude c       => a

exclude a
    include b
        include c       => bc
        exclude c       => b
    exclude b
        include c       => c
        exclude c       => ''

                                            root
                                    yes a               no a
                            yes b         no b        yes b      no b
                    yes c   no c        yes c no c  yes c no c  yes c   no c
      


'''

def getAllSubsequences(input):
    if len(input) == 1:
        return [input]
    
    result = [input[0]]

    for element in getAllSubsequences(input[1:]):
        result.append(element)
        result.append(input[0] + element)

    return result

print(len(getAllSubsequences("abcdef")))
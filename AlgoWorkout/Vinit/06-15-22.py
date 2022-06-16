'''

given an input N M to represent a grid of size N x M, find out how many unique paths can be taken to go from the top left of the grid to the top right of the grid
you can only move right, diagonally up/right, diagonally down/right

[4 2 1 0]
[_ 2 1 0]
[_ 1 0 0]

Given a set of characters, a minimum length, and a maximum length, generate all strings that can be created using characters from the set between the minimum and maximum lengths (inclusive).

Examples:

generatePasswords(["a"], 2, 4) == [
  "aa",
  "aaa",
  "aaaa",
]

generatePasswords(["a", "b", "c"], 2, 4) == [
  "aa",
  "aaa",
  "aaaa",
  "aaab",
  "aaac",
  "aab",
  "aaba",
  "aabb",
  "aabc",
  "aac",
  "aaca",
  "aacb",
  "aacc",
  "ab",
  ...
  "ac",
  ...
  "ba",
  ...
  "bb",
  ...
  "bc",
  ...
  "ca",
  ...
  "cb",
  ...
  "cc",
  ...
]

getPermutations(['a', 'b'], 2):
result = []
##base case 
 length of arr = 1
    return [arr.copy]

#iterate through list for i in range(string)
    pop first element store that value

   perm = getPermutation(string,2)

   want to check for possible combinaations
    for perms in perm:
        perms.append(n)
        #[b,a]
        #[a,b]
        result.extend(perms)
        string.append(n)
        #[b,a]
    
    return result

['a', 'b', 'c'] 3

getPerms(chars, 3):
    a: getPerms(chars, 2) => for each item in list, add 'a' to the front
        a: getPerms(chars, 1) => 
        b: getPerms(chars, 1) => 
        c: getPerms(chars, 1)
    b: getPerms(chars, 2) => for each item in list, add 'b' to the front
        a: getPerms(chars, 1) => 
        b: getPerms(chars, 1) => 
        c: getPerms(chars, 1)
    c: getPerms(chars, 2)
        a: getPerms(chars, 1) => 
        b: getPerms(chars, 1) => 
        c: getPerms(chars, 1)

['a', 'b', 'c'] 3
['a', 'b', 'c'] 2
length: 3


base case:
    length = 0 => return [""]

    const res = []
    for curChar in chars
        subPermutations = getPerms(chars, legnth - 1)
        for perm in subPermutations

        perm = [" "]
        add curChar to perm and push that into the result


    res = res.concat(getPerms(chars, length - 1).map(perm => curChar + perm))

return res

length^N

a, b, c, d, e        7

_ _ _ _ _ _ _
5 5 5 5 5 5 5

"fill" the first slot with first letter

a a
a b
b a 
b b 
_ _
_ _

[a b c]

getPerms([a b c], 3)

curChar: a
    getPerms([a b c], 2) => whatever this returns, we append a to the back and add to res
curChar: b
    getPerms([a b c], 2) => same but for b
curChar: c
    getPerms([a b c], 2) => same but for c => [aa ab ac bb ba bc cc ca cb]

we know that getPerms([a b c], 2) returns [aa ab ac bb ba bc cc ca cb]

- how am i trimming down my problem each time i recurse
- what is my base case, based on what i decided on how to trim my problem

- pretend you have a magic function that gives you the answer for N - 1
- how can I take the results of this magic function and create the answer for input N

getPerms([a b], 2)

pretend we have a function that gives us the answer for getPerms([a, b], 1)
[a, b]

how can we achieve [aa, ab, ba, bb]

- cycle through all our characters, and append each one to EACH of the recursive call's solutions
    a: [aa, ba]
    b: [ab, bb]
    return these up => 


''' 
# a,b,c = acb , bca , 
def getPerms(chars,length):
    if length == 0:
        return [""]

    res = []
    
    for curChar in chars:
        # print('curChar ')
        # print(curChar)
        subPermutations = getPerms(chars, length - 1)
        # print('subPermutations ')
        # print(subPermutations)
        # print('\n')
        for perm in subPermutations:
            perm += curChar
            res.append(perm)
        
    return res

def getPermsUsingCharOnce(chars,length):
    if length == 0:
        return [""]

    res = []
    
    for curChar in chars:
        # print('curChar ')
        # print(curChar)
        subPermutations = getPerms(chars[1:], length - 1)
        # print('subPermutations ')
        # print(subPermutations)
        # print('\n')
        for perm in subPermutations:
            # curChar += perm
            res.append(curChar + perm)
        
    return res


print(getPermsUsingCharOnce(['a', 'b', 'c'], 3))
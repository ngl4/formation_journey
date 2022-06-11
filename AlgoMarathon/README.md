# Algo Marathon

Welcome to Level 2 of Algo Blitz!!

## Tips & Tricks

- Don't spend more than 30 mins on a problem

- Learn by Problem Types

- Follow through the Formation Tasks, and practice more on Neetcode, Leetcode (sort by problem type and acceptance rate), AlgoExpert if needed.

- Try to walk through the problem in "English" to understand what it is asking

- Get a big picture/idea of all the data structures and algorithms (knowing generally all the existing tools)

## Primitive vs Non-Primitive Data types 

In JavaScript: 

- **Primitive**: a primitive (primitive value, primitive data type) is data that `is not an object` and `has no methods or properties`. Here are the 7 primitive data types: 
1. string
2. number
3. boolean
4. undefined 
5. symbol
6. null
7. BigInt

- **Non-Primitive**: data that `are derived from primitive data types`. Here are the 2 non-primitive data types: 
1. object
2. array 

- Read more [here](https://www.geeksforgeeks.org/primitive-and-non-primitive-data-types-in-javascript/)

## Data Structure Fundamentals (Big Picture)

**Linear Data Structures**: 
- Array
- Stack 
- Queue
- Linked List 

**Non-linear Data Structures**: 
- Trees 
    - Binary Tree
    - Binary Search Tree
- Graph     
- Trie 
- Heap
    - heap data structure provides an efficient implementation of priority queues

**Other Data Structures**: 
- Hashmap (key-value pair)
- Hashset (object contains only unique values)

[Here](https://github.com/KellzCodes/python/tree/main/data-structures#data-structures) is an additional resource from another programmer (Kelli)'s documentation on these data structures with more details! Feel free to check it out!! 

### Array 

- [Time Complexity of the common Js Operations and Methods](https://medium.com/@ashfaqueahsan61/time-complexities-of-common-array-operations-in-javascript-c11a6a65a168)

- Know what each **Js Built-in Methods** returning in its output through [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

```js

```

1. Inserting/Removing in Array:  
    - Beginning: O(n)
        - insert at beginning index 0: `unshift()`
        - remove at beginning index 0: `shift()`
    - End: O(1)
        - insert at the end: `push()`
        - remove at the end: `pop()`

2. Searching in Array: O(n)

3. Accessing/Updating in Array: O(1)

### Hashmap (Key-Value Pair Object)
- In Js, we have built-in object - `Map`

```js
//create a Map
const hashmap = new Map(); 
```
- [Here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) are all the methods that a Map can have.

```js

```

1. Inserting/Removing in Map: O(1)

2. Searching in Map : O(1)

3. Accessing/Updating in Map : O(1)


### Hashset (Object + no duplicates allowed)
- In Js, we have built-in object - `Set`

```js
//create a Set
const set = new Set(); 
```
- [Here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) are all the methods that a Set can have.

```js

```

1. Inserting/Removing in Set: O(1)

2. Searching in Set: O(1)

<!-- 3. Accessing/Updating in Set: O(1) ? -->


Using `Array.from()` is one way to convert array-like, iterable objects, Map, Set, into an Array. Feel free to read more in details [here](https://attacomsian.com/blog/javascript-array-from)!


### Linked List 

1. Inserting/Removing in Linked List:
    - the head: O(n) + O(1)
    - the tail: O(n) + O(1)
    - the middle: O(n) + O(1)

2. Searching for a value in Linked List: O(n)

3. Accessing/Updating in Linked List: 
    - the head: O(1)
    - the tail: O(n)
    - the middle: O(n)

### Summary on Array, Linked list, Hashmap, Hashset

Thanks to Mentor Jeremy at Formation who has shared the following table in the first Algo Workout session: 

|  | insertion/removal   | searching/checkingForExistence  | accessing/updating/getValue  | 
| :-----: | :-: | :-: | :-: | 
| Hashmap | O(1)  | O(1)  | O(1)  | 
| Hashset | O(1)  | O(1)  | ? | 
| Array/List |  O(n)`*` | O(n)`#`  | O(1)  | 

`*` = O(1) if you're inserting/removing in the end

`#` = O(1) if the search item is in the first index of the array 

### Trees 

#### Binary Tree 

#### Binary Search Tree 

### Trie

### Heap/Priority Queue

### Graph

### Additional Learning Resources on Data Structures in JS
- [8 Common Data Structures in Javascript](https://betterprogramming.pub/8-common-data-structures-in-javascript-3d3537e69a27)


## Algorithms & Patterns
[25 Common Problem-Solving Patterns](https://designgurus.org/blog/grokking-leetcode) in Algorithm


## Progress 
Feel free to read about my weekly progress [here](https://github.com/ngl4/formation_journey/tree/main/AlgoMarathon/Progress) on Algo Marathon!

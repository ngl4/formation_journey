# Algo Workout With ...

## Vinit Parikh 04/20/22
 - [1 - js]()
 - [2 - python]()

**Reflection & Takeaways**

- Array problem: make sure to double check the following before you start walking through possible approaches to the engineering problem: 
    - Should the output array be **_sorted_** or **_non-sorted_**? 
        - Should the output array be **_maintained in order_** of the input array or it can be in **_any order_**? 
        ```js
        //input 
        [4, 3, 9, 6, 3]
        
        //remove duplicates in the array, which is 3 in this example

        //output (non-sorted/ MAINTAINED in order)
        [4, 3, 9, 6]

        //output (sorted/ ANY order)
        [3, 4, 6, 9]
        ```
    - Are we allowed to have extra space? 
        - this means we would like to know if the interviewer allows us to use a `Set`, `Map` (hashmap), another empty `Array` (extra space) that are used to store information. If your interviewer wants to challenge you a bit, they may not allow you to have extra space, but it is pretty rare in general. <br /><br />

- Compared Time and Space complexity, prioritize to optimize for Time Complexity first!!

- Js Built-in methods in JavaScript are mostly having an `O(n)` Time Complexity, ie, `.includes()`, `.filter()`, `.reduce()`, `.shift()`, `.unshift()` etc. Except for the following: 
    - `.push()` - O(1) - adding an item to the end of an array 
    - `.sort()` - O(nlogn) 
<br /><br />
- GOOD TO PRACTICE: built all the Js Built-in methods from scratch to see 

- Js Naming Convention 
    - function: make sure to begin with an action verb
    ```js
    //Good 
    function removeDuplicates() {}

    //Avoid:
    function noDuplicates() {}
    ```
    - function params: in real life, they should be more descriptive 
    ```js
    //Good 
    function removeDuplicates(input) {}

    //Avoid: 
    function removeDuplicates(array) {}
    ```
    - set: can be more descriptive
    ```js
    //Good 
    const seenNumbers = new Set();

    //Avoid:
    const set = new Set();
    ```

- Js variables should be declared either in `const` or `let`. `const` is considered to be better than `let` since any variable declared with `const` is not assignable. 

- GET REALLY GOOD AT TYPING FAST - this will be super helpful in interview situation

<!-- 

- []()

**Reflection & Takeaways**

 -->
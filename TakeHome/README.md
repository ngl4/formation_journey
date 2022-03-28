# Take Home 

## Notes on 03/21/2022

## Create a SSH Key

How to create a SSH Key? and What is a SSH key? 

Here are the resources I have used: 
- [Setting Up SSH Keys for GitHub](https://www.youtube.com/watch?v=8X4u9sca3Io)
    - This video is a great intro to SSH key and guide you through how to create a SSH Key 
- [How to Generate SSH Keys for GitHub](https://kinsta.com/blog/generate-ssh-key/)
    - This article goes into the details and I would highly suggest to quickly read through it to get a better idea how the SSH key is generated and the meaning behind the commands

### npm start - Encountered SyntaxError?! 

- If you ever encountered a `SyntaxError: Unexpected token` error after doing `npm install`, don't panic! You just have to make sure to install the latest node version `nvm install [NEW NODE VERSION]` then you should be able to resolve the problem. Remember to install the LTS node version from [the node.js site](https://nodejs.org/en/). 

## Notes on 03/22/2022

### React Hooks - useState 
- While working to add an input element using useState, I ran into an error stating `TypeError: Cannot read properties of undefined ('reading setInputData')` in the browser console or a warning in the react compiler stating `'setInputData' is assigned a value but never used`, do you know why I would encounter these errors, take a look at this code: 

```js
//Errors - Why? 
const NameEntry = () => {
    const [inputData, setInputData] = useState();
    const handleChange = (e) => {
        e.preventDefault(); 
        this.setInputData(e.target.value); 
    }
    return (
        <div>
            <input type="text" value={inputData} placeholder="type your name here" onChange={handleChange}/>
        </div>
    );    
}
```
- The issue is the `this` in the handleChange function. Since we are using functional component (Hooks - useState), we do not need to use `this` to set the input data. The solution to these errors is simply to remove the `this` right before the `setInputData(e.target.value);`

```js
//No more errors generated 
    const handleChange = (e) => {
        e.preventDefault(); 
        setInputData(e.target.value); 
    }
}
```
**Tips:**
- It is crucial to make sure to be able to distinguish `Class Component` and `Functional Component` in React. 
- When using the REACT documentation, pay closer attention to if it is guiding you a `Class Component` approach or a `Functional Component` approach. 

### Controlled Component 
- Form elements have: 
    - its own state 
    - its updated state (based on the user input)

- Here is the Definition of this terminology in React Documentation:
```
An input form element whose value is controlled by React in this way is called a “controlled component”.

The React component renders a form also controls what happens in that form on subsequent user input. 
```

- Basically it means that React can render an original input form and control what happens to the form based on the user input and render the form based on the new input. Any input form element that has values under control by React is called a "controlled component." Another way to phrase this is, ie, _the input element rendered is controlled_. 

```
Warning: A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component.
```
If you ever get the above warning, it means that you have a variable that has a useState starting from `undefined` ie, 

```js
const [inputData, setInputData] = useState();
```
A quick way to fix this warning is to just define the `inputData` as a string in the default stage 

```js
const [inputData, setInputData] = useState(""); 
```
[Here](https://stackoverflow.com/questions/37427508/react-changing-an-uncontrolled-input) is a stackoverflow resource that explains this in details. 

## Notes on 03/23/22

### Frontend Workout with Tala Huhe (and Fellow Eric Lee)
Prompt: 
- Create a simple Shopping Cart

Takeaways: 
- unique keys when displaying in a list of items to avoid `React unique key error`
```
//Found on Stack OverFlow: 

In React, when you are rendering multiple equal components (in your case, the todos) you need to add a unique key to each one of them, that's because React needs to know how they are going to be treated in the virtual dom.
```
```js
    <ul>
        {ITEMS.map((elem) => {
        return (
            <li key={elem.id}>
            </li>
        );
    </ul>
```
- `map()` in one line - `no return` 
- `map()` with `{}` - need `return`
- Difference between: 
```js
<button 
onClick={() => handleClick(elem.id)}></button> 
//call a function
```
and 
```js
<button 
onClick={handleClick(elem.id)}></button> 
//return the value from the function 
```

Feedback: 
- Practice more and revisit + familiarize with all the React Fundamentals (ie, passing in variables and setting up a state)

### Error: 'useState' is not defined no-undef React

This error means you forgot to import the `useState` to the component: 

```js
import { useState } from "react"; 
```
Read more [here](https://stackoverflow.com/questions/60915262/how-to-pass-function-as-props-from-functional-parent-component-to-child)! 


## Notes on 03/24/22

### How to pass data from child component to its parent in ReactJS?
- By using a Callback Function 
- [Here](https://www.geeksforgeeks.org/how-to-pass-data-from-child-component-to-its-parent-in-reactjs/) is a great resource to read more about this! 

```js
//parent
import Child from "./Child";
import { useState } from "react"; 

function App() {
  const [name, setName] = useState("");  

  const handleCallback = (childData) => {
    setName(childData); 
  }

  return (
    <div>
      <Child parentCallback={handleCallback}/>
    </div>
  );
}
export default App;
```
```js
//child
import { useState } from "react";

function Child(props) {
    const [name, setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value); 
        e.preventDefault();
    }

    const handleSubmit = (e) => {
        // console.log(e.target.nameInput.value); 
        //Option#1 - show submitted input value (used mainly in the case when no stateful value is set)

        // console.log(name);  
        //Option#2 - show submitted input value 
        
        // console.log(props); //props is an object 

        props.parentCallback(name); 
        e.preventDefault(); 
    }    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} placeholder="type your name here" onChange={handleChange} name="nameInput"/>
                <button type="Submit">Set Name</button>
            </form>
        </div>
    );    
}

export default Child;
```

### States are immutable 

RULE OF THUMB: Don't mutate any state directly 

## Notes on 03/27/22

### JavaScript One-Liners Documentation (10 problems - no for loops)
__

**Key Terms can be used**
- Object.keys
- Array.map
- Array.from or spread operator (`[...length]`)
- typeof
- arrays vs. objects

__

- **Problem: A `redundant` function that takes in a `string` and `return a function that returns a string`** 
```js
function redundant(string) {
    return () => string; 
}

const func1 = redundant('Hello!'); 
console.log(func1); //output: () => string
console.log(func1()); //output: Hello!

```
- **Problem (Sort): Create a function that, given an array similar to the above, sorts the array according to the "content of the elements".**

```js
function sortIt(arr) {
	return arr.sort(); 
}
//Another way: 
// const sortIt = arr => arr.sort((a,b) => (a[0] || a) - (b[0] || b));

console.log(sortIt([[4], [1], [3]])); // output: [[1], [3], [4]]
console.log(sortIt([[4], 1, [3]])); //output: [1, [3], [4]]
```
- **Problem (obj to arr): Write a function that converts an object into an array of keys and values.**

```js

function objectToArray(obj) {
	return Object.entries(obj); 
//Another way to solve this:     
// 	return Object.keys(obj).map(key => [key, obj[key]])
}

console.log(objectToArray({
  D: 1,
  B: 2,
  C: 3
})); //output: [["D", 1], ["B", 2], ["C", 3]]
```
Read more about this conversion from object to array [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)

- **Problem (obj keys & values): Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.**

```js
function keysAndValues(obj) {
	return [Object.keys(obj), Object.values(obj)]; 
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
//output: [["a", "b", "c"], [1, 2, 3]]
```

- **Problem (concatenate arrays): Create a function that concatenates n input arrays, where n is variable.**

```js
function concat(...args) {
	return args.flat();  
    //Another way: 
    //return [].concat(...args);
}

console.log(concat([1, 2, 3], [4, 5], [6, 7])); 
//output: [1, 2, 3, 4, 5, 6, 7]
```
Find out more about `flat()` [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)


- **Problem (Factorial): Create a function that takes an integer and returns the factorial of that integer. That is, the integer multiplied by all positive lower integers.**

```js
function factorial(int) {
	return int === 1 ? int : int * factorial(int - 1); 
}

console.log(factorial(3)); //1 * 2 * 3
//output: 6
console.log(factorial(5)); //1 * 2 * 3 * 4 * 5
//output: 120
```

- **Problem: Zip It, If You Can?**

Given an array of women and an array of men, either:

Return "sizes don't match" if the two arrays have different sizes.
If the sizes match, return an array of pairs, with the first woman paired with the first man, second woman paired with the second man, etc.

    Base case - use an if statement (can be more than 1 line) ~ however, this can also be in one line with zipping using the Ternary Operator!! 

    Zipping - should be in 1 line 

```js
function zipIt(women, men) {
	if (women.length !== men.length) return "sizes don't match"; 
	return women.map((elem, i) => elem.concat("," + men[i]).split(','));
    //Another way (better): 
    //return women.length === men.length ? women.map((woman, i) => [woman, men[i]]) : "sizes don't match";
}

console.log(zipIt(["Elise", "Mary"], ["John", "Rick"])); 
//output: [["Elise", "John"], ["Mary", "Rick"]]
console.log(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh"])); 
//output: "sizes don't match"
```

- **Problem (Square Every Digit): Create a function that squares every digit of a number.**

```js
function squareDigits(n) {
    return Number(n.toString().split('').map((elem) => Math.pow(Number(elem), 2)).join(''));
    //Another way (better):
    //return +[...String(n)].map(x => x*x).join('');
}

console.log(squareDigits(9119)); 
//output: 811181
```
```
+
The unary plus operator converts its operand to Number type.

-
The unary negation operator converts its operand to Number type and then negates it.
```
Read more about the unary plus [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus)

Read more about the unary negation [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_negation)

[Here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators) are the documentation on all the JavaScript Expressions and Operators

- **Problem: Filter out Strings from an Array**

Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

```js
function filterArray(arr) {
	return arr.filter(elem => typeof elem === "number"); 
}
console.log(filterArray([1, 2, "a", "b"])); 
//output: [1, 2]
```

- **Problem: Converting Objects to Arrays**

Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

```js
function toArray(obj) {
	return Object.entries(obj); 
}
console.log(toArray({ a: 1, b: 2 })); 
//output: [["a", 1], ["b", 2]]
console.log(toArray({})); 
//output: []
```
# Take Home

## Notes on 03/21/2022

### Create a SSH Key

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
  };
  return (
    <div>
      <input
        type="text"
        value={inputData}
        placeholder="type your name here"
        onChange={handleChange}
      />
    </div>
  );
};
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
- Differences among how functions are used in React:

```js
<button onClick={() => handleClick(elem.id)}></button>
//call a function
```

```js
<button onClick={handleClick(elem.id)}></button>
//return a value from the function
```

```js
<button onClick={handleClick}></button>
//pass in a function
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
  };

  return (
    <div>
      <Child parentCallback={handleCallback} />
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
  };

  const handleSubmit = (e) => {
    // console.log(e.target.nameInput.value);
    //Option#1 - show submitted input value (used mainly in the case when no stateful value is set)

    // console.log(name);
    //Option#2 - show submitted input value

    // console.log(props); //props is an object

    props.parentCallback(name);
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="type your name here"
          onChange={handleChange}
          name="nameInput"
        />
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

\_\_

**Key Terms can be used**

- Object.keys
- Array.map
- Array.from or spread operator (`[...length]`)
- typeof
- arrays vs. objects

\_\_

- **Problem: A `redundant` function that takes in a `string` and `return a function that returns a string`**

```js
function redundant(string) {
  return () => string;
}

const func1 = redundant("Hello!");
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

console.log(
  objectToArray({
    D: 1,
    B: 2,
    C: 3,
  })
); //output: [["D", 1], ["B", 2], ["C", 3]]
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
  return women.map((elem, i) => elem.concat("," + men[i]).split(","));
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
  return Number(
    n
      .toString()
      .split("")
      .map((elem) => Math.pow(Number(elem), 2))
      .join("")
  );
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
  return arr.filter((elem) => typeof elem === "number");
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

## Notes on 03/28/2022

### Feedback from my first PR (Pull Request)

1. Pull Request

   - Title of PR is enough
   - Details can be mentioned in the body of the PR

2. Commit Messages

   - Don't be too detailed
   - A few words to summarize your changes is sufficient (best: 3-5 words, max: under 10 words)

3. Notes to Self Comments can be added in the PR instead of in the script

4. Provide research reference link is a good way for notekeeping!

5. `event.preventDefault()` should be placed at the very beginning of a callback function, read more [here](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

   - `event.preventDefault()` is not needed/valid/appropriate in the `onChange` event because it is not cancellable, read more [here](https://stackoverflow.com/a/24252333)

6. `handleChange` can be too general to name a function, it can be more specific ie, `handleInputChange`

7. It is common in React to have the props name to be the same as the name of the function or variable passed into it

8. Parameter of a function should be succinct - the reason is we may be using this same function in other context so it is better to be general here. ie, what I did in the assignment is `ChildNameEntryData` is a parameter name I set for a function initially, and I have changed it to `name` instead after reviewing PR feedbacks.

9. Avoid redundant/extra state created - in the assignment I worked on in Formation, I have created a separate state for the variable `disabled` with the data type of boolean, which is found to be a redundant state. See below for details:

```js
const [input, setInput] = useState(""); //the default state of input has a bool of false (empty string === false)

const disabled = !input; //disabled is set to true

//the disabled variable is created for a submit button - the purpose is to avoid the user to submit anything if they have not entered anything in the input box.
```

## Notes on 03/29/2022

### Frontend Workout with Tala #2

- We did a color pixel problem today. Even though we did not complete the entire challenge, but we have successfully create a color input, a square, and whenever it is clicked, it is will change to the color that is being input.

- Great challenge to see how components, props, and states are working in React.

- For naming convention, it is debatable, but for clarity purpose, it would be best to have unique name to make sure it is easier to understand what the specific state is doing.

### What is the difference between

`const DoSomthing = () => {}`

vs

`function DoSomething() {}` ?

- Hoisting!!

```
Definitions found on MDN: "JavaScript Hoisting allows functions/classes to be safely used in code before they are declared."

declaration (hoisted)
`function DoSth() { //action }`
vs
expression (not hoisted)
`const DoSth = () => { //action }`
```

- Read more [here](https://softwareengineering.stackexchange.com/questions/364086/why-use-const-foo-instead-of-function-foo)

### It is crucial to make sure to use camal case & quotations in the CSS style object

```js
const styles = {
  height: "10px",
  width: "10px",
  backgroundColor: "red", //camel case & quotations

  //in the case you are changing the color based on what passed in to the props component, it will display as:
  //backgroundColor: props.color
};
```

## Notes 04/01/2022

- Practicing based on a Frontend Workout Exercise - Shopping Cart - still encountering issues regarding how to properly display cart items in the Cart component without errors. I have seeked out for help and also will do some more research by myself.

- [Here](https://codesandbox.io/s/shopping-cart-frontend-exercise-ohinzp?file=/src/App.js) is the link to the codesandbox!!

## Notes 04/02/2022

- FINALLY!! I HAVE FIGURED OUT THE PROBLEMS for the Frontend Workout Shopping Cart Exercise! Thanks to Formation mentor Mike Novati's guidance!

- There are two problems I encountered: (1) state mutatation issue (2) duplicated keys in list of items

(1) State Mutation - this is NOT ACCEPTABLE in React! We DO NOT WANT TO MUTATE any STATE DIRECTLY!! The best way to avoid this issue is to create a copy of the state variable (ie, state variable, `cart`, and the copy variable, `newCart`). Then, we can update the copy of the state and set the state variable using `setState` call method (ie, `setCart(copyOfcart)`). Through this `set` method, React will then re-render. It is key remember that **react only re-renders when you explicitly call setX (i.e a setstate call on a state variable)** ~ exact wordings from mentor Mike!

```js
//before
const [cart, setCart] = useState({});

const newCart = cart; //this is modifying state directly ~ which is BAD!!!
//This means newCart references the same cart state variable
//Making the cart state mutable in this scenario
//Another issue is multiple variables can do the same reference to the same state variable
```

```js
//after
const [cart, setCart] = useState({});

const newCart = { ...cart }; //this is a way to modify state by creating a new object - using Js ES6 destructuring! - a way to avoid mutate state object directly
```

(2) Duplicated keys in List of items

Here is what the React warning stated:

<img width="467" alt="Screen Shot 2022-04-02 at 10 38 04 PM" src="https://user-images.githubusercontent.com/24945340/161409982-1ef01a8a-ba8d-4a8c-b3ee-b1a67bd62144.png">

This error means in the list of items, there are two items with the same keys. In React, all items in a list should have their own unique key so React can identify which specific item is requested to modify or remove.

In order to solve this issue, for the shopping cart example, I have make sure to create a new array and update the quantity of a specified item in the list, and then set the state variable to the updated new array (with the updated quantity).

- Feel free to check out the updated shopping cart version here: https://codesandbox.io/s/shopping-cart-frontend-exercise-made-progress-ohinzp

## Notes on 04/03/2022

Besides the above problems, Mentor Michael also provided additional feedback and guidance on the updated shopping cart version - (1) all the specific indexes of the state array should also NOT BE MUTATED. A new variable should be created to handle them. (2) An additional resource link that is provided to learn more about [STATE IMMUTABILITY](https://daveceddia.com/react-redux-immutability-guide/) in React

## Notes on 04/04/2022

JavaScript Basics Review:

### Destructuring

### Reference vs Value Type

### Arrow function

- Arrow function (`=>`): ES6 syntax to enable developers to write more elegant closures (make functions more concise). Read more [here](http://es6-features.org/#ExpressionBodies)

  - Inline Functions: functions that are being passed as parameters into other functions.

    - no more `return`
    - no more curly bracket `{}`
    - best to use `const`

    ```js
    const magic = (a, b) => a.concat(b);
    ```

### Closures

- Understanding Closures `is necessary to understanding how your functions interact with variables outside of its immediate scope`.

- What are [Closures](https://blog.angular-university.io/really-understanding-javascript-closures/)?

  - A closure is `a function with 'memory' about the environment where it was created`

- Key to understanding closures is understanding how functions within functions work

- Closures get involved when the `returned inner function` is not `self-contained`

  - `self-contained` function is often referred to an inner function that operate on its own without any reliance on variables (or functions) passed in from the outer function.

  ```js
  const outerFunc = () => {
    alert("I am a outer function");
    const innerFunc = () => {
      alert(
        "I am an inner function that does not use any variables pass in from the outer function! Specifically, you can call me a self-contained function!! ^^ haha "
      );
    };
    return innerFunc;
  };
  ```

- Realistically in real life, it is pretty rare to see a self-contained function. Normally, it is more complicated and messy!

- The Javascript runtime keeps track of all of your variables, memory usage, references, and so on...!

- When the runtime detects that an inner function relies on variables stored in the outer function, it ensures those variables are available even if the outer function goes away.

```
Closure = "function"  +  outer context

"function": is created, and returned by another function
outer context: variables that the "function" relies on
```

- In summary, closure is basically returning a function and as a function which relies on variables declared by the outer function as in the case of the stopwatch, you will return both the outer variable along with the function the inner function is being returned. And these combination is a closure.

_The above notes are taken after watching this [video](https://www.youtube.com/watch?v=rBBwrBRoOOY)_

**Why do we use Closure to solve problems in Javascript?**

- [Watch here](https://www.youtube.com/watch?v=-xqJo5VRP4A) and understand the reason why closure is necessary for problem-solving

## Notes 04/05/2022

### React Basics: useEffect

- Doing something after a component is rendered or re-rendered!!
- Side Effects on React Components after rendering DOM:

  - With Cleanup
    - setup subscription for every individual login info to avoid memory leak
    - return a function that cleans up after (ie, adding and removing subscriptions)
  - Without Cleanup
    - Run additional codes once React has updated the DOM
    - do not return a function

- useEffect is `componentDidMount, componentDidUpdate, and componentWillUnmount combined`

- When might we want to use useEffect?

  - we would like to do something after the component is rendered (after performing the DOM updates)
  - What can we use it for?
    - Data fetching
    - Imperative API

- What is an alternative to useEffect?

  - `componentDidMount, componentDidUpdate, and componentWillUnmount combined`

- What is the advantage of using useEffect over its alternative?
  - `Hooks let us split the code based on what it is doing rather than a lifecycle method name.`
  - Reduced suffering from bugs like forgetting to handle a situation with `componentDidUpdate` logic can cause memory leak in data when you already have `componentDidMount` and `componentWillUnmount`. In useEffect hook, `There is no special code for handling updates because useEffect handles them by default. It cleans up the previous effects before applying the next effects.`

## Notes 04/06/22

- Frontend workout with Tala (going through Memory Puzzle exercise in React)
- Takeaways:

  - using ternary operator to change the css styling for the puzzle square whenever is clicked
  - create a number array to contains all the numbers (including repetitive numbers)
  - Props, States, Render in React!!! - Revisited on the Higher Level Understanding of what React does and why do we use React!

- Needs Improvements:
  - I am still not able to think of the problem well and able to know what to do first, and what to do next, etc.
  - I need to be more confident
  - I need to talk through the code while I am coding

## Notes 04/07/22

- Frontend Workout with Tala (Stock Market exercise in React)

  Tala has taught us how to approach a problem before we start ie, write down all the components (props, stateful)

  Then, he went over a step-by-step process.

  During the group session, we got through fetch data and placed data on DOM successfully. We also created props component and stateful components. We use useEffect to fetch data to the DOM so it will stop the infinite fetching issue (errors encountered that took the longer time: API limit OR `tickers.map is not a function`)

  However, the problem fetched data can only be rendered once (only the first time.

  Here is the codesandbox to the exercise (forked version):

- Reflection:
  - Practice more on CSS Grid ie, `grid-template-columns`
  - still need to be familiarize with `useEffect` hook and how it works

## Notes 04/08/22

- Pair Learning Session with Eric Lee (Frontend Workout on Librarian)

  During the session, I have learned to work with another fellow to fetch API data using fetch() method and then we also explore how to create props component. And how to pass fetched data through the props component we created to display the output.

  Here is the codesandbox to the exercise (forked version):

  - Reflections:

    - I think based on my explanation, I should be a little clearer in demo-ing why props component are useful to answer one of the Eric's question since he is struggling to understand how the props component works.

    - I still struggle with `useEffect` especially how to handle url query params situation

    - I am also not sure how to properly pass data fetched data to a state (this is the trouble I got when I was working through the Take Home Challenge - Top50Universities)

<br />

- Feedbacks on Second Assignment PR (from Mentor Jenny Xing) - Top 50 Universities Take Home

  -

### Resources on `useEffect` and how it works:

- It is also important to know what the [lifecycle of components](https://www.geeksforgeeks.org/reactjs-lifecycle-components/) is.
- [How to fetch data using React Hooks](https://www.robinwieruch.de/react-hooks-fetch-data/)

## Notes 04/09/22

### First Frontend Study Session 

- Small Group Study Session with Jenny Xing (Mentor in the Take Home Challenge) and Clarence Luk (fellow who already completed the Take Home Challenge) ~ Study buddies: Gerardo, Eric, and Richard

  - Takeaways:

    - When learning React in order to answer your `why React?` question, it is best to learn about the `history` of how it was created? How did people code before React was created? How did React evolved over time? ~ Knowing this history can help you to understand how `React` framework works as a whole - from Class Components to Functional Components and then to Hooks!!!

    - Compacted version of `if (condition is true) { //print sth }` OR ternary operator `condition is true ? //print when true : //print when false` in React renderer (jsx) is `{condition is true && //print sth }`

    - When you notice `a map function within another map function`, this is a nested loop, with an indication that it could be a 2D array (we will be iterating through the outer array and then we will do another iteration through the inner array). The 2D array looks like this: `[ [1],[2],[3] ], [4],[5],[6] ]`

    - The difference between declaring a function in `const` vs using `function` - `hoisting` & scope!

    - Renderer: HTML -> Browser

    - React is using `jsx` to write HTML in the render function so you can write HTML directly in js file

    - React framework in short is basically `functions that return HTML` and can be based on variables passed in (as `props` in the parameters of the functions) - with props, the parent component can passed values or functions to the children component easily.

    - useEffect -The first parameter is the callback function

    - useEffect - The second parameter (3 scenarios):

      - #1 no dependencies (no empty array): call the useEffect callback function each time a state has changed
      - #2 no dependencies with empty array: call the useEffect callback function ONCE, call once onMount (the first render only)
      - #3 dependencies: call whenever these dendencies variables change

    - For fetching data, you only want to fetch data ONCE. So the #2 and #3 scenario in useEffect are more preferable to use whenever we are fetching API data/ any data source. If we are fetching data in the #1 scenario in useEffect, you are basically fetching continuosly and will eventually get to max stack or API limit error.

    - `window.history.go` vs `React Router` - in React: React Router is more preferable to use!

  - Notes from the session:

  ```
  What and Why React? (high level)

  - General History of React:

  Starting here...

  (using Class-based component ie, using constructor, componentDidUpdate, or other react lifecycle methods, this.setState, using this keyword a lot) -->

  Then here...

  (functional component - func takes in props (no render)) -->

  Now here...

  (Hooks - functional component to deal with states management - replace lifecycle mehtods - play around on how the lifecycle methods work ~ this helps you to learn more about React Hooks especially useEffect)

  -resusable components
  - functions (return html) - can be based on variables
  - write html using jsx (render function - write html directly in js file)
    vs vanialla js (document.create... ~ document API)
  ```

  - Reflection:

    This is the first small study session. I decided to start the session as soon as possible and prepared all the questions in the codesandbox so other people can access them. I was slightly nervous since it was my first time doing this type of session. There are definitely a lot of rooms for me to improve and Let's do better next time!! :)

## Notes 04/11/22 - 04/12/22

Practicing HTML/CSS for the new Take Home Challenge to create a pixel perfert design using HTML/CSS based on a Figma design out. The requirement is it needs to match up with the Figma design EXACTLY, like it is hard to tell they are different.

I think the key part for this project is be able to manage time well and know to pause the time and take the necessary break before coming back to the project.

Here is what I find useful while working through this take home challenge. I only start timing when I am coding, and pause it when I need a break and do some research regarding basic syntax, or doing minor admin tasks ie, download images and using imgur to get the url.

- Semantic HTML layout is key to this task
- Time management (set up a plan to know what you need to do first, step by step)
- Being familiarize with CSS property is really helpful ie, `clip-path` (read more [here](https://uhded.com/diagonal-section-css))


## Notes 04/13/22

### Second Frontend Office Hours Session

- A Small group office hours session with Erik Ritter, a frontend mentor at Formation. 

- Takeaways:
    - React Router Task in Formation Take Home: `:thing` ~ the colon means to find a match and store it as a paramater "thing" - match and store as parameter 
        - using the [React Router Docs](https://v5.reactrouter.com/web/guides/quick-start) to figure out how to use `useParams` and `props.match` 

    - Semantic version update in dependencies:
        - major update - large changes that require large modifications in the current script setup
        - minor update - should not be a big impact on the current script 
        - patch update
        - ie, React update in React Router from v5 -> v6 just literally yesterday (still not sure if there are any udpates...need to read through documentation to find out more...)

    - For those who are looking for people to follow in the Frontend dev on Twitter, look out the following: 
        - https://twitter.com/kentcdodds
        - https://twitter.com/Wattenberger
    
    - Destructuring in props 

    ```js
  //no destructuring 
   const Child = (props) => {
    return <Grandchild setText={props.setText} />;
  };

  //destructuring #1
    const Child = (props) => {
    const {setText} = props; 
    return <Grandchild setText={setText} />;
  };

  //destructuring #2
  const Child = ({ setText }) => {
    return <Grandchild setText={setText} />;
  };

    ```

    - Two Ways to pass value back up from the child components to the parent component: 
        - Passing a state variable down to the Child components and then update the state of the Parent component
        - `useContext` Hooks 
    
    - Redux - state management 

    - Not all react component will render something to HTML, ie, 

    ```js
    const Child = ({ setText }) => {
    return <Grandchild setText={setText} />;
  };

  const MyComponent = ({ children }) => {
    return children;
  };

  const Text = ({ children, size, color }) => {
    return <span style={{ fontSize: size, color: color }}>{children}</span>;
  };

  const Parent = () => {
    const [text, setText] = useState("Initial text");
    return (
      <MyComponent>
        <Text size={64} color="red" textContent={text}>
          {text}
        </Text>
        <Child setText={setText} />
      </MyComponent>
    );
  };

    ```

    - How to read through an unfamiliar full stack codebase? 
        - start with backend (server.js) 
        - then the frontend: for instance in React frontend: 
            - index.js
            - App.js
            - Package.json
            - Specific component to update a certain feature/page (ie, Dashboard)

        - TIPS: Typing letter "T" in Github repo page, you can search for specific page or route 
        - TIPS: search the specific variables/codes in the search bar in Gtihub can help you to narrow down what you are looking for 
       - doing `npm test` can be helpful to test if the codebase is working as expected 
       - Suggested to update codes through VSC or any code editing tools, instead of directly through Github
       - This is a great start to know how to make contribution to a large open source codebase! 

- Reflection: 

    - I think this session works out better than the previous session. I feel like the office hours style suggested by Mentor Jenny is definitely working! 
    - Every students get to participate and ask their specific questions on the problems or issues they encountered. 

## Notes 04/14/22 - 04/15/22 

Reflection on my Take Home Challenge and Result: 

After two days working on the HTML/CSS Take Home challenge, I have submitted it yesterday and got a "weak yes" from the challenge. I am super glad I passed this challenge, but I also know I need to do more practices to improve my Frontend skills so I will no longer get a "weak yes", but a "strong firm yes". **I still need to keep practicing my frontend skills every week to gradually improve my overall frontend skills.** 

### React Router 
Two ways to read the URL params/access the params of the router path: 

```js
import React from "react";
import { BrowserRouter as Router, Route, useParams } from "react-router-dom";

function Body(props) {
  //1. Read 'thing' using 'useParams'
  // let { thing } = useParams();
  // return <div>The parameter 'thing' has the value: {thing}</div>;

  //2. Read 'thing' using 'props.match'
  return (
    <div>The parameter 'thing' has the value: {props.match.params.thing}</div>
  );
}

export default function App() {
  return (
    <Router>
      <Route path="/:thing" component={Body} />
    </Router>
  );
}
```
Here is where you can find more info regarding the `useParams` and `props.match`: 
- `useParams`: [Go to useParams](https://v5.reactrouter.com/web/api/Hooks/useparams)
- `props.match`: [Go to Route props](https://v5.reactrouter.com/web/api/Route/component)


## React setState, useEffect, & setTimeOut 

```js
import React, { useState, useEffect } from "react";

/**
 * 1. Fill in missing state variable declarations
 * 2. Update the counter by 1 on each interval tick 
 * 3. Update the counter by doubling it on each interval tick  

 * 4. Stop ticking the timer when it is larger than 1,000,000; <-- this took me a while ~ I realize after searching, I should be adding if condition in the render function and not within the setTimeout function. 
 */
export default function App() {
  const [counter, setCounter] = useState(0); //1. 
  useEffect(() => {
    const timeout = setTimeout(() => {
      let temp = counter === 0 ? 1 : counter;
      setCounter(temp * 2); //if you do setCounter(counter * 2) it will NOT WORK!!
    }, 1000);
    return () => clearTimeout(timeout);
  }, [counter]);

  return (
    <div> 
      {counter > 1000000 //4.
        ? "Stop counting since it is over 1,000,000 ticks" 
        : counter}
    </div>
  );
}

```


<!--

## Notes


 -->

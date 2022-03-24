# Take Home 

## Create a SSH Key

How to create a SSH Key? and What is a SSH key? 

Here are the resources I have used: 
- [Setting Up SSH Keys for GitHub](https://www.youtube.com/watch?v=8X4u9sca3Io)
    - This video is a great intro to SSH key and guide you through how to create a SSH Key 
- [How to Generate SSH Keys for GitHub](https://kinsta.com/blog/generate-ssh-key/)
    - This article goes into the details and I would highly suggest to quickly read through it to get a better idea how the SSH key is generated and the meaning behind the commands

## Notes on 03/21/2022

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





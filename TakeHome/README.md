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




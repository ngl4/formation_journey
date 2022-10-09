/*
Display number (font color - white)
Display buttons 
  - same circle shape except zero 
  - with different colors
    - orange in the last column (font color - white)
    - light grey in the right row (font color - black)
    - dark grey for the rest (font color - white)
  - 
 
Circle component (map)
- border-radius 50

- map, classname

for the zero circle, add specific class for sizing 

-flexbox 

*/

/*
const Circle = ({className, text}) => {
  return (
    <div className={className}>{text}</div>
  )
}

const NUMBER_OF_CALCULATOR_DARKGRAY_BUTTONS =[...Array(11).keys()]; 

const App = () => {
  React.useEffect(() => {
    console.log(NUMBER_OF_CALCULATOR_DARKGRAY_BUTTONS);
  }, [])
  return (
    <div className="App">
      <section className="numberDisplay">
        <p>1,9093</p>
      </section>
      <section className="buttonsDisplay">
        {NUMBER_OF_CALCULATOR_DARKGRAY_BUTTONS.map((elem) => 
        {
          return (
            <Circle 
            className="circle darkGreyBg"
            text="+"
           />
          )
        })}
      </section>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

*/

/*
.App {
  font-family: monospace;
  display: flex; 
  flex-direction: column;
  background-color: black;
  width: 300px;
  height: 400px; 
  box-sizing: border-box; 
}

.numberDisplay {
  height: 100px;
}

.buttonsDisplay {
  display: flex; 
  flex-direction: row; 
  flex-wrap: wrap; 
  justify-content: space-around;
  width: 150px;
}

.circle { 
  border-radius: 50%;
  width: 3em; 
  height: 3em; 
}


.orangebg {
  background-color: orange; 
}

.darkGreyBg {
  background-color: darkgrey; 
  color: white; 
  text-align: center; 
  padding-top: 1em;
}
*/
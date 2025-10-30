// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// import Xcalculator from "./Calculator/calculator";

// export default function App() {
//   return <Xcalculator />;
// }



import { useState } from 'react';
import "./App.css";
function App() {
  const [inputVal,setInputVal] = useState('');
  const [answer,setAnswer] = useState('');
  const btnVal = (e) => {
    const value = e.target.value;
        if (value === 'C') {
          setInputVal('')
          setAnswer('')
        }
        else if(value === '=') {
          // handal incomplete expression 
          if(!inputVal || /[+\-*]$/.test(inputVal)){
            setAnswer('Error')
            return
          }
          try {
            const ans = eval(inputVal)
            setAnswer(ans)
          } catch {
            setAnswer('Error')
          }
        }
        else {
          setInputVal((prev) => prev + value)
        }
      }

  return (
    <>
    <div className='calculatorMainContainer'>
      <h1>React Calculator</h1>
      <input type="text" value={inputVal} readOnly />
      <br />
      <span>
        {answer}
      </span>
      <div className='buttonContainer'>
      <button type="button" className="buttonCalc" value={7} onClick={btnVal}>7</button>
      <button type="button" className="buttonCalc" value={8} onClick={btnVal}>8</button>
      <button type="button" className="buttonCalc" value={9} onClick={btnVal}>9</button>
      <button type="button" className="buttonCalc" value={'+'} onClick={btnVal}>+</button>
      <button type="button" className="buttonCalc" value={4} onClick={btnVal}>4</button>
      <button type="button" className="buttonCalc" value={5} onClick={btnVal}>5</button>
      <button type="button" className="buttonCalc" value={6} onClick={btnVal}>6</button>
      <button type="button" className="buttonCalc" value={'-'} onClick={btnVal}>-</button>
      <button type="button" className="buttonCalc" value={1} onClick={btnVal}>1</button>
      <button type="button" className="buttonCalc" value={2} onClick={btnVal}>2</button>
      <button type="button" className="buttonCalc" value={3} onClick={btnVal}>3</button>
      <button type="button" className="buttonCalc" value={'*'} onClick={btnVal}>*</button>
      <button type="button" className="buttonCalc" value={'C'} onClick={btnVal}>C</button>
      <button type="button" className="buttonCalc" value={0} onClick={btnVal}>0</button>
      <button type="button" className="buttonCalc" value={'='} onClick={btnVal}>=</button>
      <button type="button" className="buttonCalc" value={'/'} onClick={btnVal}>/</button>
    </div>
    </div>
    
    </>
  )
}

export default App;
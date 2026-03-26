import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter] = useState(0);

  const addValue =()=>{
    if (counter === 20){
      setcounter(20);
    }
    else{
    setcounter(counter+1);
    }
  }

  const minus=()=>{
    if (counter === 0){
      setcounter(0);
    }
    else{
    setcounter(counter-1);
    }
  }

  return (
    <>
      <h2>Hello</h2>
      <h3>Counter {counter}</h3>

      <button onClick={addValue}>Add Counter</button>
      <br/>
      <button onClick={minus}>Minus Counter</button>
    </>
  )
}

export default App

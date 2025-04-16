import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)

  const addValue = () => {
    if(counter < 20)
      setCounter(counter + 1);
    else
      setCounter(0);
  }

  const remValue = () => {
    if(counter >= 1)
      setCounter(counter - 1);
    else
      setCounter(0);
  }

  return (
    <>
      <h1>Counter</h1>
      <h3>Counter value: {counter}</h3>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={remValue}>Remove Value</button>
    </> 
  )
}

export default App

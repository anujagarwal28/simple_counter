import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter] = useState(0)

  const addValue = () => {
    if(counter<=19) {
      setCounter(counter+1)
    }
    else {
      alert("Value Exceeds Limit")
    }
    
    // for interview purpose
    // setCounter(prevCounter => prevCounter+1)
    // setCounter(prevCounter => prevCounter+1)
    // setCounter(prevCounter => prevCounter+1)
    // setCounter(prevCounter => prevCounter+1)
  }

  const removeValue = () => {
    if (counter>0) {
      setCounter (counter-1)
    }
    else {
      alert("Number cannot be negative")
    }
  }



  return (
   <>
   <h1>React Counter App : {counter}</h1>
   <h2>Counter value:{counter}</h2>
   
   <button
   onClick= {addValue}>Add value : {counter}</button>
   <br /> <br />
   <button onClick = {removeValue}>Remove value : {counter}</button>
   </>
  )
}

export default App

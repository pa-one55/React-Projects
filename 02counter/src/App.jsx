import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(0)

  const addValue = () => {
    counter += 1;
    console.log("Added 1 : ",counter);
    setCounter(counter);
    // tech 2 - setCounter(counter+1); // it just need the new val as the argument
  }

  const subVal = () => {
    if( counter <= 0 ) return;
    counter -= 1;
    console.log("Subtracted 1 : ",counter);
    setCounter(counter);
  }
  const addTen = () =>{
    counter += 10;
    console.log("Added 10 : ", counter);
    setCounter(counter);
  }

  const mulTwo = () => {
    counter *= 2;
    console.log("Multiplied By 2 : ", counter);
    setCounter(counter);
  }

  const divTwo = () => {
    counter /= 2;
    counter = Math.floor(counter);
    console.log("Divided By 2 : ", counter);
    setCounter(counter);
  }

  return (
    <>
    <h2>COUNTER PROJECT</h2>
    <h3>Counter Value : {counter}</h3>
    
    <button
    onClick={addValue}
    >+1</button>

    <button
    onClick={subVal}
    >-1</button>

    <button
    onClick={addTen}
    >+10</button>

    <button
    onClick={mulTwo}
    >*2</button>

    <button
    onClick={divTwo}
    >/2</button>

    <p>Copy1 of Counter : {counter}</p>
    <p>Copy2 of Counter : {counter}</p>
    </>
  )
}

export default App

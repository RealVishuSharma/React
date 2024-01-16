import { useState } from "react";

import React from 'react'

const App = () =>{

  const [first, setFirst] = useState("")
  const [second, setSecond] = useState("")
  const [result, setResult] = useState("")

  
  const firstNumber = (event) => {
    const value = event.target.value;
    setFirst(value);
    console.log(value)
  }
  
  const secondNumber = (event) => {
    const value = event.target.value;
    setSecond(value);
    console.log(value)
  }
  
  const addValue = () => {
    setResult(parseInt(first) + parseInt(second))
  }

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 italic">Vishu Sharma {result}</h1>
      <h2>Counter Value: {result} </h2>
      <input type="number" placeholder="Enter first number" name="firstnum" value={first} onChange={firstNumber}></input>
      <input type="number" placeholder="Enter second number" name="secondnum" value={second} onChange={secondNumber}></input>
      <button className=" border-red-700 p-2 border-2 rounded mr-3 bg-slate-500" onClick={addValue}>Add Value</button>
      <button className=" border-red-700 p-2 border-2 rounded bg-slate-500" >Remove Value</button>
      <p>Footer: </p>
    </>
  )
}

export default App;

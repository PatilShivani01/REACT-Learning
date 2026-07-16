//import React from 'react'

import { useState } from "react";

const UseState_counter = () => {

  const [num, setNum] = useState(0)

  function increaseNum() {
    setNum(num+1)    
  }

  function decreaseNum() {
    setNum(num-1)   
  }

  function increase5Num() {
    setNum(num+5)   
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button> 
      <button onClick={increase5Num}>Increase 5</button>     
    </div>
  )
}

export default UseState_counter;

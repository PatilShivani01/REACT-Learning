import React, { useState } from 'react'

const ArrayuseState = () => {
    const [num, setNum] = useState([10, 20, 30])

    const btnClick=() => {
        const newNum = [num]
        newNum.push(11)
        setNum(newNum)
    }

  return (
    <div>
        <h1>{num}</h1>
        <button onClick={btnClick}>Click Me</button>
      
    </div>
  )
}

export default ArrayuseState

//batch update in useState

import React, { useState } from 'react'

const BatchUpdateUseState = () => {

    const [num, setNum] = useState(0)

    const numUpdate = () => {
        setNum(prev => (prev + 1))
        setNum(prev => (prev + 1))
        setNum(prev => (prev + 1))
        setNum(prev => (prev + 1))
    }
  return (
    <div>
        <h1>{num}</h1>
        <button onClick={numUpdate}>Hello</button>
      
    </div>
  )
}

export default BatchUpdateUseState

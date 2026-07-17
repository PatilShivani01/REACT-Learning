import React, { useState } from 'react'
import ArrayuseState from './ArrayuseState.jsx'
import BatchUpdateUseState from './BatchUpdateUseState.jsx'

const App = () => {
  const [userName, setuserName] = useState({user:'shivani', age:'20'}) 

  const btnClicked = () => {
    const newName = {userName};
    newName.user= 'kavya'
    newName.age= 24
    setuserName(newName)
  }
  
  return (
    <div>
      <h1>{userName.user} {userName.age}</h1>
      <button onClick={btnClicked}>Click</button>

      <ArrayuseState />
      < BatchUpdateUseState />
         
    </div>
  )
}

export default App

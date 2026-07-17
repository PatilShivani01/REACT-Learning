import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const inputHandler = (val) => {
    val.preventDefault()
    console.log('form submitted by', title);

    setTitle('') //after submiting the form title will be refresh box will empty
    
  }
  return (
    <div>
      <form onSubmit={(elem) => {
        inputHandler(elem)
      }}>
        <input 
        type='text' 
        placeholder='Enter Your Name'
        value={title}
        onChange={(elem) => {
          setTitle(elem.target.value)
        }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App

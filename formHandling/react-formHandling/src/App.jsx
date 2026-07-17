import React from 'react'

const App = () => {

  const submitHandler = (val) => {
    val.preventDefault()      //used to prevent the default behaviour(console msg only see for ms) of form
    console.log('form submitted');
    
  }
  return (
    <div>
      <form onSubmit={(elem) => {
        submitHandler(elem)
      }}>
        <input type="text" placeholder='Enter Your Name' />
        
        <button>Submit</button>
      </form>
      
    </div>
  )
}

export default App


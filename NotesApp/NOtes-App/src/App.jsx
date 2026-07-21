import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const [info, setInfo] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (val) => {
    val.preventDefault()
    console.log("Notes is added by:", title); 

    const copyTask = [...task];

    console.log(task)

    setTitle('')
    setInfo('')
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(elem)=> {
        submitHandler(elem)
      }} className='flex lg:w-1/2 items-start flex-col p-10 gap-4'>
         <h1 className='text-3xl font-bold'>Add Notes</h1>

        {/*first input for heading*/}
          <input 
            type='text' 
            placeholder='Enter Notes Heading'
            className='px-5 py-2 font-medium w-full border-2 outline-none rounded '
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />
          {/*detail input for heading*/}
          <textarea 
            type='text'
            placeholder='Write Details'
            className='px-5 h-32 w-full font-medium py-2 border-2 outline-none rounded ' 
            value={info}
            onChange={(e) => {
              setInfo(e.target.value)
            }}
          />
          <button 
            className='bg-white active:bg-black font-medium w-full text-black px-5 py-2 outline-none rounded'
          >
            Add Note
          </button>
      </form>

      <div className='lg:w-1/2 p-10 lg:border-l-2'>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>
          <div className='h-40 w-40 rounded-2xl bg-white'></div>
          <div className='h-40 w-40 rounded-2xl bg-white'></div>
          <div className='h-40 w-40 rounded-2xl bg-white'></div>
        </div>
      </div>
    </div>
  )
}

export default App

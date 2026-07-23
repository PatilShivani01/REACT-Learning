import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const [info, setInfo] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (val) => {
    val.preventDefault()
    console.log("Notes is added by:", title); 

    const copyTask = [...task];
    copyTask.push({title, info})
    setTask(copyTask)
    

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
            className=' bg-white active:bg-scale-95 font-medium w-full text-black px-5 py-2 outline-none rounded'
          >
            Add Note
          </button>
      </form>

      <div className='lg:w-1/2 p-10 lg:border-l-2'>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-full overflow-auto'>
           {task.map(function(elem, idx) {
            return <div key={idx} className="relative h-50 w-40 rounded-xl bg-black py-11 px-4 text-black bg-cover p-4 bg-[url('https://imgs.search.brave.com/b9nc5BMwJ963hopkarex8iyCPZDL5oVweOdhvT2icjI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjQv/NTg0LzQ2Mi9zbWFs/bC9ibGFuay1zcGFj/ZS13aGl0ZS1zdGlj/a3ktbm90ZS1wbmcu/cG5n')]">
              <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
              <p className='mt-4 leading-tight font-medium text-gray-500'>{elem.info}</p>
            </div>
           })}
        </div>
      </div>
    </div>
  )
}

export default App

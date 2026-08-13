import  {useState, useEffect } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(200)
   
  useEffect(function(){
    console.log('use effect is running');
  }, [num] ) //dependency array is used to run the useEffect only when the value of num changes. If we don't provide any dependency array, the useEffect will run on every render. If we provide an empty dependency array, it will run only once when the component mounts.

  return (
    <div>
      <h1>{num}</h1>
      <h1>{num2}</h1>

      <button 
      onClick={() => {
        setNum(num+1)
      }}
      onDoubleClick={() =>{
        setNum2(num2+10)
      }}
      >Click</button>
    </div>
  )
}

export default App


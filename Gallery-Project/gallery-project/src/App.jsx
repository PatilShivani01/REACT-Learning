import { useEffect, useState} from 'react'
import axios from 'axios'
import Card from './Components/Card'

const App = () => {
  const [userData, setUserData] = useState([])

  const [index, setIndex] = useState(1)

  const getData = async() => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    console.log(response.data)
    setUserData(response.data)
  }

  useEffect(function() {
    (async () => {
      await getData()
    })()
  }, [index])

 let printUserData = <h3 className="text-gray-300 text-xl absolute top-1/2 left-1/2 -translate-x-1 -translate-y-1 font-semibold">Loading...</h3>

  if(userData.length > 0) {
    printUserData = userData.map(function(elem) {
      return <div>
        <Card elem={elem} />
      </div>
    })
  }
  return (
    <div className="bg-black overflow-auto h-screen text-white">       
      <div className = "flex h-[82%] flex-wrap gap-4 p-2">
        {printUserData}
      </div>

      <div className="flex justify-center gap-4 items-center p-4">
        <button
          style={{opacity: index == 1 ? 0.5 : 1}} 
          className="bg-amber-400 cursor-pointer active-scale-95 text-black rounded px-4 py-2 font-semibold"
          onClick={() => {
            if(index > 1) {
              setIndex(index - 1)
              setUserData([]) // when the index is changed, the userData is cleared to show the loading state
            }
          }}
        >
          Previous
        </button>
        <h4>Page {index}</h4>
        <button 
          className="bg-amber-400 cursor-pointer active-scale-95 text-black rounded px-4 py-2 font-semibold ml-2"
          onClick={() => {
            setIndex(index + 1)
            setUserData([]) // when the index is changed, the userData is cleared to show the loading state
          }}
        >
          Next
        </button>
      </div>
      
    </div>
  )
}

export default App

import { useEffect, useState} from 'react'
import axios from 'axios'

const App = () => {
  const [userData, setUserData] = useState([])

  const getData = async() => {
    const response = await axios.get('https://picsum.photos/v2/list?page=6&limit=70')
    //console.log(response.data)
    setUserData(response.data)
  }

  useEffect(function() {
    (async () => {
      await getData()
    })()
  }, [])

 let printUserData = <h3 className="text-gray-400 text-xl">No Data Available</h3>

  if(userData.length > 0) {
    printUserData = userData.map(function(elem) {
      return <div>
      <a href={elem.url} target="_blank" >
        <div className="h-40 w-44 overflow-hidden bg-white rounded-xl">
          <img className="h-full w-full object-cover" src={elem.download_url} alt="" />
        </div>
        <h2 className="font-bold text-medium">{elem.author}</h2>
      </a>
      </div>
    })
  }
  return (
    <div className="bg-black overflow-auto h-screen text-white">       
      <div className = "flex flex-wrap gap-4">
        {printUserData}
      </div>
      
    </div>
  )
}

export default App

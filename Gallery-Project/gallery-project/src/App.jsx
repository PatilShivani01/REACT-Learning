import React, { useState} from 'react'
import axios from 'axios'

const App = () => {
  const [userData, setUserData] = useState([])

  const getData = async() => {
    const response = await axios.get('https://picsum.photos/v2/list?page=6&limit=70')
    //console.log(response.data)
    setUserData(response.data)
  }

  let printUserData = 'No Data Available'

  if(userData.length > 0) {
    printUserData = userData.map(function(elem, idx) {
      return <div>
        <div className="h-40 w-44 overflow-hidden bg-white rounded-xl">
          <img className="h-full w-full object-cover" src={elem.download_url} alt="" />
        </div>
        <h2 className="font-bold text-medium">{elem.author}</h2>
      </div>
    })
  }
  return (
    <div className="bg-black overflow-auto h-screen text-white"> 
      <button 
      onClick={getData}
      className="bg-green-600 active:scale-95 mb-3 px-5 py-2 rounded text-white">
      get data
      </button>

      <div className = "flex flex-wrap gap-4">
        {printUserData}
      </div>
      
    </div>
  )
}

export default App

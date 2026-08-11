import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  // calling the api using fetch and getting the response
  async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(response)
  }

  const newData = async() => {
    const getResponse = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    const readData = await getResponse.json()

    console.log(readData)
  }

  // calling the api using axios and getting the response

  const axiosData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')

    console.log(response.data);
  }


  // lorem picsum api for getting the image
  const [data, setData] = useState([])
 
  const getImage = async () => {
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=10')
    setData(response.data)
  }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <button onClick={newData}>New Data</button>
      <button onClick={axiosData}>Axios Data</button>
      <button onClick={getImage}>Get Image</button>
          <div>
            {data.map(function(elem, idx) {
              return (
                <div key={elem.id} style={{ marginBottom: 12 }}>
                  <img src={elem.download_url} alt={elem.author} style={{ width: 150, height: 'auto' }} />
                  <h3>Hello {idx} - {elem.author}</h3>
                </div>
              )
            })}
          </div>
    </div>
  )
}

export default App

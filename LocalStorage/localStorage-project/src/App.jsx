import React from 'react'

const App = () => {
  // localStorage.setItem('user', 'shivani patil')

  // const findUser =localStorage.getItem('user')
  // console.log(findUser)

 // localStorage.removeItem('user')

 const student = {
    name: 'vani',
    age: 22,
    city: 'Banaras',
    School: 'PVPIT'
 }

 localStorage.setItem('student', JSON.stringify(student))  // object can store the in localStorage by converting it into string using JSON.stringify()
 
 const findStudent =JSON.parse(localStorage.getItem('student'))  // to get the object from localStorage we need to convert it into object using JSON.parse()
 console.log(findStudent)


  return (
    <div>
      
    </div>
  )
}

export default App

//import React from 'react'

const App = () => {
  function btnClick() {
      console.log('button is clicked');
    }

    function mouseEnter() {
      console.log('mouse is entered');
    }

    function inputChanging(val) { //recieve the value
      console.log(val); //print the value
    }

    function pageScrollig(val) {
      if(val<0) {
        console.log('seedha scrolling');
      }else {
        console.log('ulta scrolling');
      }
    }

    

    
  return (
    <div>
      <button onClick={btnClick}>Click Me!</button>

      <button onMouseEnter={mouseEnter} onClick={btnClick}>Hello</button>

      <button onClick={() => { //make function and add eventlistner at a time
        console.log("Clicked")
      }}>Hello Guys</button>


      <input  
        onChange={function(elem){
          inputChanging(elem.target.value) //calling the function inputChanging and also passing the value to inputChanging
        }}
        type="text" 
        placeholder="Enter Name"></input>

        <div onMouseMove={(elem) => {
          console.log(elem.clientY);
        }} className="box"></div>


        <div onWheel={(elem) => {
          pageScrollig(elem.deltaY)
        }} className="mainDiv">
          <div className="div1">div1</div>
          <div className="div2">div2</div>
          <div className="div3">div3</div>
        </div>
      
    </div>
  )
}

export default App



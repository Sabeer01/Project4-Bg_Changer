import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
function App() {
  const [colour, setcolour] = useState("White")
  return (
       <div style={{background: colour, height:'742px'}}>
            <div style={{height:'400px', width:'50%', marginLeft:'350px', paddingTop:'50px'}}>
              <button  className='btn bg-dark d-block mb-5 mx-auto text-white' onClick={(e) => setcolour("red")} style={{backgroundColor:'red'}}>Click for red</button>
              <button className='btn bg-dark d-block my-5 mx-auto text-white' onClick={(e) => setcolour("yellow")} style={{backgroundColor:'yellow'}}>Click for yellow</button>
              <button className='btn bg-dark d-block my-5 mx-auto text-white' onClick={(e) => setcolour("blue")} style={{backgroundColor:'blue'}}>Click for blue</button>
              <button className='btn bg-dark d-block my-5 mx-auto text-white' onClick={(e) => setcolour("green")} style={{backgroundColor:'blue'}}>Click for green</button>
              <button className='btn bg-dark d-block my-5 mx-auto text-white' onClick={(e) => setcolour("orange")} style={{backgroundColor:'blue'}}>Click for orange</button>
              <button className='btn bg-dark d-block my-5 mx-auto text-white' onClick={(e) => setcolour("purple")} style={{backgroundColor:'blue'}}>Click for purple</button>
              <button className='btn bg-dark d-block my-5 mx-auto text-white' onClick={(e) => setcolour("pink")} style={{backgroundColor:'blue'}}>Click for pink</button>
            </div>
       </div>
  )
}

export default App
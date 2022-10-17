import { useState } from 'react';
import './App.css';

function App() {
  
  const[hori,setHori]=useState(20);
  
  const[vert,setVert]=useState(20);
  const[blur,setBlur]=useState(20);
  const[color,setColor]=useState('yellow');
  
  return (
    <>
    <h1>PHOTOSHOP</h1>
    <div id='container' >
      
      <div id="left">

      
        <input type="range" onChange={(e)=>{
          setHori(e.target.value)
        }} value={hori} className="form-range" min="-200" max="200" id="customRange2"/>

        <input type="range" value={vert}  onChange={(e)=>{
          setVert(e.target.value)
        }} className="form-range" min="-200" max="200" id="customRange2"/>

        <input type="range" value={blur} onChange={(e)=>{
          setBlur(e.target.value)
        }}  className="form-range" min="-200" max="200" id="customRange2"/>

        
        <input type="color" onChange={(e)=>{
          setColor(e.target.value)
        }} value={color}  id="customRange2"/>

        



      </div>

      <div id="right" style={{boxShadow:`${hori}px ${vert}px ${blur}px ${color}`}} >

      </div>
                      
    </div>
    </>
  );
}

export default App;

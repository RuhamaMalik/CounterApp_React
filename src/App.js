import "./styles.css";
import ReactDOM from "react-dom";
import React, { useState } from 'react' ;

export default function App() {
  

    const [num , setNum] = useState(5);
  const decrease = ()=>{
    if(num === 0){
      alert("The number cannot be less than 0 ");
    }else{
      setNum(num-1);
    }
    
    }
  const increase = ()=>{
    setNum(num+1)
    }
     const reset = ()=>{
       setNum(0);
       }
  
  return (
    <>
    <div className="App">
      <div className="parent" >
        <h1> {num}</h1>
        <div>
        <button onClick={decrease} >-</button>
        <button onClick={increase} >+</button ><br />
        <button onClick={reset} >Reset</button >
      </div>
        </div>
    </div>
      </>
  );
}

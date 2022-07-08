import React, { useState,useEffect,useRef } from "react";
import "./App.css"
const Calculator = (e) => {
  const [resutl, setResult] = useState('')
  
  // const [keys, setKeys] = useState('')

  
  const opr = ['+', '-', '*', '/', '.']
  let str=''
   
  const handler = (e) => {
    if (
      opr.includes(e.target.value) && resutl ==='-'  ||
      opr.includes(e.target.value) && opr.includes(resutl.slice(-1)))
      
    {return;}
    setResult(resutl.concat(e.target.value));
  };
  const clear = () => {
    setResult("");
  };


  const ans = (e) => {
     setResult(eval(resutl.toString()));
  };

  let  key = (e) =>{

    console.log(e.keyCode);
    if(e.keyCode >=96 && e.keyCode <=111){
    setResult(resutl.concat(e.key))
   } 

   else if(e.keyCode===13){
    setResult(eval(resutl.toString()));
    console.log('sdf');
   }
   else if(e.keyCode===8){
    setResult(resutl.slice(0,-1))
   }
   
   else if(e.keyCode===46){
    setResult("");
   }
   return;
    
}
const inputElement = useRef();
const focusInput = () => {
  inputElement.current.focus();
};
 
useEffect(() => {
  focusInput()
}) 

  return (
    <>
    
   <div className="main"  >
    <div className="main">
      <div className="input">
        <input type="text" onKeyDown={key} id="inputs" value={resutl || 0}  ref={inputElement}  />
      </div>
<div className="buttons">
    <div className="opration">
          <button className='btn' value="+" onClick={handler}>+</button>
          <button className='btn' value="-" onClick={handler}>-</button>
          <button className='btn' value="*" onClick={handler}>*</button>
          <button className='btn' value="/" onClick={handler}>/</button>
      </div>
 <div className="keypadj">
  <div className="keypadi">
    <button value="7" onKeyDown={key} onClick={handler}>7</button>
    <button value="4" onKeyDown={key} onClick={handler}>4</button>      
    <button value="1" onKeyDown={key} onClick={handler}>1</button>   
    <button value="0" onKeyDown={key}  onClick={handler}>0</button> 
    {/* <input type="text" className="keybord" onKeyUp={key} value='0' />  */}
  </div>      
  <div className="keypadi">
    <button value="8" onClick={handler}>8</button>
    <button value="5" onClick={handler}>5</button>      
    <button value="2" onClick={handler}>2</button>   
    <button value="." onClick={handler}>.</button>  
  </div>
  <div className="keypadi"> 
    <button value="9" onClick={handler}>9</button>
    <button value="6" onClick={handler}>6</button>      
    <button value="3" onClick={handler}>3</button>   
    <button className="btn" value="C" onClick={clear}>C</button>  
  </div> 
  <div className="keypadi">
    <button id="equal" value="=" onClick={ans}>=</button>
  </div>   
  </div>
        
  </div>

    </div>
    </div>
    </>
  );
};

export default Calculator;

import React from 'react'

export default function Chackbox() {
    const hendalcheckbox =(e)=>{
        console.log(e.target.value);
    }
const data = (e) =>{
  e.target.checked

};

  return (
    <div className='container'>
        <h1>select fav. lan</h1>
        <input type="checkbox" name='java'  onChange={hendalcheckbox} value='JAVA'  checked={data} />java
        <input type="checkbox" name='react' onChange={hendalcheckbox} value='REACT' checked={data}  />react
      
    </div>
  )
}

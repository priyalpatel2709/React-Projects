import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Singup = () => {
  const [show,setshow]=useState(true)
  let location =useLocation()
  if(location.key===""){
    setshow(false)
  }
  
  console.log(location);
  return (
    <>
    <div>
      {show && <h1>i am singup</h1>}
      <h1>{location.state.info}</h1>
    </div>
    </>
  )
}

export default Singup

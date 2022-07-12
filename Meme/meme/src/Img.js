import React from 'react'

const Img = (props) => {
  const thingsArray = ["Thing 1", "Thing 2"]
  let a =thingsArray.map(e=><p >{e}</p>)



  let add=()=>{
    const newThingText = `Thing ${thingsArray.length + 1}`
    thingsArray.push(newThingText)
    console.log(thingsArray)

  }
  return (
    <>
      <div>
      <button onClick={add}>Add Item</button>
      {a}   
      </div>
    </>
  )
}

export default Img

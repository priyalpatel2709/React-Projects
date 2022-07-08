import React, { useReducer } from 'react'

// let i=0;
const reducer =(state,action)=>{
    console.log(action);
    return state;
}

const UseReducer = () => {
  const[state,dispatch]= useReducer=(reducer,1)

  return (
    <>
        <div>
        <h1>{state}</h1>
        <button >+</button> <br /> <hr />
        <button >-</button>
      
        </div>
    </> 
  )
}

export default UseReducer

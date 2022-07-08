import React from 'react'
  
const UseRef = () => {
    const mystyle = {
        color: "black",
        backgroundColor: "#7FFFD4",
        padding: "10px",
        fontFamily: "Arial"
      };
  return (
    <div>
    <h1 style={mystyle}>{`UseRef :)`}</h1>  
    </div>
  )
}
  
export default UseRef

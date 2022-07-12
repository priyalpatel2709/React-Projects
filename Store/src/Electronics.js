import React, { useState } from "react";

const Electronics = (props) => {
  // console.log(props.edata.stocked);
   
  return (
    
    <>
      
      <table  align="center">
      <tr>
          <th> <b>NAME</b>   </th>
          <th><b>PRICE</b></th>
        </tr>
        <tr style={props.stock ? { color: "black" } : { color: "red" }}>
          <td>{props.ename}</td>
          <td>{props.eprice}</td>
        </tr>
      </table>
    </>
  );
};
export default Electronics;

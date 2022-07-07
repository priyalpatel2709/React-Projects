import React, { useState } from "react";

const Sport = (props) => {
  return (
    <>
    
      <table align="center" >
        <tr>
          <th> <b>NAME</b>   </th>
          <th><b>PRICE</b></th>
        </tr>
        <tr style={props.stock ? { color: "black" } : { color: "red" }}>
          <td>{props.sname}</td>
          <td>{props.sprice}</td>
        </tr>
      </table>
    </>
  );
};
export default Sport;

import React from "react";
// import './temp.css';

export default function item(props) {
  // let color=() =>
  //   if (props.stocked) {
  //      color = "#F6E3C5";
  //   } else {
  //     color = "#B20600";
  //   }

  return (
    <div>
      {/* <div>{props.name}</div>
      <div> {props.price} </div> */}

      <table>
          <th>Name <tr> {props.name} </tr></th>
          <th>price <tr> {props.price}</tr></th>
      </table>
    </div>
  );
}
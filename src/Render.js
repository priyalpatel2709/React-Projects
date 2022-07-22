import React from "react";
import "./index.css";

export default function Render(item) {
  const FinalData = (
    <>
      <tr>
        <td className={item.data.stocked ? "item-stocked" : "item-outstocked"}>
          {item.data.name}
        </td>
        <td>{item.data.price}</td>
      </tr>
    </>
  );

  return FinalData;
}

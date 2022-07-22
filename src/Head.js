import React from "react";
let temp = "";

function Head({ category }) {
  return (
    <>
      <thead>
        <tr>
          <th>{category}</th>
        </tr>
      </thead>
    </>
  );
}
export default Head;

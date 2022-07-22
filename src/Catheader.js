import React from "react";
import "./index.css";
let lastcat = "";

function Header({ data }) {
  console.log(data);

  if (data !== lastcat) {
    lastcat = data;
    return <h4>{lastcat}</h4>;
  } else {
    return <h4>{}</h4>;
  }
}
export default Header;

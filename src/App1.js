import React, { useState } from "react";
import "./App.css";
import { Data } from "./data";
import Head from "./Head";
function App1() {
  const [data, setData] = useState(Data);
  const [check, setChack] = useState(false);
  const [search, setSearch] = useState("");
  const rows = [];

  const change = () => {
    setChack(!check);
  };
  const checkHandler1 = (event) => {
    const sdata = Data.filter((e) => {
      if (event.target.value === "") {
        return e;
      } else if (
        e.name.toLowerCase().includes(event.target.value.toLowerCase())
      ) {
        return e;
      }
    });
    if (sdata) {
      setData(sdata);
    } else {
      setData(Data);
    }
  };

  let lastCategory = null;

  data
    .filter((ele) => {
      return check ? ele.stocked : ele;
    })
    .forEach((product) => {
      // console.log(lastCategory);
      if (product.category !== lastCategory) {
        rows.push(<Head category={product.category} key={product.category} />);
      }
   rows.push(
        <>
          <tbody>
            <tr>
              <td
                style={product.stocked ? { color: "black" } : { color: "red" }}
              >
                {product.name}
              </td>
              <td>{product.price}</td>
            </tr>
          </tbody>
        </>
      );
      lastCategory = product.category;
    });

  console.log(data);
  return (
    <>
      <></>
      <div className="App">
        IN STOCKED:-
        <input type="checkbox" onChange={change} checked={check} /> <br />
        <input type="text" onChange={checkHandler1} />{" "}
        <table align="center">
          <thead>
            <th>Name</th>
            <th>Price</th>
          </thead>
          {rows}
        </table>
      </div>
    </>
  );
}

export default App1;

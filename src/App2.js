import React from "react";
import {Data} from "./data";
import "./index.css";
import Render from "./Render";
import Header from "./Header";
import Catheader from "./Catheader";

export default function App() {
  const [checked, setChecked] = React.useState(false);
  const [data, setData] = React.useState(Data);

  const ref = React.useRef();
  React.useEffect(() => {
    ref.current.focus();
  }, []);

  function stockToggle() {
    setChecked((preVal) => !preVal);
  }

  const handleSearch = (e) => {
    // eslint-disable-next-line array-callback-return
    const finaldata = Data.filter((row) => {
      if (e.target.value === "") {
        return row;
      } else if (
        row.name.toLowerCase().includes(e.target.value.toLowerCase())
      ) {
        return row;
      }
    });

    if (finaldata) {
      setData(finaldata);
    } else {
      setData(Data);
    }
  };

  const FinalData = data
    .filter((Cont) => {
      return checked ? Cont.stocked : Cont;
    })
    .filter((Cont) => {
      return Cont.category === "Sporting Goods" ? Cont : Cont;
    })
    .map((item, index) => {
      return (
        <>
          {" "}
          {index === 0 && <Header />}
          <Catheader data={item.category} />
          <Render data={item} />
        </>
      );
    });
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        ref={ref}
        onChange={handleSearch}
        className="search-input"
      />
      <div className="label-toggle">
        <input
          id="toggle"
          type="checkbox"
          name="toggle"
          onChange={stockToggle}
          checked={checked}
        />
        <label for="toggle" className="label-toggle-text">
          Only show products in stock.
        </label>
      </div>

      {FinalData}
    </div>
  );
}

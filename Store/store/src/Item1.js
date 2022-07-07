import React, { useState, useEffect } from "react";
import { items } from "./itemList";
import Sport from "./Sport";
import Electronics from "./Electronics";

const Itme1 = () => {
  const [ndata, setNdata] = useState(items);
  const [ai, setAi] = useState(items.length);
  let Electronicsdata = ndata.filter((item) => item.category === "Electronics");
  let sportitemdata = ndata.filter(
    (item) => item.category === "Sporting Goods"
  );

  const [edata, setEdata] = useState(Electronicsdata);
  const [sdata, setSdata] = useState(sportitemdata);
  const [isChecked, setIsChecked] = useState(false);
  const [search, setSearch] = useState("");

  const eledata = edata.filter((e) => {
    if (search === "") {
      return e;
    } else if (e.name.toLowerCase().includes(search.toLowerCase())) {
      return e;
    }
  });
  const spdata = sdata.filter((e) => {
    if (search === "") {
      return e;
    } else if (e.name.toLowerCase().includes(search.toLowerCase())) {
      return e;
    }
  });

  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);


  let sta = (spdata || sdata).map((e) => e.price);
  let sstr = sta.join("");
  var spri = sstr.replace(/\$/g, " ");
  let sarr = spri.split(" ");
  let ssum = sarr.reduce((a, b) => a + Number(b), 0);
  let sn = ssum.toFixed(2);

  //------------------------------------------------------------------------
  let eta = (eledata || edata).map((e) => e.price);
  let estr = eta.join("");
  var epri = estr.replace(/\$/g, " ");
  let earr = epri.split(" ");

  let esum = earr.reduce((a, b) => a + Number(b), 0);
  let en = esum.toFixed(2);

  const electronics = eledata.map((e) => (
    <div>
      <Electronics
        edata={edata}
        ename={e.name}
        eprice={e.price}
        stock={e.stocked}
      />
    </div>
  ));
  const sport = spdata.map((e) => (
    <div>
      <Sport
        sdata={sdata}
        sname={e.name}
        sprice={e.price}
        stock={e.stocked}
        table={
          <table>
            <tr>
              <th>NAME</th>
            </tr>
          </table>
        }
      />
    </div>
  ));
  const checkHandler1 = (e) => {
    setSearch(e.target.value);
  };
  let al = spdata.length + spdata.length;
  useEffect(() => {
    if (sn == 0) {
      setShow1(false);
    } else if (en == 0) {
      setShow(false);
    }

    setAi(al);
    return () => {
      setShow(true);
      setShow1(true);
    };
  });

  const checkHandler = () => {
    let temp = edata.filter((e) => e.stocked === true);
    let temp1 = sdata.filter((e) => e.stocked === true);
    setIsChecked(!isChecked);
    isChecked ? setEdata(Electronicsdata) : setEdata(temp);
    isChecked ? setSdata(sportitemdata) : setSdata(temp1);
  };

  let t = Number(en) + Number(sn);
  console.log(ai);
  return (
    <>
      <input type="text" placeholder="search..." onChange={checkHandler1} />{" "}
      <br />
      <input
        type="checkbox"
        id="checkbox"
        checked={isChecked}
        onChange={checkHandler}
      />
      <label htmlFor="checkbox">Only show products in stock </label>
      {Number(ai)>0 && <h1>Total Items :- {ai}</h1>}
      <div className="App">
        {eledata.length>0 && <h1>Electronics</h1>}
        {electronics}

        {spdata.length>0 && <h1>Sport</h1>}

        {sport}
       
      </div>
     { Number(t)>0 && <h1>Total :- {t.toFixed(2)} </h1>}
      {t == 0 && <h1 style={{color : 'red'}}>Not Found</h1>}
    </>
  );
};
export default Itme1;

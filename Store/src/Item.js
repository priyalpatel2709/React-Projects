import React, { useState } from "react";
import { items } from "./itemList";
import Sport from "./Sport";
import Electronics from "./Electronics";

const Itme = () => {
  const [ndata, setNdata] = useState(items);
  const [show, setShow] = useState(true);

  var temp3 = '';
  var temp4 = [];

  let Electronicsdata = ndata.filter((item) => item.category === "Electronics");
  let sportitemdata = ndata.filter(
    (item) => item.category === "Sporting Goods"
  );

  const [edata, setEdata] = useState(Electronicsdata);
  const [sdata, setSdata] = useState(sportitemdata);
  const [isChecked, setIsChecked] = useState(false);
  const [search, setSearch] = useState("");

  const checkHandler = () => {
    let temp = edata.filter((e) => e.stocked === true);
    let temp1 = sdata.filter((e) => e.stocked === true);
    setIsChecked(!isChecked);
    isChecked ? setEdata(Electronicsdata) : setEdata(temp);
    isChecked ? setSdata(sportitemdata) : setSdata(temp1);
  };
  let sta = sdata.map((e) => e.price);
  let sstr = sta.join("");
  var spri = sstr.replace(/\$/g, " ");
  let sarr = spri.split(" ");
  let ssum = sarr.reduce((a, b) => a + Number(b), 0);
  let sn = ssum.toFixed(2);
  console.log(sn);
  //------------------------------------------------------------------------
  let eta = edata.map((e) => e.price);
  let estr = eta.join("");
  var epri = estr.replace(/\$/g, " ");
  let earr = epri.split(" ");
  let esum = earr.reduce((a, b) => a + Number(b), 0);
  let en = esum.toFixed(2);
 console.log(en);
  
 let t= en+sn

  return (
    <>
      <input
        type="text"
        placeholder="search..."
        onKeyDown={() => setShow((preval) => !preval)}
        onChange={(e) => {
          setSearch(e.target.value)
          ;
        }}
      />{" "}
      <br />
      <input
        type="checkbox"
        id="checkbox"
        checked={isChecked}
        onChange={checkHandler}
      />
      <label htmlFor="checkbox">Only show products in stock </label>


      <div className="App">

        <h1>Electronics</h1>
        {edata
          .filter((e) => {
            if (search === "") {
              temp3 += e.price;
              return e;
            } else if (e.name.toLowerCase().includes(search.toLowerCase())) {
              let  et=  temp3 += e.price;
              return e;
            }
          })

          .map((e) => (
            <div>
              <Electronics
                edata={edata}
                ename={e.name}
                eprice={e.price}
                stock={e.stocked}
              />
            </div>
          ))}
        {/* {show && <h3>total is :- {en}</h3>} */}
        {/* <h3>total is :- {en}</h3> */}
        {/* <h1>st : {en} </h1>
          <h1>{t}</h1> */}
          
        
{/* //-------------------------------------------------------------------------------------------- */}
        <h1>sport</h1>
        {sdata
          .filter((e) => {
            if (search === "") {

              return e;
            } else if (e.name.toLowerCase().includes(search.toLowerCase())) {
              return e;
            }
          })
          .map((e) => (
            <div>
              <Sport
                sdata={sdata}
                sname={e.name}
                sprice={e.price}
                stock={e.stocked}
              />
            </div>
          ))}
      </div>
      {/* {show && <h3>total is :- {sn}</h3>} */}
      {/* {sn} */}
      {/* <h1> total= ${sn}</h1> */}
      {t}
    </>
  );
};
export default Itme;

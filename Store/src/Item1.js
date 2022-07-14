import React, { useState, useEffect,useRef  } from "react";
import { items } from "./itemList";
import Sport from "./Sport";
import Electronics from "./Electronics";

const Itme1 = () => {
  const inputElement = useRef();
  const [alldata, setAlldata] = useState(items);
  const [total_items_length, setTotal_items_length] = useState(items.length);
  
  let Electronicsdata = alldata.filter((item) => item.category === "Electronics");
  let sportitemdata = alldata.filter((item) => item.category === "Sporting Goods");
    
  

  const [filter_e_data, setFilter_e_data] = useState(Electronicsdata);
  const [filter_s_data, setFilter_s_data] = useState(sportitemdata);
  const [isChecked, setIsChecked] = useState(false);
  const [search, setSearch] = useState("");

  const search_e_data = filter_e_data.filter((e) => {
    if (search === "") {
      return e;
    } else if (e.name.toLowerCase().includes(search.toLowerCase())) {
      return e;
    }
  });
  const search_s_data = filter_s_data.filter((e) => {
    if (search === "") {
      return e;
    } else if (e.name.toLowerCase().includes(search.toLowerCase())) {
      return e;
    }
  });




  let sta = (search_s_data || filter_s_data).map((e) => e.price);
  let sstr = sta.join("+").replace(/\$/g, "");
   let sn =  eval(sstr.toString()) ;
  //------------------------------------------------------------------------
  let eta = (search_e_data || filter_e_data).map((e) => e.price);
  let estr = eta.join("+").replace(/\$/g, "");
  let en = eval(estr.toString());

  const electronics = search_e_data.map((e) => (
    <div>
      <Electronics
        filter_e_data={filter_e_data}
        ename={e.name}
        eprice={e.price}
        stock={e.stocked}
      />
    </div>
  ));
  const sport = search_s_data.map((e) => (
    <div>
      <Sport
        filter_s_data={filter_s_data}
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
  let al = search_s_data.length + search_s_data.length;
  useEffect(() => {
   setTotal_items_length(al);
   focusInput()
  });

  const checkHandler = () => {
    let temp = filter_e_data.filter((e) => e.stocked === true);
    let temp1 = filter_s_data.filter((e) => e.stocked === true);
    setIsChecked(!isChecked);
    isChecked ? setFilter_e_data(Electronicsdata) : setFilter_e_data(temp);
    isChecked ? setFilter_s_data(sportitemdata) : setFilter_s_data(temp1);
  };

  let t = Number(en) + Number(sn);
  // console.log(total_items_length);
  const focusInput = () => {
    inputElement.current.focus();
  };
  return (
    <>
      <input type="text" placeholder="search..." onChange={checkHandler1}  ref={inputElement}/>{" "}
      <br />
      <input
        type="checkbox"
        id="checkbox"
        checked={isChecked}
        onChange={checkHandler}
      />
      <label htmlFor="checkbox">Only show products in stock </label>
      {Number(total_items_length)>0 && <h1>Total Items :- {total_items_length}</h1>}
      <div className="App">
        {search_e_data.length>0 && <h1>Electronics</h1>}
        {electronics}

        {search_s_data.length>0 && <h1>Sport</h1>}

        {sport}
       
      </div>
     { Number(t)>0 && <h1>Total :-{t.toLocaleString("en-US", {style: "currency", currency: "USD"})} </h1>}
      {t == 0 && <h1 style={{color : 'red'}}>Not Found</h1>}
    </>
  );
};
export default Itme1;

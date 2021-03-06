import React, { useState, useEffect,useRef  } from "react";
import { items } from "./itemList";
import Sport from "./Sport";
import Electronics from "./Electronics";

const Itme3 = () => {
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




  let s_price = (search_s_data || filter_s_data).map((e) => e.price);
  
  let sstr = s_price.join(" ").replace(/\$/g," ").split(" ");
  let sstr1 = s_price.join("+").replace(/\$/g,"")
  let e_total =  eval(sstr1) ;
  

  let ssum = sstr.reduce((a, b) => a + Number(b), 0);
  let sn = ssum.toFixed(2);
  let sn1 = e_total;
  console.log(sn);
  console.log(sn1);

  //  console.log(typeof sport_total);
  //------------------------------------------------------------------------
  let e_price = (search_e_data || filter_e_data).map((e) => e.price);

  
  let str = e_price.join(" ").replace(/\$/g," ").split(" ");
  let str1 = e_price.join("+").replace(/\$/g,"");
  console.log(str1);
  let sport_total =  eval(str1) ;
  let esum = str.reduce((a, b) => a + Number(b), 0);
  let en = esum.toFixed(2);  
  let en1 = sport_total;  
  console.log(en);
  console.log(en1);

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

//   let t = Number(en) + Number(sn)
  let t = Number(en1) + Number(sn1)
  console.log(t);
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
     {t>0 &&  <h1>Total :-{t} </h1>}
      {t == 0 && <h1 style={{color : 'red'}}>Not Found</h1>}
    </>
  );
};
export default Itme3;

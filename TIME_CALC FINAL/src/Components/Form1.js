import React, { useState, useEffect } from "react";
import "./Form.css";
import Gohome from "./Gohome";
const Form = () => {
  const now = new Date();
  const current_h = now.getHours() - 12;
  const current_m = now.getMinutes();

  // const [h, setH] = useState();
  const [value, setValue] = useState({
   min : " "
    
  });
  const [sh, setsH] = useState(0);
  const [sm, setsM] = useState("");
  const [extra, setExtra] = useState("");
  const [state, setstate] = useState({
    state :false,
    state1 :false,
    disable : false
  });
  // const [state1, setstate1] = useState(false);
  // const [state1, setstate1] = useState(null);
  const [hl, setHl] = useState("0");
  const [ml, setMl] = useState("0");

  const handelclick = () => {
    setstate(preval=>({...preval,state:true}));

     if (extra) {
      setsM(
        (Number(m) + Number(extra)).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false
        })
      );
      setsH(6);
    } else {
      setsM(
        m.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false
        })
      );
      setsH(6);
    }
  };
  const timeleft = () => {
    //  console.log(Number(sh)-Number(current_h)  , );
    //  console.log(Number(sm)-Number(current_m));

    if(sh > 6){
      console.log('hi');
      setHl('9')
    } else{
      setHl(Number(sh) - Number(current_h));
    }
    

    if (Number(sm) - Number(current_m) < 0) {
      setMl(60 - (Number(current_m) - Number(sm)));
    } else {
      setMl(Number(sm) - Number(current_m));
    }
    
    //  setstate1(Number(sh)-Number(current_h),Number(sm)-Number(current_m)))
  };
  const onclickk=()=>{
    setstate(preval=>({...preval,state1 : true}))
    console.log('sdgf');
  }
  useEffect(() => {
    if(Number(m) > 60){
     setstate(preval=>({...preval,disable : true}))
    }
    if(hl === 0 && ml === 0 ){
      setstate(preval=>({...preval,state1 :true})) 
     }
    if (sm > 60) {
      setsM(
        (Number(m) + Number(extra) - 60).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false
        })
      );
      setsH(7);
    } else if (sm == 60) {
      setsM("00");
      setsH(7);
    }
   return ()=>{
    setstate(preval=>({...preval,disable : false}))
   }
  }, [sm,hl,m]);
console.log(typeof m);
  return (
    <div>
{ state.state1 ? <Gohome onclickk={onclickk} />  :   <div>
        <input
          type="text"
          value="8"
          className="h"
          // onChange={(e) => setH(e.target.value)}
          placeholder="Hrs"
        />
        :
        <input
          type="text"
          maxLength="2"
          value={m}
          className="m"
          onChange={(e) => setM(e.target.value)}
          placeholder="Min."
        />{" "}
        <br />
        <label htmlFor="extra">extra brake-time </label>
        <input
          type="text"
          maxLength="2"
          value={extra}
          id="extra"
          onChange={(e) => setExtra(e.target.value)}
          placeholder="Min."
        />
        {<button disabled={state.disable} onClick={handelclick}>calculate</button>}
        {state.state && <button onClick={timeleft}>timeleft</button>}
        {
          <>
            {state.state && (
              <h1>
                {sh} : {sm} <span>PM</span>{" "}
              </h1>
            )}
            {hl != 0 && (
              <h1>
                {hl} :{" "}
                {ml.toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                  useGrouping: false
                })} 
              </h1>
            )}
          </>
        }
      </div>}
    </div>
  );
};

export default Form;

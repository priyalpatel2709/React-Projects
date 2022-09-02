import React, { useState, useEffect, useRef } from "react";
import "./Form.css";
import Gohome from "./Gohome";
const Form = () => {
  const inputElement = useRef();
  const focusInput = () => {
    inputElement.current.focus();
  };
  const now = new Date();
  const current_h = now.getHours() - 12;
  const current_m = now.getMinutes();
  const [m, setM] = useState("");
  const [h, setH] = useState(8);
  const [sh, setsH] = useState(0);
  const [sm, setsM] = useState("");
  const [extra, setExtra] = useState("");
  const [state, setstate] = useState({
    state: false,
    state1: false,
    disable: false,
    timeleft: false
  });
  const [hl, setHl] = useState("0");
  const [ml, setMl] = useState("0");

  const handelclick = () => {
    setstate((preval) => ({ ...preval, state: true }));
    if (m == "" || m == null) {
      setsM("00");
    }
    if (extra) {
      setsM(
        (Number(m) + Number(extra)).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false
        })
      );
      let temp = Number(h) + 10;
      console.log(temp);
      if (temp > 12) {
        setsH(temp - 12);
      } else {
        setsH(temp);
      }
    } else {
      setsM(
        m.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false
        })
      );
      let temp = (Number(h * 60) + 600) / 60;
      if (temp > 12) {
        setsH(temp - 12);
      } else {
        setsH(temp);
      }
    }
  };
  const timeleft1 = () => {
    setstate((preval) => ({ ...preval, state1: true }));
    // console.log('hi');
    // setstate((preval) => ({ ...preval, timeleft }));
    let temp = Number(sh) * 60 + Number(sm) - (current_h * 60 + current_m);
    var num = temp;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    console.log(rhours);
    console.log(rminutes);

    if (rhours < 0 || rminutes < 0) {
      setstate((preval) => ({ ...preval, timeleft: true }));
      console.log("hi");
    } else if (rhours == 0) {
      // console.log('hii');
      setHl(rhours);
      setMl(rminutes);
      startTimer(rminutes * 60);
    } else {
      console.log("by");
      setHl(rhours);
      setMl(rminutes);
    }
  };
  function startTimer(duration) {
    var timer = duration,
      minutes,
      seconds;
    setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      // display.textContent = minutes + ":" + seconds;
      // console.log(`${minutes}:${seconds}`);
      setHl(minutes);
      setMl(seconds);

      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
  }
  function showTime() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    if (h == 0) {
      h = 12;
    }

    if (h > 12) {
      h = h - 12;
      session = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);
  }
  const halfday = () => {
    setstate((preval) => ({ ...preval, state: true }));
    console.log("hi");
    if (extra) {
      setsM(
        (Number(m) + Number(extra)).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false
        })
      );
      // let temp=((Number(h*60)+300)/60)
      let temp = (Number(h * 60) + 120) / 60;
      if (temp > 12) {
        setsH(temp - 12);
      } else {
        setsH(temp);
      }
    } else {
      setsM(
        m.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false
        })
      );
      // let temp=((Number(h*60)+300)/60)
      let temp = (Number(h * 60) + 120) / 60;
      console.log(temp);
      if (temp > 12) {
        setsH(temp - 12);
      } else {
        setsH(temp);
      }
    }
  };
  const onclick = () => {
    setstate((preval) => ({ ...preval, state1: false, timeleft: false }));
  };
  useEffect(() => {
    focusInput();
    showTime();
    if (Number(m) > 60 || Number(m) < 0) {
      setstate((preval) => ({ ...preval, disable: true }));
    }
    if (hl == 0 && ml < 0) {
      setstate((preval) => ({ ...preval, timeleft: true }));
      startTimer(0);
    }
    if (sm > 60) {
      setsM(
        (Number(m) + Number(extra) - 60).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false
        })
      );
      setsH(Number(h) + 10 - 12 + 1);
    } else if (sm == 60) {
      console.log("ft");
      setsM("00");
      setsH(7);
    }

    return () => {
      setstate((preval) => ({ ...preval, disable: false }));
    };
  }, [sm, hl, m, ml, state.disable, state.timeleft]);
  // console.log(h,m);
  return (
    <>
      <div className="container">
        <div id="MyClockDisplay" className="clock" onLoad={showTime}></div>
        {state.timeleft ? (
          <Gohome onclick={onclick} />
        ) : (
          <div className="time">
            <div>
              <div className="container">
                <input
                  size="2"
                  type="text"
                  value={h}
                  className="h"
                  onChange={(e) => setH(e.target.value)}
                  placeholder="Hrs"
                />
                <span>:</span>
                <input
                  ref={inputElement}
                  size="2"
                  type="text"
                  maxLength="2"
                  value={m}
                  className="m"
                  onChange={(e) => setM(e.target.value)}
                  placeholder="Min."
                  autoComplete="off"
                />
              </div>
              <br />
              <div className="container">
                {/* <label htmlFor="extra">extra brake-time :- </label> */}
                <input
                  className="extra"
                  type="text"
                  maxLength="2"
                  value={extra}
                  id="extra"
                  onChange={(e) => setExtra(e.target.value)}
                  placeholder="Extra Break Time in  Min."
                  autoComplete="off"
                />
              </div>
              <br />
              <button
                className={
                  !state.disable
                    ? "btn btn-primary mx-3"
                    : "btn btn-danger  mx-3"
                }
                disabled={state.disable}
                onClick={handelclick}
              >
                {!state.disable ? "calculate" : "enter currect"}
              </button>
              <button
                className={
                  !state.disable
                    ? "btn btn-primary mx-3"
                    : "btn btn-danger  mx-3"
                }
                disabled={state.disable}
                onClick={halfday}
              >
                {!state.disable ? "half day" : "Min's"}
              </button>
              <br /> <br />
              {state.state && (
                <button
                  disabled={!state.state}
                  className="btn btn-primary mt-3"
                  onClick={timeleft1}
                >
                  timeleft
                </button>
              )}
              {
                <>
                  {state.state && (
                    <h1 className="show-time">
                      {sh} : {sm} <span>PM</span>{" "}
                    </h1>
                  )}
                  {state.state1 && (
                    <h1 className="left-time">
                      {hl} :
                      {ml.toLocaleString("en-US", {
                        minimumIntegerDigits: 2,
                        useGrouping: false
                      })}
                    </h1>
                  )}
                  {state.state1 && <p style={{color: "red"}}> *You can't take Break </p>}
                </>
              }
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Form;

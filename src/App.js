import React, { useState } from "react";
import "./App.css";
import { Data } from "./data";
import Head from "./Head";
function App1() {
  const [data, setData] = useState(Data);
  const [check, setChack] = useState(false);
  const [search,setSearch]=useState('')

 

  const change = () => {
    setChack(!check);
 
  };
  const checkHandler1 = (event) => {
    const sdata = Data.filter((e) => {
        if (event.target.value === "") {
          return e;
        } else if (e.name.toLowerCase().includes(event.target.value.toLowerCase())) {
          return e; 
        }
      });
      if(sdata){
        setData(sdata)
      }else{
        setData(Data)
      }
  };
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
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {data.filter(e=>{
            return check ? e.stocked :e
          })
          .map((e,i) => (
            <>
            <Head data={e.category} />
              {/* {e.category !== <Head tr={e.category} />  ?  : null } */}
              <tr>
                <td style={e.stocked ? { color: "green" } : { color: "red" }}>
                  {e.name}
                </td>
                <td>{e.price}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>   
    
    </>

  );
}

export default App1;

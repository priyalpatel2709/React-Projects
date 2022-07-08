import { useState } from "react";
import Data from "./Workshope/Data";
import Item from "../Workshope/Workshope/item";
const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [ndata,setNdata]=useState(Data)
  const [search,setSearch]=useState('')
  // const [total, setTotal] = useState(0);
  // const [color, setColor] = useState(true);
  // const [sportdata,setSportdata]=useState(ndata)
  // const [electronicsdata,setElectronicsdata]=useState(Data)

  let newarr = [...Data];
  console.log(newarr);
  let fil=newarr.filter(e=>e.stocked===true)

  const checkHandler = () => {
    setIsChecked(!isChecked);
    setNdata(fil)
  };

let ta=ndata.map(e => e.price )
 let str=ta.join('')
var pri = str.replace(/\$/g, " ");
let arr=pri.split(' ')
console.log(typeof(arr[0]));
let sum =arr.reduce((a, b) => a + Number(b), 0)
console.log(sum);





  return (
    <>
          <div>
        <input type="text" placeholder='search...' onChange={(e)=>{
          setSearch(e.target.value)
        }}/>
      </div>
      <div>
        <input
          type="checkbox"
          id="checkbox"
          checked={isChecked}
          onChange={checkHandler}
        />
        <label htmlFor="checkbox">Display Items in stock </label>
        <p> {isChecked ? "avalable itel" : "all tiem"}</p>
      </div>
      {/* <div>
        <button className="button2"  onClick={sport} >Sporting Goods</button>
        <button className="button2"  onClick={electronics} >Electronics</button>
      </div> */}
      {/* <div>

      {isChecked ?ndata.map((element, index) => (<Item {...element} key={index} />)) 
           :Data.map((element) =>{if(element.stocked=== true)  {  }

                        (<Item {...element} /> )})}
      </div> */}
      {
        Data
        .filter(e=>{
          if(search===''){
            return e
          }else if(e.name.toLowerCase().includes(search.toLowerCase())){
            return e
          }
        })
      

        .map(e=>
          <div>
            {e.name}
          </div>
 
      )
      }
    {sum} 

    </>
  );
};

export default Checkbox;

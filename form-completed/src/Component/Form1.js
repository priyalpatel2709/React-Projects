
import React from "react";
import { useState } from "react";



export default function Form() {


    const [fristname, setFristname] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [gender, setGender] = useState(true);


    const [data, setData] = useState([]);
   
    const myFunction= () => {
        console.log('clicked');
        const  info = {fristname,phonenumber,gender}
        const arr = Array(info) 
        console.log(info);
        setData (arr)
    }
    const clear =() =>{
       setData([]) 
    }
    const addrow = () =>{ 
        
    }
  return (
    <div>
      <form>
        <div className="container"  id="myForm">
            <div className="mb-3" >
                <label/>Name :- 
                <input type="text" value={fristname} onChange={(event)=>setFristname(event.target.value)} />
            </div>
            <div className="mb-3" >
                <label/>Phone number :-
                <input type="tel" value={phonenumber} onChange={(event)=>setPhonenumber(event.target.value)} />
            </div>
            <div className="mb-3 ">
            <>gender : </>
            <input  id="Male" value='male' type="radio" name="gender" onChange={(event)=>setGender(event.target.value)} />
            <label>Male</label>
            <input id="Female" value='female' type="radio" name="gender" onChange={(event)=>setGender(event.target.value)}/>
            <label>Female</label>
            </div>
            <input type="button" onClick={myFunction} value="Submit form"></input>   <hr />     
            <input type="button" onClick={clear} value="clear form"></input>     <hr />   
            <input type="button" onClick={addrow} value="new row"></input>        
        </div>    

      </form><hr/>
      {/* console.log(newarr); */}


      <div className="container">
          <table>
              <thead>
                 <tr> 
                  <th>name</th>
                  <th>phonenumber</th>
                  <th>gender</th>
                 </tr> 
              </thead>
              <tbody>
                  {data.map((data1)=>(
                        <tr>
                            <td>{data1.fristname}</td>
                            <td>{data1.phonenumber}</td>
                            <td>{data1.gender}</td>                            
                        </tr>
                  ))}

              </tbody>
            
          </table>
      </div>




    </div>
  );
}

import React from "react";
import { useState } from "react";



export default function Form() {


    const [fristname, setFristname] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [address, setAddname] = useState('');
    const [gender, setGender] = useState();
    const [lan, setLan] = useState();
    const [lan1, setLan1] = useState();

    const [data, setData] = useState([]);


    const onclick= (event) => {
        event.preventDefault();

        console.log('clicked');

        const  info = {fristname,phonenumber,address,gender,lan,lan1}

       
        let addData = [...data]
        console.log(addData);
        addData.push(info)
        setData(addData)
    }
    const clear =() =>{
        setData([]) 
     }
     


 
  return (
    <div>

      <form>
        <div className="container"  id="myForm">
            <div className="mb-3" >
                <label/>Name :- 
                <input type="text" id="nameinput" value={fristname} onChange={event=> setFristname(event.target.value)} />
            
            </div>
            <div className="mb-3" >
                <label/>Phone number :-
                <input type="tel" id="telinput" value={phonenumber} onChange={(event)=>setPhonenumber(event.target.value)} />
            </div>            
            <div className="mb-3" >
                <label/>Address :- 
                <input type="text" id="addr" value={address} onChange={(event)=>setAddname(event.target.value)} />

            </div>
            <div className="mb-3 ">
            <>gender : </>
            <input  id="Male" value='male' type="radio" name="gender" onChange={(event)=>setGender(event.target.value)} />
            <label>Male</label>
            <input id="Female" value='female' type="radio" name="gender" onChange={(event)=>setGender(event.target.value)}/>
            <label>Female</label>
            </div>

            <div className= "mb-3"><label>fav language:-</label>
                <div className="mb-2">
                    <input type="checkbox" id="react" value='react'  name="language" onChange={(event)=>setLan(event.target.value)}/>
                    <label> react</label>
                </div>
                <div className="mb-2">
                    <input type="checkbox" value='java' name="language" onChange={(event)=>setLan1(event.target.value)}/>
                    <label> java</label>
                </div>

            </div> 

            <input type="button" id="submit1"  onClick={onclick} value="Submit form"></input> <hr />
            <input type="button" onClick={clear} value="clear form"></input> <hr />      
        </div>



      </form><hr/>
      <div className="container">

          <table>
              <thead>
                 <tr> 
                  <th>Name</th>
                  <th>Phonenumber</th>
                  <th>Address</th>
                  <th>Gender</th>
                  <th>Most fav. language</th>
                  <th>2nd fav. language</th>
                 </tr> 
              </thead>
              <tbody>
                  {data.map((data1)=>(
                        <tr>
                            <td>{data1.fristname}</td>
                            <td>{data1.phonenumber}</td>
                            <td>{data1.address}</td>
                            <td>{data1.gender}</td>
                            <td>{data1.lan}</td>
                            <td>{data1.lan1}</td>
                        </tr>
                  ))}

              </tbody>
            
          </table>
      </div>     
    </div>
  );
}

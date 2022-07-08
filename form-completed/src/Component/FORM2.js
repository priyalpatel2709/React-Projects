import React, { useState } from 'react'

export default function FORM2() {

    const [values,setValues] = useState({
        fristname :'',
        phonenumber : ''
    }) 
    const myFunction = (event)=>{
       event.preventDefult();
       console.log(values);

    }

    const Handelchange = (e)=>{
        setValues({
            ...values,
            [e.target.name] : e.target.value,
        })
       

    }
  return (
    <div>
      <div>
      <form>
        <div className="container"  id="myForm">
            <div className="mb-3" >
                <label/>Name :- 
                <input type="text" value={values.fristname} onChange={Handelchange} />
            
            </div>
            <div className="mb-3" >
                <label/>Phone number :-
                <input type="tel" value={values.phonenumber} onChange={Handelchange} />
            </div>
            <input type="button" onClick={myFunction} ></input>        
        </div>    
     </form>
    </div>
    </div>
  )
}

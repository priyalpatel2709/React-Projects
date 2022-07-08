import React, { useState } from 'react';
// import Dailogbox from "./Workshope/Dailogbox.js"
import './Table.css';
import Table from "./Workshope/Table.js";


const Form = (props) => {

  const[table,setTable]=useState(false)

  const[data,setData]=useState([])
  // const[updata,setUpData]=useState([])
  


  const[values,setvalues]=useState({
    id : '',
    title : '',
    description : ' ' ,
    required : true,
    error : 'fill data ',
    disabled : true,
  })

  const change = (e)=>{
    // e.preventdefault()
    const name = e.target.name;
    const value = e.target.value;
    setvalues({...values,[name] : value})
    //  setvalues({disabled : false})

    // console.log(values);
  } 

  const submit = (e)=>{
    e.preventDefault();
    console.log("clicked");
    if (values.id === null || values.id === "") {
      alert("enter id");
    } else if (values.title === null || values.title === "") {
      alert("enter title");
    }
     else {
      setData([...data, values]);
      setTable(true);
    }
    // setSaved(true)
    
  }
  const save =()=>{
    console.log("saved");
    if (values.id === null || values.id === "") {
      alert("enter id");
    } else if (values.title === null || values.title === "") {
      alert("enter title");
    }  
    else {
      for (let i = 0; i < data.length; i++) {
        if (data[i].id === values.id) {
          data[i] = values;
        }else if(data[i].id===values.id){
          alert('repted')
        }
        setData([...data]);
      }
    }
  }
  const sorted =()=>{
    console.log('sort');
    let sort=[...data]
    sort.sort((a,b)=> a.id-b.id)
    setData(sort)
  }
  const sd=()=>{
    console.log('sort');
    let sort=[...data]
    sort.sort((a,b)=> a.id-b.id)
    let ds=[...sort]
    ds.reverse()
    setData(ds)
  }


  // console.log(data);
  return (
    <>  
    
    <form className='l' >
 
        <div >
            <label >ID *</label>          <br /> <input    name='id' onChange={change}  value={values.id} type="number"  placeholder='id...' required /> <span>{values.error}</span> <br />
            <label >Title*</label>       <br /> <input    name='title' onChange={change}  value={values.title} type="text"  placeholder='title...' required /> <span>{values.error}</span> <br />
            <label >Description</label>  <br /> <textarea name='description' onChange={change}  value={values.description}  rows="" cols=""  placeholder='description...'></textarea>
        </div><br />
        <div className='form'>
            <button   className='button2' type='button' onClick={submit}>CREATE</button>
             <button  className='button2' type='button' onClick={save}   >SAVE</button>  <hr />
            
           
        </div>
    </form>
    {  
      table && <Table  mydata= {data} udata={values => setvalues(values) } ddata={data => setData(data) }  ></Table>
    }
     <hr />
    {
      table &&  <button className='button2' type='button' onClick={sorted} onDoubleClick={sd} > sort </button>
    }

    </>
  )
}

export default Form

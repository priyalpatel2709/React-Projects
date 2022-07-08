import React, { useState } from 'react'
import './Table.css';
import Dailogbox from "./Workshope/Dailogbox.js"
const Table = () => {
   const[daibox,setDibox]=useState(false)

    const d1 = ()=>{
        setDibox(true)
      console.log('delete');
    }
    const x =()=>{
    
      setDibox(false)
    }
  return (
    <>  
    <div className='t1'>
      <table className='t1'>
        <thead>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>

        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>go to job</td>
            <td>workshop</td>
            <td><button>Update</button></td>
            <td><button className='openModalBtn' onClick={d1} >Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
   {
      daibox && <Dailogbox myfun={x}/> 
   }

    </>
  );
}

export default Table

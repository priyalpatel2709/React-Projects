import React, { useEffect, useState } from 'react'

const Dataapi = () => { 
  const [data,setData]=useState([])  
  useEffect( ()=>{
      fetch('https://jsonplaceholder.typicode.com/users').then((result)=>{
          result.json().then((resp)=>{
              setData(resp)
          })
      })
  },[] )
  console.log(data);  
  return (
    <>
      <div >  
         <div className='mx-5'> 
            <h1> ◙ DATA FROM API</h1><hr />
         </div>
         <div>
             <input type="text" placeholder='name' /><br />
             <input type="text" placeholder='username' /><br />
             <input type="text" placeholder='email' /><br />
         </div>
         <table className='mx-auto'>
                 <tr> 
               
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                 </tr> 
                  {
                  data.map((data1)=>
                        <tr>
                         
                            <td>{data1.name}</td>
                            <td>{data1.username}</td>
                            <td>{data1.email}</td>
                            
                            
                        </tr>
                  )
                  }
          </table>
      </div>
    </>
  )
}

export default Dataapi

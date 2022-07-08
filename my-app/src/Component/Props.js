import React from 'react'

const Props = () => {
  const [values,setValues] = ({
    title : '',
    text : '',
  })
  const change = (e) => {
    const {name,value} = e.target;
    setValues((prevData)=>{
      return {
        ...prevData,
        [name] : value,  
      }
      
      
    })

  }
   
  return (
    <div className='mb-3'>
      <h1>KEEP</h1><br /><hr />
      <input type="text"   value={values.title} name='title' onChange={change} title='title' placeholder='title'  /><br />
      <textarea name="note"value={values.text}   onChange={change} cols="" rows="" placeholder='add note'></textarea><br />
      <button type="submit">Add</button><hr />
    </div>
    
  )
}

export default Props

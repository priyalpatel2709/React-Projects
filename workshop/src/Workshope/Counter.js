import React, { useEffect, useState } from 'react'

const Counter = () => {
    useEffect(() => {
               document.title = ` ${counter} `;
      });
    const [counter,setCounter]=useState(0)
    const [error,setError]=useState('')


        const decrement =()=>{
            
            (counter >= 1) ? setCounter(counter - 1) : setError('the counter cannot count -ve value');

            // if (counter >= 1) {
            //     setCounter(counter - 1)
            // }else{
            //     setError('the counter cannot count -ve value');
            // }
        }
        const reset =()=>{
            // alert(`are you sure !!! you want reset ${counter} `)
            setCounter(0);
            setError('')
        }
        
        const inc =()=>{
            setCounter(counter + 1)
            // (counter >= 0) ? setError('') : setError('');

            if (counter >= 0) {
                setError('');
            }else{
                setError('the counter cannot count -ve value');
            }        
        }

  return (
    <div>
       <h1>Counter  </h1> 
       <h2> {counter} </h2> <br />

      <span className='error'>{error}</span>  <br />

      <button onClick={decrement}>-</button>  

      <button onClick={ inc }>+</button> 

      <button onClick={ reset }>reset</button>  


     
    </div>
  )
}

export default Counter

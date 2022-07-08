import React from 'react'
import './Dailogbox.css';
const Dailogbox = (props) => {
console.log(props)

const close = () => {
  props.myfun(false)
}

  return (
    <div className='modalBackground' >
        <div className='modalContainer'>
         {/* <div className='titleCloseBtn'>
           <button className='b1'  onClick={close} >X</button>
         </div>  */}

        <div className="title">
         <p>are you sure you want to delete !!!</p>
        </div>
        <div className='footer'>
        <button >sure</button>
        <button onClick={close} >close</button>
        </div>
    </div>
    </div>
  )
}

export default Dailogbox

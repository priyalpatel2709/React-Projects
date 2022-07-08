import React,{useEffect } from 'react'
import { useNavigate} from 'react-router-dom'

const Contect = () => {
  useEffect(() => {
    //Update the document title using the browser API
    document.title = 'contect';
    //  alert('contect')
    console.log('contect');
  });


  let go=useNavigate()
  return (
    <div>
      <h2>i am contect.</h2>
      <button type="button" className="btn btn-primary" onClick={ () => go("/") }>TO home page</button>
    </div>
  )
}

export default Contect

import React from 'react'

export default function Output() {
  return (
    <form>  
        <div className="container">
            <div className="mb-3" >
             <textarea name="fristname"  cols="30" onChange={(e)=>setFname(e.target.value)} rows="10"></textarea>
            </div>
        </div>
    </form>
  )
}

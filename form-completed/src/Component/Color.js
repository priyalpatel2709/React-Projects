import { useState } from "react";
import React from 'react'

export default function Color() {
    const mbc = 'red'
    const [bg, setBg] = useState(mbc);

    let Change = ()=>{
      if(mbc==='red'){
        let Newmbc='lightblue'
        setBg(Newmbc)
      }
      else{
        // let Newmbc1='red'
        setBg(mbc)

      }


    }
  return (
    <div>
        <div style={{backgroundColor : bg}}>
            <h1>color</h1>
            <button type="submit" onClick={Change}></button>     
        </div>      
    </div>
  )
}

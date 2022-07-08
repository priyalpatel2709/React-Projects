import React from 'react'

export default function MyVal(props) {
    console.log(props)
  return (
    <div>
      {
          props.myprops
      }
    </div>
  )
}

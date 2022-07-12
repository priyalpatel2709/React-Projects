import React from 'react'
import { Link,useParams } from 'react-router-dom'
const Profile = () => {
  const {title,id}=useParams()
  return (
    <div>
      {/* <Link to='/profile/city'>city</Link> */}
      <h1>{title}</h1> <hr />
      <h1>{id}</h1>
    </div>
  )
}

export default Profile

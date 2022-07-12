import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
     
      <nav className='topnav'>
        <ul>
            <li> <Link to='/'>Home</Link> </li>   
            <li><Link to='/signup'>SINGUP</Link>  </li> 
            <li> <Link to='/profile'>PROFILE</Link></li>  
            <li> <Link to='/about'>ABOUT</Link> </li>   
        </ul>
      </nav>
    </div>
  )
}

export default Header

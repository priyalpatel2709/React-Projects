// import React, { useEffect, useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import "../styles/Nav.css";

const Nav = () => {
  let navigate = useNavigate()
  const auth = localStorage.getItem("user");
  const logOut = ()=>{
    console.log('sd');
    localStorage.clear()
    navigate('/singup')
  }

  return (
    <div>
      <ul className="nav-ul">
        <li>
          <Link to="/">Product</Link>
        </li>
        <li>
          <Link to="/add">Add Product</Link>
        </li>
        <li>
          <Link to="/update">Update Product</Link>
        </li>

        <li>
          {auth ? (
            <Link onClick={logOut} to="/singup">Logout</Link>
          ) : (
            <Link to="/singup">Sing Up</Link>
          )}
        </li>
        <li>
          <Link to="/login">logIn</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;

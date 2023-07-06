// import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Nav.css";

const Nav = () => {
  let navigate = useNavigate();
  const auth = localStorage.getItem("user");
  // console.log("auth -->Nav",auth);
  const logOut = () => {
    // console.log("sd");
    localStorage.clear();
    navigate("/singup");
  };

  // console.log('------>',JSON.parse(auth).name);

  return (
    <div>
      {auth ? (
        <ul className="nav-ul">
          <li>
            <Link to="/">Product</Link>
          </li>
          <li>
            <Link to="/add">Add Product</Link>
          </li>
          <li>
            <Link to={`/update`}>User's Product</Link>
          </li>
          <li>
            <Link onClick={logOut} to="/singup">
            {/* Logout */}
              Logout({JSON.parse(auth).name})
            </Link>
          </li>
        </ul>
      ) : (
        <div className="nav-right">
          <ul className="nav-ul nav-right">
            <li>
              <Link to="/singup">Sing Up</Link>{" "}
            </li>
            <li>
              <Link to="/login">logIn</Link>{" "}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;

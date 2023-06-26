import React from "react";
import "./Navber.css";

import { NavLink } from "react-router-dom";
const Navbar = () => {
  let activeStyle = {
    textDecoration: "underline"
  };

  let activeClassName = "underline";
  return (
    <>
      <ul className="sidenav">
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            ABOUT
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;

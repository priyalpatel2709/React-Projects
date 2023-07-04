import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/SingUp.css";

const SingUp = () => {
  const navigate = useNavigate();

  const [value, setValues] = useState({
    name : "",
    password: "",
    email: "",
  });

  const handelChange = (e) => {
    const { name, value } = e.target;
    setValues((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const collectData = async () => {
    // console.log(`name:-${name} password:-${password} email:-${email} `);
      let result = await fetch(`http://127.0.0.1:5000/register`,{
        method:"POST",
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify({
          name : value.name,
          password : value.password,
          email :value.password
        })
      })

      result = await result.json()
      console.log(result);
      localStorage.setItem('user',JSON.stringify(result))
      navigate("/");
  };


  useEffect(() => {
    let auth = localStorage.getItem("user");
    auth && navigate("/");
  });

  return (
    <div className="container">
      <h1>Sign Up</h1>
      <div className="input-container">
        <input
          className="input-box"
          type="text"
          placeholder="Enter Your Name"
          name='name'
          onChange={handelChange}
        />
        <input
          className="input-box"
          type="text"
          placeholder="Enter Your Email"
          name='email'
          onChange={handelChange}
        />
        <input
          className="input-box"
          type="password"
          placeholder="Enter Your Password"
          name='password'
          onChange={handelChange}
        />
      </div>
      <button
        // style={{ marginBottom: "10px" }}
        className="singUp-btn"
        onClick={collectData}
        type="button"
      >
        Sign Up
      </button>
      <span>
        have account <Link to="/login">click me</Link>
      </span>
    </div>
  );
};

export default SingUp;

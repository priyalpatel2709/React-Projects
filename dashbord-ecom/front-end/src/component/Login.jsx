import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import React, { useState , useEffect} from "react";
import "../styles/SingUp.css";

const Login = () => {
  const [errorMsg, setErrorMsg] = useState(false);

  const [value, setValues] = useState({
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

  const navigate = useNavigate();

  const collectData = async () => {
    let result = await fetch("http://127.0.0.1:5000/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: value.password, email: value.email }),
    });

    
    result = await result.json();
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      setErrorMsg(true);
    }
    // console.log(result);
  };

  useEffect(() => {
    let auth = localStorage.getItem("user");
    auth && navigate("/");
  });

  return (
    <div className="container">
      <h1>Log In</h1>
      <div className="input-container">
        <input
          className="input-box"
          type="text"
          placeholder="Enter Your Email"
          name="email"
          onChange={handelChange}
        />
        <input
          className="input-box"
          type="password"
          placeholder="Enter Your Password"
          name="password"
          onChange={handelChange}
        />
      </div>
      <button onClick={collectData} type="button">
        Log In
      </button>
      {errorMsg && <span style={{ color: "red" }}>plz enter correct data</span>}
      <span>
        create a new account <Link to="/singup">click me</Link>{" "}
      </span>
    </div>
  );
};

export default Login;

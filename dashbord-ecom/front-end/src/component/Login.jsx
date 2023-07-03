import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
// import React, { useState , useEffect} from "react";
import "../styles/SingUp.css";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate()

  const collectData = async () => {
    console.log(password, email);
    let result = await fetch("http://127.0.0.1:5000/login", {
      method : 'post',
      headers:{'Content-Type': 'application/json'},
      body   : JSON.stringify({ password, email })
    });
     result = await result.json()
     if(result.name){
      localStorage.setItem('user',JSON.stringify(result))
      navigate('/')
     }
     console.log(result);

  };

  return (
    <div className="container">
      <h1>Log In</h1>
      <div className="input-container">
        {/* <input
          className="input-box"
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /> */}
        <input
          className="input-box"
          type="text"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input-box"
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        // style={{ marginBottom: "10px" }}
        onClick={collectData}
        type="button"
      >
        Log In
      </button>
      <span>
        {" "}
        create a new account <Link to="/singup">click me</Link>{" "}
      </span>
    </div>
  );
};

export default Login;
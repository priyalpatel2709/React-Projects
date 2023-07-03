import React, { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/SingUp.css';

const SingUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const collectData = async () => {
    console.log(`name:-${name} password:-${password} email:-${email} `);
    axios
      .post("http://127.0.0.1:5000/register", {
        name,
        email,
        password
      })
      .then((resp) => {
        if (resp) {
          console.log(resp);
          localStorage.setItem('user',JSON.stringify(resp))
          navigate("/");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  useEffect(()=>{
    let auth = localStorage.getItem("user");
    auth && navigate("/");
  })

  return (
    <div className="container">
      <h1>Sign Up</h1>
      <div className="input-container">
        <input
          className="input-box"
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        Sign Up
      </button>
    </div>
  );
};

export default SingUp;

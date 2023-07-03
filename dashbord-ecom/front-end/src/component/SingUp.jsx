import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
const SingUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate()
  const collectData =async () => {
    console.log(`
        name:-${name}
        password:-${password}
        email:-${email} `);

      let result = await fetch('http://127.0.0.1:5000/register',{
            method : 'post',
            body : JSON.stringify({name,password,email}),
            headers : {
              "Content-Type" : "application/json"
            }
      })
      result = await result.json()
      console.log(result);
      if(result){
        navigate('/')
      }
  };

  return (
    <div>
      <h1>Sing Up</h1>
      <div>
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
        style={{ marginBottom: "10px" }}
        onClick={collectData}
        type="button"
      >
        Sing Up
      </button>
    </div>
  );
};

export default SingUp;

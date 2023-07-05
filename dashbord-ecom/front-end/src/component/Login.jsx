import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import axios from 'axios';

const Login = () => {
  const [errorMsg, setErrorMsg] = useState(false);
  const [value, setValues] = useState({
    password: '',
    email: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const collectData = async () => {
    // try{
    //   let result = await fetch('http://127.0.0.1:5000/login', {
    //     method: 'post',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ password: value.password, email: value.email }),
    //   });
  
    //   result = await result.json();
    //   console.log(result);
    //   if (result.user.name) {
    //     localStorage.setItem('user', JSON.stringify(result.user));
    //     localStorage.setItem('token', JSON.stringify(result.auth));
    //     navigate('/');
    //   } else {
    //     setErrorMsg(true);
    //   }
    // }catch (error){
    //   alert("Something went wrong plz try after some time..",error);
    // }
    try {
      const response = await axios.post('http://127.0.0.1:5000/login', {
        password: value.password,
        email: value.email,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    
      const result = response.data;
      console.log(result);
      if (result.user.name) {
        localStorage.setItem('user', JSON.stringify(result.user));
        localStorage.setItem('token', JSON.stringify(result.auth));
        navigate('/');
      } else {
        setErrorMsg(true);
      }
    } catch (error) {
      alert('Something went wrong, please try again later.', error);
    }

  };

  useEffect(() => {
    let auth = localStorage.getItem('user');
    auth && navigate('/');
  });

  return (
    <div className="container">
      <h1>Log In</h1>
      <div className="input-container">
        <label className="input-label" htmlFor="email">
          Email:
        </label>
        <input
          className="input-box"
          type="text"
          placeholder="Enter Your Email"
          name="email"
          id="email"
          onChange={handleChange}
        />
        <label className="input-label" htmlFor="password">
          Password:
        </label>
        <input
          className="input-box"
          type="password"
          placeholder="Enter Your Password"
          name="password"
          id="password"
          onChange={handleChange}
        />
      </div>
      <button className="login-btn" onClick={collectData} type="button">
        Log In
      </button>
      {errorMsg && (
        <div className="error-msg">
          <span className="error-text">Please enter correct data</span>
        </div>
      )}
      <span>
        Create a new account <Link to="/singup">click here</Link>
      </span>
    </div>
  );
};

export default Login;

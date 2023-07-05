import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/SingUp.css';
import axios from 'axios';

const SignUp = () => {
  const navigate = useNavigate();

  const [value, setValues] = useState({
    name: '',
    password: '',
    email: '',
  });

  const [errorMsg, setErrorMsg] = useState({
    value : false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const collectData = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/register', {
        name: value.name,
        password: value.password,
        email: value.email,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const result = response.data;
      console.log(result.user);
      if(result.user){
        localStorage.setItem('user', JSON.stringify(result.user));
        localStorage.setItem('token', JSON.stringify(result.auth));
        navigate('/');
      }else{
        console.log(result.result);
        setErrorMsg(prevState => ({ ...prevState, value: true, message: result.result}));
      }

    } catch (error) {
      alert('Something went wrong');
    }
  };
  useEffect(() => {
    let auth = localStorage.getItem('user');
    auth && navigate('/');
  });

  return (
    <div className="container">
      <h1>Sign Up</h1>
      <div className="input-container">
        <label className="input-label" htmlFor="name">
          Name:
        </label>
        <input
          className="input-box"
          type="text"
          placeholder="Enter Your Name"
          name="name"
          id="name"
          onChange={handleChange}
        />
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
      <button className="signup-btn" onClick={collectData} type="button">
        Sign Up
      </button>
      {errorMsg.value && (
        <div className="error-msg">
          <span className="error-text">{errorMsg.message}</span>
        </div>
      )}
      <span className="signup-link">
        Already have an account? <Link to="/login">Log In</Link>
      </span>
    </div>
  );
};

export default SignUp;

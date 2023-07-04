import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/SingUp.css';

const SignUp = () => {
  const navigate = useNavigate();

  const [value, setValues] = useState({
    name: '',
    password: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const collectData = async () => {
    let result = await fetch('http://127.0.0.1:5000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: value.name,
        password: value.password,
        email: value.email,
      }),
    });

    result = await result.json();
    console.log(result);
    localStorage.setItem('user', JSON.stringify(result));
    navigate('/');
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
      <span className="signup-link">
        Already have an account? <Link to="/login">Log In</Link>
      </span>
    </div>
  );
};

export default SignUp;

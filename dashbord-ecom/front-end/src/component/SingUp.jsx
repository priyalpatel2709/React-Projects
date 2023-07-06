import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/SingUp.css";
import axios from "axios";
import * as yup from "yup";

const SignUp = () => {
  const navigate = useNavigate();

  const [value, setValues] = useState({
    name: "",
    password: "",
    email: "",
  });
  const [errors, setErrors] = useState([]);

  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required."),
    email: yup
      .string()
      .email("Please enter a valid email address.")
      .required("Email is required."),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters long.")
      .required("Password is required."),
  });

  const [errorMsg, setErrorMsg] = useState({
    value: false,
    message: "",
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
      if (await validateForm()) {
        const response = await axios.post(
          "http://127.0.0.1:5000/register",
          {
            name: value.name,
            password: value.password,
            email: value.email,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const result = response.data;
        console.log(result.user);
        if (result.user) {
          localStorage.setItem("user", JSON.stringify(result.user));
          localStorage.setItem("token", JSON.stringify(result.auth));
          navigate("/");
        } else {
          console.log(result.result);
          setErrorMsg((prevState) => ({
            ...prevState,
            value: true,
            message: result.result,
          }));
        }
      }
    } catch (error) {
      alert("Something went wrong");
    }
  };
  useEffect(() => {
    let auth = localStorage.getItem("user");
    auth && navigate("/");
  });

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const validateForm = async () => {
    try {
      await validationSchema.validate(value, { abortEarly: false });
      return true; // Form is valid
    } catch (validationErrors) {
      const errors = {};
      validationErrors.inner.forEach((error) => {
        errors[error.path] = error.message;
      });
      setErrors(errors);
      return false; // Form is invalid
    }
  };

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
      {errors && (
        <>
          <ul>
            {errors.password  &&  <li>{`${errors.password}`}</li>}
            {errors.email && <li>{`${errors.email}`}</li>}
          </ul>
        </>
      )}
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

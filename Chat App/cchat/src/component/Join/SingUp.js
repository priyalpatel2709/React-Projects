import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SingUp.css";
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
          "https://srever-ecomm.vercel.app/register",
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
          console.log("File: SingUp.js", "Line 64:", result.user.name);
          navigate("/chat", { state: { name: result.user.name } });
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
      alert(`Something went wrong, please try again later. ${error.message}`);
    }
  };

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
    <div className="JoinPage">
      <div className="JoinContainer">
        <h1>Sign Up</h1>
          <input
            className="input-box"
            type="text"
            placeholder="Enter Your Name"
            name="name"
            id="joinInput"
            onChange={handleChange}
          />
          
          <input
            className="input-box"
            type="text"
            placeholder="Enter Your Email"
            name="email"
            id="joinInput"
            onChange={handleChange}
          />
          <input
            className="input-box"
            type="password"
            placeholder="Enter Your Password"
            name="password"
            id="joinInput"
            onChange={handleChange}
          />
       
        {errors && (
          <>
            <ul>
              {errors.password && <li>{`${errors.password}`}</li>}
              {errors.email && <li>{`${errors.email}`}</li>}
            </ul>
          </>
        )}
        <button className="joinbtn" onClick={collectData} type="button">
          Sign Up
        </button>
        {errorMsg.value && (
          <div className="error-msg">
            <span className="error-text">{errorMsg.message}</span>
          </div>
        )}
        <span className="signup-link">
          Already have an account? <Link to="/">Log In</Link>
        </span>
      </div>
    </div>
  );
};

export default SignUp;

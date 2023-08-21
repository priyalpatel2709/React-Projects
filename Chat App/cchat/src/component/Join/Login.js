import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import Loading from "../Loading";
let user;

const Login = () => {
  const [errorMsg, setErrorMsg] = useState({
    value: false,
    message: "",
  });
  const [value, setValues] = useState({
    password: "",
    email: "",
  });
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const collectData = async () => {
    setIsLoading(true)
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/login",
        {
          password: value.password,
          name: value.email
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = response.data;

      if (result.user && result.auth) {
        setIsLoading(false)
        localStorage.setItem("user", JSON.stringify(result.user));
        localStorage.setItem("token", JSON.stringify(result.auth));
        user = result.user.name;
        navigate("/chat", { state: { name: result.user.name } });
      } else {
        setIsLoading(false)
        if (result.result_user) {
          setErrorMsg((prevState) => ({
            ...prevState,
            value: true,
            message: result.result,
          }));
        } else {
            setIsLoading(false)
          setErrorMsg((prevState) => ({
            ...prevState,
            value: true,
            message: result.result,
          }));
        }
      }
    } catch (error) {
        setIsLoading(false)
      alert(`Something went wrong, please try again later. ${error.message}`);
    }
  };

  useEffect(() => {
    let auth = localStorage.getItem("user");
    let user = JSON.parse(auth);
    console.log("File: Login.js", "Line 71:", user);
    if (user !== null) {
      navigate("/chat", { state: { name: user.name } });
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div className="JoinPage">
        {isLoading ? <Loading /> : null}
      <div className="JoinContainer">
        <h1>Log In</h1>

        <input
          className="input-box"
          type="text"
          placeholder="Enter Your Name"
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

        <button className="joinbtn" onClick={collectData} type="button">
          Log In
        </button>
        {errorMsg.value && (
          <div className="error-msg">
            <span className="error-text">{errorMsg.message}</span>
          </div>
        )}
        <span>
          Create a new account <Link to="/singup">click here</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
export { user };

import React from "react";
import "./Gohome.css";
import Confetti from "react-confetti";
const GreetingMessage = " You Can Go Home😁😁";
const Gohome = ({ onclick }) => {
  return (
    <div>
      <div className="App">
        
        <div className="container">
          <h1>{GreetingMessage}</h1>  
          <button className="btn btn-primary" onClick={onclick}>
            Ohk
          </button>
          <Confetti />
        </div>
      </div>
    </div>
  );
};

export default Gohome;

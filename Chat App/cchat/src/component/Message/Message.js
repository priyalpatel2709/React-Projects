import React from "react";
import "./Message.css";

const Message = ({ user, message, classs }) => {
  return (
    <div>
      {user ? (
        <div className={`messageBox ${classs}`}>{`${user}: ${message}`}</div>
      ) : (
        <div className={`messageBox ${classs}`}>{`You: ${message}`}</div>
      )}
    </div>
  );
};

export default Message;

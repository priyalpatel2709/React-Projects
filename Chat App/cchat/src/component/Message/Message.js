import React from "react";
import "./Message.css";

const Message = ({ user, message, classs, joinLeaveMessages }) => {
  return (
    <div>
      {/* {joinLeaveMessages.length > 0 && (
        <div className="joinLeaveMessageCenter">
          {joinLeaveMessages.map((item, i) => (
            <div key={i} className="joinLeaveMessage">
              <p className="center">{item.message}</p>
            </div>
          ))}
        </div>
      )} */}

      {user ? (
        <div className={`messageBox ${classs}`}>{`${user}: ${message}`}</div>
      ) : (
        <div className={`messageBox ${classs}`}>{`You: ${message}`}</div>
      )}
    </div>
  );
};

export default Message;

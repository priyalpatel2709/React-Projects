import React,{useState,useEffect} from "react";
import "./Message.css";

const Message = ({ user, message, classs ,time  }) => {
  const style = {
    fontSize: "0.7em",
    color: "black"
  };
  const [oldtime, setOldTime] = useState(time);
  useEffect(() => {
    setOldTime(
      new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
    return () => {
      setOldTime(time);
    };
  }, [])
  if (user) {
    return (
      <>
        <div className={`messageBox ${classs}`}>
          {`${user}: ${message} `}
          {user !== "Admin" && <span style={style}>{oldtime} </span>}
        </div>
      </>
    );
  } else {
    return (
      <div className={`messageBox ${classs}`}>
        {`You: ${message} `} <span style={style}>{oldtime} </span>
      </div>
    );
  }
};

export default Message;

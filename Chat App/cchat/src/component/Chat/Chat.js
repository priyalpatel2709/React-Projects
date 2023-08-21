import React, { useEffect, useState, useRef } from "react";
import socketIO from "socket.io-client";
import "./Chat.css";
import Message from "../Message/Message";
import ReactScrollToBottom from "react-scroll-to-bottom";
import { useLocation, Link,  } from "react-router-dom";
let socket;

// const ENDPOINT = "http://localhost:4500/";
const ENDPOINT = "https://ordinary-material-trigonometry.glitch.me/";

const Chat = () => {
  const location = useLocation();
  const user = location.state && location.state.name;
  const inputElement = useRef();
  const [id, setID] = useState("");
  const [message, setMessage] = useState([]);
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );

  const send = () => {
    const message = document.getElementById("chatInput").value;
    socket.emit("message", { message, id });
    document.getElementById("chatInput").value = "";
  };

  const focusInput = () => {
    inputElement.current.focus();
  };

  useEffect(() => {
    socket = socketIO(ENDPOINT, { transports: ["websocket"] });
    socket.on("connect", () => {
      setID(socket.id);
    });
    socket.emit("joined", { user });

    const eventHandler = () => {
      console.log("File: Chat.js", "Line 38:", "when ?");
      // Event handler logic if needed
    };

    socket.on("welcome", (data) => {
      setMessage([...message, data]);
    });
    socket.on("userJoined", (data) => {
      setMessage([...message, data]);
    });
    socket.on("leave", (data) => {
      setMessage([...message, data]);
    });

    // Focus input element here
    focusInput();

    return () => {
      socket.off("disconnect", eventHandler);
    };
  }, []);

  useEffect(() => {
    socket.on("sentMessage", (data) => {
      setMessage([...message, data]);
    });
    socket.on("joinandleft", (data) => {
      if (!message.some((msg) => msg.message === data.message)) {
        setMessage((prevMessages) => {
          if (!prevMessages.some((msg) => msg.message === data.message)) {
            return [...prevMessages, data];
          }
          return prevMessages;
        });
      }
    });

    return () => {
      socket.off();
    };
  }, [message]);

  const clearLocalStorageAndNavigate = () => {
    localStorage.clear(); // Clear local storage
    
  };

  return (
    <div className="chatPage">
      <div className="chatContainer">
        <div className="header">
          <h2>Drevol</h2>
          <Link to="/" onClick={clearLocalStorageAndNavigate}>
            <h3>X</h3>
          </Link>
        </div>
        <ReactScrollToBottom className="chatBox">
          {message.map((item, i) => (
            <Message
              time={time}
              user={item.id === id ? "" : item.user}
              message={item.message}
              classs={item.id === id ? "right" : "left"}
              key={i}
            />
          ))}
        </ReactScrollToBottom>
        <div className="inputBox">
          <input
            type="text"
            id="chatInput"
            ref={inputElement}
            onKeyDown={(e) => (e.key === "Enter" ? send() : null)}
          />
          <button onClick={send} className="sendBtn">
            SEND
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;

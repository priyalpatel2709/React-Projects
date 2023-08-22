import React, { useEffect, useState, useRef } from "react";
import socketIO from "socket.io-client";
import "./Chat.css";
import Message from "../Message/Message";
import ReactScrollToBottom from "react-scroll-to-bottom";
import { useLocation, Link } from "react-router-dom";
let socket;

const ENDPOINT = "http://localhost:4500/";

const Chat = () => {
  const location = useLocation();
  const user = location.state && location.state.name;
  const inputElement = useRef();
  const [id, setID] = useState("");
  const [message, setMessage] = useState([]);
  
  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const send = () => {
    const messageText = document.getElementById("chatInput").value;
    socket.emit("message", { message: messageText, id });
    document.getElementById("chatInput").value = "";
  };

  const focusInput = () => {
    inputElement.current.focus();
  };

  useEffect(() => {
    socket = socketIO(ENDPOINT, { transports: ["websocket"], query: { device: 'react' } });
    socket.on("connect", () => {
      setID(socket.id);
    });
    socket.emit("joined", { user });

    socket.on("welcome", (data) => {
      setMessage([...message, data]);
    });
    socket.on("userJoined", (data) => {
      setMessage([...message, data]);
    });
    socket.on("leave", (data) => {
      setMessage([...message, data]);
    });

    focusInput();

    return () => {
      socket.disconnect(); // Disconnect the socket
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
      socket.off(); // Remove event listeners
    };
  }, [message]);

  const clearLocalStorageAndNavigate = () => {
    localStorage.clear();
    socket.emit("disconnect");
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
          {message.length === 0 ? (
            <input
              placeholder="Please Wait..."
              type="text"
              id="chatInput"
              disabled={message.length === 0}
              ref={inputElement}
              onKeyDown={(e) => (e.key === "Enter" ? send() : null)}
            />
          ) : (
            <input
            placeholder="Type..."
              type="text"
              id="chatInput"
              ref={inputElement}
              onKeyDown={(e) => (e.key === "Enter" ? send() : null)}
            />
          )}
          <button onClick={send} className="sendBtn">
            SEND
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;

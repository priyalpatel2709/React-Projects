import React, { useEffect, useState, useRef } from "react";
import socketIO from "socket.io-client";
import { user } from "../Join/Join";
import "./Chat.css";
import Message from "../Message/Message";
import ReactScrollToBottom from "react-scroll-to-bottom";
let socket;
// const ENDPOINT = "https://react-app-chat2709.herokuapp.com/";
const ENDPOINT = "http://localhost:4500/";

const Chat = () => {
  const [connected, setConnected] = useState(false);

  const inputElement = useRef();
  const [id, setID] = useState("");
  const [message, setMessage] = useState([]);
  const [joinLeaveMessages, setJoinLeaveMessages] = useState([]);
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
      // console.log("connect");
      setID(socket.id);
    });
    socket.emit("joined", { user });
    const eventHandler = () => setConnected(true);
    socket.on("welcome", (data) => {
      setMessage([...message, data]);
      // console.log(data.message);
    });
    socket.on("userJoined", (data) => {
      setMessage([...message, data]);

      // console.log(data.user,data.message);
    });
    socket.on("leave", (data) => {
      setMessage([...message, data]);
      console.log(data.message);
    });
    return () => {
      socket.off("disconnect", eventHandler);
      focusInput();
    };
  }, []);
  useEffect(() => {
    socket.on("sentMessage", (data) => {
      setMessage([...message, data]);
    });
    socket.on("joinandleft", (data) => {
      if (!joinLeaveMessages.some((msg) => msg.message === data.message)) {
        setJoinLeaveMessages((prevMessages) => {
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
  console.log("File: Chat.js", "Line 64:", joinLeaveMessages);
  return (
    <div className="chatPage ">
      <div className="chatContainer">
        <div className="header">
          <h2>Drevol </h2>
          <a href="/">
            <h3>X</h3>{" "}
          </a>
        </div>
        <ReactScrollToBottom className="chatBox">
          {message.map((item, i) => (
            <Message
              user={item.id === id ? "" : item.user}
              message={item.message}
              classs={item.id === id ? "right" : "left"}
              joinLeaveMessages={joinLeaveMessages}
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
import React, { useEffect,useState,useCallback } from "react";
import socketIO from "socket.io-client";
import { user } from "../Join/Join";
import "./Chat.css";
import Message from '../Message/Message'
import ReactScrollToBottom from "react-scroll-to-bottom";
let socket;
const ENDPOINT = "http://localhost:4500/";

const Chat = () => {
  const [id, setID] = useState('')
  const [message, setMessage] = useState([])
  const send=()=>{ 
    const message =document.getElementById('chatInput').value
    socket.emit('message',{message,id  });
    document.getElementById('chatInput').value=''
  } 


  
  const [joined, setJoined] = useState(false);

  const handleInviteAccepted = useCallback(() => {
    setJoined(true);
  }, []);

  useEffect(() => {
     socket = socketIO(ENDPOINT, { transports: ["websocket"] });
    socket.on("connect", () => {
      console.log("connect");
      setID(socket.id)
    });
    socket.emit("joined", { user });

    socket.on("welcome", ( data ) => {
      setMessage([...message,data])
      console.log(data.message);
   
    });
    socket.on("userJoined", (data) => {
      setMessage([...message,data])
       
        console.log(data.user,data.message);
      
      });
      socket.on("leave", (data) => {
      setMessage([...message,data])
      console.log(data.user,data.message);

      
      });  
    return () => {
      // socket.emit('disconnect')
      // socket.of('disconnect',null)
      socket.off("disconnect", handleInviteAccepted);
    };
  }, []);

  useEffect(() => {
     socket.on('sentMessage',(data)=>{
      setMessage([...message,data])
       
      //  console.log(user,message,id);
     })
  return()=>{
    socket.off()
  }
  }, [message])
  return (
    <div className="chatPage ">
      <div className="chatContainer">
        <div className="header">
           <h2>Drevol </h2>
          <a href="/"><h3>X</h3> </a> 
        </div>
        <ReactScrollToBottom className="chatBox">
   {
    message.map((item,i)=><Message user={item.id===id ?'' :item.user} message={item.message} classs={item.id===id ?'right' :'left' } />)
   }
      </ReactScrollToBottom>
          <div className="inputBox">
            <input type="text" id="chatInput" onKeyDown={(e)=>e.key==='Enter' ? send() : null} />
            <button onClick={send} className="sendBtn">SEND</button>
          </div>
        
      </div>
    </div>
  );
};

export default Chat;

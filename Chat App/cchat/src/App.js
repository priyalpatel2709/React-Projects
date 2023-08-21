// import socketIO from "socket.io-client";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Join from "./component/Join/Join";
import Chat from "./component/Chat/Chat";
import Login from "./component/Join/Login";
import SignUp from "./component/Join/SingUp";
import PrivateCom from "./component/Join/PrivateCom";

import "./App.css";
// const ENDPOINT = "http://localhost:4500/";
// const socket = socketIO(ENDPOINT, { transports: ["websocket"] });

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route element={<PrivateCom />}>
        <Route path="/chat" element={<Chat />} />
        </Route>
          {/* <Route exact path="/" element={<Join />} /> */}
          
          <Route path="/singup" element={<SignUp />} />
          <Route path="/" element={<Login  />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

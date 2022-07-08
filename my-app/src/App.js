import "./App.css";
import React,{useEffect } from "react";
import { BrowserRouter, Routes, Route,} from "react-router-dom";

import Note from "./Component/Note";
import Usestate from './Hooks/Usestate';
import UseEffect from './Hooks/UseEffect';
// import Props from "./Component/Props";
// import Props from "./Component/Props";
import Listbable from "./Component/Listbable";
import Navbar from "./Component/Router/Navbar";
import Contect from "./Component/Router/Contect";
import About from "./Component/Router/About";
import Error from "./Component/Router/Error";
import Profile from "./Component/Router/Profile";
import Home from "./Component/Router/Home";
import Dataapi from "./API/Dataapi";
import MemoTutorial from "./Hooks/UseMemo";
import UseRef from "./Hooks/UseRef";
import ComA from "./Hooks/useContext/ComA";
import UseReducer from "./Hooks/UseReducer";
function App() {

  return (
    <>
    <div className="App">
  {/* <h1>Hooks</h1> */}
      {/* <Listbable /> */}
      {/* <Props/> */}
      {/* <Note/> */}
      {/* <UseEffect/> */}
      {/* <Navbar/> */}
      {/* <Contect/> */}
      {/* <About/> */}
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/contect" element={<Contect/>} />
          <Route path="/profile/:user" element={<Profile/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter><hr />
      <div className="footer">footer</div>

      {/* <Dataapi/> */}
      {/* <MemoTutorial/> */}
      {/* <UseRef/> */}
      {/* <ComA/> */}
      {/* <UseReducer/> */}
      </div>
    </>
  );
}

export default App;

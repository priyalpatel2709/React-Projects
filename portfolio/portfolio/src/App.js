import "./App.css";
import Home from "./Component/Home";
import About from "./Component/About";
import Navbar from "./Component/Navbar";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="about" element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;

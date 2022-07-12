import "./App.css";
import About from "./Component/About";
import Profile from "./Component/Profile";
import Singup from "./Component/singup";
import Home from "./Home";
import Header from "./Header";
import Error from "./Error";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Deshbored from "./Component/Deshbored";

function App() {
  
  let isloged = false;
  let data ={
    info : 'plz log-in'
  }
  return (
    <>
 
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Singup />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:title/:id" element={<Profile />} />
          <Route path="/deshbored" element={isloged ? <Error /> : <Navigate to='/signup' state={data} />} />
          <Route path="*" element={ <Error/> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;

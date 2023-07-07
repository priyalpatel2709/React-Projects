import React, { useState } from "react";
import "./App.css";
import Nav from "./component/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingUp from "./component/SingUp";
import PrivateCom from "./component/PrivateCom";
import Login from "./component/Login";
import AddProduct from "./component/AddProduct";
import ProductList from "./component/ProductList";
import UpdateProduct from "./component/UpdateProduct";
import UserDataUpdate from "./component/UserDataUpdate";
import Admin from "./component/Admin";


function App() {
  const [admin,setAdmin] = useState(false)
  const isAdminLogin = () =>{
    setAdmin(true)
  }

  console.log("admin",admin);
  return (
    <div className="App">
      <BrowserRouter>
        <Nav  admin={admin} setAdmin={setAdmin}  />
        <Routes>
          <Route element={<PrivateCom />}>
            <Route path="/" element={<ProductList/>} />
            <Route path="/add" element={<AddProduct/>} />
            <Route path="/update/:id" element={<UpdateProduct/>} />
            <Route path="/update" element={<UserDataUpdate/>} />
            <Route path="/logout" element={<h2>logout</h2>} />
            <Route path="/profile" element={<h2>Profile</h2>} />
            <Route path="/admin" element={<Admin  />} />
          </Route>

          <Route path="/singup" element={<SingUp />} />
          <Route path="/login" element={<Login isAdminLogin={isAdminLogin} />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

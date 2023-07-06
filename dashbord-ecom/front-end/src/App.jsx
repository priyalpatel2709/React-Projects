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
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateCom />}>
            <Route path="/" element={<ProductList/>} />
            <Route path="/add" element={<AddProduct/>} />
            <Route path="/update/:id" element={<UpdateProduct/>} />
            <Route path="/update" element={<UserDataUpdate/>} />
            <Route path="/logout" element={<h2>logout</h2>} />
            <Route path="/profile" element={<h2>Profile</h2>} />
          </Route>

          <Route path="/singup" element={<SingUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

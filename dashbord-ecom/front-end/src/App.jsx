import "./App.css";
import Nav from "./component/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingUp from "./component/SingUp";
import PrivateCom from "./component/PrivateCom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateCom />}>
            <Route path="/" element={<h2>Product List</h2>} />
            <Route path="/add" element={<h2>Add Product</h2>} />
            <Route path="/update" element={<h2>update Product</h2>} />
            <Route path="/logout" element={<h2>logout</h2>} />
            <Route path="/profile" element={<h2>Profile</h2>} />
          </Route>

          <Route path="/singup" element={<SingUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./App.css";
import AddCart from "./components/AddCart";
import Dashbord from "./components/Dashbord";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom";

function App() {
  const route = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<NavBar/>}>
      <Route index element={<Dashbord/>}/>
      <Route path='/addcart' element={<AddCart/>}/>
    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={route}/>
      {/* <ProductList /> */}
    </div>
  );
}

export default App;

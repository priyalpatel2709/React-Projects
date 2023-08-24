import "./App.css";
import { Heading } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatPage from "./ChatPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

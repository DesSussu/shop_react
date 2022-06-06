import "./App.css";
import Home from "../src/pages/Home";
import Navbar from "../src/layout/NavBar/navbar";
import ItemListContainer from "../src/layout/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../src/layout/itemDetailContainer/itemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ItemListContainer />} />
        <Route path="/detail/:id" element={<ItemDetailContainer />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import Home from "../src/pages/Home";
import Navbar from "../src/layout/NavBar/Navbar";
import ItemListContainer from "../src/layout/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../src/layout/itemDetailContainer/itemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CartProvider from "./context/CartContext";
import CartPage from "./pages/CartPages/Cartpages";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/*" element={<Navigate to="/" replace />} />
          <Route exact path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

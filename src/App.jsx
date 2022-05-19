import "./App.css";
import Button from "./components/Button/Button";
import logo from "./assets/img/logo.png";
import Navbar from "./layout/NavBar/navbar.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import itemDetailContainer from "../src/layout/itemDetailContainer/itemDetailContainer";
//import ItemListContainer from "../src/layout/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <>
          <itemDetailContainer />
        </>
      </header>
    </div>
  );
}

export default App;

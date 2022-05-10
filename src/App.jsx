import "./App.css";
import Button from "./components/Button/Button";
import logo from "./assets/img/logo.png";
import Navbar from "./layout/NavBar/navbar.jsx";
import Add from "./components/Button/add";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <img src={logo} className="logo" />
        <div>
          <Add />
        </div>
      </header>
    </div>
  );
}

export default App;

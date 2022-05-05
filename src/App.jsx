import "./App.css";
import Button from "./titulo";
import logo from "./img/logo.png";
function Menu() {
  return (
    <div className="menu">
      <ul>
        <li>SHOP</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
        <li>FAQs</li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <img src={logo} className="logo" />
        <Button title="Link" color="glitch" />
      </header>
    </div>
  );
}

export default App;

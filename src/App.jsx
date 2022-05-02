import logo from "./logo.svg";
import "./App.css";
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
      </header>
    </div>
  );
}

export default App;

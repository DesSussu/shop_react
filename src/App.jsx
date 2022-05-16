import "./App.css";
import Button from "./components/Button/Button";
import logo from "./assets/img/logo.png";
import Navbar from "./layout/NavBar/navbar.jsx";

import ItemListContainer from "./components/ItemList/ItemListContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <>
          <ItemListContainer />
        </>
      </header>
    </div>
  );
}

export default App;

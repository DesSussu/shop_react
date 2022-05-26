import "../../src/App.css";
import Button from "../components/Button/Button";
import Navbar from "../layout/NavBar/navbar";
import logo from "../assets/img/logo.svg";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <img src={logo} />
        <Button tittle="Shop now" />
      </header>
    </div>
  );
}
export default Home;

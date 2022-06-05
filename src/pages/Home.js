import "../../src/App.css";
import Button from "../components/Button/Button";
import Navbar from "../layout/NavBar/navbar";
import logo from "../assets/img/logo.svg";
import ItemListContainer from "../layout/ItemListContainer/ItemListContainer";

function Home() {
  return (
    <div className="App">
      <main className="App-header">
        <img src={logo} />
        <Button tittle="Shop now" />
      </main>
    </div>
  );
}
export default Home;

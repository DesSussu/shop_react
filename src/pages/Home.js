import "../pages/styles/Home.css";
import Button from "../components/Button/Button";
import logo from "../assets/img/logo.svg";

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

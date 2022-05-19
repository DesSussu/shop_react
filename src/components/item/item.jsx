import "../../App.css";
import Button from "../Button/Button";
const Item = (prod) => {
  <div className="container">
    return (
    <div key={prod.id} className="caja">
      <div className="interior"></div>
      <div className="images">
        <img src={prod.photo} />
      </div>
      <div className="nombreProducto">{prod.name}</div>
      <Button title="+ info" color="glitchDos" />
    </div>
    );
  </div>;
};

export default Item;

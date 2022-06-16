import { Link } from "react-router-dom";
import "../../App.css";
import Button from "../Button/Button";

const Item = ({ prod }) => {
  console.log(prod);
  return (
    <div className="container">
      <div key={prod.id} className="caja">
        <div className="interior"></div>
        <div className="images">
          <img src={prod.photo} />
        </div>
        <div className="nombreProducto">{prod.name}</div>
        <Link to={`/detail/${prod.id}`}>
          <Button title="+ info" color="glitchDos" />
        </Link>
      </div>
    </div>
  );
};

export default Item;

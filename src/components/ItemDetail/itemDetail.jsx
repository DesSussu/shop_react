import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "../ItemDetail/ItemDetail.css";
const ItemDetail = ({ producto }) => {
  const cartContext = useContext(CartContext);
  const { addToCart } = cartContext;

  return (
    <div className="containerDetail">
      <div className="detailPhoto">
        <img src={producto.photo} />
      </div>
      <div className="detailText">
        <h1>{producto.name}</h1>
        <h2>{producto.category}</h2>
        <p>{producto.price}</p>
        <ItemCount item={producto} onAdd={addToCart} />
      </div>
    </div>
  );
};

export default ItemDetail;

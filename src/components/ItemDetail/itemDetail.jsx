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
        <p>{producto.price} Euros</p>
        <p>{producto.stock} Unidades</p>
      </div>
      <ItemCount item={producto} onAdd={addToCart} />
    </div>
  );
};

export default ItemDetail;

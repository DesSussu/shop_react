import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ producto }) => {
  const cartContext = useContext(CartContext);
  const { addToCart } = cartContext;

  return (
    <div>
      <div>
        <img src={producto.photo} />
      </div>
      <div>
        <h1>{producto.name}</h1>
        <h2>{producto.categoria}</h2>
        <p>{producto.price}</p>
        <ItemCount item={producto} onAdd={addToCart} />
      </div>
    </div>
  );
};

export default ItemDetail;

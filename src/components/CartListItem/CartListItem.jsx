import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import "../CartListItem/CartListItem.css";
const CartListItem = () => {
  const cartContext = useContext(CartContext);
  const { cart, deteleCartById, deleteCart } = cartContext;
  console.log(cart);
  return (
    <div className="cartContainer">
      {cart ? (
        cart.map((product) => {
          return (
            <CartItem
              key={product.newItem.id}
              item={product.newItem}
              deleteCartById={deteleCartById}
            />
          );
        })
      ) : (
        <p>cargando </p>
      )}
      {cart.length ? (
        <button onClick={deleteCart} className="empty">
          Vaciar Carrito
        </button>
      ) : (
        <p className="cartEmpty">No hay productos </p>
      )}
    </div>
  );
};
export default CartListItem;

import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";

const CartListItem = () => {
  const cartContext = useContext(CartContext);
  const { cart, deteleCartById, deleteCart } = cartContext;
  console.log(cart);
  return (
    <div>
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
        <button onClick={deleteCart}>Vaciar Carrito</button>
      ) : (
        <p>No hay productos </p>
      )}
    </div>
  );
};
export default CartListItem;

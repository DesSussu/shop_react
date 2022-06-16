import React, { useContext } from "react";
import cartimg from "../../assets/img/cart.png";
import { CartContext } from "../../context/CartContext";
const CartWidget = () => {
  const cartContext = useContext(CartContext);
  const { cart } = cartContext;

  return (
    <div>
      <img src={cartimg} />

      <span> {cart.length}</span>
    </div>
  );
};
export default CartWidget;
